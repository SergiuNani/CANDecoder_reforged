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
    case 'PVT':
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
      Object = result[4].toString()
      Data = result[1]
      Interpretation = result[2]

      break

    case 'TakeData':
      Object = hexToDec(opCode.slice(0, 2), 16) >> 3
      Object = Object.toString()
      opCode = 'B4'.concat(opCode.slice(2, 4))
      result = getOpCode_RS232(opCode, '0000' + rawData)
      Data = result[1]
      Interpretation = result[2]
      break
    case 'TakeData2':
      var temp = message.slice(0, 2)
      var temp2 =
        LittleEndian(message.slice(2, 6)) +
        LittleEndian(message.slice(6, 10)) +
        LittleEndian(message.slice(10, 14))

      if (temp == '00') {
        result = getOpCode_RS232('D401', temp2)
      } else if (temp == '80') {
        result = getOpCode_RS232('D501', temp2)
      } else {
        result = ['IDK', 'IDK']
      }

      Data = result[1]
      Interpretation = result[2]

      break
    case 'Host':
      result = getOpCode_RS232(opCode, rawData)
      // return [errorStatus, Data, Interpretation, msgType, SenderMain]
      if (result[0] == 'error') {
        Error = 'error'
      }
      if (result[4] != '-') {
        Object = result[4]
      }
      Object = result[4].toString()
      Data = result[1]
      Interpretation = result[2]

      break

    case 'TSYNC':
      break
    case 'TimeStamp':
      var time =
        LittleEndian(message.slice(8, 12)) +
        LittleEndian(message.slice(4, 8)) +
        LittleEndian(message.slice(0, 4))
      Data = `0x${time}h us`
      time = hexToDec(time, 64)
      Interpretation = `${time}d us`
      break
  }

  return [CS, Object, ObjName, Data, Interpretation, Error]
}
