export const VerifyCANopenValidityArray_RAW = `
//====== Testing x6060 and its influence over x6040 and x6041 AXIS 31 ======
21F 0455 //Simple x6040
61F 2f 6060 00 01 00 00 00 //via SDO in PP
21F 0455 // x6040 in PP
31F 04551155889922 // x6041 in PP
61F 2f 6060 00 FE 00 00 00 // El Camming
21F 0455 // x6040 in El Camming
31F 04551155889922 // x6041 
41F 08 // In CSP changed via PDO
21F 0455 // x6040 in CSP
31F 04551155889922 // x6041 in CSP 
61F 2f 6060 00 01 00 00 00 //via SDO in PP
21F 0455 // x6040 in PP
31F 04551155889922 // x6041 in PP
61F 2f 6060 00 0F 00 00 00 //via SDO BS
21F 0455 // x6040 in PP
31F 04551155889922 // x6041 in PP
61F 2f 6060 00 01 00 00 00 //via SDO in PP
21F 0455 // x6040 in PP
31F 04551155889922 // x6041 in PP
41F 0B //via PDO BS
21F 0455 // x6040 in BS
31F 04551155889922 // x6041 in BS
61F 2F 6060 00 01 05 00 00 //good SDO
61F 21 6060 00 01 05 00 00 //bad SDO
21F 0455 // x6040 in PP
31F 04551155889922 // x6041 in PP
`
export const Hardcoded_VerifyCANopenValidityArray = [
  {
    msgNr: 1,
    OriginalMessage: '-',
    CobID: 'Empty',
    FrameData: 'Line',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: '-',
    errorStatus: '-'
  },
  {
    msgNr: 2,
    OriginalMessage: '301 0x03 45 85 ',
    CobID: '301',
    FrameData: '034585',
    type: 'RPDO2',
    AxisID: 1,
    CS: 2,
    Object: '#x6040 / #x100D',
    ObjectName: 'Controlword / Life time factor',
    Data: '4503 / 85',
    Interpretation: '- / -',
    errorStatus: 'good'
  },
  {
    msgNr: 3,
    OriginalMessage: '301 03 45 85 11',
    CobID: '301',
    FrameData: '03458511',
    type: 'RPDO2',
    AxisID: 1,
    CS: 2,
    Object: '#x6040 / #x100D',
    ObjectName: 'Controlword / Life time factor',
    Data: '4503 / 85',
    Interpretation: '- / -',
    errorStatus: 'good'
  },
  {
    msgNr: 4,
    OriginalMessage: '301 3 45 85 11',
    CobID: '301',
    FrameData: '458511',
    type: 'RPDO2',
    AxisID: 1,
    CS: 2,
    Object: '#x6040 / #x100D',
    ObjectName: 'Controlword / Life time factor',
    Data: '8545 / 11',
    Interpretation: '- / -',
    errorStatus: 'good'
  },
  {
    msgNr: 5,
    OriginalMessage: '0\t接收\t13:44:51.684\t\t\t701\t数据帧\t标准帧\t0x01\t7F \t',
    CobID: '701',
    FrameData: '7F',
    type: 'NMT_M',
    AxisID: 1,
    CS: '7F',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'NMT Pre-Operational',
    errorStatus: '-'
  },
  {
    msgNr: 6,
    OriginalMessage: '3\t接收\t13:44:53.972\t\t\t0x00000000\t数据帧\t标准帧\t0x02\t80 00 \t',
    CobID: '00000000',
    FrameData: '8000',
    type: 'NMT',
    AxisID: 'All',
    CS: '80',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'All Axes - Enter Pre-Operational',
    errorStatus: 'blue'
  },
  {
    msgNr: 7,
    OriginalMessage:
      '13\t接收\t13:44:57.382\t\t\t0x00000601\t数据帧\t标准帧\t0x08\t2F 00 18 02 01 00 47 95 ',
    CobID: '00000601',
    FrameData: '2F00180201004795',
    type: 'R_SDO',
    AxisID: 1,
    CS: '2F',
    Object: '#x1800_02',
    ObjectName: 'Transmission type',
    Data: '01',
    Interpretation: '[181h] - synchronous( cyclic every 1 SYNC)',
    errorStatus: 'blue'
  },
  {
    msgNr: 8,
    OriginalMessage: '-',
    CobID: 'Empty',
    FrameData: 'Line',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: '-',
    errorStatus: '-'
  },
  {
    msgNr: 9,
    OriginalMessage: '-',
    CobID: 'Empty',
    FrameData: 'Line',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: '-',
    errorStatus: '-'
  }
]
