import { Objects_collection_LS } from '../App'
import { LittleEndian, hexToDec, hex_to_ascii } from './NumberConversion'
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
export function GetObject(index) {
  //Input: 1013 or 1013_05
  //Output: Index, IndexName, IndexBitSize
  var subIndex = ''
  if (index.length > 4) {
    subIndex = index.slice(4, 7)
    index = index.slice(0, 4)
  }
  var SearchResult = Objects_collection_LS.filter((object) => object.Index.match(index))

  if (subIndex || ![8, 16, 32].includes(SearchResult[0].BitSize)) {
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

  //Return: [CS, Object , ObjectName , data , Interpretation ]
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
          errorStatus = 'good'
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

export const SDO_abortCodes = [
  {
    Index: '05030000',
    Name: `Toggle bit not changed: Valid only with "normal transfer" or "block transfer". The bit, which is to alternate after each transfer, did not change its state.`
  },
  {
    Index: '05040000',
    Name: 'Command specifier unknown: Byte 0 of the data block contains a command that is not allowed.'
  },
  {
    Index: '05040001',
    Name: 'Client/server command specifier not valid or unknown'
  },
  {
    Index: '06010000',
    Name: `Unsupported access to an object. If "complete access" was requested via CAN over EtherCAT (CoE) (is not supported.)`
  },
  {
    Index: '06010002',
    Name: 'Read-only entry: An attempt was made to write to a constant or read-only object.'
  },
  {
    Index: '06020000',
    Name: 'Object not existing: An attempt was made to access a non-existing object (index incorrect).'
  },
  {
    Index: '06040041',
    Name: 'Object cannot be PDO mapped: An attempt was made to map an object in the PDO for which that is not permissible.'
  },
  {
    Index: '06040042',
    Name: 'Mapped PDO exceeds PDO: If the desired object were to be attached to the PDO mapping, the 8 bytes of the PDO mapping would be exceeded.'
  },
  {
    Index: '06040043',
    Name: 'General parameter incompatibility reason'
  },
  {
    Index: '06040047',
    Name: 'General internal incompatibility error in the device'
  },
  {
    Index: '06070010',
    Name: 'Data type does not match, length of service parameter does not match'
  },
  {
    Index: '06070012',
    Name: 'Parameter length too long: An attempt was made to write to an object with too much data; for example, with <CMD>=23h (4 bytes) to an object of type Unsigned8, <CMD>=2Fh would be correct.'
  },
  {
    Index: '06070013',
    Name: 'Parameter length too short: An attempt was made to write to an object with too little data; for example, with <CMD>=2Fh (1 byte) to an object of type Unsigned32, <CMD>=23h would be correct.'
  },
  {
    Index: '06090011',
    Name: 'Subindex not existing: An attempt was made to access an invalid subindex of an object; the index, on the other hand, would exist.'
  },
  {
    Index: '06090030',
    Name: 'Value range of parameter exceeded (only for write access)'
  },
  {
    Index: '06090031',
    Name: `Value too great: Some objects are subject to restrictions in the size of the value; in this case, an attempt was made to write an excessively large value to the object. For example, the "Pre-defined error field: Number of errors" object for 1003h:00 may only be set to the value "0"; all other numerical values result in this error.`
  },
  {
    Index: '06090032',
    Name: 'Value too small: Some objects are subject to restrictions in the size of the value. In this case, an attempt was made to write a value that is too small to the object.'
  },
  {
    Index: '08000000',
    Name: 'General error: General error that does not fit in any other category.'
  },
  {
    Index: '08000020',
    Name: 'Data cannot be transferred or stored to the application'
  },
  {
    Index: '08000021',
    Name: 'Data cannot be transferred or stored to the application because of local control'
  },
  {
    Index: '08000022',
    Name: `Data cannot be transferred or stored to the application because of the present device state: The parameters of the PDOs may only be changed in the "Stopped" or "Pre-Operational" state. Write access of objects 1400h to 1407h, 1600h to 1607h, 1800h to 1807h, and 1A00h to 1A07h is not permissible in the "Operational" state.`
  },
  {
    Index: '07D00000',
    Name: `Assumption: Requesting to read a Segmented message while not available.`
  },
  {
    Index: 'default',
    Name: 'Unknown Abort Code'
  }
]

function findSDO_AbortCode(data) {
  console.log('🚀 ~ file: CANopenFunctions.js:380 ~ findSDO_AbortCode ~ data:', data)
  const result = SDO_abortCodes.find((item) => item.Index === data)
  if (result) {
    return result.Name
  } else return 'Unknown Abort Code'
}
