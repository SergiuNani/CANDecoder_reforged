import { UpdateStatisticsBasedOnMessage } from './CANopen'
import { CanLogStatistics } from './CANopen'
import { hexToDec, decToHex, hex2bin } from './NumberConversion'

export function Extract_MSGs_from_text_RS232(text) {
  console.log('--AA-- Extract_MSGs_from_text_RS232')

  const hexPattern = /^(0x)?[0-9a-f]+$/gi
  var ExtractedArray = text.map((row, index) => {
    var rowSplitted = row.split(' ')
    rowSplitted = rowSplitted.filter(function (el) {
      return (
        el != null &&
        el != '' &&
        el != ' ' &&
        ((el.match(hexPattern) && el.length == 2) ||
          el.toLowerCase() == 'read' ||
          el.toLowerCase() == 'write')
      )
    })
    var indexType = rowSplitted.findIndex((el) => {
      return el.toLowerCase() == 'read' || el.toLowerCase() == 'write'
    })
    var type
    if (indexType != -1) {
      type = rowSplitted[indexType]
      rowSplitted = rowSplitted.slice(indexType + 1)
    } else {
      if (rowSplitted.length == 0) type = 'xx'
      else type = 'RW=?'
    }
    var message = rowSplitted.join('')
    return [index + 1, row, type, message, rowSplitted]
  })
  console.log(ExtractedArray) // bug
  return ExtractedArray
}

var PreviousMessageInfo_RS232_g = {
  msgNr: null,
  storedFutureSize: null
}
export function CreateDecodedArrayOfObjects_RS232(AllCAN_MsgsExtracted_array, setIsDrawerOpen) {
  console.log('--BB-- CreateDecodedArrayOfObjects_RS232')
  var arr = AllCAN_MsgsExtracted_array
  var ResultingArray = []
  for (let index = 0; index < arr.length; index++) {
    let row = arr[index]
    var type = row[2]
    var messageString = row[3].toUpperCase()
    var msgNr = row[0]
    //Handle Empty Lines
    if (row[1] == '') {
      row[2] = 'Empty'
      row[3] = 'Line'
      UpdateStatisticsBasedOnMessage('All', '-')
      createObject(row[0], row[1], row[2], row[3], false, '-')
      continue
    }
    var aux_CobID = ['AxisID', 'type_RS232'] //function here
    var DecodedMessage = DecodeOneRS232_msg(msgNr, type, messageString)

    UpdateStatisticsBasedOnMessage(aux_CobID[1], aux_CobID[2])

    createObject(
      msgNr, //Message NR
      row[1], //OriginalMsg
      type, //CobID
      row[3], //Message
      type, //type
      DecodedMessage[0], //AxisID
      DecodedMessage[1], //CS
      DecodedMessage[2], //Object
      DecodedMessage[3], //ObjName
      DecodedMessage[4], //Data
      DecodedMessage[5], //Interpretation
      DecodedMessage[6] //Error
    )
  }

  function createObject(
    msgNr,
    OriginalMessage,
    CobID,
    FrameData,
    type,
    AxisID,
    CS,
    Object,
    ObjectName,
    Data,
    Interpretation,
    errorStatus
  ) {
    var newObj = {
      msgNr: msgNr || '-',
      OriginalMessage: OriginalMessage || '-',
      CobID: CobID || '-',
      FrameData: FrameData || '-',
      type: type || '-',
      AxisID: AxisID ? AxisID : '-',
      CS: CS || '-',
      Object: Object || '-',
      ObjectName: ObjectName || '-',
      Data: Data || '-',
      Interpretation: Interpretation || '-',
      errorStatus: errorStatus || '-'
    }

    ResultingArray.push(newObj)
  }
  if (!(AllCAN_MsgsExtracted_array.length == 1 && AllCAN_MsgsExtracted_array[0][2] == 'Empty')) {
    //Because the first time the page is loaded it thinks the first empty line is a message and tries to decode it
    setIsDrawerOpen(true)
  }

  console.log('🚀 ~  ResultingArray:', ResultingArray)
  console.log(CanLogStatistics)
  return ResultingArray
}

