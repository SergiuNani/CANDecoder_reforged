import { UpdateStatisticsBasedOnMessage } from './CANopen'
import { CanLogStatistics } from './CANopen'
import { hexToDec, decToHex, hex2bin } from './NumberConversion'
import { FirmwareAdrresses_F514L } from '../data/FirmwareAddresses'
let firmwareAddressesDynamicArray = []

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
  // console.log(ExtractedArray) // bug
  return ExtractedArray
}
function getFirmwareAddressesIntoArray_RS232(fw) {
  var initialText = ``
  var resultingArray = []
  if ((fw = 'F514L')) {
    initialText = FirmwareAdrresses_F514L
  }
  initialText = initialText.split('\n')
  initialText.forEach((el) => {
    if (el != '') {
      var elSplitted = el.split(/\s+/g)
      var elSplittedFiltered = elSplitted.filter((el) => {
        return el != ''
      })
      resultingArray.push(elSplittedFiltered)
    }
  })

  firmwareAddressesDynamicArray = resultingArray
}

function getFirmwareAddress_RS232(searchAddy) {
  var result = firmwareAddressesDynamicArray.find((el) => {
    var address = el[2]
    if (address.slice(0, 3) == '@0x') address = address.slice(3)
    return address.toLowerCase() == searchAddy.toLowerCase()
  })

  if (result) {
    //result =["UINT","PCR","@0x0303",'maybeUnits']
    return result
  } else {
    if (searchAddy == '') {
      return [false, `${searchAddy}`, '-']
    } else return [false, `0x${searchAddy}`, '-']
  }
}

