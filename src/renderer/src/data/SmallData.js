/*------------------------------Global Parameters------------------------------ */

/*------------------------------Factor Group Units------------------------------ */
export const FG_units_pos_rot = ['IU', 'rad', 'deg', 'rot']
export const FG_units_spd_rot = ['IU', 'rad/s', 'rpm', 'rps', 'deg/s', 'deg/min', 'in/s']
export const FG_units_acc_rot = ['IU', 'rad/s^2', 'deg/s^2', 'rot/s^2', 'krad/s^2', 'in/s^2']
export const FG_units_jerk_rot = ['IU', 'rad/s^3', 'deg/s^3', 'rot/s^3', 'krad/s^3', 'in/s^3']
export const FG_units_spd_lin = ['IU', 'm/s', 'mm/s', 'um/s', 'mm/min', 'in/s']
export const FG_units_pos_lin = ['IU', 'm', 'mm', 'um']
export const FG_units_acc_lin = ['IU', 'm/s^2', 'mm/s^2', 'um/s^2', 'in/s^2']
export const FG_units_jerk_lin = ['IU', 'm/s^3', 'mm/s^3', 'um/s^3', 'in/s^3']
export const FG_units_time = ['IU', 'ms', 's']
export const Types_of_CANopenMsgs_array = [
  ' NMT',
  ' EMCY',
  ' RPDO1',
  ' RPDO2',
  ' RPDO3',
  ' RPDO4',
  ' TPDO1',
  ' TPDO2',
  ' TPDO3',
  ' TPDO4',
  ' TSDO',
  ' RSDO',
  ' NMT_M',
  ' TCAN',
  ' Errors'
]

export var DefaultPDOs = {
  RPDO1: ['6040', '00', '', '', '', '', '', ''],
  RPDO2: ['6040', '00', '6060', '00', '', '', '', ''],
  RPDO3: ['6040', '00', '607A', '00', '', '', '', ''],
  RPDO4: ['6040', '00', '60FF', '00', '', '', '', ''],
  TPDO1: ['6041', '00', '', '', '', '', '', ''],
  TPDO2: ['6041', '00', '6061', '00', '', '', '', ''],
  TPDO3: ['6041', '00', '6064', '00', '', '', '', ''],
  TPDO4: ['6041', '00', '606C', '00', '', '', '', '']
}

export const CompatibleMapping = {
  8: ['6060', '', '', '', '', '', '', ''],
  16: ['6040', '', '', '', '', '', '', ''],
  24: ['6040', '', '100D', '', '', '', '', ''],
  32: ['6085', '', '', '', '', '', '', ''],
  40: ['6081', '', '6060', '', '', '', '', ''],
  48: ['607A', '', '2023', '', '', '', '', ''],
  56: ['607A', '', '6041', '', '6061', '', '', ''],
  64: ['607A', '', '6081', '', '', '', '', '']
}

export const CompatibleMapping1 = {
  8: ['6060'],
  16: ['6040'],
  24: ['6040', '100D'],
  32: ['6085'],
  40: ['6081', '6060'],
  48: ['607A', '2023'],
  56: ['607A', '6041', '6061'],
  64: ['607A', '6081']
}
