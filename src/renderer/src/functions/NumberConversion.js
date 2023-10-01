import { useContext } from 'react'
import { MotorSpecificationsContext } from '../App'
import { whatFG_isObject } from './CANopenFunctions'
/*******************************************************************************/
/*---------------------Number transformation functions------------------------ */
/*******************************************************************************/

export function filterDecimalWithComma(str, resolution) {
  var aux = str.indexOf('.')
  var aux2 = str.split('.')
  var aux3 = aux2[0]
  var aux4 = ''
  if (aux2.length > 1) {
    for (var i = 1; i < aux2.length; i++) {
      aux4 = aux4.concat(aux2[i])
    }
  }
  if (aux4 != '') {
    aux4 = aux4.split('')
    for (var k = 0; k < aux4.length; k++) {
      if (isNaN(parseInt(aux4[k], 10))) {
        aux4[k] = ''
      }
    }
    aux4 = aux4.join('')
    if (parseInt(aux4) > 99899) {
      aux4 = '99899'
    }
  }

  if (resolution == '16') {
    aux3 = filterDecimal(aux3, 8)
  } else if (resolution == '32') {
    aux3 = filterDecimal(aux3, 16)
  } else if (resolution == '8') {
    aux3 = filterDecimal(aux3, 8)
  } else if (resolution == '0') {
    var temp = ''
    if (aux3 == '--') {
      aux3 = '='
    }
    if (aux3[0] == '-' && aux3 != '-' && aux3[1] == '0') {
      temp = '-'
    }
    aux3 = filterDecimal(aux3, 0)
    aux3 = temp.concat(aux3)
  }

  if (aux != -1) {
    aux3 = aux3 + '.' + aux4

    return aux3
  } else {
    if (aux3 == 'NaN') aux3 = ''
    return aux3
  }
}

export function filterDecimal(string, resolution) {
  if (string == '') {
    return ''
  }
  string = string.split('')
  var keepMinus = ''
  if (string[0] == '-') {
    keepMinus = '-'
  }
  for (var i = 0; i < string.length; i++) {
    if (isNaN(parseInt(string[i], 10))) {
      string[i] = ''
    }
  }
  string = string.join('')
  string = keepMinus.concat(string)
  if (string.length == 1 && string[0] == '-') {
    return string
  }
  if (resolution == '16') {
    string = parseInt(string, 10)
    var a = 32767
    if (string > a) {
      a = a.toString()
      return a
    }
    if (string < -a - 1) {
      string = -a - 1
      string = string.toString()
      return string
    }
    string = string.toString()
    if (string == 'NaN') string = ''
    return string
  } else if (resolution == '8') {
    string = parseInt(string, 10)
    var a = 127
    if (string > a) {
      a = a.toString()
      return a
    }
    if (string < -a - 1) {
      string = -a - 1
      string = string.toString()
      return string
    }
    string = string.toString()
    if (string == 'NaN') string = ''
    return string
  } else if (resolution == '32') {
    string = parseInt(string, 10)
    var a = 2147483647
    if (string > a) {
      a = a.toString()
      return a
    } else if (string < -a - 1) {
      string = -a - 1
      string = string.toString()
      return string
    }
    string = string.toString()
    if (string == 'NaN') string = ''
    return string
  } else if (resolution == '0') {
    //No filtration infinite access
    string = parseInt(string, 10).toString()
    if (string == 'NaN') string = ''
    return string
  } else if (resolution == 'TIME') {
    //Special filtration for time units
    string = parseInt(string, 10)
    var a = 65536
    if (string > a) {
      a = a.toString()
      return a
    } else if (string < 0) {
      return ''
    }
    string = string.toString()
    if (string == 'NaN') string = ''
    return string
  }
}

export function filterHex(hexString, resolution) {
  const filteredHex = hexString.replace(/[^0-9A-Fa-f]/g, '')
  if (resolution === '0') {
    return filteredHex.toUpperCase()
  }
  return filteredHex.substring(0, resolution / 4).toUpperCase()
}

