/*******************************************************************************/
/*---------------------Number transformation functions------------------------ */
/*******************************************************************************/
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

//checks if the arr has any elements which are not hexa and returns the arr without the bad elements
//can be limited to 16 or 32 bits
function check_validity_hex(arr, type) {
  if (typeof arr == 'object') {
    arr.forEach((el) => {
      check_validity_hex(el, type)
    })
  }
  if (typeof arr == 'string') {
    arr = arr.split('')
    for (var i = 0; i < arr.length; i++) {
      if (isNaN(parseInt(arr[i], 16))) {
        arr[i] = ''
      }
    }
    arr = arr.join('')
    if (type == 8) {
      if (arr.length > 2) {
        arr = arr.split('')
        arr.splice(2)
        arr = arr.join('')
        return arr
      } else return arr
    }
    if (type == 16) {
      if (arr.length > 4) {
        arr = arr.split('')
        arr.splice(4)
        arr = arr.join('')
        return arr
      } else return arr
    }
    if (type == 32) {
      if (arr.length > 8) {
        arr = arr.split('')
        arr.splice(8)
        arr = arr.join('')
        return arr
      } else return arr
    }
    if (type == 64) {
      if (arr.length > 16) {
        arr = arr.split('')
        arr.splice(16)
        arr = arr.join('')
        return arr
      } else return arr
    }
    if (type == 0) {
      return arr
    }
  }
}

//checks if the arr has any elements which are not dec and returns the arr without
// the bad elements, unsigned 16 or 32 and we not cycling (going to + - then +) , definite limits
//We not accounting for 4.5
function check_validity_decimal(arr, resolution) {
  if (arr == '') {
    return ''
  }
  arr = arr.split('')
  var aux = ''
  if (arr[0] == '-') {
    aux = '-'
  }
  for (var i = 0; i < arr.length; i++) {
    if (isNaN(parseInt(arr[i], 10))) {
      arr[i] = ''
    }
  }
  arr = arr.join('')
  arr = aux.concat(arr)
  if (arr.length == 1 && arr[0] == '-') {
    return arr
  }
  if (arr == '') {
    return arr
  }
  if (resolution == 16) {
    arr = parseInt(arr, 10)
    var a = 32767
    if (arr > a) {
      a = a.toString()
      return a
    }
    if (arr < -a - 1) {
      arr = -a - 1
      arr = arr.toString()
      return arr
    }
    arr = arr.toString()
    return arr
  }
  if (resolution == 32) {
    arr = parseInt(arr, 10)
    var a = 2147483647
    if (arr > a) {
      a = a.toString()
      return a
    }
    if (arr < -a - 1) {
      arr = -a - 1
      arr = arr.toString()
      return arr
    }
    arr = arr.toString()
    return arr
  }
  //No filtration infinite access
  if (resolution == 0) {
    arr = parseInt(arr, 10).toString()
    return arr
  }
}

function checkVal_dec_comma(str, resolution) {
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
    aux3 = check_validity_decimal(aux3, 16)
  } else if (resolution == '32') {
    aux3 = check_validity_decimal(aux3, 32)
  } else if (resolution == '0') {
    var temp = ''
    if (aux3 == '--') {
      aux3 = '='
    }
    if (aux3[0] == '-' && aux3 != '-' && aux3[1] == '0') {
      temp = '-'
    }
    aux3 = check_validity_decimal(aux3, 0)
    aux3 = temp.concat(aux3)
  }

  if (aux != -1) {
    aux3 = aux3 + '.' + aux4

    return aux3
  } else {
    return aux3
  }
}