var PreviousMessageInfo_RS232_g = {
  msgNr: null,
  storedFutureSize: null
}
export function CreateDecodedArrayOfObjects_RS232(AllCAN_MsgsExtracted_array, setIsDrawerOpen) {
  console.log('--BB-- CreateDecodedArrayOfObjects_RS232')
  getFirmwareAddressesIntoArray_RS232('F514L') // BUg in the future add more options and make it dynamic
  getFirmwareAddress_RS232('0303')

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

  // console.log('🚀 ~  ResultingArray:', ResultingArray)
  // console.log(CanLogStatistics)
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
    OpCode = frameString.splice(0, 4).join('')
    var opCode_array = getOpCode_RS232(OpCode, frameString.join(''))
    if (AxisID_Destination == 'error') {
      Interpretation = 'Invalid AxisID, either the Group or Host info is wrong'
      errorStatus = 'error'
    }
    if (opCode_array[0] == 'error') {
      Interpretation = 'OpCode not recognized'
      errorStatus = 'error'
    }
    if (errorStatus != 'error') {
      AxisID = AxisID_Destination
      Data = opCode_array[1]
      Interpretation = opCode_array[2]
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

function getOpCode_RS232(opCode, data) {
  var firstByte = opCode.slice(0, 2)
  var lastByte = opCode.slice(2)
  var destinator = ''
  var sender = ''
  var memoryType = ''
  var temp = ''
  var temp2 = ''
  var temp3 = ''
  var mask = ''
  var firstByteDec = hexToDec(firstByte, 16)
  var lastByteDec = hexToDec(lastByte, 16)
  var opCodeDec = hexToDec(opCode, 32)
  var Interpretation
  var Data
  var rez = ''
  var errorStatus = ''
  var firstAddy = ''
  var secondAddy = ''

  var V16D = getFirmwareAddress_RS232(data.slice(0, 4))[1]
  var V16S = getFirmwareAddress_RS232(data.slice(4, 8))[1]
  var val16_1 = '0x' + data.slice(0, 4)
  var val16_1d = hexToDec(data.slice(0, 4), 16) + 'd'
  var val16_2 = '0x' + data.slice(4, 8)
  var val16_2d = hexToDec(data.slice(4, 8), 16) + 'd'

  var val32_1 = '0x' + data.slice(4, 8) + data.slice(0, 4)

  var val32_1d = hexToDec(data.slice(4, 8) + data.slice(0, 4), 16) + 'd'
  var val32_2 = '0x' + data.slice(8, 12) + data.slice(4, 8)
  var val32_2d = hexToDec(data.slice(8, 12) + data.slice(4, 8), 16) + 'd'

  switch (firstByte) {
    case '90':
      //Assignment
      firstAddy = data.slice(0, 4)
      destinator = getFirmwareAddress_RS232(firstAddy)[1]

      switch (lastByte) {
        case '14':
        case '04':
        case '05':
        case '15':
          secondAddy = data.slice(4, 8)
          if (lastByteDec & 0x10) {
            // sender is a pointer
            sender = getFirmwareAddress_RS232(secondAddy)[1]
          } else {
            //sender is a variable
            sender = data.slice(4)
            if (lastByteDec & 0x1) {
              sender = sender.slice(4, 8) + sender.slice(0, 4)
              rez = 32
            } else {
              rez = 16
            }

            secondAddy = sender
            sender = '0x' + sender + ` (${hexToDec(sender, rez)})`
          }
          Data = `0x${firstAddy},dm= 0x${secondAddy}`
          Interpretation = `${destinator},dm= ${sender}`
          break

        default:
          mask = lastByteDec & 0xc //1100
          if (mask == 0x8) {
            memoryType = 'SPI'
          } else if (mask == 0x4) {
            memoryType = 'DM'
          } else {
            memoryType = 'PM'
          }
          mask = lastByteDec & 0x1
          if (mask) {
            rez = 32
          } else rez = 16
          mask = lastByteDec & 0x80
          if (mask) temp = ''
          else temp = '+'
          if (lastByteDec & 0x10) {
            // sender is a pointer
            sender = getFirmwareAddress_RS232(data.slice(4, 8))[1]
            secondAddy = data.slice(4, 8)
          } else {
            //sender is a variable
            sender = data.slice(4)
            if (rez == 32) {
              sender = sender.slice(4, 8) + sender.slice(0, 4)
            }
            secondAddy = sender

            sender = '0x' + sender + ` (${hexToDec(sender, rez)})`
          }
          Data = `(${firstAddy}${temp}), ${memoryType} = ${secondAddy}`
          Interpretation = `(${destinator}${temp}), ${memoryType} = ${sender} `
          break
      }

      break
    case '91':
      firstAddy = data.slice(4, 8)
      secondAddy = data.slice(0, 4)
      destinator = getFirmwareAddress_RS232(firstAddy)[1]

      mask = lastByteDec & 0xc
      if (mask == 0x8) {
        memoryType = 'SPI'
      } else if (mask == 0x4) {
        memoryType = 'DM'
      } else {
        memoryType = 'PM'
      }

      sender = getFirmwareAddress_RS232(secondAddy)[1]

      if (lastByteDec & 0x80) {
        temp = ''
      } else temp = '+'
      if (lastByteDec & 0x1) {
        temp2 = '32'
      } else temp2 = '16'
      Data = `${firstAddy} =  (${secondAddy}${temp}), ${memoryType} `
      Interpretation = `${destinator}= (${sender}${temp}), ${memoryType} , ${temp2} bits`
      break
    case '89':
      firstAddy = data.slice(0, 4)
      destinator = getFirmwareAddress_RS232(firstAddy)[1]
      temp = lastByteDec & 0x1f

      if ((lastByteDec & 0x60) == 0x60) {
        secondAddy = data.slice(4, 8)
        sender = getFirmwareAddress_RS232(secondAddy)[1]
        Data = `${firstAddy} =  ${secondAddy}<< ${temp} `
        Interpretation = `${destinator}= ${sender}<< ${temp}, 32D = V16S left-shifted by ${temp}  `
      } else {
        if (lastByteDec & 0x10) {
          //shifting with more than 15 bits
          errorStatus = 'error'
        }
        if (lastByteDec & 0x20) {
          Data = `${firstAddy}  <<= ${temp} `
          Interpretation = `${destinator}<<= ${temp} [32D] `
        } else {
          Data = `${firstAddy}  >>= ${temp} `
          Interpretation = `${destinator}>>= ${temp} [32D] `
        }
      }

      break
    case '88':
      firstAddy = data.slice(0, 4)
      destinator = getFirmwareAddress_RS232(firstAddy)[1]
      temp = lastByteDec & 0xf
      temp2 = lastByteDec & 0xf0
      if (temp2 == 0xa0) {
        Data = `PROD  <<= ${temp} `
        Interpretation = `PROD <<= ${temp} [16D] `
      } else if (temp2 == 0x80) {
        Data = `PROD  >>= ${temp} `
        Interpretation = `PROD >>= ${temp} [16D] `
      } else if (temp2 == 0x20) {
        Data = `${firstAddy}  <<= ${temp} `
        Interpretation = `${destinator} <<= ${temp} [16D] `
      } else if (temp2 == 0x00) {
        Data = `${firstAddy}  >>= ${temp} `
        Interpretation = `${destinator} >>= ${temp} [16D] `
      }
      break
    case '8C':
    case '8D':
      firstAddy = data.slice(0, 4)
      destinator = getFirmwareAddress_RS232(firstAddy)[1]
      temp = lastByteDec & 0xf
      secondAddy = data.slice(4, 8)
      sender = getFirmwareAddress_RS232(secondAddy)[1]
      temp2 = lastByteDec & 0xf0
      if (firstByteDec & 0x1) {
        temp3 = '32D'
      } else {
        temp3 = '16D'
      }
      if (temp2 == 0xa0) {
        Data = `${firstAddy} * ${secondAddy}  << ${temp} `
        Interpretation = `${destinator}* ${sender}  << ${temp}   [${temp3}-16S] `
      } else if (temp2 == 0x80) {
        Data = `${firstAddy} * ${secondAddy}  >> ${temp} `
        Interpretation = `${destinator}* ${sender}  >> ${temp}   [${temp3}-16S] `
      } else if (temp2 == 0x20) {
        Data = `${firstAddy} * ${secondAddy}  << ${temp} `
        Interpretation = `${destinator}* 0x${secondAddy}  << ${temp} [${temp3}-val16], (0x${secondAddy} = ${hexToDec(
          secondAddy,
          16
        )}) `
      } else if (temp2 == 0x00) {
        Data = `${firstAddy} * ${secondAddy}  >> ${temp} `
        Interpretation = `${destinator}* 0x${secondAddy}  >> ${temp} [${temp3}-val16], (0x${secondAddy} = ${hexToDec(
          secondAddy,
          16
        )}) `
      }
      break

    case '5C':
      firstAddy = data.slice(0, 4)
      destinator = getFirmwareAddress_RS232(firstAddy)[1]
      if (lastByteDec != 0) {
        errorStatus = 'error'
      }
      temp = data.slice(4, 8)
      temp2 = data.slice(8, 12)
      Data = `SRB ${firstAddy}, 0x${temp}, 0x${temp2} `
      Interpretation = `Set / Reset Bits  "${destinator}" , AND_mask: 0x${temp}, OR_mask: 0x${temp2} `
      break
    case 'DC':
      if (lastByteDec == 0x01) {
        firstAddy = data.slice(0, 4)
        destinator = getFirmwareAddress_RS232(firstAddy)[1]
        secondAddy = data.slice(4, 8)
        sender = getFirmwareAddress_RS232(secondAddy)[1]
        Data = `${firstAddy} /= ${secondAddy}  `
        Interpretation = `${destinator} /= ${sender} [V32/V16] `
      } else {
        errorStatus = 'error'
      }
      break
    case '04':
      switch (lastByte) {
        case '04':
          Data = 'RET'
          Interpretation = 'Return from TML function'
          break
        case '08':
          Data = 'WAIT!'
          Interpretation = 'Wait until event occurs'
          break
        case '10':
          Data = 'DINT'
          Interpretation = 'Disable TML Interrupts '
          break
        case '02':
          Data = 'RESET'
          Interpretation = 'Reset DSP controller'
          break
        case 'A0':
          Data = 'DIS2CAPI'
          Interpretation = 'Disable 2nd CAPI capture'
          break
        case '81':
          Data = 'DISCAPI'
          Interpretation = 'Disable CAPI capture'
          break

        case '20':
          Data = 'EN2CAPI0'
          Interpretation = 'Enable 2nd CAPI capture for 1->0'
          break
        case '01':
          Data = 'ENCAPI0'
          Interpretation = 'Enable CAPI capture for 1->0 '
          break
        default:
          errorStatus = 'error'
          break
      }

      break
    case '05':
      switch (lastByte) {
        case '04':
          Data = 'RETI'
          Interpretation = 'Return from TML Interrupt SR '
          break
        case '10':
          Data = 'EINT'
          Interpretation = 'Enable TML Interrupts  '
          break

        case '20':
          Data = 'EN2CAPI1'
          Interpretation = 'Enable 2nd CAPI capture for 0->1'
          break
        case '01':
          Data = 'ENCAPI1'
          Interpretation = 'Enable CAPI capture for 0->1 '
          break
        default:
          errorStatus = 'error'
          break
      }

      break

    case '59':
      if (lastByte == '09') {
        temp = data.slice(0, 4)
        temp2 = data.slice(4, 8)

        const modeMappings = {
          B7C68706: { Data: 'MODE CS', Int: 'Set MODE Cam Slave' },
          B7C58705: { Data: 'MODE GS', Int: 'Set MODE Gear Slave' },
          BFC28702: { Data: 'MODE PC', Int: 'MODE Position Contouring' },
          BFC18701: { Data: 'MODE PP', Int: 'MODE Position Profile' },
          FFC18707: { Data: 'MODE PSC', Int: 'MODE S-Curve' },
          FFC0870A: { Data: 'MODE PT', Int: 'MODE Position Time' },
          FFC18709: { Data: 'MODE PVT', Int: 'MODE Position Velocity Time' },
          BBC28302: { Data: 'MODE SC', Int: 'MODE Speed Contouring' },
          B3C08300: { Data: 'MODE SE', Int: 'MODE Speed External' },
          BBC18301: { Data: 'MODE SP', Int: 'MODE Speed Profile' },
          B1C38103: { Data: 'MODE TC', Int: 'MODE Torque Contouring' },
          B1E08120: { Data: 'MODE TEF', Int: 'MODE Torque External Fast loop' },
          B1C08100: { Data: 'MODE TES', Int: 'MODE Torque External Slow loop' },
          B1C88108: { Data: 'MODE TT', Int: 'MODE Torque Test' },
          B0C38003: { Data: 'MODE VC', Int: 'MODE Voltage Contouring' },
          B0C08000: { Data: 'MODE VES', Int: 'MODE Voltage External Slow loop' },
          B0C88008: { Data: 'MODE VT', Int: 'MODE Voltage Test' },
          FFFF2000: { Data: 'CPA', Int: 'Command Position is Absolute' },
          DFFF0000: { Data: 'CPR', Int: 'Command Position is Relative' },
          FF3F0000: {
            Data: 'EXTREF 0',
            Int: 'External Reference read from ONLINE EREF'
          },
          FF7F0040: { Data: 'EXTREF 1', Int: 'External Reference read from ANALOGUE' },
          FFBF0080: { Data: 'EXTREF 2', Int: 'External Reference read from DIGITAL' },
          EFFF0000: { Data: 'REG_OFF', Int: 'Registration mode disabled ' },
          FFFF1000: { Data: 'REG_ON', Int: 'Registration mode enabled ' },
          F7FF0000: { Data: 'RGM', Int: 'Reset axis as Gear/Cam Master' },
          FFFF0800: { Data: 'SGM', Int: 'Set axis as Gear/Cam Master' },
          BFFF0000: { Data: 'TUM0', Int: 'Set Target Update Mode 0' },
          FFFF4000: { Data: 'TUM1', Int: 'Set Target Update Mode 1' }
        }
        temp = temp + temp2
        if (modeMappings[temp]) {
          Data = modeMappings[temp].Data
          Interpretation = modeMappings[temp].Int
          // temp2 = modeMappings[temp].temp2
        }
      } else {
        // The opCode needs to be 5909 but there is a chance this msg is short address of SRB
        temp = firstByteDec & 0x0c // 0000 1100
        if (firstByteDec & 0x02) temp2 = 0x800
        else temp2 = 0x200
        temp3 = opCodeDec & 0x01ff
        temp3 = temp3 + temp2
        if ((temp3 >= 0x200 && temp3 <= 0x3ff) || (temp3 >= 0x800 && temp3 <= 0x9ff)) {
          firstAddy = decToHex(temp3, 32).padStart(4, '0')
          destinator = getFirmwareAddress_RS232(firstAddy)[1]
          Data = `SRB 0x${firstAddy}, 0x${data.slice(0, 4)}, 0x${data.slice(4, 8)}`
          Interpretation = `SRB 0x${destinator},AND: 0x${data.slice(0, 4)}, OR: 0x${data.slice(
            4,
            8
          )}`
        } else {
          errorStatus = 'error'
        }
      }

      break

    case '70':
      firstAddy = data.slice(8, 12) + data.slice(4, 8)
      destinator = getFirmwareAddress_RS232(firstAddy)[1]
      temp = data.slice(0, 4)
      temp2 = hexToDec(firstAddy, 32)
      switch (lastByte) {
        case '92':
          if (temp == '0228') {
            Data = `!ALPO 0x${firstAddy}`
            Interpretation = `! if Absolute Load Position Over val32= 0x${firstAddy} =  ${temp2}`
          } else if (temp == '0988') {
            Data = `!AMPO 0x${firstAddy}`
            Interpretation = `! if Absolute Motor Position Over val32= 0x${firstAddy} =  ${temp2}`
          }

          break
        case '83':
          if (temp == '0228') {
            Data = `!ALPU ${firstAddy}`
            Interpretation = `! if Absolute Load Position Under val32= 0x${firstAddy} =  ${temp2}`
          } else if (temp == '0988') {
            Data = `!AMPU ${firstAddy}`
            Interpretation = `! if Absolute Motor Position Under val32= 0x${firstAddy} =  ${temp2}`
          }

          break
        case '98':
          if (temp == '02C0') {
            Data = `!AT 0x${firstAddy}`
            Interpretation = `! if Absolute Time >= Val32 => 0x${firstAddy} =  ${temp2} `
          }

          break
        case '0E':
          Data = `!CAP `
          Interpretation = `! if Capture triggered`

          break
        case 'DB':
          var position = 15 - hex2bin(temp, 16).lastIndexOf('1')
          Data = `!IN#${position} 0`
          Interpretation = `! if Input #${position} is 0`

          break
        case 'DA':
          var position = 15 - hex2bin(temp, 16).lastIndexOf('1')
          Data = `!IN#${position} 1`
          Interpretation = `! if Input #${position} is 1`

          break

        case '0C':
          Data = `!LSN`
          Interpretation = `! if Limit Switch Negative active`

          break
        case '0D':
          Data = `!LSP`
          Interpretation = `! if Limit Switch Positive active`

          break
        case '0F':
          Data = `!MC`
          Interpretation = `!(set event) if Motion Complete `

          break

        case '90':
          temp = data.slice(0, 4)
          temp2 = data.slice(8, 12) + data.slice(4, 8)
          if (temp == '02AE') {
            Data = `!RO 0x${temp2} `
            Interpretation = `! if Reference Over val32 = 0x${temp2} = ${hexToDec(
              temp2,
              32
            )}, reference can be P/S/T`
          } else {
            temp = data.slice(0, 4)
            destinator = getFirmwareAddress_RS232(temp)[1]
            temp2 = data.slice(8, 12) + data.slice(4, 8)
            Data = `!VO 0x${temp}, 0x${temp2} `
            Interpretation = `! if ${destinator} over 0x${temp2} = ${hexToDec(
              temp2,
              32
            )}d  [V32A, val32]`
          }
          break
        case '94':
          temp = data.slice(0, 4)
          temp2 = data.slice(8, 12) + data.slice(4, 8)
          if (temp == '02BA') {
            Data = `!RPO/ !RLPO  0x${temp2} `
            Interpretation = `! if Relative Position Over val32  = 0x${temp2} = ${hexToDec(
              temp2,
              32
            )}`
          } else if (temp == '0988') {
            Data = `!RMPO 0x${temp2} `
            Interpretation = `! if Relative Motor Position Over val32  = 0x${temp2} = ${hexToDec(
              temp2,
              32
            )}`
          }

          break

        case '85':
          temp = data.slice(0, 4)
          temp2 = data.slice(8, 12) + data.slice(4, 8)
          if (temp == '02BA') {
            Data = `!RPU/ !RLPU  0x${temp2} `
            Interpretation = `! if Relative Position Under val32  = 0x${temp2} = ${hexToDec(
              temp2,
              32
            )}`
          } else if (temp == '0988') {
            Data = `!RMPU 0x${temp2} `
            Interpretation = `! if Relative Motor Position Under val32  = 0x${temp2} = ${hexToDec(
              temp2,
              32
            )}`
          }

          break

        case 'B9':
          temp = data.slice(0, 4)
          temp2 = data.slice(8, 12) + data.slice(4, 8)
          temp3 = hexToDec(temp2, 32)
          if (temp == '02C2') {
            Data = `!RT 0x${temp2}  `
            Interpretation = `! if Relative Time >= 0x${temp2}  [val32]`
          }
          break
        case '81':
          temp = data.slice(0, 4)
          temp2 = data.slice(8, 12) + data.slice(4, 8)
          temp3 = hexToDec(temp2, 32)
          if (temp == '02AE') {
            Data = `!RU/!SRU/!PRU/!TRU 0x${temp2}  `
            Interpretation = `! if Position Reference Under 0x${temp2} = ${temp3}d  [val32]`
          } else {
            temp = data.slice(0, 4)
            destinator = getFirmwareAddress_RS232(temp)[1]
            temp2 = data.slice(8, 12) + data.slice(4, 8)
            Data = `!VU 0x${temp}, 0x${temp2} `
            Interpretation = `! if ${destinator} under 0x${temp2} = ${hexToDec(
              temp2,
              32
            )}d  [V32A, val32]`
          }
          break

        case '96':
          temp = data.slice(0, 4)
          temp2 = data.slice(8, 12) + data.slice(4, 8)
          temp3 = hexToDec(temp2, 32)
          if (temp == '098A') {
            Data = `!LSO 0x${temp2}  `
            Interpretation = `! if Load Speed Over 0x${temp2} = ${temp3}d   [val32]`
          } else if (temp == '022C') {
            Data = `!MSO 0x${temp2}  `
            Interpretation = `! if Motor Speed Over 0x${temp2} = ${temp3}d   [val32]`
          }
          break

        case '87':
          temp = data.slice(0, 4)
          temp2 = data.slice(8, 12) + data.slice(4, 8)
          temp3 = hexToDec(temp2, 32)
          if (temp == '098A') {
            Data = `!LSU 0x${temp2}  `
            Interpretation = `! if Load Speed Under 0x${temp2} = ${temp3}d   [val32]`
          } else if (temp == '022C') {
            Data = `!MSU 0x${temp2}  `
            Interpretation = `! if Motor Speed Under 0x${temp2} = ${temp3}d   [val32]`
          }
          break
      }
      break

    case '71':
      firstAddy = data.slice(4, 8)
      destinator = getFirmwareAddress_RS232(firstAddy)[1]
      temp = data.slice(0, 4)
      switch (lastByte) {
        case '92':
          if (temp == '0228') {
            Data = `!ALPO ${firstAddy}`
            Interpretation = `! if Absolute Load Position Over =>  !ALPO ${destinator} [&32]`
          } else if (temp == '0988') {
            Data = `!AMPO ${firstAddy}`
            Interpretation = `! if Absolute Motor Position Over =>  !AMPO ${destinator} [&32]`
          }
          break
        case '83':
          if (temp == '0228') {
            Data = `!ALPU ${firstAddy}`
            Interpretation = `! if Absolute Load Position Under =>  !ALPU ${destinator} [&32]`
          } else if (temp == '0988') {
            Data = `!AMPU ${firstAddy}`
            Interpretation = `! if Absolute Motor Position Under =>  !AMPU ${destinator} [&32]`
          }
          break
        case '98':
          if (temp == '02C0') {
            Data = `!AT ${firstAddy}`
            Interpretation = `! if Absolute Time >= V32 =>  !AT ${destinator} [&32]`
          }

          break

        case '90':
          temp = data.slice(0, 4)
          firstAddy = data.slice(4, 8)
          destinator = getFirmwareAddress_RS232(firstAddy)[1]
          if (temp == '02AE') {
            Data = `!RO  ${firstAddy} `
            Interpretation = ` if Reference Over V32 => !RO ${destinator} [&32], reference can be P/S/T`
          } else {
            temp = data.slice(0, 4)
            destinator = getFirmwareAddress_RS232(temp)[1]
            temp2 = data.slice(4, 8)
            sender = getFirmwareAddress_RS232(temp2)[1]
            Data = `!VO 0x${temp}, 0x${temp2} `
            Interpretation = `! if ${destinator} over ${sender}  [V32A, V32B]`
          }
          break

        case '94':
          temp = data.slice(0, 4)
          firstAddy = data.slice(4, 8)
          destinator = getFirmwareAddress_RS232(firstAddy)[1]
          if (temp == '02BA') {
            Data = `!RPO/!RLPO 0x${firstAddy} `
            Interpretation = `! if Relative Position Over V32 => !RPO/!RLPO ${destinator} [&32]`
          } else if (temp == '0988') {
            Data = `!RMPO 0x${firstAddy} `
            Interpretation = `! if Relative Motor Position Over V32 => !RMPO ${destinator} [&32]`
          }
          break
        case '85':
          temp = data.slice(0, 4)
          firstAddy = data.slice(4, 8)
          destinator = getFirmwareAddress_RS232(firstAddy)[1]
          if (temp == '02BA') {
            Data = `!RPU/!RLPU 0x${firstAddy} `
            Interpretation = `! if Relative Position Under V32 => !RPU/!RLPU ${destinator} [&32]`
          } else if (temp == '0988') {
            Data = `!RMPU 0x${firstAddy} `
            Interpretation = `! if Relative Motor Position Under V32 => !RMPU ${destinator} [&32]`
          }
          break
        case 'B9':
          temp = data.slice(0, 4)
          if (temp == '02C2') {
            firstAddy = data.slice(4, 8)
            destinator = getFirmwareAddress_RS232(firstAddy)[1]
            Data = `!RT ${firstAddy}  `
            Interpretation = `! if Relative Time >= ${destinator}  [V32]`
          }

          break

        case '81':
          temp = data.slice(0, 4)
          if (temp == '02AE') {
            firstAddy = data.slice(4, 8)
            destinator = getFirmwareAddress_RS232(firstAddy)[1]
            Data = `!RU/!SRU/!PRU/!TRU  ${firstAddy}  `
            Interpretation = `! if Reference Under ${destinator}  [V32]`
          } else {
            temp = data.slice(0, 4)
            destinator = getFirmwareAddress_RS232(temp)[1]
            temp2 = data.slice(4, 8)
            sender = getFirmwareAddress_RS232(temp2)[1]
            Data = `!VU 0x${temp}, 0x${temp2} `
            Interpretation = `! if ${destinator} under ${sender}  [V32A, V32B]`
          }

          break

        case '96':
          temp = data.slice(0, 4)
          firstAddy = data.slice(4, 8)
          destinator = getFirmwareAddress_RS232(firstAddy)[1]
          if (temp == '098A') {
            Data = `!LSO  0x${firstAddy}  `
            Interpretation = `! if Load Speed Over ${destinator}  [V32]`
          } else if (temp == '022C') {
            Data = `!MSO  0x${firstAddy}  `
            Interpretation = `! if Motor Speed Over ${destinator}  [V32]`
          }

          break
        case '87':
          temp = data.slice(0, 4)
          firstAddy = data.slice(4, 8)
          destinator = getFirmwareAddress_RS232(firstAddy)[1]
          if (temp == '098A') {
            Data = `!LSU  0x${firstAddy}  `
            Interpretation = `! if Load Speed Under ${destinator}  [V32]`
          } else if (temp == '022C') {
            Data = `!MSU  0x${firstAddy}  `
            Interpretation = `! if Motor Speed Under ${destinator}  [V32]`
          }

          break
      }
      break

    case '1C':
      switch (lastByte) {
        case '02':
          Data = `ABORT`
          Interpretation = `Abort function execution `
          break
        case '01':
          temp = data.slice(0, 4)
          Data = `CALLS Label 0x${temp}`
          Interpretation = `Cancelable CALL with address set in Label 0x${temp}`

          break
        case '04':
          Data = `FAULTR`
          Interpretation = `Reset drive fault state `

          break
        case '08':
          Data = `SAVE`
          Interpretation = `Save setup table in E2ROM`

          break
      }

      break

    case '76':
      firstAddy = data.slice(0, 4)
      destinator = getFirmwareAddress_RS232(firstAddy)[1]

      if (lastByte == '01') {
        Data = `CALL V16 0x${firstAddy}`
        Interpretation = `Uncoditional CALL with address set in ${destinator}`
      } else if (lastByte == '00') {
        Data = `GOTO 0x${firstAddy}`
        Interpretation = `Unconditional GOTO with address set in ${destinator}`
      }

      break

    case '74':
    case '75':
      temp = lastByteDec & 0xfe
      switch (temp) {
        case 0x90:
          temp2 = ', LT'
          break
        case 0x88:
          temp2 = ', LEQ'
          break
        case 0xc0:
          temp2 = ', EQ'
          break
        case 0xa0:
          temp2 = ', NEQ'
          break
        case 0x84:
          temp2 = ', GT'
          break
        case 0x82:
          temp2 = ', GEQ'
          break
        default:
          temp2 = ''
          break
      }
      if (temp2 == '') {
        firstAddy = data.slice(0, 4)
        destinator = getFirmwareAddress_RS232(firstAddy)[1]
      } else {
        //+flag
        firstAddy = data.slice(4, 8)
        destinator = getFirmwareAddress_RS232(firstAddy)[1]
        secondAddy = data.slice(0, 4)
        sender = ', ' + getFirmwareAddress_RS232(secondAddy)[1] + `${temp2}`
        secondAddy = ', 0x' + secondAddy + `${temp2}`
      }

      if (lastByteDec & 0x1) {
        //CALL
        Data = `CALL 0x${firstAddy} ${secondAddy}`
        Interpretation = `Unconditional CALL with address set in ${destinator} ${sender}`
      } else {
        //GOTO
        Data = `GOTO 0x${firstAddy} ${secondAddy}`
        Interpretation = `Unconditional GOTO to label ${destinator} ${sender}`
      }

      break
    case '1E':
      if (lastByte == '01') {
        firstAddy = data.slice(0, 4)
        destinator = getFirmwareAddress_RS232(firstAddy)[1]
        Data = `CALLS 0x${firstAddy} `
        Interpretation = `Cancelable CALL with address set in var ${destinator} `
      }
      break

    case '06':
      temp = data.slice(4, 8) + data.slice(0, 4)
      Data = `WAIT! 0x${temp}`
      Interpretation = `Wait until event occurs, but exit if Time > 0x${temp} = ${hexToDec(
        temp,
        32
      )}`

      break

    default:
      var nibbleCase = parseInt(firstByte.slice(0, 1))
      if ([2, 3, 4, 5, 8, 7].includes(nibbleCase)) {
        //Potential short addressing
        temp = firstByteDec & 0x0c // 0000 1100

        if (firstByteDec & 0x02) temp2 = 0x800
        else temp2 = 0x200

        temp3 = opCodeDec & 0x01ff

        if (data.length == 8) {
          secondAddy = '0x' + data.slice(4, 8) + data.slice(0, 4)
          sender = secondAddy
        } else {
          secondAddy = data.slice(0, 4)
          sender = getFirmwareAddress_RS232(secondAddy)[1]
          if (secondAddy.slice(0, 2) != '0x' && secondAddy != '') {
            secondAddy = '0x' + secondAddy
          }
        }
        firstAddy = decToHex(temp3 + temp2, 32).padStart(4, '0')
        destinator = getFirmwareAddress_RS232(firstAddy)[1]
        firstAddy = '0x' + firstAddy
        var startStr = ''
        var startSt2 = ''
        if (temp == 0x00) {
          //2000 2200
          if (nibbleCase == 2) {
            rez = '[V16D = val16/TML label]'
            mask = '='
          } else if (nibbleCase == 3) {
            rez = '[V16D = -V16S]'
            mask = '= -'
          } else if (nibbleCase == 4) {
            rez = '[V16D += V16S]'
            mask = '+='
          } else if (nibbleCase == 5) {
            rez = '[V16D -= V16S]'
            mask = '-='
          } else if (nibbleCase == 8) {
            rez = '[V32]'
            mask = ''
            startStr = 'SAP'
            startSt2 = 'Set Actual Position'
          }
        } else if (temp == 0x04) {
          if (nibbleCase == 2) {
            rez = '[V32 = val32]'
            mask = '='
          } else if (nibbleCase == 3) {
            rez = '[V32D = -V32S]'
            mask = '= -'
          } else if (nibbleCase == 4) {
            rez = '[V32D += V32S ]'
            mask = '+='
          } else if (nibbleCase == 5) {
            rez = '[V32D -= V32S ]'
            mask = '-='
          }
        } else if (temp == 0x08) {
          //2800 2A00

          if (nibbleCase == 2) {
            rez = '[V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]'
            mask = '='
          } else if (nibbleCase == 3) {
            rez = '[V16 += val16 ]'
            mask = '+='
          } else if (nibbleCase == 4) {
            rez = '[V16 -= val16]'
            mask = '-='
          }
        } else if (temp == 0x0c) {
          //2C00 2E00
          if (nibbleCase == 2) {
            rez = '[V32D = V32S]'
            mask = '='
          } else if (nibbleCase == 3) {
            rez = '[V32 += val32 ]'
            mask = '+='
          } else if (nibbleCase == 4) {
            rez = '[V32 -= val32]'
            mask = '-='
          } else if (nibbleCase == 7) {
            startStr = 'SEG'
            startSt2 = 'Segment'
            rez = '[V16, V32]'
            mask = ','
          }
        }

        Data = `${startStr} ${firstAddy} ${mask} ${secondAddy}`
        Interpretation = `${startSt2} ${destinator} ${mask} ${sender} -- ${rez}`
      } else {
        errorStatus = 'error'
      }
      break
  }
  return [errorStatus, Data, Interpretation]
}