export function hex2bin(hex, resolution) {
  var exit = ''
  if (resolution == 16) {
    if (hex.length > 4) hex = hex.slice(0, 4)
    exit = parseInt(hex, 16).toString(2).padStart(16, '0')
  } else if (resolution == 8) {
    if (hex.length > 2) hex = hex.slice(0, 2)
    exit = parseInt(hex, 16).toString(2).padStart(8, '0')
  } else if (resolution == 32) {
    if (hex.length > 8) hex = hex.slice(0, 8)
    exit = parseInt(hex, 16).toString(2).padStart(32, '0')
  } else {
    exit = 'Invalid Resolution'
  }
  return exit
}
/*IN: 15..8 OUT:15 || 31-8 out:31*/
export function getMaxNumberFromStringRange(input) {
  const numbers = input.match(/\d+/g).map(Number)
  return Math.max(...numbers)
}
/*IN: 15..8 OUT:8 || 31 out:31*/
export function getRangeNumberFromStringRange(input) {
  const numbers = input.match(/\d+/g).map(Number)
  if (numbers.length > 1) return Math.abs(numbers[0] - numbers[1]) + 1
  else return 1
}
export function bin2hex(bin) {
  return parseInt(bin, 2).toString(16).toUpperCase()
}
export function decToHex(num, resolution) {
  if (![8, 16, 32].includes(resolution)) {
    return 0
  }
  if (typeof num === 'string') {
    num = parseInt(num, 10)
  }

  if (typeof num !== 'number' || isNaN(num)) {
    return 0 // Handle invalid input
  }

  let maxValue = Math.pow(2, resolution)
  let maxValuePos = Math.pow(2, resolution - 1)
  if (num >= maxValuePos - 1) {
    num = maxValuePos - 1
  } else if (num < 0 && -num >= maxValuePos) {
    num = -maxValuePos
  }
  if (num < 0) {
    num = maxValue + (num % maxValue)
  }

  return num.toString(16).toUpperCase()
}

export function hexToDec(hex, resolution) {
  if (![8, 16, 32].includes(resolution) || typeof hex !== 'string' || hex === '') {
    return 0
  }
  if (typeof hex === 'number') {
    hex = hex.toString()
  }
  if (hex.length > resolution / 4) {
    return 0
  }

  const intValue = parseInt(hex, 16)
  const maxValue = Math.pow(2, resolution - 1)

  if (intValue < maxValue) {
    return intValue
  } else {
    return intValue - Math.pow(2, resolution)
  }
}

export function fixed2Hex(input) {
  //only for 32bits variables like CSPD or CACC
  input = parseFloat(input)
  var result = Math.floor(input * 65536)
  return decToHex(result, 32)
}
export function hex2Fixed(input) {
  //only for 32bits variables like CSPD or CACC
  var result = hexToDec(input, 32)
  return parseFloat(result) / 65536
}
//Untested
function hex_to_ascii(str1) {
  var hex = str1.toString()
  var str = ''
  for (var n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16))
  }
  return str
}

/*LittleEndian(arr) - Little to Big Endian transformation */
/*IN: LittleEndian("AB CD E")*/
/*OUT:  0ECDAB*/
export function LittleEndian(arr) {
  // WE assume that we don`t get bs values
  var aux1
  var aux2
  if (arr == '') {
    return ''
  }
  if (typeof arr == 'object') {
    arr = arr.map((x) => {
      return LittleEndian(x)
    })
    return arr
  }
  if (typeof arr == 'number') {
    arr = arr.toString()
    return LittleEndian(arr)
  }
  if (typeof arr == 'string') {
    arr = arr.toUpperCase()
    arr = filterHex(arr, 32)
    //case of "AB CD E"
    if (arr.length % 2 != 0) {
      arr = arr.split('')
      arr[arr.length - 1] = `0${arr[arr.length - 1]}`
      arr = arr.join('')
    }
    aux2 = arr.match(/.{1,2}/g)

    for (var i = 0; i < aux2.length / 2; i++) {
      aux1 = aux2[i]
      aux2[i] = aux2[aux2.length - 1 - i]
      aux2[aux2.length - 1 - i] = aux1
    }
    return aux2.join('')
  }
}

/*------------------------------------*/

/*   Function    :function UnitsConvertor(inputValue,inputUnits,returnUnits,fullRot_IU,object_type) */
//   Description : It will internally convert one unit to another and return only the value in the specified units
/*   IN   : UnitsConvertor("258", "in/s^2", "IU", OneRot_IU_value.value, "6085");*/
/*   OUT  : "1.31064"  */
/*------------------------------------*/

