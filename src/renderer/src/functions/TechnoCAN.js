export function DecodeTCANglobal(cobID_array, message) {
  return ['-', '-', '-', '-', `TCAN: ${cobID_array[2]}`, 'neutral']
}
