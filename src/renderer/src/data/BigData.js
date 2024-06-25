export const Objects_collection = [
  {
    Index: '#x1000',
    Name: 'Device type',
    Type: 'UDINT',
    BitSize: 32
  },
  {
    Index: '#x1001',
    Name: 'Error Register',
    Type: 'USINT',
    BitSize: 8
  },
  {
    Index: '#x1002',
    Name: 'Manufacturer status register',
    Type: 'USINT',
    BitSize: 32
  },
  {
    Index: '#x1008',
    Name: 'Device name',
    Type: 'STRING(11)',
    BitSize: 88
  },
  {
    Index: '#x1009',
    Name: 'Hardware version',
    Type: 'STRING(8)',
    BitSize: 32
  },
  {
    Index: '#x1005',
    Name: 'COD-ID of the SYNC Message',
    Type: 'USIN',
    BitSize: 32,
    Info: {
      DefaultData: '80h'
    }
  },
  {
    Index: '#x1006',
    Name: 'Communication cycle period',
    Type: 'USIN',
    BitSize: 32,
    Info: {
      DefaultData: 0
    }
  },
  {
    Index: '#x100A',
    Name: 'Software version',
    Type: 'STRING(5)',
    BitSize: 40
  },
  {
    Index: '#x100C',
    Name: 'Guard Time',
    Type: 'USIN',
    BitSize: 16,
    Info: {
      DefaultData: 0
    }
  },
  {
    Index: '#x100D',
    Name: 'Life time factor',
    Type: 'USIN',
    BitSize: 8,
    Info: {
      DefaultData: 0
    }
  },
  {
    Index: '#x1010',
    Name: 'Store parameters',
    Type: 'USIN',
    BitSize: 32,
    Info: {
      SubItem: [
        {
          Index: '#x1010_00',
          Name: 'highest sub-index supported',
          BitSize: 8,
          Info: {
            DefaultData: 1
          }
        },
        {
          Index: '#x1010_01',
          Name: 'Save parameters',
          BitSize: 32,
          Info: {
            DefaultData: '-'
          }
        }
      ]
    }
  },
  {
    Index: '#x1011',
    Name: 'Restore default parameters',
    Type: 'USIN',
    BitSize: 32,
    Info: {
      SubItem: [
        {
          Index: '#x1011_00',
          Name: 'highest sub-index supported',
          BitSize: 8,
          Info: {
            DefaultData: 1
          }
        },
        {
          Index: '#x1011_01',
          Name: 'Restore all default parameters',
          BitSize: 32,
          Info: {
            DefaultData: '-'
          }
        }
      ]
    }
  },
  {
    Index: '#x1013',
    Name: 'High resolution time stamp',
    Type: 'USIN',
    BitSize: 32,
    Info: {
      DefaultData: 0
    }
  },
  {
    Index: '#x1014',
    Name: 'COD-ID Emergency Object',
    Type: 'USIN',
    BitSize: 32,
    Info: {
      DefaultData: '80h + Node-ID'
    }
  },
  {
    Index: '#x1015',
    Name: 'COD-ID Emergency Object',
    Type: 'USIN',
    BitSize: 16,
    Info: {
      DefaultData: '80h + Node-ID'
    }
  },
  {
    Index: '#x1017',
    Name: 'Producer Heartbeat Time',
    Type: 'USIN',
    BitSize: 16,
    Info: {
      DefaultData: 0
    }
  },
  {
    Index: '#x1018',
    Name: 'Identity Object',
    Type: 'DT1018',
    BitSize: 144,
    Info: {
      SubItem: [
        {
          Index: '#x1018_00',
          Name: 'Number of entries',
          BitSize: 8,
          Info: {
            DefaultData: 1
          }
        },
        {
          Index: '#x1018_01',
          Name: 'Vendor ID',
          BitSize: 32,
          Info: {
            DefaultData: '000001A3h'
          }
        },
        {
          Index: '#x1018_02',
          Name: 'Product Code',
          BitSize: 32,
          Info: {
            DefaultData: 0
          }
        },
        {
          Index: '#x1018_03',
          Name: 'Revision number',
          BitSize: 32,
          Info: {
            DefaultData: '0x30313030 (ASCII 0100)'
          }
        },
        {
          Index: '#x1018_04',
          Name: 'Serial number',
          BitSize: 32,
          Info: {
            DefaultData: 'Unique number'
          }
        }
      ]
    }
  },
  {
    Index: '#x1003',
    Name: 'Pre-defined error field',
    Type: 'DT1018',
    BitSize: 32,
    Info: {
      SubItem: [
        {
          Index: '#x1003_00',
          Name: 'Number of errors in history',
          BitSize: 8,
          Info: {
            DefaultData: 0
          }
        },
        {
          Index: '#x1003_01',
          Name: 'Standard error field',
          BitSize: 32
        },
        {
          Index: '#x1003_02',
          Name: 'Standard error field',
          BitSize: 32
        },
        {
          Index: '#x1003_03',
          Name: 'Standard error field',
          BitSize: 32
        },
        {
          Index: '#x1003_04',
          Name: 'Standard error field',
          BitSize: 32
        },
        {
          Index: '#x1003_05',
          Name: 'Standard error field',
          BitSize: 32
        }
      ]
    }
  },
  {
    Index: '#x1200',
    Name: 'Server SDO Parameter',
    Type: 'USIN',
    BitSize: 66,
    Info: {
      SubItem: [
        {
          Index: '#x1200_00',
          Name: 'Number of enteries',
          BitSize: 8,
          Info: {
            DefaultData: 2
          }
        },
        {
          Index: '#x1200_01',
          Name: 'SDO recieve COB-ID',
          BitSize: 32,
          Info: {
            DefaultData: '600h + NODE-ID'
          }
        },
        {
          Index: '#x1200_02',
          Name: 'SDO transmit COB-ID',
          BitSize: 32,
          Info: {
            DefaultData: '580h + NODE-ID'
          }
        }
      ]
    }
  },
  {
    Index: '#x1400',
    Name: 'RPDO1 Communication Parameter',
    Type: 'USIN',
    BitSize: 100,
    Info: {
      SubItem: [
        {
          Index: '#x1400_00',
          Name: 'Number of enteries',
          BitSize: 8,
          Info: {
            DefaultData: 2
          }
        },
        {
          Index: '#x1400_01',
          Name: 'COB-ID RPDO1',
          BitSize: 32,
          Info: {
            DefaultData: '200h + NODE-ID'
          }
        },
        {
          Index: '#x1400_02',
          Name: 'Transmission type',
          BitSize: 8,
          Info: {
            DefaultData: 255
          }
        }
      ]
    }
  },
  {
    Index: '#x1401',
    Name: 'RPDO2 Communication Parameter',
    Type: 'USIN',
    BitSize: 100,
    Info: {
      SubItem: [
        {
          Index: '#x1401_00',
          Name: 'Number of enteries',
          BitSize: 8,
          Info: {
            DefaultData: 2
          }
        },
        {
          Index: '#x1401_01',
          Name: 'COB-ID RPDO2',
          BitSize: 32,
          Info: {
            DefaultData: '300h + NODE-ID'
          }
        },
        {
          Index: '#x1401_02',
          Name: 'Transmission type',
          BitSize: 8,
          Info: {
            DefaultData: 255
          }
        }
      ]
    }
  },
  {
    Index: '#x1402',
    Name: 'RPDO3 Communication Parameter',
    Type: 'USIN',
    BitSize: 100,
    Info: {
      SubItem: [
        {
          Index: '#x1402_00',
          Name: 'Number of enteries',
          BitSize: 8,
          Info: {
            DefaultData: 2
          }
        },
        {
          Index: '#x1402_01',
          Name: 'COB-ID RPDO3',
          BitSize: 32,
          Info: {
            DefaultData: '400h + NODE-ID'
          }
        },
        {
          Index: '#x1402_02',
          Name: 'Transmission type',
          BitSize: 8,
          Info: {
            DefaultData: 255
          }
        }
      ]
    }
  },
  {
    Index: '#x1403',
    Name: 'RPDO4 Communication Parameter',
    Type: 'USIN',
    BitSize: 100,
    Info: {
      SubItem: [
        {
          Index: '#x1403_00',
          Name: 'Number of enteries',
          BitSize: 8,
          Info: {
            DefaultData: 2
          }
        },
        {
          Index: '#x1403_01',
          Name: 'COB-ID RPDO4',
          BitSize: 32,
          Info: {
            DefaultData: '500h + NODE-ID'
          }
        },
        {
          Index: '#x1403_02',
          Name: 'Transmission type',
          BitSize: 8,
          Info: {
            DefaultData: 255
          }
        }
      ]
    }
  },
  {
    Index: '#x1600',
    Name: 'RPDO1 Mapping Parameter',
    Type: 'USIN',
    BitSize: 100,
    Info: {
      SubItem: [
        {
          Index: '#x1600_00',
          Name: 'Number of mapped objects',
          BitSize: 8,
          Info: {
            DefaultData: 1
          }
        },
        {
          Index: '#x1600_01',
          Name: '1st mapped object',
          BitSize: 32
        },
        {
          Index: '#x1600_02',
          Name: '2nd mapped object',
          BitSize: 32
        },
        {
          Index: '#x1600_03',
          Name: '3rd mapped object',
          BitSize: 32
        },
        {
          Index: '#x1600_04',
          Name: '4th mapped object',
          BitSize: 32
        }
      ]
    }
  },
  {
    Index: '#x1601',
    Name: 'RPDO2 Mapping Parameter',
    Type: 'USIN',
    BitSize: 100,
    Info: {
      SubItem: [
        {
          Index: '#x1601_00',
          Name: 'Number of mapped objects',
          BitSize: 8,
          Info: {
            DefaultData: 2
          }
        },
        {
          Index: '#x1601_01',
          Name: '1st mapped object',
          BitSize: 32
        },
        {
          Index: '#x1601_02',
          Name: '2nd mapped object',
          BitSize: 32
        },
        {
          Index: '#x1601_03',
          Name: '3rd mapped object',
          BitSize: 32
        },
        {
          Index: '#x1601_04',
          Name: '4th mapped object',
          BitSize: 32
        }
      ]
    }
  },
  {
    Index: '#x1602',
    Name: 'RPDO3 Mapping Parameter',
    Type: 'USIN',
    BitSize: 100,
    Info: {
      SubItem: [
        {
          Index: '#x1602_00',
          Name: 'Number of mapped objects',
          BitSize: 8,
          Info: {
            DefaultData: 2
          }
        },
        {
          Index: '#x1602_01',
          Name: '1st mapped object',
          BitSize: 32
        },
        {
          Index: '#x1602_02',
          Name: '2nd mapped object',
          BitSize: 32
        },
        {
          Index: '#x1602_03',
          Name: '3rd mapped object',
          BitSize: 32
        },
        {
          Index: '#x1602_04',
          Name: '4th mapped object',
          BitSize: 32
        }
      ]
    }
  },
  {
    Index: '#x1603',
    Name: 'RPDO4 Mapping Parameter',
    Type: 'USIN',
    BitSize: 100,
    Info: {
      SubItem: [
        {
          Index: '#x1603_00',
          Name: 'Number of mapped objects',
          BitSize: 8,
          Info: {
            DefaultData: 2
          }
        },
        {
          Index: '#x1603_01',
          Name: '1st mapped object',
          BitSize: 32
        },
        {
          Index: '#x1603_02',
          Name: '2nd mapped object',
          BitSize: 32
        },
        {
          Index: '#x1603_03',
          Name: '3rd mapped object',
          BitSize: 32
        },
        {
          Index: '#x1603_04',
          Name: '4th mapped object',
          BitSize: 32
        }
      ]
    }
  },
  {
    Index: '#x1800',
    Name: 'TPDO1 Communication Parameter',
    Type: 'USIN',
    BitSize: 100,
    Info: {
      SubItem: [
        {
          Index: '#x1800_00',
          Name: 'Number of mapped objects',
          BitSize: 8,
          Info: {
            DefaultData: 5
          }
        },
        {
          Index: '#x1800_01',
          Name: 'COB-ID TPDO1',
          BitSize: 32,
          Info: {
            DefaultData: '180h + NODE-ID'
          }
        },
        {
          Index: '#x1800_02',
          Name: 'Transmission type',
          BitSize: 8,
          Info: {
            DefaultData: 255
          }
        },
        {
          Index: '#x1800_03',
          Name: 'Inhibit time',
          BitSize: 16,
          Info: {
            DefaultData: '300 (30ms)'
          }
        },
        {
          Index: '#x1800_04',
          Name: 'Reserved'
        },
        {
          Index: '#x1800_05',
          Name: 'Event timer',
          BitSize: 16,
          Info: {
            DefaultData: 0
          }
        }
      ]
    }
  },
  {
    Index: '#x1801',
    Name: 'TPDO2 Communication Parameter',
    Type: 'USIN',
    BitSize: 100,
    Info: {
      SubItem: [
        {
          Index: '#x1801_00',
          Name: 'Number of mapped objects',
          BitSize: 8,
          Info: {
            DefaultData: 5
          }
        },
        {
          Index: '#x1801_01',
          Name: 'COB-ID TPDO2',
          BitSize: 32,
          Info: {
            DefaultData: '280h + NODE-ID'
          }
        },
        {
          Index: '#x1801_02',
          Name: 'Transmission type',
          BitSize: 8,
          Info: {
            DefaultData: 255
          }
        },
        {
          Index: '#x1801_03',
          Name: 'Inhibit time',
          BitSize: 16,
          Info: {
            DefaultData: '300 (30ms)'
          }
        },
        {
          Index: '#x1801_04',
          Name: 'Reserved'
        },
        {
          Index: '#x1801_05',
          Name: 'Event timer',
          BitSize: 16,
          Info: {
            DefaultData: 0
          }
        }
      ]
    }
  },
  {
    Index: '#x1802',
    Name: 'TPDO1 Communication Parameter',
    Type: 'USIN',
    BitSize: 100,
    Info: {
      SubItem: [
        {
          Index: '#x1802_00',
          Name: 'Number of mapped objects',
          BitSize: 8,
          Info: {
            DefaultData: 5
          }
        },
        {
          Index: '#x1802_01',
          Name: 'COB-ID TPDO3',
          BitSize: 32,
          Info: {
            DefaultData: '80000380h + Node-ID'
          }
        },
        {
          Index: '#x1802_02',
          Name: 'Transmission type',
          BitSize: 8,
          Info: {
            DefaultData: 255
          }
        },
        {
          Index: '#x1802_03',
          Name: 'Inhibit time',
          BitSize: 16,
          Info: {
            DefaultData: '300 (30ms)'
          }
        },
        {
          Index: '#x1802_04',
          Name: 'Reserved'
        },
        {
          Index: '#x1802_05',
          Name: 'Event timer',
          BitSize: 16,
          Info: {
            DefaultData: 0
          }
        }
      ]
    }
  },
  {
    Index: '#x1803',
    Name: 'TPDO4 Communication Parameter',
    Type: 'USIN',
    BitSize: 100,
    Info: {
      SubItem: [
        {
          Index: '#x1803_00',
          Name: 'Number of mapped objects',
          BitSize: 8,
          Info: {
            DefaultData: 5
          }
        },
        {
          Index: '#x1803_01',
          Name: 'COB-ID TPDO4',
          BitSize: 32,
          Info: {
            DefaultData: '80000480h + Node-ID'
          }
        },
        {
          Index: '#x1803_02',
          Name: 'Transmission type',
          BitSize: 8,
          Info: {
            DefaultData: 255
          }
        },
        {
          Index: '#x1803_03',
          Name: 'Inhibit time',
          BitSize: 16,
          Info: {
            DefaultData: '300 (30ms)'
          }
        },
        {
          Index: '#x1803_04',
          Name: 'Reserved'
        },
        {
          Index: '#x1803_05',
          Name: 'Event timer',
          BitSize: 16,
          Info: {
            DefaultData: 0
          }
        }
      ]
    }
  },
  {
    Index: '#x1A00',
    Name: 'TPDO1 Mapping Parameter',
    Type: 'USIN',
    BitSize: 100,
    Info: {
      SubItem: [
        {
          Index: '#x1A00_00',
          Name: 'Number of mapped objects',
          BitSize: 8,
          Info: {
            DefaultData: 1
          }
        },
        {
          Index: '#x1A00_01',
          Name: '1st mapped object',
          BitSize: 32
        },
        {
          Index: '#x1A00_02',
          Name: '2nd mapped object',
          BitSize: 32
        },
        {
          Index: '#x1A00_03',
          Name: '3rd mapped object',
          BitSize: 32
        },
        {
          Index: '#x1A00_04',
          Name: '4th mapped object',
          BitSize: 32
        }
      ]
    }
  },
  {
    Index: '#x1A01',
    Name: 'TPDO2 Mapping Parameter',
    Type: 'USIN',
    BitSize: 100,
    Info: {
      SubItem: [
        {
          Index: '#x1A01_00',
          Name: 'Number of mapped objects',
          BitSize: 8,
          Info: {
            DefaultData: 2
          }
        },
        {
          Index: '#x1A01_01',
          Name: '1st mapped object',
          BitSize: 32
        },
        {
          Index: '#x1A01_02',
          Name: '2nd mapped object',
          BitSize: 32
        },
        {
          Index: '#x1A01_03',
          Name: '3rd mapped object',
          BitSize: 32
        },
        {
          Index: '#x1A01_04',
          Name: '4th mapped object',
          BitSize: 32
        }
      ]
    }
  },
  {
    Index: '#x1A02',
    Name: 'TPDO3 Mapping Parameter',
    Type: 'USIN',
    BitSize: 100,
    Info: {
      SubItem: [
        {
          Index: '#x1A02_00',
          Name: 'Number of mapped objects',
          BitSize: 8,
          Info: {
            DefaultData: 2
          }
        },
        {
          Index: '#x1A02_01',
          Name: '1st mapped object',
          BitSize: 32
        },
        {
          Index: '#x1A02_02',
          Name: '2nd mapped object',
          BitSize: 32
        },
        {
          Index: '#x1A02_03',
          Name: '3rd mapped object',
          BitSize: 32
        },
        {
          Index: '#x1A02_04',
          Name: '4th mapped object',
          BitSize: 32
        }
      ]
    }
  },
  {
    Index: '#x1A03',
    Name: 'TPDO4 Mapping Parameter',
    Type: 'USIN',
    BitSize: 100,
    Info: {
      SubItem: [
        {
          Index: '#x1A03_00',
          Name: 'Number of mapped objects',
          BitSize: 8,
          Info: {
            DefaultData: 2
          }
        },
        {
          Index: '#x1A03_01',
          Name: '1st mapped object',
          BitSize: 32
        },
        {
          Index: '#x1A03_02',
          Name: '2nd mapped object',
          BitSize: 32
        },
        {
          Index: '#x1A03_03',
          Name: '3rd mapped object',
          BitSize: 32
        },
        {
          Index: '#x1A03_04',
          Name: '4th mapped object',
          BitSize: 32
        }
      ]
    }
  },
  {
    Index: '#x1C00',
    Name: 'Sync Manager Communication Type',
    Type: 'DT1C00',
    BitSize: 48,
    Info: {
      SubItem: [
        {
          Index: '#x1C00_00',
          Name: 'Number of Entries',
          BitSize: 8,
          Info: {
            DefaultData: 4
          }
        },
        {
          Index: '#x1C00_01',
          Name: 'Comm. type, Sync Manager 0',
          BitSize: 8,
          Info: {
            DefaultData: 1
          }
        },
        {
          Index: '#x1C00_02',
          Name: 'Comm. type, Sync Manager 1',
          BitSize: 8,
          Info: {
            DefaultData: 2
          }
        },
        {
          Index: '#x1C00_03',
          Name: 'Comm. type, Sync Manager 2',
          BitSize: 8,
          Info: {
            DefaultData: 3
          }
        },
        {
          Index: '#x1C00_04',
          Name: 'Comm. type, Sync Manager 3',
          BitSize: 8,
          Info: {
            DefaultData: 4
          }
        }
      ]
    }
  },
  {
    Index: '#x1C12',
    Name: 'RxPDO assign',
    Type: 'DT1C12',
    BitSize: 80,
    Info: {
      SubItem: [
        {
          Index: '#x1C12_00',
          Name: 'Sync Manager 2, Number of mapped RPDOs',
          BitSize: 8,
          Info: {
            DefaultData: 2
          }
        },
        {
          Index: '#x1C12_01',
          Name: 'Sync Manager 2, RPDO mapping 0',
          BitSize: 16,
          Info: {
            DefaultData: 16
          }
        }
      ]
    }
  },
  {
    Index: '#x1C13',
    Name: 'TxPDO assign',
    Type: 'DT1C13',
    BitSize: 80,
    Info: {
      SubItem: [
        {
          Index: '#x1C13_00',
          Name: 'Sync Manager 3, Number of mapped TPDOs',
          BitSize: 8,
          Info: {
            DefaultData: 3
          }
        },
        {
          Index: '#x1C13_01',
          Name: 'Sync Manager 3, TPDO mapping 0',
          BitSize: 16,
          Info: {
            DefaultData: '001A'
          }
        },
        {
          Index: '#x1C13_02',
          Name: 'Sync Manager 3, TPDO mapping 1',
          BitSize: 16,
          Info: {
            DefaultData: '011A'
          }
        }
      ]
    }
  },
  {
    Index: '#x1C32',
    Name: 'SM output parameter',
    Type: 'DT1C32',
    BitSize: 200,
    Info: {
      SubItem: [
        {
          Index: '#x1C32_00',
          Name: 'Number of entries',
          BitSize: 8,
          Info: {
            DefaultData: 12
          }
        },
        {
          Index: '#x1C32_01',
          Name: 'Synchronization Type',
          BitSize: 16,
          Info: {
            DefaultData: 200
          }
        },
        {
          Index: '#x1C32_02',

          Name: 'Cycle Time',
          BitSize: 32,
          Info: {
            DefaultData: '40420F00'
          }
        },
        {
          Index: '#x1C32_04',

          Name: 'Synchronization Types supported',
          BitSize: 16,

          Info: {
            DefaultData: 300
          }
        },
        {
          Index: '#x1C32_05',

          Name: 'Minimum Cycle Time',
          BitSize: 32,

          Info: {
            DefaultData: 0
          }
        },
        {
          Index: '#x1C32_06',

          Name: 'Calc and Copy Time',
          BitSize: 32,
          Info: {
            DefaultData: 0
          }
        },
        {
          Index: '#x1C32_09',

          Name: 'Delay Time',
          BitSize: 32,

          Info: {
            DefaultData: 0
          }
        },
        {
          Index: '#x1C32_11',

          Name: 'Event Missed Counter',
          BitSize: 16,

          Info: {
            DefaultData: 0
          }
        },
        {
          Index: '#x1C32_12',

          Name: 'Cycle Time Too Small',
          BitSize: 16,

          Info: {
            DefaultData: 0
          }
        },
        {
          Index: '#x1C32_32',

          Name: 'Sync Error',
          BitSize: 1
        }
      ]
    }
  },
  {
    Index: '#x1c33',
    Name: 'SM input parameter',
    Type: 'DT1C33',
    BitSize: 200,
    Info: {
      SubItem: [
        {
          Index: '#x1c33_00',
          Name: 'Number of entries',
          BitSize: 8
        },
        {
          Index: '#x1c33_01',

          Name: 'Synchronization Type',
          BitSize: 16
        },
        {
          Index: '#x1c33_02',

          Name: 'Cycle Time',
          BitSize: 32
        },
        {
          Index: '#x1c33_04',

          Name: 'Synchronization Types supported',
          BitSize: 16
        },
        {
          Index: '#x1c33_05',

          Name: 'Minimum Cycle Time',
          BitSize: 32
        },
        {
          Index: '#x1c33_06',

          Name: 'Calc and Copy Time',
          BitSize: 32
        },
        {
          Index: '#x1c33_09',

          Name: 'Delay Time',
          BitSize: 32
        },
        {
          Index: '#x1c33_11',

          Name: 'SM-Event Missed',
          BitSize: 16
        },
        {
          Index: '#x1c33_12',

          Name: 'Cycle Time Too Small',
          BitSize: 16
        },
        {
          Index: '#x1c33_32',

          Name: 'Sync Error',
          BitSize: 1
        }
      ]
    }
  },
  {
    Index: '#x2000',
    Name: 'Motion Error Register',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x2001',
    Name: 'Motion Error Register mask',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x2002',
    Name: 'Detailed Error Register (DER)',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x2003',
    Name: 'Communication Error Register (CER)',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x2004',
    Name: 'COB-ID of the High-resolution time stamp',
    Type: 'UINT',
    BitSize: 32
  },
  {
    Index: '#x2005',
    Name: 'Max. slippage timeout',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x2006',
    Name: 'Call tml function',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x2009',
    Name: 'Detailed Error Register 2 (DER2)',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x2010',
    Name: 'Master settings',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x2012',
    Name: 'Master resolution',
    Type: 'UDINT',
    BitSize: 32,
    Info: {
      DefaultData: '80000001h (full range)'
    }
  },
  {
    Index: '#x2013',
    Name: 'EGEAR multiplication factor',
    Type: 'ARRAY',
    BitSize: 432,
    Info: {
      SubItem: [
        {
          Index: '#x2013_00',
          Name: 'Number of enteries',
          BitSize: 8,
          Info: {
            DefaultData: 2
          }
        },
        {
          Index: '#x2013_01',
          Name: 'EGEAR ratio numerator (slave)',
          BitSize: 16,
          Info: {
            DefaultData: 1
          }
        },
        {
          Index: '#x2013_02',
          Name: 'EGEAR ratio denominator (master)',
          BitSize: 16,
          Info: {
            DefaultData: 1
          }
        }
      ]
    }
  },
  {
    Index: '#x2017',
    Name: 'Master actual position',
    Type: 'DINT',
    BitSize: 32,
    Info: {
      DefaultData: 0
    }
  },
  {
    Index: '#x2018',
    Name: 'Master actual speed',
    Type: 'INT',
    BitSize: 16,
    Info: {
      DefaultData: 0
    }
  },
  {
    Index: '#x2019',
    Name: 'CAM table load address',
    Type: 'UINT',
    BitSize: 16,
    Info: {
      DefaultData:
        'Variable depending on motor + \n                                feedback configuration'
    }
  },
  {
    Index: '#x201A',
    Name: 'CAM table run address',
    Type: 'UINT',
    BitSize: 16,
    Info: {
      DefaultData: '9E00h'
    }
  },
  {
    Index: '#x201B',
    Name: 'CAM table offset',
    Type: 'UDINT',
    BitSize: 32,
    Info: {
      DefaultData: 0
    }
  },
  {
    Index: '#x201C',
    Name: 'External online reference',
    Type: 'UDINT',
    BitSize: 32,
    Info: {
      DefaultData: 0
    }
  },
  {
    Index: '#x201D',
    Name: 'External reference type',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x201E',
    Name: 'Master position',
    Type: 'DINT',
    BitSize: 32
  },
  {
    Index: '#x2022',
    Name: 'Control effort',
    Type: 'INT',
    BitSize: 16
  },
  {
    Index: '#x2023',
    Name: 'Time jerk',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x2025',
    Name: 'Stepper open loop current',
    Type: 'INT',
    BitSize: 16
  },
  {
    Index: '#x2026',
    Name: 'Stepper open loop standby current',
    Type: 'INT',
    BitSize: 16
  },
  {
    Index: '#x2027',
    Name: 'Time out for stepper stand-by current',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x2045',
    Name: 'Digital output status',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x2046',
    Name: 'Analogue input reference',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x2047',
    Name: 'Analogue input feedback',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x2050',
    Name: 'Overcurrent protection level',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x2051',
    Name: 'Overcurrent timeout',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x2052',
    Name: 'Motor nominal current',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x2053',
    Name: 'I2t protection integrator limit',
    Type: 'UDINT',
    BitSize: 32
  },
  {
    Index: '#x2054',
    Name: 'I2t protection scaling factor',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x2055',
    Name: 'DC-link voltage',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x2058',
    Name: 'Drive temperature',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x2060',
    Name: 'Software ver. of a TML application',
    Type: 'UDINT',
    BitSize: 32
  },
  {
    Index: '#x2064',
    Name: 'Read/Write configuration register',
    Type: 'UDINT',
    BitSize: 32
  },
  {
    Index: '#x2065',
    Name: 'Write data at address set in 2064h\n                            (16/32 bits)',
    Type: 'UDINT',
    BitSize: 32
  },
  {
    Index: '#x2066',
    Name: 'Read data from address set in 2064h\n                            (16/32 bits)',
    Type: 'UDINT',
    BitSize: 32
  },
  {
    Index: '#x2067',
    Name: 'Write data at specified address',
    Type: 'UDINT',
    BitSize: 32
  },
  {
    Index: '#x2069',
    Name: 'Checksum configuration register',
    Type: 'UDINT',
    BitSize: 32
  },
  {
    Index: '#x206A',
    Name: 'Checksum read register',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x206B',
    Name: 'CAM input scaling factor',
    Type: 'UDINT',
    BitSize: 32,
    Info: {
      DefaultData: '00010000h'
    }
  },
  {
    Index: '#x206C',
    Name: 'CAM output scaling factor',
    Type: 'UDINT',
    BitSize: 32,
    Info: {
      DefaultData: '00010000h'
    }
  },
  {
    Index: '#x206F',
    Name: 'Time notation index',
    Type: 'SINT',
    BitSize: 8,
    Info: {
      DefaultData: 0
    }
  },
  {
    Index: '#x2070',
    Name: 'Time dimension index',
    Type: 'USINT',
    BitSize: 8,
    Info: {
      DefaultData: 0
    }
  },
  {
    Index: '#x2071',
    Name: 'Time factor',
    Type: 'ARRAY',
    BitSize: 132,
    Info: {
      SubItem: [
        {
          Index: '#x2071_00',
          Name: 'Number of enteries',
          BitSize: 8,
          Info: {
            DefaultData: 2
          }
        },
        {
          Index: '#x2071_01',
          Name: 'Numerator',
          BitSize: 32,
          Info: {
            DefaultData: 1
          }
        },
        {
          Index: '#x2071_02',
          Name: 'Divisor',
          BitSize: 32,
          Info: {
            DefaultData: 1
          }
        }
      ]
    }
  },
  {
    Index: '#x2072',
    Name: 'Interpolated position mode status',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x2073',
    Name: 'Interpolated position buffer length',
    Type: 'UINT',
    BitSize: 16,
    Info: {
      DefaultData: 7
    }
  },
  {
    Index: '#x2074',
    Name: 'Interpolated position buffer configuration',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x2075',
    Name: 'Position triggers',
    Type: 'ARRAY',
    BitSize: 32,
    Info: {
      SubItem: [
        {
          Index: '#x2075_00',
          Name: 'Number of enteries',
          BitSize: 8,
          Info: {
            DefaultData: 4
          }
        },
        {
          Index: '#x2075_01',
          Name: 'Position trigger 1',
          BitSize: 32
        },
        {
          Index: '#x2075_02',
          Name: 'Position trigger 2',
          BitSize: 32
        },
        {
          Index: '#x2075_03',
          Name: 'Position trigger 3',
          BitSize: 32
        },
        {
          Index: '#x2075_04',
          Name: 'Position trigger 4',
          BitSize: 32
        }
      ]
    }
  },
  {
    Index: '#x2076',
    Name: 'Save current configuration',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x2077',
    Name: 'Execute TML program',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x2079',
    Name: 'Interpolated position initial position',
    Type: 'DINT',
    BitSize: 32,
    Info: {
      DefaultData: 0
    }
  },
  {
    Index: '#x207A',
    Name: 'Interpolated position 1st order time',
    Type: 'UINT',
    BitSize: 16,
    Info: {
      DefaultData: 0
    }
  },
  {
    Index: '#x207B',
    Name: 'Homing current threshold',
    Type: 'INT',
    BitSize: 16,
    Info: {
      DefaultData: 0
    }
  },
  {
    Index: '#x207C',
    Name: 'Homing current threshold time',
    Type: 'UINT',
    BitSize: 16,
    Info: {
      DefaultData: 0
    }
  },
  {
    Index: '#x207D',
    Name: 'Dummy object',
    Type: 'USINT',
    BitSize: 8,
    Info: {
      DefaultData: 0
    }
  },
  {
    Index: '#x207F',
    Name: 'Current limit',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x2080',
    Name: 'Reset drive',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x2081',
    Name: 'Set/Change Actual Position',
    Type: 'DINT',
    BitSize: 32
  },
  {
    Index: '#x2082',
    Name: 'Sync on fast loop',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x2083',
    Name: 'Encoder resolution for step loss protection',
    Type: 'DINT',
    BitSize: 32
  },
  {
    Index: '#x2084',
    Name: 'Stepper resolution',
    Type: 'DINT',
    BitSize: 32
  },
  {
    Index: '#x2085',
    Name: 'Position triggered outputs',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x2086',
    Name: 'Limit speed/acceleration for CSP/(CSV?)',
    Type: 'INT',
    BitSize: 16,
    Info: {
      DefaultData: 0
    }
  },
  {
    Index: '#x2087',
    Name: 'Actual internal velocity from sensor on motor',
    Type: 'DINT',
    BitSize: 32
  },
  {
    Index: '#x2088',
    Name: 'Actual internal position from sensor on motor',
    Type: 'DINT',
    BitSize: 32
  },
  {
    Index: '#x2089',
    Name: 'Synchronization test config',
    Type: 'INT',
    BitSize: 16
  },
  {
    Index: '#x208A',
    Name: 'Save setup status',
    Type: 'INT',
    BitSize: 16
  },
  {
    Index: '#x208B',
    Name: 'Sin AD signal from Sin/Cos encoder',
    Type: 'INT',
    BitSize: 16
  },
  {
    Index: '#x208C',
    Name: 'Cos AD signal from Sin/Cos encoder',
    Type: 'INT',
    BitSize: 16
  },
  {
    Index: '#x208D',
    Name: 'Auxiliary encoder position',
    Type: 'DINT',
    BitSize: 32
  },
  {
    Index: '#x208E',
    Name: 'Auxiliary settings register',
    Type: 'UINT',
    BitSize: 16,
    Info: {
      DefaultData: 256
    }
  },
  {
    Index: '#x208F',
    Name: 'Digital inputs 8bit',
    Type: 'ARRAY',
    BitSize: 8,
    Info: {
      SubItem: [
        {
          Index: '#x208F_00',
          Name: 'Number of enteries',
          BitSize: 8,
          Info: {
            DefaultData: 2
          }
        },
        {
          Index: '#x208F_01',
          Name: 'Device profile digital inputs',
          BitSize: 8
        },
        {
          Index: '#x208F_02',
          Name: 'Manufacturer specific digital inputs',
          BitSize: 8
        }
      ]
    }
  },
  {
    Index: '#x2090',
    Name: 'Digital outputs 8bit',
    Type: 'ARRAY',
    BitSize: 8,
    Info: {
      SubItem: [
        {
          Index: '#x2090_00',
          Name: 'Number of enteries',
          BitSize: 8,
          Info: {
            DefaultData: 2
          }
        },
        {
          Index: '#x2090_01',
          Name: 'Physical outputs 8bit',
          BitSize: 8,
          Info: {
            DefaultData: 0
          }
        },
        {
          Index: '#x2090_02',
          Name: 'Bit mask 8bit',
          BitSize: 8,
          Info: {
            DefaultData: 0
          }
        }
      ]
    }
  },
  {
    Index: '#x2091',
    Name: 'Lock EEPROM',
    Type: 'USINT',
    BitSize: 8,
    Info: {
      DefaultData: 0
    }
  },
  {
    Index: '#x2092',
    Name: 'User Variables',
    Type: 'ARRAY',
    BitSize: 32,
    Info: {
      SubItem: [
        {
          Index: '#x2092_00',
          Name: 'Number of enteries',
          BitSize: 8,
          Info: {
            DefaultData: 4
          }
        },
        {
          Index: '#x2092_01',
          Name: 'UserVar 1',
          BitSize: 32,
          Info: {
            DefaultData: 0
          }
        },
        {
          Index: '#x2092_02',
          Name: 'UserVar 2',
          BitSize: 32
        },
        {
          Index: '#x2092_03',
          Name: 'UserVar 3',
          BitSize: 32
        },
        {
          Index: '#x2092_04',
          Name: 'UserVar 4',
          BitSize: 32
        }
      ]
    }
  },
  {
    Index: '#x20A0',
    Name: 'Load Position and Speed monitoring',
    Type: 'ARRAY',
    BitSize: 32,
    Info: {
      SubItem: [
        {
          Index: '#x20A0_00',
          Name: 'Number of enteries',
          BitSize: 8,
          Info: {
            DefaultData: 3
          }
        },
        {
          Index: '#x20A0_01',
          Name: 'Reserved',
          BitSize: 32
        },
        {
          Index: '#x20A0_02',
          Name: 'Load Position Monitor',
          BitSize: 32
        },
        {
          Index: '#x20A0_03',
          Name: 'Load Speed Monitor',
          BitSize: 32
        }
      ]
    }
  },
  {
    Index: '#x2100',
    Name: 'Number of Steps per Revolution',
    Type: 'INT',
    BitSize: 16
  },
  {
    Index: '#x2101',
    Name: 'Number of microSteps per Step',
    Type: 'INT',
    BitSize: 16
  },
  {
    Index: '#x2102',
    Name: 'Brake status',
    Type: 'USINT',
    BitSize: 8
  },
  {
    Index: '#x2103',
    Name: 'Number of encoder Counts per Revolution',
    Type: 'DINT',
    BitSize: 32
  },
  {
    Index: '#x2104',
    Name: 'Auxiliary encoder function',
    Type: 'USINT',
    BitSize: 8,
    Info: {
      DefaultData: 0
    }
  },
  {
    Index: '#x2105',
    Name: 'Auxiliary encoder status',
    Type: 'USINT',
    BitSize: 8,
    Info: {
      DefaultData: 0
    }
  },
  {
    Index: '#x2106',
    Name: 'Auxiliary encoder captured position positive edge',
    Type: 'DINT',
    BitSize: 32
  },
  {
    Index: '#x2107',
    Name: 'Auxiliary encoder captured position negative edge',
    Type: 'DINT',
    BitSize: 32
  },
  {
    Index: '#x2108',
    Name: 'Filter variable 16 bit',
    Type: 'ARRAY',
    BitSize: 32,
    Info: {
      SubItem: [
        {
          Index: '#x2108_00',
          Name: 'Number of enteries',
          BitSize: 8,
          Info: {
            DefaultData: 3
          }
        },
        {
          Index: '#x2108_01',
          Name: '16 bit variable address',
          BitSize: 16,
          Info: {
            DefaultData: '0x0230 (address. or motor current)'
          }
        },
        {
          Index: '#x2108_02',
          Name: 'Filter strength',
          BitSize: 16,
          Info: {
            DefaultData: 50
          }
        },
        {
          Index: '#x2108_03',
          Name: 'Filter variable 16bit',
          BitSize: 16
        }
      ]
    }
  },
  {
    Index: '#x2109',
    Name: 'Sync offset',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x210A',
    Name: 'Sync rate',
    Type: 'INT',
    BitSize: 16
  },
  {
    Index: '#x210B',
    Name: 'Auxiliary settings register 2',
    Type: 'UINT',
    BitSize: 16,
    Info: {
      DefaultData: 0
    }
  },
  {
    Index: '#x210C',
    Name: 'Enable SW file dowload',
    Type: 'INT',
    BitSize: 16
  },
  {
    Index: '#x210D',
    Name: 'Virtual MAC address for EoE',
    Type: 'UINT48',
    BitSize: 48
  },
  {
    Index: '#x210E',
    Name: 'IP config for EoE',
    Type: 'DT210E',
    BitSize: 112,
    Info: {
      SubItem: [
        {
          Index: '#x210E_00',
          Name: 'Number of entries',
          BitSize: 8,

          Info: {
            DefaultData: 3
          }
        },
        {
          Index: '#x210E_01',
          Name: 'IP Address',
          BitSize: 32
        },
        {
          Index: '#x210E_02',
          Name: 'Subnet Mask',
          BitSize: 32
        },
        {
          Index: '#x210E_03',
          Name: 'Default Gateway',
          BitSize: 32
        }
      ]
    }
  },
  {
    Index: '#x210F',
    Name: 'Acceleration encoder factor',
    Type: 'ARRAY',
    BitSize: 32,
    Info: {
      SubItem: [
        {
          Index: '#x210F_00',
          Name: 'Number of enteries',
          BitSize: 8,
          Info: {
            DefaultData: 2
          }
        },
        {
          Index: '#x210F_01',
          Name: 'Acceleration encoder factor Numerator',
          BitSize: 32,
          Info: {
            DefaultData: 1
          }
        },
        {
          Index: '#x210F_02',
          Name: 'Acceleration encoder factor Divisor',
          BitSize: 32,
          Info: {
            DefaultData: 1
          }
        }
      ]
    }
  },
  {
    Index: '#x2110',
    Name: 'Jerk encoder factor',
    Type: 'ARRAY',
    BitSize: 32,
    Info: {
      SubItem: [
        {
          Index: '#x2110_00',
          Name: 'Number of enteries',
          BitSize: 8,
          Info: {
            DefaultData: 2
          }
        },
        {
          Index: '#x2110_01',
          Name: 'Jerk encoder factor Numerator',
          BitSize: 32,
          Info: {
            DefaultData: 1
          }
        },
        {
          Index: '#x2110_02',
          Name: 'Jerk encoder factor Divisor',
          BitSize: 32,
          Info: {
            DefaultData: 1
          }
        }
      ]
    }
  },
  {
    Index: '#2111',
    Name: 'Auxiliary Settings Register 3 - ASR3',
    Type: 'INT',
    BitSize: 16,
    Info: {
      DefaultData: '1 for 514x; 0 for 508x/509x'
    }
  },
  {
    Index: '#2112',
    Name: 'TML Polarity',
    Type: 'INT',
    BitSize: 16,
    Info: {
      DefaultData: '1 for 514x; 0 for 508x/509x'
    }
  },
  {
    Index: '#2113',
    Name: ' Detailed Fault Reaction Option Code',
    Type: 'INT',
    BitSize: 8,
    Info: {
      SubItem: [
        {
          Index: '#2113_00',
          Name: 'Number of enteries',
          BitSize: 8,
          Info: {
            DefaultData: 2
          }
        },
        {
          Index: '#2113_01',
          Name: 'fault_reaction_option_code_pdpint',
          BitSize: 16,
          Info: {
            DefaultData: 1
          }
        },
        {
          Index: '#2113_03',
          Name: 'fault_reaction_option_code_ctrl_err',
          BitSize: 16,
          Info: {
            DefaultData: 1
          }
        },
        {
          Index: '#2113_04',
          Name: 'fault_reaction_option_code_comm',
          BitSize: 16,
          Info: {
            DefaultData: 1
          }
        },
        {
          Index: '#2113_07',
          Name: 'fault_reaction_option_code_i2t_drv',
          BitSize: 16,
          Info: {
            DefaultData: 1
          }
        },
        {
          Index: '#2113_08',
          Name: 'fault_reaction_option_code_overcrt',
          BitSize: 16,
          Info: {
            DefaultData: 1
          }
        },
        {
          Index: '#2113_09',
          Name: 'fault_reaction_option_code_i2t',
          BitSize: 16,
          Info: {
            DefaultData: 1
          }
        },
        {
          Index: '#2113_10',
          Name: 'fault_reaction_option_motor_temp',
          BitSize: 16,
          Info: {
            DefaultData: 1
          }
        },
        {
          Index: '#2113_11',
          Name: 'fault_reaction_option_drive_temp',
          BitSize: 16,
          Info: {
            DefaultData: 1
          }
        },
        {
          Index: '#2113_12',
          Name: 'fault_reaction_option_overvoltage',
          BitSize: 16,
          Info: {
            DefaultData: 1
          }
        },
        {
          Index: '#2113_13',
          Name: 'fault_reaction_option_undervoltage',
          BitSize: 16,
          Info: {
            DefaultData: 1
          }
        },
        {
          Index: '#2113_15',
          Name: 'fault_reaction_option_code_ena',
          BitSize: 16,
          Info: {
            DefaultData: 1
          }
        }
      ]
    }
  },
  {
    Index: '#2114',
    Name: 'fault_override_option_code',
    Type: 'INT',
    BitSize: 16,
    Info: {
      DefaultData: '1 for 514x; 0 for 508x/509x'
    }
  },
  {
    Index: '#2115',
    Name: 'ASR4',
    Type: 'INT',
    BitSize: 32,
    Info: {
      DefaultData: '1 for 514x; 0 for 508x/509x'
    }
  },
  {
    Index: '#x6007',
    Name: 'Abort Connection Option Code',
    Type: 'INT',
    BitSize: 16,
    Info: {
      DefaultData: '1 for 514x; 0 for 508x/509x'
    }
  },
  {
    Index: '#x603F',
    Name: 'Error code',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x6040',
    Name: 'Controlword',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x6041',
    Name: 'Statusword',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x605A',
    Name: 'Quick Stop Option Code',
    Type: 'INT',
    BitSize: 16
  },
  {
    Index: '#x605B',
    Name: 'Shutdown Option Code',
    Type: 'INT',
    BitSize: 16,
    Info: {
      DefaultData: 0
    }
  },
  {
    Index: '#x605C',
    Name: 'Disable Operation Option Code',
    Type: 'INT',
    BitSize: 16,
    Info: {
      DefaultData: 1
    }
  },
  {
    Index: '#x605D',
    Name: 'Halt Option Code',
    Type: 'INT',
    BitSize: 16,
    Info: {
      DefaultData: 1
    }
  },
  {
    Index: '#x605E',
    Name: 'Fault Reaction Option Code',
    Type: 'INT',
    BitSize: 16,
    Info: {
      DefaultData: 2
    }
  },
  {
    Index: '#x6060',
    Name: 'Modes of operation',
    Type: 'SINT',
    BitSize: 8
  },
  {
    Index: '#x6061',
    Name: 'Modes of operation display',
    Type: 'SINT',
    BitSize: 8
  },
  {
    Index: '#x6062',
    Name: 'Position demand value',
    Type: 'DINT',
    BitSize: 32
  },
  {
    Index: '#x6063',
    Name: 'Position actual internal value',
    Type: 'DINT',
    BitSize: 32
  },
  {
    Index: '#x6064',
    Name: 'Position actual value',
    Type: 'DINT',
    BitSize: 32
  },
  {
    Index: '#x6065',
    Name: 'Following error window',
    Type: 'UDINT',
    BitSize: 32
  },
  {
    Index: '#x6066',
    Name: 'Following error timeout',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x6067',
    Name: 'Position window',
    Type: 'UDINT',
    BitSize: 32
  },
  {
    Index: '#x6068',
    Name: 'Position window time',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x6069',
    Name: 'Velocity sensor actual value',
    Type: 'DINT',
    BitSize: 32
  },
  {
    Index: '#x606B',
    Name: 'Velocity demand value',
    Type: 'DINT',
    BitSize: 32
  },
  {
    Index: '#x606C',
    Name: 'Velocity actual value',
    Type: 'DINT',
    BitSize: 32
  },
  {
    Index: '#x606D',
    Name: 'Velocity window',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x606E',
    Name: 'Velocity window time',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x606F',
    Name: 'Velocity Threshold',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x6071',
    Name: 'Target torque(current)',
    Type: 'INT',
    BitSize: 16
  },
  {
    Index: '#x6087',
    Name: 'Torque slope',
    Type: 'uint32',
    BitSize: 32
  },
  {
    Index: '#x6075',
    Name: 'Motor rated current',
    Type: 'INT',
    BitSize: 32
  },
  {
    Index: '#x6077',
    Name: 'Torque(Current) actual value',
    Type: 'INT',
    BitSize: 16
  },
  {
    Index: '#x207E',
    Name: 'Current actual value',
    Type: 'INT',
    BitSize: 16
  },
  {
    Index: '#x607A',
    Name: 'Target position',
    Type: 'DINT',
    BitSize: 32
  },
  {
    Index: '#x607B',
    Name: 'Position range limit',
    Type: 'ARRAY',
    BitSize: 32,
    Info: {
      SubItem: [
        {
          Index: '#x607B_00',
          Name: 'Number of enteries',
          BitSize: 8,
          Info: {
            DefaultData: 2
          }
        },
        {
          Index: '#x607B_01',
          Name: 'Min position range limit',
          BitSize: 32,
          Info: {
            DefaultData: '-'
          }
        },
        {
          Index: '#x607B_02',
          Name: 'Max position range limit',
          BitSize: 32,
          Info: {
            DefaultData: '-'
          }
        }
      ]
    }
  },
  {
    Index: '#x607C',
    Name: 'Home offset',
    Type: 'DINT',
    BitSize: 32,
    Info: {
      DefaultData: 0
    }
  },
  {
    Index: '#x607D',
    Name: 'Software position limit',
    Type: 'ARRAY',
    BitSize: 32,
    Info: {
      SubItem: [
        {
          Index: '#x607D_00',
          Name: 'Number of enteries',
          BitSize: 8,
          Info: {
            DefaultData: 2
          }
        },
        {
          Index: '#x607D_01',
          Name: 'Software limit switch NEG',
          BitSize: 32,
          Info: {
            DefaultData: 2147483648
          }
        },
        {
          Index: '#x607D_02',
          Name: 'Software limit switch POZ',
          BitSize: 32,
          Info: {
            DefaultData: 2147483647
          }
        }
      ]
    }
  },
  {
    Index: '#x607E',
    Name: 'Polarity',
    Type: 'USINT',
    BitSize: 8,
    Info: {
      DefaultData: 0
    }
  },
  {
    Index: '#x6080',
    Name: ' Max motor speed',
    Type: 'unsigned32',
    BitSize: 32
  },
  {
    Index: '#x6081',
    Name: 'Profile velocity',
    Type: 'DINT',
    BitSize: 32
  },
  {
    Index: '#x6083',
    Name: 'Profile acceleration',
    Type: 'DINT',
    BitSize: 32
  },
  {
    Index: '#x6085',
    Name: 'Quick stop deceleration',
    Type: 'DINT',
    BitSize: 32
  },
  {
    Index: '#x6086',
    Name: 'Motion profile type',
    Type: 'INT',
    BitSize: 16,
    Info: {
      DefaultData: 0
    }
  },
  {
    Index: '#x6089',
    Name: 'Position notation index',
    Type: 'SINT',
    BitSize: 8
  },
  {
    Index: '#x608A',
    Name: 'Position dimension index',
    Type: 'USINT',
    BitSize: 8,
    Info: {
      DefaultData: 0
    }
  },
  {
    Index: '#x608B',
    Name: 'Velocity notation index',
    Type: 'SINT',
    BitSize: 8,
    Info: {
      DefaultData: 0
    }
  },
  {
    Index: '#x608C',
    Name: 'Velocity dimension index',
    Type: 'USINT',
    BitSize: 8
  },
  {
    Index: '#x608D',
    Name: 'Acceleration notation index',
    Type: 'SINT',
    BitSize: 8,
    Info: {
      DefaultData: 0
    }
  },
  {
    Index: '#x608E',
    Name: 'Acceleration dimension index',
    Type: 'USINT',
    BitSize: 8,
    Info: {
      DefaultData: 0
    }
  },
  {
    Index: '#x608F',
    Name: 'Position encoder resolution',
    Type: 'DT608F',
    BitSize: 80,
    Info: {
      SubItem: [
        {
          Index: '#x608F_00',
          Name: 'Number of entries',
          BitSize: 8,
          Info: {
            DefaultData: 2
          }
        },
        {
          Index: '#x608F_01',
          Name: 'Encoder increments',
          BitSize: 32,
          Info: {
            DefaultData: 1
          }
        },
        {
          Index: '#x608F_02',
          Name: 'Motor revolutions',
          BitSize: 32,
          Info: {
            DefaultData: 1
          }
        }
      ]
    }
  },
  {
    Index: '#x6091',
    Name: 'Gear ratio',
    Type: 'DT6091',
    BitSize: 80,
    Info: {
      SubItem: [
        {
          Index: '#x6091_00',
          Name: 'Number of entries',
          BitSize: 8,
          Info: {
            DefaultData: 2
          }
        },
        {
          Index: '#x6091_01',
          Name: 'Motor shaft revolution',
          BitSize: 32,
          Info: {
            DefaultData: 1
          }
        },
        {
          Index: '#x6091_02',
          Name: 'Driving shaft revolution',
          BitSize: 32,
          Info: {
            DefaultData: 1
          }
        }
      ]
    }
  },
  {
    Index: '#x6092',
    Name: 'Feed constant',
    Type: 'DT6091',
    BitSize: 80,
    Info: {
      SubItem: [
        {
          Index: '#x6092_00',
          Name: 'Number of entries',
          BitSize: 8,
          Info: {
            DefaultData: 2
          }
        },
        {
          Index: '#x6092_01',
          Name: 'Feed',
          BitSize: 32,
          Info: {
            DefaultData: 1
          }
        },
        {
          Index: '#x6092_02',
          Name: 'Shaft revolution',
          BitSize: 32,
          Info: {
            DefaultData: 1
          }
        }
      ]
    }
  },
  {
    Index: '#x6093',
    Name: 'Positioon factor',
    Type: 'DT6091',
    BitSize: 80,
    Info: {
      SubItem: [
        {
          Index: '#x6093_00',
          Name: 'Number of entries',
          BitSize: 8,
          Info: {
            DefaultData: 2
          }
        },
        {
          Index: '#x6093_01',
          Name: 'Poition factor Numerator',
          BitSize: 32,
          Info: {
            DefaultData: 1
          }
        },
        {
          Index: '#x6093_02',
          Name: 'Position factor Division',
          BitSize: 32,
          Info: {
            DefaultData: 1
          }
        }
      ]
    }
  },
  {
    Index: '#x6094',
    Name: 'Velocity encoder factor Divisor',
    Type: 'DT6091',
    BitSize: 80,
    Info: {
      SubItem: [
        {
          Index: '#x6094_00',
          Name: 'Number of entries',
          BitSize: 8,
          Info: {
            DefaultData: 2
          }
        },
        {
          Index: '#x6094_01',
          Name: 'Velocity encider factor Numerator',
          BitSize: 32,
          Info: {
            DefaultData: 1
          }
        },
        {
          Index: '#x6094_02',
          Name: 'Velocity encoder factor Divisor',
          BitSize: 32
        }
      ]
    }
  },
  {
    Index: '#x6096',
    Name: 'Velocity factor',
    Type: 'DT6091',
    BitSize: 80,
    Info: {
      SubItem: [
        {
          Index: '#x6096_00',
          Name: 'Number of entries',
          BitSize: 8,
          Info: {
            DefaultData: 2
          }
        },
        {
          Index: '#x6096_01',
          Name: 'Velocity factor Numerator',
          BitSize: 32,
          Info: {
            DefaultData: 1
          }
        },
        {
          Index: '#x6096_02',
          Name: 'Velocity factor Divisor',
          BitSize: 32,
          Info: {
            DefaultData: 1
          }
        }
      ]
    }
  },
  {
    Index: '#x6097',
    Name: 'Acceleration factor',
    Type: 'DT6091',
    BitSize: 80,
    Info: {
      SubItem: [
        {
          Index: '#x6097_00',
          Name: 'Nuumber of entries',
          BitSize: 8,
          Info: {
            DefaultData: 2
          }
        },
        {
          Index: '#x6097_01',
          Name: 'Acceleration factor Numerator',
          BitSize: 32,
          Info: {
            DefaultData: 1
          }
        },
        {
          Index: '#x6097_02',
          Name: 'Acceleration factor Divisor',
          BitSize: 32
        }
      ]
    }
  },
  {
    Index: '#x60A2',
    Name: 'Jerk factor',
    Type: 'ARRAY',
    BitSize: 132,
    Info: {
      SubItem: [
        {
          Index: '#x60A2_00',
          Name: 'Number of enteries',
          BitSize: 8,
          Info: {
            DefaultData: 2
          }
        },
        {
          Index: '#x60A2_01',
          Name: 'Jerk factor Numerator',
          BitSize: 32,
          Info: {
            DefaultData: 1
          }
        },
        {
          Index: '#x60A2_02',
          Name: 'Jerk facotr Division',
          BitSize: 32,
          Info: {
            DefaultData: 1
          }
        }
      ]
    }
  },
  {
    Index: '#x60A8',
    Name: 'SI Unit position',
    Type: 'UDINT',
    BitSize: 32
  },
  {
    Index: '#x60A9',
    Name: 'SI Unit Velocity',
    Type: 'UDINT',
    BitSize: 32
  },
  {
    Index: '#x60AA',
    Name: 'SI Unit acceleration',
    Type: 'UDINT',
    BitSize: 32
  },
  {
    Index: '#x60AB',
    Name: 'SI Unit jerk',
    Type: 'UDINT',
    BitSize: 32
  },
  {
    Index: '#x6098',
    Name: 'Homing method',
    Type: 'SINT',
    BitSize: 8,
    Info: {
      DefaultData: 0
    }
  },
  {
    Index: '#x6099',
    Name: 'Homing speed',
    Type: 'ARRAY',
    BitSize: 132,
    Info: {
      SubItem: [
        {
          Index: '#x6099_00',
          Name: 'Number of enteries',
          BitSize: 8,
          Info: {
            DefaultData: 2
          }
        },
        {
          Index: '#x6099_01',
          Name: 'Speed during search for switch',
          BitSize: 32,
          Info: {
            DefaultData: 0
          }
        },
        {
          Index: '#x6099_02',
          Name: 'Speed during search for zero',
          BitSize: 32,
          Info: {
            DefaultData: 0
          }
        }
      ]
    }
  },
  {
    Index: '#x609A',
    Name: 'Homing acceleration',
    Type: 'UDINT',
    BitSize: 32,
    Info: {
      DefaultData: '0x0000199A (0.1 IU)'
    }
  },
  {
    Index: '#x60B8',
    Name: 'Touch probe function',
    Type: 'UINT',
    BitSize: 16,
    Info: {
      DefaultData: 0
    }
  },
  {
    Index: '#x60B9',
    Name: 'Touch probe status',
    Type: 'UINT',
    BitSize: 16,
    Info: {
      DefaultData: 0
    }
  },
  {
    Index: '#x60BA',
    Name: 'Touch probe 1 positive edge',
    Type: 'DINT',
    BitSize: 32
  },
  {
    Index: '#x60BB',
    Name: 'Touch probe 1 negative edge',
    Type: 'DINT',
    BitSize: 32
  },
  {
    Index: '#x60BC',
    Name: 'Touch probe 2 positive edge',
    Type: 'DINT',
    BitSize: 32
  },
  {
    Index: '#x60BD',
    Name: 'Touch probe 2 negative edge',
    Type: 'DINT',
    BitSize: 32
  },
  {
    Index: '#x60C0',
    Name: 'Interpolation submode select',
    Type: 'INT',
    BitSize: 16,
    Info: {
      DefaultData: 0
    }
  },
  {
    Index: '#x60C1',
    Name: 'Interpolated data recorded',
    Type: 'ARRAY',
    BitSize: 312,
    Info: {
      SubItem: [
        {
          Index: '#x60C1_00',
          Name: 'Number of enteries',
          BitSize: 8,
          Info: {
            DefaultData: 2
          }
        },
        {
          Index: '#x60C1_01',
          Name: 'X1: the first parameter of ip function',
          BitSize: 32
        },
        {
          Index: '#x60C1_02',
          Name: 'X2: the second parameter of ip function',
          BitSize: 32
        }
      ]
    }
  },
  {
    Index: '#x60C2',
    Name: 'Interpolated time period',
    Type: 'ARRAY',
    BitSize: 312,
    Info: {
      SubItem: [
        {
          Index: '#x60C2_00',
          Name: 'Number of enteries',
          BitSize: 8,
          Info: {
            DefaultData: 2
          }
        },
        {
          Index: '#x60C2_01',
          Name: 'Interpolation time period value',
          BitSize: 8
        },
        {
          Index: '#x60C2_02',
          Name: 'Interpolation time index',
          BitSize: 8
        }
      ]
    }
  },
  {
    Index: '#x60F2',
    Name: 'Positioning option code',
    Type: 'UINT',
    BitSize: 16
  },
  {
    Index: '#x60F4',
    Name: 'Following error actual value',
    Type: 'DINT',
    BitSize: 32
  },
  {
    Index: '#x60F8',
    Name: 'Max slippage',
    Type: 'DINT',
    BitSize: 32
  },
  {
    Index: '#x60FC',
    Name: 'Position demand value',
    Type: 'DINT',
    BitSize: 32
  },
  {
    Index: '#x60FD',
    Name: 'Digital inputs',
    Type: 'UDINT',
    BitSize: 32,
    Info: {
      DefaultData: 0
    }
  },
  {
    Index: '#x60FE',
    Name: 'Digital outputs',
    Type: 'ARRAY',
    BitSize: 132,
    Info: {
      SubItem: [
        {
          Index: '#x60FE_00',
          Name: 'Number of enteries',
          BitSize: 8,
          Info: {
            DefaultData: 2
          }
        },
        {
          Index: '#x60FE_01',
          Name: 'Physical outputs',
          BitSize: 32,
          Info: {
            DefaultData: 0
          }
        },
        {
          Index: '#x60FE_02',
          Name: 'Bit mask',
          BitSize: 32,
          Info: {
            DefaultData: 0
          }
        }
      ]
    }
  },
  {
    Index: '#x60FF',
    Name: 'Target velocity',
    Type: 'DINT',
    BitSize: 32
  },
  {
    Index: '#x6502',
    Name: 'Supported drive modes',
    Type: 'UDINT',
    BitSize: 32,
    Info: {
      DefaultData: '001F0065h for iPOS family'
    }
  }
]

