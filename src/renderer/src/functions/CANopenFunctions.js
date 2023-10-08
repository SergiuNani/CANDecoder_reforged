import { Objects_collection_LS } from '../App'
import { LittleEndian, hexToDec, hex_to_ascii, hex2Fixed, UnitsConvertor } from './NumberConversion'
import { FG_Context, MotorSpecificationsContext } from '../App'
import { useContext } from 'react'
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

const ObjectDescriptions = {
  6060: {
    '-5': 'Manufacturer specific – External Reference Torque Mode1',
    '-4': 'Manufacturer specific – External Reference Speed Mode1',
    '-3': 'Manufacturer specific – External Reference Position Mode1',
    '-2': 'Manufacturer specific – Electronic Camming Position Mode',
    '-1': 'Manufacturer specific – Electronic Gearing Position Mode',
    0: 'Reserved',
    1: 'Profile Position Mode',
    2: 'Reserved',
    3: 'Profile Velocity Mode',
    4: 'Profile Torque Mode1',
    5: 'Reserved',
    6: 'Homing Mode',
    7: 'Interpolated Position Mode',
    8: 'Cyclic Synchronous Position Mode (CSP)',
    9: 'Cyclic sync Velocity Mode (CSV)2',
    10: 'Cyclic sync Torque Mode (CST)2'
  },
  '605E': {
    '-1': 'No action',
    0: 'Disable drive, motor is free to rotate',
    1: 'Reserved',
    2: 'Slow down with quick stop ramp'
  },
  '605A': {
    0: 'Disable drive function',
    1: 'Slow down on slow down ramp and transit into Switch On Disabled',
    2: 'Slow down on quick stop ramp and transit into Switch On Disabled',
    3: 'Reserved',
    4: 'Reserved',
    5: 'Slow down on slow down ramp and stay in Quick Stop Active',
    6: 'Slow down on quick stop ramp and stay in Quick Stop Active'
  },
  '605B': {
    0: 'Disable drive function (switch-off the drive power stage)',
    1: 'Slow down on slowdown ramp'
  },
  '605C': {
    0: 'Disable drive function (switch-off the drive power stage)',
    1: 'Slow down on slow down ramp and disable the drive function'
  },
  '605D': {
    0: 'Reserved',
    1: 'Slow down on slow down ramp and stay in Operation Enabled',
    2: 'Slow down on quick stop ramp'
  },
  6007: {
    0: 'No action',
    1: 'Fault signal - Execute specific fault routine set in Object 605Eh: Fault reaction option code',
    2: 'Disable voltage command',
    3: 'Quick stop command'
  },
  6098: {
    '-4': 'Method -4',
    '-3': 'Method -3',
    '-2': 'Method -2',
    '-1': 'Method -1',
    0: 'No homing operation will be executed',
    1: 'Method 1',
    2: 'Method 2',
    3: 'Method 3',
    4: 'Method 4',
    5: 'Method 5',
    6: 'Method 6',
    7: 'Method 7',
    8: 'Method 8',
    9: 'Method 9',
    10: 'Method 10',
    11: 'Method 11',
    12: 'Method 12',
    13: 'Method 13',
    14: 'Method 14',
    15: 'Reserved',
    16: 'Reserved',
    17: 'Method 17',
    18: 'Method 18',
    19: 'Method 19',
    20: 'Method 20',
    21: 'Method 21',
    22: 'Method 22',
    23: 'Method 23',
    24: 'Method 24',
    25: 'Method 25',
    26: 'Method 26',
    27: 'Method 27',
    28: 'Method 28',
    29: 'Method 29',
    30: 'Method 30',
    31: 'Reserved',
    32: 'Reserved',
    33: 'Method 33',
    34: 'Method 34',
    35: 'Method 35'
  },
  6086: {
    0: 'Linear ramp (trapezoidal profile)',
    1: 'Reserved',
    2: 'Reserved',
    3: 'Jerk-limited ramp (S-curve)'
  },
  '60C0': {
    '-1': 'PVT (Position – Velocity – Time) cubic interpolation',
    0: 'Linear Interpolation or PT (Position –Time) '
  }
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
    if (FG_Objects_Array[type] && FG_Objects_Array[type].includes(obj)) {
      return type
    }
  }

  return false
}

