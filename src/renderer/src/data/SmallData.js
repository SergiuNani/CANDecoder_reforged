/*------------------------------Global Parameters------------------------------ */

/*------------------------------Factor Group Units------------------------------ */

export const FG_Objects_Array = {
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
    '1017',
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
  32: ['6041', '208E'],
  40: ['6081', '6060'],
  48: ['607A', '2023'],
  56: ['607A', '6041', '6061'],
  64: ['607A', '6081']
}

export const Mapping_objects_array = [
  '1400',
  '1400_00',
  '1400_01',
  '1400_02',
  '1401',
  '1401_00',
  '1401_01',
  '1401_02',
  '1402',
  '1402_00',
  '1402_01',
  '1402_02',
  '1403',
  '1403_00',
  '1403_01',
  '1403_02',
  '1600',
  '1600_00',
  '1600_01',
  '1600_02',
  '1600_03',
  '1600_04',
  '1601',
  '1601_00',
  '1601_01',
  '1601_02',
  '1601_03',
  '1601_04',
  '1602',
  '1602_00',
  '1602_01',
  '1602_02',
  '1602_03',
  '1602_04',
  '1603',
  '1603_00',
  '1603_01',
  '1603_02',
  '1603_03',
  '1603_04',
  '1800',
  '1800_00',
  '1800_01',
  '1800_02',
  '1800_03',
  '1800_04',
  '1800_05',
  '1801',
  '1801_00',
  '1801_01',
  '1801_02',
  '1801_03',
  '1801_04',
  '1801_05',
  '1802',
  '1802_00',
  '1802_01',
  '1802_02',
  '1802_03',
  '1802_04',
  '1802_05',
  '1803',
  '1803_00',
  '1803_01',
  '1803_02',
  '1803_03',
  '1803_04',
  '1803_05',
  '1A00',
  '1A00_00',
  '1A00_01',
  '1A00_02',
  '1A00_03',
  '1A00_04',
  '1A01',
  '1A01_00',
  '1A01_01',
  '1A01_02',
  '1A01_03',
  '1A01_04',
  '1A02',
  '1A02_00',
  '1A02_01',
  '1A02_02',
  '1A02_03',
  '1A02_04',
  '1A03',
  '1A03_00',
  '1A03_01',
  '1A03_02',
  '1A03_03',
  '1A03_04'
]

export const EMCYcodes = {
  '0000': 'Error Reset or No Error',
  1000: 'Generic Error; sent when a communication error occurs on CAN (object 2000h bit0=1; usually followed by EMCY code 0x7500',
  2310: 'Continuous over-current',
  2340: 'Short-circuit',
  3210: 'DC-link over-voltage',
  3220: 'DC-link under-voltage',
  4280: 'Over temperature motor',
  4310: 'Over temperature drive',
  5441: 'Drive disabled due to enable or STO input',
  5442: 'Negative limit switch active',
  5443: 'Positive limit switch active',
  6100: 'Invalid setup data',
  7300: 'Sensor error',
  7500: 'Communication error',
  8110: 'CAN overrun (message lost)',
  8210: 'Assuming - the PDO length you are trying to write to is not correct',
  8130: 'Life guard error or heartbeat error',
  8331: 'I2t protection triggered',
  8580: 'Position wraparound',
  8611: 'Control error / Following error',
  9000: 'Command error',
  FF01: 'Generic interpolated position mode error (PVT / PT error)',
  FF02: 'Change set acknowledge bit wrong value',
  FF03: 'Specified homing method not available',
  FF04: 'A wrong mode is set in object 6060h, modes of operation',
  FF05: 'Specified digital I/O line not available',
  FF06: 'Positive software position limit triggered',
  FF07: 'Negative software position limit triggered',
  FF08: 'Enable circuit hardware error'
}
