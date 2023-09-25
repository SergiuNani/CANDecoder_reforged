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
  } else if (resolution == 'time') {
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
function hex_to_ascii(str1) {
  var hex = str1.toString()
  var str = ''
  for (var n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16))
  }
  return str
}

/*------------------------------------*/

/*   Function    :function UnitsConvertor(inputValue,inputUnits,returnUnits,fullRot_IU,object_type) */
//   Description : It will internally convert one unit to another and return only the value in the specified units
/*   IN   : UnitsConvertor("258", "in/s^2", "IU", OneRot_IU_value.value, "6085");*/
/*   OUT  : "1.31064"  */
/*------------------------------------*/
export function UnitsConvertor1(inputValue, inputUnits, returnUnits, fullRot_IU, object_type) {
  fullRot_IU = parseInt(fullRot_IU)
  inputValue = parseFloat(inputValue)

  object_type = FG_object(object_type)
  var aux_IU //temp var for all types of IU

  //For pos

  //Velocity

  if (object_type == 'pos') {
    //ROT
    var one_rad = fullRot_IU / (2 * Math.PI)
    var one_deg = one_rad * 0.0174533
    var one_rot = one_rad * 2 * Math.PI
    var aux_rad
    var aux_deg
    var aux_rot
    //LIN
    var one_m = fullRot_IU
    var one_mm = one_m * 0.001
    var one_um = one_m * 1e-6
    var one_in = one_m * 0.0254
    var one_ft = one_m * 0.3048
    var aux_m
    var aux_mm
    var aux_um
    var aux_in
    var aux_ft

    if (inputUnits == 'rad') {
      aux_IU = one_rad * inputValue
    } else if (inputUnits == 'deg') {
      aux_IU = one_deg * inputValue
    } else if (inputUnits == 'rot') {
      aux_IU = one_rot * inputValue
    } else if (inputUnits == 'IU') {
      aux_IU = inputValue
    } else if (inputUnits == 'm') {
      aux_IU = one_m * inputValue
    } else if (inputUnits == 'mm') {
      aux_IU = one_mm * inputValue
    } else if (inputUnits == 'um') {
      aux_IU = one_um * inputValue
    } else if (inputUnits == 'in') {
      aux_IU = one_in * inputValue
    } else if (inputUnits == 'ft') {
      aux_IU = one_ft * inputValue
    }
    //rot
    aux_rad = Number((aux_IU / one_rad).toFixed(3))
    aux_deg = Math.ceil(Number((aux_IU / one_deg).toFixed(3)))
    aux_rot = Number((aux_IU / one_rot).toFixed(3))

    //lin
    aux_m = Number((aux_IU / one_m).toFixed(3))
    aux_mm = Number((aux_IU / one_mm).toFixed(3))
    aux_um = Number((aux_IU / one_um).toFixed(3))
    aux_in = Number((aux_IU / one_in).toFixed(3))
    aux_ft = Number((aux_IU / one_ft).toFixed(3))
    aux_IU = Math.floor(aux_IU)

    if (returnUnits == 'IU') {
      return aux_IU.toString()
    } else if (returnUnits == 'rad') {
      return aux_rad.toString()
    } else if (returnUnits == 'rot') {
      return aux_rot.toString()
    } else if (returnUnits == 'deg') {
      return aux_deg.toString()
    } else if (returnUnits == 'm') {
      return aux_m.toString()
    } else if (returnUnits == 'mm') {
      return aux_mm.toString()
    } else if (returnUnits == 'um') {
      return aux_um.toString()
    } else if (returnUnits == 'in') {
      return aux_in.toString()
    } else if (returnUnits == 'ft') {
      return aux_ft.toString()
    }
    return
  }
  //VELOCITY
  if (object_type == 'spd') {
    //rot
    var one_rad_s = (fullRot_IU * slow_loop) / (2 * Math.PI)
    var one_rpm = one_rad_s * 0.10472
    var one_rps = one_rad_s * 6.2831853071796
    var one_deg_s = one_rad_s * 0.0174533
    var one_deg_min = one_rad_s * 0.000290888
    var aux_rpm
    var aux_rad_s
    var aux_rps
    var aux_deg_s
    var aux_deg_min
    //LIN
    var one_m_s = fullRot_IU * slow_loop
    var one_mm_s = one_m_s * 0.001
    var one_um_s = one_m_s * 1e-6
    var one_in_s = one_m_s * 0.0254
    var one_ft_s = one_m_s * 0.3048
    var one_mm_min = one_m_s * 1.66667e-5
    var one_in_min = one_m_s / 2362.2
    var one_ft_min = one_m_s * 0.00508
    var aux_m_s
    var aux_mm_s
    var aux_um_s
    var aux_in_s
    var aux_ft_s
    var aux_mm_min
    var aux_in_min
    var aux_ft_min

    if (inputUnits == 'rpm') {
      aux_IU = one_rpm * inputValue
    } else if (inputUnits == 'rad/s') {
      aux_IU = one_rad_s * inputValue
    } else if (inputUnits == 'rps') {
      aux_IU = one_rps * inputValue
    } else if (inputUnits == 'deg/s') {
      aux_IU = one_deg_s * inputValue
    } else if (inputUnits == 'deg/min') {
      aux_IU = one_deg_min * inputValue
    } else if (inputUnits == 'IU') {
      aux_IU = inputValue
    } else if (inputUnits == 'm/s') {
      aux_IU = one_m_s * inputValue
    } else if (inputUnits == 'mm/s') {
      aux_IU = one_mm_s * inputValue
    } else if (inputUnits == 'um/s') {
      aux_IU = one_um_s * inputValue
    } else if (inputUnits == 'in/s') {
      aux_IU = one_in_s * inputValue
    } else if (inputUnits == 'ft/s') {
      aux_IU = one_ft_s * inputValue
    } else if (inputUnits == 'mm/min') {
      aux_IU = one_mm_min * inputValue
    } else if (inputUnits == 'in/min') {
      aux_IU = one_in_min * inputValue
    } else if (inputUnits == 'ft/min') {
      aux_IU = one_ft_min * inputValue
    }
    aux_rpm = Number((aux_IU / one_rpm).toFixed(3))
    aux_rad_s = Number((aux_IU / one_rad_s).toFixed(3))
    aux_rps = Number((aux_IU / one_rps).toFixed(3))
    aux_deg_s = Number((aux_IU / one_deg_s).toFixed(3))
    aux_deg_min = Number((aux_IU / one_deg_min).toFixed(3))
    //lin
    aux_m_s = Number((aux_IU / one_m_s).toFixed(3))
    aux_mm_s = Number((aux_IU / one_mm_s).toFixed(3))
    aux_um_s = Number((aux_IU / one_um_s).toFixed(3))
    aux_in_s = Number((aux_IU / one_in_s).toFixed(3))
    aux_ft_s = Number((aux_IU / one_ft_s).toFixed(3))
    aux_mm_min = Number((aux_IU / one_mm_min).toFixed(3))
    aux_in_min = Number((aux_IU / one_in_min).toFixed(3))
    aux_ft_min = Number((aux_IU / one_ft_min).toFixed(3))
    aux_IU = Number(aux_IU.toFixed(4))

    if (returnUnits == 'IU') {
      return aux_IU.toString()
    } else if (returnUnits == 'deg/min') {
      return aux_deg_min.toString()
    } else if (returnUnits == 'deg/s') {
      return aux_deg_s.toString()
    } else if (returnUnits == 'rps') {
      return aux_rps.toString()
    } else if (returnUnits == 'rad/s') {
      return aux_rad_s.toString()
    } else if (returnUnits == 'rpm') {
      return aux_rpm.toString()
    } else if (returnUnits == 'm/s') {
      return aux_m_s.toString()
    } else if (returnUnits == 'mm/s') {
      return aux_mm_s.toString()
    } else if (returnUnits == 'um/s') {
      return aux_um_s.toString()
    } else if (returnUnits == 'in/s') {
      return aux_in_s.toString()
    } else if (returnUnits == 'ft/s') {
      return aux_ft_s.toString()
    } else if (returnUnits == 'mm/min') {
      return aux_mm_min.toString()
    } else if (returnUnits == 'in/min') {
      return aux_in_min.toString()
    } else if (returnUnits == 'ft/min') {
      return aux_ft_min.toString()
    }
    return
  }
  //ACCELERATION CONDITIONS
  if (object_type == 'acc') {
    var one_rad_s2 = (fullRot_IU * Math.pow(slow_loop, 2)) / (2 * Math.PI)
    var one_deg_s2 = one_rad_s2 / 57.2958
    var one_rot_s2 = one_rad_s2 / 0.15915495
    var one_krad_s2 = one_rad_s2 / 0.001
    var aux_rad_s2
    var aux_deg_s2
    var aux_rot_s2
    var aux_krad_s2

    //lin
    var one_m_s2 = fullRot_IU * Math.pow(slow_loop, 2)
    var one_mm_s2 = one_m_s2 * 0.001
    var one_um_s2 = one_m_s2 * 0.000001
    var one_in_s2 = one_m_s2 / 39.370079
    var one_ft_s2 = one_m_s2 / 3.280839895
    var one_g = one_m_s2 * 9.80665
    var aux_m_s2
    var aux_mm_s2
    var aux_um_s2
    var aux_in_s2
    var aux_ft_s2
    var aux_g

    if (inputUnits == 'rad/s^2') {
      aux_IU = one_rad_s2 * inputValue
    } else if (inputUnits == 'deg/s^2') {
      aux_IU = one_deg_s2 * inputValue
    } else if (inputUnits == 'rot/s^2') {
      aux_IU = one_rot_s2 * inputValue
    } else if (inputUnits == 'krad/s^2') {
      aux_IU = one_krad_s2 * inputValue
    } else if (inputUnits == 'IU') {
      aux_IU = inputValue
    } else if (inputUnits == 'm/s^2') {
      aux_IU = one_m_s2 * inputValue
    } else if (inputUnits == 'mm/s^2') {
      aux_IU = one_mm_s2 * inputValue
    } else if (inputUnits == 'um/s^2') {
      aux_IU = one_um_s2 * inputValue
    } else if (inputUnits == 'in/s^2') {
      aux_IU = one_in_s2 * inputValue
    } else if (inputUnits == 'ft/s^2') {
      aux_IU = one_ft_s2 * inputValue
    } else if (inputUnits == 'g') {
      aux_IU = one_g * inputValue
    }
    aux_rad_s2 = Number((aux_IU / one_rad_s2).toFixed(3))
    aux_deg_s2 = Number((aux_IU / one_deg_s2).toFixed(3))
    aux_rot_s2 = Number((aux_IU / one_rot_s2).toFixed(3))
    aux_krad_s2 = Number((aux_IU / one_krad_s2).toFixed(3))
    //lin
    aux_m_s2 = Number((aux_IU / one_m_s2).toFixed(3))
    aux_mm_s2 = Number((aux_IU / one_mm_s2).toFixed(3))
    aux_um_s2 = Number((aux_IU / one_um_s2).toFixed(3))
    aux_in_s2 = Number((aux_IU / one_in_s2).toFixed(3))
    aux_ft_s2 = Number((aux_IU / one_ft_s2).toFixed(3))
    aux_g = Number((aux_IU / one_g).toFixed(3))
    aux_IU = Number(aux_IU.toFixed(4))

    if (returnUnits == 'IU') {
      return aux_IU.toString()
    } else if (returnUnits == 'krad/s^2') {
      return aux_krad_s2.toString()
    } else if (returnUnits == 'rot/s^2') {
      return aux_rot_s2.toString()
    } else if (returnUnits == 'deg/s^2') {
      return aux_deg_s2.toString()
    } else if (returnUnits == 'rad/s^2') {
      return aux_rad_s2.toString()
    } else if (returnUnits == 'm/s^2') {
      return aux_m_s2.toString()
    } else if (returnUnits == 'mm/s^2') {
      return aux_mm_s2.toString()
    } else if (returnUnits == 'um/s^2') {
      return aux_um_s2.toString()
    } else if (returnUnits == 'in/s^2') {
      return aux_in_s2.toString()
    } else if (returnUnits == 'ft/s^2') {
      return aux_ft_s2.toString()
    } else if (returnUnits == 'g') {
      return aux_g.toString()
    }
    return
  }

  if (object_type == 'time') {
    var aux_s
    var aux_ms

    if (inputUnits == 'IU') {
      aux_IU = inputValue
    } else if (inputUnits == 's') {
      aux_IU = inputValue * 1000
    } else if (inputUnits == 'ms') {
      aux_IU = inputValue
    }

    aux_ms = Number(aux_IU.toFixed(3))
    aux_s = Number((aux_IU / 1000).toFixed(3))
    aux_IU = Math.floor(aux_IU)

    if (returnUnits == 'IU') {
      return aux_IU.toString()
    } else if (returnUnits == 's') {
      return aux_s.toString()
    } else if (returnUnits == 'ms') {
      return aux_ms.toString()
    }
    return
  }
}

