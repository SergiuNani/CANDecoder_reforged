import { UpdateStatisticsBasedOnMessage } from './CANopen'
import { CanLogStatistics } from './CANopen'

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
      type = 'RW=?'
    }
    var message = rowSplitted.join('')
    return [index + 1, row, type, message, rowSplitted]
  })
  console.log(ExtractedArray) // bug
  return ExtractedArray
}

export function CreateDecodedArrayOfObjects_RS232(AllCAN_MsgsExtracted_array, setIsDrawerOpen) {
  console.log('--BB-- CreateDecodedArrayOfObjects_RS232')
  var arr = AllCAN_MsgsExtracted_array
  var ResultingArray = []
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

  for (let index = 0; index < arr.length; index++) {
    let row = arr[index]
    var type = row[2]
    var messageString = row[3].toUpperCase()
    //Handle Empty Lines
    if (row[1] == '') {
      row[2] = 'Empty'
      row[3] = 'Line'
      UpdateStatisticsBasedOnMessage('All', '-')
      createObject(row[0], row[1], row[2], row[3], false, 'All')
      continue
    }
    var aux_CobID = ['AxisID', 'type_RS232'] //function here
    var DecodedMessage = DecodeOneCAN_msgFct_RS232(aux_CobID, messageString)

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
  }

  if (!(AllCAN_MsgsExtracted_array.length == 1 && AllCAN_MsgsExtracted_array[0][2] == 'Empty')) {
    //Because the first time the page is loaded it thinks the first empty line is a message and tries to decode it
    setIsDrawerOpen(true)
  }

  console.log('🚀 ~  ResultingArray:', ResultingArray)
  console.log(CanLogStatistics)
  return ResultingArray
}

function DecodeOneCAN_msgFct_RS232(cobID_array, message) {
  var result = []

  if (cobID_array[0] == 'SDO') {
    result = 'spanac'
  } else result = ['-', '-', 'Can`t extract data from this row', '-', 'Invalid Message ', 'error']

  return result
}
