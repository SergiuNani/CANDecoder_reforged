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
    aux3 = filterDecimal(aux3, 16)
  } else if (resolution == '32') {
    aux3 = filterDecimal(aux3, 32)
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
  if (string == '') {
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
    return string
  } else if (resolution == '0') {
    //No filtration infinite access
    string = parseInt(string, 10).toString()
    return string
  }
}

export function filterHex(hexString, resolution) {
  const filteredHex = hexString.replace(/[^0-9A-Fa-f]/g, '')
  if (resolution === '0') {
    return filteredHex
  }
  return filteredHex.substring(0, resolution / 4)
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
//---UNtested
function hexToDec(arr, resolution) {
  if (typeof arr == 'number') {
    arr = arr.toString()
    return hexToDec(arr, resolution)
  }
  if (typeof arr == 'string') {
    arr = check_validity_hex(arr, resolution)
    var aux

    if (arr == '') {
      return 0
    }
    aux = parseInt(arr, 16)
    if (resolution == 32) {
      if (aux - Math.pow(2, 31) < 0) {
        return aux
      } else {
        return aux - Math.pow(2, 32)
      }
    }
    if (resolution == 16) {
      if (aux - Math.pow(2, 15) < 0) {
        return aux
      } else {
        return aux - Math.pow(2, 16)
      }
    }
  }
  if (typeof arr == 'object') {
    arr = arr.map((x) => {
      return hexToDec(x, resolution)
    })
    return arr
  }
}
//small problem: in: number the 16 bit rez dont work cause checkValidity inp is string
function decToHex(arr, resolution) {
  if (typeof arr == 'number') {
    if (resolution == 32) {
      if (arr < 0) {
        arr = 4294967296 + arr

        return arr.toString(16).toUpperCase()
      } else {
        return (arr = arr.toString(16).toUpperCase())
      }
    }
    if (resolution == 16) {
      if (arr < 0) {
        arr = 65536 + arr

        return arr.toString(16).toUpperCase()
      } else {
        return (arr = arr.toString(16).toUpperCase())
      }
    }
  }
  if (typeof arr == 'string') {
    if (arr == '-' || arr == '') {
      return 0
    }
    arr = check_validity_decimal(arr, resolution)
    return decToHex(parseInt(arr, 10), resolution)
  }
  if (typeof arr == 'object') {
    arr = arr.map((x) => {
      return decToHex(x, resolution)
    })
  }

  return arr
}

function bin2hex(bin) {
  return parseInt(bin, 2).toString(16).toUpperCase()
}
function hex_to_ascii(str1) {
  var hex = str1.toString()
  var str = ''
  for (var n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16))
  }
  return str
}