export function whatObjectValueMeans(obj, value, objectSize) {
  obj = obj.toUpperCase()
  if (obj.slice(0, 2) == '#X') {
    obj = obj.slice(2, obj.length)
  }
  // If object is '6060_00', remove '_00'
  if (obj.length > 4 && obj.slice(4, 7) === '_00') {
    obj = obj.slice(0, 4)
  }

  for (const type in ObjectDescriptions) {
    if (ObjectDescriptions[type] && type == obj) {
      var decValue = hexToDec(value, objectSize)

      for (const description in ObjectDescriptions[type]) {
        if (description == decValue) {
          return [ObjectDescriptions[type][description], 'blue']
        }
      }
    }
  }

  return [false, false]
}
export function GetObject(index) {
  //Input: 1013 or 1013_05
  //Output: Index, IndexName, IndexBitSize
  var subIndex = ''
  if (index.length > 4) {
    subIndex = index.slice(4, 7)
    index = index.slice(0, 4)
  } else if (index.length < 4) {
    return [`${index}`, 'Nothing Found', 0]
  }
  var SearchResult = Objects_collection_LS.filter((object) => object.Index.match(index))

  if (subIndex || (SearchResult[0] && ![8, 16, 32].includes(SearchResult[0].BitSize))) {
    var aux_Obj = index.concat(subIndex)
    if (SearchResult[0] && SearchResult[0].Info && SearchResult[0].Info.SubItem) {
      SearchResult = SearchResult[0].Info.SubItem.filter((object) => object.Index.match(aux_Obj))
    } else if (subIndex != '_00') {
      return [`${index.concat(subIndex)}`, 'Nothing Found', 0]
    }
  }
  if (SearchResult[0]) {
    if (!SearchResult[0].Index || !SearchResult[0].Name || !SearchResult[0].BitSize) {
      return ['DataBase Error. Go to', ' EditMenu And Correct this Index', 0]
    }
    return [SearchResult[0].Index, SearchResult[0].Name, SearchResult[0].BitSize]
  } else {
    return [`${index.concat(subIndex)}`, 'Nothing Found', 0]
  }
}

// ********************** //SDO FUNCTIONS// ********************************

export function DecodeSDO(sdoType, message) {
  // Message will always be less or equal than 16 characters
  if (message.length < 8) {
    //ERROR: SDO insufficient
    return ['-', '-', '-', '-', 'SDO_Error: SDO message length insufficient ', 'error']
  }
  var interpretationInfo = ''
  var errorStatus = ''

  var CS = message.slice(0, 2)
  var Object = LittleEndian(message.slice(2, 6))
  Object = GetObject(Object.concat('_' + message.slice(6, 8)))
  var aux_message = LittleEndian(message.slice(8, 16))

  if (Object[1] == 'Nothing Found' && !['60', '70'].includes(CS) && sdoType == 'R_SDO') {
    return [
      CS,
      Object[0],
      Object[1],
      aux_message,
      `SDO_Error: Couldn't find object : ${Object[0]}`,
      'error'
    ]
  }

  var checkForErrors = Check_SDOmsg_ForErrors(
    sdoType,
    CS,
    aux_message,
    Object[2],
    Object[0],
    message
  )

  interpretationInfo = checkForErrors[0]
  errorStatus = checkForErrors[1]

  var FG_typeObject = whatFG_isObject(Object[0])
  if (FG_typeObject && errorStatus == 'good') {
    var checkForFG = Check_SDOmsg_forFG(FG_typeObject, aux_message)
    interpretationInfo = checkForFG[0]
    errorStatus = checkForFG[1]
  }

  if (errorStatus == 'good') {
    //No error and the other functions didnt write anything in interpretationInfo
    var ObjectValueDescription = whatObjectValueMeans(Object[0], aux_message, Object[2])
    if (ObjectValueDescription[0]) {
      interpretationInfo = ObjectValueDescription[0]
      errorStatus = ObjectValueDescription[1]
    }
  }
  //Return: [CS, Object , ObjectName , data , Interpretation ,errorStatus]
  return [CS, Object[0], Object[1], aux_message, interpretationInfo, errorStatus]
}

