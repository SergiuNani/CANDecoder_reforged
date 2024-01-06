import { getOpCode_RS232 } from './RS232'
import { LittleEndian } from './NumberConversion'

export function DecodeTCANglobal(cobID_array, message) {
  var CS = '-'
  var Object = '-'
  var ObjName = '-'
  var Data = '-'
  var Interpretation = '-'
  var Error = 'neutral'
  var msgType = cobID_array[2]
  var opCode = LittleEndian(message.slice(0, 4))
  var rawData =
    LittleEndian(message.slice(4, 8)) +
    LittleEndian(message.slice(8, 12)) +
    LittleEndian(message.slice(12, 16))
  CS = opCode
  var result
  console.log('🚀 ~ file: TechnoCAN.js:9 ~ DecodeTCANglobal ~ msgType:', msgType)
  switch (msgType) {
    case 'TGroup':
      break
    case 'TSYNC':
      break
    case 'PVT':
      break
    case 'TakeData2':
      break
    case 'Normal':
      result = getOpCode_RS232(opCode, rawData)
      // return [errorStatus, Data, Interpretation, msgType, SenderMain]

      if (result[0] == 'error') {
        Error = 'error'
      }
      if (result[4] != '-') {
        Object = result[4]
      }

      Data = result[1]
      Interpretation = result[2]

      break
    case 'Host':
      break
    case 'TakeData':
      break
    case 'Broadcast':
      break
  }

  return [CS, Object, ObjName, Data, Interpretation, Error]
}
