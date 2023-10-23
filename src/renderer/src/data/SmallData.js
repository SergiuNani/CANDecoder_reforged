/*------------------------------Global Parameters------------------------------ */
export let GroupingOptionsForMessages = {
  Axis: true,
  Modes: false,
  Mapping: true,
  Repetitive: false
}
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

export const Mapping_objects_array_basedOnType = {
  RPDO1: [
    '1400',
    '1400_00',
    '1400_01',
    '1400_02',
    '1600',
    '1600_00',
    '1600_01',
    '1600_02',
    '1600_03',
    '1600_04'
  ],
  RPDO2: [
    '1401',
    '1401_00',
    '1401_01',
    '1401_02',
    '1601',
    '1601_00',
    '1601_01',
    '1601_02',
    '1601_03',
    '1601_04'
  ],
  RPDO3: [
    '1402',
    '1402_00',
    '1402_01',
    '1402_02',
    '1602',
    '1602_00',
    '1602_01',
    '1602_02',
    '1602_03',
    '1602_04'
  ],
  RPDO4: [
    '1403',
    '1403_00',
    '1403_01',
    '1403_02',
    '1603',
    '1603_00',
    '1603_01',
    '1603_02',
    '1603_03',
    '1603_04'
  ],
  TPDO1: [
    '1800',
    '1800_00',
    '1800_01',
    '1800_02',
    '1800_03',
    '1800_04',
    '1800_05',
    '1A00',
    '1A00_00',
    '1A00_01',
    '1A00_02',
    '1A00_03',
    '1A00_04'
  ],
  TPDO2: [
    '1801',
    '1801_00',
    '1801_01',
    '1801_02',
    '1801_03',
    '1801_04',
    '1801_05',
    '1A01',
    '1A01_00',
    '1A01_01',
    '1A01_02',
    '1A01_03',
    '1A01_04'
  ],
  TPDO3: [
    '1802',
    '1802_00',
    '1802_01',
    '1802_02',
    '1802_03',
    '1802_04',
    '1802_05',
    '1A02',
    '1A02_00',
    '1A02_01',
    '1A02_02',
    '1A02_03',
    '1A02_04'
  ],
  TPDO4: [
    '1803',
    '1803_00',
    '1803_01',
    '1803_02',
    '1803_03',
    '1803_04',
    '1803_05',
    '1A03',
    '1A03_00',
    '1A03_01',
    '1A03_02',
    '1A03_03',
    '1A03_04'
  ]
}

export const EMCYcodes = [
  {
    Index: '0000',
    Name: 'Error Reset or No Error'
  },
  {
    Index: '1000',
    Name: 'Generic Error; sent when a communication error occurs on CAN (object 2000h bit0=1; usually followed by EMCY code 0x7500'
  },
  {
    Index: '2310',
    Name: 'Continuous over-current'
  },
  {
    Index: '2340',
    Name: 'Short-circuit'
  },
  {
    Index: '3210',
    Name: 'DC-link over-voltage'
  },
  {
    Index: '3220',
    Name: 'DC-link under-voltage'
  },
  {
    Index: '4280',
    Name: 'Over temperature motor'
  },
  {
    Index: '4310',
    Name: 'Over temperature drive'
  },
  {
    Index: '5441',
    Name: 'Drive disabled due to enable or STO input'
  },
  {
    Index: '5442',
    Name: 'Negative limit switch active'
  },
  {
    Index: '5443',
    Name: 'Positive limit switch active'
  },
  {
    Index: '6100',
    Name: 'Invalid setup data'
  },
  {
    Index: '7300',
    Name: 'Sensor error'
  },
  {
    Index: '7500',
    Name: 'Communication error'
  },
  {
    Index: '8110',
    Name: 'CAN overrun (message lost)'
  },
  {
    Index: '8210',
    Name: 'Assuming - the PDO length you are trying to write to is not correct'
  },
  {
    Index: '8130',
    Name: 'Life guard error or heartbeat error'
  },
  {
    Index: '8331',
    Name: 'I2t protection triggered'
  },
  {
    Index: '8580',
    Name: 'Position wraparound'
  },
  {
    Index: '8611',
    Name: 'Control error / Following error'
  },
  {
    Index: '9000',
    Name: 'Command error'
  },
  {
    Index: 'FF01',
    Name: 'Generic interpolated position mode error (PVT / PT error)'
  },
  {
    Index: 'FF02',
    Name: 'Change set acknowledge bit wrong value'
  },
  {
    Index: 'FF03',
    Name: 'Specified homing method not available'
  },
  {
    Index: 'FF04',
    Name: 'A wrong mode is set in object 6060h, modes of operation'
  },
  {
    Index: 'FF05',
    Name: 'Specified digital I/O line not available'
  },
  {
    Index: 'FF06',
    Name: 'Positive software position limit triggered'
  },
  {
    Index: 'FF07',
    Name: 'Negative software position limit triggered'
  },
  {
    Index: 'FF08',
    Name: 'Enable circuit hardware error'
  }
]