function Check_SDOmsg_ForErrors(sdoType, CS, data, ObjectSize, ObjectIndex, fullMessage) {
  //Returns [interpretationInfo, errorStatus]
  var interpretation = ''
  var errorStatus = ''

  switch (CS) {
    case '2F':
      if (sdoType == 'R_SDO') {
        if (ObjectSize != 8) {
          interpretation = 'Invalid CS for this object '
          errorStatus = 'error'
        } else if (data.length != 2) {
          interpretation = 'The data should be 8bits '
          errorStatus = 'warning'
        } else {
          interpretation = `Write: ${ObjectIndex} <- ${data}h`
          errorStatus = 'good'
        }
      } else {
        //T_SDO
        interpretation = '2F is a Command Specifier only for R_SDO'
        errorStatus = 'error'
      }

      break
    case '2B':
      if (sdoType == 'R_SDO') {
        if (ObjectSize != 16) {
          interpretation = 'Invalid CS for this object '
          errorStatus = 'error'
        } else if (data.length != 4) {
          interpretation = 'The data should be 16bits '
          errorStatus = 'warning'
        } else {
          interpretation = `Write: ${ObjectIndex} <- ${data}h`
          errorStatus = 'good'
        }
      } else {
        //T_SDO
        interpretation = '2B is a Command Specifier only for R_SDO'
        errorStatus = 'error'
      }

      break
    case '27':
    case '47':
      interpretation = ' Invalid CS for this Object'
      errorStatus = 'error'
      break
    case '23':
      if (sdoType == 'R_SDO') {
        if (ObjectSize != 32) {
          interpretation = 'Invalid CS for this object '
          errorStatus = 'error'
        } else if (data.length != 8) {
          interpretation = 'The data should be 16bits '
          errorStatus = 'warning'
        } else {
          interpretation = `Write: ${ObjectIndex} <- ${data}h`
          errorStatus = 'good'
        }
      } else {
        //T_SDO
        interpretation = '23 is a Command Specifier only for R_SDO'
        errorStatus = 'error'
      }

      break
    case '43':
      if (ObjectSize != 32) {
        interpretation = 'This CS should be used to read a 32bit object'
        errorStatus = 'warning'
      } else if (sdoType == 'T_SDO') {
        interpretation = `Read: ${ObjectIndex} -> ${data}h`
        errorStatus = 'good'
      }

      break
    case '4F':
      if (ObjectSize != 8) {
        interpretation = 'This CS should be used to read a 8bit object'
        errorStatus = 'warning'
      } else if (data.length != 8 && parseInt(data.length) != 0 && sdoType == 'T_SDO') {
        interpretation = 'The data length should be "00 00 00 00"'
        errorStatus = 'warning'
      } else if (sdoType == 'T_SDO') {
        interpretation = `Read: ${ObjectIndex} -> ${data.slice(
          data.length - ObjectSize / 4,
          data.length
        )}h`
        errorStatus = 'good'
      }

      break
    case '4B':
      if (ObjectSize != 16) {
        interpretation = 'This CS should be used to read a 16bit object'
        errorStatus = 'warning'
      } else if (data.length != 8 && parseInt(data.length) != 0 && sdoType == 'T_SDO') {
        interpretation = 'The data length should be "00 00 00 00"'
        errorStatus = 'warning'
      } else if (sdoType == 'T_SDO') {
        interpretation = `Read: ${ObjectIndex} ->  ${data.slice(
          data.length - ObjectSize / 4,
          data.length
        )}h`
        errorStatus = 'good'
      }

      break
    case '40':
      if (sdoType == 'T_SDO') {
        interpretation = '40 is a Command Specifier only for T_SDO'
        errorStatus = 'error'
      } else if (parseInt(data.length) != 0) {
        interpretation = 'The data length should be "00 00 00 00"'
        errorStatus = 'warning'
      } else {
        interpretation = `Read object ${ObjectIndex}`
        errorStatus = 'good'
      }
      break

    case '41':
      if (sdoType == 'T_SDO') {
        interpretation = `Use Segmented Reading. There are ${hexToDec(data, 32)}bytes of Info`
        errorStatus = 'good'
      } else {
        interpretation = '"41" - Invalid CS for a R_SDO'
        errorStatus = 'warning'
      }
      break

    case '60':
      if (sdoType == 'T_SDO') {
        if (parseInt(data) == 0) {
          interpretation = `Writing in ${ObjectIndex} - OK `
          errorStatus = 'perfect'
        } else {
          interpretation = 'The data should be "00 00 00 00" confirming an OK to write'
          errorStatus = 'warning'
        }
      } else {
        //Drive don`t care what the data is
        interpretation = 'Request a segmented Read'
        errorStatus = 'good'
      }
      break
    case '70':
      if (sdoType == 'T_SDO') {
        interpretation = 'Invalid CS for T_SDO'
        errorStatus = 'error'
      } else {
        //Drive don`t care what the data is
        interpretation = 'Request a segmented Read'
        errorStatus = 'good'
      }
      break
    case '80':
      if (sdoType == 'T_SDO') {
        interpretation = findSDO_AbortCode(data)
        errorStatus = 'error'
      } else {
        //Drive don`t care what the data is
        interpretation = 'Invalid CS'
        errorStatus = 'error'
      }
      break

    default:
      interpretation = `${hex_to_ascii(fullMessage)}`
      errorStatus = 'idk'
      break
  }
  return [interpretation, errorStatus]
}

