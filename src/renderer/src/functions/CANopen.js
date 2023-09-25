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
