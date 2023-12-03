import { filterHex, hexToDec, addSpacesOfTwo } from './NumberConversion'
import {
  DecodeSDO,
  DecodeEMCY,
  DecodeNMT,
  DecodeNMT_Monitoring,
  DecodeSYNC,
  ObjectValuesSaved_global
} from './CANopenFunctions'
import { DecodeTCANglobal } from './TechnoCAN'
import { MessagesDecoded_ArrayOfObjects } from '../scenes/Decode_CAN_LOG'
import { DecodeOnePDOmsg, PDO_mapped } from './CANopenFunctions'
import { globalIndex } from '../scenes/Decode_CAN_LOG'
import { Mapping_objects_array } from '../data/SmallData'

export let CanLogStatistics = [] // array of all the axes

export function CobID_who_dis(cob_id) {
  cob_id = cob_id.toUpperCase()
  var axis_id = 0
  var aux
  if (cob_id.slice(0, 2).toUpperCase() == '0X') {
    cob_id = cob_id.slice(2)
  }

  var temp = cob_id
  if (temp.length > 3) {
    var uselessString = temp.slice(0, temp.length - 3)
    for (var j = 0; j < uselessString.length; j++) {
      if (uselessString[j] != '0') {
        return ['invalid', 'invalid', 'invalid']
      }
    }
    cob_id = temp.slice(temp.length - 3, temp.length)
  }
  temp = filterHex(cob_id, 16)
  if (cob_id != temp) {
    //if letters are passed as cobid
    return ['invalid', 'invalid', 'invalid']
  }
  cob_id = hexToDec(cob_id, 16)

  if (cob_id == 0) {
    return (aux = ['NMT', '-', 'NMT'])
  }
  if (cob_id >= 1 && cob_id <= 31) {
    axis_id = cob_id - 1 + 1
    return (aux = ['TCAN', axis_id, 'Group-TCAN'])
  }
  if (cob_id == 32) {
    return (aux = ['TCAN', 'All', 'SYNC-TCAN'])
  }

  if (cob_id >= 65 && cob_id <= 95) {
    axis_id = cob_id - 65 + 1
    return (aux = ['TCAN', axis_id, 'PVT-TCAN'])
  }
  if (cob_id == 256) {
    // axis_id = cob_id - 65 + 1
    return (aux = ['TCAN', 'All', 'TimeStamp-TCAN'])
  }
  if (cob_id >= 257 && cob_id <= 287) {
    axis_id = cob_id - 257 + 1
    return (aux = ['TCAN', axis_id, 'TakeData2-TCAN'])
  }
  if (cob_id >= 289 && cob_id <= 319) {
    axis_id = cob_id - 289 + 1
    return (aux = ['TCAN', axis_id, 'Normal-TCAN'])
  }
  if (cob_id >= 321 && cob_id <= 351) {
    axis_id = cob_id - 321 + 1
    return (aux = ['TCAN', axis_id, 'Host-TCAN'])
  }
  if (cob_id >= 353 && cob_id <= 383) {
    axis_id = cob_id - 353 + 1
    return (aux = ['TCAN', axis_id, 'TakeData-TCAN'])
  }
  if (cob_id == 128) {
    return (aux = ['SYNC', 'All', 'SYNC'])
  }

  if (cob_id >= 129 && cob_id <= 255) {
    axis_id = cob_id - 129 + 1
    return (aux = ['EMCY', axis_id, 'EMCY'])
  }
  if (cob_id == 256) {
    return (aux = ['TIME', '-'])
  }
  if (cob_id >= 385 && cob_id <= 511) {
    axis_id = cob_id - 385 + 1
    return (aux = ['PDO', axis_id, 'TPDO1'])
  }

  if (cob_id == 512) {
    return (aux = ['TCAN', 'All', 'Broadcast-TCAN'])
  }
  if (cob_id >= 513 && cob_id <= 639) {
    axis_id = cob_id - 513 + 1
    return (aux = ['PDO', axis_id, 'RPDO1'])
  }
  //
  if (cob_id >= 641 && cob_id <= 767) {
    axis_id = cob_id - 641 + 1
    return (aux = ['PDO', axis_id, 'TPDO2'])
  }
  if (cob_id >= 769 && cob_id <= 895) {
    axis_id = cob_id - 769 + 1
    return (aux = ['PDO', axis_id, 'RPDO2'])
  }
  //
  if (cob_id >= 897 && cob_id <= 1023) {
    axis_id = cob_id - 897 + 1
    return (aux = ['PDO', axis_id, 'TPDO3'])
  }
  if (cob_id >= 1025 && cob_id <= 1151) {
    axis_id = cob_id - 1025 + 1
    return (aux = ['PDO', axis_id, 'RPDO3'])
  }
  //
  if (cob_id >= 1153 && cob_id <= 1279) {
    axis_id = cob_id - 1153 + 1
    return (aux = ['PDO', axis_id, 'TPDO4'])
  }
  if (cob_id >= 1281 && cob_id <= 1407) {
    axis_id = cob_id - 1281 + 1
    return (aux = ['PDO', axis_id, 'RPDO4'])
  }
  if (cob_id >= 1409 && cob_id <= 1535) {
    axis_id = cob_id - 1409 + 1
    return (aux = ['SDO', axis_id, 'T_SDO'])
  }
  if (cob_id >= 1537 && cob_id <= 1663) {
    axis_id = cob_id - 1537 + 1
    return (aux = ['SDO', axis_id, 'R_SDO'])
  }

  if (cob_id >= 1793 && cob_id <= 1919) {
    axis_id = cob_id - 1793 + 1
    return (aux = ['NMT_Monitoring', axis_id, 'NMT_Monitoring'])
  }
  if (cob_id >= 2020 && cob_id <= 2021) {
    return (aux = ['LSS', 'R/T', 'LSS'])
  }
  return ['invalid', 'invalid', 'invalid']
}