function Check_SDOmsg_forFG(FG_typeObject, value) {
  var interpretationInfo = ''
  var errorStatus = ''
  var { FG_DisplayVSApplied, FG_OptionsObject } = useContext(FG_Context)
  var { fullRot_IU, slowLoop } = useContext(MotorSpecificationsContext)

  const conversionParams = {
    Display: {
      POS: { converter: hexToDec, display: FG_OptionsObject.FG_Display_POS },
      SPD: { converter: hex2Fixed, display: FG_OptionsObject.FG_Display_SPD },
      ACC: { converter: hex2Fixed, display: FG_OptionsObject.FG_Display_ACC },
      TIME: { converter: hexToDec, display: FG_OptionsObject.FG_Display_TIME }
    },
    Applied: {
      POS: { converter: hexToDec, display: FG_OptionsObject.FG_Applied_POS },
      SPD: { converter: hexToDec, display: FG_OptionsObject.FG_Applied_SPD },
      ACC: { converter: hexToDec, display: FG_OptionsObject.FG_Applied_ACC },
      TIME: { converter: hexToDec, display: FG_OptionsObject.FG_Applied_TIME }
    }
  }

  const conversionType = conversionParams[FG_DisplayVSApplied][FG_typeObject]

  if (conversionType) {
    let value_initial
    if (FG_DisplayVSApplied == 'Display') {
      value_initial = UnitsConvertor(
        conversionType.converter(value, 32),
        'IU',
        conversionType.display,
        slowLoop,
        fullRot_IU,
        FG_typeObject,
        'objectTypeDirectly'
      )
    } else {
      value_initial = conversionType.converter(value, 32)
    }

    interpretationInfo = `${value_initial} ${conversionType.display}`
    errorStatus = 'blue'
  }

  return [interpretationInfo, errorStatus]
}