export const Registers_CANopen = [
  {
    Index: '1001',
    Title: 'Error Register',
    BitInfo: [
      { bit: '7', info: 'Manufacturer specific' },
      { bit: '6', info: 'Reserved (always 0)' },
      { bit: '5', info: 'Device profile specific' },
      { bit: '4', info: 'Communication error' },
      { bit: '3', info: 'Temperature' },
      { bit: '2', info: 'Voltage' },
      { bit: '1', info: 'Current' },
      { bit: '0', info: 'Generic Error' }
    ]
  },
  {
    Index: '1005',
    Title: 'COB-ID of the SYNC Message',
    BitInfo: [
      {
        bit: '31',
        info: 'Reserved (always 0)'
      },
      {
        bit: '30',
        zero: 'Drive does not generate synchronization messages',
        one: 'Drive is the synchronization master (SYNC producer)'
      },
      {
        bit: '29',
        zero: 'Use 11 bit identifier',
        one: 'Use 29 bit identifier'
      },
      {
        bit: '11-28',
        info: 'Bit 11...28 of 29-bit SYNC COB-ID'
      },
      {
        bit: '10-0',
        info: 'Bit 0...10 of SYNC COB-ID'
      }
    ]
  },
  {
    Index: '2004',
    Title: 'COB-ID of the High-resolution time stamp',
    BitInfo: [
      {
        bit: '31',
        zero: 'High resolution time stamp exists / is valid',
        one: 'High resolution time stamp does not exist / is not valid'
      },
      {
        bit: '30',
        info: 'Reserved'
      },
      {
        bit: '29',
        zero: '11 bit ID',
        one: '29 bit ID'
      },
      {
        bit: '11-28',
        info: 'Bit 11...28 of 29-bit High resolution time stamp COB-ID'
      },
      {
        bit: '10-0',
        info: 'Bit 0...10 of High resolution time stamp COB-ID'
      }
    ]
  },
  {
    Index: '1014',
    Title: 'COB-ID of the High-resolution time stamp',
    BitInfo: [
      {
        bit: '31',
        zero: 'EMCY exists / is valid',
        one: 'EMCY does not exist / is not valid'
      },
      {
        bit: '30',
        info: 'Reserved'
      },
      {
        bit: '29',
        zero: 'Use 11 bit identifier',
        one: ' Use 29 bit identifier (not supported)'
      },
      {
        bit: '11-28',
        info: 'Reserved'
      },
      {
        bit: '10-0',
        info: 'Bit 0...10 of COB-ID'
      }
    ]
  },

  {
    Index: '1002',
    Title: 'Manufacturer status register',
    BitInfo: [
      { bit: '31', info: '1 Drive/motor in fault status' },
      { bit: '30', info: '1 Reference position in absolute electronic camming mode reached' },
      { bit: '29', info: '1 Reserved' },
      { bit: '28', info: '1 Gear ratio in electronic gearing mode reached' },
      { bit: '27', info: '1 Drive I2t protection warning level reached' },
      { bit: '26', info: '1 Motor I2t protection warning level reached' },
      { bit: '25', info: '1 Target command reached' },
      { bit: '24', info: '1 Capture event/interrupt triggered' },
      { bit: '23', info: '1 Limit switch negative event / interrupt triggered' },
      { bit: '22', info: '1 Limit switch positive event / interrupt triggered' },
      { bit: '21', info: '1 AUTORUN mode enabled' },
      { bit: '20', info: '1 Position trigger 4 reached' },
      { bit: '19', info: '1 Position trigger 3 reached' },
      { bit: '18', info: '1 Position trigger 2 reached' },
      { bit: '17', info: '1 Position trigger 1 reached' },
      { bit: '16', info: '1 Drive/motor initialization performed' },
      {
        bit: '15',
        zero: 'Axis off. Power stage is disabled. Motor control is not performed',
        one: 'Axis on. Power stage is enabled. Motor control is performed'
      },
      {
        bit: '14',
        zero: 'No event set or the programmed event has not occurred yet',
        one: 'Last event set has occurred'
      },
      {
        bit: '13..12',
        info: 'Operation Mode Specific. The meaning of these bits is detailed further in this manual for each operation mode'
      },
      { bit: '11', info: 'Internal Limit Active – see Remark 1 below' },
      { bit: '10', info: 'Target reached' },
      {
        bit: '9',
        zero: 'Remote – drive is in local mode and will not execute the command message.',
        one: 'Remote – drive parameters may be modified via CAN and the drive will execute the command message.'
      },
      {
        bit: '8',
        zero: 'No TML function or homing is executed. The execution of the last called TML function or homing is completed.',
        one: 'A TML function or homing is executed. Until the function or homing execution ends or is aborted, no other TML function / homing may be called'
      },
      {
        bit: '7',
        zero: 'No Warning',
        one: 'Warning. A TML function / homing was called, while another TML function / homing is still in execution. The last call is ignored.'
      },
      { bit: '6', info: 'Switch On Disabled.' },
      { bit: '5', info: 'Quick Stop. When this bit is zero, the drive is performing a quick stop' },
      {
        bit: '4',
        zero: 'Motor supply voltage is absent See Remark 2 below',
        one: 'Motor supply voltage is present'
      },
      { bit: '3', info: 'Fault. If set, a fault condition is or was present in the drive.' },
      { bit: '2', info: 'Operation Enabled' },
      { bit: '1', info: 'Switched On' },
      { bit: '0', info: 'Ready to switch on' }
    ]
  },

  {
    Index: '2000',
    Title: 'Motion Error Register',
    BitInfo: [
      {
        bit: '15',
        info: 'Drive disabled due to enable or STO input. Set when enable or STO input is on disable state. Reset when enable or STO input is on enable state'
      },
      {
        bit: '14',
        info: 'Command error. This bit is set in several situations. They can be distinguished either by the associated emergency code, or in conjunction with other bits from the DER (2002h) register.'
      },
      {
        bit: '13',
        info: 'Under-voltage. Set when protection is triggered. Reset by a Reset Fault command'
      },
      {
        bit: '12',
        info: 'Over-voltage. Set when protection is triggered. Reset by a Reset Fault command'
      },
      {
        bit: '11',
        info: 'Over temperature drive. Set when protection is triggered. Reset by a Reset Fault command.'
      },
      {
        bit: '10',
        info: 'Over temperature motor. Set when protection is triggered. Reset by a Reset Fault command. This protection may be activated if the motor has a PTC or NTC temperature contact.'
      },
      {
        bit: '9',
        info: 'I 2T protection. Set when protection is triggered. Reset by a Reset Fault command'
      },
      {
        bit: '8',
        info: 'Over current. Set when protection is triggered. Reset by a Reset Fault command'
      },
      {
        bit: '7',
        info: 'Negative limit switch active. Set when LSN input is in active state. Reset when LSN input is inactive state'
      },
      {
        bit: '6',
        info: 'Positive limit switch active. Set when LSP input is in active state. Reset when LSP input is inactive state'
      },
      {
        bit: '5',
        info: 'For F514G and newer: Feedback error. Details found in DER2 (2009h) bits. Set when protection is triggered. Reset by a Reset Fault command.\nFor F508x/509x; F523x/524x, it represents either digital Hall sensor missing or position wraparound.'
      },
      {
        bit: '4',
        info: 'Communication error. Set when protection is triggered. Reset by a Reset Fault command'
      },
      {
        bit: '3',
        info: 'Control error (position/speed error too big). Set when protection is triggered. Reset by a Reset Fault command'
      },
      {
        bit: '2',
        info: 'Invalid setup data. Set when the EEPROM stored setup data is not valid or not present.'
      },
      {
        bit: '1',
        info: 'Short-circuit. Set when protection is triggered. Reset by a Reset Fault command'
      },
      {
        bit: '0',
        info: 'CAN error. Set when CAN controller is in error mode. Reset by a Reset Fault command'
      }
    ]
  },

  {
    Index: '2002',
    Title: 'Detailed Error Register (DER)',
    BitInfo: [
      { bit: '15', info: 'EEPROM Locked; an attempt to write in the EEPROM will be ignored.' },
      { bit: '14', info: 'STO or Enable circuit hardware error' },
      { bit: '13', info: 'Self-check error; Internal memory (OTP) checksum error' },
      { bit: '12', info: 'reserved' },
      {
        bit: '11',
        info: 'Start mode failed; Motionless start or pole lock minimum movement failed'
      },
      {
        bit: '10',
        info: 'Encoder broken wire; On a brushless motor, either the digital halls or the incremental encoder signal was interrupted'
      },
      { bit: '9', info: 'Update ignored for S-curve' },
      {
        bit: '8',
        info: 'S-curve parameters caused an invalid profile. UPD instruction was ignored.'
      },
      { bit: '7', info: 'Negative software limit switch is active.' },
      { bit: '6', info: 'Positive software limit switch is active.' },
      {
        bit: '5',
        info: 'Cancelable call instruction received while another cancelable function was active.'
      },
      {
        bit: '4',
        info: 'UPD instruction received while AXISON was executed. The UPD instruction was ignored and it must be sent again when AXISON is completed.'
      },
      { bit: '3', info: 'A call to an inexistent function was received.' },
      { bit: '2', info: 'A call to an inexistent homing routine was received.' },
      { bit: '1', info: 'A RET/RETI instruction was executed while no function/ISR was active.' },
      {
        bit: '0',
        info: 'The number of nested function calls exceeded the length of TML stack. Last function call'
      }
    ]
  },

  {
    Index: '2003',
    Title: 'Communication Error Register (CER)',
    BitInfo: [
      { bit: '15..8', info: 'reserved' },
      { bit: '7', info: 'SPI timeout on write operation' },
      {
        bit: '6',
        info: 'CAN bus off error. It is automatically reset if the drive successfully receives a new message over CAN.'
      },
      { bit: '5', info: 'CAN transmission overrun error' },
      { bit: '4', info: 'CAN reception overrun error' },
      { bit: '3', info: 'CAN reception timeout error' },
      { bit: '2', info: 'RS232 reception timeout error' },
      { bit: '1', info: 'RS232 transmission timeout error' },
      { bit: '0', info: 'RS232 reception error' }
    ]
  },

  {
    Index: '2009',
    Title: 'Detailed Error Register 2 (DER2)',
    BitInfo: [
      {
        bit: '15',
        info: 'Output frequency. The imposed speed exceeds the DUAL USE European regulation limit.'
      },
      { bit: '14..7', info: 'Reserved' },
      { bit: '6', info: 'Position wraparound' },
      {
        bit: '5',
        info: 'Hall sensor missing; can be either Digital or Linear analogue hall error.'
      },
      {
        bit: '4',
        info: 'Absolute Encoder Interface (AEI) interface error; applies only to iPOS80x0 drives.'
      },
      { bit: '3', info: 'BiSS sensor missing; No BiSS sensor communication detected.' },
      { bit: '2', info: 'BiSS data error bit is set.' },
      { bit: '1', info: 'BiSS data warning bit is set.' },
      { bit: '0', info: 'BiSS data CRC error.' }
    ]
  },

  {
    Index: '6040',
    Title: 'Controlword',
    BitInfo: [
      {
        bit: '15',
        zero: 'Registration mode inactive',
        one: 'Activate registration mode'
      },
      {
        bit: '14',
        zero: 'When an update is performed, keep unchanged the demand values for speed and position (TML command TUM1;)',
        one: 'When an update is performed, update the demand values for speed and position with the actual values of speed and position (TML command TUM0;)'
      },
      {
        bit: '13',
        info: 'When it is set, it cancels the execution of the TML function called through object 2006h. The bit is automatically reset by the drive when the command is executed.'
      },
      {
        bit: '12',
        zero: 'No action',
        one: 'If bit 14 = 1 – Force position demand value to 0. If bit 14 = 0 – Force position actual value to 0. This bit is valid regardless of the status of the drive or other bits in Controlword'
      },
      {
        bit: '11',
        info: 'Manufacturer Specific - Operation Mode Specific. The meaning of this bit is detailed further in this manual for each operation mode'
      },
      {
        bit: '9-10',
        info: 'Reserved. Writes have no effect. Read as 0'
      },
      {
        bit: '8',
        zero: 'No action',
        one: 'Halt command – the motor will slow down on slow down ramp'
      },
      {
        bit: '7',
        zero: 'No action',
        one: 'Reset Fault. The faults are reset on 0 to 1 transition of this bit. After a Reset Fault command, the master has to reset this bit.'
      },
      {
        bit: '4-6',
        info: 'Operation Mode Specific. The meaning of these bits is detailed further in this manual for each operation mode'
      },
      {
        bit: '3',
        info: 'Enable Operation'
      },
      {
        bit: '2',
        info: 'Quick Stop'
      },
      {
        bit: '1',
        info: 'Enable Voltage'
      },
      {
        bit: '0',
        info: 'Switch On'
      }
    ]
  },

  {
    Index: '60401',
    Title: 'Controlword in Position Profile',
    BitInfo: [
      {
        bit: '15',
        zero: 'Registration mode inactive',
        one: 'Activate registration mode'
      },
      {
        bit: '14',
        zero: 'When an update is performed, keep unchanged the demand values for speed and position (TML command TUM1;)',
        one: 'When an update is performed, update the demand values for speed and position with the actual values of speed and position (TML command TUM0;)'
      },
      {
        bit: '13',
        info: 'When it is set, it cancels the execution of the TML function called through object 2006h. The bit is automatically reset by the drive when the command is executed.'
      },
      {
        bit: '12',
        zero: 'No action',
        one: 'If bit 14 = 1 – Force position demand value to 0. If bit 14 = 0 – Force position actual value to 0. This bit is valid regardless of the status of the drive or other bits in Controlword'
      },
      {
        bit: '11',
        zero: 'Trapezoidal profile - In case the movement is relative, do not add the new target position to the old demand position S-curve profile – Stop the motion with S-curve profile (jerk limited ramp)',
        one: 'Trapezoidal profile - In case the movement is relative, add the new target position to the old demand position to obtain the new target position S-curve profile – Stop the motion with trapezoidal profile (linear ramp)'
      },
      {
        bit: '9-10',
        info: 'Reserved. Writes have no effect. Read as 0'
      },
      {
        bit: '8',
        zero: 'Execute positioning',
        one: 'Halt command – Stop drive with profile acceleration'
      },
      {
        bit: '7',
        zero: 'No action',
        one: 'Reset Fault. The faults are reset on 0 to 1 transition of this bit. After a Reset Fault command, the master has to reset this bit.'
      },
      {
        bit: '6',
        zero: 'Target position is an absolute value',
        one: 'Target position is a relative value'
      },
      {
        bit: '5',
        zero: 'Finish the actual positioning and then start the next positioning',
        one: 'Interrupt the actual positioning and start the next positioning. Valid only for linear ramp profile'
      },
      {
        bit: '4',
        info: 'New set-point. Only a 0 to 1 transition will start a new motion - UPD'
      },
      {
        bit: '3',
        info: 'Enable Operation'
      },
      {
        bit: '2',
        info: 'Quick Stop'
      },
      {
        bit: '1',
        info: 'Enable Voltage'
      },
      {
        bit: '0',
        info: 'Switch On'
      }
    ]
  },
  {
    Index: '60406',
    Title: 'Controlword in Homing mode',
    BitInfo: [
      {
        bit: '15',
        zero: 'Registration mode inactive',
        one: 'Activate registration mode'
      },
      {
        bit: '14',
        zero: 'When an update is performed, keep unchanged the demand values for speed and position (TML command TUM1;)',
        one: 'When an update is performed, update the demand values for speed and position with the actual values of speed and position (TML command TUM0;)'
      },
      {
        bit: '13',
        info: 'When it is set, it cancels the execution of the TML function called through object 2006h. The bit is automatically reset by the drive when the command is executed.'
      },
      {
        bit: '12',
        zero: 'No action',
        one: 'If bit 14 = 1 – Force position demand value to 0. If bit 14 = 0 – Force position actual value to 0. This bit is valid regardless of the status of the drive or other bits in Controlword'
      },
      {
        bit: '11',
        zero: 'Trapezoidal profile - In case the movement is relative, do not add the new target position to the old demand position S-curve profile – Stop the motion with S-curve profile (jerk limited ramp)',
        one: 'Trapezoidal profile - In case the movement is relative, add the new target position to the old demand position to obtain the new target position S-curve profile – Stop the motion with trapezoidal profile (linear ramp)'
      },
      {
        bit: '9-10',
        info: 'Reserved. Writes have no effect. Read as 0'
      },
      {
        bit: '8',
        zero: 'Execute the instruction of bit 4',
        one: 'Stop drive with homing acceleration'
      },
      {
        bit: '7',
        zero: 'No action',
        one: 'Reset Fault. The faults are reset on 0 to 1 transition of this bit. After a Reset Fault command, the master has to reset this bit.'
      },
      {
        bit: '6-5',
        info: 'reserved'
      },

      {
        bit: '4',
        info: 'Homing operation start'
      },
      {
        bit: '3',
        info: 'Enable Operation'
      },
      {
        bit: '2',
        info: 'Quick Stop'
      },
      {
        bit: '1',
        info: 'Enable Voltage'
      },
      {
        bit: '0',
        info: 'Switch On'
      }
    ]
  },
  {
    Index: '60407',
    Title: 'Controlword in Interpolated Position Mode',
    BitInfo: [
      {
        bit: '15',
        zero: 'Registration mode inactive',
        one: 'Activate registration mode'
      },
      {
        bit: '14',
        zero: 'When an update is performed, keep unchanged the demand values for speed and position (TML command TUM1;)',
        one: 'When an update is performed, update the demand values for speed and position with the actual values of speed and position (TML command TUM0;)'
      },
      {
        bit: '13',
        info: 'When it is set, it cancels the execution of the TML function called through object 2006h. The bit is automatically reset by the drive when the command is executed.'
      },
      {
        bit: '12',
        zero: 'No action',
        one: 'If bit 14 = 1 – Force position demand value to 0. If bit 14 = 0 – Force position actual value to 0 This bit is valid regardless of the status of the drive or other bits in Controlword'
      },
      {
        bit: '11',
        zero: 'Stop Option: On transition to inactive mode, stop drive immediately using profile acceleration',
        one: 'On transition to inactive mode, stop drive after finishing the current segment.'
      },
      {
        bit: '9-10',
        info: 'Reserved. Writes have no effect. Read as 0'
      },
      {
        bit: '8',
        zero: 'Execute the instruction of bit 4',
        one: 'Halt - Stop drive with (profile acceleration)'
      },
      {
        bit: '7',
        zero: 'No action',
        one: 'Reset Fault. The faults are reset on 0 to 1 transition of this bit. After a Reset Fault command, the master has to reset this bit.'
      },
      {
        bit: '6',
        zero: 'Set position is an absolute value',
        one: 'Set position is a relative value (similar to Cyclic Synchronous Velocity)'
      },
      {
        bit: '5',
        info: 'Reserved'
      },
      {
        bit: '4',
        zero: 'Interpolated position mode inactive',
        one: 'Interpolated position mode active'
      },
      {
        bit: '3',
        info: 'Enable Operation'
      },
      {
        bit: '2',
        info: 'Quick Stop'
      },
      {
        bit: '1',
        info: 'Enable Voltage'
      },
      {
        bit: '0',
        info: 'Switch On'
      }
    ]
  },

  {
    Index: '60408',
    Title: 'Controlword in Cyclic Synchronous Position Mode (CSP)',
    BitInfo: [
      {
        bit: '15',
        zero: 'Registration mode inactive',
        one: 'Activate registration mode'
      },
      {
        bit: '14',
        zero: 'When an update is performed, keep unchanged the demand values for speed and position (TML command TUM1;)',
        one: 'When an update is performed, update the demand values for speed and position with the actual values of speed and position (TML command TUM0;)'
      },
      {
        bit: '13',
        info: 'When it is set, it cancels the execution of the TML function called through object 2006h. The bit is automatically reset by the drive when the command is executed.'
      },
      {
        bit: '12',
        zero: 'No action',
        one: 'If bit 14 = 1 – Force position demand value to 0. If bit 14 = 0 – Force position actual value to 0. This bit is valid regardless of the status of the drive or other bits in Controlword'
      },
      {
        bit: '11',
        zero: 'Stop Option: On transition to inactive mode, stop drive immediately using profile acceleration',
        one: 'On transition to inactive mode, stop drive after finishing the current segment.'
      },
      {
        bit: '9-10',
        info: 'Reserved. Writes have no effect. Read as 0'
      },
      {
        bit: '8',
        zero: 'Execute the instruction of bit 4',
        one: 'Halt - Stop drive with (profile acceleration)'
      },
      {
        bit: '7',
        zero: 'No action',
        one: 'Reset Fault. The faults are reset on 0 to 1 transition of this bit. After a Reset Fault command, the master has to reset this bit.'
      },
      {
        bit: '6',
        zero: 'Absolute value mode',
        one: 'Relative position mode'
      },
      {
        bit: '5',
        info: 'Reserved'
      },
      {
        bit: '4',
        info: 'Reserved'
      },
      {
        bit: '3',
        info: 'Enable Operation'
      },
      {
        bit: '2',
        info: 'Quick Stop'
      },
      {
        bit: '1',
        info: 'Enable Voltage'
      },
      {
        bit: '0',
        info: 'Switch On'
      }
    ]
  },

  {
    Index: '6040FC',
    Title: 'ControlWord Manufacturer specific – External Reference Speed Mode',
    BitInfo: [
      {
        bit: '15',
        zero: 'Registration mode inactive',
        one: 'Activate registration mode'
      },
      {
        bit: '14',
        zero: 'When an update is performed, keep unchanged the demand values for speed and position (TML command TUM1;)',
        one: 'When an update is performed, update the demand values for speed and position with the actual values of speed and position (TML command TUM0;)'
      },
      {
        bit: '13',
        info: 'When it is set, it cancels the execution of the TML function called through object 2006h. The bit is automatically reset by the drive when the command is executed.'
      },
      {
        bit: '12',
        zero: 'No action',
        one: 'If bit 14 = 1 – Force position demand value to 0. If bit 14 = 0 – Force position actual value to 0. This bit is valid regardless of the status of the drive or other bits in Controlword'
      },
      {
        bit: '11',
        zero: 'Stop Option: On transition to inactive mode, stop drive immediately using profile acceleration',
        one: 'On transition to inactive mode, stop drive after finishing the current segment.'
      },
      {
        bit: '9-10',
        info: 'Reserved. Writes have no effect. Read as 0'
      },
      {
        bit: '8',
        zero: 'Execute the instruction of bit 4',
        one: 'Halt - Stop drive with (profile acceleration)'
      },
      {
        bit: '7',
        zero: 'No action',
        one: 'Reset Fault. The faults are reset on 0 to 1 transition of this bit. After a Reset Fault command, the master has to reset this bit.'
      },
      {
        bit: '6',
        info: 'Reserved'
      },
      {
        bit: '5',
        zero: 'Do not limit acceleration on the inactive to active mode transition',
        one: 'Limit acceleration when enabling the External Speed mode with the value defined in object 6083h'
      },
      {
        bit: '4',
        zero: 'Do not start operation',
        one: '0 -> 1 External speed mode active'
      },
      {
        bit: '3',
        info: 'Enable Operation'
      },
      {
        bit: '2',
        info: 'Quick Stop'
      },
      {
        bit: '1',
        info: 'Enable Voltage'
      },
      {
        bit: '0',
        info: 'Switch On'
      }
    ]
  },

  {
    Index: '6040FE',
    Title: 'ControlWord Manufacturer specific – Electronic Camming Position Mode',
    BitInfo: [
      {
        bit: '15',
        zero: 'Registration mode inactive',
        one: 'Activate registration mode'
      },
      {
        bit: '14',
        zero: 'When an update is performed, keep unchanged the demand values for speed and position (TML command TUM1;)',
        one: 'When an update is performed, update the demand values for speed and position with the actual values of speed and position (TML command TUM0;)'
      },
      {
        bit: '13',
        info: 'When it is set, it cancels the execution of the TML function called through object 2006h. The bit is automatically reset by the drive when the command is executed.'
      },
      {
        bit: '12',
        zero: 'No action',
        one: 'If bit 14 = 1 – Force position demand value to 0. If bit 14 = 0 – Force position actual value to 0. This bit is valid regardless of the status of the drive or other bits in Controlword'
      },
      {
        bit: '11',
        zero: 'Stop Option: On transition to inactive mode, stop drive immediately using profile acceleration',
        one: 'On transition to inactive mode, stop drive after finishing the current segment.'
      },
      {
        bit: '9-10',
        info: 'Reserved. Writes have no effect. Read as 0'
      },
      {
        bit: '8',
        zero: 'Execute the instruction of bit 4',
        one: 'Halt - Stop drive with (profile acceleration)'
      },
      {
        bit: '7',
        zero: 'No action',
        one: 'Reset Fault. The faults are reset on 0 to 1 transition of this bit. After a Reset Fault command, the master has to reset this bit.'
      },
      {
        bit: '6',
        zero: 'Perform relative camming mode – when entering the camming mode, the slave will compute the cam table relative to the starting moment.',
        one: 'Perform absolute camming mode – when entering the camming mode, the slave will go to the absolute position on the cam table'
      },
      {
        bit: '5',
        zero: 'Do not limit speed when entering absolute electronic camming mode',
        one: 'Limit speed when entering absolute electronic camming mode at the value set in profile velocity (ONLY for absolute mode)'
      },
      {
        bit: '4',
        zero: 'Do not start operation',
        one: '0 -> 1 Start electronic camming procedure;1 -> 0 Does nothing (does not stop current procedure)'
      },
      {
        bit: '3',
        info: 'Enable Operation'
      },
      {
        bit: '2',
        info: 'Quick Stop'
      },
      {
        bit: '1',
        info: 'Enable Voltage'
      },
      {
        bit: '0',
        info: 'Switch On'
      }
    ]
  },

  {
    Index: '6040FF',
    Title: 'ControlWord Manufacturer specific – Electronic Gearing Position Mode',
    BitInfo: [
      {
        bit: '15',
        zero: 'Registration mode inactive',
        one: 'Activate registration mode'
      },
      {
        bit: '14',
        zero: 'When an update is performed, keep unchanged the demand values for speed and position (TML command TUM1;)',
        one: 'When an update is performed, update the demand values for speed and position with the actual values of speed and position (TML command TUM0;)'
      },
      {
        bit: '13',
        info: 'When it is set, it cancels the execution of the TML function called through object 2006h. The bit is automatically reset by the drive when the command is executed.'
      },
      {
        bit: '12',
        zero: 'No action',
        one: 'If bit 14 = 1 – Force position demand value to 0. If bit 14 = 0 – Force position actual value to 0. This bit is valid regardless of the status of the drive or other bits in Controlword'
      },
      {
        bit: '11',
        zero: 'Stop Option: On transition to inactive mode, stop drive immediately using profile acceleration',
        one: 'On transition to inactive mode, stop drive after finishing the current segment.'
      },
      {
        bit: '9-10',
        info: 'Reserved. Writes have no effect. Read as 0'
      },
      {
        bit: '8',
        zero: 'Execute the instruction of bit 4',
        one: 'Halt - Stop drive with (profile acceleration)'
      },
      {
        bit: '7',
        zero: 'No action',
        one: 'Reset Fault. The faults are reset on 0 to 1 transition of this bit. After a Reset Fault command, the master has to reset this bit.'
      },
      {
        bit: '6',
        info: 'Reserved'
      },
      {
        bit: '5',
        zero: 'Do not limit acceleration when entering electronic gear mode',
        one: 'Limit acceleration when entering electronic gear mode to the value set in profile acceleration (object 6083h)'
      },
      {
        bit: '4',
        zero: 'Do not start operation',
        one: '0 -> 1 Start electronic gearing procedure;1 -> 0 Does nothing (does not stop current procedure)'
      },
      {
        bit: '3',
        info: 'Enable Operation'
      },
      {
        bit: '2',
        info: 'Quick Stop'
      },
      {
        bit: '1',
        info: 'Enable Voltage'
      },
      {
        bit: '0',
        info: 'Switch On'
      }
    ]
  },

  {
    Index: '6041',
    Title: 'Statusword',
    BitInfo: [
      {
        bit: '15',
        zero: 'Axis off. Power stage is disabled. Motor control is not performed',
        one: 'Axis on. Power stage is enabled. Motor control is performed'
      },
      {
        bit: '14',
        zero: 'No event set or the programmed event has not occurred yet',
        one: 'Last event set has occurred'
      },
      {
        bit: '13..12',
        info: 'Operation Mode Specific. The meaning of these bits is detailed further in this manual for each operation mode'
      },
      {
        bit: '11',
        info: 'Internal Limit Active – see Remark 1 below'
      },
      {
        bit: '10',
        info: 'Target reached'
      },
      {
        bit: '9',
        zero: 'Remote – drive is in local mode and will not execute the command message.',
        one: 'Remote – drive parameters may be modified via CAN and the drive will execute the command message.'
      },
      {
        bit: '8',
        zero: 'No TML function or homing is executed. The execution of the last called TML function or homing is completed.',
        one: 'A TML function or homing is executed. Until the function or homing execution ends or is aborted, no other TML function / homing may be called'
      },
      {
        bit: '7',
        zero: 'No Warning',
        one: 'Warning. A TML function / homing was called, while another TML function / homing is still in execution. The last call is ignored.'
      },
      {
        bit: '6',
        info: 'Switch On Disabled.'
      },
      {
        bit: '5',
        info: 'Quick Stop. When this bit is zero, the drive is performing a quick stop'
      },
      {
        bit: '4',
        zero: 'Motor supply voltage is absent See Remark 2 below',
        one: 'Motor supply voltage is present'
      },
      {
        bit: '3',
        info: 'Fault. If set, a fault condition is or was present in the drive.'
      },
      {
        bit: '2',
        info: 'Operation Enabled'
      },
      {
        bit: '1',
        info: 'Switched On'
      },
      {
        bit: '0',
        info: 'Ready to switch on'
      }
    ]
  },
  {
    Index: '60419',
    Title: 'Statusword in cyclic synchronous velocity mode',
    BitInfo: [
      {
        bit: '15',
        zero: 'Axis off. Power stage is disabled. Motor control is not performed',
        one: 'Axis on. Power stage is enabled. Motor control is performed'
      },
      {
        bit: '14',
        zero: 'No event set or the programmed event has not occurred yet',
        one: 'Last event set has occurred'
      },
      {
        bit: '13',
        info: 'Reserved'
      },
      {
        bit: '12',
        zero: 'Target velocity ignored. When 6040h.8 Halt is set to 1.',
        one: 'Target velocity shall be used as input to velocity loop control'
      },
      {
        bit: '11',
        info: 'Internal Limit Active – see Remark 1 below'
      },
      {
        bit: '10',
        info: 'Reserved'
      },
      {
        bit: '9',
        zero: 'Remote – drive is in local mode and will not execute the command message.',
        one: 'Remote – drive parameters may be modified via CAN and the drive will execute the command message.'
      },
      {
        bit: '8',
        zero: 'No TML function or homing is executed. The execution of the last called TML function or homing is completed.',
        one: 'A TML function or homing is executed. Until the function or homing execution ends or is aborted, no other TML function / homing may be called'
      },
      {
        bit: '7',
        zero: 'No Warning',
        one: 'Warning. A TML function / homing was called, while another TML function / homing is still in execution. The last call is ignored.'
      },
      {
        bit: '6',
        info: 'Switch On Disabled.'
      },
      {
        bit: '5',
        info: 'Quick Stop. When this bit is zero, the drive is performing a quick stop'
      },
      {
        bit: '4',
        zero: 'Motor supply voltage is absent See Remark 2 below',
        one: 'Motor supply voltage is present'
      },
      {
        bit: '3',
        info: 'Fault. If set, a fault condition is or was present in the drive.'
      },
      {
        bit: '2',
        info: 'Operation Enabled'
      },
      {
        bit: '1',
        info: 'Switched On'
      },
      {
        bit: '0',
        info: 'Ready to switch on'
      }
    ]
  },
  {
    Index: '6041A',
    Title: 'Statusword in cyclic synchronous torque mode CST',
    BitInfo: [
      {
        bit: '15',
        zero: 'Axis off. Power stage is disabled. Motor control is not performed',
        one: 'Axis on. Power stage is enabled. Motor control is performed'
      },
      {
        bit: '14',
        zero: 'No event set or the programmed event has not occurred yet',
        one: 'Last event set has occurred'
      },
      {
        bit: '13',
        info: 'Reserved'
      },
      {
        bit: '12',
        zero: 'Target torque ignored',
        one: 'Target torque shall be used as input to torque control loop'
      },
      {
        bit: '11',
        info: 'Internal Limit Active – see Remark 1 below'
      },
      {
        bit: '10',
        info: 'Reserved'
      },
      {
        bit: '9',
        zero: 'Remote – drive is in local mode and will not execute the command message.',
        one: 'Remote – drive parameters may be modified via CAN and the drive will execute the command message.'
      },
      {
        bit: '8',
        zero: 'No TML function or homing is executed. The execution of the last called TML function or homing is completed.',
        one: 'A TML function or homing is executed. Until the function or homing execution ends or is aborted, no other TML function / homing may be called'
      },
      {
        bit: '7',
        zero: 'No Warning',
        one: 'Warning. A TML function / homing was called, while another TML function / homing is still in execution. The last call is ignored.'
      },
      {
        bit: '6',
        info: 'Switch On Disabled.'
      },
      {
        bit: '5',
        info: 'Quick Stop. When this bit is zero, the drive is performing a quick stop'
      },
      {
        bit: '4',
        zero: 'Motor supply voltage is absent See Remark 2 below',
        one: 'Motor supply voltage is present'
      },
      {
        bit: '3',
        info: 'Fault. If set, a fault condition is or was present in the drive.'
      },
      {
        bit: '2',
        info: 'Operation Enabled'
      },
      {
        bit: '1',
        info: 'Switched On'
      },
      {
        bit: '0',
        info: 'Ready to switch on'
      }
    ]
  },
  {
    Index: '60411',
    Title: 'Statusword in Position Profile',
    BitInfo: [
      {
        bit: '15',
        zero: 'Axis off. Power stage is disabled. Motor control is not performed',
        one: 'Axis on. Power stage is enabled. Motor control is performed'
      },
      {
        bit: '14',
        zero: 'No event set or the programmed event has not occurred yet',
        one: 'Last event set has occurred'
      },
      {
        bit: '13',
        zero: 'No following error',
        one: 'Following error'
      },
      {
        bit: '12',
        zero: 'Trajectory generator will accept a new set-point',
        one: 'Trajectory generator will not accept a new set-point.'
      },
      {
        bit: '11',
        info: 'Internal Limit Active – see Remark 1 below'
      },
      {
        bit: '10',
        zero: 'Halt = 0: Target position not reached // Halt = 1: Drive decelerates',
        one: 'Halt = 0: Target position reached // Halt = 1: Velocity of drive is 0'
      },
      {
        bit: '9',
        zero: 'Remote – drive is in local mode and will not execute the command message.',
        one: 'Remote – drive parameters may be modified via CAN and the drive will execute the command message.'
      },
      {
        bit: '8',
        zero: 'No TML function or homing is executed. The execution of the last called TML function or homing is completed.',
        one: 'A TML function or homing is executed. Until the function or homing execution ends or is aborted, no other TML function / homing may be called'
      },
      {
        bit: '7',
        zero: 'No Warning',
        one: 'Warning. A TML function / homing was called, while another TML function / homing is still in execution. The last call is ignored.'
      },
      {
        bit: '6',
        info: 'Switch On Disabled.'
      },
      {
        bit: '5',
        info: 'Quick Stop. When this bit is zero, the drive is performing a quick stop'
      },
      {
        bit: '4',
        zero: 'Motor supply voltage is absent See Remark 2 below',
        one: 'Motor supply voltage is present'
      },
      {
        bit: '3',
        info: 'Fault. If set, a fault condition is or was present in the drive.'
      },
      {
        bit: '2',
        info: 'Operation Enabled'
      },
      {
        bit: '1',
        info: 'Switched On'
      },
      {
        bit: '0',
        info: 'Ready to switch on'
      }
    ]
  },

  {
    Index: '60416',
    Title: 'Statusword in Homing Method',
    BitInfo: [
      {
        bit: '15',
        zero: 'Axis off. Power stage is disabled. Motor control is not performed',
        one: 'Axis on. Power stage is enabled. Motor control is performed'
      },
      {
        bit: '14',
        zero: 'No event set or the programmed event has not occurred yet',
        one: 'Last event set has occurred'
      },
      {
        bit: '13',
        zero: 'No homing error',
        one: 'Homing error occurred; homing mode not carried out successfully'
      },
      {
        bit: '12',
        zero: 'Homing mode not yet completed',
        one: 'Homing mode carried out successfully'
      },
      {
        bit: '11',
        info: 'Internal Limit Active – see Remark 1 below'
      },
      {
        bit: '10',
        zero: 'Halt = 0: Home position not reached // Halt = 1: Drive decelerates',
        one: 'Halt = 0: Home position reached // Halt = 1: Velocity of drive is 0'
      },
      {
        bit: '9',
        zero: 'Remote – drive is in local mode and will not execute the command message.',
        one: 'Remote – drive parameters may be modified via CAN and the drive will execute the command message.'
      },
      {
        bit: '8',
        zero: 'No TML function or homing is executed. The execution of the last called TML function or homing is completed.',
        one: 'A TML function or homing is executed. Until the function or homing execution ends or is aborted, no other TML function / homing may be called'
      },
      {
        bit: '7',
        zero: 'No Warning',
        one: 'Warning. A TML function / homing was called, while another TML function / homing is still in execution. The last call is ignored.'
      },
      {
        bit: '6',
        info: 'Switch On Disabled.'
      },
      {
        bit: '5',
        info: 'Quick Stop. When this bit is zero, the drive is performing a quick stop'
      },
      {
        bit: '4',
        zero: 'Motor supply voltage is absent See Remark 2 below',
        one: 'Motor supply voltage is present'
      },
      {
        bit: '3',
        info: 'Fault. If set, a fault condition is or was present in the drive.'
      },
      {
        bit: '2',
        info: 'Operation Enabled'
      },
      {
        bit: '1',
        info: 'Switched On'
      },
      {
        bit: '0',
        info: 'Ready to switch on'
      }
    ]
  },

  {
    Index: '60417',
    Title: 'Statusword in Interpolated Position Mode',
    BitInfo: [
      {
        bit: '15',
        zero: 'Axis off. Power stage is disabled. Motor control is not performed',
        one: 'Axis on. Power stage is enabled. Motor control is performed'
      },
      {
        bit: '14',
        zero: 'No event set or the programmed event has not occurred yet',
        one: 'Last event set has occurred'
      },
      {
        bit: '13',
        info: 'Reserved'
      },
      {
        bit: '12',
        zero: 'Interpolated position mode inactive',
        one: 'Interpolated position mode active'
      },
      {
        bit: '11',
        info: 'Internal Limit Active'
      },
      {
        bit: '10',
        zero: 'Halt = 0: Final position not reached // Halt = 1: Drive decelerates',
        one: 'Halt = 0: Final position reached // Halt = 1: Velocity of drive is 0'
      },
      {
        bit: '9',
        zero: 'Remote – drive is in local mode and will not execute the command message.',
        one: 'Remote – drive parameters may be modified via CAN and the drive will execute the command message.'
      },
      {
        bit: '8',
        zero: 'No TML function or homing is executed. The execution of the last called TML function or homing is completed.',
        one: 'A TML function or homing is executed. Until the function or homing execution ends or is aborted, no other TML function / homing may be called'
      },
      {
        bit: '7',
        zero: 'No Warning',
        one: 'Warning. A TML function / homing was called, while another TML function / homing is still in execution. The last call is ignored.'
      },
      {
        bit: '6',
        info: 'Switch On Disabled.'
      },
      {
        bit: '5',
        info: 'Quick Stop. When this bit is zero, the drive is performing a quick stop'
      },
      {
        bit: '4',
        zero: 'Motor supply voltage is absent See Remark 2 below',
        one: 'Motor supply voltage is present'
      },
      {
        bit: '3',
        info: 'Fault. If set, a fault condition is or was present in the drive.'
      },
      {
        bit: '2',
        info: 'Operation Enabled'
      },
      {
        bit: '1',
        info: 'Switched On'
      },
      {
        bit: '0',
        info: 'Ready to switch on'
      }
    ]
  },

  {
    Index: '60418',
    Title: 'Statusword in Cyclic Synchronous Position Mode (CSP)',
    BitInfo: [
      {
        bit: '15',
        zero: 'Axis off. Power stage is disabled. Motor control is not performed',
        one: 'Axis on. Power stage is enabled. Motor control is performed'
      },
      {
        bit: '14',
        zero: 'No event set or the programmed event has not occurred yet',
        one: 'Last event set has occurred'
      },
      {
        bit: '13',
        zero: 'No following error',
        one: 'Following error occurred'
      },
      {
        bit: '12',
        zero: 'Target position ignored',
        one: 'Target position shall be used as input to position control loop'
      },
      {
        bit: '11',
        info: 'Internal Limit Active'
      },
      {
        bit: '10',
        info: 'Reserved'
      },
      {
        bit: '9',
        zero: 'Remote – drive is in local mode and will not execute the command message.',
        one: 'Remote – drive parameters may be modified via CAN and the drive will execute the command message.'
      },
      {
        bit: '8',
        zero: 'No TML function or homing is executed. The execution of the last called TML function or homing is completed.',
        one: 'A TML function or homing is executed. Until the function or homing execution ends or is aborted, no other TML function / homing may be called'
      },
      {
        bit: '7',
        zero: 'No Warning',
        one: 'Warning. A TML function / homing was called, while another TML function / homing is still in execution. The last call is ignored.'
      },
      {
        bit: '6',
        info: 'Switch On Disabled.'
      },
      {
        bit: '5',
        info: 'Quick Stop. When this bit is zero, the drive is performing a quick stop'
      },
      {
        bit: '4',
        zero: 'Motor supply voltage is absent See Remark 2 below',
        one: 'Motor supply voltage is present'
      },
      {
        bit: '3',
        info: 'Fault. If set, a fault condition is or was present in the drive.'
      },
      {
        bit: '2',
        info: 'Operation Enabled'
      },
      {
        bit: '1',
        info: 'Switched On'
      },
      {
        bit: '0',
        info: 'Ready to switch on'
      }
    ]
  },

  {
    Index: '60413',
    Title: 'Statusword in Profile Velocity mode',
    BitInfo: [
      {
        bit: '15',
        zero: 'Axis off. Power stage is disabled. Motor control is not performed',
        one: 'Axis on. Power stage is enabled. Motor control is performed'
      },
      {
        bit: '14',
        zero: 'No event set or the programmed event has not occurred yet',
        one: 'Last event set has occurred'
      },
      {
        bit: '13',
        zero: 'Maximum slippage not reached',
        one: 'Maximum slippage reached'
      },
      {
        bit: '12',
        zero: 'Speed is not equal to 0',
        one: 'Speed is equal to 0'
      },
      {
        bit: '11',
        info: 'Internal Limit Active'
      },
      {
        bit: '10',
        zero: 'Halt = 0: Target velocity not (yet) reached // Halt = 1: Drive decelerates',
        one: 'Halt = 0: Target velocity reached // Halt = 1: Velocity of drive is 0'
      },
      {
        bit: '9',
        zero: 'Remote – drive is in local mode and will not execute the command message.',
        one: 'Remote – drive parameters may be modified via CAN and the drive will execute the command message.'
      },
      {
        bit: '8',
        zero: 'No TML function or homing is executed. The execution of the last called TML function or homing is completed.',
        one: 'A TML function or homing is executed. Until the function or homing execution ends or is aborted, no other TML function / homing may be called'
      },
      {
        bit: '7',
        zero: 'No Warning',
        one: 'Warning. A TML function / homing was called, while another TML function / homing is still in execution. The last call is ignored.'
      },
      {
        bit: '6',
        info: 'Switch On Disabled.'
      },
      {
        bit: '5',
        info: 'Quick Stop. When this bit is zero, the drive is performing a quick stop'
      },
      {
        bit: '4',
        zero: 'Motor supply voltage is absent See Remark 2 below',
        one: 'Motor supply voltage is present'
      },
      {
        bit: '3',
        info: 'Fault. If set, a fault condition is or was present in the drive.'
      },
      {
        bit: '2',
        info: 'Operation Enabled'
      },
      {
        bit: '1',
        info: 'Switched On'
      },
      {
        bit: '0',
        info: 'Ready to switch on'
      }
    ]
  },

  {
    Index: '6041FC',
    Title: 'Statusword - Manufacturer specific – External Reference Position Mode',
    BitInfo: [
      {
        bit: '15',
        zero: 'Axis off. Power stage is disabled. Motor control is not performed',
        one: 'Axis on. Power stage is enabled. Motor control is performed'
      },
      {
        bit: '14',
        zero: 'No event set or the programmed event has not occurred yet',
        one: 'Last event set has occurred'
      },
      {
        bit: '13',
        zero: 'Maximum slippage not reached',
        one: 'Maximum slippage reached'
      },
      {
        bit: '12',
        zero: 'Speed is not equal to 0',
        one: 'Speed is equal to 0'
      },
      {
        bit: '11',
        info: 'Internal Limit Active'
      },
      {
        bit: '10',
        zero: 'Halt = 0: Always 0; // Halt = 1: Drive decelerates',
        one: 'Halt = 0: Always 0; // Halt = 1: Velocity of drive is 0'
      },
      {
        bit: '9',
        zero: 'Remote – drive is in local mode and will not execute the command message.',
        one: 'Remote – drive parameters may be modified via CAN and the drive will execute the command message.'
      },
      {
        bit: '8',
        zero: 'No TML function or homing is executed. The execution of the last called TML function or homing is completed.',
        one: 'A TML function or homing is executed. Until the function or homing execution ends or is aborted, no other TML function / homing may be called'
      },
      {
        bit: '7',
        zero: 'No Warning',
        one: 'Warning. A TML function / homing was called, while another TML function / homing is still in execution. The last call is ignored.'
      },
      {
        bit: '6',
        info: 'Switch On Disabled.'
      },
      {
        bit: '5',
        info: 'Quick Stop. When this bit is zero, the drive is performing a quick stop'
      },
      {
        bit: '4',
        zero: 'Motor supply voltage is absent See Remark 2 below',
        one: 'Motor supply voltage is present'
      },
      {
        bit: '3',
        info: 'Fault. If set, a fault condition is or was present in the drive.'
      },
      {
        bit: '2',
        info: 'Operation Enabled'
      },
      {
        bit: '1',
        info: 'Switched On'
      },
      {
        bit: '0',
        info: 'Ready to switch on'
      }
    ]
  },

  {
    Index: '6041FF',
    Title: 'Statusword - Manufacturer specific – Electronic Gearing Position Mode',
    BitInfo: [
      {
        bit: '15',
        zero: 'Axis off. Power stage is disabled. Motor control is not performed',
        one: 'Axis on. Power stage is enabled. Motor control is performed'
      },
      {
        bit: '14',
        zero: 'No event set or the programmed event has not occurred yet',
        one: 'Last event set has occurred'
      },
      {
        bit: '13',
        zero: 'No following error',
        one: 'Following error occurred'
      },
      {
        bit: '12',
        info: 'Reserved'
      },
      {
        bit: '11',
        info: 'Internal Limit Active'
      },
      {
        bit: '10',
        zero: 'Halt = 0: Always 0; // Halt = 1: Drive decelerates',
        one: 'Halt = 0: Always 0; // Halt = 1: Velocity of drive is 0'
      },
      {
        bit: '9',
        zero: 'Remote – drive is in local mode and will not execute the command message.',
        one: 'Remote – drive parameters may be modified via CAN and the drive will execute the command message.'
      },
      {
        bit: '8',
        zero: 'No TML function or homing is executed. The execution of the last called TML function or homing is completed.',
        one: 'A TML function or homing is executed. Until the function or homing execution ends or is aborted, no other TML function / homing may be called'
      },
      {
        bit: '7',
        zero: 'No Warning',
        one: 'Warning. A TML function / homing was called, while another TML function / homing is still in execution. The last call is ignored.'
      },
      {
        bit: '6',
        info: 'Switch On Disabled.'
      },
      {
        bit: '5',
        info: 'Quick Stop. When this bit is zero, the drive is performing a quick stop'
      },
      {
        bit: '4',
        zero: 'Motor supply voltage is absent See Remark 2 below',
        one: 'Motor supply voltage is present'
      },
      {
        bit: '3',
        info: 'Fault. If set, a fault condition is or was present in the drive.'
      },
      {
        bit: '2',
        info: 'Operation Enabled'
      },
      {
        bit: '1',
        info: 'Switched On'
      },
      {
        bit: '0',
        info: 'Ready to switch on'
      }
    ]
  },

  {
    Index: '60FD',
    Title: 'Digital inputs',
    BitInfo: [
      {
        bit: '31',
        info: 'IN15 status '
      },
      {
        bit: '30',
        info: 'IN14 status '
      },
      {
        bit: '29',
        info: 'IN13 status '
      },
      {
        bit: '28',
        info: 'IN12 status '
      },
      {
        bit: '27',
        info: 'IN11 status '
      },
      {
        bit: '26',
        info: 'IN10 status '
      },
      {
        bit: '25',
        info: 'IN9 status '
      },
      {
        bit: '24',
        info: 'IN8 status '
      },
      {
        bit: '23',
        info: 'IN7 status '
      },
      {
        bit: '22',
        info: 'IN6 status '
      },
      {
        bit: '21',
        info: 'IN5 status '
      },
      {
        bit: '20',
        info: 'IN4 status '
      },
      {
        bit: '19',
        info: 'IN3 status '
      },
      {
        bit: '18',
        info: 'IN2 status '
      },
      {
        bit: '17',
        info: 'IN1 status '
      },
      {
        bit: '16',
        info: 'IN0 status '
      },
      {
        bit: '15-4',
        info: 'Reserved '
      },
      {
        bit: '3',
        zero: 'Interlock (Drive enable/ STO input) activated; drive may apply power to motor',
        one: 'Interlock (Drive enable/ STO input) deactivated; drive may not apply power to motor. Enter Switch on disabled state.'
      },
      {
        bit: '2',
        zero: 'Home switch input status is low',
        one: 'Home switch input status is high'
      },
      {
        bit: '1',
        zero: 'Positive limit switch is inactive',
        one: 'Positive limit switch is active'
      },
      {
        bit: '0',
        zero: 'Negative limit switch is inactive',
        one: 'Negative limit switch is active'
      }
    ]
  },
  {
    Index: '208F1',
    Title: 'Device profile defined inputs',
    BitInfo: [
      {
        bit: '4-7',
        info: 'Reserved '
      },
      {
        bit: '3',
        zero: 'Interlock (Drive enable/ STO input) activated; drive may apply power to motor',
        one: 'Interlock (Drive enable/ STO input) deactivated; drive may not apply power to motor. Enter Switch on disabled state.'
      },
      {
        bit: '2',
        zero: 'Home switch input status is low',
        one: 'Home switch input status is high'
      },
      {
        bit: '1',
        zero: 'Positive limit switch is inactive',
        one: 'Positive limit switch is active'
      },
      {
        bit: '0',
        zero: 'Negative limit switch is inactive',
        one: 'Negative limit switch is active'
      }
    ]
  },

  {
    Index: '208F2',
    Title: 'Manufacturer specific inputs',
    BitInfo: [
      {
        bit: '7',
        info: 'IN7 status '
      },
      {
        bit: '6',
        info: 'IN6 status '
      },
      {
        bit: '5',
        info: 'IN5 status '
      },
      {
        bit: '4',
        info: 'IN4 status '
      },
      {
        bit: '3',
        info: 'IN3 status '
      },
      {
        bit: '2',
        info: 'IN2 status '
      },
      {
        bit: '1',
        info: 'IN1 status '
      },
      {
        bit: '0',
        info: 'IN0 status '
      }
    ]
  },

  {
    Index: '60FE_02',
    Title: 'Bit mask',
    BitInfo: [
      {
        bit: '31',
        info: 'OUT15 command '
      },
      {
        bit: '30',
        info: 'OUT14 command '
      },
      {
        bit: '29',
        info: 'OUT13 command '
      },
      {
        bit: '28',
        info: 'OUT12 command '
      },
      {
        bit: '27',
        info: 'OUT11 command '
      },
      {
        bit: '26',
        info: 'OUT10 command '
      },
      {
        bit: '25',
        info: 'OUT9 command '
      },
      {
        bit: '24',
        info: 'OUT8 command '
      },
      {
        bit: '23',
        info: 'OUT7 command '
      },
      {
        bit: '22',
        info: 'OUT6 command '
      },
      {
        bit: '21',
        info: 'OUT5 command '
      },
      {
        bit: '20',
        info: 'OUT4 command '
      },
      {
        bit: '19',
        info: 'OUT3 command '
      },
      {
        bit: '18',
        info: 'OUT2 command '
      },
      {
        bit: '17',
        info: 'OUT1 command '
      },
      {
        bit: '16',
        info: 'OUT0 command'
      },
      {
        bit: '15-0',
        info: 'Reserved '
      }
    ]
  },
  {
    Index: '60FE_01',
    Title: 'Physical outputs',
    BitInfo: [
      {
        bit: '31',
        info: 'OUT15 command '
      },
      {
        bit: '30',
        info: 'OUT14 command '
      },
      {
        bit: '29',
        info: 'OUT13 command '
      },
      {
        bit: '28',
        info: 'OUT12 command '
      },
      {
        bit: '27',
        info: 'OUT11 command '
      },
      {
        bit: '26',
        info: 'OUT10 command '
      },
      {
        bit: '25',
        info: 'OUT9 command '
      },
      {
        bit: '24',
        info: 'OUT8 command '
      },
      {
        bit: '23',
        info: 'OUT7 command '
      },
      {
        bit: '22',
        info: 'OUT6 command '
      },
      {
        bit: '21',
        info: 'OUT5 command '
      },
      {
        bit: '20',
        info: 'OUT4 command '
      },
      {
        bit: '19',
        info: 'OUT3 command '
      },
      {
        bit: '18',
        info: 'OUT2 command '
      },
      {
        bit: '17',
        info: 'OUT1 command '
      },
      {
        bit: '16',
        info: 'OUT0 command'
      },
      {
        bit: '15-0',
        info: 'Reserved '
      }
    ]
  },
  {
    Index: '2090',
    Title: 'Digital outputs 8bit',
    BitInfo: [
      {
        bit: '7',
        info: 'OUT7 command '
      },
      {
        bit: '6',
        info: 'OUT6 command '
      },
      {
        bit: '5',
        info: 'OUT5 command '
      },
      {
        bit: '4',
        info: 'OUT4 command '
      },
      {
        bit: '3',
        info: 'OUT3 command '
      },
      {
        bit: '2',
        info: 'OUT2 command '
      },
      {
        bit: '1',
        info: 'OUT1 command '
      },
      {
        bit: '0',
        info: 'OUT0 command '
      }
    ]
  },

  {
    Index: '2045',
    Title: 'Digital output status',
    BitInfo: [
      {
        bit: '15',
        info: 'OUT15 status '
      },
      {
        bit: '14',
        info: 'OUT14 status '
      },
      {
        bit: '13',
        info: 'OUT13 status '
      },
      {
        bit: '12',
        info: 'OUT12 status '
      },
      {
        bit: '11',
        info: 'OUT11 status '
      },
      {
        bit: '10',
        info: 'OUT10 status '
      },
      {
        bit: '9',
        info: 'OUT9 status '
      },
      {
        bit: '8',
        info: 'OUT8 status '
      },
      {
        bit: '7',
        info: 'OUT7 status '
      },
      {
        bit: '6',
        info: 'OUT6 status '
      },
      {
        bit: '5',
        info: 'OUT5 status '
      },
      {
        bit: '4',
        info: 'OUT4 status '
      },
      {
        bit: '3',
        info: 'OUT3 status '
      },
      {
        bit: '2',
        info: 'OUT2 status '
      },
      {
        bit: '1',
        info: 'OUT1 status '
      },
      {
        bit: '0',
        info: 'OUT0 status '
      }
    ]
  },
  {
    Index: '2085',
    Title: 'Position triggered outputs',
    BitInfo: [
      {
        bit: '15-12',
        info: 'Reserved'
      },
      {
        bit: '11',
        zero: 'OUT5 = 1 when Position trigger 4 = 0 ||\nOUT5 = 0 when Position trigger 4 = 1',
        one: 'OUT5 = 0 when Position trigger 4 = 0 ||\nOUT5 = 1 when Position trigger 4 = 1'
      },
      {
        bit: '10',
        info: 'Reserved'
      },
      {
        bit: '9',
        zero: 'OUT1 = 1 when Position trigger 2 = 0 ||\nOUT1 = 0 when Position trigger 2 = 1',
        one: 'OUT1 = 0 when Position trigger 2 = 0 ||\nOUT1 = 1 when Position trigger 2 = 1'
      },
      {
        bit: '8',
        zero: 'OUT0 = 1 when Position trigger 1 = 0 ||\nOUT0 = 0 when Position trigger 1 = 1',
        one: 'OUT0 = 0 when Position trigger 1 = 0 ||\nOUT0 = 1 when Position trigger 1 = 1'
      },
      {
        bit: '7-4',
        info: 'Reserved'
      },
      {
        bit: '3',
        zero: 'Disable position trigger 4 control of OUT5',
        one: 'Enable position trigger 4 control of OUT5'
      },
      {
        bit: '2',
        info: 'Reserved'
      },
      {
        bit: '1',
        zero: 'Disable position trigger 2 control of OUT1',
        one: 'Enable position trigger 2 control of OUT1'
      },
      {
        bit: '0',
        zero: 'Disable position trigger 1 control of OUT0',
        one: 'Enable position trigger 1 control of OUT0'
      }
    ]
  },
  {
    Index: '208E',
    Title: 'Auxiliary settings register',
    BitInfo: [
      {
        bit: '15-9',
        info: 'Reserved'
      },
      {
        bit: '8',
        zero: 'Set interpolation mode compatible with PT and PVT (legacy)',
        one: 'Set interpolation mode (when 6060=7) as described in the CiA402 standard'
      },
      {
        bit: '7',
        info: 'Reserved'
      },
      {
        bit: '6',
        zero: 'Leave position controller history unchanged',
        one: 'Reset position controller history'
      },
      {
        bit: '5',
        zero: 'Leave speed controller history unchanged',
        one: 'Reset speed controller history'
      },
      {
        bit: '4',
        zero: 'Leave current controller history unchanged',
        one: 'Reset current controller history'
      },
      {
        bit: '3',
        zero: 'When 6040 bit 14 = 1, at the next update, the Target Speed Starting Value is the Actual Speed',
        one: 'When 6040 bit 14 = 1, at the next update, the Target Speed Starting Value is zero'
      },
      {
        bit: '2-0',
        info: 'Reserved'
      }
    ]
  },
  {
    Index: '210B',
    Title: 'Auxiliary settings register 2',
    BitInfo: [
      {
        bit: '13-15',
        info: 'Reserved'
      },
      {
        bit: '12',
        zero: 'Set actual position to the value of the homing offset 607Ch at the end of the homing procedure',
        one: 'After finishing a homing procedure, do not reset the actual position. Homing ends keeping position on home switch.'
      },
      {
        bit: '0-11',
        info: 'Reserved'
      }
    ]
  },
  {
    Index: '2091',
    Title: 'Lock EEPROM',
    BitInfo: [
      {
        bit: '1-7',
        info: 'Reserved'
      },
      {
        bit: '0',
        zero: 'EEPROM is unlocked',
        one: 'EEPROM is locked'
      }
    ]
  },
  {
    Index: '607E',
    Title: 'Polarity',
    BitInfo: [
      {
        bit: '7',
        zero: 'Position polarity: Multiply by 1 the values of objects 607Ah, 6062h and 6064h',
        one: 'Multiply by -1 the values of objects 607Ah, 6062h and 6064h'
      },
      {
        bit: '6',
        zero: 'Velocity polarity: Multiply by 1 the values of objects 60FFh, 606Bh and 606Ch',
        one: 'Multiply by -1 the values of objects 60FFh, 606Bh and 606Ch'
      },
      {
        bit: '0-5',
        info: 'Reserved'
      }
    ]
  },
  {
    Index: '2072',
    Title: 'Interpolated position mode status',
    BitInfo: [
      {
        bit: '15',
        zero: 'Buffer is not empty',
        one: 'Buffer is empty – there is no point in the buffer.'
      },
      {
        bit: '14',
        zero: 'Buffer is not low',
        one: 'Buffer is low – the number of points from the buffer is equal or less than the low limit set using object 2074h.'
      },
      {
        bit: '13',
        zero: 'Buffer is not full',
        one: 'Buffer is full – the number of points in the buffer is equal with the buffer dimension.'
      },
      {
        bit: '12',
        zero: 'No integrity counter error',
        one: 'Integrity counter error. If integrity counter error checking is enabled and the integrity counter sent by the master does not match the integrity counter of the drive.'
      },
      {
        bit: '11',
        zero: 'Valid only for PVT (cubic interpolation): Drive has maintained interpolated position mode after a buffer empty condition (the velocity of the last point was 0).',
        one: 'Valid only for PVT (cubic interpolation): Drive has performed a quick stop after a buffer empty condition because the velocity of the last point was different from 0'
      },
      {
        bit: '10-7',
        info: 'Reserved'
      },
      {
        bit: '6-0',
        info: 'Current integrity counter value'
      }
    ]
  },
  {
    Index: '2074',
    Title: 'Interpolated position buffer configuration',
    BitInfo: [
      {
        bit: '15',
        zero: 'Nothing',
        one: 'Clear buffer and reinitialize buffer internal variables'
      },
      {
        bit: '14',
        zero: 'Enable the integrity counter error checking',
        one: 'Disable the integrity counter error checking'
      },
      {
        bit: '13',
        zero: 'No change in the integral integrity counter',
        one: 'Change internal integrity counter with the value specified in bits 0 to 6'
      },
      {
        bit: '12',
        zero: 'If absolute positioning is set (bit 6 of Controlword is 0), the initial position is read from object 2079h. It is used to compute the distance to move up to the first PVT point.',
        one: 'If absolute positioning is set (bit 6 of Controlword is 0), the initial position is the current position demand value. It is used to compute the distance to move up to the first PVT point.'
      },
      {
        bit: '11-8',
        info: 'New parameter for buffer low signaling. When the number of entries in the buffer is equal or less than buffer low value, bit 14 of object 2072h will set.'
      },
      {
        bit: '7',
        zero: 'No change in the buffer low parameter',
        one: 'Change the buffer low parameter with the value specified in bits 8 to 11'
      },
      {
        bit: '6-0',
        info: 'New integrity counter value'
      }
    ]
  },
  {
    Index: '2010',
    Title: 'Master settings',
    BitInfo: [
      {
        bit: '15',
        zero: 'Master is not active – the master drive does not send any position values',
        one: 'Master is active – the master drive starts sending its position to the slave axis'
      },
      {
        bit: '14-10',
        info: 'Reserved'
      },
      {
        bit: '9',
        zero: 'The master sends its feedback (the position actual value)',
        one: 'The master sends the demand position'
      },
      {
        bit: '8',
        zero: 'Address is an axis ID',
        one: 'Address is a group ID'
      },
      {
        bit: '7-0',
        info: 'x Address of the slave drive(s)'
      }
    ]
  },

  {
    Index: '60B8',
    Title: 'Touch probe function',
    BitInfo: [
      {
        bit: '15..14',
        info: 'Reserved'
      },
      {
        bit: '13',
        zero: 'Switch off sampling at negative edge of touch probe 2',
        one: 'Enable sampling at negative edge of touch probe 2*'
      },
      {
        bit: '12',
        zero: 'Switch off sampling at positive edge of touch probe 2',
        one: 'Enable sampling at positive edge of touch probe 2*'
      },
      {
        bit: '11-10',
        value: [
          {
            bitValue: '00',
            info: 'Trigger with touch probe 2 input (LSN input)'
          },
          {
            bitValue: '01',
            info: 'Trigger with zero impulse signal'
          },
          {
            bitValue: '10',
            info: 'Reserved'
          },
          {
            bitValue: '11',
            info: 'Reserved'
          }
        ]
      },

      {
        bit: '9',
        zero: 'Trigger first event',
        one: 'Reserved'
      },
      {
        bit: '8',
        zero: 'Switch off touch probe 2',
        one: 'Enable touch probe 2'
      },
      {
        bit: '7',
        info: 'Reserved'
      },
      {
        bit: '6',
        zero: 'Enable limit switch functionality. The motor will stop, using quickstop deceleration, when a limit switch is active.',
        one: 'Disable limit switch functionality. The motor will not stop when a limit switch is active.'
      },
      {
        bit: '5',
        zero: 'Switch off sampling at negative edge of touch probe',
        one: 'Enable sampling at negative edge of touch probe 1*'
      },
      {
        bit: '4',
        zero: 'Switch off sampling at positive edge of touch probe',
        one: 'Enable sampling at positive edge of touch probe 1*'
      },
      {
        bit: '3-2',
        value: [
          {
            bitValue: '00',
            info: 'Trigger with touch probe 1 input (LSP input)'
          },
          {
            bitValue: '01',
            info: 'Trigger with zero impulse signal'
          },
          {
            bitValue: '10',
            info: 'Reserved'
          },
          {
            bitValue: '11',
            info: 'Reserved'
          }
        ],
        info: 'EXTREF. External reference type'
      },

      {
        bit: '1',
        zero: 'Trigger first event',
        one: 'Reserved'
      },
      {
        bit: '0',
        zero: 'Switch off touch probe 1',
        one: 'Enable touch probe 1'
      }
    ]
  },
  {
    Index: '60B9',
    Title: 'Touch probe status',
    BitInfo: [
      {
        bit: '15..11',
        info: 'Reserved'
      },
      {
        bit: '10',
        zero: 'Touch probe 2 no negative edge value stored',
        one: 'Touch probe 2 negative edge position stored in object 60BDh'
      },
      {
        bit: '9',
        zero: 'Touch probe 2 no positive edge value stored',
        one: 'Touch probe 2 positive edge position stored in object 60BCh'
      },
      {
        bit: '8',
        zero: 'Touch probe 2 is switched off',
        one: 'Touch probe 2 is enabled'
      },
      {
        bit: '7',
        info: 'Reserved'
      },
      {
        bit: '6',
        zero: 'Limit switch functionality enabled.',
        one: 'Limit switch functionality disabled.'
      },
      {
        bit: '3..5',
        info: 'Reserved'
      },
      {
        bit: '2',
        zero: 'Touch probe 1 no negative edge value stored',
        one: 'Touch probe 1 negative edge position stored in object 60BBh'
      },
      {
        bit: '1',
        zero: 'Touch probe 1 no positive edge value stored',
        one: 'Touch probe 1 positive edge position stored in object 60BAh'
      },
      {
        bit: '0',
        zero: 'Touch probe 1 is switched off',
        one: 'Touch probe 1 is enabled'
      }
    ]
  },
  {
    Index: '2104',
    Title: 'Auxiliary encoder function',
    BitInfo: [
      {
        bit: '7-6',
        info: 'Reserved'
      },
      {
        bit: '5',
        zero: 'Switch off sampling at negative edge of touch probe',
        one: 'Enable sampling at negative edge of touch probe'
      },
      {
        bit: '4',
        zero: 'Switch off sampling at positive edge of touch probe',
        one: 'Enable sampling at positive edge of touch probe'
      },
      {
        bit: '3',
        info: 'Reserved'
      },
      {
        bit: '2',
        zero: 'Reserved',
        one: 'Trigger with zero impulse signal'
      },
      {
        bit: '1',
        info: 'Reserved'
      },
      {
        bit: '0',
        zero: 'Switch off touch probe',
        one: 'Enable touch probe'
      }
    ]
  },

  {
    Index: '2105',
    Title: 'Auxiliary encoder status',
    BitInfo: [
      {
        bit: '7-3',
        info: 'Reserved'
      },
      {
        bit: '2',
        zero: 'Auxiliary feedback touch probe no negative edge value stored',
        one: 'Auxiliary feedback touch probe negative edge position stored in object 2107h'
      },
      {
        bit: '1',
        zero: 'Auxiliary feedback touch probe no positive edge value stored',
        one: 'Auxiliary feedback touch probe positive edge position stored in object 2106h'
      },
      {
        bit: '0',
        zero: 'Auxiliary feedback touch probe is switched off',
        one: 'Auxiliary feedback touch probe is enabled'
      }
    ]
  },
  {
    Index: '2064',
    Title: 'Read/Write configuration register',
    BitInfo: [
      {
        bit: '31..16',
        info: '16-bit memory address for the next read/write operation'
      },
      {
        bit: '15..8',
        info: 'Reserved (always 0)'
      },
      {
        bit: '7',
        zero: 'Auto-increment the address after the read/write operation',
        one: 'Do not auto-increment the address after the read/write operation'
      },
      {
        bit: '6..4',
        info: 'Reserved (always 0)'
      },
      {
        bit: '3..2',
        info: '00 Memory type is program memory || 01 Memory type is data memory || 10 Memory type is EEPROM memory || 11 Reserved'
      },
      {
        bit: '1',
        info: 'Reserved'
      },
      {
        bit: '0',
        zero: 'Next read/write operation is with a 16-bit data',
        one: 'Next read/write operation is with a 32-bit data'
      }
    ]
  },
  {
    Index: '2066',
    Title: 'Read data from address set in 2064h (16/32 bits)',
    BitInfo: [
      {
        bit: '31…16',
        zero: 'Reserved if bit 0 of object 2064h is 0 (operation on 16 bit variables)',
        one: '16-bit MSB of data if bit 0 of object 2064h is 1 (operation on 32 bit variables)'
      },
      {
        bit: '15…0',
        info: '16 bit LSB of data'
      }
    ]
  },
  {
    Index: '2067',
    Title: 'Write data at specified address',
    BitInfo: [
      {
        bit: '31…16',
        info: '16-bit memory address'
      },
      {
        bit: '15…0',
        info: '16 bit data value to be written'
      }
    ]
  },
  {
    Index: '2069',
    Title: 'Checksum configuration register',
    BitInfo: [
      {
        bit: '31…16',
        info: '16-bit end address of the checksum'
      },
      {
        bit: '15…0',
        info: '16 bit start address of the checksum'
      }
    ]
  },

  {
    Index: '208F_01',
    Title: 'Digital inputs',
    BitInfo: [
      {
        bit: '7-4',
        info: 'Reserved '
      },
      {
        bit: '3',
        zero: 'Interlock (Drive enable/ STO input) activated; drive may apply power to motor',
        one: 'Interlock (Drive enable/ STO input) deactivated; drive may not apply power to motor. Enter Switch on disabled state.'
      },
      {
        bit: '2',
        zero: 'Home switch input status is low',
        one: 'Home switch input status is high'
      },
      {
        bit: '1',
        zero: 'Positive limit switch is inactive',
        one: 'Positive limit switch is active'
      },
      {
        bit: '0',
        zero: 'Negative limit switch is inactive',
        one: 'Negative limit switch is active'
      }
    ]
  },

  {
    Index: '208F_02',
    Title: 'Digital inputs (Manuf specific)',
    BitInfo: [
      {
        bit: '7',
        info: 'IN7 status '
      },
      {
        bit: '6',
        info: 'IN6 status '
      },
      {
        bit: '5',
        info: 'IN5 status '
      },
      {
        bit: '4',
        info: 'IN4 status '
      },
      {
        bit: '3',
        info: 'IN3 status '
      },
      {
        bit: '2',
        info: 'IN2 status '
      },
      {
        bit: '1',
        info: 'IN1 status '
      },
      {
        bit: '0',
        info: 'IN0 status '
      }
    ]
  }
]

