import { Objects_collection_LS } from '../App'
import { LittleEndian } from './NumberConversion'
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

  if (subIndex) {
    var aux_Obj = index.concat(subIndex)
    if (SearchResult[0].Info && SearchResult[0].Info.SubItem) {
      SearchResult = SearchResult[0].Info.SubItem.filter((object) => object.Index.match(aux_Obj))
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
  // Message will always be less then 16 characters
  var CS = message.slice(0, 2)
  var ErrorStatus = 'good'
  var Object = LittleEndian(message.slice(2, 6))
  Object = GetObject(Object.concat('_' + message.slice(6, 8)))
  var aux_message = LittleEndian(message.slice(8, 16))

  //Return: [CS, Object , ObjectName , data , Interpretation ]
  return [CS, Object[0], Object[1], aux_message, 'Interpretation', ErrorStatus]
}