export const SDO_abortCodes = [
  {
    Index: '05030000',
    Name: 'Toggle bit not changed.'
  },
  {
    Index: '05040000',
    Name: 'SDO protocol timed out.'
  },
  {
    Index: '05040001',
    Name: 'Client/server command specifier not valid or unknown.'
  },
  {
    Index: '05040002',
    Name: 'Invalid block size (block mode only).'
  },
  {
    Index: '05040003',
    Name: 'Invalid sequence number (block mode only).'
  },
  {
    Index: '05040004',
    Name: 'CRC error (block mode only).'
  },
  {
    Index: '05040005',
    Name: 'Out of memory.'
  },
  {
    Index: '06010000',
    Name: 'Unsupported access to an object.'
  },
  {
    Index: '06010001',
    Name: 'Attempt to read a write-only object.'
  },
  {
    Index: '06010002',
    Name: 'Attempt to write a read-only object.'
  },
  {
    Index: '06020000',
    Name: 'Object does not exist in the object dictionary.'
  },
  {
    Index: '06040041',
    Name: 'Object cannot be mapped to the PDO.'
  },
  {
    Index: '06040042',
    Name: 'The number and length of the objects to be mapped would exceed PDO length.'
  },
  {
    Index: '06040043',
    Name: 'General parameter incompatibility reason.'
  },
  {
    Index: '06040047',
    Name: 'General internal incompatibility in the device.'
  },
  {
    Index: '06060000',
    Name: 'Access failed due to a hardware error.'
  },
  {
    Index: '06070010',
    Name: 'Data type does not match; length of service parameter does not match.'
  },
  {
    Index: '06070012',
    Name: 'Data type does not match; length of service parameter too high.'
  },
  {
    Index: '06070013',
    Name: 'Data type does not match; length of service parameter too low.'
  },
  {
    Index: '06090011',
    Name: 'Sub-index does not exist.'
  },
  {
    Index: '06090030',
    Name: 'Value range of parameter exceeded (only for write access).'
  },
  {
    Index: '06090031',
    Name: 'Value of parameter written too high.'
  },
  {
    Index: '06090032',
    Name: 'Value of parameter written too low.'
  },
  {
    Index: '06090036',
    Name: 'Maximum value is less than minimum value.'
  },
  {
    Index: '08000000',
    Name: 'General error.'
  },
  {
    Index: '08000020',
    Name: 'Data cannot be transferred or stored to the application.'
  },
  {
    Index: '08000021',
    Name: 'Data cannot be transferred or stored to the application because of local control.'
  },
  {
    Index: '08000022',
    Name: 'Data cannot be transferred or stored to the application because of the present device state.'
  },
  {
    Index: '08000023',
    Name: 'Object dictionary dynamic generation fails or no object dictionary is present (e.g. object dictionary is generated from file and generation fails because of a file error).'
  },
  {
    Index: 'default',
    Name: 'Unknown Abort Code'
  }
]

function findSDO_AbortCode(data) {
  const result = SDO_abortCodes.find((item) => item.Index === data)
  if (result) {
    return result.Name
  } else return 'Unknown Abort Code'
}
// ********************** //PDO FUNCTIONS// ********************************
export let PDO_mapped = {
  //Pos 0 will not be used, only 1 to 127
  RPDO1: [],
  RPDO2: [],
  RPDO3: [],
  RPDO4: [],
  TPDO1: [],
  TPDO2: [],
  TPDO3: [],
  TPDO4: []
}
export function DecodePDO(cobID, message) {
  //Return: [CS, Object , ObjectName , data , Interpretation,errorStatus ]
  return ['PDO', 'Object', 'ObjectName', 'Data', 'Interpretation', '']
}
