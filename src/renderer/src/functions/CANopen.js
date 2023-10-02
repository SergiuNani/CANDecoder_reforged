import { filterHex, hexToDec } from './NumberConversion'
import { DecodeSDO } from './CANopenFunctions'

export function CobID_who_dis(cob_id) {
  cob_id = cob_id.toUpperCase()
  var axis_id = 0
  var aux
  if (cob_id.slice(0, 2).toUpperCase() == '0X') {
    cob_id = cob_id.slice(2, cob_id[cob_id.length])
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
    return (aux = ['TCAN', '-', 'SYNC-TCAN'])
  }

  if (cob_id >= 65 && cob_id <= 95) {
    axis_id = cob_id - 65 + 1
    return (aux = ['TCAN', axis_id, 'PVT-TCAN'])
  }
  if (cob_id == 256) {
    // axis_id = cob_id - 65 + 1
    return (aux = ['TCAN', '-', 'TimeStamp-TCAN'])
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
    return (aux = ['SYNC', '-', 'SYNC'])
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
    return (aux = ['TCAN', '-', 'Broadcast-TCAN'])
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
  var FirstPatternEntireRowSplitter = /['"`, \s]/g
  const hexPattern = /^(0x)?[0-9a-f]+$/gi

  text = text.map((row, index) => {
    var filteredRow = row.split(FirstPatternEntireRowSplitter)
    filteredRow = filteredRow.filter((element) => !element == '')
    filteredRow = filteredRow.filter((element) => element.match(hexPattern))
    var CobID = Check4PotentialCobID(filteredRow)

    var aux_data
    if (CobID[0] != 'invalid') {
      aux_data = extractDATAfromROW(filteredRow, CobID[1])
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

function extractDATAfromROW(row, index) {
  var OneDigitPattern = /^\d$/g
  var aux_data = ''
  for (var aa = index + 1; aa < row.length; aa++) {
    //putting the tail together
    aux_data = aux_data.concat(row[aa])
  }
  if (OneDigitPattern.test(row[index + 1])) {
    //Conditions if lenght is specified (only as a single digit) -remove it
    aux_data = aux_data.slice(1, aux_data.length)
    if (aux_data.length > parseInt(row[index + 1]) * 2) {
      //If length says its smaller than the array, we cutting it accordingly
      aux_data = aux_data.slice(0, parseInt(row[index + 1]) * 2)
    }
    if (aux_data == '') {
      aux_data = row[index + 1]
    }
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

export function CreateDecodedArrayOfObjects(arr) {
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

  arr.forEach((row) => {
    //Handle Empty Lines
    if (row[1] == '') {
      row[2] = 'Empty'
      row[3] = 'Line'
      return createObject(row[0], row[1], row[2], row[3])
    }
    var aux_CobID = CobID_who_dis(row[2])
    var DecodedMessage = DecodeOneCAN_msgFct(aux_CobID, row[3])
    createObject(
      row[0],
      row[1], //OriginalMsg
      row[2], //CobID
      row[3],
      aux_CobID[2], //type
      aux_CobID[1], //AxisID
      DecodedMessage[0], //CS
      DecodedMessage[1], //Object
      DecodedMessage[2], //ObjName
      DecodedMessage[3], //Data
      DecodedMessage[4], //Interpretation
      DecodedMessage[5] //Error
    )
  })

  return ResultingArray
}

function DecodeOneCAN_msgFct(cobID_array, message) {
  var result = []

  if (cobID_array[0] == 'SDO') {
    result = DecodeSDO(cobID_array[2], message)
  } else result = ['-', 'Nothing', 'Go ask my Creator!', 'IDK Chief', 'Invalid COB-ID', 'error']

  return result
}