export function Extract_MSGs_from_text(text) {
  //Text should be array of strings
  var FirstPatternEntireRowSplitter = /['"`,<> \s]/g
  const hexPattern = /^(0x)?[0-9a-f]+$/gi

  text = text.map((row, index) => {
    var filteredRow = row.split(FirstPatternEntireRowSplitter)
    filteredRow = filteredRow.filter((element) => !element == '')
    filteredRow = filteredRow.filter((element) => element.match(hexPattern))
    var original = filteredRow
    filteredRow = filteredRow.map((element) => {
      //Remove all the annoying 0x element indicating a hex number
      if (element.slice(0, 2).toUpperCase() == '0X') {
        element = element.slice(2)
      }
      return element
    })
    var CobID = Check4PotentialCobID(filteredRow)

    var aux_data
    if (CobID[0] != 'invalid') {
      aux_data = extractDATAfromROW(filteredRow, CobID[1], original)
    } else {
      aux_data = 'invalid'
    }

    return [index + 1, row, CobID[0], aux_data, filteredRow]
  })

  return text
}

export function Check4PotentialCobID(row) {
  //returns [cobid, index_in_the_row]
  var temp
  var all_COBiDs = []
  var count = 0
  var arrayCount = []

  for (var j = 0; j < row.length; j++) {
    if ([1, 2].includes(row[j].length)) {
      count++
    }
    if (row[j].length > 2) {
      temp = CobID_who_dis(row[j])
      if (temp[0] != 'invalid') {
        all_COBiDs[all_COBiDs.length] = [row[j], j]
        arrayCount[arrayCount.length] = count
        count = 0
      }
    }
  }
  arrayCount[arrayCount.length] = count // for the last elements
  arrayCount.splice(0, 1)

  if (all_COBiDs.length > 0) {
    var tempp = returnMaxFromArr(arrayCount)

    return [all_COBiDs[tempp[1]][0], all_COBiDs[tempp[1]][1]]
  } else {
    return ['invalid', '-1']
  }
  //Return [TheCobID, indexOfCobId_inTheRow]
}

function extractDATAfromROW(row, index, original) {
  var aux_data = ''
  var potentialLength = row[index + 1]
  var potentialLengthinDec = hexToDec(potentialLength, 8)
  if (potentialLength == undefined) {
    return 'invalid'
  }
  for (var aa = index + 2; aa < row.length; aa++) {
    //putting the tail together without the cobID and potential message length
    aux_data = aux_data.concat(row[aa])
  }

  if (potentialLength && potentialLength.length < 3) {
    if ([0, 1, 2, 3, 4, 5, 6, 7, 8].includes(potentialLengthinDec)) {
      if (parseInt(potentialLength) * 2 != aux_data.length) {
        //If the evaluated length don`t match the recived data
        if (
          potentialLength.length == 2 &&
          original[index + 1] &&
          original[index + 2] &&
          original[index + 1].length == original[index + 2].length
        ) {
          //Potentially this is a part of the message not its length. If its one digit it doesnt matter

          if (aux_data.length > parseInt(potentialLength) * 2) {
            //Msg length bigger than the evaluated length
            if (!/^0+$/.test(aux_data.slice(parseInt(potentialLength) * 2))) {
              //If the remaining message is not zero
              if (aux_data.length <= 14) {
                aux_data = potentialLength.concat(aux_data)
              }
            } else {
              //Exceeded length but its all zeros
              var type = CobID_who_dis(row[index])
              if (type[0] != 'SDO' || potentialLength == '00') {
                aux_data = potentialLength.concat(aux_data)
              }
            }
          } else {
            //Length smaller
            aux_data = potentialLength.concat(aux_data)
          }
        } else {
          //--fix 201 01
          aux_data = potentialLength.concat(aux_data)
        }
      } else {
        if (potentialLength.length == 2) {
          //If data matches and the length is a full byte
          if (
            original[index + 1] &&
            original[index + 2] &&
            original[index + 1].length == original[index + 2].length
          ) {
            //If length is expressed as 01 and message as xx
            aux_data = potentialLength.concat(aux_data)
          }
          if (potentialLength == '00' && row[index] != '080' && row[index] != '80') {
            aux_data = potentialLength.concat(aux_data)
          }
        }
      }
    } else {
      //If the evaluated length is not included between 0-8 then its not the length
      aux_data = potentialLength.concat(aux_data)
    }
  } else {
    //If length bigger than 2 digits then its sure not be the length
    aux_data = potentialLength.concat(aux_data)
  }

  if (aux_data.length > 16) {
    //Max data length is 16 characters
    aux_data = aux_data.slice(0, 16)
  }
  if (aux_data == '') {
    aux_data = 'empty'
  }
  return aux_data
}

function returnMaxFromArr(arr) {
  var arr_copy = arr
  if (typeof arr[0] == 'string') {
    arr[0] = parseInt(arr[0])
  }
  var aux = arr[0]
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'string') {
      arr[i] = parseInt(arr[i])
    }
    if (aux < arr[i]) {
      aux = arr[i]
    }
  }

  return [aux, arr_copy.indexOf(aux)]
  //Returns [MAX_nr, index_in_array]
}

