import { getOpCode_RS232 } from './RS232'
import { LittleEndian } from './NumberConversion'
import { hexToDec, decToHex } from './NumberConversion'

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
  switch (msgType) {
    case 'TSYNC':
      break
    case 'PVT':
      // 3456 12 00 44 55 4b 28

      var temp = '0x' + rawData.slice(0, 2) + opCode
      var temp2 = '0x' + rawData.slice(2, 8)
      var counter = hexToDec(rawData.slice(8, 10), 32)
      var temp3 = '0x' + (counter & 0x1) + rawData.slice(10, 12)
      counter = (counter & 0xfe) >> 1

      Data = `PVTP ${temp}, ${temp2}, ${temp3}, 0x${decToHex(counter, 32)}`
      Interpretation = ` valP=${temp}=${hexToDec(temp, 32)} , valS=${temp2}=${hexToDec(
        temp2,
        32
      )}, valT=${temp3}=${hexToDec(temp3, 32)}, C=0x${decToHex(counter, 32)}=${counter}`
      CS = '-'
      break
    case 'TakeData2':
      break
    case 'Normal':
    case 'TGroup':
    case 'Broadcast':
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
  }

  return [CS, Object, ObjName, Data, Interpretation, Error]
}