export function UnitsConvertor(
  inputValue,
  inputUnits,
  returnUnits,
  slowLoop,
  fullRot_IU,
  object_type,
  objectTypeDirectly
) {
  var slowLoop = slowLoop / 1000
  var fullRot_IU = parseInt(fullRot_IU)
  const inputValueFloat = parseFloat(inputValue)
  if ((objectTypeDirectly = 'objectTypeDirectly')) {
  } else {
    object_type = whatFG_isObject(object_type)
    if (object_type == null) return 0
  }

  function convertValue(unitFactors) {
    const inputFactor = unitFactors[inputUnits] || 1
    const outputFactor = unitFactors[returnUnits] || 1
    const aux_IU = inputValueFloat * inputFactor

    let result
    if (object_type == 'SPD' || object_type == 'ACC') {
      result = aux_IU / outputFactor
      var aux = result.toString() // addressing the x.999 where we will ceil that value
      aux = aux.split('.')
      if (aux[1] && aux[1].length > 5) {
        result = result.toFixed(5)
      }
      if (aux[1] && (aux[1].slice(0, 3) == '999' || aux[1].slice(0, 5) == '00000')) {
        result = Math.ceil(result)
      }
    } else {
      result = aux_IU / outputFactor
    }
    return result.toString()
  }

  if (object_type === 'POS') {
    const unitFactors = {
      rad: fullRot_IU / (2 * Math.PI),
      deg: (fullRot_IU / (2 * Math.PI)) * 0.0174533,
      rot: fullRot_IU,
      IU: 1,
      m: 1,
      mm: 0.001,
      um: 1e-6,
      in: 0.0254,
      ft: 0.3048
    }
    return convertValue(unitFactors)
  } else if (object_type === 'SPD') {
    const unitFactors = {
      rpm: ((fullRot_IU * slowLoop) / (2 * Math.PI)) * 0.10472,
      'rad/s': (fullRot_IU * slowLoop) / (2 * Math.PI),
      rps: ((fullRot_IU * slowLoop) / (2 * Math.PI)) * 6.2831853071796,
      'deg/s': ((fullRot_IU * slowLoop) / (2 * Math.PI)) * 0.0174533,
      'deg/min': ((fullRot_IU * slowLoop) / (2 * Math.PI)) * 0.000290888,
      IU: 1,
      'm/s': fullRot_IU * slowLoop,
      'mm/s': fullRot_IU * slowLoop * 0.001,
      'um/s': fullRot_IU * slowLoop * 1e-6,
      'in/s': fullRot_IU * slowLoop * 0.0254,
      'ft/s': fullRot_IU * slowLoop * 0.3048,
      'mm/min': fullRot_IU * slowLoop * 1.66667e-5,
      'in/min': (fullRot_IU * slowLoop) / 2362.2,
      'ft/min': fullRot_IU * slowLoop * 0.00508
    }
    return convertValue(unitFactors)
  } else if (object_type === 'ACC') {
    const accelerationFactors = {
      'rad/s^2': (fullRot_IU * Math.pow(slowLoop, 2)) / (2 * Math.PI),
      'deg/s^2': (fullRot_IU * Math.pow(slowLoop, 2)) / (2 * Math.PI) / 57.2958,
      'rot/s^2': (fullRot_IU * Math.pow(slowLoop, 2)) / (2 * Math.PI) / 0.15915495,
      'krad/s^2': (fullRot_IU * Math.pow(slowLoop, 2)) / (2 * Math.PI) / 0.001,
      IU: 1,
      'm/s^2': fullRot_IU * Math.pow(slowLoop, 2),
      'mm/s^2': fullRot_IU * Math.pow(slowLoop, 2) * 0.001,
      'um/s^2': fullRot_IU * Math.pow(slowLoop, 2) * 0.000001,
      'in/s^2': (fullRot_IU * Math.pow(slowLoop, 2)) / 39.370079,
      'ft/s^2': (fullRot_IU * Math.pow(slowLoop, 2)) / 3.280839895,
      g: fullRot_IU * Math.pow(slowLoop, 2) * 9.80665
    }
    if (inputUnits in accelerationFactors) {
      return convertValue(accelerationFactors)
    }
  } else if (object_type === 'TIME') {
    const timeFactors = {
      s: 1000,
      ms: 1,
      IU: 1
    }
    if (inputUnits in timeFactors) {
      return convertValue(timeFactors)
    }
  }
  return '' // Handle unsupported object_type or inputUnits
}