export function CreateDecodedArrayOfObjects(
  AllCAN_MsgsExtracted_array,
  setIsDrawerOpen,
  setOpenPDOModal,
  setObjectIterationPDO
) {
  console.log(`DANGER -- CreateDecodedArrayOfObjects`)
  var arr = AllCAN_MsgsExtracted_array
  var PDOMessageToDecode
  var ResultingArray = MessagesDecoded_ArrayOfObjects
  var prematureEnd = false
  if (globalIndex[0] == 0) {
    // We reset only if we have a new log file
    CanLogStatistics = []
    ResultingArray = []
    ObjectValuesSaved_global['6060'] = []
  } else {
    ResultingArray = ResultingArray.slice(0, globalIndex[0])
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

  for (let index = globalIndex[0]; index < arr.length; index++) {
    if (index == 0) {
      console.log('🚀xXx First index: ', index)
    } else if (index == arr.length - 1 || index == arr.length - 2) {
      console.log('🚀xXx SemiLast/Last index: ', index)
    }

    let row = arr[index]
    //Handle Empty Lines
    if (row[1] == '') {
      row[2] = 'Empty'
      row[3] = 'Line'
      UpdateStatisticsBasedOnMessage('All', '-')
      createObject(row[0], row[1], row[2], row[3], false, 'All')
      continue
    }
    var aux_CobID = CobID_who_dis(row[2])
    var DecodedMessage = DecodeOneCAN_msgFct(aux_CobID, row[3].toUpperCase())

    if (aux_CobID[2] == 'NMT') {
      //Special case for NMT axisID

      if (DecodedMessage[5] != 'error') {
        aux_CobID[1] = 'NMT'
        var axisID = hexToDec(DecodedMessage[1], 16)
        if (axisID > 127) {
          DecodedMessage[4] = 'Axis ID must be between 0 and 127'
          DecodedMessage[5] = 'error'
          aux_CobID[1] = '-'
        } else if (axisID == 0) {
          aux_CobID[1] = 'All'
          DecodedMessage[4] = 'All Axes - '.concat(DecodedMessage[4])
        } else {
          aux_CobID[1] = axisID
        }
      }

      DecodedMessage[1] = '-' //Declaring Object as nothing
    } else if (aux_CobID[2] == 'NMT_Monitoring') {
      if (row[3] == 'empty') {
        row[3] = '-'
        DecodedMessage[4] = 'RTR request from master'
        DecodedMessage[5] = 'neutral'
      }
      aux_CobID[2] = 'NMT_M'
    } else if (aux_CobID[2] == 'SYNC') {
      if (row[3] == 'empty') {
        row[3] = '-'
        DecodedMessage[4] = 'SYNC'
        DecodedMessage[5] = 'neutral'
      }
      aux_CobID[2] = 'SYNC'
    }
    UpdateStatisticsBasedOnMessage(aux_CobID[1], aux_CobID[2])

    createObject(
      row[0], //Message NR
      row[1], //OriginalMsg
      row[2], //CobID
      row[3], //Message
      aux_CobID[2], //type
      aux_CobID[1], //AxisID
      DecodedMessage[0], //CS
      DecodedMessage[1], //Object
      DecodedMessage[2], //ObjName
      DecodedMessage[3], //Data
      DecodedMessage[4], //Interpretation
      DecodedMessage[5] //Error
    )
    if (DecodedMessage[0] == 'MissingPDO') {
      console.log('MissingPDO we reseted the proccess')
      PDOMessageToDecode = ResultingArray[index]
      prematureEnd = true
      globalIndex[0] = index
      index = arr.length
      continue
    }
  }

  if (!prematureEnd) {
    if (!(AllCAN_MsgsExtracted_array.length == 1 && AllCAN_MsgsExtracted_array[0][2] == 'Empty')) {
      //Because the first time the page is loaded it thinks the first empty line is a message and tries to decode it
      setIsDrawerOpen(true)
    }
  } else {
    console.log('-------------------PREMATURE EXIT')
    setOpenPDOModal(true)
    setObjectIterationPDO(PDOMessageToDecode)
  }
  return ResultingArray
}

function DecodeOneCAN_msgFct(cobID_array, message) {
  var result = []

  if (cobID_array[0] == 'SDO') {
    result = DecodeSDO(cobID_array[2], message, cobID_array[1])
  } else if (cobID_array[0] == 'PDO') {
    result = DecodeOnePDOmsg(cobID_array, message)
  } else if (cobID_array[0] == 'EMCY') {
    result = DecodeEMCY(message)
  } else if (cobID_array[0] == 'NMT') {
    result = DecodeNMT(message)
  } else if (cobID_array[0] == 'NMT_Monitoring') {
    result = DecodeNMT_Monitoring(message)
  } else if (cobID_array[0] == 'SYNC') {
    result = DecodeSYNC(message)
  } else if (cobID_array[0] == 'TCAN') {
    result = DecodeTCANglobal(cobID_array, message)
  } else result = ['-', '-', 'Can`t extract data from this row', '-', 'Invalid Message ', 'error']

  return result
}

export function UpdateStatisticsBasedOnMessage(axisID, type) {
  var searchResult = CanLogStatistics.filter((OneAxisObject) => {
    return OneAxisObject.Axis[0] == axisID
  })

  if (searchResult.length === 0) {
    // Nothing found, create a new object
    const newObj = {
      Axis: [axisID, true],
      [type]: [1, true]
    }
    CanLogStatistics.push(newObj)
  } else {
    // Object with Axis exists, update the property
    const existingObj = searchResult[0]
    if (type in existingObj) {
      // Increment the property
      existingObj[type][0]++
    } else {
      // Create the property and set it to 1
      existingObj[type] = [1, true]
    }
  }
}
export function verifyValidityOfMappingGroup(group) {
  var returnText = ''
  var errorStatus = 'neutral'
  var enableCobID = []
  var enableMapping = []
  var orderMapping = []
  var currectCOBID
  var currentMapping = []

  group.slice(1).forEach((oneMessage) => {
    if (oneMessage.errorStatus == 'error') {
      errorStatus = 'error'
    }
    var InterpretationInfo = oneMessage.Interpretation.split(' ')
    if (['Disable', 'Enable'].includes(InterpretationInfo[0])) {
      enableCobID[enableCobID.length] = InterpretationInfo[0]
    } else if (InterpretationInfo.slice(1, -1).join(' ') == '- Nr of mapped objects :') {
      enableMapping[enableMapping.length] = InterpretationInfo[InterpretationInfo.length - 1]
    } else if (
      InterpretationInfo[0][0] == '[' &&
      InterpretationInfo[0][InterpretationInfo[0].length - 1] == ']'
    ) {
      if (InterpretationInfo[0][7]) {
        orderMapping[orderMapping.length] = InterpretationInfo[0][7]
        currentMapping[currentMapping.length] = InterpretationInfo[2]
      }
    }
    if (
      InterpretationInfo[0][0] == '[' &&
      InterpretationInfo[0][InterpretationInfo[0].length - 1] == ']'
    ) {
      currectCOBID = InterpretationInfo[0].slice(1, 5)
    }
  })

  if (errorStatus == 'error') {
    returnText = returnText.concat('Error: One of the messages in the group has an error')
  } else {
    if (enableCobID.slice(-2).toString() == ['Disable', 'Enable'].toString()) {
      //Check if the Disabling and Enabling was done in the correct order
      var mappingObjsOrder = Math.max(...orderMapping.map(Number))
      if (
        mappingObjsOrder != parseInt(enableMapping[enableMapping.length - 1]) ||
        orderMapping.length != parseInt(enableMapping[enableMapping.length - 1])
      ) {
        returnText = returnText.concat('Warning: Either missing or wrong number of mapped objects')
        errorStatus = 'warning'
      } else {
        returnText = returnText.concat(currentMapping.join(' / '))
      }
    } else {
      returnText = returnText.concat('Warning: missing Disable/Enable frames  ')
      errorStatus = 'warning'
    }
  }

  return [returnText, currectCOBID, errorStatus]
}
export function verifyRepetitiveGroup(group) {
  var emptyLines = 0
  var syncLines = 0
  var NMT_M = 0
  var invalidLines = 0
  var returnText = ''
  group.forEach((oneMessage) => {
    if (oneMessage.CobID == 'invalid') {
      invalidLines++
    } else if (oneMessage.type == 'SYNC') {
      syncLines++
    } else if (oneMessage.CobID == 'Empty') {
      emptyLines++
    } else if (oneMessage.type == 'NMT_M') {
      NMT_M++
    }
  })
  var sum = emptyLines + syncLines + NMT_M + invalidLines
  if (emptyLines) {
    returnText = returnText.concat('Empty: ', emptyLines, ', ')
  }
  if (syncLines) {
    returnText = returnText.concat('SYNC: ', syncLines, ', ')
  }
  if (NMT_M) {
    returnText = returnText.concat('NMT_M: ', NMT_M, ', ')
  }
  if (invalidLines) {
    returnText = returnText.concat('Invalid: ', invalidLines, ', ')
  }
  if (sum) {
    returnText = returnText.concat('Total: ', sum)
  }
  return returnText
}

export function filterMessagesByAxesAndCobID(filteredMessages, messageTypeSorting) {
  console.log('🚀 ~  messageTypeSorting:', messageTypeSorting)
  const allFiltersOnTrue = CanLogStatistics.every((oneAxis) => {
    var ObjectProps = Object.keys(oneAxis)
    return ObjectProps.every((prop) => oneAxis[prop][1] == true)
  })
  //Available Axes filters
  if (!allFiltersOnTrue) {
    //There are some filters set to false
    filteredMessages = filteredMessages.filter((oneMessage) => {
      var AxisStatus = CanLogStatistics.filter((oneAxis) => {
        return oneAxis.Axis[0] == oneMessage.AxisID && oneAxis.Axis[1] == true
      })
      if (AxisStatus.length == 0) {
        //Axis set to false
        return false
      } else {
        return AxisStatus[0][oneMessage.type][1]
      }
    })
  }

  ///Filtering based on the message type
  if (messageTypeSorting == 'Master') {
    filteredMessages = filteredMessages.filter((oneMessage) => {
      return ['R_SDO', 'RPDO1', 'RPDO2', 'RPDO3', 'RPDO4', 'NMT'].includes(oneMessage.type)
    })
  } else if (messageTypeSorting == 'Mapping') {
    filteredMessages = filteredMessages.filter((oneMessage) => {
      var object = oneMessage.Object.toUpperCase()
      if (object.slice(0, 2) == '0X' || object.slice(0, 2) == '#X') {
        object = object.slice(2)
      }
      return Mapping_objects_array.includes(object)
    })
  } else if (messageTypeSorting == 'Errors') {
    filteredMessages = filteredMessages.filter((oneMessage) => {
      return oneMessage.errorStatus == 'error'
    })
  }
  return filteredMessages
}