export const SDO_abortCodes = [
  {
    Index: '05030000',
    Name: 'Toggle bit not changed.'
  },
  {
    Index: '05040000',
    Name: 'SDO protocol timed out.'
  },
  {
    Index: '05040001',
    Name: 'Client/server command specifier not valid or unknown.'
  },
  {
    Index: '05040002',
    Name: 'Invalid block size (block mode only).'
  },
  {
    Index: '05040003',
    Name: 'Invalid sequence number (block mode only).'
  },
  {
    Index: '05040004',
    Name: 'CRC error (block mode only).'
  },
  {
    Index: '05040005',
    Name: 'Out of memory.'
  },
  {
    Index: '06010000',
    Name: 'Unsupported access to an object.'
  },
  {
    Index: '06010001',
    Name: 'Attempt to read a write-only object.'
  },
  {
    Index: '06010002',
    Name: 'Attempt to write a read-only object.'
  },
  {
    Index: '06020000',
    Name: 'Object does not exist in the object dictionary.'
  },
  {
    Index: '06040041',
    Name: 'Object cannot be mapped to the PDO.'
  },
  {
    Index: '06040042',
    Name: 'The number and length of the objects to be mapped would exceed PDO length.'
  },
  {
    Index: '06040043',
    Name: 'General parameter incompatibility reason.'
  },
  {
    Index: '06040047',
    Name: 'General internal incompatibility in the device.'
  },
  {
    Index: '06060000',
    Name: 'Access failed due to a hardware error.'
  },
  {
    Index: '06070010',
    Name: 'Data type does not match; length of service parameter does not match.'
  },
  {
    Index: '06070012',
    Name: 'Data type does not match; length of service parameter too high.'
  },
  {
    Index: '06070013',
    Name: 'Data type does not match; length of service parameter too low.'
  },
  {
    Index: '06090011',
    Name: 'Sub-index does not exist.'
  },
  {
    Index: '06090030',
    Name: 'Value range of parameter exceeded (only for write access).'
  },
  {
    Index: '06090031',
    Name: 'Value of parameter written too high.'
  },
  {
    Index: '06090032',
    Name: 'Value of parameter written too low.'
  },
  {
    Index: '06090036',
    Name: 'Maximum value is less than minimum value.'
  },
  {
    Index: '08000000',
    Name: 'General error.'
  },
  {
    Index: '08000020',
    Name: 'Data cannot be transferred or stored to the application.'
  },
  {
    Index: '08000021',
    Name: 'Data cannot be transferred or stored to the application because of local control.'
  },
  {
    Index: '08000022',
    Name: 'Data cannot be transferred or stored to the application because of the present device state.'
  },
  {
    Index: '08000023',
    Name: 'Object dictionary dynamic generation fails or no object dictionary is present (e.g. object dictionary is generated from file and generation fails because of a file error).'
  },
  {
    Index: 'default',
    Name: 'Unknown Abort Code'
  }
]
