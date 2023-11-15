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
          Name: 'Device profile defined inputs',
          BitSize: 8
        },
        {
          Index: '#x208F_02',
          Name: 'Manufacturer specific inputs',
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
          Name: 'Min position limit',
          BitSize: 32,
          Info: {
            DefaultData: 2147483648
          }
        },
        {
          Index: '#x607D_02',
          Name: 'Max position limit',
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
    Title: 'Statusword in external reference speed mode',
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
        bit: '13-12',
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
    Index: '60FE2',
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
        info: 'Reserved'
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
        values: [
          { value: '000', info: '9600' },
          { value: '001', info: '19200' },
          { value: '010', info: '38400' },
          { value: '011', info: '56600' },
          { value: '100', info: '115200' },
          { value: '101', info: 'Reserved' },
          { value: '110', info: 'Reserved' },
          { value: '111', info: 'Reserved' }
        ]
      },
      { bit: '10', info: 'Reserved' },
      {
        bit: '9-8',
        info: 'SPIBD. SPI baud rate',
        values: [
          { value: '00', info: '1 MHz' },
          { value: '01', info: '2 MHz' },
          { value: '10', info: '5 MHz' },
          { value: '11', info: 'Reserved' }
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
      { bit: '15-14', info: 'Reserved' },
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
      { bit: '15-7', info: 'Reserved' },
      {
        bit: '6',
        zero: 'No position wraparound',
        one: 'Position wraparound has occurred',
        info: 'POSWRP. Position wraparound (for F514G and F515G or newer)'
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
        info: 'BISSACKNP. Biss ack not present'
      },
      {
        bit: '2',
        zero: 'No error',
        one: 'Biss data error bit',
        info: 'BISSDEB. Biss data error bit'
      },
      {
        bit: '1',
        zero: 'No error',
        one: 'Biss data warning bit',
        info: 'BISSDWB. Biss data warning bit'
      },
      {
        bit: '0',
        zero: 'No error',
        one: 'BiSS CRC error',
        info: 'BISSCRCERR. BiSS CRC error'
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
      { bit: '12', info: 'Reserved' },
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