export function UnitsConvertor(inputValue, inputUnits, returnUnits, fullRot_IU, object_type) {
  const slow_loop = 1 // Define the value of slow_loop here

  fullRot_IU = parseInt(fullRot_IU)
  inputValue = parseFloat(inputValue)

  object_type = FG_object(object_type)
  var aux_IU // temp var for all types of IU

  const convert = (value, fromUnit, toUnit, conversionFactor) => {
    if (inputUnits === fromUnit) {
      aux_IU = conversionFactor * inputValue
    } else if (inputUnits === 'IU') {
      aux_IU = inputValue
    }
    return Number(aux_IU.toFixed(3))
  }

  if (object_type === 'pos') {
    if (returnUnits === 'IU') {
      return inputValue.toString()
    }

    // Define conversion factors
    const conversionFactors = {
      rad: fullRot_IU / (2 * Math.PI),
      deg: fullRot_IU / 360,
      rot: fullRot_IU,
      m: fullRot_IU,
      mm: fullRot_IU * 0.001,
      um: fullRot_IU * 1e-6,
      in: fullRot_IU * 0.0254,
      ft: fullRot_IU * 0.3048
    }

    aux_IU = convert(inputValue, inputUnits, returnUnits, conversionFactors[returnUnits])

    return aux_IU.toString()
  }

  if (object_type === 'spd') {
    if (returnUnits === 'IU') {
      return inputValue.toString()
    }

    // Define conversion factors
    const conversionFactors = {
      rpm: ((fullRot_IU * slow_loop) / (2 * Math.PI)) * 60,
      'rad/s': (fullRot_IU * slow_loop) / (2 * Math.PI),
      rps: (fullRot_IU * slow_loop) / (2 * Math.PI),
      'deg/s': (fullRot_IU * slow_loop) / 360,
      'deg/min': (fullRot_IU * slow_loop) / 6,
      'm/s': fullRot_IU * slow_loop,
      'mm/s': fullRot_IU * slow_loop * 0.001,
      'um/s': fullRot_IU * slow_loop * 1e-6,
      'in/s': fullRot_IU * slow_loop * 0.0254,
      'ft/s': fullRot_IU * slow_loop * 0.3048,
      'mm/min': fullRot_IU * slow_loop * 0.001 * 60,
      'in/min': fullRot_IU * slow_loop * 0.0254 * 60,
      'ft/min': fullRot_IU * slow_loop * 0.3048 * 60
    }

    aux_IU = convert(inputValue, inputUnits, returnUnits, conversionFactors[returnUnits])

    return aux_IU.toString()
  }

  if (object_type === 'acc') {
    if (returnUnits === 'IU') {
      return inputValue.toString()
    }
    // Define conversion factors
    const conversionFactors = {
      'rad/s^2': (fullRot_IU * Math.pow(slow_loop, 2)) / (2 * Math.PI),
      'deg/s^2': (fullRot_IU * Math.pow(slow_loop, 2)) / 360,
      'rot/s^2': fullRot_IU * Math.pow(slow_loop, 2),
      'krad/s^2': fullRot_IU * Math.pow(slow_loop, 2) * 0.001,
      'm/s^2': fullRot_IU * Math.pow(slow_loop, 2),
      'mm/s^2': fullRot_IU * Math.pow(slow_loop, 2) * 0.001,
      'um/s^2': fullRot_IU * Math.pow(slow_loop, 2) * 1e-6,
      'in/s^2': fullRot_IU * Math.pow(slow_loop, 2) * 0.0254,
      'ft/s^2': fullRot_IU * Math.pow(slow_loop, 2) * 0.3048,
      g: fullRot_IU * Math.pow(slow_loop, 2) * 9.80665
    }

    aux_IU = convert(inputValue, inputUnits, returnUnits, conversionFactors[returnUnits])

    return aux_IU.toString()
  }

  if (object_type === 'time') {
    if (returnUnits === 'IU') {
      return inputValue.toString()
    }

    if (inputUnits === 'IU') {
      aux_IU = inputValue
    } else if (inputUnits === 's') {
      aux_IU = inputValue * 1000
    } else if (inputUnits === 'ms') {
      aux_IU = inputValue
    }

    return Number(aux_IU.toFixed(3)).toString()
  }
}
