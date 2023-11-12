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
61E 2F 6060 00 03 05 00 00 //Different axis
21F 0455 // x6040 in PP
31F 04551155889922 // x6041 in PP
904      4023.599 DT     0601 Rx 8  40 00 10 00 00 00 00 00 
905      4023.882 DT     0581 Rx 8  43 00 10 00 92 01 06 00 
906      4027.463 DT     0080 Rx 0  
907      4031.455 DT     0080 Rx 0  
908      4031.574 DT     0601 Rx 8  2B 17 10 00 E8 03 01 00 
909      4031.847 DT     0581 Rx 8  60 17 10 00 00 00 00 00 
//====== Testing Segmented Reading AXIS 1 ======
    13)     45412.6  Tx         0601  8  40 0A 10 00 00 00 00 00 
    14)     45413.6  Rx         0581  8  41 0A 10 00 0F 00 00 00 
    15)     46584.3  Tx         0601  8  60 0A 10 00 00 00 00 00 
    16)     46585.3  Rx         0581  8  00 46 35 30 38 4D 20 20 
    17)     49374.6  Tx         0601  8  60 0A 10 00 00 00 00 00 
    18)     49375.6  Rx         0581  8  80 0A 10 00 00 00 03 05 
    19)     53010.6  Tx         0601  8  70 0A 10 00 00 00 00 00 
    20)     53011.6  Rx         0581  8  80 0A 10 00 00 00 03 05 
    21)     54168.9  Tx         0601  8  70 0A 10 00 00 00 00 00 
    22)     54169.9  Rx         0581  8  80 0A 10 00 00 00 03 05 
    23)     56253.2  Tx         0601  8  40 0A 10 00 00 00 00 00 
    24)     56254.3  Rx         0581  8  41 0A 10 00 0F 00 00 00 
    25)     58880.5  Tx         0601  8  70 0A 10 00 00 00 00 00 
    26)     58881.5  Rx         0581  8  80 0A 10 00 00 00 03 05 
    27)     60466.8  Tx         0601  8  40 0A 10 00 00 00 00 00 
    28)     60467.9  Rx         0581  8  41 0A 10 00 0F 00 00 00 
    29)     62660.5  Tx         0601  8  60 0A 10 00 00 00 00 00 
    30)     62661.6  Rx         0581  8  00 46 35 30 38 4D 20 20 
    31)     64836.9  Tx         0601  8  70 0A 10 00 00 00 00 00 
    32)     64837.9  Rx         0581  8  10 20 20 20 20 20 20 20
    35)    179726.8  Tx         0601  8  40 18 10 01 00 00 00 00 
    36)    179727.9  Rx         0581  8  43 18 10 01 A3 01 00 00 
    37)    189688.2  Tx         0601  8  60 00 00 00 00 00 00 00 
    38)    189689.3  Rx         0581  8  80 18 10 01 00 00 03 05
    39)    201118.3  Tx         0601  8  40 18 10 02 00 00 00 00 
    40)    201119.4  Rx         0581  8  43 18 10 02 D1 46 AB 01 
    41)    205484.7  Tx         0601  8  60 00 00 00 00 00 00 00 
    42)    205485.8  Rx         0581  8  80 18 10 02 00 00 03 05 
    43)    563694.2  Tx         0601  8  40 18 10 04 00 00 00 00 
    44)    563695.2  Rx         0581  8  43 18 10 04 22 72 47 47 
    45)    633719.1  Tx         0601  8  60 0A 10 00 00 00 00 00 
    46)    633720.1  Rx         0581  8  80 18 10 04 00 00 03 05 
    47)   1278768.0  Tx         0601  8  40 08 10 00 00 00 00 00 
    48)   1278769.0  Rx         0581  8  41 08 10 00 0F 00 00 00 
    49)   1284831.0  Tx         0601  8  60 0A 10 00 00 00 00 00 
    50)   1284832.1  Rx         0581  8  00 69 50 4F 53 20 20 20 
    51)   1293569.1  Tx         0601  8  60 00 00 00 00 00 00 00 
    52)   1293570.2  Rx         0581  8  80 08 10 00 00 00 03 05 
    53)   1296728.1  Tx         0601  8  70 00 00 00 00 00 00 00 
    54)   1296729.2  Rx         0581  8  80 08 10 00 00 00 03 05 
    55)   1297944.2  Tx         0601  8  70 00 00 00 00 00 00 00 
    56)   1297945.3  Rx         0581  8  80 08 10 00 00 00 03 05 
    57)   1306036.1  Tx         0601  8  40 08 10 00 00 00 00 00 
    58)   1306037.3  Rx         0581  8  41 08 10 00 0F 00 00 00 
    59)   1309877.4  Tx         0601  8  60 0A 10 00 00 00 00 00 
    60)   1309878.4  Rx         0581  8  00 69 50 4F 53 20 20 20 
    61)   1312873.9  Tx         0601  8  70 00 00 00 00 00 00 00 
    62)   1312875.0  Rx         0581  8  10 20 20 20 20 20 20 20
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
    errorStatus: 'neutral'
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
    errorStatus: 'neutral'
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
    errorStatus: 'neutral'
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