export const Registers_THS = [
  {
    Index: 'ACR',
    Title: 'Auxiliary Command Register (configuration , R/W)',
    BitInfo: [
      {
        bit: '15',
        info: 'HALLST. Control type for hall start procedure',
        zero: 'Hall start procedure using BLDC control',
        one: 'Hall start procedure using only PMSM control'
      },
      {
        bit: '14',
        info: 'SPDFWD. Speed forward without the speed loop',
        zero: 'Disable the speed forward in absence of a speed controller',
        one: 'Enable the speed forward in absence of a speed controller'
      },
      {
        bit: '13',
        info: 'SOLCTR. Control type for stepper open loop',
        zero: 'Position control with automatic external reference analogue',
        one: 'Speed control with automatic external reference analogue'
      },
      {
        bit: '12',
        info: 'CAMTYPE. Electronic camming type',
        zero: '= Relative',
        one: 'Absolute Bit'
      },
      {
        bit: '11',
        info: 'RPOSTYPE. Relative positioning type',
        zero: 'Standard',
        one: 'Additive'
      },
      {
        bit: '10',
        info: 'POSCTR. Position control',
        zero: 'Disable',
        one: 'Enable'
      },
      {
        bit: '9',
        info: 'SPDCTR. Speed control',
        zero: 'Disable',
        one: 'Enable'
      },
      {
        bit: '8',
        info: 'TCTR. Torque control',
        zero: 'Disable',
        one: 'Enable'
      },
      {
        bit: '7',
        info: 'DIGREF. Digital external reference',
        zero: 'Disable',
        one: 'Enable'
      },
      {
        bit: '6',
        info: 'AREF. Analogue external reference',
        zero: 'Disable',
        one: 'Enable'
      },
      {
        bit: '5',
        info: 'RDAREF. Read analogue external reference for torque mode when “Automatically activated after Power On” is enabled',
        zero: 'In slow loop',
        one: 'In fast loop'
      },
      {
        bit: '4',
        info: 'FRZOPT',
        zero: 'Freeze control using POSOKLIM and TONPOSOK parameters used also for motion complete inside a settle band. Freeze control and motion complete inside a settle band are mutually exclusive (for backwards compatibility).',
        one: 'Freeze control using POSOKLIM_FC and TONPOSOK_FC parameters. It allows simultaneous activation of both freeze control and motion complete inside a settle band.'
      },
      {
        bit: '3',
        info: 'AXISEN. Behavior at ENABLE input transitions from low to high',
        zero: "Don't execute AXISON",
        one: 'Execute AXISON'
      },
      {
        bit: '2',
        info: 'DIGTYPE. Digital external reference type',
        zero: '2nd encoder',
        one: 'Pulse and Direction'
      },
      {
        bit: '1',
        info: 'ASTART. Start automatically after power on',
        zero: 'Disable',
        one: 'Enable'
      },
      {
        bit: '0',
        info: 'STPSC. Stop profile for S-curve motion mode',
        zero: 'An S-curve profile',
        one: 'A trapezoidal profile'
      }
    ]
  },

  {
    Index: 'ASR',
    Title: 'Auxiliary Settings Register (configuration, R/W)',
    BitInfo: [
      {
        bit: '15',
        info: 'ACTSPDEST. Activate Speed Estimator',
        zero: 'Speed Estimator is not activated',
        one: 'Speed Estimator is activated'
      },
      {
        bit: '14',
        info: 'Reference generator',
        zero: 'Old RefGen',
        one: 'New RefGen'
      },
      {
        bit: '13',
        info: 'I2TFRA. I2t Fault Reset Action. Only valid if ASR.1 = 0.',
        zero: 'Fault Reset will reset I2t fault immediately and allow motor control with reduced capabilities (current limit set to 90% of nominal current)',
        one: 'Fault Reset will not reset I2t fault until the I2t integral is Motor control is not allowed until I2t integral is 0'
      },
      {
        bit: '12',
        info: 'SWLEN. Software Limit Switches Enable',
        zero: 'Software Limit Switches are disabled',
        one: 'Software Limit Switches are enabled'
      },
      {
        bit: '11',
        info: 'RMDIR. Reverse movement direction',
        zero: 'Reverse movement direction is disabled',
        one: 'Reverse movement direction is enabled'
      },
      {
        bit: '10',
        info: 'SWAD25. Switch AD2 and AD5; this feature allows the usage of the +/-10V circuit either on FDBK or on REF',
        zero: 'AD2 and AD5 not switched',
        one: 'AD2 and AD5 switched'
      },
      {
        bit: '9',
        info: 'EERES. Extended encoder resolution',
        zero: 'Encoder resolution smaller or equal 65535',
        one: 'Encoder resolution bigger than 65535'
      },
      {
        bit: '8',
        info: 'COIM. CANopen interpolation mode',
        zero: 'Legacy CANopen PT/PVT mode enabled',
        one: 'The CANopen interpolation mode (6060h = 7) works as described in the CiA standard.'
      },
      {
        bit: '7',
        info: 'NMNT. New treatment for negative transmission',
        zero: 'Legacy treatment of negative transmission',
        one: 'New treatment of negative transmission'
      },
      {
        bit: '6',
        info: 'RSTPCHY. Reset Position Controller History',
        zero: 'Leave position controller history unchanged',
        one: 'Reset position controller history'
      },
      {
        bit: '5',
        info: 'RSTSCHY. Reset Speed Controller History',
        zero: 'Leave speed controller history unchanged',
        one: 'Reset speed controller history'
      },
      {
        bit: '4',
        info: 'RSTCCHY. Reset Current Controller History',
        zero: 'Leave current controller history unchanged',
        one: 'Reset current controller history'
      },
      {
        bit: '3',
        info: 'TUM0TSSV. TUM0 Target Speed Starting Value',
        zero: 'When TUM0 is selected, at the next UPDate instruction the Target Speed Starting Value is the Actual Speed',
        one: 'When TUM0 is selected, at the next UPDate instruction the Target Speed Starting Value is zero.The UPDate instruction resets the ASR.3 bit when TUM0 is selected. When needed, this bit must be set before the UPDate instruction.'
      },
      {
        bit: '2',
        info: 'INPOL. Select Sink (PNP) or Source (NPN) inputs',
        zero: 'Inputs are Sink (PNP) type',
        one: 'Inputs are Source (NPN) type'
      },
      {
        bit: '1',
        info: 'I2TINT. I2T Protection Trigger Software Protections Interrupt',
        zero: 'Execute Software Protections Interrupt when I2T protection triggered. By default the drive will enter fault state and motor power will be OFF',
        one: 'Do not execute Software Protection Interrupt when I2T protection triggered. The motion will continue running with 90% of Nominal Current set as the current limit until the I2T integral drops to 0. ASR.1 setting is valid only if the current loop is active. If using SOL voltage mode (with no current loop), ASR.1 will always be considered as 0. (the drive will always enter Fault if an i2t error happens).'
      },
      {
        bit: '0',
        info: 'SIQREG. Skip IQ controller',
        zero: 'Normal operation of IQ current controller',
        one: 'Do not use the IQ current controller'
      }
    ]
  },

  {
    Index: 'ASR2',
    Title: 'Auxiliary Settings Register 2 (configuration, R/W)',
    BitInfo: [
      {
        bit: '15',
        info: 'OUTPOL. Select Source (PNP) or Sink (NPN) outputs',
        zero: 'Outputs are Sink (NPN) type',
        one: 'Outputs are Source (PNP) type'
      },
      {
        bit: '14',
        info: 'SFFAACDEC. Separate feedforward for acceleration and deceleration',
        zero: 'Same feedforward for acceleration and deceleration',
        one: 'Separate feedforward for acceleration and deceleration'
      },
      {
        bit: '13',
        info: 'AICSAR5I. for iPOS2401 - activate an internal circuit that switches the analogue REF AD5 input to be able to read +/-10V instead of 0..5V',
        zero: 'read 0..5V;',
        one: 'read +/-10V.'
      },
      {
        bit: '12',
        info: 'DNESAPEHP. for dual loop firmwares: do not execute SAP at end of homing procedure. If using absolute encoders, one might want to position the motor on a home switch without resetting the actual absolute encoder value',
        zero: 'execute SAP at end of homing procedure;',
        one: 'do not execute SAP at end of homing procedure.'
      },
      {
        bit: '11',
        info: 'SOLSLDCU. while using SOL with step loss detection',
        zero: 'TPOS or object 6062h will be shown into 6064h;',
        one: 'Object will show the encoder value converted into microsteps/ internal units/ the same units as TPOS/ command position units. The factor group also works.'
      },
      {
        bit: '10',
        info: 'BISSWFE. BiSS data warning bit',
        zero: 'If DER2.1 =1 do not enter fault, do not send 0x7300 EMCY message',
        one: 'If DER2.1 =1, enter fault + set MER.5=1 + send emergency message (0x7300)'
      },
      {
        bit: '9',
        info: 'SOLSLDFCE. while using SOL with encoder on motor (step loss detection); depends on bit8=1',
        zero: 'do nothing',
        one: 'At AXISON in TMLCAN or entering CANopen state Switched On, if APOS + STALLLIM > (APOS before AXISOFF) - enter Fault state because of Control Error. - The motor moved too much while in Axisoff'
      },
      {
        bit: '8',
        info: 'SOLSLDRTP. while using SOL with encoder on motor (step loss detection)',
        zero: 'At AXISON or Entering CANopen state Operation Enabled, if APOS + STALLLIM bigger (APOS before AXISOFF was executed), rescale APOS according with TPOS; TPOS does not change',
        one: 'If APOS + STALLLIM bigger (APOS before AXISOFF) was executed rescale TPOS according with APOS. APOS does not change. ; this rescaling happens when: when entering CANopen State Switched On, when entering CANopen state Operation enabled, in TMLCAN, when AXISON is executed after an AXISOFF'
      },
      {
        bit: '7',
        info: 'AOCOOE. only in F510I and F515F and above',
        zero: 'will execute AXISON in CANopen Switched On state',
        one: 'will execute AXISON in CANopen Operation Enabled State'
      },
      {
        bit: '6',
        info: 'COSTPOS. usable only in CANopen firmwares',
        zero: 'When entering Operation Enabled while using CSP (Cyclic Synchronous Position) mode 8 or Interpolated Position mode 7, the TPOS remains unchanged',
        one: 'When entering Operation Enabled while using CSP (Cyclic Synchronous Position) mode or Interpolated Position mode the TPOS will be set with the value of APOS; It has the same function as setting ControlWord.14=1 (the motion will use TUM0). ASR2.6 should be used only as an alternative, when the CANopen master cannot set ControlWord.14 to when it is needed'
      },
      {
        bit: '5',
        info: 'COUT3RL. controls OUT3/Ready LED',
        zero: 'OUT3 used as Ready LED',
        one: 'OUT3 used only as general IO'
      },
      {
        bit: '4',
        info: 'COUT2EL. controls OUT2/Error LED',
        zero: 'OUT2 used as Error LED',
        one: 'OUT2 used only as general IO'
      },
      {
        bit: '3',
        info: 'NPIDPCI. new PID position controller implementation (alternate implementation for the D part) - valid only for F514F and F515F and later',
        zero: 'old PID position controller implementation',
        one: 'new PID position controller implementation'
      },
      {
        bit: '2-0',
        info: 'Reserved'
      }
    ]
  },

  {
    Index: 'ASR3',
    Title: 'Auxiliary Settings Register 3',
    BitInfo: [
      {
        bit: '15-14',
        info: 'Reserved'
      },
      {
        bit: '13',
        info: 'Condition of when 6061h = 6060h',
        zero: '-- the behavior is the same as in the older firmware, the value of 6060 is copied in 6061 when the drive switches the  state machine in Operational Enable.',
        one: '= -- copy the modes of operation value (6060) to modes of operation display (6061) when the drive receives a massage (SDO/PDO).'
      },
      {
        bit: '12-10',
        info: 'Reserved'
      },
      {
        bit: '9',
        info: 'RFCSP. Reference filtering for CSP mode',
        zero: '= Legacy behaviour',
        one: '= Enable CSP reference filtering'
      },
      {
        bit: '8',
        info: 'SOLPIDEN. Enable SOL+PID mode for Stepper Open loop control with encoder on load * Only available for FA00A and newer',
        zero: '= Legacy behaviour - Stepper Open Loop with PID only',
        one: '= Stepper Open Loop with pure Open Loop control while moving + switch to PID control when reference is complete'
      },
      {
        bit: '7',
        info: 'LSM. Load Sensor Monitoring',
        zero: '= Load sensor used for position control',
        one: '= Load sensor used for monitoring only'
      },
      {
        bit: '6',
        info: 'SYMFBKIN. Symmetric Feedback input * Only available for FA00A and newer',
        zero: '= Read unipolar feedback input (0:5V)',
        one: '= Read symmetric feedback input (+-10V)'
      },
      {
        bit: '5',
        info: 'SYMREFIN. Symmetric Reference input * Only available for FA00A and newer',
        zero: '= Read unipolar reference input (0:5V)',
        one: '= Read symmetric reference input (+-10V)'
      },
      {
        bit: '4',
        info: 'SMOOTHRG. Smooth AxisOff / AxisOn reference generation',
        zero: '= Legacy behaviour',
        one: '= Smooth AxisOff / AxisOn reference generation'
      },
      {
        bit: '3',
        info: 'NFGS. New Factor Group Settings',
        zero: '= Legacy behaviour for factor group according to CiA-402 DSP v.1.1',
        one: '= New Factor Group Settings according to CiA-402-2'
      },
      {
        bit: '2',
        info: 'Reserved'
      },
      {
        bit: '1',
        info: 'FBKREAD. Activate Feedback reading',
        zero: '= Disable feedback reading',
        one: '= Activate feedback reading'
      },
      {
        bit: '0',
        info: 'REFREAD. Activate Reference reading',
        zero: '= Disable reference reading',
        one: '= Activate reference reading'
      }
    ]
  },

  {
    Index: 'ATR',
    Title: 'AutoTuning Reference',
    BitInfo: [
      {
        bit: '15-8',
        info: 'Reserved'
      },
      {
        bit: '7',
        info: 'Add Sine wave/white noise to UQREF',
        zero: 'Disabled',
        one: 'Enabled'
      },
      {
        bit: '6',
        info: 'Sine wave/white noise is added to IQREF (either in fast or slow loop)',
        zero: 'Disabled',
        one: 'Enabled'
      },
      {
        bit: '5-4',
        info: 'Sine wave is active (either in fast or slow loop)',
        value: [
          {
            bitValue: '01',
            info: 'Sine wave is active in fast loop'
          },
          {
            bitValue: '11',
            info: 'Sine wave is active in slow loop'
          }
        ]
      },
      {
        bit: '3',
        info: 'Enable WhiteNoise generation in slow loop',
        zero: 'Disabled',
        one: 'Enabled'
      },
      {
        bit: '2',
        info: 'WhiteNoise is added to IQREF (either in fast or slow loop)',
        zero: 'Disabled',
        one: 'Enabled'
      },
      {
        bit: '1',
        info: 'WhiteNoise is cyclical',
        zero: 'Disabled',
        one: 'Enabled'
      },
      {
        bit: '0',
        info: 'Enable WhiteNoise generation in fast loop',
        zero: 'Disabled',
        one: 'Enabled'
      }
    ]
  },
  {
    Index: 'OSR',
    Title: 'Operating Settings Register (configuration, R/W)',
    BitInfo: [
      {
        bit: '15',
        info: 'ELGMD. Electronic gearing master mode',
        zero: 'Send actual position to slave axes',
        one: 'Send target position to slave axes'
      },
      {
        bit: '14',
        info: 'SINCTRL. Sinusoidal control mode',
        zero: 'Set sinusoidal voltage mode',
        one: 'Set sinusoidal current mode'
      },
      {
        bit: '13',
        info: 'STEPMODE. Stepper control mode',
        zero: 'Rectangular control mode when the speed reaches the transition value',
        one: 'Sinusoidal control mode'
      },
      {
        bit: '12',
        info: 'PSPLC. Position sensor mounting place',
        zero: 'Position sensor on motor',
        one: 'Position sensor on load'
      },
      {
        bit: '11',
        info: 'LOGGER. PMSM start logging',
        zero: 'No data logging during PMSM motor start',
        one: 'Data logging during PMSM motor start'
      },
      {
        bit: '10',
        info: 'STEPCTRL. Stepper motor control type',
        zero: 'Open loop',
        one: 'Closed loop'
      },
      {
        bit: '9',
        info: 'BKCMD. Brake command',
        zero: 'Disabled',
        one: 'Enabled'
      },
      {
        bit: '8',
        info: 'UDQSAT. Ud,q command saturation method',
        zero: 'Use independently saturated commands on d and q axes',
        one: 'Compute saturated commands function of Uq and Ud'
      },
      {
        bit: '7-6',
        info: 'PWM. PWM command method',
        value: [
          {
            bitValue: '00',
            info: 'Standard symmetric PWM'
          },
          {
            bitValue: '01',
            info: 'Dead-time and Vdc compensation'
          },
          {
            bitValue: '10',
            info: 'Dead-time, Vdc compensation and third harmonic injection'
          },
          {
            bitValue: '11',
            info: 'Reserved'
          }
        ]
      },
      {
        bit: '5',
        info: 'EEDACFSOL. Enables the SOL with corrections mode',
        zero: 'Use position controller',
        one: 'Do not use position controller; Enable error detection and correction for Stepper Open Loop with feedback on load'
      },
      {
        bit: '4-2',
        info: 'PMSMST. PMSM motor start method',
        value: [
          {
            bitValue: '000',
            info: 'Reserved'
          },
          {
            bitValue: '001',
            info: 'a/b, voltage mode, incremental encoder'
          },
          {
            bitValue: '010',
            info: 'Start using digital Hall sensors'
          },
          {
            bitValue: '011',
            info: 'Reserved'
          },
          {
            bitValue: '100',
            info: 'Reserved'
          },
          {
            bitValue: '101',
            info: 'Motionless start (encoder only)'
          },
          {
            bitValue: '110',
            info: 'Reserved'
          },
          {
            bitValue: '111',
            info: 'Direct start using absolute encoder'
          }
        ]
      },
      {
        bit: '1-0',
        info: 'CRTOFF. Current offset detection',
        value: [
          {
            bitValue: '00',
            info: 'No current offset detection'
          },
          {
            bitValue: '01',
            info: 'Detection without PWM activated'
          },
          {
            bitValue: '10',
            info: 'Detection with PWM activated'
          },
          {
            bitValue: '11',
            info: 'Reserved'
          }
        ]
      }
    ]
  },

  {
    Index: 'SCR',
    Title: 'System Configuration Register (configuration, R/W)',
    BitInfo: [
      {
        bit: '15',
        zero: 'On Feedback 1 connector',
        one: 'On Feedback 2 connector',
        info: 'DRL. Digital Reference Location '
      },
      {
        bit: '14-12',
        value: [
          {
            bitValue: '000',
            info: 'Brushless DC '
          },
          {
            bitValue: '001',
            info: 'Brushed DC'
          },
          {
            bitValue: '010',
            info: 'Brushless AC'
          },
          {
            bitValue: '011',
            info: 'Reserved '
          },
          {
            bitValue: '100',
            info: 'Stepper '
          },
          {
            bitValue: '101',
            info: 'Tri-phases stepper '
          },
          {
            bitValue: '110',
            info: 'Reserved '
          },
          {
            bitValue: '111',
            info: 'Reserved'
          }
        ],
        info: 'MOTOR. Motor type'
      },
      {
        bit: '11',
        zero: 'On Feedback 1 connector',
        one: 'On Feedback 2 connector',
        info: 'SSL. Speed Sensor Location '
      },
      {
        bit: '10',
        zero: 'On Feedback 1 connector',
        one: 'On Feedback 2 connector ',
        info: 'PSL. Position Sensor Location '
      },
      {
        bit: '8',
        zero: 'Disabled',
        one: 'Enabled ',
        info: 'TSNS2.Drive temperature sensor'
      },
      {
        bit: '7',
        zero: 'Disabled ',
        one: 'Enabled ',
        info: 'TSNS1. Motor temperature sensor '
      },
      {
        bit: '6-3',
        value: [
          {
            bitValue: '0000',
            info: 'Position difference '
          },
          {
            bitValue: '0001',
            info: 'Tachogenerator '
          },
          {
            bitValue: '0010',
            info: 'Pulse length from Hall sensor '
          },
          {
            bitValue: '0011',
            info: 'Reserved '
          },
          {
            bitValue: '0100',
            info: 'Reserved '
          },
          {
            bitValue: '0101',
            info: 'Reserved '
          },
          {
            bitValue: '0110',
            info: 'Speed Estimator '
          },
          {
            bitValue: '0111',
            info: 'None '
          },
          {
            bitValue: '1000',
            info: 'Incremental Encoder '
          },
          {
            bitValue: '1001',
            info: 'Resolver '
          },
          {
            bitValue: '1010',
            info: 'Sin-cos without EnDat '
          },
          {
            bitValue: '1011',
            info: 'SSI '
          },
          {
            bitValue: '1100',
            info: 'Linear Hall '
          },
          {
            bitValue: '1101',
            info: 'BiSS encoder '
          },
          {
            bitValue: '1110',
            info: 'Sin-cos with EnDat '
          },
          {
            bitValue: '1111',
            info: 'Sin-cos with Hiperface '
          }
        ],
        info: 'SSNS. Speed sensor'
      },
      {
        bit: '9, 2-0',
        value: [
          {
            bitValue: '0000',
            info: 'Quadrature encoder '
          },
          {
            bitValue: '0001',
            info: 'Resolver '
          },
          {
            bitValue: '0010',
            info: 'Sin-cos with/without EnDat '
          },
          {
            bitValue: '0011',
            info: 'SSI '
          },
          {
            bitValue: '0100',
            info: 'Linear Hall '
          },
          {
            bitValue: '0101',
            info: 'BiSS encoder '
          },
          {
            bitValue: '0110',
            info: 'Reserved'
          },
          {
            bitValue: '0111',
            info: 'None '
          },
          {
            bitValue: '1000',
            info: 'Reserved '
          },
          {
            bitValue: '1001',
            info: 'Reserved '
          },
          {
            bitValue: '1010',
            info: 'Sin-cos with EnDat '
          },
          {
            bitValue: '1011',
            info: 'Reserved '
          },
          {
            bitValue: '1100',
            info: 'Reserved '
          },
          {
            bitValue: '1101',
            info: 'Reserved '
          },
          {
            bitValue: '1110',
            info: 'Sin-cos with Hiperface '
          },
          {
            bitValue: '1111',
            info: 'Reserved '
          }
        ],
        info: 'PSNS. Position sensor'
      }
    ]
  },

  {
    Index: 'UPGRADE',
    Title: 'Upgrade Register (configuration, R/W)',
    BitInfo: [
      {
        bit: '15',
        info: 'STPTBL. Setup table',
        zero: 'Valid setup table is not required',
        one: 'Valid setup table is required'
      },
      {
        bit: '14',
        info: 'DHSF. Digital hall signals filtering',
        zero: 'Disable digital hall signals filtering',
        one: 'Enable digital hall signals filtering'
      },
      {
        bit: '13',
        info: 'TXBUFF. CAN-bus transmit buffer length',
        zero: 'The length of CAN-bus transmit buffer is 1 messages',
        one: 'The length of CAN-bus transmit buffer is 5 messages'
      },
      {
        bit: '12',
        info: 'TINTQSTP. TML time interrupt/quickstop',
        zero: 'Disable',
        one: 'Enable TML time interrupt and quickstop mode when a limit switch is reached'
      },
      {
        bit: '11',
        info: 'MCM. Motion complete mode',
        zero: 'Motion complete set when the position reference arrives at the commanded position',
        one: 'Motion complete set when the position feedback arrives at the commanded position and remains in a settle band for a preset stabilize time interval'
      },
      {
        bit: '10',
        info: 'I2TPRT. I2T protection',
        zero: 'One I2T protection common for drive and motor',
        one: 'Two I2T protections, one for drive and the other for the motor'
      },
      {
        bit: '9',
        info: 'IPOS. Initial positioning mode',
        zero: 'Standard – wait time per phase up to 1s',
        one: 'Extended – wait time per phase up to 635s'
      },
      {
        bit: '8',
        info: 'IORW. I/O lines read/write',
        zero: 'Simultaneous read /write of 4 general purpose inputs/outputs',
        one: 'Simultaneous read general-purpose inputs and dedicated inputs: Enable, LSP and LSN. Simultaneous set general-purpose outputs and dedicated outputs: Ready and Error.'
      },
      {
        bit: '7',
        info: 'ATIME. Absolute time start',
        zero: 'After instruction ENDINIT',
        one: 'After power on'
      },
      {
        bit: '6',
        info: 'FSTSLW. Position/speed control mode',
        zero: 'Position/speed control in slow loop',
        one: 'Position/speed control in fast loop'
      },
      {
        bit: '5',
        info: 'STBCRT. Standby current for step motors',
        zero: 'Disable',
        one: 'Enable'
      },
      {
        bit: '4',
        info: 'SPDCTR. Speed control error protection',
        zero: 'Common with position control error protection',
        one: 'Separate control error protection for position and speed'
      },
      {
        bit: '3',
        info: 'REG. Registration mode',
        zero: 'Disabled',
        one: 'Enabled'
      },
      {
        bit: '2',
        info: 'LMTSPDACC. Maximal speed/acceleration in motion modes: external, electronic gearing and electronic camming',
        zero: 'Unlimited',
        one: 'Limited'
      },
      {
        bit: '1',
        info: 'STPMD. Stop mode for steppers',
        zero: 'Disabled',
        one: 'Enabled'
      },
      {
        bit: '0',
        info: 'AREFLMT. Analogue reference',
        zero: 'Symmetrical, only positive or only negative',
        one: 'Separately programmable upper and lower limits'
      }
    ]
  },
  {
    Index: 'CCR',
    Title: 'Communication Control Register (command, R/W)',
    BitInfo: [
      {
        bit: '15-2',
        info: 'Reserved'
      },
      {
        bit: '1',
        info: 'Reserved'
      },
      {
        bit: '0',
        zero: 'Not installed',
        one: 'Installed',
        info: 'SPIMEM. EEPROM memory'
      }
    ]
  },
  {
    Index: 'ICR',
    Title: 'Interrupts Control Register (command, R/W)',
    BitInfo: [
      {
        bit: '15',
        zero: 'Disable',
        one: 'Enable',
        info: 'GIM. Globally enable/disable TML interrupts'
      },
      {
        bit: '14-13',
        info: 'Reserved'
      },
      {
        bit: '12',
        zero: 'Disable',
        one: 'Enable. After INT12 is enabled, it will activate each time SRH bits or change.',
        info: 'PTCDIM. Enable/disable interrupt 12 – “Position trigger 1..4 change detected”'
      },
      {
        bit: '11',
        zero: 'Disable',
        one: 'Enable',
        info: 'EVNIM. Enable/disable interrupt 11 – “Event set has occurred”'
      },
      {
        bit: '10',
        zero: 'Disable',
        one: 'Enable',
        info: 'TPIM. Enable/disable interrupt 10 – “Time period has elapsed”'
      },
      {
        bit: '9',
        zero: 'Disable',
        one: 'Enable',
        info: 'MOTIM. Enable/disable interrupt 9 – “Motion is complete”'
      },
      {
        bit: '8',
        zero: 'Disable',
        one: 'Enable',
        info: 'PCAPIM. Enable/disable interrupt 8 – “Capture input transition detected”'
      },
      {
        bit: '7',
        zero: 'Disable',
        one: 'Enable',
        info: 'LSWNIM. Enable/disable interrupt 7 – “LSN programmed transition detected”'
      },
      {
        bit: '6',
        zero: 'Disable',
        one: 'Enable',
        info: 'LSWPIM. Enable/disable interrupt 6 – “LSP programmed transition detected”'
      },
      {
        bit: '5',
        zero: 'Disable',
        one: 'Enable',
        info: 'WRPIM. Enable/disable interrupt 5 – “Position wrap around”'
      },
      {
        bit: '4',
        zero: 'Disable',
        one: 'Enable',
        info: 'CMERIM. Enable/disable interrupt 4 – “Communication error”'
      },
      {
        bit: '3',
        zero: 'Disable',
        one: 'Enable',
        info: 'CTRERIM. Enable/disable interrupt 3 – “Control error”'
      },
      {
        bit: '2',
        zero: 'Disable',
        one: 'Enable',
        info: 'SWPRIM. Enable/disable interrupt 2 – “Software protection”'
      },
      {
        bit: '1',
        zero: 'Disable',
        one: 'Enable',
        info: 'Enable/disable interrupt 1 –“Short-circuit”'
      },
      {
        bit: '0',
        zero: 'Disable',
        one: 'Enable',
        info: 'DLSBIM. Enable/disable interrupt 0 – “Enable input has changed”'
      }
    ]
  },

  {
    Index: 'MCR',
    Title: 'Motion Command Register (command, RO)',
    BitInfo: [
      {
        bit: '15',
        zero: 'Same motion mode',
        one: 'New motion mode',
        info: 'MMODE. Motion mode'
      },
      {
        bit: '14',
        zero: 'Update the reference',
        one: 'Keep the reference',
        info: 'MODECHG. When motion mode is changed'
      },
      {
        bit: '13',
        zero: 'Relative',
        one: 'Absolute',
        info: 'POSTYPE. Positioning type'
      },
      {
        bit: '12',
        zero: 'Disable the superposition of the electronic gearing mode with a second motion mode',
        one: 'Enable the superposition of the electronic gearing mode with a second motion mode',
        info: 'REGMODE. Motion superposition'
      },
      {
        bit: '11',
        zero: 'Disable the axis as master',
        one: 'Enable the axis as master',
        info: 'ELGEAR. Electronic gearing master'
      },
      {
        bit: '10',
        zero: 'Disabled',
        one: 'Enabled',
        info: 'POSLP. Position loop status'
      },
      {
        bit: '9',
        zero: 'Disabled',
        one: 'Enabled',
        info: 'SPDLP. Speed loop status'
      },
      {
        bit: '8',
        zero: 'Disabled',
        one: 'Enabled',
        info: 'CRTLP. Current loop status'
      },
      {
        bit: '7-6',
        value: [
          {
            bitValue: '00',
            info: 'On-line reference'
          },
          {
            bitValue: '01',
            info: 'Analogue reference'
          },
          {
            bitValue: '10',
            info: 'Digital reference'
          },
          {
            bitValue: '11',
            info: 'Reserved'
          }
        ],
        info: 'EXTREF. External reference type'
      },
      {
        bit: '5',
        zero: 'Update in slow control loop',
        one: 'Update in fast control loop',
        info: 'REFLOC. Analogue external reference for torque/voltage mode update'
      },
      {
        bit: '4-0',
        value: [
          {
            bitValue: '00000',
            info: 'External reference'
          },
          {
            bitValue: '00001',
            info: 'Trapezoidal reference'
          },
          {
            bitValue: '00010',
            info: 'Contouring position/speed'
          },
          {
            bitValue: '00011',
            info: 'Contouring torque/voltage'
          },
          {
            bitValue: '00100',
            info: 'Pulse and direction'
          },
          {
            bitValue: '00101',
            info: 'Electronic gearing slave'
          },
          {
            bitValue: '00110',
            info: 'Electronic camming slave'
          },
          {
            bitValue: '00111',
            info: 'S-curve reference'
          },
          {
            bitValue: '01000',
            info: 'Test mode'
          },
          {
            bitValue: '01001',
            info: 'PVT'
          },
          {
            bitValue: '01010',
            info: 'PT'
          },
          {
            bitValue: '10000',
            info: 'Stop 0/1/2'
          },
          {
            bitValue: '10001',
            info: 'Stop using trapezoidal profile'
          },
          {
            bitValue: '10100',
            info: 'Stop using S-curve profile'
          },
          {
            bitValue: '10101',
            info: 'Quickstop'
          }
        ],
        info: 'REFTYPE. Reference type'
      }
    ]
  },

  {
    Index: 'PCR',
    Title: 'Protections Control Register (command/status, R/W)',
    BitInfo: [
      {
        bit: '15',
        zero: 'Not triggered',
        one: 'Triggered',
        info: 'I2TDPRS. Status of drive i2t protection'
      },
      {
        bit: '14',
        zero: 'Not triggered',
        one: 'Triggered',
        info: 'EBWPRS. Status of encoder broken wire protection'
      },
      {
        bit: '13',
        zero: 'Not triggered',
        one: 'Triggered',
        info: 'UVPRS. Status of under voltage protection'
      },
      {
        bit: '12',
        zero: 'Not triggered',
        one: 'Triggered',
        info: 'OVPRS. Status of over voltage protection'
      },
      {
        bit: '11',
        zero: 'Not triggered',
        one: 'Triggered',
        info: 'OT2PRS. Status of drive over temperature protection'
      },
      {
        bit: '10',
        zero: 'Not triggered',
        one: 'Triggered',
        info: 'OT1PRS. Status of motor over temperature protection'
      },
      {
        bit: '9',
        zero: 'Not triggered',
        one: 'Triggered',
        info: 'I2TMPRS. Status of motor i2t protection'
      },
      {
        bit: '8',
        zero: 'Not triggered',
        one: 'Triggered',
        info: 'IMAXP. Status of over current protection'
      },
      {
        bit: '7',
        zero: 'Disable',
        one: 'Enable',
        info: 'I2TDPRM. Mask for drive I2t protection'
      },
      {
        bit: '6',
        zero: 'Disable',
        one: 'Enable',
        info: 'EBWPRM. Mask for encoder broken wire protection'
      },
      {
        bit: '5',
        zero: 'Disable',
        one: 'Enable',
        info: 'UVPRM. Mask for under voltage protection'
      },
      {
        bit: '4',
        zero: 'Disable',
        one: 'Enable',
        info: 'OVPRM. Mask for over voltage protection'
      },
      {
        bit: '3',
        zero: 'Disable',
        one: 'Enable',
        info: 'OT2PRM. Mask for drive over temperature protection'
      },
      {
        bit: '2',
        zero: 'Disable',
        one: 'Enable',
        info: 'OT1PRM. Mask for motor over temperature protection'
      },
      {
        bit: '1',
        zero: 'Disable',
        one: 'Enable',
        info: 'I2TPRM. Mask for motor I2t protection'
      },
      {
        bit: '0',
        zero: 'Disable',
        one: 'Enable',
        info: 'IMXPRM. Mask for maximum current protection'
      }
    ]
  },
  {
    Index: 'AAR',
    Title: 'Axis Addresses Register (status, RO)',
    BitInfo: [
      {
        bit: '15-8',
        value: [
          {
            bitValue: '0',
            info: 'The motion axis does not belong to group n'
          },
          {
            bitValue: '1',
            info: 'The motion axis belongs to group n'
          }
        ],
        info: 'GRn.Group n selection'
      },
      {
        bit: '7-0',
        info: 'AXISID Axis address; value = Individual identification address for the motion axis'
      }
    ]
  },
  {
    Index: 'CBR',
    Title: 'CAN baud rate Register (status, R/W)',
    BitInfo: [
      {
        bit: '15-8',
        info: 'CANBTR1. CAN bus Timing Register 1 (BTR1); xx = CAN controller bus timing register 1'
      },
      {
        bit: '7-0',
        info: 'Bit 7-0 CANBTR0. CAN bus Timing Register 0 (BTR0)\n\nxx = CAN controller bus timing register 0'
      }
    ]
  },
  {
    Index: 'CER',
    Title: 'Communication Error Register (status, RO)',
    BitInfo: [
      {
        bit: '15-12',
        info: 'Reserved'
      },
      {
        bit: '11',
        zero: 'No SPI timeout',
        one: 'SPI timeout',
        info: 'OFWRER.EnDat encoder offset write error'
      },
      {
        bit: '10',
        zero: 'No SPI timeout',
        one: 'SPI timeout',
        info: 'OFRDER. EnDat encoder offset read error'
      },
      {
        bit: '9',
        zero: 'No SPI timeout',
        one: 'SPI timeout',
        info: 'ALRSER. EnDat encoder alarm reset error'
      },
      {
        bit: '8',
        zero: 'No SPI timeout',
        one: 'SPI timeout',
        info: 'ALRDER. EnDat encoder alarm read error'
      },
      {
        bit: '7',
        zero: 'No SPI timeout',
        one: 'SPI timeout',
        info: 'SPITTO. SPI timeout on write operation'
      },
      {
        bit: '6',
        zero: 'No CAN bus off error',
        one: 'Error; Remark: The CER.6 bit is automatically reset if the drive successfully receives a new message over CAN.',
        info: 'CANBER. CAN bus off error'
      },
      {
        bit: '5',
        zero: 'No CAN transmission overrun error',
        one: 'CAN transmission overrun error',
        info: 'CANTER. CAN Tx overrun error'
      },
      {
        bit: '4',
        zero: 'No CAN reception overrun error',
        one: 'CAN reception overrun error',
        info: 'CANRER. CAN Rx overrun error'
      },
      {
        bit: '3',
        zero: 'No CAN reception timeout error',
        one: 'CAN reception timeout error',
        info: 'CANRTO. CAN Rx Timeout Error'
      },
      {
        bit: '2',
        zero: 'No SCI reception timeout error',
        one: 'SCI reception timeout error',
        info: 'SCIRTO. SCI Rx timeout error'
      },
      {
        bit: '1',
        zero: 'No SCI transmission timeout error',
        one: 'SCI transmission timeout error',
        info: 'SCITTO. SCI Tx timeout error'
      },
      {
        bit: '0',
        zero: 'No SCI reception error',
        one: 'SCI reception error',
        info: 'SCIRER. SCI Rx error'
      }
    ]
  },
  {
    Index: 'CSR',
    Title: 'Communication Status Register (status, RO)',
    BitInfo: [
      {
        bit: '15',
        zero: 'No data to send',
        one: 'Data to send',
        info: 'ELGEAR. Electronic gearing/camming master flag'
      },
      {
        bit: '14',
        zero: 'Initial Axis ID set by software',
        one: 'Initial Axis ID set by hardware',
        info: 'AXISDSTP. Axis ID setup flag'
      },
      {
        bit: '13-11',
        info: 'SCIBD. SCI baud rate',
        value: [
          { bitValue: '000', info: '9600' },
          { bitValue: '001', info: '19200' },
          { bitValue: '010', info: '38400' },
          { bitValue: '011', info: '56600' },
          { bitValue: '100', info: '115200' },
          { bitValue: '101', info: 'Reserved' },
          { bitValue: '110', info: 'Reserved' },
          { bitValue: '111', info: 'Reserved' }
        ]
      },
      { bit: '10', info: 'Reserved' },
      {
        bit: '9-8',
        info: 'SPIBD. SPI baud rate',
        value: [
          { bitValue: '00', info: '1 MHz' },
          { bitValue: '01', info: '2 MHz' },
          { bitValue: '10', info: '5 MHz' },
          { bitValue: '11', info: 'Reserved' }
        ]
      },
      { bit: '7-1', info: 'Reserved' },
      {
        bit: '0',
        zero: 'RS-232',
        one: 'RS485',
        info: 'SCITYPE. Serial communication driver type'
      }
    ]
  },
  {
    Index: 'DER',
    Title: 'Detailed Error Register (status, RO)',
    BitInfo: [
      {
        bit: '15',
        zero: 'No error',
        one: 'EEPROM Locked',
        info: 'EEPROM Locked'
      },
      {
        bit: '14',
        zero: 'No error',
        one: 'STO hardware error',
        info: 'STO/ENA hardware error'
      },
      {
        bit: '13',
        zero: 'No error',
        one: 'For CAN drives - Internal memory (OTP) checksum error.\nFor EtherCAT drives - EtherCAT adapter communication error',
        info: 'SLFCHKERR. Self check error'
      },
      {
        bit: '12',
        zero: 'No error',
        one: 'Tried to activate TML heartbeat protocol while CANopen mode was active.',
        info: 'TMLHBIGN. TML heartbeat ignored'
      },
      {
        bit: '11',
        zero: 'No error',
        one: 'An error occurred during the selected start mode.',
        info: 'SMS. Start mode status'
      },
      {
        bit: '10',
        zero: 'No error',
        one: 'Encoder broken wire error',
        info: 'EBW. Encoder broken wire status'
      },
      {
        bit: '9',
        zero: 'No error',
        one: 'UPD instruction received for S-curve profile while the motion complete condition was not met',
        info: 'UPDWOMC. UPD received for S-curve profile while not in motion complete'
      },
      {
        bit: '8',
        zero: 'No error',
        one: 'S-curve parameters caused an invalid profile. UPD instruction was ignored.',
        info: 'SCINV. Invalid S-curve profile'
      },
      {
        bit: '7',
        zero: 'Negative software limit switch in not active.',
        one: 'Negative software limit switch is active.',
        info: 'SWLSNST. Negative software limit switch status'
      },
      {
        bit: '6',
        zero: 'Positive software limit switch is not active.',
        one: 'Positive software limit switch is active.',
        info: 'SWLSPST. Positive software limit switch status'
      },
      {
        bit: '5',
        zero: 'No error',
        one: 'Cancelable call instruction received while another cancelable function was active',
        info: 'CCALLI. Cancelable call ignored'
      },
      {
        bit: '4',
        zero: 'No error',
        one: 'UPD instruction received while AXSION was executed. The UPD instruction was ignored and it must be sent again when AXISON is completed.',
        info: 'UPDAX. UPD received during AXISON execution'
      },
      {
        bit: '3',
        zero: 'No error.',
        one: 'A call to an inexistent function was received.',
        info: 'FCTNA. Function not available'
      },
      {
        bit: '2',
        zero: 'No error',
        one: 'A call to an inexistent homing routine was received.',
        info: 'HOMNA. Homing routine not available'
      },
      {
        bit: '1',
        zero: 'No error',
        one: 'A RET/RETI instruction was executed while no function/ISR was active.',
        info: 'STUF. TML stack underflow'
      },
      {
        bit: '0',
        zero: 'No error',
        one: 'The number of nested function calls exceeded the length of TML stack. Last function call was ignored.',
        info: 'STOF. TML stack overflow'
      }
    ]
  },

  {
    Index: 'DER2',
    Title: 'Detailed Error Register 2 (status, RO)',
    BitInfo: [
      {
        bit: '15',
        zero: 'No error.',
        one: 'Error',
        info: 'Output frequency. The imposed speed exceeds the DUAL USE European regulation limit.'
      },
      {
        bit: '14',
        zero: 'No error.',
        one: 'Error',
        info: 'Polarity Error (Ins and Outs different type)'
      },
      { bit: '13-11', info: 'Reserved' },

      {
        bit: '10',
        zero: 'No error.',
        one: 'Biss ack not present',
        info: 'Fdbk #1 sensor missing'
      },
      {
        bit: '9',
        zero: 'No error',
        one: 'Biss data error bit',
        info: 'Fdbk #1 data error '
      },
      {
        bit: '8',
        zero: 'No error',
        one: 'Biss data warning bit',
        info: 'Fdbk #1 data warning '
      },
      {
        bit: '7',
        zero: 'No error',
        one: 'BiSS CRC error',
        info: 'Fdbk #1 CRC error'
      },

      {
        bit: '6',
        zero: 'No position wraparound',
        one: 'Position wraparound has occurred',
        info: 'POSWRP. Position wraparound (obsolete)'
      },
      {
        bit: '5',
        zero: 'No error',
        one: 'Hall sensor missing error',
        info: 'HSME. Hall sensor missing error'
      },
      {
        bit: '4',
        zero: 'No error',
        one: 'AEI communication error',
        info: 'AEICE. AEI communication error'
      },
      {
        bit: '3',
        zero: 'No error.',
        one: 'Biss ack not present',
        info: 'Fdbk #2 sensor missing'
      },
      {
        bit: '2',
        zero: 'No error',
        one: 'Biss data error bit',
        info: 'Fdbk #2 data error bit'
      },
      {
        bit: '1',
        zero: 'No error',
        one: 'Biss data warning bit',
        info: 'Fdbk #2 data warning bit'
      },
      {
        bit: '0',
        zero: 'No error',
        one: 'BiSS CRC error',
        info: 'Fdbk #2 CRC error'
      }
    ]
  },
  {
    Index: 'ISR',
    Title: 'Interrupts Status Register (status, RO)',
    BitInfo: [
      { bit: '15-13', info: 'Reserved' },
      {
        bit: '12',
        zero: '= Not triggered',
        one: 'Triggered, Remark: After INT12 is enabled, it will activate each time SRH bits or change.',
        info: 'PTCDIF. Flag for interrupt 12 – “Position trigger 1..4 change detected”'
      },
      {
        bit: '11',
        zero: 'Not triggered',
        one: 'Triggered',
        info: 'EVNIF. Flag for interrupt 11 – “Event set has occurred”'
      },
      {
        bit: '10',
        zero: 'Not triggered',
        one: 'Triggered',
        info: 'TPIF. Flag for interrupt 10 – “Time period has elapsed”'
      },
      {
        bit: '9',
        zero: 'Not triggered',
        one: 'Triggered',
        info: 'MOTIF. Flag for interrupt 9 – “Motion is complete”'
      },
      {
        bit: '8',
        zero: 'Not triggered',
        one: 'Triggered',
        info: 'PCAPIF. Flag for interrupt 8 – “Capture input transition detected”'
      },
      {
        bit: '7',
        zero: 'Not triggered',
        one: 'Triggered',
        info: 'LSWNIF. Flag for interrupt 7 – “LSN programmed transition detected”'
      },
      {
        bit: '6',
        zero: 'Not triggered',
        one: 'Triggered',
        info: 'LSWPIF. Flag for interrupt 6 – “LSP programmed transition detected”'
      },
      {
        bit: '5',
        zero: 'Not triggered',
        one: 'Triggered',
        info: 'WRPIF. Flag for interrupt 5 – “Position wraparound”'
      },
      {
        bit: '4',
        zero: 'Not triggered',
        one: 'Triggered',
        info: 'CMERIF. Flag for interrupt 4 – “Communication error”'
      },
      {
        bit: '3',
        zero: 'Not triggered',
        one: 'Triggered',
        info: 'CTRERIF. Flag for interrupt 3 – “Control error”'
      },
      {
        bit: '2',
        zero: 'Not triggered',
        one: 'Triggered',
        info: 'SWPRIF. Flag for interrupt 2 – “Software protections”'
      },
      {
        bit: '1',
        zero: 'Not triggered',
        one: 'Triggered',
        info: 'PDPIF. Flag for interrupt 1 – “Short-circuit”'
      },
      {
        bit: '0',
        zero: 'Not triggered',
        one: 'Triggered',
        info: 'DSLBIF. Flag for interrupt 0 – “Enable input has changed”'
      }
    ]
  },
  {
    Index: 'MER',
    Title: 'Motion Error Register (status, RO)',
    BitInfo: [
      {
        bit: '15',
        zero: 'Enabled',
        one: 'Disabled',
        info: 'ENST. Enable status of drive/motor'
      },
      {
        bit: '14',
        zero: 'No command error',
        one: 'Command error. The cause of the error is described in DER register.',
        info: 'CMDER. Command error'
      },
      {
        bit: '13',
        zero: 'No under voltage error',
        one: 'Under voltage error',
        info: 'UVER. Under voltage error'
      },
      {
        bit: '12',
        zero: 'No over voltage error',
        one: 'Over voltage error',
        info: 'OVER. Over voltage error'
      },
      {
        bit: '11',
        zero: 'No drive over temperature error',
        one: 'Drive over temperature error',
        info: 'OTERD. Drive over temperature error'
      },
      {
        bit: '10',
        zero: 'No motor over temperature error',
        one: 'Motor temperature error',
        info: 'OTERM. Motor over temperature error'
      },
      {
        bit: '9',
        zero: 'No drive or motor I2T error',
        one: 'Drive or motor I2T error',
        info: 'I2TER. I2T protection error'
      },
      {
        bit: '8',
        zero: 'No over-current error',
        one: 'Over-current error',
        info: 'OCER. Over-current error'
      },
      {
        bit: '7',
        zero: 'LSN in not active',
        one: 'LSN is active',
        info: 'LSNST. Negative limit switch status'
      },
      {
        bit: '6',
        zero: 'LSP is not active',
        one: 'LSP is active',
        info: 'LSPST. Positive limit switch status'
      },
      {
        bit: '5',
        zero: 'No error',
        one: 'Error',
        info: 'WRPSER. Hall sensor missing /Resolver error /BiSS error /Position wrap around error'
      },
      {
        bit: '4',
        zero: 'No serial or internal communication error',
        one: 'Serial or internal communication error',
        info: 'SCIER. Communication error. For more details, please check CER (Communication Error Register)'
      },
      {
        bit: '3',
        zero: 'No control error',
        one: 'Control error',
        info: 'CTRER. Control error'
      },
      {
        bit: '2',
        zero: 'The drive/motor has a valid setup table',
        one: 'The drive/motor has an invalid setup table',
        info: 'STPTBL. Setup table status'
      },
      {
        bit: '1',
        zero: 'No short-circuit error',
        one: 'Short-circuit error',
        info: 'SCER. Short-circuit protection status'
      },
      {
        bit: '0',
        zero: 'No CAN bus error',
        one: 'CAN bus error',
        info: 'CANBER. CAN bus status'
      }
    ]
  },
  {
    Index: 'MSR',
    Title: 'Motion Status Register (status, RO)',
    BitInfo: [
      {
        bit: '15',
        zero: 'No update',
        one: 'Update',
        info: 'UPDATE. Update the motion mode'
      },
      {
        bit: '14',
        zero: 'Reset after update',
        one: 'Set of update',
        info: 'EVNRS. Event status'
      },
      {
        bit: '13',
        zero: 'Axis Off',
        one: 'Axis On',
        info: 'AXISST. Axis status'
      },
      {
        bit: '12',
        info: 'Marks that at least one correction has been performed for SOL + Load Sensor'
      },
      {
        bit: '11',
        zero: 'No event set, or programmed event not occurred yet',
        one: 'Last event reached',
        info: 'EVNS. Events'
      },
      {
        bit: '10',
        zero: "Don't update",
        one: 'Update',
        info: 'CNTSGS. Contour segment'
      },
      {
        bit: '9',
        zero: 'In motion',
        one: 'Motion complete',
        info: 'MOTS. Motion status'
      },
      {
        bit: '8',
        zero: 'Not triggered',
        one: 'Triggered',
        info: 'PCAPS. Position capture'
      },
      {
        bit: '7',
        zero: 'Not triggered',
        one: 'Triggered',
        info: 'LSWNS. Negative limit switch'
      },
      {
        bit: '6',
        zero: 'Not triggered',
        one: 'Triggered',
        info: 'LSWPS. Positive limit switch'
      },
      {
        bit: '5',
        zero: 'Not triggered',
        one: 'Triggered',
        info: 'WRPS. Position wrap around'
      },
      { bit: '4', info: 'Reserved' },
      {
        bit: '3',
        zero: 'Not triggered',
        one: 'Triggered',
        info: 'CTRERS. Control error status'
      },
      {
        bit: '2',
        zero: 'Not triggered',
        one: 'Triggered',
        info: 'SWPRS. Software protections status'
      },
      {
        bit: '1',
        zero: 'S-curve updated successfully',
        one: 'S-curve update denied (UPD instruction received when motion was not complete)',
        info: 'SCUPD. S-Curve update status'
      },
      {
        bit: '0',
        zero: 'Not performed',
        one: 'Performed',
        info: 'ENDINIT. Drive/motor initialization status'
      }
    ]
  },

  {
    Index: 'SRL',
    Title: 'Status Register Low part (status, RO)',
    BitInfo: [
      {
        bit: '15',
        zero: 'Axis Off',
        one: 'Axis On',
        info: 'AXISST. Axis status'
      },
      {
        bit: '14',
        zero: 'No event set, or programmed event not occurred yet',
        one: 'Last programmed event reached',
        info: 'EVNS. Events'
      },
      { bit: '13-11', info: 'Reserved' },
      {
        bit: '10',
        zero: 'In motion',
        one: 'Motion complete',
        info: 'MOTS. Motion status'
      },
      { bit: '9', info: 'Reserved' },
      {
        bit: '8',
        zero: 'No function in execution following a cancelable call',
        one: 'A function in execution following a cancelable call',
        info: 'CALLSST. Cancelable call status'
      },
      {
        bit: '7',
        zero: 'No warning',
        one: 'Warning – a cancelable call is issued while another cancelable function is in execution',
        info: 'CALLWRG. Cancelable call warning'
      },
      { bit: '6-0', info: 'Reserved' }
    ]
  },
  {
    Index: 'SRH',
    Title: 'Status Register High part (status, RO)',
    BitInfo: [
      {
        bit: '15',
        zero: 'No fault',
        one: 'Drive/motor in fault status',
        info: 'FAULT. Fault status'
      },
      {
        bit: '14',
        zero: 'Not reached',
        one: 'Reached',
        info: 'INCAM. Reference position in absolute electronic camming mode'
      },
      {
        bit: '13',
        zero: 'Inactive',
        one: 'Active',
        info: 'INFRZC. In Freeze Control'
      },
      {
        bit: '12',
        zero: 'Not reached',
        one: 'Reached',
        info: 'INGEAR. Gear ratio in electronic gearing mode'
      },
      {
        bit: '11',
        zero: 'Drive I2T warning limit not reached',
        one: 'Drive I2T warning limit reached',
        info: 'I2TWRGD. Drive I2T protection warning'
      },
      {
        bit: '10',
        zero: 'Motor I2T warning limit not reached',
        one: 'Motor I2T warning limit reached',
        info: 'I2TWRGM. Motor I2T protection warning'
      },
      {
        bit: '9',
        zero: 'Not reached',
        one: 'Reached',
        info: 'TRGR. Target command'
      },
      {
        bit: '8',
        zero: 'Not triggered',
        one: 'Triggered',
        info: 'PCAPS. Capture event/interrupt'
      },
      {
        bit: '7',
        zero: 'Not triggered',
        one: 'Triggered',
        info: 'LSWNS. Limit switch negative event/interrupt'
      },
      {
        bit: '6',
        zero: 'Not triggered',
        one: 'Triggered',
        info: 'LSWPS. Limit switch positive event/interrupt'
      },
      {
        bit: '5',
        zero: 'Disabled',
        one: 'Enabled',
        info: 'AUTORUN. AUTORUN mode status'
      },
      {
        bit: '4',
        zero: 'Not reached',
        one: 'Reached',
        info: 'PTRG4. Position trigger 4'
      },
      {
        bit: '3',
        zero: 'Not reached',
        one: 'Reached',
        info: 'PTRG3. Position trigger 3'
      },
      {
        bit: '2',
        zero: 'Not reached',
        one: 'Reached',
        info: 'PTRG2. Position Trigger 2'
      },
      {
        bit: '1',
        zero: 'Not triggered',
        one: 'Triggered',
        info: 'PTRG2. Position Trigger 1'
      },
      {
        bit: '0',
        zero: 'Not performed',
        one: 'Performed',
        info: 'ENDINIT. Drive/motor initialization status'
      }
    ]
  },

  {
    Index: 'SSR',
    Title: 'Slave Status Register (status, RO)',
    BitInfo: [
      {
        bit: '31',
        zero: 'Initialization successful',
        one: 'Initialization error',
        info: 'HIERR. H slave initialization status'
      },
      {
        bit: '30',
        zero: 'Firmware compatible',
        one: 'Firmware incompatible',
        info: 'HIFW. H slave firmware compatibility with motion controller'
      },
      {
        bit: '29',
        zero: 'Setup table valid',
        one: 'Invalid setup table',
        info: 'HISTP. H slave invalid setup table'
      },
      {
        bit: '28',
        zero: 'Detected successfully',
        one: 'Not detected',
        info: 'HDET. H slave detection'
      },
      {
        bit: '27',
        zero: 'Initialization successful',
        one: 'Initialization error',
        info: 'GIERR. G slave initialization status'
      },
      {
        bit: '26',
        zero: 'Firmware compatible',
        one: 'Firmware incompatible',
        info: 'GIFW. G slave firmware compatibility with motion controller'
      },
      {
        bit: '25',
        zero: 'Setup table valid',
        one: 'Invalid setup table',
        info: 'GISTP. G slave invalid setup table'
      },
      {
        bit: '24',
        zero: 'Detected successfully',
        one: 'Not detected',
        info: 'GDET. G slave detection'
      },
      {
        bit: '23',
        zero: 'Initialization successful',
        one: 'Initialization error',
        info: 'FIERR. F slave initialization status'
      },
      {
        bit: '22',
        zero: 'Firmware compatible',
        one: 'Firmware incompatible',
        info: 'FIFW. F slave firmware compatibility with motion controller'
      },
      {
        bit: '21',
        zero: 'Setup table valid',
        one: 'Invalid setup table',
        info: 'FISTP. F slave invalid setup table'
      },
      {
        bit: '20',
        zero: 'Detected successfully',
        one: 'Not detected',
        info: 'FDET. F slave detection'
      },
      {
        bit: '19',
        zero: 'Initialization successful',
        one: 'Initialization error',
        info: 'EIERR. E slave initialization status'
      },
      {
        bit: '18',
        zero: 'Firmware compatible',
        one: 'Firmware incompatible',
        info: 'EIFW. E slave firmware compatibility with motion controller'
      },
      {
        bit: '17',
        zero: 'Setup table valid',
        one: 'Invalid setup table',
        info: 'EISTP. E slave invalid setup table'
      },
      {
        bit: '16',
        zero: 'Detected successfully',
        one: 'Not detected',
        info: 'EDET. E slave detection'
      },
      {
        bit: '15',
        zero: 'Initialization successful',
        one: 'Initialization error',
        info: 'DIERR. D slave initialization status'
      },
      {
        bit: '14',
        zero: 'Firmware compatible',
        one: 'Firmware incompatible',
        info: 'DIFW. D slave firmware compatibility with motion controller'
      },
      {
        bit: '13',
        zero: 'Setup table valid',
        one: 'Invalid setup table',
        info: 'DISTP. D slave invalid setup table'
      },
      {
        bit: '12',
        zero: 'Detected successfully',
        one: 'Not detected',
        info: 'DDET. D slave detection'
      },
      {
        bit: '11',
        zero: 'Initialization successful',
        one: 'Initialization error',
        info: 'CIERR. C slave initialization status'
      },
      {
        bit: '10',
        zero: 'Firmware compatible',
        one: 'Firmware incompatible',
        info: 'CIFW. C slave firmware compatibility with motion controller'
      },
      {
        bit: '9',
        zero: 'Setup table valid',
        one: 'Invalid setup table',
        info: 'CISTP. C slave invalid setup table'
      },
      {
        bit: '8',
        zero: 'Detected successfully',
        one: 'Not detected',
        info: 'CDET. C slave detection'
      },
      {
        bit: '7',
        zero: 'Initialization successful',
        one: 'Initialization error',
        info: 'BIERR. B slave initialization status'
      },
      {
        bit: '6',
        zero: 'Firmware compatible',
        one: 'Firmware incompatible',
        info: 'BIFW. B slave firmware compatibility with motion controller'
      },
      {
        bit: '5',
        zero: 'Setup table valid',
        one: 'Invalid setup table',
        info: 'BISTP. B slave invalid setup table'
      },
      {
        bit: '4',
        zero: 'Detected successfully',
        one: 'Not detected',
        info: 'BDET. B slave detection'
      },
      {
        bit: '3',
        zero: 'Initialization successful',
        one: 'Initialization error',
        info: 'AIERR. A slave initialization status'
      },
      {
        bit: '2',
        zero: 'Firmware compatible',
        one: 'Firmware incompatible',
        info: 'AIFW. A slave firmware compatibility with motion controller'
      },
      {
        bit: '1',
        zero: 'Setup table valid',
        one: 'Invalid setup table',
        info: 'AISTP. A slave invalid setup table'
      },
      {
        bit: '0',
        zero: 'Detected successfully',
        one: 'Not detected',
        info: 'ADET. A slave detection'
      }
    ]
  }
]