function DecodeOneRS232_msg(msgNr, type, messageString) {
  var AxisID = '-'
  var OpCode = '-'
  var Object = '-'
  var ObjectName = '-'
  var Data = '-'
  var Interpretation = '-'
  var errorStatus = '-'
  var frameString = ''

  if (messageString.length == 0) {
    //Invalid Message
    ObjectName = 'Can`t extract data from this row'
    Interpretation = 'Invalid Message'
    errorStatus = 'error'
  } else if (messageString.length == 2) {
    //SYNC , ACK, message Length etc...
    var messageDec = hexToDec(messageString, 16)
    if (messageDec < 13) {
      ObjectName = 'Length'
      Interpretation = `Next message = ${messageDec} bytes`
      PreviousMessageInfo_RS232_g.msgNr = msgNr
      PreviousMessageInfo_RS232_g.storedFutureSize = messageString
    } else if (messageDec >= 13 && messageDec <= 15) {
      Interpretation = 'SYNC response'
    } else if (messageDec == 255) {
      //FF
      Interpretation = 'SYNC'
    } else if (messageDec == 79) {
      //4F -OK
      Interpretation = 'OK'
    } else {
      Interpretation = 'unknown'
      errorStatus = 'error'
    }
  } else {
    var potentialLength = hexToDec(messageString.slice(0, 2), 8) //nr of bytes
    var historyLength = hexToDec(PreviousMessageInfo_RS232_g.storedFutureSize, 8)
    var historyMsgNr = PreviousMessageInfo_RS232_g.msgNr
    //Check errors with length ===
    if (potentialLength != messageString.length / 2 - 2) {
      // First byte of the message is not the length of the message
      if (historyLength != messageString.length / 2 - 1) {
        // even the length of the pervious message is not the length of the current message
        ObjectName = `Fist byte ${potentialLength} and history length ${historyLength} don't match`
        Interpretation = 'Message length doesn`t match'
        errorStatus = 'error'
      } else {
        //Prev message is the length
        frameString = messageString
        potentialLength = historyLength
      }
    } else {
      //Additional check to see that perhaps the first byte was not the length
      if (historyLength == potentialLength && historyMsgNr == msgNr - 1) {
        frameString = messageString
        potentialLength = historyLength
      } else {
        frameString = messageString.slice(2)
      }
    }

    if (errorStatus != 'error') {
      //Check errors with Checksum ===
      var messageToCheck = frameString.slice(0, frameString.length - 2)
      var checksum = hexToDec(frameString.slice(frameString.length - 2), 16)
      var sum = 0
      messageToCheck = messageToCheck.match(/.{1,2}/g)
      messageToCheck.forEach((el) => {
        sum += hexToDec(el, 16)
      })
      sum += potentialLength
      sum = sum % 256
      if (checksum != sum) {
        ObjectName = `Checksum ${checksum} and calculated ${sum} don't match`
        Interpretation = 'Checksum doesn`t match'
        errorStatus = 'error'
      } else {
        frameString = messageToCheck.join('')
      }
    }
    // =====================================================================================================
    frameString = frameString.split('')
    var AxisID_Destination = frameString.splice(0, 4)
    AxisID_Destination = getAxisID_RS232(AxisID_Destination)
    OpCode = frameString.splice(0, 4)
    var opCode_array = getopCode_RS232(OpCode)
    if (AxisID_Destination == 'error') {
      Interpretation = 'Invalid AxisID, either the Group or Host info is wrong'
      errorStatus = 'error'
    }

    if (errorStatus != 'error') {
      AxisID = AxisID_Destination
      Data = frameString.join('')
    }
  }
  return [AxisID, OpCode, Object, ObjectName, Data, Interpretation, errorStatus]
}

function getAxisID_RS232(hex) {
  let codeDec = hexToDec(hex.join(''), 32)

  if (codeDec & 0xe00e || (codeDec & 0x1001) == 0x1001 || codeDec == 0) {
    // reserved bits are set
    return 'error'
  }
  var axisID = (codeDec >> 4) & 0xff
  if (axisID == 0 && codeDec != 0x1000) {
    return 'error'
  }
  if (codeDec & 0x1000) {
    //Group
    var array = []
    for (let i = 0; i < 8; i++) {
      if (axisID & (1 << i)) {
        array.push(`G${i + 1}`)
      }
    }
    if (axisID == 0) {
      //Broadcast
      return 'All'
    }
    return array.join(',')
  } else {
    if (codeDec & 0x0001) {
      return `H${axisID}`
    } else {
      return axisID
    }
  }
}

function getopCode_RS232(opCode) {
  return [opCode, 'opCodeName']
}
