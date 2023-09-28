import { filterHex, hexToDec } from './NumberConversion'
const FG_Objects_Array = {
  POS: ['6064', '6062', '607A', '6068', '60F4', '6063', '607B', '607C'],
  SPD: ['606C', '606B', '606F', '60FF', '60F8', '6081', '6099_01', '6099_02'],
  ACC: ['6083', '6085', '609A'],
  TIME: [
    '6066',
    '6068',
    '2023',
    '2005',
    '2051',
    '1006',
    '1800_03',
    '1801_03',
    '1802_03',
    '1803_03',
    '1800_05',
    '1801_05',
    '1802_05',
    '1803_05'
  ]
}

export function whatFG_isObject(obj) {
  obj = obj.toUpperCase()

  if (obj.slice(0, 2) == '#X') {
    obj = obj.slice(2, obj.length)
  }
  // If object is '6060_00', remove '_00'
  if (obj.length > 4 && obj.slice(4, 7) === '_00') {
    obj = obj.slice(0, 4)
  }

  for (const type in FG_Objects_Array) {
    if (FG_Objects_Array[type].includes(obj)) {
      return type
    }
  }

  return false
}
export function CobID_who_dis(cob_id) {
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