export const ESM_info = `
IBL2401			035 001 E001 F020K
IBL2401-CAN		035 001 E002 F020K
IBL2401-CANOpenBL	035 001 E012 F253B
IBL2401-CANOpenLH	035 001 E014 F259A
IBL2401-CANOpenST	035 001 E013 F254B
IBL2403			037 001 E001 F020K
IBL2403-CAN		037 001 E002 F020K
IBL2403-CAN_TechnoCAN		037 001 E022 F203H
IBL2403-CANOpenBL	037 001 E012 F253B
IBL2403-CANOpenLH	037 001 E014 F259A
IBL2403-CANOpenST	037 001 E013 F254B
IBL3605			037 002 E001 F020K
IBL3605-CAN		037 002 E002 F020K
IBL3605-CANOpenBL	037 002 E012 F253C
IBL3605-CANOpenLH	037 002 E014 F259A
IBL3605-CANOpenST	037 002 E013 F254C
IDM240-5EI		051 001 E002 F000I
IDM240-5EI_CANopen 		051 002 E012 F500B
IDM240-5EI_TechnoCAN		051 001 E022 F200H
IDM240-5LI		051 001 E006 F000I
IDM240-5LI_TechnoCAN		051 001 E026 F200H
IDM240-5RI		051 001 E003 F001J
IDM3000-ER		049 004 E101 F037I
IDM3000-SC		049 004 E102 F037I
IDM640-8EI				048 001 E101 F000I
IDM640-8EI_CANopen		048 002 E111 F500B
IDM640-8EI_EnDat	048 001 E103 F001J
IDM640-8EI_TechnoCAN		048 001 E121 F200H
IDM640-8EI-CANOpenBL		048 001 E111 F250B
IDM640-8EI-CANOpenST		048 001 E112 F251B
IDM640-8LI		048 001 E106 F000I
IDM640-8LI_CANopen		048 002 E116 F501A
IDM640-8LI_TechnoCAN		048 001 E126 F200H
IDM640-8RI		048 001 E102 F001J
IDM640-8RI_CANopen		048 002 E112 F501A
IDM640-8RI_TechnoCAN		048 001 E122 F201H
IDM680-8BI		048 002 E104 F504B
IDM680-8EI		048 002 E103 F500B
IDM680-8EI-ET		048 002 E203 F505E
IDM680-8LI		048 002 E101 F501A
IDM680-8RI		048 002 E102 F501A
IDM680-8RI-ET		048 002 E202 F506A
IDS240-5EI		051 001 E102 F000I
IDS240-5EI_CANopen		051 002 E112 F500B
IDS240-5EI_TechnoCAN		051 001 E122 F200H
IDS640-8EI		048 001 E001 F000I
IDS640-8EI_CANopen		048 002 E011 F500B
IDS640-8EI_TechnoCAN		048 001 E021 F200H
IM231-DS			042 001 E101 F901I
IM231-IS			042 001 E102 F900I
IM231-MA		042 001 E103 F900I
IM231-MA_TechnoCAN		042 001 E123 F205H
IM232-DS		042 001 E201 F901I
IM232-IS			042 001 E202 F900I
IM232-MA				042 001 E203 F900I
IM232-MA_TechnoCAN		042 001 E223 F205H
IM232-MA-CANOpen		042 001 E213 F252B
IM233-DS		042 001 E301 F901I
IM233-IS		042 001 E302 F900I
IM233-MA				042 001 E303 F900I
IM233-MA_TechnoCAN		042 001 E323 F205H
IM233-MA-CANOpen		042 001 E313 F252B
IMCM		068 001 E055 F000I
IMCM-SK		068 001 E058 F000I
iPOS_IO_BX-CAN		038 300 E201 F529A	0x0009
iPOS1600_MX-CAN		025 126 E301 F514J	0x0D19
iPOS1604_MX-CAN		025 126 E302 F514J	0x0D19
iPOS2401_MX-CAN		024 300 E101 F508K	0x00C0
iPOS2401_MX-CAN_3A		024 303 E101 F508K	0x00C0
iPOS2401_MX-CAT		024 200 E121 F510I	0x00C0
iPOS2401_MX-CAT_3A		024 203 E121 F510I	0x00C0
iPOS3602_MX-CAN		028 001 E101 F509F
iPOS3602_VX-CAN		028 001 E001 F509F
iPOS3602_BX-CAN		028 001 E201 F509F
iPOS3602_VX-CAT		028 001 E021 F511B
iPOS3604_MX-CAN		028 002 E101 F508F
iPOS3604_VX-CAN		028 002 E001 F508F
iPOS3604_BX-CAN		028 002 E201 F508F
iPOS3604_VX-CAT		028 002 E021 F510B
iPOS4803C_CAT_v1x		020 002 E201 FA00E	0x4201
iPOS4803C_CAT_v1x D860		020 862 E201 FA00E	0x4201
iPOS4803P_CAT_v1x		020 002 E122 FA00E	0x4202
iPOS4803S_CAT_v1x		020 802 E222 FA00E	0x4202
iPOS4803PE_CAT_v1x		020 002 E322 FA00E	0x4203
Micro4803_MZ_CAT		020 001 E122 FA00G	0x4205
Micro4803_PZ/CZ/SY-CAT		020 801 E222 FA00G	0x4205
Micro4803_MZ_CAN			020 001 E102 FA01C	0x4206
Micro4803_HZ_CAN		020 001 E202 FA01C	0x4208
Micro4803_PZ/CZ/SY-CAN		020 801 E202 FA01C	0x4206
iPOS4806_BZ-CAT		057 002 E221 FA00E  0x4501
iPOS4806_BZ-CAT_STO	057 012 E221 FA00E  0x4502
iPOS4806_BZ-CAN		057 002 E201 FA01A  0x4503
iPOS4806_BZ-CAN_STO	057 012 E201 FA01A  0x4504
iPOS4806_CZ-CAT		057 002 E021 FA00E  0x4501
iPOS4806_CZ-CAT_STO	057 012 E021 FA00E  0x4502
iPOS4806_CZ-CAN		057 002 E001 FA01A  0x4503
iPOS4806_CZ-CAN_STO	057 012 E001 FA01A  0x4504
iPOS4808_MX-CAN		027 014 E101 F508F
iPOS4808_MX-CAT		027 014 E121 F510D
iPOS4808_VX-CAN		027 014 E001 F508D
iPOS4808_VX-CAT		027 014 E021 F510D
iPOS4808_MY-CAN			027 414 E101 F514E	0x0E19
iPOS4808_MY-CAN-STO		027 314 E111 F514D	0x0D19
iPOS4808_MY-CAT-STO		027 314 E121 F515E	0x0D19
iPOS4808_BX-CAN_v01		027 014 E201 F508F
iPOS4808_BX-CAN			027 214 E201 F514D	0x0F19
iPOS4808_BX-CAN_STO		027 314 E201 F514I	0x0D19
iPOS4808_BX-CAT_v01		027 014 E221 F515A
iPOS4808_BX-CAT			027 214 E221 F515E	0x0D19
iPOS4808_BX-CAT_STO		027 314 E221 F515E	0x0D19
iPOS4808_SY2-CAT		027 051 E422 F515J	0x0E19
iPOS4808_SY3-CAT		027 051 E423 F515J	0x0E19
iPOS4808_SY4-CAT		027 051 E424 F515J	0x0E19
iPOS4810_MZ-CAT_v01C	022 015 E122 FA00A	0x4001
iPOS4810_XZ-CAT_v01C	022 815 E122 FA00A	0x4001
iPOS4810_MZ-CAN_v01C	022 015 E102 FA01A	0x4002
iPOS4810_XZ-CAN_v01C	022 815 E102 FA01A	0x4002
iPOS4810_MZ-CAT			022 015 E122 FA00G	0x4003
iPOS4810_XZ-CAT			022 825 E122 FA00G	0x4003
iPOS4810_MZ-CAN			022 015 E102 FA01C	0x4004
iPOS4810_XZ-CAN			022 825 E102 FA01C	0x4004
iPOS4815_MZ-CAT			022 016 E122 FA00G	0x4003
iPOS4815_XZ-CAT			022 826 E122 FA00G	0x4003
iPOS4815_MZ-CAN			022 016 E102 FA01C	0x4004
iPOS4815_XZ-CAN			022 826 E102 FA01C	0x4004
iPOS4850_BX-CAN			029 200 E201 F514J	0x0E19
iPOS4850_BX-CAN_STO_(E2xx)		029 300 E201 F514J	0x0D19
iPOS4850_BX-CAT	029 300 E321 FA00G	0x4401
iPOS4850_BX-CAN_(E3xx)	029 300 E301 FA01C	0x4402
iPOS8010_BA-CAN		029 025 E202 F514C
iPOS8010_BA-CAT		029 025 E222 F514C
iPOS8010_BR-CAN		029 025 E204 F514B
iPOS8010_BR-CAT		029 025 E224 F515C
iPOS8010_BX-CAN			029 025 E201 F514I	0x0D19
iPOS8010_BX-CAT			029 025 E221 F515I	0x0D19
iPOS8010_BX-CAN_old		029 025 E201 F514C
iPOS8010_BX-CAT_old		029 025 E221 F515C
iPOS8020_BA-CAN		029 026 E202 F514C
iPOS8020_BA-CAT		029 026 E222 F514C
iPOS8020_BR-CAN		029 026 E204 F514B
iPOS8020_BR-CAT		029 026 E224 F515C
iPOS8020_BX-CAN			029 026 E201 F514I	0x0D19
iPOS8020_BX-CAT			029 026 E221 F515I	0x0D19
iPOS8020_BX-CAN_old		029 026 E201 F514B
iPOS8020_BX-CAT_old		029 026 E221 F515C
iPOS8015_BZ-CAT			023 026 E221 FA00G	0x4101
iMOTIONCUBE_CAN		025 126 E101 F514I	0x0519
iMOTIONCUBE_CAN_STO		025 126 E111 F514J	0x0619
iMOTIONCUBE_CAT		025 126 E121 F515H	0x0519
iMOTIONCUBE_CAT_STO		025 326 E121 F515J	0x0619
iMOTIONCUBE_BX-CAN		025 126 E201 F514D	0x0419
iMOT171B_XM-CAN		042 111 E120 F508I	0x0C10
iMOT172B_XM-CAN		042 121 E120 F508I	0x0C10
iMOT173B_XM-CAN		042 131 E120 F508I	0x0C10
iMOT172S_XM-CAN		036 121 E120 F508I	0x0C10
iMOT232S_XM-CAN		036 222 E120 F508I	0x0C10
iMOT233S_XM-CAN		036 232 E120 F508I	0x0C10
iMOT232S_TM-CAN		036 222 E320 F508L	0x0C10
iMOT233S_TM-CAN		036 232 E320 F508L	0x0C10
iMOT171B_TM-CAN		042 111 E320 F508J	0x0C10
iMOT172B_TM-CAN		042 121 E320 F508J	0x0C10
iMOT173B_TM-CAN		042 131 E320 F508J	0x0C10
iMOT172S_TM-CAN		036 121 E320 F508J	0x0C10
iMOT171B_TM-CAT		042 111 E322 F510H	0x0C10
iMOT172B_TM-CAT		042 121 E322 F510H	0x0C10
iMOT173B_TM-CAT		042 131 E322 F510H	0x0C10
iMOT172S_TM-CAT		036 121 E322 F510H	0x0C10
iMOT232S_TM-CAT		036 222 E322 F510J	0x0C10
iMOT233S_TM-CAT		036 232 E322 F510J	0x0C10
iGVD71_BX-CAN_STO	025 027 E201 F514J	0x1F19
iGVD71_BX-CAN	    025 027 E201 F514L	0x2F19
iGVD71_BX-CAN_(E3xx)	025 027 E301 FA01C	0x4704
iGVD71_BX-CAT		025 027 E221 FA00G	0x4702
3242_BX4_CAN		026 014 E420 F516F
3242_BX4_CAT		026 014 E422 F517B
3268_BX4_CAN		026 024 E420 F516F
3268_BX4_CAT		026 024 E422 F517B
IPS110			045 001 E001 F005K
IPS110-CAN		045 001 E002 F005K
IPS110-CAN_TechnoCAN		045 001 E022 F204H
IPS110-CANOpen		045 001 E012 F255A
IPS210			045 001 E001 F005K
IPS210-CAN		045 001 E002 F005K
IPS210-CANOpen		045 001 E012 F255A
IS231-DS			036 001 E101 F902A
IS232-DS			036 001 E201 F902A
IS232-MA			036 001 E203 F903H
IS233-DS			036 001 E301 F902A
IS233-MA			036 001 E303 F903H
ISCM4805				047 001 E001 F000I
ISCM4805_TechnoCAN		047 001 E221 F200H
ISCM4805-CANOpenBL		047 001 E211 F250B
ISCM4805-CANOpenST		047 001 E212 F251B
ISCM4805-DIN				052 001 E201 F000I
ISCM4805-DIN_TechnoCAN		052 001 E221 F200H
ISCM4805-DIN-CANOpenBL		052 001 E211 F250B
ISCM4805-DIN-CANOpenST		052 001 E212 F251B
ISCM8005				047 001 E101 F000I
ISCM8005_TechnoCAN		047 001 E321 F200H
ISCM8005-CANOpenBL		047 001 E311 F250B
ISCM8005-CANOpenST		047 001 E312 F251B
ISCM8005-DIN				052 001 E301 F000I
ISCM8005-DIN_TechnoCAN		052 001 E321 F200H
ISCM8005-DIN-CANOpenBL		052 001 E311 F250B
ISCM8005-DIN-CANOpenST		052 001 E312 F251B
ISD720			029 001 E001 F000I
ISD720-CAN		029 001 E002 F000I
ISD720-CANOpenBL	029 001 E012 F250C
ISD860			029 001 E101 F000I
ISD860-CAN		029 001 E102 F000I
ISD860-CANOpenBL	029 001 E112 F250C
ISM4803			030 001 E001 F024I
ISM4803-CAN		030 001 E002 F024I
PIM2401-CAN		035 001 E102 F020K
PIM2401-CANOpenBL	035 001 E112 F253B
PIM2401-CANOpenLH	035 001 E114 F259A
PIM2401-CANOpenST	035 001 E113 F254B
PIM2403-CAN		037 001 E302 F020K
PIM2403-CANOpenBL	037 001 E312 F253B
PIM2403-CANOpenLH	037 001 E314 F259A
PIM2403-CANOpenST	037 001 E313 F254B
PIM3605-CAN		037 003 E302 F020K
PIM3605-CANOpenBL	037 003 E312 F253C
PIM3605-CANOpenLH	037 003 E314 F259A
PIM3605-CANOpenST	037 003 E313 F254C
TMC-3D	048 002 E301 F700C
Udrive200		030 400 E101 F525D	0x1919
Udrive400		030 400 E201 F525D	0x1919
Udrive500		030 400 E301 F525D	0x1919

`
export const DEMO_CANopen_raw = `
1	    	14:22:01	441.473	       6905.473		         0	       000	      	  2	81	00	  	  	  	  	  	  	_
2	    	14:22:01	672.960	        231.487		      1793	       701	      	  1	00	  	  	  	  	  	  	  	_
3	    	14:22:01	673.230	          0.270		      1795	       703	      	  1	00	  	  	  	  	  	  	  	_
4	    	14:22:01	673.460	          0.230		      1794	       702	      	  1	00	  	  	  	  	  	  	  	_
5	    	14:22:04	840.272	       3166.812		         0	       000	      	  2	01	00	  	  	  	  	  	  	__
6	    	14:22:04	840.825	          0.553		       385	       181	      	  2	50	02	  	  	  	  	  	  	P_
7	    	14:22:04	840.959	          0.134		       386	       182	      	  2	50	02	  	  	  	  	  	  	P_
8	    	14:22:04	841.086	          0.127		       387	       183	      	  2	50	02	  	  	  	  	  	  	P_
9	    	14:22:04	841.243	          0.157		       641	       281	      	  3	50	02	00	  	  	  	  	  	P__
10	    	14:22:04	841.397	          0.154		       642	       282	      	  3	50	02	00	  	  	  	  	  	P__
11	    	14:22:04	841.551	          0.154		       643	       283	      	  3	50	02	00	  	  	  	  	  	P__
12	    	14:22:07	938.135	       3096.584		      1539	       603	      	  8	23	03	18	01	83	04	00	80	#___ƒ__€
13	    	14:22:07	938.645	          0.510		      1411	       583	      	  8	60	03	18	01	00	00	00	00	_______
14	    	14:22:08	862.035	        923.390		      1539	       603	      	  8	2F	03	1A	00	00	00	00	00	/_______
15	    	14:22:08	862.489	          0.454		      1411	       583	      	  8	60	03	1A	00	00	00	00	00	_______
16	    	14:22:09	538.361	        675.872		      1539	       603	      	  8	23	03	1A	01	20	00	64	60	#_____d
17	    	14:22:09	538.765	          0.404		      1411	       583	      	  8	60	03	1A	01	00	00	00	00	_______
18	    	14:22:10	190.769	        652.004		      1539	       603	      	  8	23	03	1A	02	10	00	41	60	#_____A
19	    	14:22:10	191.135	          0.366		      1411	       583	      	  8	60	03	1A	02	00	00	00	00	_______
20	    	14:22:11	124.399	        933.264		      1539	       603	      	  8	23	03	1A	03	08	00	60	60	#_____
21	    	14:22:11	124.753	          0.354		      1411	       583	      	  8	60	03	1A	03	00	00	00	00	_______
22	    	14:22:11	970.129	        845.376		      1539	       603	      	  8	2F	03	1A	00	03	00	00	00	/_______
23	    	14:22:11	970.649	          0.520		      1411	       583	      	  8	60	03	1A	00	00	00	00	00	_______
24	    	14:22:12	670.155	        699.506		      1539	       603	      	  8	23	03	18	01	83	04	00	00	#___ƒ___
25	    	14:22:12	670.683	          0.528		      1411	       583	      	  8	60	03	18	01	00	00	00	00	_______
26	    	14:22:12	670.909	          0.226		      1155	       483	      	  7	00	00	00	00	50	02	00	  	____P__
27	    	14:22:13	515.093	        844.184		      1539	       603	      	  8	2B	03	18	05	60	EA	00	00	+___ê__
28	    	14:22:13	515.383	          0.290		      1411	       583	      	  8	60	03	18	05	00	00	00	00	_______
29	    	14:22:13	515.615	          0.232		      1155	       483	      	  7	00	00	00	00	50	02	00	  	____P__
30	    	14:22:13	545.124	         29.509		      1155	       483	      	  7	00	00	00	00	50	02	00	  	____P__
31	    	14:22:14	189.772	        644.648		      1539	       603	      	  5	2F	60	60	00	01	  	  	  	/__
32	    	14:22:14	190.302	          0.530		      1411	       583	      	  8	60	60	60	00	00	00	00	00	_____
33	    	14:22:14	190.528	          0.226		      1155	       483	      	  7	00	00	00	00	50	02	01	  	____P__
34	    	14:22:14	941.456	        750.928		      1538	       602	      	  8	23	03	18	01	82	04	00	80	#___‚__€
35	    	14:22:14	942.050	          0.594		      1410	       582	      	  8	60	03	18	01	00	00	00	00	_______
36	    	14:22:15	743.212	        801.162		      1538	       602	      	  8	2F	03	1A	00	00	00	00	00	/_______
37	    	14:22:15	743.665	          0.453		      1410	       582	      	  8	60	03	1A	00	00	00	00	00	_______
38	    	14:22:16	383.517	        639.852		      1538	       602	      	  8	23	03	1A	01	20	00	64	60	#_____d
39	    	14:22:16	384.025	          0.508		      1410	       582	      	  8	60	03	1A	01	00	00	00	00	_______
40	    	14:22:17	110.053	        726.028		      1538	       602	      	  8	23	03	1A	02	10	00	41	60	#_____A
41	    	14:22:17	110.353	          0.300		      1410	       582	      	  8	60	03	1A	02	00	00	00	00	_______
42	    	14:22:17	880.321	        769.968		      1538	       602	      	  8	23	03	1A	03	08	00	60	60	#_____
43	    	14:22:17	880.849	          0.528		      1410	       582	      	  8	60	03	1A	03	00	00	00	00	_______
44	    	14:22:18	846.159	        965.310		      1538	       602	      	  8	2F	03	1A	00	03	00	00	00	/_______
45	    	14:22:18	846.947	          0.788		      1410	       582	      	  8	60	03	1A	00	00	00	00	00	_______
46	    	14:22:19	608.691	        761.744		      1538	       602	      	  8	23	03	18	01	82	04	00	00	#___‚___
47	    	14:22:19	609.222	          0.531		      1410	       582	      	  8	60	03	18	01	00	00	00	00	_______
48	    	14:22:19	609.508	          0.286		      1154	       482	      	  7	00	00	00	00	50	02	00	  	____P__
49	    	14:22:20	266.934	        657.426		      1538	       602	      	  8	2B	03	18	05	60	EA	00	00	+___ê__
50	    	14:22:20	267.504	          0.570		      1410	       582	      	  8	60	03	18	05	00	00	00	00	_______
51	    	14:22:20	267.818	          0.314		      1154	       482	      	  7	00	00	00	00	50	02	00	  	____P__
52	    	14:22:20	297.896	         30.078		      1154	       482	      	  7	00	00	00	00	50	02	00	  	____P__
53	    	14:22:21	378.156	       1080.260		      1538	       602	      	  5	2F	60	60	00	01	  	  	  	/__
54	    	14:22:21	378.710	          0.554		      1410	       582	      	  8	60	60	60	00	00	00	00	00	_____
55	    	14:22:21	378.998	          0.288		      1154	       482	      	  7	00	00	00	00	50	02	01	  	____P__
56	    	14:22:24	955.812	       3576.814		      1537	       601	      	  8	23	03	18	01	81	04	00	80	#_____€
57	    	14:22:24	956.196	          0.384		      1409	       581	      	  8	60	03	18	01	00	00	00	00	_______
58	    	14:22:25	718.594	        762.398		      1537	       601	      	  8	2F	03	1A	00	00	00	00	00	/_______
59	    	14:22:25	718.945	          0.351		      1409	       581	      	  8	60	03	1A	00	00	00	00	00	_______
60	    	14:22:26	320.675	        601.730		      1537	       601	      	  8	23	03	1A	01	20	00	64	60	#_____d
61	    	14:22:26	321.099	          0.424		      1409	       581	      	  8	60	03	1A	01	00	00	00	00	_______
62	    	14:22:27	194.605	        873.506		      1537	       601	      	  8	23	03	1A	02	10	00	41	60	#_____A
63	    	14:22:27	194.915	          0.310		      1409	       581	      	  8	60	03	1A	02	00	00	00	00	_______
64	    	14:22:27	964.073	        769.158		      1537	       601	      	  8	23	03	1A	03	08	00	60	60	#_____
65	    	14:22:27	964.485	          0.412		      1409	       581	      	  8	60	03	1A	03	00	00	00	00	_______
66	    	14:22:29	041.957	       1077.472		      1537	       601	      	  8	2F	03	1A	00	03	00	00	00	/_______
67	    	14:22:29	042.461	          0.504		      1409	       581	      	  8	60	03	1A	00	00	00	00	00	_______
68	    	14:22:29	972.775	        930.314		      1537	       601	      	  8	23	03	18	01	81	04	00	00	#______
69	    	14:22:29	973.278	          0.503		      1409	       581	      	  8	60	03	18	01	00	00	00	00	_______
70	    	14:22:29	973.504	          0.226		      1153	       481	      	  7	00	00	00	00	50	02	00	  	____P__
71	    	14:22:30	762.666	        789.162		      1537	       601	      	  8	2B	03	18	05	60	EA	00	00	+___ê__
72	    	14:22:30	763.008	          0.342		      1409	       581	      	  8	60	03	18	05	00	00	00	00	_______
73	    	14:22:30	763.234	          0.226		      1153	       481	      	  7	00	00	00	00	50	02	00	  	____P__
74	    	14:22:30	792.746	         29.512		      1153	       481	      	  7	00	00	00	00	50	02	00	  	____P__
75	    	14:22:31	570.080	        777.334		      1537	       601	      	  5	2F	60	60	00	01	  	  	  	/__
76	    	14:22:31	570.470	          0.390		      1409	       581	      	  8	60	60	60	00	00	00	00	00	_____
77	    	14:22:31	570.698	          0.228		      1153	       481	      	  7	00	00	00	00	50	02	01	  	____P__
78	    	14:22:32	732.674	       1161.976		       513	       201	      	  5	06	00		  	  	  	_____
79	    	14:22:32	733.211	          0.537		       385	       181	      	  2	50	03	  	  	  	  	  	  	P_
80	    	14:22:32	733.437	          0.226		      1153	       481	      	  7	00	00	00	00	50	03	01	  	____P__
81	    	14:22:32	733.589	          0.152		       641	       281	      	  3	50	03	00	  	  	  	  	  	P__
82	    	14:22:32	762.605	         29.016		       385	       181	      	  2	31	02	  	  	  	  	  	  	1_
83	    	14:22:32	762.829	          0.224		      1153	       481	      	  7	00	00	00	00	31	02	01	  	____1__
84	    	14:22:32	762.979	          0.150		       641	       281	      	  3	31	02	00	  	  	  	  	  	1__
85	    	14:22:33	669.425	        906.446		       513	       201	      	  5	07	00		  	  	  	_____
86	    	14:22:33	669.895	          0.470		       385	       181	      	  2	31	03	  	  	  	  	  	  	1_
87	    	14:22:33	670.120	          0.225		      1153	       481	      	  7	00	00	00	00	31	03	01	  	____1__
88	    	14:22:33	670.276	          0.156		       641	       281	      	  3	31	03	00	  	  	  	  	  	1__
89	    	14:22:33	699.716	         29.440		       385	       181	      	  2	33	02	  	  	  	  	  	  	3_
90	    	14:22:33	699.940	          0.224		      1153	       481	      	  7	00	00	00	00	33	02	01	  	____3__
91	    	14:22:33	700.092	          0.152		       641	       281	      	  3	33	02	00	  	  	  	  	  	3__
92	    	14:22:34	594.052	        893.960		       513	       201	      	  5	0F	00		  	  	  	_____
93	    	14:22:34	594.676	          0.624		       385	       181	      	  2	33	03	  	  	  	  	  	  	3_
94	    	14:22:34	594.900	          0.224		      1153	       481	      	  7	00	00	00	00	33	03	01	  	____3__
95	    	14:22:34	595.052	          0.152		       641	       281	      	  3	33	03	01	  	  	  	  	  	3__
96	    	14:22:34	693.807	         98.755		      1153	       481	      	  7	03	00	00	00	33	03	01	  	____3__
97	    	14:22:34	723.723	         29.916		      1153	       481	      	  7	A8	00	00	00	33	03	01	  	¨___3__
98	    	14:22:34	753.815	         30.092		      1153	       481	      	  7	A8	00	00	00	33	03	01	  	¨___3__
99	    	14:22:35	556.487	        802.672		       514	       202	      	  5	06	00		  	  	  	_____
100	    	14:22:35	557.203	          0.716		       386	       182	      	  2	50	03	  	  	  	  	  	  	P_
101	    	14:22:35	557.432	          0.229		      1154	       482	      	  7	00	00	00	00	50	03	01	  	____P__
102	    	14:22:35	557.591	          0.159		       642	       282	      	  3	50	03	00	  	  	  	  	  	P__
103	    	14:22:35	586.428	         28.837		       386	       182	      	  2	31	02	  	  	  	  	  	  	1_
104	    	14:22:35	586.654	          0.226		      1154	       482	      	  7	00	00	00	00	31	02	01	  	____1__
105	    	14:22:35	586.808	          0.154		       642	       282	      	  3	31	02	00	  	  	  	  	  	1__
106	    	14:22:35	691.924	        105.116		      1153	       481	      	  7	A7	00	00	00	33	03	01	  	§___3__
107	    	14:22:35	721.868	         29.944		      1153	       481	      	  7	FF	FF	FF	FF	33	03	01	  	ÿÿÿÿ3__
108	    	14:22:36	284.236	        562.368		       514	       202	      	  5	07	00		  	  	  	_____
109	    	14:22:36	284.799	          0.563		       386	       182	      	  2	31	03	  	  	  	  	  	  	1_
110	    	14:22:36	285.025	          0.226		      1154	       482	      	  7	00	00	00	00	31	03	01	  	____1__
111	    	14:22:36	285.175	          0.150		       642	       282	      	  3	31	03	00	  	  	  	  	  	1__
112	    	14:22:36	314.703	         29.528		       386	       182	      	  2	33	02	  	  	  	  	  	  	3_
113	    	14:22:36	314.929	          0.226		      1154	       482	      	  7	00	00	00	00	33	02	01	  	____3__
114	    	14:22:36	315.081	          0.152		       642	       282	      	  3	33	02	00	  	  	  	  	  	3__
115	    	14:22:36	692.914	        377.833		       385	       181	      	  2	33	92	  	  	  	  	  	  	3’
116	    	14:22:36	693.138	          0.224		      1153	       481	      	  7	FF	FF	FF	FF	33	92	01	  	ÿÿÿÿ3’_
117	    	14:22:36	693.286	          0.148		       641	       281	      	  3	33	92	01	  	  	  	  	  	3’_
118	    	14:22:36	722.795	         29.509		       385	       181	      	  2	37	86	  	  	  	  	  	  	7†
119	    	14:22:36	723.019	          0.224		      1153	       481	      	  7	FF	FF	FF	FF	37	86	01	  	ÿÿÿÿ7†_
120	    	14:22:36	723.167	          0.148		       641	       281	      	  3	37	86	01	  	  	  	  	  	7†_
121	    	14:22:37	068.515	        345.348		       514	       202	      	  5	0F	00		  	  	  	_____
122	    	14:22:37	069.181	          0.666		       386	       182	      	  2	33	03	  	  	  	  	  	  	3_
123	    	14:22:37	069.409	          0.228		      1154	       482	      	  7	00	00	00	00	33	03	01	  	____3__
124	    	14:22:37	069.559	          0.150		       642	       282	      	  3	33	03	01	  	  	  	  	  	3__
125	    	14:22:37	202.824	        133.265		      1154	       482	      	  7	FF	FF	FF	FF	33	03	01	  	ÿÿÿÿ3__
126	    	14:22:37	232.622	         29.798		      1154	       482	      	  7	56	FF	FF	FF	33	03	01	  	Vÿÿÿ3__
127	    	14:22:37	262.682	         30.060		      1154	       482	      	  7	55	FF	FF	FF	33	03	01	  	Uÿÿÿ3__
128	    	14:22:37	954.747	        692.065		       515	       203	      	  5	06	00		  	  	  	_____
129	    	14:22:37	955.156	          0.409		       387	       183	      	  2	50	03	  	  	  	  	  	  	P_
130	    	14:22:37	955.382	          0.226		      1155	       483	      	  7	00	00	00	00	50	03	01	  	____P__
131	    	14:22:37	955.537	          0.155		       643	       283	      	  3	50	03	00	  	  	  	  	  	P__
132	    	14:22:37	984.365	         28.828		       387	       183	      	  2	31	02	  	  	  	  	  	  	1_
133	    	14:22:37	984.589	          0.224		      1155	       483	      	  7	00	00	00	00	31	02	01	  	____1__
134	    	14:22:37	984.745	          0.156		       643	       283	      	  3	31	02	00	  	  	  	  	  	1__
135	    	14:22:38	202.880	        218.135		      1154	       482	      	  7	54	FF	FF	FF	33	03	01	  	Tÿÿÿ3__
136	    	14:22:38	232.680	         29.800		      1154	       482	      	  7	B3	FE	FF	FF	33	03	01	  	³þÿÿ3__
137	    	14:22:38	870.306	        637.626		       515	       203	      	  5	07	00	  	  	  	_____
138	    	14:22:38	870.840	          0.534		       387	       183	      	  2	31	03	  	  	  	  	  	  	1_
139	    	14:22:38	871.066	          0.226		      1155	       483	      	  7	00	00	00	00	31	03	01	  	____1__
140	    	14:22:38	871.217	          0.151		       643	       283	      	  3	31	03	00	  	  	  	  	  	1__
141	    	14:22:38	900.467	         29.250		       387	       183	      	  2	33	02	  	  	  	  	  	  	3_
142	    	14:22:38	900.691	          0.224		      1155	       483	      	  7	00	00	00	00	33	02	01	  	____3__
143	    	14:22:38	900.845	          0.154		       643	       283	      	  3	33	02	00	  	  	  	  	  	3__
144	    	14:22:39	202.820	        301.975		       386	       182	      	  2	33	92	  	  	  	  	  	  	3’
145	    	14:22:39	203.046	          0.226		      1154	       482	      	  7	B3	FE	FF	FF	33	92	01	  	³þÿÿ3’_
146	    	14:22:39	203.196	          0.150		       642	       282	      	  3	33	92	01	  	  	  	  	  	3’_
147	    	14:22:39	232.816	         29.620		       386	       182	      	  2	37	86	  	  	  	  	  	  	7†
148	    	14:22:39	233.038	          0.222		      1154	       482	      	  7	B4	FE	FF	FF	37	86	01	  	´þÿÿ7†_
149	    	14:22:39	233.186	          0.148		       642	       282	      	  3	37	86	01	  	  	  	  	  	7†_
150	    	14:22:39	262.779	         29.593		      1154	       482	      	  7	B4	FE	FF	FF	37	86	01	  	´þÿÿ7†_
151	    	14:22:39	292.876	         30.097		      1154	       482	      	  7	B3	FE	FF	FF	37	86	01	  	³þÿÿ7†_
152	    	14:22:39	322.960	         30.084		      1154	       482	      	  7	B4	FE	FF	FF	37	86	01	  	´þÿÿ7†_
153	    	14:22:39	352.968	         30.008		      1154	       482	      	  7	B3	FE	FF	FF	37	86	01	  	³þÿÿ7†_
154	    	14:22:39	382.902	         29.934		      1154	       482	      	  7	B3	FE	FF	FF	37	86	01	  	³þÿÿ7†_
155	    	14:22:40	093.684	        710.782		       515	       203	      	  5	0F	00		  	  	  	_____
156	    	14:22:40	094.260	          0.576		       387	       183	      	  2	33	03	  	  	  	  	  	  	3_
157	    	14:22:40	094.487	          0.227		      1155	       483	      	  7	00	00	00	00	33	03	01	  	____3__
158	    	14:22:40	094.636	          0.149		       643	       283	      	  3	33	03	01	  	  	  	  	  	3__
159	    	14:22:40	192.656	         98.020		      1155	       483	      	  7	FD	FF	FF	FF	33	03	01	  	ýÿÿÿ3__
160	    	14:22:40	222.516	         29.860		      1155	       483	      	  7	4D	FF	FF	FF	33	03	01	  	Mÿÿÿ3__
161	    	14:22:40	252.591	         30.075		      1155	       483	      	  7	4E	FF	FF	FF	33	03	01	  	Nÿÿÿ3__
162	    	14:22:41	191.704	        939.113		      1155	       483	      	  7	4C	FF	FF	FF	33	03	01	  	Lÿÿÿ3__
163	    	14:22:41	221.601	         29.897		      1155	       483	      	  7	A5	FE	FF	FF	33	03	01	  	¥þÿÿ3__
164	    	14:22:41	251.630	         30.029		      1155	       483	      	  7	A6	FE	FF	FF	33	03	01	  	¦þÿÿ3__
165	    	14:22:42	191.737	        940.107		       387	       183	      	  2	33	92	  	  	  	  	  	  	3’
166	    	14:22:42	191.955	          0.218		      1155	       483	      	  7	A6	FE	FF	FF	33	92	01	  	¦þÿÿ3’_
167	    	14:22:42	192.103	          0.148		       643	       283	      	  3	33	92	01	  	  	  	  	  	3’_
168	    	14:22:42	221.720	         29.617		       387	       183	      	  2	37	86	  	  	  	  	  	  	7†
169	    	14:22:42	221.938	          0.218		      1155	       483	      	  7	A5	FE	FF	FF	37	86	01	  	¥þÿÿ7†_
170	    	14:22:42	222.090	          0.152		       643	       283	      	  3	37	86	01	  	  	  	  	  	7†_
171	    	14:22:42	251.723	         29.633		      1155	       483	      	  7	A6	FE	FF	FF	37	86	01	  	¦þÿÿ7†_
172	    	14:22:42	281.733	         30.010		      1155	       483	      	  7	A6	FE	FF	FF	37	86	01	  	¦þÿÿ7†_
173	    	14:22:42	880.037	        598.304		      1153	       481	      	  7	00	00	00	00	37	86	01	  	____7†_
174	    	14:22:42	909.918	         29.881		      1153	       481	      	  7	00	00	00	00	37	86	01	  	____7†_
175	    	14:22:42	989.934	         80.016		      1153	       481	      	  7	FF	FF	FF	FF	37	86	01	  	ÿÿÿÿ7†_
176	    	14:22:43	020.014	         30.080		      1153	       481	      	  7	FF	FF	FF	FF	37	86	01	  	ÿÿÿÿ7†_
177	    	14:22:43	125.017	        105.003		      1153	       481	      	  7	00	00	00	00	37	86	01	  	____7†_
178	    	14:22:43	154.839	         29.822		      1153	       481	      	  7	00	00	00	00	37	86	01	  	____7†_
179	    	14:22:43	184.901	         30.062		      1153	       481	      	  7	FF	FF	FF	FF	37	86	01	  	ÿÿÿÿ7†_
180	    	14:22:43	214.953	         30.052		      1153	       481	      	  7	00	00	00	00	37	86	01	  	____7†_
181	    	14:22:43	244.801	         29.848		      1153	       481	      	  7	FF	FF	FF	FF	37	86	01	  	ÿÿÿÿ7†_
182	    	14:22:43	274.848	         30.047		      1153	       481	      	  7	FF	FF	FF	FF	37	86	01	  	ÿÿÿÿ7†_
183	    	14:22:43	304.936	         30.088		      1153	       481	      	  7	00	00	00	00	37	86	01	  	____7†_
184	    	14:22:43	335.026	         30.090		      1153	       481	      	  7	00	00	00	00	37	86	01	  	____7†_
185	    	14:22:43	364.835	         29.809		      1153	       481	      	  7	FF	FF	FF	FF	37	86	01	  	ÿÿÿÿ7†_
186	    	14:22:43	395.002	         30.167		      1153	       481	      	  7	FE	FF	FF	FF	37	86	01	  	þÿÿÿ7†_
187	    	14:22:43	424.993	         29.991		      1153	       481	      	  7	FD	FF	FF	FF	37	86	01	  	ýÿÿÿ7†_
188	    	14:22:43	455.013	         30.020		      1153	       481	      	  7	FD	FF	FF	FF	37	86	01	  	ýÿÿÿ7†_
189	    	14:22:43	484.803	         29.790		      1153	       481	      	  7	FD	FF	FF	FF	37	86	01	  	ýÿÿÿ7†_
190	    	14:22:43	514.941	         30.138		      1153	       481	      	  7	FE	FF	FF	FF	37	86	01	  	þÿÿÿ7†_
191	    	14:22:43	544.917	         29.976		      1153	       481	      	  7	FE	FF	FF	FF	37	86	01	  	þÿÿÿ7†_
192	    	14:22:43	574.828	         29.911		      1153	       481	      	  7	FF	FF	FF	FF	37	86	01	  	ÿÿÿÿ7†_
193	    	14:22:43	945.862	        371.034		      1154	       482	      	  7	B2	FE	FF	FF	37	86	01	  	²þÿÿ7†_
194	    	14:22:43	975.865	         30.003		      1154	       482	      	  7	B3	FE	FF	FF	37	86	01	  	³þÿÿ7†_
195	    	14:22:44	005.857	         29.992		      1154	       482	      	  7	B3	FE	FF	FF	37	86	01	  	³þÿÿ7†_
196	    	14:22:44	035.573	         29.716		      1154	       482	      	  7	B2	FE	FF	FF	37	86	01	  	²þÿÿ7†_
197	    	14:22:44	081.765	         46.192		      1154	       482	      	  7	B1	FE	FF	FF	37	86	01	  	±þÿÿ7†_
198	    	14:22:44	111.769	         30.004		      1154	       482	      	  7	B1	FE	FF	FF	37	86	01	  	±þÿÿ7†_
199	    	14:22:44	141.833	         30.064		      1154	       482	      	  7	B2	FE	FF	FF	37	86	01	  	²þÿÿ7†_
200	    	14:22:44	171.848	         30.015		      1154	       482	      	  7	B2	FE	FF	FF	37	86	01	  	²þÿÿ7†_
201	    	14:22:44	201.849	         30.001		      1154	       482	      	  7	B2	FE	FF	FF	37	86	01	  	²þÿÿ7†_
202	    	14:22:44	234.885	         33.036		      1154	       482	      	  7	B3	FE	FF	FF	37	86	01	  	³þÿÿ7†_
203	    	14:22:44	264.943	         30.058		      1154	       482	      	  7	B3	FE	FF	FF	37	86	01	  	³þÿÿ7†_
204	    	14:22:44	294.845	         29.902		      1154	       482	      	  7	B4	FE	FF	FF	37	86	01	  	´þÿÿ7†_
205	    	14:22:44	324.867	         30.022		      1154	       482	      	  7	B5	FE	FF	FF	37	86	01	  	µþÿÿ7†_
206	    	14:22:44	354.577	         29.710		      1154	       482	      	  7	B5	FE	FF	FF	37	86	01	  	µþÿÿ7†_
207	    	14:22:44	386.966	         32.389		      1154	       482	      	  7	B4	FE	FF	FF	37	86	01	  	´þÿÿ7†_
208	    	14:22:44	416.666	         29.700		      1154	       482	      	  7	B4	FE	FF	FF	37	86	01	  	´þÿÿ7†_
209	    	14:22:44	467.980	         51.314		      1154	       482	      	  7	B3	FE	FF	FF	37	86	01	  	³þÿÿ7†_
210	    	14:22:44	497.632	         29.652		      1154	       482	      	  7	B3	FE	FF	FF	37	86	01	  	³þÿÿ7†_
211	    	14:22:44	527.932	         30.300		      1154	       482	      	  7	B3	FE	FF	FF	37	86	01	  	³þÿÿ7†_
212	    	14:22:44	557.846	         29.914		      1154	       482	      	  7	B3	FE	FF	FF	37	86	01	  	³þÿÿ7†_
213	    	14:22:44	703.826	        145.980		      1155	       483	      	  7	A5	FE	FF	FF	37	86	01	  	¥þÿÿ7†_
214	    	14:22:44	733.857	         30.031		      1155	       483	      	  7	A6	FE	FF	FF	37	86	01	  	¦þÿÿ7†_
215	    	14:22:44	763.654	         29.797		      1155	       483	      	  7	A6	FE	FF	FF	37	86	01	  	¦þÿÿ7†_
216	    	14:22:44	793.678	         30.024		      1155	       483	      	  7	A5	FE	FF	FF	37	86	01	  	¥þÿÿ7†_
217	    	14:22:44	823.647	         29.969		      1155	       483	      	  7	A5	FE	FF	FF	37	86	01	  	¥þÿÿ7†_
218	    	14:22:44	853.675	         30.028		      1155	       483	      	  7	A5	FE	FF	FF	37	86	01	  	¥þÿÿ7†_
219	    	14:22:44	883.674	         29.999		      1155	       483	      	  7	A6	FE	FF	FF	37	86	01	  	¦þÿÿ7†_
220	    	14:22:44	913.749	         30.075		      1155	       483	      	  7	A5	FE	FF	FF	37	86	01	  	¥þÿÿ7†_
221	    	14:22:44	943.773	         30.024		      1155	       483	      	  7	A4	FE	FF	FF	37	86	01	  	¤þÿÿ7†_
222	    	14:22:44	973.836	         30.063		      1155	       483	      	  7	A3	FE	FF	FF	37	86	01	  	£þÿÿ7†_
223	    	14:22:45	003.778	         29.942		      1155	       483	      	  7	A2	FE	FF	FF	37	86	01	  	¢þÿÿ7†_
224	    	14:22:45	033.835	         30.057		      1155	       483	      	  7	A3	FE	FF	FF	37	86	01	  	£þÿÿ7†_
225	    	14:22:45	063.649	         29.814		      1155	       483	      	  7	A3	FE	FF	FF	37	86	01	  	£þÿÿ7†_
226	    	14:22:45	093.672	         30.023		      1155	       483	      	  7	A5	FE	FF	FF	37	86	01	  	¥þÿÿ7†_
227	    	14:22:45	123.745	         30.073		      1155	       483	      	  7	A7	FE	FF	FF	37	86	01	  	§þÿÿ7†_
228	    	14:22:45	153.773	         30.028		      1155	       483	      	  7	A8	FE	FF	FF	37	86	01	  	¨þÿÿ7†_
229	    	14:22:45	183.836	         30.063		      1155	       483	      	  7	AA	FE	FF	FF	37	86	01	  	ªþÿÿ7†_
230	    	14:22:45	217.760	         33.924		      1155	       483	      	  7	AB	FE	FF	FF	37	86	01	  	«þÿÿ7†_
231	    	14:22:45	247.769	         30.009		      1155	       483	      	  7	AA	FE	FF	FF	37	86	01	  	ªþÿÿ7†_
232	    	14:22:45	277.840	         30.071		      1155	       483	      	  7	A9	FE	FF	FF	37	86	01	  	©þÿÿ7†_
233	    	14:22:45	307.656	         29.816		      1155	       483	      	  7	A7	FE	FF	FF	37	86	01	  	§þÿÿ7†_
234	    	14:22:45	337.747	         30.091		      1155	       483	      	  7	A7	FE	FF	FF	37	86	01	  	§þÿÿ7†_
235	    	14:22:45	367.787	         30.040		      1155	       483	      	  7	A7	FE	FF	FF	37	86	01	  	§þÿÿ7†_
236	    	14:22:45	397.868	         30.081		      1155	       483	      	  7	A6	FE	FF	FF	37	86	01	  	¦þÿÿ7†_
237	    	14:22:45	835.867	        437.999		      1155	       483	      	  7	A6	FE	FF	FF	37	86	01	  	¦þÿÿ7†_
238	    	14:22:45	865.750	         29.883		      1155	       483	      	  7	A6	FE	FF	FF	37	86	01	  	¦þÿÿ7†_
239	    	14:22:49	424.014	       3558.264		      1537	       601	      	  8	23	99	60	02	00	00	05	00	#™_____
240	    	14:22:49	424.548	          0.534		      1409	       581	      	  8	60	99	60	02	00	00	00	00	™_____
241	    	14:22:50	142.302	        717.754		      1537	       601	      	  8	23	99	60	01	00	00	14	00	#™_____
242	    	14:22:50	142.956	          0.654		      1409	       581	      	  8	60	99	60	01	00	00	00	00	™_____
243	    	14:22:51	024.822	        881.866		      1537	       601	      	  8	23	9A	60	00	8F	02	00	00	#š____
244	    	14:22:51	025.359	          0.537		      1409	       581	      	  8	60	9A	60	00	00	00	00	00	š_____
245	    	14:22:52	253.081	       1227.722		      1537	       601	      	  8	23	7C	60	00	D0	07	00	00	#|_Ð___
246	    	14:22:52	253.451	          0.370		      1409	       581	      	  8	60	7C	60	00	00	00	00	00	|_____
247	    	14:22:52	587.519	        334.068		      1154	       482	      	  7	B3	FE	FF	FF	37	86	01	  	³þÿÿ7†_
248	    	14:22:52	617.835	         30.316		      1154	       482	      	  7	B3	FE	FF	FF	37	86	01	  	³þÿÿ7†_
249	    	14:22:53	270.485	        652.650		      1537	       601	      	  7	2F	98	60	00	12	00	00	  	/˜____
250	    	14:22:53	271.173	          0.688		      1409	       581	      	  8	60	98	60	00	00	00	00	00	˜_____
251	    	14:22:54	186.325	        915.152		      1537	       601	      	  8	2F	60	60	00	06	00	00	00	/_____
252	    	14:22:54	187.881	          1.556		      1409	       581	      	  8	60	60	60	00	00	00	00	00	_____
253	    	14:22:54	188.029	          0.148		       641	       281	      	  3	37	86	06	  	  	  	  	  	7†_
254	    	14:22:54	188.253	          0.224		      1153	       481	      	  7	FF	FF	FF	FF	37	86	06	  	ÿÿÿÿ7†_
255	    	14:22:55	248.121	       1059.868		       513	       201	      	  2	1F	00	  	  	  	  	  	  	__
256	    	14:22:55	248.702	          0.581		       385	       181	      	  2	37	83	  	  	  	  	  	  	7ƒ
257	    	14:22:55	248.931	          0.229		      1153	       481	      	  7	FF	FF	FF	FF	37	83	06	  	ÿÿÿÿ7ƒ_
258	    	14:22:55	249.085	          0.154		       641	       281	      	  3	37	83	06	  	  	  	  	  	7ƒ_
259	    	14:22:55	277.938	         28.853		      1153	       481	      	  7	00	00	00	00	37	83	06	  	____7ƒ_
260	    	14:22:55	307.936	         29.998		      1153	       481	      	  7	09	00	00	00	37	83	06	  	____7ƒ_
261	    	14:22:55	337.942	         30.006		      1153	       481	      	  7	1F	00	00	00	37	83	06	  	____7ƒ_
262	    	14:22:55	368.041	         30.099		      1153	       481	      	  7	41	00	00	00	37	83	06	  	A___7ƒ_
263	    	14:22:55	397.881	         29.840		      1153	       481	      	  7	60	00	00	00	37	83	06	  	___7ƒ_
264	    	14:22:55	428.036	         30.155		      1153	       481	      	  7	99	00	00	00	37	83	06	  	™___7ƒ_
265	    	14:22:55	457.889	         29.853		      1153	       481	      	  7	CA	00	00	00	37	83	06	  	Ê___7ƒ_
266	    	14:22:55	487.891	         30.002		      1153	       481	      	  7	08	01	00	00	37	83	06	  	____7ƒ_
267	    	14:22:55	517.934	         30.043		      1153	       481	      	  7	54	01	00	00	37	83	06	  	T___7ƒ_
268	    	14:22:55	547.974	         30.040		      1153	       481	      	  7	AC	01	00	00	37	83	06	  	¬___7ƒ_
269	    	14:22:55	577.992	         30.018		      1153	       481	      	  7	05	02	00	00	37	83	06	  	____7ƒ_
270	    	14:22:55	607.856	         29.864		      1153	       481	      	  7	65	02	00	00	37	83	06	  	e___7ƒ_
271	    	14:22:55	637.972	         30.116		      1153	       481	      	  7	DF	02	00	00	37	83	06	  	ß___7ƒ_
272	    	14:22:55	667.979	         30.007		      1153	       481	      	  7	52	03	00	00	37	83	06	  	R___7ƒ_
273	    	14:22:55	698.049	         30.070		      1153	       481	      	  7	D2	03	00	00	37	83	06	  	Ò___7ƒ_
274	    	14:22:55	728.087	         30.038		      1153	       481	      	  7	59	04	00	00	37	83	06	  	Y___7ƒ_
275	    	14:22:55	757.955	         29.868		      1153	       481	      	  7	EC	04	00	00	37	83	06	  	ì___7ƒ_
276	    	14:22:55	787.973	         30.018		      1153	       481	      	  7	8F	05	00	00	37	83	06	  	___7ƒ_
277	    	14:22:55	818.042	         30.069		      1153	       481	      	  7	2F	06	00	00	37	83	06	  	/___7ƒ_
278	    	14:22:55	847.868	         29.826		      1153	       481	      	  7	D8	06	00	00	37	83	06	  	Ø___7ƒ_
279	    	14:22:55	877.888	         30.020		      1153	       481	      	  7	8F	07	00	00	37	83	06	  	___7ƒ_
280	    	14:22:55	907.966	         30.078		      1153	       481	      	  7	4F	08	00	00	37	83	06	  	O___7ƒ_
281	    	14:22:55	938.034	         30.068		      1153	       481	      	  7	17	09	00	00	37	83	06	  	____7ƒ_
282	    	14:22:55	968.069	         30.035		      1153	       481	      	  7	EA	09	00	00	37	83	06	  	ê___7ƒ_
283	    	14:22:55	997.897	         29.828		      1153	       481	      	  7	C0	0A	00	00	37	83	06	  	À___7ƒ_
284	    	14:22:56	027.957	         30.060		      1153	       481	      	  7	A8	0B	00	00	37	83	06	  	¨___7ƒ_
285	    	14:22:56	058.059	         30.102		      1153	       481	      	  7	97	0C	00	00	37	83	06	  	—___7ƒ_
286	    	14:22:56	088.069	         30.010		      1153	       481	      	  7	8B	0D	00	00	37	83	06	  	‹___7ƒ_
287	    	14:22:56	117.935	         29.866		      1153	       481	      	  7	82	0E	00	00	37	83	06	  	‚___7ƒ_
288	    	14:22:56	147.950	         30.015		      1153	       481	      	  7	87	0F	00	00	37	83	06	  	‡___7ƒ_
289	    	14:22:56	178.034	         30.084		      1153	       481	      	  7	A2	10	00	00	37	83	06	  	¢___7ƒ_
290	    	14:22:56	208.060	         30.026		      1153	       481	      	  7	B8	11	00	00	37	83	06	  	¸___7ƒ_
291	    	14:22:56	237.870	         29.810		      1153	       481	      	  7	CE	12	00	00	37	83	06	  	Î___7ƒ_
292	    	14:22:56	267.945	         30.075		      1153	       481	      	  7	FB	13	00	00	37	83	06	  	û___7ƒ_
293	    	14:22:56	297.985	         30.040		      1153	       481	      	  7	3E	15	00	00	37	83	06	  	>___7ƒ_
294	    	14:22:56	328.063	         30.078		      1153	       481	      	  7	7B	16	00	00	37	83	06	  	{___7ƒ_
295	    	14:22:56	357.859	         29.796		      1153	       481	      	  7	B2	17	00	00	37	83	06	  	²___7ƒ_
296	    	14:22:56	387.936	         30.077		      1153	       481	      	  7	01	19	00	00	37	83	06	  	____7ƒ_
297	    	14:22:56	417.982	         30.046		      1153	       481	      	  7	68	1A	00	00	37	83	06	  	h___7ƒ_
298	    	14:22:56	448.053	         30.071		      1153	       481	      	  7	C5	1B	00	00	37	83	06	  	Å___7ƒ_
299	    	14:22:56	478.084	         30.031		      1153	       481	      	  7	33	1D	00	00	37	83	06	  	3___7ƒ_
300	    	14:22:56	507.936	         29.852		      1153	       481	      	  7	96	1E	00	00	37	83	06	  	–___7ƒ_
301	    	14:22:56	537.982	         30.046		      1153	       481	      	  7	23	20	00	00	37	83	06	  	#___7ƒ_
302	    	14:22:56	568.055	         30.073		      1153	       481	      	  7	A4	21	00	00	37	83	06	  	¤!__7ƒ_
303	    	14:22:56	598.079	         30.024		      1153	       481	      	  7	35	23	00	00	37	83	06	  	5#__7ƒ_
304	    	14:22:56	627.891	         29.812		      1153	       481	      	  7	BC	24	00	00	37	83	06	  	¼$__7ƒ_
305	    	14:22:56	657.969	         30.078		      1153	       481	      	  7	6A	26	00	00	37	83	06	  	j&__7ƒ_
306	    	14:22:56	688.047	         30.078		      1153	       481	      	  7	17	28	00	00	37	83	06	  	_(__7ƒ_
307	    	14:22:56	717.860	         29.813		      1153	       481	      	  7	B7	29	00	00	37	83	06	  	·)__7ƒ_
308	    	14:22:56	747.886	         30.026		      1153	       481	      	  7	71	2B	00	00	37	83	06	  	q+__7ƒ_
309	    	14:22:56	777.960	         30.074		      1153	       481	      	  7	45	2D	00	00	37	83	06	  	E-__7ƒ_
310	    	14:22:56	807.992	         30.032		      1153	       481	      	  7	13	2F	00	00	37	83	06	  	_/__7ƒ_
311	    	14:22:56	838.070	         30.078		      1153	       481	      	  7	EA	30	00	00	37	83	06	  	ê0__7ƒ_
312	    	14:22:56	867.877	         29.807		      1153	       481	      	  7	BA	32	00	00	37	83	06	  	º2__7ƒ_
313	    	14:22:56	897.955	         30.078		      1153	       481	      	  7	B2	34	00	00	37	83	06	  	²4__7ƒ_
314	    	14:22:56	927.987	         30.032		      1153	       481	      	  7	A2	36	00	00	37	83	06	  	¢6__7ƒ_
315	    	14:22:56	958.069	         30.082		      1153	       481	      	  7	9D	38	00	00	37	83	06	  	8__7ƒ_
316	    	14:22:56	987.871	         29.802		      1153	       481	      	  7	8E	3A	00	00	37	83	06	  	Ž:__7ƒ_
317	    	14:22:57	017.942	         30.071		      1153	       481	      	  7	9A	3C	00	00	37	83	06	  	š<__7ƒ_
318	    	14:22:57	047.988	         30.046		      1153	       481	      	  7	C0	3E	00	00	37	83	06	  	À>__7ƒ_
319	    	14:22:57	078.069	         30.081		      1153	       481	      	  7	DD	40	00	00	37	83	06	  	Ý@__7ƒ_
320	    	14:22:57	107.872	         29.803		      1153	       481	      	  7	F1	42	00	00	37	83	06	  	ñB__7ƒ_
321	    	14:22:57	137.948	         30.076		      1153	       481	      	  7	22	45	00	00	37	83	06	  	"E__7ƒ_
322	    	14:22:57	167.979	         30.031		      1153	       481	      	  7	70	47	00	00	37	83	06	  	pG__7ƒ_
323	    	14:22:57	198.055	         30.076		      1153	       481	      	  7	B0	49	00	00	37	83	06	  	°I__7ƒ_
324	    	14:22:57	228.089	         30.034		      1153	       481	      	  7	FB	4B	00	00	37	83	06	  	ûK__7ƒ_
325	    	14:22:57	257.895	         29.806		      1153	       481	      	  7	3D	4E	00	00	37	83	06	  	=N__7ƒ_
326	    	14:22:57	287.957	         30.062		      1153	       481	      	  7	A6	50	00	00	37	83	06	  	¦P__7ƒ_
327	    	14:22:57	317.974	         30.017		      1153	       481	      	  7	00	53	00	00	37	83	06	  	_S__7ƒ_
328	    	14:22:57	347.980	         30.006		      1153	       481	      	  7	57	55	00	00	37	83	06	  	WU__7ƒ_
329	    	14:22:57	377.994	         30.014		      1153	       481	      	  7	AF	57	00	00	37	83	06	  	¯W__7ƒ_
330	    	14:22:57	408.046	         30.052		      1153	       481	      	  7	07	5A	00	00	37	83	06	  	_Z__7ƒ_
331	    	14:22:57	438.074	         30.028		      1153	       481	      	  7	5E	5C	00	00	37	83	06	  	^\__7ƒ_
332	    	14:22:57	468.087	         30.013		      1153	       481	      	  7	B8	5E	00	00	37	83	06	  	¸^__7ƒ_
333	    	14:22:57	497.875	         29.788		      1153	       481	      	  7	FC	60	00	00	37	83	06	  	ü__7ƒ_
334	    	14:22:57	527.883	         30.008		      1153	       481	      	  7	52	63	00	00	37	83	06	  	Rc__7ƒ_
335	    	14:22:57	557.895	         30.012		      1153	       481	      	  7	AC	65	00	00	37	83	06	  	¬e__7ƒ_
336	    	14:22:57	587.961	         30.066		      1153	       481	      	  7	16	68	00	00	37	83	06	  	_h__7ƒ_
337	    	14:22:57	617.972	         30.011		      1153	       481	      	  7	6F	6A	00	00	37	83	06	  	oj__7ƒ_
338	    	14:22:57	647.988	         30.016		      1153	       481	      	  7	C7	6C	00	00	37	83	06	  	Çl__7ƒ_
339	    	14:22:57	677.996	         30.008		      1153	       481	      	  7	1E	6F	00	00	37	83	06	  	_o__7ƒ_
340	    	14:22:57	708.044	         30.048		      1153	       481	      	  7	77	71	00	00	37	83	06	  	wq__7ƒ_
341	    	14:22:57	738.076	         30.032		      1153	       481	      	  7	CE	73	00	00	37	83	06	  	Îs__7ƒ_
342	    	14:22:57	768.089	         30.013		      1153	       481	      	  7	28	76	00	00	37	83	06	  	(v__7ƒ_
343	    	14:22:57	797.877	         29.788		      1153	       481	      	  7	6B	78	00	00	37	83	06	  	kx__7ƒ_
344	    	14:22:57	827.891	         30.014		      1153	       481	      	  7	C2	7A	00	00	37	83	06	  	Âz__7ƒ_
345	    	14:22:57	857.901	         30.010		      1153	       481	      	  7	1C	7D	00	00	37	83	06	  	_}__7ƒ_
346	    	14:22:57	883.103	         25.202		       129	       081	      	  8	43	54	01	00	00	00	00	00	CT______
347	    	14:22:57	883.282	          0.179		       385	       181	      	  2	37	8B	  	  	  	  	  	  	7‹
348	    	14:22:57	883.432	          0.150		       641	       281	      	  3	37	8B	06	  	  	  	  	  	7‹_
349	    	14:22:57	887.966	          4.534		      1153	       481	      	  7	86	7F	00	00	37	8B	06	  	†__7‹_
350	    	14:22:57	918.077	         30.111		      1153	       481	      	  7	9F	80	00	00	37	8B	06	  	Ÿ€__7‹_
351	    	14:22:57	924.152	          6.075		       385	       181	      	  2	37	CB	  	  	  	  	  	  	7Ë
352	    	14:22:57	924.304	          0.152		       641	       281	      	  3	37	CB	06	  	  	  	  	  	7Ë_
353	    	14:22:57	948.058	         23.754		      1153	       481	      	  7	9E	80	00	00	37	8B	06	  	ž€__7‹_
354	    	14:22:57	953.794	          5.736		       385	       181	      	  2	37	8B	  	  	  	  	  	  	7‹
355	    	14:22:57	953.952	          0.158		       641	       281	      	  3	37	8B	06	  	  	  	  	  	7‹_
356	    	14:22:57	978.085	         24.133		      1153	       481	      	  7	96	80	00	00	37	8B	06	  	–€__7‹_
357	    	14:22:58	008.045	         29.960		      1153	       481	      	  7	83	80	00	00	37	8B	06	  	ƒ€__7‹_
358	    	14:22:58	037.943	         29.898		      1153	       481	      	  7	62	80	00	00	37	8B	06	  	b€__7‹_
359	    	14:22:58	068.047	         30.104		      1153	       481	      	  7	3D	80	00	00	37	8B	06	  	=€__7‹_
360	    	14:22:58	097.876	         29.829		      1153	       481	      	  7	0E	80	00	00	37	8B	06	  	_€__7‹_
361	    	14:22:58	127.886	         30.010		      1153	       481	      	  7	DE	7F	00	00	37	8B	06	  	Þ__7‹_
362	    	14:22:58	157.946	         30.060		      1153	       481	      	  7	9A	7F	00	00	37	8B	06	  	š__7‹_
363	    	14:22:58	187.982	         30.036		      1153	       481	      	  7	49	7F	00	00	37	8B	06	  	I__7‹_
364	    	14:22:58	217.994	         30.012		      1153	       481	      	  7	F8	7E	00	00	37	8B	06	  	ø~__7‹_
365	    	14:22:58	248.071	         30.077		      1153	       481	      	  7	9F	7E	00	00	37	8B	06	  	Ÿ~__7‹_
366	    	14:22:58	277.955	         29.884		      1153	       481	      	  7	3D	7E	00	00	37	8B	06	  	=~__7‹_
367	    	14:22:58	307.977	         30.022		      1153	       481	      	  7	D3	7D	00	00	37	8B	06	  	Ó}__7‹_
368	    	14:22:58	338.045	         30.068		      1153	       481	      	  7	52	7D	00	00	37	8B	06	  	R}__7‹_
369	    	14:22:58	368.049	         30.004		      1153	       481	      	  7	DB	7C	00	00	37	8B	06	  	Û|__7‹_
370	    	14:22:58	397.948	         29.899		      1153	       481	      	  7	50	7C	00	00	37	8B	06	  	P|__7‹_
371	    	14:22:58	427.970	         30.022		      1153	       481	      	  7	C0	7B	00	00	37	8B	06	  	À{__7‹_
372	    	14:22:58	457.970	         30.000		      1153	       481	      	  7	29	7B	00	00	37	8B	06	  	){__7‹_
373	    	14:22:58	487.990	         30.020		      1153	       481	      	  7	96	7A	00	00	37	8B	06	  	–z__7‹_
374	    	14:22:58	518.048	         30.058		      1153	       481	      	  7	FD	79	00	00	37	8B	06	  	ýy__7‹_
375	    	14:22:58	548.071	         30.023		      1153	       481	      	  7	61	79	00	00	37	8B	06	  	ay__7‹_
376	    	14:22:58	578.051	         29.980		      1153	       481	      	  7	CF	78	00	00	37	8B	06	  	Ïx__7‹_
377	    	14:22:58	607.873	         29.822		      1153	       481	      	  7	3F	78	00	00	37	8B	06	  	?x__7‹_
378	    	14:22:58	637.869	         29.996		      1153	       481	      	  7	AB	77	00	00	37	8B	06	  	«w__7‹_
379	    	14:22:58	668.083	         30.214		      1153	       481	      	  7	0E	77	00	00	37	8B	06	  	_w__7‹_
380	    	14:22:58	697.946	         29.863		      1153	       481	      	  7	79	76	00	00	37	8B	06	  	yv__7‹_
381	    	14:22:58	727.950	         30.004		      1153	       481	      	  7	EA	75	00	00	37	8B	06	  	êu__7‹_
382	    	14:22:58	757.954	         30.004		      1153	       481	      	  7	53	75	00	00	37	8B	06	  	Su__7‹_
383	    	14:22:58	787.974	         30.020		      1153	       481	      	  7	BA	74	00	00	37	8B	06	  	ºt__7‹_
384	    	14:22:58	817.994	         30.020		      1153	       481	      	  7	20	74	00	00	37	8B	06	  	_t__7‹_
385	    	14:22:58	847.999	         30.005		      1153	       481	      	  7	85	73	00	00	37	8B	06	  	…s__7‹_
386	    	14:22:58	877.995	         29.996		      1153	       481	      	  7	F4	72	00	00	37	8B	06	  	ôr__7‹_
387	    	14:22:58	908.083	         30.088		      1153	       481	      	  7	5D	72	00	00	37	8B	06	  	]r__7‹_
388	    	14:22:58	938.085	         30.002		      1153	       481	      	  7	CA	71	00	00	37	8B	06	  	Êq__7‹_
389	    	14:22:58	968.073	         29.988		      1153	       481	      	  7	31	71	00	00	37	8B	06	  	1q__7‹_
390	    	14:22:58	997.892	         29.819		      1153	       481	      	  7	9D	70	00	00	37	8B	06	  	p__7‹_
391	    	14:22:59	027.896	         30.004		      1153	       481	      	  7	0E	70	00	00	37	8B	06	  	_p__7‹_
392	    	14:22:59	057.898	         30.002		      1153	       481	      	  7	77	6F	00	00	37	8B	06	  	wo__7‹_
393	    	14:22:59	087.958	         30.060		      1153	       481	      	  7	E3	6E	00	00	37	8B	06	  	ãn__7‹_
394	    	14:22:59	117.976	         30.018		      1153	       481	      	  7	45	6E	00	00	37	8B	06	  	En__7‹_
395	    	14:22:59	147.986	         30.010		      1153	       481	      	  7	A9	6D	00	00	37	8B	06	  	©m__7‹_
396	    	14:22:59	177.975	         29.989		      1153	       481	      	  7	18	6D	00	00	37	8B	06	  	_m__7‹_
397	    	14:22:59	208.074	         30.099		      1153	       481	      	  7	82	6C	00	00	37	8B	06	  	‚l__7‹_
398	    	14:22:59	238.063	         29.989		      1153	       481	      	  7	EF	6B	00	00	37	8B	06	  	ïk__7‹_
399	    	14:22:59	268.045	         29.982		      1153	       481	      	  7	56	6B	00	00	37	8B	06	  	Vk__7‹_
400	    	14:22:59	297.872	         29.827		      1153	       481	      	  7	C2	6A	00	00	37	8B	06	  	Âj__7‹_
401	    	14:22:59	327.870	         29.998		      1153	       481	      	  7	31	6A	00	00	37	8B	06	  	1j__7‹_
402	    	14:22:59	357.876	         30.006		      1153	       481	      	  7	9A	69	00	00	37	8B	06	  	ši__7‹_
403	    	14:22:59	387.894	         30.018		      1153	       481	      	  7	07	69	00	00	37	8B	06	  	_i__7‹_
404	    	14:22:59	417.954	         30.060		      1153	       481	      	  7	6D	68	00	00	37	8B	06	  	mh__7‹_
405	    	14:22:59	447.960	         30.006		      1153	       481	      	  7	CD	67	00	00	37	8B	06	  	Íg__7‹_
406	    	14:22:59	477.950	         29.990		      1153	       481	      	  7	42	67	00	00	37	8B	06	  	Bg__7‹_
407	    	14:22:59	508.041	         30.091		      1153	       481	      	  7	A5	66	00	00	37	8B	06	  	¥f__7‹_
408	    	14:22:59	538.001	         29.960		      1153	       481	      	  7	13	66	00	00	37	8B	06	  	_f__7‹_
409	    	14:22:59	567.989	         29.988		      1153	       481	      	  7	7A	65	00	00	37	8B	06	  	ze__7‹_
410	    	14:22:59	598.087	         30.098		      1153	       481	      	  7	E0	64	00	00	37	8B	06	  	àd__7‹_
411	    	14:22:59	628.090	         30.003		      1153	       481	      	  7	50	64	00	00	37	8B	06	  	Pd__7‹_
412	    	14:22:59	658.092	         30.002		      1153	       481	      	  7	B9	63	00	00	37	8B	06	  	¹c__7‹_
413	    	14:22:59	687.882	         29.790		      1153	       481	      	  7	2B	63	00	00	37	8B	06	  	+c__7‹_
414	    	14:22:59	717.900	         30.018		      1153	       481	      	  7	91	62	00	00	37	8B	06	  	‘b__7‹_
415	    	14:22:59	747.951	         30.051		      1153	       481	      	  7	F6	61	00	00	37	8B	06	  	öa__7‹_
416	    	14:22:59	777.905	         29.954		      1153	       481	      	  7	65	61	00	00	37	8B	06	  	ea__7‹_
417	    	14:22:59	807.997	         30.092		      1153	       481	      	  7	C9	60	00	00	37	8B	06	  	É__7‹_
418	    	14:22:59	837.993	         29.996		      1153	       481	      	  7	37	60	00	00	37	8B	06	  	7__7‹_
419	    	14:22:59	867.983	         29.990		      1153	       481	      	  7	9E	5F	00	00	37	8B	06	  	ž___7‹_
420	    	14:22:59	898.077	         30.094		      1153	       481	      	  7	04	5F	00	00	37	8B	06	  	____7‹_
421	    	14:22:59	928.078	         30.001		      1153	       481	      	  7	73	5E	00	00	37	8B	06	  	s^__7‹_
422	    	14:22:59	958.082	         30.004		      1153	       481	      	  7	DD	5D	00	00	37	8B	06	  	Ý]__7‹_
423	    	14:22:59	987.870	         29.788		      1153	       481	      	  7	4F	5D	00	00	37	8B	06	  	O]__7‹_
424	    	14:23:00	017.890	         30.020		      1153	       481	      	  7	B5	5C	00	00	37	8B	06	  	µ\__7‹_
425	    	14:23:00	047.896	         30.006		      1153	       481	      	  7	1A	5C	00	00	37	8B	06	  	_\__7‹_
426	    	14:23:00	077.887	         29.991		      1153	       481	      	  7	8A	5B	00	00	37	8B	06	  	Š[__7‹_
427	    	14:23:00	107.979	         30.092		      1153	       481	      	  7	ED	5A	00	00	37	8B	06	  	íZ__7‹_
428	    	14:23:00	137.975	         29.996		      1153	       481	      	  7	5A	5A	00	00	37	8B	06	  	ZZ__7‹_
429	    	14:23:00	167.967	         29.992		      1153	       481	      	  7	C2	59	00	00	37	8B	06	  	ÂY__7‹_
430	    	14:23:00	198.049	         30.082		      1153	       481	      	  7	28	59	00	00	37	8B	06	  	(Y__7‹_
431	    	14:23:00	228.054	         30.005		      1153	       481	      	  7	98	58	00	00	37	8B	06	  	˜X__7‹_
432	    	14:23:00	258.066	         30.012		      1153	       481	      	  7	01	58	00	00	37	8B	06	  	_X__7‹_
433	    	14:23:00	288.082	         30.016		      1153	       481	      	  7	6E	57	00	00	37	8B	06	  	nW__7‹_
434	    	14:23:00	317.876	         29.794		      1153	       481	      	  7	D9	56	00	00	37	8B	06	  	ÙV__7‹_
435	    	14:23:00	347.884	         30.008		      1153	       481	      	  7	3E	56	00	00	37	8B	06	  	>V__7‹_
436	    	14:23:00	377.873	         29.989		      1153	       481	      	  7	AE	55	00	00	37	8B	06	  	®U__7‹_
437	    	14:23:00	407.967	         30.094		      1153	       481	      	  7	11	55	00	00	37	8B	06	  	_U__7‹_
438	    	14:23:00	437.965	         29.998		      1153	       481	      	  7	83	54	00	00	37	8B	06	  	ƒT__7‹_
439	    	14:23:00	467.945	         29.980		      1153	       481	      	  7	EA	53	00	00	37	8B	06	  	êS__7‹_
440	    	14:23:00	497.999	         30.054		      1153	       481	      	  7	4C	53	00	00	37	8B	06	  	LS__7‹_
441	    	14:23:00	528.004	         30.005		      1153	       481	      	  7	BB	52	00	00	37	8B	06	  	»R__7‹_
442	    	14:23:00	558.044	         30.040		      1153	       481	      	  7	25	52	00	00	37	8B	06	  	%R__7‹_
443	    	14:23:00	588.066	         30.022		      1153	       481	      	  7	92	51	00	00	37	8B	06	  	’Q__7‹_
444	    	14:23:00	618.088	         30.022		      1153	       481	      	  7	F9	50	00	00	37	8B	06	  	ùP__7‹_
445	    	14:23:00	648.096	         30.008		      1153	       481	      	  7	5D	50	00	00	37	8B	06	  	]P__7‹_
446	    	14:23:00	678.091	         29.995		      1153	       481	      	  7	CC	4F	00	00	37	8B	06	  	ÌO__7‹_
447	    	14:23:00	707.945	         29.854		      1153	       481	      	  7	3B	4F	00	00	37	8B	06	  	;O__7‹_
448	    	14:23:00	737.945	         30.000		      1153	       481	      	  7	A7	4E	00	00	37	8B	06	  	§N__7‹_
449	    	14:23:00	767.891	         29.946		      1153	       481	      	  7	0E	4E	00	00	37	8B	06	  	_N__7‹_
450	    	14:23:00	797.987	         30.096		      1153	       481	      	  7	70	4D	00	00	37	8B	06	  	pM__7‹_
451	    	14:23:00	827.994	         30.007		      1153	       481	      	  7	E0	4C	00	00	37	8B	06	  	àL__7‹_
452	    	14:23:00	857.994	         30.000		      1153	       481	      	  7	49	4C	00	00	37	8B	06	  	IL__7‹_
453	    	14:23:00	888.046	         30.052		      1153	       481	      	  7	B6	4B	00	00	37	8B	06	  	¶K__7‹_
454	    	14:23:00	918.070	         30.024		      1153	       481	      	  7	1D	4B	00	00	37	8B	06	  	_K__7‹_
455	    	14:23:00	948.082	         30.012		      1153	       481	      	  7	81	4A	00	00	37	8B	06	  	J__7‹_
456	    	14:23:00	978.082	         30.000		      1153	       481	      	  7	F0	49	00	00	37	8B	06	  	ðI__7‹_
457	    	14:23:01	007.893	         29.811		      1153	       481	      	  7	5F	49	00	00	37	8B	06	  	_I__7‹_
458	    	14:23:01	037.891	         29.998		      1153	       481	      	  7	CB	48	00	00	37	8B	06	  	ËH__7‹_
459	    	14:23:01	067.873	         29.982		      1153	       481	      	  7	32	48	00	00	37	8B	06	  	2H__7‹_
460	    	14:23:01	097.961	         30.088		      1153	       481	      	  7	99	47	00	00	37	8B	06	  	™G__7‹_
461	    	14:23:01	127.968	         30.007		      1153	       481	      	  7	04	47	00	00	37	8B	06	  	_G__7‹_
462	    	14:23:01	157.970	         30.002		      1153	       481	      	  7	6D	46	00	00	37	8B	06	  	mF__7‹_
463	    	14:23:01	187.992	         30.022		      1153	       481	      	  7	DB	45	00	00	37	8B	06	  	ÛE__7‹_
464	    	14:23:01	218.052	         30.060		      1153	       481	      	  7	40	45	00	00	37	8B	06	  	@E__7‹_
465	    	14:23:01	248.058	         30.006		      1153	       481	      	  7	A5	44	00	00	37	8B	06	  	¥D__7‹_
466	    	14:23:01	278.051	         29.993		      1153	       481	      	  7	14	44	00	00	37	8B	06	  	_D__7‹_
467	    	14:23:01	307.875	         29.824		      1153	       481	      	  7	82	43	00	00	37	8B	06	  	‚C__7‹_
468	    	14:23:01	337.873	         29.998		      1153	       481	      	  7	EF	42	00	00	37	8B	06	  	ïB__7‹_
469	    	14:23:01	368.087	         30.214		      1153	       481	      	  7	52	42	00	00	37	8B	06	  	RB__7‹_
470	    	14:23:01	397.911	         29.824		      1153	       481	      	  7	BE	41	00	00	37	8B	06	  	¾A__7‹_
471	    	14:23:01	427.950	         30.039		      1153	       481	      	  7	2D	41	00	00	37	8B	06	  	-A__7‹_
472	    	14:23:01	457.959	         30.009		      1153	       481	      	  7	97	40	00	00	37	8B	06	  	—@__7‹_
473	    	14:23:01	487.982	         30.023		      1153	       481	      	  7	FE	3F	00	00	37	8B	06	  	þ?__7‹_
474	    	14:23:01	517.996	         30.014		      1153	       481	      	  7	65	3F	00	00	37	8B	06	  	e?__7‹_
475	    	14:23:01	548.006	         30.010		      1153	       481	      	  7	C9	3E	00	00	37	8B	06	  	É>__7‹_
476	    	14:23:01	578.001	         29.995		      1153	       481	      	  7	38	3E	00	00	37	8B	06	  	8>__7‹_
477	    	14:23:01	608.085	         30.084		      1153	       481	      	  7	A1	3D	00	00	37	8B	06	  	¡=__7‹_
478	    	14:23:01	638.085	         30.000		      1153	       481	      	  7	0F	3D	00	00	37	8B	06	  	_=__7‹_
479	    	14:23:01	668.075	         29.990		      1153	       481	      	  7	76	3C	00	00	37	8B	06	  	v<__7‹_
480	    	14:23:01	697.893	         29.818		      1153	       481	      	  7	E1	3B	00	00	37	8B	06	  	á;__7‹_
481	    	14:23:01	727.898	         30.005		      1153	       481	      	  7	51	3B	00	00	37	8B	06	  	Q;__7‹_
482	    	14:23:01	757.900	         30.002		      1153	       481	      	  7	BA	3A	00	00	37	8B	06	  	º:__7‹_
483	    	14:23:01	787.960	         30.060		      1153	       481	      	  7	27	3A	00	00	37	8B	06	  	':__7‹_
484	    	14:23:01	817.978	         30.018		      1153	       481	      	  7	89	39	00	00	37	8B	06	  	‰9__7‹_
485	    	14:23:01	847.988	         30.010		      1153	       481	      	  7	ED	38	00	00	37	8B	06	  	í8__7‹_
486	    	14:23:01	857.123	          9.135		       129	       081	      	  8	00	00	00	00	00	00	00	00	________
487	    	14:23:01	857.277	          0.154		       641	       281	      	  3	37	C3	06	  	  	  	  	  	7Ã_
488	    	14:23:01	857.411	          0.134		       385	       181	      	  2	37	C3	  	  	  	  	  	  	7Ã
489	    	14:23:01	878.053	         20.642		      1153	       481	      	  7	5D	38	00	00	37	83	06	  	]8__7ƒ_
490	    	14:23:01	886.989	          8.936		       385	       181	      	  2	37	83	  	  	  	  	  	  	7ƒ
491	    	14:23:01	887.143	          0.154		       641	       281	      	  3	37	83	06	  	  	  	  	  	7ƒ_
492	    	14:23:01	907.979	         20.836		      1153	       481	      	  7	D2	37	00	00	37	83	06	  	Ò7__7ƒ_
493	    	14:23:01	938.086	         30.107		      1153	       481	      	  7	4E	37	00	00	37	83	06	  	N7__7ƒ_
494	    	14:23:01	967.902	         29.816		      1153	       481	      	  7	DB	36	00	00	37	83	06	  	Û6__7ƒ_
495	    	14:23:01	997.978	         30.076		      1153	       481	      	  7	62	36	00	00	37	83	06	  	b6__7ƒ_
496	    	14:23:02	027.892	         29.914		      1153	       481	      	  7	FD	35	00	00	37	83	06	  	ý5__7ƒ_
497	    	14:23:02	057.980	         30.088		      1153	       481	      	  7	A2	35	00	00	37	83	06	  	¢5__7ƒ_
498	    	14:23:02	088.073	         30.093		      1153	       481	      	  7	4B	35	00	00	37	83	06	  	K5__7ƒ_
499	    	14:23:02	117.899	         29.826		      1153	       481	      	  7	FF	34	00	00	37	83	06	  	ÿ4__7ƒ_
500	    	14:23:02	147.913	         30.014		      1153	       481	      	  7	B9	34	00	00	37	83	06	  	¹4__7ƒ_
501	    	14:23:02	178.001	         30.088		      1153	       481	      	  7	7A	34	00	00	37	83	06	  	z4__7ƒ_
502	    	14:23:02	207.962	         29.961		      1153	       481	      	  7	4F	34	00	00	37	83	06	  	O4__7ƒ_
503	    	14:23:02	238.100	         30.138		      1153	       481	      	  7	1E	34	00	00	37	83	06	  	_4__7ƒ_
504	    	14:23:02	268.008	         29.908		      1153	       481	      	  7	02	34	00	00	37	83	06	  	_4__7ƒ_
505	    	14:23:02	297.890	         29.882		      1153	       481	      	  7	EA	33	00	00	37	83	06	  	ê3__7ƒ_
506	    	14:23:02	327.966	         30.076		      1153	       481	      	  7	DB	33	00	00	37	83	06	  	Û3__7ƒ_
507	    	14:23:02	357.994	         30.028		      1153	       481	      	  7	D7	33	00	00	37	83	06	  	×3__7ƒ_
508	    	14:23:02	388.088	         30.094		      1153	       481	      	  7	DA	33	00	00	37	83	06	  	Ú3__7ƒ_
509	    	14:23:02	418.065	         29.977		      1153	       481	      	  7	E8	33	00	00	37	83	06	  	è3__7ƒ_
510	    	14:23:02	448.097	         30.032		      1153	       481	      	  7	01	34	00	00	37	83	06	  	_4__7ƒ_
511	    	14:23:02	477.901	         29.804		      1153	       481	      	  7	1B	34	00	00	37	83	06	  	_4__7ƒ_
512	    	14:23:02	507.975	         30.074		      1153	       481	      	  7	4A	34	00	00	37	83	06	  	J4__7ƒ_
513	    	14:23:02	538.054	         30.079		      1153	       481	      	  7	75	34	00	00	37	83	06	  	u4__7ƒ_
514	    	14:23:02	568.078	         30.024		      1153	       481	      	  7	B3	34	00	00	37	83	06	  	³4__7ƒ_
515	    	14:23:02	598.104	         30.026		      1153	       481	      	  7	F5	34	00	00	37	83	06	  	õ4__7ƒ_
516	    	14:23:02	627.980	         29.876		      1153	       481	      	  7	41	35	00	00	37	83	06	  	A5__7ƒ_
517	    	14:23:02	658.108	         30.128		      1153	       481	      	  7	98	35	00	00	37	83	06	  	˜5__7ƒ_
518	    	14:23:02	688.101	         29.993		      1153	       481	      	  7	F4	35	00	00	37	83	06	  	ô5__7ƒ_
519	    	14:23:02	717.889	         29.788		      1153	       481	      	  7	5D	36	00	00	37	83	06	  	]6__7ƒ_
520	    	14:23:02	747.971	         30.082		      1153	       481	      	  7	BE	36	00	00	37	83	06	  	¾6__7ƒ_
521	    	14:23:02	778.090	         30.119		      1153	       481	      	  7	18	37	00	00	37	83	06	  	_7__7ƒ_
522	    	14:23:02	808.009	         29.919		      1153	       481	      	  7	6D	37	00	00	37	83	06	  	m7__7ƒ_
523	    	14:23:02	838.092	         30.083		      1153	       481	      	  7	B5	37	00	00	37	83	06	  	µ7__7ƒ_
524	    	14:23:02	867.900	         29.808		      1153	       481	      	  7	F9	37	00	00	37	83	06	  	ù7__7ƒ_
525	    	14:23:02	898.002	         30.102		      1153	       481	      	  7	36	38	00	00	37	83	06	  	68__7ƒ_
526	    	14:23:02	927.878	         29.876		      1153	       481	      	  7	5D	38	00	00	37	83	06	  	]8__7ƒ_
527	    	14:23:02	957.974	         30.096		      1153	       481	      	  7	89	38	00	00	37	83	06	  	‰8__7ƒ_
528	    	14:23:02	988.011	         30.037		      1153	       481	      	  7	A3	38	00	00	37	83	06	  	£8__7ƒ_
529	    	14:23:03	018.091	         30.080		      1153	       481	      	  7	B6	38	00	00	37	83	06	  	¶8__7ƒ_
530	    	14:23:03	047.899	         29.808		      1153	       481	      	  7	C3	38	00	00	37	83	06	  	Ã8__7ƒ_
531	    	14:23:03	074.173	         26.274		       385	       181	      	  2	37	C3	  	  	  	  	  	  	7Ã
532	    	14:23:03	074.327	          0.154		       641	       281	      	  3	37	C3	06	  	  	  	  	  	7Ã_
533	    	14:23:03	078.005	          3.678		      1153	       481	      	  7	D0	07	00	00	37	D6	06	  	Ð___7Ö_
534	    	14:23:03	103.799	         25.794		       385	       181	      	  2	37	D6	  	  	  	  	  	  	7Ö
535	    	14:23:03	103.952	          0.153		       641	       281	      	  3	37	D6	06	  	  	  	  	  	7Ö_
536	    	14:23:03	108.082	          4.130		      1153	       481	      	  7	D0	07	00	00	37	D6	06	  	Ð___7Ö_
537	    	14:23:06	904.574	       3796.492		      1538	       602	      	  5	2F	60	60	00	01	  	  	  	/__
538	    	14:23:06	905.048	          0.474		      1410	       582	      	  8	60	60	60	00	00	00	00	00	_____
539	    	14:23:07	846.766	        941.718		      1538	       602	      	  6	23	7A	60	00	20	4E	  	  	#z__N
540	    	14:23:07	847.266	          0.500		      1410	       582	      	  8	60	7A	60	00	00	00	00	00	z_____
541	    	14:23:09	768.960	       1921.694		      1538	       602	      	  8	23	81	60	00	00	00	21	00	#___!_
542	    	14:23:09	769.640	          0.680		      1410	       582	      	  8	60	81	60	00	00	00	00	00	_____
543	    	14:23:10	944.264	       1174.624		       514	       202	      	  2	1F	00	  	  	  	  	  	  	__
544	    	14:23:10	945.792	          1.528		       386	       182	      	  2	37	92	  	  	  	  	  	  	7’
545	    	14:23:10	946.014	          0.222		      1154	       482	      	  7	B3	FE	FF	FF	37	92	01	  	³þÿÿ7’_
546	    	14:23:10	946.162	          0.148		       642	       282	      	  3	37	92	01	  	  	  	  	  	7’_
547	    	14:23:10	975.627	         29.465		      1154	       482	      	  7	9D	FF	FF	FF	37	92	01	  	ÿÿÿ7’_
548	    	14:23:11	005.602	         29.975		      1154	       482	      	  7	55	02	00	00	37	92	01	  	U___7’_
549	    	14:23:11	035.532	         29.930		      1154	       482	      	  7	0B	06	00	00	37	92	01	  	____7’_
550	    	14:23:11	065.510	         29.978		      1154	       482	      	  7	EA	09	00	00	37	92	01	  	ê___7’_
551	    	14:23:11	095.484	         29.974		      1154	       482	      	  7	C8	0D	00	00	37	92	01	  	È___7’_
552	    	14:23:11	125.794	         30.310		      1154	       482	      	  7	C7	11	00	00	37	92	01	  	Ç___7’_
553	    	14:23:11	155.724	         29.930		      1154	       482	      	  7	A5	15	00	00	37	92	01	  	¥___7’_
554	    	14:23:11	185.700	         29.976		      1154	       482	      	  7	83	19	00	00	37	92	01	  	ƒ___7’_
555	    	14:23:11	215.628	         29.928		      1154	       482	      	  7	62	1D	00	00	37	92	01	  	b___7’_
556	    	14:23:11	245.592	         29.964		      1154	       482	      	  7	1E	21	00	00	37	92	01	  	_!__7’_
557	    	14:23:11	275.528	         29.936		      1154	       482	      	  7	FC	24	00	00	37	92	01	  	ü$__7’_
558	    	14:23:11	305.494	         29.966		      1154	       482	      	  7	D9	28	00	00	37	92	01	  	Ù(__7’_
559	    	14:23:11	335.810	         30.316		      1154	       482	      	  7	D9	2C	00	00	37	92	01	  	Ù,__7’_
560	    	14:23:11	365.736	         29.926		      1154	       482	      	  7	B7	30	00	00	37	92	01	  	·0__7’_
561	    	14:23:11	395.709	         29.973		      1154	       482	      	  7	94	34	00	00	37	92	01	  	”4__7’_
562	    	14:23:11	425.631	         29.922		      1154	       482	      	  7	73	38	00	00	37	92	01	  	s8__7’_
563	    	14:23:11	455.605	         29.974		      1154	       482	      	  7	51	3C	00	00	37	92	01	  	Q<__7’_
564	    	14:23:11	485.531	         29.926		      1154	       482	      	  7	0E	40	00	00	37	92	01	  	_@__7’_
565	    	14:23:11	515.507	         29.976		      1154	       482	      	  7	EC	43	00	00	37	92	01	  	ìC__7’_
566	    	14:23:11	545.479	         29.972		      1154	       482	      	  7	CA	47	00	00	37	92	01	  	ÊG__7’_
567	    	14:23:11	575.679	         30.200		      1154	       482	      	  7	90	4B	00	00	37	92	01	  	K__7’_
568	    	14:23:11	605.723	         30.044		      1154	       482	      	  7	A9	4D	00	00	37	92	01	  	©M__7’_
569	    	14:23:11	629.605	         23.882		       386	       182	      	  2	37	96	  	  	  	  	  	  	7–
570	    	14:23:11	629.764	          0.159		       642	       282	      	  3	37	96	01	  	  	  	  	  	7–_
571	    	14:23:11	635.691	          5.927		      1154	       482	      	  7	22	4E	00	00	37	96	01	  	"N__7–_
572	    	14:23:11	665.507	         29.816		      1154	       482	      	  7	21	4E	00	00	37	96	01	  	!N__7–_
573	    	14:23:11	721.907	         56.400		      1154	       482	      	  7	20	4E	00	00	37	96	01	  	_N__7–_
574	    	14:23:11	751.707	         29.800		      1154	       482	      	  7	20	4E	00	00	37	96	01	  	_N__7–_
575	    	14:23:11	781.491	         29.784		      1154	       482	      	  7	20	4E	00	00	37	96	01	  	_N__7–_
576	    	14:23:11	811.679	         30.188		      1154	       482	      	  7	20	4E	00	00	37	96	01	  	_N__7–_
577	    	14:23:11	841.489	         29.810		      1154	       482	      	  7	21	4E	00	00	37	96	01	  	!N__7–_
578	    	14:23:11	871.709	         30.220		      1154	       482	      	  7	20	4E	00	00	37	96	01	  	_N__7–_
579	    	14:23:13	052.192	       1180.483		      1153	       481	      	  7	D1	07	00	00	37	D6	06	  	Ñ___7Ö_
580	    	14:23:13	081.945	         29.753		      1153	       481	      	  7	D0	07	00	00	37	D6	06	  	Ð___7Ö_
581	    	14:23:13	111.993	         30.048		      1153	       481	      	  7	D0	07	00	00	37	D6	06	  	Ð___7Ö_
582	    	14:23:13	142.019	         30.026		      1153	       481	      	  7	D0	07	00	00	37	D6	06	  	Ð___7Ö_
583	    	14:23:15	170.427	       2028.408		      1539	       603	      	  5	2F	60	60	00	03	  	  	  	/__
584	    	14:23:15	171.171	          0.744		      1411	       583	      	  8	60	60	60	00	00	00	00	00	_____
585	    	14:23:15	171.396	          0.225		      1155	       483	      	  7	A6	FE	FF	FF	37	96	03	  	¦þÿÿ7–_
586	    	14:23:15	171.537	          0.141		       643	       283	      	  3	37	96	03	  	  	  	  	  	7–_
587	    	14:23:15	171.668	          0.131		       387	       183	      	  2	37	96	  	  	  	  	  	  	7–
588	    	14:23:16	140.821	        969.153		      1539	       603	      	  7	23	FF	60	00	00	00	21	  	#ÿ___!
589	    	14:23:16	142.196	          1.375		      1411	       583	      	  8	60	FF	60	00	00	00	00	00	ÿ_____
590	    	14:23:16	144.366	          2.170		      1155	       483	      	  7	A7	FE	FF	FF	37	96	03	  	§þÿÿ7–_
591	    	14:23:16	144.510	          0.144		       387	       183	      	  2	37	86	  	  	  	  	  	  	7†
592	    	14:23:16	144.660	          0.150		       643	       283	      	  3	37	86	03	  	  	  	  	  	7†_
593	    	14:23:16	174.169	         29.509		      1155	       483	      	  7	9C	FF	FF	FF	37	86	03	  	œÿÿÿ7†_
594	    	14:23:16	204.303	         30.134		      1155	       483	      	  7	7F	02	00	00	37	86	03	  	___7†_
595	    	14:23:16	234.192	         29.889		      1155	       483	      	  7	3B	06	00	00	37	86	03	  	;___7†_
596	    	14:23:16	264.346	         30.154		      1155	       483	      	  7	38	0A	00	00	37	86	03	  	8___7†_
597	    	14:23:16	294.199	         29.853		      1155	       483	      	  7	F5	0D	00	00	37	86	03	  	õ___7†_
598	    	14:23:16	324.355	         30.156		      1155	       483	      	  7	F4	11	00	00	37	86	03	  	ô___7†_
599	    	14:23:16	354.204	         29.849		      1155	       483	      	  7	B1	15	00	00	37	86	03	  	±___7†_
600	    	14:23:16	384.365	         30.161		      1155	       483	      	  7	B0	19	00	00	37	86	03	  	°___7†_
601	    	14:23:16	414.247	         29.882		      1155	       483	      	  7	6D	1D	00	00	37	86	03	  	m___7†_
602	    	14:23:16	444.372	         30.125		      1155	       483	      	  7	6C	21	00	00	37	86	03	  	l!__7†_
603	    	14:23:16	474.252	         29.880		      1155	       483	      	  7	4A	25	00	00	37	86	03	  	J%__7†_
604	    	14:23:16	504.375	         30.123		      1155	       483	      	  7	27	29	00	00	37	86	03	  	')__7†_
605	    	14:23:16	534.268	         29.893		      1155	       483	      	  7	07	2D	00	00	37	86	03	  	_-__7†_
606	    	14:23:16	564.388	         30.120		      1155	       483	      	  7	E3	30	00	00	37	86	03	  	ã0__7†_
607	    	14:23:16	594.279	         29.891		      1155	       483	      	  7	C2	34	00	00	37	86	03	  	Â4__7†_
608	    	14:23:16	624.159	         29.880		      1155	       483	      	  7	7E	38	00	00	37	86	03	  	~8__7†_
609	    	14:23:16	654.286	         30.127		      1155	       483	      	  7	7E	3C	00	00	37	86	03	  	~<__7†_
610	    	14:23:16	684.173	         29.887		      1155	       483	      	  7	3A	40	00	00	37	86	03	  	:@__7†_
611	    	14:23:16	714.289	         30.116		      1155	       483	      	  7	3A	44	00	00	37	86	03	  	:D__7†_
612	    	14:23:16	744.182	         29.893		      1155	       483	      	  7	F7	47	00	00	37	86	03	  	÷G__7†_
613	    	14:23:16	774.304	         30.122		      1155	       483	      	  7	F6	4B	00	00	37	86	03	  	öK__7†_
614	    	14:23:16	804.187	         29.883		      1155	       483	      	  7	B3	4F	00	00	37	86	03	  	³O__7†_
615	    	14:23:16	834.310	         30.123		      1155	       483	      	  7	B2	53	00	00	37	86	03	  	²S__7†_
616	    	14:23:16	864.198	         29.888		      1155	       483	      	  7	6F	57	00	00	37	86	03	  	oW__7†_
617	    	14:23:16	894.351	         30.153		      1155	       483	      	  7	6E	5B	00	00	37	86	03	  	n[__7†_
618	    	14:23:16	924.211	         29.860		      1155	       483	      	  7	2B	5F	00	00	37	86	03	  	+___7†_
619	    	14:23:16	954.362	         30.151		      1155	       483	      	  7	2A	63	00	00	37	86	03	  	*c__7†_
620	    	14:23:16	984.216	         29.854		      1155	       483	      	  7	E7	66	00	00	37	86	03	  	çf__7†_
621	    	14:23:17	014.383	         30.167		      1155	       483	      	  7	E6	6A	00	00	37	86	03	  	æj__7†_
622	    	14:23:17	044.266	         29.883		      1155	       483	      	  7	C4	6E	00	00	37	86	03	  	Än__7†_
623	    	14:23:17	074.386	         30.120		      1155	       483	      	  7	A2	72	00	00	37	86	03	  	¢r__7†_
624	    	14:23:17	104.279	         29.893		      1155	       483	      	  7	80	76	00	00	37	86	03	  	€v__7†_
625	    	14:23:17	134.397	         30.118		      1155	       483	      	  7	5E	7A	00	00	37	86	03	  	^z__7†_
626	    	14:23:17	164.288	         29.891		      1155	       483	      	  7	3C	7E	00	00	37	86	03	  	<~__7†_
627	    	14:23:17	194.173	         29.885		      1155	       483	      	  7	F9	81	00	00	37	86	03	  	ù__7†_
628	    	14:23:17	224.293	         30.120		      1155	       483	      	  7	F8	85	00	00	37	86	03	  	ø…__7†_
629	    	14:23:17	254.182	         29.889		      1155	       483	      	  7	B5	89	00	00	37	86	03	  	µ‰__7†_
630	    	14:23:17	284.302	         30.120		      1155	       483	      	  7	B4	8D	00	00	37	86	03	  	´__7†_
631	    	14:23:17	314.189	         29.887		      1155	       483	      	  7	71	91	00	00	37	86	03	  	q‘__7†_
632	    	14:23:17	344.308	         30.119		      1155	       483	      	  7	70	95	00	00	37	86	03	  	p•__7†_
633	    	14:23:17	374.196	         29.888		      1155	       483	      	  7	2D	99	00	00	37	86	03	  	-™__7†_
634	    	14:23:17	404.317	         30.121		      1155	       483	      	  7	2C	9D	00	00	37	86	03	  	,__7†_
635	    	14:23:17	434.205	         29.888		      1155	       483	      	  7	E9	A0	00	00	37	86	03	  	é __7†_
636	    	14:23:17	464.326	         30.121		      1155	       483	      	  7	E8	A4	00	00	37	86	03	  	è¤__7†_
637	    	14:23:17	494.213	         29.887		      1155	       483	      	  7	A6	A8	00	00	37	86	03	  	¦¨__7†_
638	    	14:23:17	524.367	         30.154		      1155	       483	      	  7	A4	AC	00	00	37	86	03	  	¤¬__7†_
639	    	14:23:17	554.216	         29.849		      1155	       483	      	  7	62	B0	00	00	37	86	03	  	b°__7†_
640	    	14:23:17	584.372	         30.156		      1155	       483	      	  7	60	B4	00	00	37	86	03	  	´__7†_
641	    	14:23:17	614.225	         29.853		      1155	       483	      	  7	1D	B8	00	00	37	86	03	  	_¸__7†_
642	    	14:23:17	644.386	         30.161		      1155	       483	      	  7	1C	BC	00	00	37	86	03	  	_¼__7†_
643	    	14:23:17	674.282	         29.896		      1155	       483	      	  7	D9	BF	00	00	37	86	03	  	Ù¿__7†_
644	    	14:23:17	704.397	         30.115		      1155	       483	      	  7	D9	C3	00	00	37	86	03	  	ÙÃ__7†_
645	    	14:23:17	734.282	         29.885		      1155	       483	      	  7	B6	C7	00	00	37	86	03	  	¶Ç__7†_
646	    	14:23:17	764.412	         30.130		      1155	       483	      	  7	95	CB	00	00	37	86	03	  	•Ë__7†_
647	    	14:23:17	794.290	         29.878		      1155	       483	      	  7	72	CF	00	00	37	86	03	  	rÏ__7†_
648	    	14:23:17	824.413	         30.123		      1155	       483	      	  7	51	D3	00	00	37	86	03	  	QÓ__7†_
649	    	14:23:17	854.302	         29.889		      1155	       483	      	  7	2E	D7	00	00	37	86	03	  	.×__7†_
650	    	14:23:17	884.192	         29.890		      1155	       483	      	  7	EB	DA	00	00	37	86	03	  	ëÚ__7†_
651	    	14:23:17	914.307	         30.115		      1155	       483	      	  7	EA	DE	00	00	37	86	03	  	êÞ__7†_
652	    	14:23:17	944.199	         29.892		      1155	       483	      	  7	A7	E2	00	00	37	86	03	  	§â__7†_
653	    	14:23:17	974.316	         30.117		      1155	       483	      	  7	A6	E6	00	00	37	86	03	  	¦æ__7†_
654	    	14:23:18	004.205	         29.889		      1155	       483	      	  7	63	EA	00	00	37	86	03	  	cê__7†_
655	    	14:23:18	034.321	         30.116		      1155	       483	      	  7	62	EE	00	00	37	86	03	  	bî__7†_
656	    	14:23:18	064.210	         29.889		      1155	       483	      	  7	1F	F2	00	00	37	86	03	  	_ò__7†_
657	    	14:23:18	094.326	         30.116		      1155	       483	      	  7	1E	F6	00	00	37	86	03	  	_ö__7†_
658	    	14:23:18	124.221	         29.895		      1155	       483	      	  7	DB	F9	00	00	37	86	03	  	Ûù__7†_
659	    	14:23:18	154.342	         30.121		      1155	       483	      	  7	D9	FD	00	00	37	86	03	  	Ùý__7†_
660	    	14:23:18	184.228	         29.886		      1155	       483	      	  7	97	01	01	00	37	86	03	  	—___7†_
661	    	14:23:18	214.381	         30.153		      1155	       483	      	  7	96	05	01	00	37	86	03	  	–___7†_
662	    	14:23:18	244.229	         29.848		      1155	       483	      	  7	53	09	01	00	37	86	03	  	S___7†_
663	    	14:23:18	274.386	         30.157		      1155	       483	      	  7	52	0D	01	00	37	86	03	  	R___7†_
664	    	14:23:18	304.239	         29.853		      1155	       483	      	  7	0F	11	01	00	37	86	03	  	____7†_
665	    	14:23:18	334.399	         30.160		      1155	       483	      	  7	0E	15	01	00	37	86	03	  	____7†_
666	    	14:23:18	364.290	         29.891		      1155	       483	      	  7	EC	18	01	00	37	86	03	  	ì___7†_
667	    	14:23:18	394.410	         30.120		      1155	       483	      	  7	CA	1C	01	00	37	86	03	  	Ê___7†_
668	    	14:23:18	424.301	         29.891		      1155	       483	      	  7	A8	20	01	00	37	86	03	  	¨___7†_
669	    	14:23:18	454.419	         30.118		      1155	       483	      	  7	85	24	01	00	37	86	03	  	…$__7†_
670	    	14:23:18	484.306	         29.887		      1155	       483	      	  7	64	28	01	00	37	86	03	  	d(__7†_
671	    	14:23:18	514.189	         29.883		      1155	       483	      	  7	21	2C	01	00	37	86	03	  	!,__7†_
672	    	14:23:18	544.315	         30.126		      1155	       483	      	  7	20	30	01	00	37	86	03	  	_0__7†_
673	    	14:23:18	574.204	         29.889		      1155	       483	      	  7	DD	33	01	00	37	86	03	  	Ý3__7†_
674	    	14:23:18	604.320	         30.116		      1155	       483	      	  7	DC	37	01	00	37	86	03	  	Ü7__7†_
675	    	14:23:18	634.207	         29.887		      1155	       483	      	  7	99	3B	01	00	37	86	03	  	™;__7†_
676	    	14:23:18	664.332	         30.125		      1155	       483	      	  7	98	3F	01	00	37	86	03	  	˜?__7†_
677	    	14:23:18	694.214	         29.882		      1155	       483	      	  7	55	43	01	00	37	86	03	  	UC__7†_
678	    	14:23:18	724.333	         30.119		      1155	       483	      	  7	54	47	01	00	37	86	03	  	TG__7†_
679	    	14:23:18	754.221	         29.888		      1155	       483	      	  7	10	4B	01	00	37	86	03	  	_K__7†_
680	    	14:23:18	784.340	         30.119		      1155	       483	      	  7	10	4F	01	00	37	86	03	  	_O__7†_
681	    	14:23:18	814.231	         29.891		      1155	       483	      	  7	CD	52	01	00	37	86	03	  	ÍR__7†_
682	    	14:23:18	844.387	         30.156		      1155	       483	      	  7	CC	56	01	00	37	86	03	  	ÌV__7†_
683	    	14:23:18	874.238	         29.851		      1155	       483	      	  7	89	5A	01	00	37	86	03	  	‰Z__7†_
684	    	14:23:18	904.394	         30.156		      1155	       483	      	  7	88	5E	01	00	37	86	03	  	ˆ^__7†_
685	    	14:23:18	934.247	         29.853		      1155	       483	      	  7	45	62	01	00	37	86	03	  	Eb__7†_
686	    	14:23:18	964.413	         30.166		      1155	       483	      	  7	44	66	01	00	37	86	03	  	Df__7†_
687	    	14:23:18	994.296	         29.883		      1155	       483	      	  7	22	6A	01	00	37	86	03	  	"j__7†_
688	    	14:23:19	024.419	         30.123		      1155	       483	      	  7	00	6E	01	00	37	86	03	  	_n__7†_
689	    	14:23:19	054.303	         29.884		      1155	       483	      	  7	DE	71	01	00	37	86	03	  	Þq__7†_
690	    	14:23:19	084.424	         30.121		      1155	       483	      	  7	BD	75	01	00	37	86	03	  	½u__7†_
691	    	14:23:19	114.317	         29.893		      1155	       483	      	  7	9A	79	01	00	37	86	03	  	šy__7†_
692	    	14:23:19	144.207	         29.890		      1155	       483	      	  7	58	7D	01	00	37	86	03	  	X}__7†_
693	    	14:23:19	174.328	         30.121		      1155	       483	      	  7	56	81	01	00	37	86	03	  	V__7†_
694	    	14:23:19	205.316	         30.988		      1155	       483	      	  7	56	85	01	00	37	86	03	  	V…__7†_
695	    	14:23:19	235.201	         29.885		      1155	       483	      	  7	12	89	01	00	37	86	03	  	_‰__7†_
696	    	14:23:19	265.325	         30.124		      1155	       483	      	  7	12	8D	01	00	37	86	03	  	___7†_
697	    	14:23:19	295.222	         29.897		      1155	       483	      	  7	CE	90	01	00	37	86	03	  	Î__7†_
698	    	14:23:19	325.335	         30.113		      1155	       483	      	  7	CE	94	01	00	37	86	03	  	Î”__7†_
699	    	14:23:19	355.229	         29.894		      1155	       483	      	  7	8A	98	01	00	37	86	03	  	Š˜__7†_
700	    	14:23:19	355.795	          0.566		      1539	       603	      	  7	23	FF	60	00	00	00	00	  	#ÿ____
701	    	14:23:19	357.239	          1.444		      1411	       583	      	  8	60	FF	60	00	00	00	00	00	ÿ_____
702	    	14:23:19	385.435	         28.196		      1155	       483	      	  7	B1	9B	01	00	37	86	03	  	±›__7†_
703	    	14:23:19	415.343	         29.908		      1155	       483	      	  7	F0	9C	01	00	37	86	03	  	ðœ__7†_
704	    	14:23:19	423.353	          8.010		       387	       183	      	  2	37	96	  	  	  	  	  	  	7–
705	    	14:23:19	423.501	          0.148		       643	       283	      	  3	37	96	03	  	  	  	  	  	7–_
706	    	14:23:19	445.343	         21.842		      1155	       483	      	  7	08	9D	01	00	37	96	03	  	___7–_
707	    	14:23:19	453.308	          7.965		       387	       183	      	  2	37	96	  	  	  	  	  	  	7–
708	    	14:23:19	453.456	          0.148		       643	       283	      	  3	37	96	03	  	  	  	  	  	7–_
709	    	14:23:19	475.436	         21.980		      1155	       483	      	  7	0A	9D	01	00	37	96	03	  	___7–_
710	    	14:23:19	483.270	          7.834		       387	       183	      	  2	37	96	  	  	  	  	  	  	7–
711	    	14:23:19	483.424	          0.154		       643	       283	      	  3	37	96	03	  	  	  	  	  	7–_
712	    	14:23:21	766.440	       2283.016		      1155	       483	      	  7	0B	9D	01	00	37	96	03	  	___7–_
713	    	14:23:21	766.594	          0.154		       387	       183	      	  2	37	86	  	  	  	  	  	  	7†
714	    	14:23:21	766.744	          0.150		       643	       283	      	  3	37	86	03	  	  	  	  	  	7†_
715	    	14:23:21	796.393	         29.649		       387	       183	      	  2	37	96	  	  	  	  	  	  	7–
716	    	14:23:21	796.611	          0.218		      1155	       483	      	  7	0A	9D	01	00	37	96	03	  	___7–_
717	    	14:23:21	796.759	          0.148		       643	       283	      	  3	37	96	03	  	  	  	  	  	7–_
718	    	14:23:21	826.368	         29.609		       387	       183	      	  2	37	96	  	  	  	  	  	  	7–
719	    	14:23:21	826.584	          0.216		      1155	       483	      	  7	0B	9D	01	00	37	96	03	  	___7–_
720	    	14:23:21	826.732	          0.148		       643	       283	      	  3	37	96	03	  	  	  	  	  	7–_
721	    	14:23:21	856.202	         29.470		       387	       183	      	  2	37	96	  	  	  	  	  	  	7–
722	    	14:23:21	856.426	          0.224		      1155	       483	      	  7	0B	9D	01	00	37	96	03	  	___7–_
723	    	14:23:21	856.572	          0.146		       643	       283	      	  3	37	96	03	  	  	  	  	  	7–_

`
