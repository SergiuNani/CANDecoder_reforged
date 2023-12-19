export const MessageListRs232ToVerify = `

08 10 00 90 B4 03 66 03 67 2F //(var_i1),dm =var_i2;
08 10 00 90 B8 03 66 03 67 33 //(var_i1),spi =var_i2;
08 10 00 90 B0 03 66 03 67 2B //(var_i1),pm =var_i2;
//
08 10 00 90 B4 03 66 03 67 2F //(var_i1),dm =var_i2;
08 10 00 90 B5 03 66 02 9E 66 //(var_i1),dm = cpos;
08 10 00 90 A4 03 66 12 34 FB //(var_i1),dm =0x1234;
08 10 00 90 A4 03 66 12 34 FB //(var_i1),dm =4660;
0A 10 00 90 A5 03 66 23 45 00 01 21 //(var_i1),dm =0x12345;
0A 10 00 90 A5 03 66 56 78 12 34 CC //(var_i1),dm =0x12345678;
08 10 00 90 34 03 66 03 67 AF //(var_i1+),dm =var_i2;
08 10 00 90 35 03 66 02 9E E6 //(var_i1+),dm = cpos;
08 10 00 90 24 03 66 12 34 7B //(var_i1+),dm =0x1234;
08 10 00 90 24 03 66 12 34 7B //(var_i1+),dm =4660;
0A 10 00 90 25 03 66 23 45 00 01 A1 //(var_i1+),dm =0x12345;
0A 10 00 90 25 03 66 56 78 12 34 4C //(var_i1+),dm =0x12345678;
//
08 10 00 90 14 03 66 03 67 8F //var_i1,dm= var_i2
08 10 00 90 04 03 66 12 34 5B //var_i1,dm= 0x1234
08 10 00 90 15 03 68 02 9E C8 //var_lf,dm= cpos
0A 10 00 90 05 03 68 56 78 12 34 2E //var_lf,dm= 0x12345678
0A 10 00 90 05 03 68 23 45 00 01 83 //var_lf,dm= 0x12345
0A 10 00 90 05 03 68 78 91 34 56 AD //var_lf,dm= 0x1234567891
0A 10 00 91 05 03 68 78 91 34 56 AD //var_lf,ERROR
//
08 10 00 91 84 03 67 03 66 00  //var_i1 = (var_i2),dm
08 10 00 91 80 03 67 03 66 FC  //var_i1 = (var_i2),pm
08 10 00 91 88 03 67 03 66 04  //var_i1 = (var_i2),spi
08 10 00 91 04 03 67 03 66 80  //var_i1 = (var_i2+),dm
08 10 00 91 00 03 67 03 66 7C  //var_i1 = (var_i2+),pm
08 10 00 91 08 03 67 03 66 84  //var_i1 = (var_i2+),spi
 //
08 10 00 91 85 03 67 03 68 03  //var_lf = (var_i2),dm
08 10 00 91 81 03 67 03 68 FF  //var_lf = (var_i2),pm
08 10 00 91 89 03 67 03 68 07  //var_lf = (var_i2),spi
08 10 00 91 05 03 67 03 68 83  //var_lf = (var_i2+),dm
08 10 00 91 01 03 67 03 68 7F  //var_lf = (var_i2+),pm
08 10 00 91 09 03 67 03 68 87  //var_lf = (var_i2+),spi

08 10 00 89 61 02 9E 03 66 0B  //cpos = var_i1<<1
08 10 00 89 62 02 9E 03 66 0C  //cpos = var_i1<<2
08 10 00 89 63 02 9E 03 66 0D  //cpos = var_i1<<3
08 10 00 89 60 02 9E 03 66 0A  //cpos = var_i1<<0
08 10 00 89 69 02 9E 03 66 13  //cpos = var_i1<<9
08 10 00 89 70 02 9E 03 66 1A  //cpos = var_i1<<16
06 10 00 89 21 02 28 EA  //apos<<=1
06 10 00 89 2A 02 28 F3  //apos<<=10
06 10 00 89 01 02 28 CA  //apos>>=1
06 10 00 89 0A 02 28 D3  //apos>>=10
04 10 00 88 A4 40  // prod<<=4
04 10 00 88 85 21  // prod >>=5
06 10 00 88 2C 03 66 33  // var_i1<<=12
06 10 00 88 05 03 66 0C  // var_i1>>=5

0A 10 00 5C 00 03 66 12 22 00 55 68 /SRBL var_i1, 0x1222, 0x55

08 10 00 8C 22 03 66 00 05 34 //var_i1*0x5<<2
08 10 00 8C 03 03 66 00 05 15 //var_i1*0x5>>3
08 10 00 8C A7 03 66 03 67 1E //var_i1*var_i2<<7
08 10 00 8C 88 03 66 03 67 FF //var_i1*var_i2>>8
08 10 00 8D 22 03 68 00 05 37  //var_lf*0x5<<2
08 10 00 8D 03 03 68 00 05 18  //var_lf*0x5>>3
08 10 00 8D A7 03 68 03 67 21  //var_lf*var_i2<<7
08 10 00 8D 88 03 68 03 67 02  //var_lf*var_i2>>8
04 00 10 04 04 1C //ret 
04 00 10 04 08 20 //wait!
04 00 10 04 10 28 //DINT
04 00 10 04 02 1A //reset
04 00 10 04 A0 B8 //DIS2CAPI
04 00 10 04 81 99 //DISCAPI
04 00 10 04 20 38 //EN2CAPI0
04 00 10 04 20 38 //EN2CAPI0
04 00 10 05 04 1D //reti;
04 00 10 05 10 29 //EINT;
04 00 10 05 20 39 //EN2CAPI1
04 00 10 05 01 1A //ENCAPI1
08 00 10 59 09 B7 C6 87 06 84 //mode cs 
08 00 10 59 09 B7 C5 87 05 82 //mode gs 
08 00 10 59 09 BF C2 87 02 84 //mode pc 
08 00 10 59 09 BF C1 87 01 82 //mode pp 
08 00 10 59 09 FF C1 87 07 C8 //mode psc 
08 00 10 59 09 FF C0 87 0A CA //mode pt 
08 00 10 59 09 FF C1 87 09 CA //mode pvt 
08 00 10 59 09 BB C2 83 02 7C //mode sc 
08 00 10 59 09 B3 C0 83 00 70 //mode se 
08 00 10 59 09 BB C1 83 01 7A //mode sp 
08 00 10 59 09 B1 C3 81 03 72 //mode tc  
08 00 10 59 09 B1 E0 81 20 AC //mode tef 
08 00 10 59 09 B1 C8 81 08 7C //mode tt 
08 00 10 59 09 B0 C3 80 03 70 //mode vc 
08 00 10 59 09 B0 C0 80 00 6A //mode ves  
08 00 10 59 09 B0 C8 80 08 7A //mode vt 
08 00 10 59 09 FF FF 20 00 98 //cpa 
08 00 10 59 09 DF FF 00 00 58 //cpr 
08 00 10 59 09 FF 3F 00 00 B8 //extref 0 
08 00 10 59 09 FF 7F 00 40 38 //extref 1 
08 00 10 59 09 FF BF 00 80 B8 //extref 2 
08 00 10 59 09 EF FF 00 00 68 //reg_off 
08 00 10 59 09 FF FF 10 00 88 //reg_on 
08 00 10 59 09 BF FF 00 00 38 //TUM0 
08 00 10 59 09 FF FF 40 00 B8 //TUM1 
08 00 10 59 09 FF FF 08 00 80 //sgn
08 00 10 59 09 F7 FF 00 00 70 //rgm
08 00 10 DC 01 03 68 03 66 C9 //VAR_LF/=VAR_I1

08 00 10 71 92 02 28 02 28 6F  //!ALPO apos
0A 00 10 70 92 02 28 56 78 12 34 5A  //!ALPO 0X12345678
0A 00 10 70 92 02 28 12 34 00 00 8C  //!ALPO 0X1234
08 00 10 71 92 09 88 02 28 D6  //!AMPO apos
0A 00 10 70 92 09 88 56 78 12 34 C1  //!AMPO 0X12345678
08 00 10 71 83 02 28 02 28 60  //!ALPU apos
0A 00 10 70 83 02 28 56 78 12 34 4B  //!ALPU 0X12345678
08 00 10 71 83 09 88 02 28 C7  //!AMPU apos
0A 00 10 70 83 09 88 56 78 12 34 B2  //!AMPU 0X12345678
08 00 10 71 98 02 C0 03 68 4E  //!AT var_lf
0A 00 10 70 98 02 C0 56 78 12 34 F8  //!AT 0x12345678
04 00 10 70 0E 92  //!CAP
06 00 10 70 DB 00 80 E1  //!IN#7 0
06 00 10 70 DA 00 04 64  //!IN#2 1
04 00 10 70 0D 91  //!lsp
04 00 10 70 0C 90  //!lsn
04 00 10 70 0F 93 //!MC
08 00 10 71 90 02 AE 03 68 34  //!RO var_lf;
0A 00 10 70 90 02 AE 12 45 00 00 21  //!RO 0x1245
08 00 10 71 90 02 AE 03 68 34  //!PRO var_lf;
0A 00 10 70 90 02 AE 12 45 00 00 21  //!PRO 0x1245
08 00 10 71 90 02 AE 03 68 34  //!SRO var_lf;
0A 00 10 70 90 02 AE 12 45 00 00 21  //!SRO 0x1245
08 00 10 71 90 02 AE 03 68 34  //!TRO var_lf;
0A 00 10 70 90 02 AE 00 00 12 45 21  //!TRO 0x1245
08 00 10 71 94 02 BA 02 28 03  //!RPO apos;
0A 00 10 70 94 02 BA 28 96 00 01 99  //!RPO 0x12896
08 00 10 71 94 02 BA 02 28 03  //!RLPO apos;
0A 00 10 70 94 02 BA 28 96 00 01 99  //!RLPO 0x12896
08 00 10 71 94 09 88 02 28 D8  //!RMPO apos;
0A 00 10 70 94 09 88 28 96 00 01 6E  //!RMPO 0x12896
08 00 10 71 85 02 BA 02 9E 6A  //!RPU cpos
0A 00 10 70 85 02 BA 00 12 00 00 DD  //!RPU 0x12
08 00 10 71 85 02 BA 02 9E 6A  //!RLPU cpos
0A 00 10 70 85 02 BA 00 12 00 00 DD  //!RLPU 0x12
08 00 10 71 85 09 88 02 9E 3F  //!RMPU cpos
0A 00 10 70 85 09 88 00 12 00 00 B2  //!RMPU 0x12

06 10 10 2D 68 02 28 E5 //var_lf =apos
08 10 10 25 68 00 12 00 00 C7 //var_lf =0x12
08 10 10 26 1E 00 12 00 00 7E //CAPPOS2=0x12
06 10 10 21 66 00 12 BF // var_i1 = 0x12
06 10 10 21 69 00 12 C2 // var_lf(H) = 0x12
06 10 10 21 68 00 12 C1 // var_lf(L)=0x12
06 10 10 29 66 03 67 1F // var_i1= var_i2
06 10 10 29 66 03 69 21 // var_i1 =var_lf(H)
06 10 10 29 66 03 68 20 // var_i1 = var_lf(L)
06 10 10 29 69 03 66 21 // var_lf(H) =var_i1
06 10 10 29 68 03 66 20 // var_lf(L) =var_i1
06 10 10 29 0C 03 66 C4 // AAR= var_i1
06 10 10 2B 13 03 66 CD // AAR_table= var_i1
06 10 10 28 FF 03 66 B6 // ACCPL= var_i1
06 10 10 28 C7 03 66 7E // ACC_LIMIT= var_i1
06 10 10 2B 12 03 66 CC // ACR= var_i1
06 10 10 28 3C 03 66 F3 // AD0= var_i1
06 10 10 28 44 03 66 FB // AD0OFF= var_i1
06 10 10 28 3D 03 66 F4 // AD1= var_i1
06 10 10 28 45 03 66 FC // AD1OFF= var_i1
06 10 10 28 3E 03 66 F5 // AD2= var_i1
06 10 10 2B DD 03 66 97 // AD2FIL_CFG= var_i1
06 10 10 2B DC 03 66 96 // AD2FIL_VAL= var_i1
06 10 10 28 46 03 66 FD // AD2OFF= var_i1
06 10 10 28 3F 03 66 F6 // AD3= var_i1
06 10 10 28 47 03 66 FE // AD3OFF= var_i1
06 10 10 28 40 03 66 F7 // AD4= var_i1
06 10 10 28 48 03 66 FF // AD4OFF= var_i1
06 10 10 28 41 03 66 F8 // AD5= var_i1
06 10 10 28 49 03 66 00 // AD5OFF= var_i1
06 10 10 28 42 03 66 F9 // AD6= var_i1
06 10 10 28 4A 03 66 01 // AD6OFF= var_i1
06 10 10 28 43 03 66 FA // AD7= var_i1
06 10 10 28 4B 03 66 02 // AD7OFF= var_i1
06 10 10 2A 0B 03 66 C4 // AD8= var_i1
06 10 10 2B ED 03 66 A7 // AD9= var_i1
06 10 10 2A 55 03 66 0E // AEI_CLKDIV= var_i1
06 10 10 28 FA 03 66 B1 // AEI_CMPTIME= var_i1
06 10 10 2A 54 03 66 0D // AEI_PER= var_i1
06 10 10 2A AF 03 66 68 // ANALOGUEREFERENCE= var_i1
06 10 10 2A 9C 03 66 55 // ANGLE_INC= var_i1
06 10 10 2B DE 03 66 98 // ASPD_BQ_INI= var_i1
06 10 10 28 01 03 66 B8 // ASR= var_i1
06 10 10 28 A7 03 66 5E // ASR2= var_i1
06 10 10 20 FD 00 21 64 //komega = 0x21
06 10 10 23 B7 00 21 21 //HOMING_NR = 0x21
06 10 10 21 9F 00 21 07 //HOME_NR_6098 =0x21
06 10 10 20 39 00 21 A0 //IA= 0x21
06 10 10 22 01 00 21 6A //ENCRES = 0x21
//
06 10 10 21 66 00 12 BF  //var_i1 = 0x12
08 10 10 25 68 00 12 00 00 C7  //var_lf = 0x12
06 10 10 29 66 03 67 1F  //var_i1 =var_i2
06 10 10 2D 68 02 28 E5  //var_lf = apos
08 10 10 25 68 00 12 00 00 C7  //var_lf = 0x12
06 10 10 29 66 03 69 21  //var_i1 = var_lf(H)
06 10 10 29 66 03 68 20  //var_i1 = var_lf(L)
06 10 10 29 69 03 66 21  //var_lf(H) = var_i1
06 10 10 29 68 03 66 20  //var_lf(L) = var_i1
08 10 10 25 68 56 78 12 34 C9 //var_lf = 0x12345678
 //
06 10 10 31 66 03 67 27  //var_i1 = - var_i2
06 10 10 35 68 02 28 ED  //var_lf =-apos
06 10 10 39 66 00 12 D7  //var_i1 += 0x12
08 10 10 3D 68 00 12 00 00 DF  //var_lf += 0x12

06 10 10 41 66 03 67 37  //var_i1 += var_i2
06 10 10 45 68 02 28 FD  //var_lf += apos
06 10 10 49 66 00 12 E7  //var_i1 -= 0x12
08 10 10 4C 28 00 12 00 00 AE  //apos -= 0x12

06 10 10 51 66 03 67 47  //var_i1 -= var_i2
06 10 10 54 28 02 9E 42  //apos -= cpos
08 10 10 59 66 12 34 23 45 95  //SRB var_i1,0x1234, 0x2345

06 00 10 1C 01 40 2B 9E // CALLS label , 0x402B
04 10 10 1C 04 44 //FAULTR
04 10 10 1C 08 48 //SAVE
06 00 10 76 01 03 66 F6 //call var_i1
06 10 10 76 01 03 66 06 /call var_i1
06 10 10 76 00 03 66 05 /goto var_i1
`

export const Hardcoded_VerifyRS232 = [
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
    msgNr: 3,
    OriginalMessage: '08 10 00 90 B4 03 66 03 67 2F //(var_i1),dm =var_i2;',
    CobID: 'RW=?',
    FrameData: '08100090B4036603672F',
    type: 'RW=?',
    AxisID: 'All',
    CS: '90B4',
    Object: '-',
    ObjectName: '-',
    Data: '0366, DM = 0367',
    Interpretation: '(VAR_I1), DM = VAR_I2 ',
    errorStatus: '-'
  },
  {
    msgNr: 4,
    OriginalMessage: '08 10 00 90 B8 03 66 03 67 33 //(var_i1),spi =var_i2;',
    CobID: 'RW=?',
    FrameData: '08100090B80366036733',
    type: 'RW=?',
    AxisID: 'All',
    CS: '90B8',
    Object: '-',
    ObjectName: '-',
    Data: '0366, SPI = 0367',
    Interpretation: '(VAR_I1), SPI = VAR_I2 ',
    errorStatus: '-'
  },
  {
    msgNr: 5,
    OriginalMessage: '08 10 00 90 B0 03 66 03 67 2B //(var_i1),pm =var_i2;',
    CobID: 'RW=?',
    FrameData: '08100090B0036603672B',
    type: 'RW=?',
    AxisID: 'All',
    CS: '90B0',
    Object: '-',
    ObjectName: '-',
    Data: '0366, PM = 0367',
    Interpretation: '(VAR_I1), PM = VAR_I2 ',
    errorStatus: '-'
  },
  {
    msgNr: 6,
    OriginalMessage: '//',
    CobID: 'xx',
    FrameData: '-',
    type: 'xx',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: 'Can`t extract data from this row',
    Data: '-',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 7,
    OriginalMessage: '08 10 00 90 B4 03 66 03 67 2F //(var_i1),dm =var_i2;',
    CobID: 'RW=?',
    FrameData: '08100090B4036603672F',
    type: 'RW=?',
    AxisID: 'All',
    CS: '90B4',
    Object: '-',
    ObjectName: '-',
    Data: '0366, DM = 0367',
    Interpretation: '(VAR_I1), DM = VAR_I2 ',
    errorStatus: '-'
  },
  {
    msgNr: 8,
    OriginalMessage: '08 10 00 90 B5 03 66 02 9E 66 //(var_i1),dm = cpos;',
    CobID: 'RW=?',
    FrameData: '08100090B50366029E66',
    type: 'RW=?',
    AxisID: 'All',
    CS: '90B5',
    Object: '-',
    ObjectName: '-',
    Data: '0366, DM = 029E',
    Interpretation: '(VAR_I1), DM = CPOS ',
    errorStatus: '-'
  },
  {
    msgNr: 9,
    OriginalMessage: '08 10 00 90 A4 03 66 12 34 FB //(var_i1),dm =0x1234;',
    CobID: 'RW=?',
    FrameData: '08100090A403661234FB',
    type: 'RW=?',
    AxisID: 'All',
    CS: '90A4',
    Object: '-',
    ObjectName: '-',
    Data: '0366, DM = 1234',
    Interpretation: '(VAR_I1), DM = 0x1234 (4660) ',
    errorStatus: '-'
  },
  {
    msgNr: 10,
    OriginalMessage: '08 10 00 90 A4 03 66 12 34 FB //(var_i1),dm =4660;',
    CobID: 'RW=?',
    FrameData: '08100090A403661234FB',
    type: 'RW=?',
    AxisID: 'All',
    CS: '90A4',
    Object: '-',
    ObjectName: '-',
    Data: '0366, DM = 1234',
    Interpretation: '(VAR_I1), DM = 0x1234 (4660) ',
    errorStatus: '-'
  },
  {
    msgNr: 11,
    OriginalMessage: '0A 10 00 90 A5 03 66 23 45 00 01 21 //(var_i1),dm =0x12345;',
    CobID: 'RW=?',
    FrameData: '0A100090A503662345000121',
    type: 'RW=?',
    AxisID: 'All',
    CS: '90A5',
    Object: '-',
    ObjectName: '-',
    Data: '0366, DM = 00012345',
    Interpretation: '(VAR_I1), DM = 0x00012345 (74565) ',
    errorStatus: '-'
  },
  {
    msgNr: 12,
    OriginalMessage: '0A 10 00 90 A5 03 66 56 78 12 34 CC //(var_i1),dm =0x12345678;',
    CobID: 'RW=?',
    FrameData: '0A100090A5036656781234CC',
    type: 'RW=?',
    AxisID: 'All',
    CS: '90A5',
    Object: '-',
    ObjectName: '-',
    Data: '0366, DM = 12345678',
    Interpretation: '(VAR_I1), DM = 0x12345678 (305419896) ',
    errorStatus: '-'
  },
  {
    msgNr: 13,
    OriginalMessage: '08 10 00 90 34 03 66 03 67 AF //(var_i1+),dm =var_i2;',
    CobID: 'RW=?',
    FrameData: '081000903403660367AF',
    type: 'RW=?',
    AxisID: 'All',
    CS: '9034',
    Object: '-',
    ObjectName: '-',
    Data: '0366+, DM = 0367',
    Interpretation: '(VAR_I1+), DM = VAR_I2 ',
    errorStatus: '-'
  },
  {
    msgNr: 14,
    OriginalMessage: '08 10 00 90 35 03 66 02 9E E6 //(var_i1+),dm = cpos;',
    CobID: 'RW=?',
    FrameData: '08100090350366029EE6',
    type: 'RW=?',
    AxisID: 'All',
    CS: '9035',
    Object: '-',
    ObjectName: '-',
    Data: '0366+, DM = 029E',
    Interpretation: '(VAR_I1+), DM = CPOS ',
    errorStatus: '-'
  },
  {
    msgNr: 15,
    OriginalMessage: '08 10 00 90 24 03 66 12 34 7B //(var_i1+),dm =0x1234;',
    CobID: 'RW=?',
    FrameData: '0810009024036612347B',
    type: 'RW=?',
    AxisID: 'All',
    CS: '9024',
    Object: '-',
    ObjectName: '-',
    Data: '0366+, DM = 1234',
    Interpretation: '(VAR_I1+), DM = 0x1234 (4660) ',
    errorStatus: '-'
  },
  {
    msgNr: 16,
    OriginalMessage: '08 10 00 90 24 03 66 12 34 7B //(var_i1+),dm =4660;',
    CobID: 'RW=?',
    FrameData: '0810009024036612347B',
    type: 'RW=?',
    AxisID: 'All',
    CS: '9024',
    Object: '-',
    ObjectName: '-',
    Data: '0366+, DM = 1234',
    Interpretation: '(VAR_I1+), DM = 0x1234 (4660) ',
    errorStatus: '-'
  },
  {
    msgNr: 17,
    OriginalMessage: '0A 10 00 90 25 03 66 23 45 00 01 A1 //(var_i1+),dm =0x12345;',
    CobID: 'RW=?',
    FrameData: '0A10009025036623450001A1',
    type: 'RW=?',
    AxisID: 'All',
    CS: '9025',
    Object: '-',
    ObjectName: '-',
    Data: '0366+, DM = 00012345',
    Interpretation: '(VAR_I1+), DM = 0x00012345 (74565) ',
    errorStatus: '-'
  },
  {
    msgNr: 18,
    OriginalMessage: '0A 10 00 90 25 03 66 56 78 12 34 4C //(var_i1+),dm =0x12345678;',
    CobID: 'RW=?',
    FrameData: '0A100090250366567812344C',
    type: 'RW=?',
    AxisID: 'All',
    CS: '9025',
    Object: '-',
    ObjectName: '-',
    Data: '0366+, DM = 12345678',
    Interpretation: '(VAR_I1+), DM = 0x12345678 (305419896) ',
    errorStatus: '-'
  },
  {
    msgNr: 19,
    OriginalMessage: '//',
    CobID: 'xx',
    FrameData: '-',
    type: 'xx',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: 'Can`t extract data from this row',
    Data: '-',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 20,
    OriginalMessage: '08 10 00 90 14 03 66 03 67 8F //var_i1,dm= var_i2',
    CobID: 'RW=?',
    FrameData: '0810009014036603678F',
    type: 'RW=?',
    AxisID: 'All',
    CS: '9014',
    Object: '-',
    ObjectName: '-',
    Data: '0x0366,dm= 0x0367',
    Interpretation: 'VAR_I1,dm= VAR_I2',
    errorStatus: '-'
  },
  {
    msgNr: 21,
    OriginalMessage: '08 10 00 90 04 03 66 12 34 5B //var_i1,dm= 0x1234',
    CobID: 'RW=?',
    FrameData: '0810009004036612345B',
    type: 'RW=?',
    AxisID: 'All',
    CS: '9004',
    Object: '-',
    ObjectName: '-',
    Data: '0x0366,dm= 0x1234',
    Interpretation: 'VAR_I1,dm= 0x1234 (4660)',
    errorStatus: '-'
  },
  {
    msgNr: 22,
    OriginalMessage: '08 10 00 90 15 03 68 02 9E C8 //var_lf,dm= cpos',
    CobID: 'RW=?',
    FrameData: '08100090150368029EC8',
    type: 'RW=?',
    AxisID: 'All',
    CS: '9015',
    Object: '-',
    ObjectName: '-',
    Data: '0x0368,dm= 0x029E',
    Interpretation: 'VAR_LF,dm= CPOS',
    errorStatus: '-'
  },
  {
    msgNr: 23,
    OriginalMessage: '0A 10 00 90 05 03 68 56 78 12 34 2E //var_lf,dm= 0x12345678',
    CobID: 'RW=?',
    FrameData: '0A100090050368567812342E',
    type: 'RW=?',
    AxisID: 'All',
    CS: '9005',
    Object: '-',
    ObjectName: '-',
    Data: '0x0368,dm= 0x12345678',
    Interpretation: 'VAR_LF,dm= 0x12345678 (305419896)',
    errorStatus: '-'
  },
  {
    msgNr: 24,
    OriginalMessage: '0A 10 00 90 05 03 68 23 45 00 01 83 //var_lf,dm= 0x12345',
    CobID: 'RW=?',
    FrameData: '0A1000900503682345000183',
    type: 'RW=?',
    AxisID: 'All',
    CS: '9005',
    Object: '-',
    ObjectName: '-',
    Data: '0x0368,dm= 0x00012345',
    Interpretation: 'VAR_LF,dm= 0x00012345 (74565)',
    errorStatus: '-'
  },
  {
    msgNr: 25,
    OriginalMessage: '0A 10 00 90 05 03 68 78 91 34 56 AD //var_lf,dm= 0x1234567891',
    CobID: 'RW=?',
    FrameData: '0A10009005036878913456AD',
    type: 'RW=?',
    AxisID: 'All',
    CS: '9005',
    Object: '-',
    ObjectName: '-',
    Data: '0x0368,dm= 0x34567891',
    Interpretation: 'VAR_LF,dm= 0x34567891 (878082193)',
    errorStatus: '-'
  },
  {
    msgNr: 26,
    OriginalMessage: '0A 10 00 91 05 03 68 78 91 34 56 AD //var_lf,ERROR',
    CobID: 'RW=?',
    FrameData: '0A10009105036878913456AD',
    type: 'RW=?',
    AxisID: '-',
    CS: '9105',
    Object: '-',
    ObjectName: "Checksum 173 and calculated 174 don't match",
    Data: '-',
    Interpretation: 'Checksum doesn`t match',
    errorStatus: 'error'
  },
  {
    msgNr: 27,
    OriginalMessage: '//',
    CobID: 'xx',
    FrameData: '-',
    type: 'xx',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: 'Can`t extract data from this row',
    Data: '-',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 28,
    OriginalMessage: '08 10 00 91 84 03 67 03 66 00  //var_i1 = (var_i2),dm',
    CobID: 'RW=?',
    FrameData: '08100091840367036600',
    type: 'RW=?',
    AxisID: 'All',
    CS: '9184',
    Object: '-',
    ObjectName: '-',
    Data: '0366 =  (0367), DM ',
    Interpretation: 'VAR_I1= (VAR_I2), DM , 16 bits',
    errorStatus: '-'
  },
  {
    msgNr: 29,
    OriginalMessage: '08 10 00 91 80 03 67 03 66 FC  //var_i1 = (var_i2),pm',
    CobID: 'RW=?',
    FrameData: '081000918003670366FC',
    type: 'RW=?',
    AxisID: 'All',
    CS: '9180',
    Object: '-',
    ObjectName: '-',
    Data: '0366 =  (0367), PM ',
    Interpretation: 'VAR_I1= (VAR_I2), PM , 16 bits',
    errorStatus: '-'
  },
  {
    msgNr: 30,
    OriginalMessage: '08 10 00 91 88 03 67 03 66 04  //var_i1 = (var_i2),spi',
    CobID: 'RW=?',
    FrameData: '08100091880367036604',
    type: 'RW=?',
    AxisID: 'All',
    CS: '9188',
    Object: '-',
    ObjectName: '-',
    Data: '0366 =  (0367), SPI ',
    Interpretation: 'VAR_I1= (VAR_I2), SPI , 16 bits',
    errorStatus: '-'
  },
  {
    msgNr: 31,
    OriginalMessage: '08 10 00 91 04 03 67 03 66 80  //var_i1 = (var_i2+),dm',
    CobID: 'RW=?',
    FrameData: '08100091040367036680',
    type: 'RW=?',
    AxisID: 'All',
    CS: '9104',
    Object: '-',
    ObjectName: '-',
    Data: '0366 =  (0367+), DM ',
    Interpretation: 'VAR_I1= (VAR_I2+), DM , 16 bits',
    errorStatus: '-'
  },
  {
    msgNr: 32,
    OriginalMessage: '08 10 00 91 00 03 67 03 66 7C  //var_i1 = (var_i2+),pm',
    CobID: 'RW=?',
    FrameData: '0810009100036703667C',
    type: 'RW=?',
    AxisID: 'All',
    CS: '9100',
    Object: '-',
    ObjectName: '-',
    Data: '0366 =  (0367+), PM ',
    Interpretation: 'VAR_I1= (VAR_I2+), PM , 16 bits',
    errorStatus: '-'
  },
  {
    msgNr: 33,
    OriginalMessage: '08 10 00 91 08 03 67 03 66 84  //var_i1 = (var_i2+),spi',
    CobID: 'RW=?',
    FrameData: '08100091080367036684',
    type: 'RW=?',
    AxisID: 'All',
    CS: '9108',
    Object: '-',
    ObjectName: '-',
    Data: '0366 =  (0367+), SPI ',
    Interpretation: 'VAR_I1= (VAR_I2+), SPI , 16 bits',
    errorStatus: '-'
  },
  {
    msgNr: 34,
    OriginalMessage: ' //',
    CobID: 'xx',
    FrameData: '-',
    type: 'xx',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: 'Can`t extract data from this row',
    Data: '-',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 35,
    OriginalMessage: '08 10 00 91 85 03 67 03 68 03  //var_lf = (var_i2),dm',
    CobID: 'RW=?',
    FrameData: '08100091850367036803',
    type: 'RW=?',
    AxisID: 'All',
    CS: '9185',
    Object: '-',
    ObjectName: '-',
    Data: '0368 =  (0367), DM ',
    Interpretation: 'VAR_LF= (VAR_I2), DM , 32 bits',
    errorStatus: '-'
  },
  {
    msgNr: 36,
    OriginalMessage: '08 10 00 91 81 03 67 03 68 FF  //var_lf = (var_i2),pm',
    CobID: 'RW=?',
    FrameData: '081000918103670368FF',
    type: 'RW=?',
    AxisID: 'All',
    CS: '9181',
    Object: '-',
    ObjectName: '-',
    Data: '0368 =  (0367), PM ',
    Interpretation: 'VAR_LF= (VAR_I2), PM , 32 bits',
    errorStatus: '-'
  },
  {
    msgNr: 37,
    OriginalMessage: '08 10 00 91 89 03 67 03 68 07  //var_lf = (var_i2),spi',
    CobID: 'RW=?',
    FrameData: '08100091890367036807',
    type: 'RW=?',
    AxisID: 'All',
    CS: '9189',
    Object: '-',
    ObjectName: '-',
    Data: '0368 =  (0367), SPI ',
    Interpretation: 'VAR_LF= (VAR_I2), SPI , 32 bits',
    errorStatus: '-'
  },
  {
    msgNr: 38,
    OriginalMessage: '08 10 00 91 05 03 67 03 68 83  //var_lf = (var_i2+),dm',
    CobID: 'RW=?',
    FrameData: '08100091050367036883',
    type: 'RW=?',
    AxisID: 'All',
    CS: '9105',
    Object: '-',
    ObjectName: '-',
    Data: '0368 =  (0367+), DM ',
    Interpretation: 'VAR_LF= (VAR_I2+), DM , 32 bits',
    errorStatus: '-'
  },
  {
    msgNr: 39,
    OriginalMessage: '08 10 00 91 01 03 67 03 68 7F  //var_lf = (var_i2+),pm',
    CobID: 'RW=?',
    FrameData: '0810009101036703687F',
    type: 'RW=?',
    AxisID: 'All',
    CS: '9101',
    Object: '-',
    ObjectName: '-',
    Data: '0368 =  (0367+), PM ',
    Interpretation: 'VAR_LF= (VAR_I2+), PM , 32 bits',
    errorStatus: '-'
  },
  {
    msgNr: 40,
    OriginalMessage: '08 10 00 91 09 03 67 03 68 87  //var_lf = (var_i2+),spi',
    CobID: 'RW=?',
    FrameData: '08100091090367036887',
    type: 'RW=?',
    AxisID: 'All',
    CS: '9109',
    Object: '-',
    ObjectName: '-',
    Data: '0368 =  (0367+), SPI ',
    Interpretation: 'VAR_LF= (VAR_I2+), SPI , 32 bits',
    errorStatus: '-'
  },
  {
    msgNr: 41,
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
    msgNr: 42,
    OriginalMessage: '08 10 00 89 61 02 9E 03 66 0B  //cpos = var_i1<<1',
    CobID: 'RW=?',
    FrameData: '0810008961029E03660B',
    type: 'RW=?',
    AxisID: 'All',
    CS: '8961',
    Object: '-',
    ObjectName: '-',
    Data: '029E =  0366<< 1 ',
    Interpretation: 'CPOS= VAR_I1<< 1, 32D = V16S left-shifted by 1  ',
    errorStatus: '-'
  },
  {
    msgNr: 43,
    OriginalMessage: '08 10 00 89 62 02 9E 03 66 0C  //cpos = var_i1<<2',
    CobID: 'RW=?',
    FrameData: '0810008962029E03660C',
    type: 'RW=?',
    AxisID: 'All',
    CS: '8962',
    Object: '-',
    ObjectName: '-',
    Data: '029E =  0366<< 2 ',
    Interpretation: 'CPOS= VAR_I1<< 2, 32D = V16S left-shifted by 2  ',
    errorStatus: '-'
  },
  {
    msgNr: 44,
    OriginalMessage: '08 10 00 89 63 02 9E 03 66 0D  //cpos = var_i1<<3',
    CobID: 'RW=?',
    FrameData: '0810008963029E03660D',
    type: 'RW=?',
    AxisID: 'All',
    CS: '8963',
    Object: '-',
    ObjectName: '-',
    Data: '029E =  0366<< 3 ',
    Interpretation: 'CPOS= VAR_I1<< 3, 32D = V16S left-shifted by 3  ',
    errorStatus: '-'
  },
  {
    msgNr: 45,
    OriginalMessage: '08 10 00 89 60 02 9E 03 66 0A  //cpos = var_i1<<0',
    CobID: 'RW=?',
    FrameData: '0810008960029E03660A',
    type: 'RW=?',
    AxisID: 'All',
    CS: '8960',
    Object: '-',
    ObjectName: '-',
    Data: '029E =  0366<< 0 ',
    Interpretation: 'CPOS= VAR_I1<< 0, 32D = V16S left-shifted by 0  ',
    errorStatus: '-'
  },
  {
    msgNr: 46,
    OriginalMessage: '08 10 00 89 69 02 9E 03 66 13  //cpos = var_i1<<9',
    CobID: 'RW=?',
    FrameData: '0810008969029E036613',
    type: 'RW=?',
    AxisID: 'All',
    CS: '8969',
    Object: '-',
    ObjectName: '-',
    Data: '029E =  0366<< 9 ',
    Interpretation: 'CPOS= VAR_I1<< 9, 32D = V16S left-shifted by 9  ',
    errorStatus: '-'
  },
  {
    msgNr: 47,
    OriginalMessage: '08 10 00 89 70 02 9E 03 66 1A  //cpos = var_i1<<16',
    CobID: 'RW=?',
    FrameData: '0810008970029E03661A',
    type: 'RW=?',
    AxisID: 'All',
    CS: '8970',
    Object: '-',
    ObjectName: '-',
    Data: '029E =  0366<< 16 ',
    Interpretation: 'CPOS= VAR_I1<< 16, 32D = V16S left-shifted by 16  ',
    errorStatus: '-'
  },
  {
    msgNr: 48,
    OriginalMessage: '06 10 00 89 21 02 28 EA  //apos<<=1',
    CobID: 'RW=?',
    FrameData: '06100089210228EA',
    type: 'RW=?',
    AxisID: 'All',
    CS: '8921',
    Object: '-',
    ObjectName: '-',
    Data: '0228  <<= 1 ',
    Interpretation: 'APOS<<= 1 ,[32D] ',
    errorStatus: '-'
  },
  {
    msgNr: 49,
    OriginalMessage: '06 10 00 89 2A 02 28 F3  //apos<<=10',
    CobID: 'RW=?',
    FrameData: '061000892A0228F3',
    type: 'RW=?',
    AxisID: 'All',
    CS: '892A',
    Object: '-',
    ObjectName: '-',
    Data: '0228  <<= 10 ',
    Interpretation: 'APOS<<= 10 ,[32D] ',
    errorStatus: '-'
  },
  {
    msgNr: 50,
    OriginalMessage: '06 10 00 89 01 02 28 CA  //apos>>=1',
    CobID: 'RW=?',
    FrameData: '06100089010228CA',
    type: 'RW=?',
    AxisID: 'All',
    CS: '8901',
    Object: '-',
    ObjectName: '-',
    Data: '0228  >>= 1 ',
    Interpretation: 'APOS>>= 1 ,[32D] ',
    errorStatus: '-'
  },
  {
    msgNr: 51,
    OriginalMessage: '06 10 00 89 0A 02 28 D3  //apos>>=10',
    CobID: 'RW=?',
    FrameData: '061000890A0228D3',
    type: 'RW=?',
    AxisID: 'All',
    CS: '890A',
    Object: '-',
    ObjectName: '-',
    Data: '0228  >>= 10 ',
    Interpretation: 'APOS>>= 10 ,[32D] ',
    errorStatus: '-'
  },
  {
    msgNr: 52,
    OriginalMessage: '04 10 00 88 A4 40  // prod<<=4',
    CobID: 'RW=?',
    FrameData: '04100088A440',
    type: 'RW=?',
    AxisID: 'All',
    CS: '88A4',
    Object: '-',
    ObjectName: '-',
    Data: 'PROD  <<= 4 ',
    Interpretation: 'PROD <<= 4 [16D] ',
    errorStatus: '-'
  },
  {
    msgNr: 53,
    OriginalMessage: '04 10 00 88 85 21  // prod >>=5',
    CobID: 'RW=?',
    FrameData: '041000888521',
    type: 'RW=?',
    AxisID: 'All',
    CS: '8885',
    Object: '-',
    ObjectName: '-',
    Data: 'PROD  >>= 5 ',
    Interpretation: 'PROD >>= 5 [16D] ',
    errorStatus: '-'
  },
  {
    msgNr: 54,
    OriginalMessage: '06 10 00 88 2C 03 66 33  // var_i1<<=12',
    CobID: 'RW=?',
    FrameData: '061000882C036633',
    type: 'RW=?',
    AxisID: 'All',
    CS: '882C',
    Object: '-',
    ObjectName: '-',
    Data: '0366  <<= 12 ',
    Interpretation: 'VAR_I1 <<= 12 [16D] ',
    errorStatus: '-'
  },
  {
    msgNr: 55,
    OriginalMessage: '06 10 00 88 05 03 66 0C  // var_i1>>=5',
    CobID: 'RW=?',
    FrameData: '061000880503660C',
    type: 'RW=?',
    AxisID: 'All',
    CS: '8805',
    Object: '-',
    ObjectName: '-',
    Data: '0366  >>= 5 ',
    Interpretation: 'VAR_I1 >>= 5 [16D] ',
    errorStatus: '-'
  },
  {
    msgNr: 56,
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
    msgNr: 57,
    OriginalMessage: '0A 10 00 5C 00 03 66 12 22 00 55 68 /SRBL var_i1, 0x1222, 0x55',
    CobID: 'RW=?',
    FrameData: '0A10005C0003661222005568',
    type: 'RW=?',
    AxisID: 'All',
    CS: '5C00',
    Object: '-',
    ObjectName: '-',
    Data: 'SRB 0366, 0x1222, 0x0055 ',
    Interpretation: 'Set / Reset Bits  "VAR_I1" , AND_mask: 0x1222, OR_mask: 0x0055 ',
    errorStatus: '-'
  },
  {
    msgNr: 58,
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
    msgNr: 59,
    OriginalMessage: '08 10 00 8C 22 03 66 00 05 34 //var_i1*0x5<<2',
    CobID: 'RW=?',
    FrameData: '0810008C220366000534',
    type: 'RW=?',
    AxisID: 'All',
    CS: '8C22',
    Object: '-',
    ObjectName: '-',
    Data: '0366 * 0005  << 2 ',
    Interpretation: 'VAR_I1* 0x0005  << 2 [16D-val16], (0x0005 = 5) ',
    errorStatus: '-'
  },
  {
    msgNr: 60,
    OriginalMessage: '08 10 00 8C 03 03 66 00 05 15 //var_i1*0x5>>3',
    CobID: 'RW=?',
    FrameData: '0810008C030366000515',
    type: 'RW=?',
    AxisID: 'All',
    CS: '8C03',
    Object: '-',
    ObjectName: '-',
    Data: '0366 * 0005  >> 3 ',
    Interpretation: 'VAR_I1* 0x0005  >> 3 [16D-val16], (0x0005 = 5) ',
    errorStatus: '-'
  },
  {
    msgNr: 61,
    OriginalMessage: '08 10 00 8C A7 03 66 03 67 1E //var_i1*var_i2<<7',
    CobID: 'RW=?',
    FrameData: '0810008CA7036603671E',
    type: 'RW=?',
    AxisID: 'All',
    CS: '8CA7',
    Object: '-',
    ObjectName: '-',
    Data: '0366 * 0367  << 7 ',
    Interpretation: 'VAR_I1* VAR_I2  << 7   [16D-16S] ',
    errorStatus: '-'
  },
  {
    msgNr: 62,
    OriginalMessage: '08 10 00 8C 88 03 66 03 67 FF //var_i1*var_i2>>8',
    CobID: 'RW=?',
    FrameData: '0810008C8803660367FF',
    type: 'RW=?',
    AxisID: 'All',
    CS: '8C88',
    Object: '-',
    ObjectName: '-',
    Data: '0366 * 0367  >> 8 ',
    Interpretation: 'VAR_I1* VAR_I2  >> 8   [16D-16S] ',
    errorStatus: '-'
  },
  {
    msgNr: 63,
    OriginalMessage: '08 10 00 8D 22 03 68 00 05 37  //var_lf*0x5<<2',
    CobID: 'RW=?',
    FrameData: '0810008D220368000537',
    type: 'RW=?',
    AxisID: 'All',
    CS: '8D22',
    Object: '-',
    ObjectName: '-',
    Data: '0368 * 0005  << 2 ',
    Interpretation: 'VAR_LF* 0x0005  << 2 [32D-val16], (0x0005 = 5) ',
    errorStatus: '-'
  },
  {
    msgNr: 64,
    OriginalMessage: '08 10 00 8D 03 03 68 00 05 18  //var_lf*0x5>>3',
    CobID: 'RW=?',
    FrameData: '0810008D030368000518',
    type: 'RW=?',
    AxisID: 'All',
    CS: '8D03',
    Object: '-',
    ObjectName: '-',
    Data: '0368 * 0005  >> 3 ',
    Interpretation: 'VAR_LF* 0x0005  >> 3 [32D-val16], (0x0005 = 5) ',
    errorStatus: '-'
  },
  {
    msgNr: 65,
    OriginalMessage: '08 10 00 8D A7 03 68 03 67 21  //var_lf*var_i2<<7',
    CobID: 'RW=?',
    FrameData: '0810008DA70368036721',
    type: 'RW=?',
    AxisID: 'All',
    CS: '8DA7',
    Object: '-',
    ObjectName: '-',
    Data: '0368 * 0367  << 7 ',
    Interpretation: 'VAR_LF* VAR_I2  << 7   [32D-16S] ',
    errorStatus: '-'
  },
  {
    msgNr: 66,
    OriginalMessage: '08 10 00 8D 88 03 68 03 67 02  //var_lf*var_i2>>8',
    CobID: 'RW=?',
    FrameData: '0810008D880368036702',
    type: 'RW=?',
    AxisID: 'All',
    CS: '8D88',
    Object: '-',
    ObjectName: '-',
    Data: '0368 * 0367  >> 8 ',
    Interpretation: 'VAR_LF* VAR_I2  >> 8   [32D-16S] ',
    errorStatus: '-'
  },
  {
    msgNr: 67,
    OriginalMessage: '04 00 10 04 04 1C //ret ',
    CobID: 'RW=?',
    FrameData: '04001004041C',
    type: 'RW=?',
    AxisID: 1,
    CS: '0404',
    Object: '-',
    ObjectName: '-',
    Data: 'RET',
    Interpretation: 'Return from TML function',
    errorStatus: '-'
  },
  {
    msgNr: 68,
    OriginalMessage: '04 00 10 04 08 20 //wait!',
    CobID: 'RW=?',
    FrameData: '040010040820',
    type: 'RW=?',
    AxisID: 1,
    CS: '0408',
    Object: '-',
    ObjectName: '-',
    Data: 'WAIT!',
    Interpretation: 'Wait until event occurs',
    errorStatus: '-'
  },
  {
    msgNr: 69,
    OriginalMessage: '04 00 10 04 10 28 //DINT',
    CobID: 'RW=?',
    FrameData: '040010041028',
    type: 'RW=?',
    AxisID: 1,
    CS: '0410',
    Object: '-',
    ObjectName: '-',
    Data: 'DINT',
    Interpretation: 'Disable TML Interrupts ',
    errorStatus: '-'
  },
  {
    msgNr: 70,
    OriginalMessage: '04 00 10 04 02 1A //reset',
    CobID: 'RW=?',
    FrameData: '04001004021A',
    type: 'RW=?',
    AxisID: 1,
    CS: '0402',
    Object: '-',
    ObjectName: '-',
    Data: 'RESET',
    Interpretation: 'Reset DSP controller',
    errorStatus: '-'
  },
  {
    msgNr: 71,
    OriginalMessage: '04 00 10 04 A0 B8 //DIS2CAPI',
    CobID: 'RW=?',
    FrameData: '04001004A0B8',
    type: 'RW=?',
    AxisID: 1,
    CS: '04A0',
    Object: '-',
    ObjectName: '-',
    Data: 'DIS2CAPI',
    Interpretation: 'Disable 2nd CAPI capture',
    errorStatus: '-'
  },
  {
    msgNr: 72,
    OriginalMessage: '04 00 10 04 81 99 //DISCAPI',
    CobID: 'RW=?',
    FrameData: '040010048199',
    type: 'RW=?',
    AxisID: 1,
    CS: '0481',
    Object: '-',
    ObjectName: '-',
    Data: 'DISCAPI',
    Interpretation: 'Disable CAPI capture',
    errorStatus: '-'
  },
  {
    msgNr: 73,
    OriginalMessage: '04 00 10 04 20 38 //EN2CAPI0',
    CobID: 'RW=?',
    FrameData: '040010042038',
    type: 'RW=?',
    AxisID: 1,
    CS: '0420',
    Object: '-',
    ObjectName: '-',
    Data: 'EN2CAPI0',
    Interpretation: 'Enable 2nd CAPI capture for 1->0',
    errorStatus: '-'
  },
  {
    msgNr: 74,
    OriginalMessage: '04 00 10 04 20 38 //EN2CAPI0',
    CobID: 'RW=?',
    FrameData: '040010042038',
    type: 'RW=?',
    AxisID: 1,
    CS: '0420',
    Object: '-',
    ObjectName: '-',
    Data: 'EN2CAPI0',
    Interpretation: 'Enable 2nd CAPI capture for 1->0',
    errorStatus: '-'
  },
  {
    msgNr: 75,
    OriginalMessage: '04 00 10 05 04 1D //reti;',
    CobID: 'RW=?',
    FrameData: '04001005041D',
    type: 'RW=?',
    AxisID: 1,
    CS: '0504',
    Object: '-',
    ObjectName: '-',
    Data: 'RETI',
    Interpretation: 'Return from TML Interrupt SR ',
    errorStatus: '-'
  },
  {
    msgNr: 76,
    OriginalMessage: '04 00 10 05 10 29 //EINT;',
    CobID: 'RW=?',
    FrameData: '040010051029',
    type: 'RW=?',
    AxisID: 1,
    CS: '0510',
    Object: '-',
    ObjectName: '-',
    Data: 'EINT',
    Interpretation: 'Enable TML Interrupts  ',
    errorStatus: '-'
  },
  {
    msgNr: 77,
    OriginalMessage: '04 00 10 05 20 39 //EN2CAPI1',
    CobID: 'RW=?',
    FrameData: '040010052039',
    type: 'RW=?',
    AxisID: 1,
    CS: '0520',
    Object: '-',
    ObjectName: '-',
    Data: 'EN2CAPI1',
    Interpretation: 'Enable 2nd CAPI capture for 0->1',
    errorStatus: '-'
  },
  {
    msgNr: 78,
    OriginalMessage: '04 00 10 05 01 1A //ENCAPI1',
    CobID: 'RW=?',
    FrameData: '04001005011A',
    type: 'RW=?',
    AxisID: 1,
    CS: '0501',
    Object: '-',
    ObjectName: '-',
    Data: 'ENCAPI1',
    Interpretation: 'Enable CAPI capture for 0->1 ',
    errorStatus: '-'
  },
  {
    msgNr: 79,
    OriginalMessage: '08 00 10 59 09 B7 C6 87 06 84 //mode cs ',
    CobID: 'RW=?',
    FrameData: '0800105909B7C6870684',
    type: 'RW=?',
    AxisID: 1,
    CS: '5909',
    Object: '-',
    ObjectName: '-',
    Data: 'MODE CS',
    Interpretation: 'Set MODE Cam Slave',
    errorStatus: '-'
  },
  {
    msgNr: 80,
    OriginalMessage: '08 00 10 59 09 B7 C5 87 05 82 //mode gs ',
    CobID: 'RW=?',
    FrameData: '0800105909B7C5870582',
    type: 'RW=?',
    AxisID: 1,
    CS: '5909',
    Object: '-',
    ObjectName: '-',
    Data: 'MODE GS',
    Interpretation: 'Set MODE Gear Slave',
    errorStatus: '-'
  },
  {
    msgNr: 81,
    OriginalMessage: '08 00 10 59 09 BF C2 87 02 84 //mode pc ',
    CobID: 'RW=?',
    FrameData: '0800105909BFC2870284',
    type: 'RW=?',
    AxisID: 1,
    CS: '5909',
    Object: '-',
    ObjectName: '-',
    Data: 'MODE PC',
    Interpretation: 'MODE Position Contouring',
    errorStatus: '-'
  },
  {
    msgNr: 82,
    OriginalMessage: '08 00 10 59 09 BF C1 87 01 82 //mode pp ',
    CobID: 'RW=?',
    FrameData: '0800105909BFC1870182',
    type: 'RW=?',
    AxisID: 1,
    CS: '5909',
    Object: '-',
    ObjectName: '-',
    Data: 'MODE PP',
    Interpretation: 'MODE Position Profile',
    errorStatus: '-'
  },
  {
    msgNr: 83,
    OriginalMessage: '08 00 10 59 09 FF C1 87 07 C8 //mode psc ',
    CobID: 'RW=?',
    FrameData: '0800105909FFC18707C8',
    type: 'RW=?',
    AxisID: 1,
    CS: '5909',
    Object: '-',
    ObjectName: '-',
    Data: 'MODE PSC',
    Interpretation: 'MODE S-Curve',
    errorStatus: '-'
  },
  {
    msgNr: 84,
    OriginalMessage: '08 00 10 59 09 FF C0 87 0A CA //mode pt ',
    CobID: 'RW=?',
    FrameData: '0800105909FFC0870ACA',
    type: 'RW=?',
    AxisID: 1,
    CS: '5909',
    Object: '-',
    ObjectName: '-',
    Data: 'MODE PT',
    Interpretation: 'MODE Position Time',
    errorStatus: '-'
  },
  {
    msgNr: 85,
    OriginalMessage: '08 00 10 59 09 FF C1 87 09 CA //mode pvt ',
    CobID: 'RW=?',
    FrameData: '0800105909FFC18709CA',
    type: 'RW=?',
    AxisID: 1,
    CS: '5909',
    Object: '-',
    ObjectName: '-',
    Data: 'MODE PVT',
    Interpretation: 'MODE Position Velocity Time',
    errorStatus: '-'
  },
  {
    msgNr: 86,
    OriginalMessage: '08 00 10 59 09 BB C2 83 02 7C //mode sc ',
    CobID: 'RW=?',
    FrameData: '0800105909BBC283027C',
    type: 'RW=?',
    AxisID: 1,
    CS: '5909',
    Object: '-',
    ObjectName: '-',
    Data: 'MODE SC',
    Interpretation: 'MODE Speed Contouring',
    errorStatus: '-'
  },
  {
    msgNr: 87,
    OriginalMessage: '08 00 10 59 09 B3 C0 83 00 70 //mode se ',
    CobID: 'RW=?',
    FrameData: '0800105909B3C0830070',
    type: 'RW=?',
    AxisID: 1,
    CS: '5909',
    Object: '-',
    ObjectName: '-',
    Data: 'MODE SE',
    Interpretation: 'MODE Speed External',
    errorStatus: '-'
  },
  {
    msgNr: 88,
    OriginalMessage: '08 00 10 59 09 BB C1 83 01 7A //mode sp ',
    CobID: 'RW=?',
    FrameData: '0800105909BBC183017A',
    type: 'RW=?',
    AxisID: 1,
    CS: '5909',
    Object: '-',
    ObjectName: '-',
    Data: 'MODE SP',
    Interpretation: 'MODE Speed Profile',
    errorStatus: '-'
  },
  {
    msgNr: 89,
    OriginalMessage: '08 00 10 59 09 B1 C3 81 03 72 //mode tc  ',
    CobID: 'RW=?',
    FrameData: '0800105909B1C3810372',
    type: 'RW=?',
    AxisID: 1,
    CS: '5909',
    Object: '-',
    ObjectName: '-',
    Data: 'MODE TC',
    Interpretation: 'MODE Torque Contouring',
    errorStatus: '-'
  },
  {
    msgNr: 90,
    OriginalMessage: '08 00 10 59 09 B1 E0 81 20 AC //mode tef ',
    CobID: 'RW=?',
    FrameData: '0800105909B1E08120AC',
    type: 'RW=?',
    AxisID: 1,
    CS: '5909',
    Object: '-',
    ObjectName: '-',
    Data: 'MODE TEF',
    Interpretation: 'MODE Torque External Fast loop',
    errorStatus: '-'
  },
  {
    msgNr: 91,
    OriginalMessage: '08 00 10 59 09 B1 C8 81 08 7C //mode tt ',
    CobID: 'RW=?',
    FrameData: '0800105909B1C881087C',
    type: 'RW=?',
    AxisID: 1,
    CS: '5909',
    Object: '-',
    ObjectName: '-',
    Data: 'MODE TT',
    Interpretation: 'MODE Torque Test',
    errorStatus: '-'
  },
  {
    msgNr: 92,
    OriginalMessage: '08 00 10 59 09 B0 C3 80 03 70 //mode vc ',
    CobID: 'RW=?',
    FrameData: '0800105909B0C3800370',
    type: 'RW=?',
    AxisID: 1,
    CS: '5909',
    Object: '-',
    ObjectName: '-',
    Data: 'MODE VC',
    Interpretation: 'MODE Voltage Contouring',
    errorStatus: '-'
  },
  {
    msgNr: 93,
    OriginalMessage: '08 00 10 59 09 B0 C0 80 00 6A //mode ves  ',
    CobID: 'RW=?',
    FrameData: '0800105909B0C080006A',
    type: 'RW=?',
    AxisID: 1,
    CS: '5909',
    Object: '-',
    ObjectName: '-',
    Data: 'MODE VES',
    Interpretation: 'MODE Voltage External Slow loop',
    errorStatus: '-'
  },
  {
    msgNr: 94,
    OriginalMessage: '08 00 10 59 09 B0 C8 80 08 7A //mode vt ',
    CobID: 'RW=?',
    FrameData: '0800105909B0C880087A',
    type: 'RW=?',
    AxisID: 1,
    CS: '5909',
    Object: '-',
    ObjectName: '-',
    Data: 'MODE VT',
    Interpretation: 'MODE Voltage Test',
    errorStatus: '-'
  },
  {
    msgNr: 95,
    OriginalMessage: '08 00 10 59 09 FF FF 20 00 98 //cpa ',
    CobID: 'RW=?',
    FrameData: '0800105909FFFF200098',
    type: 'RW=?',
    AxisID: 1,
    CS: '5909',
    Object: '-',
    ObjectName: '-',
    Data: 'CPA',
    Interpretation: 'Command Position is Absolute',
    errorStatus: '-'
  },
  {
    msgNr: 96,
    OriginalMessage: '08 00 10 59 09 DF FF 00 00 58 //cpr ',
    CobID: 'RW=?',
    FrameData: '0800105909DFFF000058',
    type: 'RW=?',
    AxisID: 1,
    CS: '5909',
    Object: '-',
    ObjectName: '-',
    Data: 'CPR',
    Interpretation: 'Command Position is Relative',
    errorStatus: '-'
  },
  {
    msgNr: 97,
    OriginalMessage: '08 00 10 59 09 FF 3F 00 00 B8 //extref 0 ',
    CobID: 'RW=?',
    FrameData: '0800105909FF3F0000B8',
    type: 'RW=?',
    AxisID: 1,
    CS: '5909',
    Object: '-',
    ObjectName: '-',
    Data: 'EXTREF 0',
    Interpretation: 'External Reference read from ONLINE EREF',
    errorStatus: '-'
  },
  {
    msgNr: 98,
    OriginalMessage: '08 00 10 59 09 FF 7F 00 40 38 //extref 1 ',
    CobID: 'RW=?',
    FrameData: '0800105909FF7F004038',
    type: 'RW=?',
    AxisID: 1,
    CS: '5909',
    Object: '-',
    ObjectName: '-',
    Data: 'EXTREF 1',
    Interpretation: 'External Reference read from ANALOGUE',
    errorStatus: '-'
  },
  {
    msgNr: 99,
    OriginalMessage: '08 00 10 59 09 FF BF 00 80 B8 //extref 2 ',
    CobID: 'RW=?',
    FrameData: '0800105909FFBF0080B8',
    type: 'RW=?',
    AxisID: 1,
    CS: '5909',
    Object: '-',
    ObjectName: '-',
    Data: 'EXTREF 2',
    Interpretation: 'External Reference read from DIGITAL',
    errorStatus: '-'
  },
  {
    msgNr: 100,
    OriginalMessage: '08 00 10 59 09 EF FF 00 00 68 //reg_off ',
    CobID: 'RW=?',
    FrameData: '0800105909EFFF000068',
    type: 'RW=?',
    AxisID: 1,
    CS: '5909',
    Object: '-',
    ObjectName: '-',
    Data: 'REG_OFF',
    Interpretation: 'Registration mode disabled ',
    errorStatus: '-'
  },
  {
    msgNr: 101,
    OriginalMessage: '08 00 10 59 09 FF FF 10 00 88 //reg_on ',
    CobID: 'RW=?',
    FrameData: '0800105909FFFF100088',
    type: 'RW=?',
    AxisID: 1,
    CS: '5909',
    Object: '-',
    ObjectName: '-',
    Data: 'REG_ON',
    Interpretation: 'Registration mode enabled ',
    errorStatus: '-'
  },
  {
    msgNr: 102,
    OriginalMessage: '08 00 10 59 09 BF FF 00 00 38 //TUM0 ',
    CobID: 'RW=?',
    FrameData: '0800105909BFFF000038',
    type: 'RW=?',
    AxisID: 1,
    CS: '5909',
    Object: '-',
    ObjectName: '-',
    Data: 'TUM0',
    Interpretation: 'Set Target Update Mode 0',
    errorStatus: '-'
  },
  {
    msgNr: 103,
    OriginalMessage: '08 00 10 59 09 FF FF 40 00 B8 //TUM1 ',
    CobID: 'RW=?',
    FrameData: '0800105909FFFF4000B8',
    type: 'RW=?',
    AxisID: 1,
    CS: '5909',
    Object: '-',
    ObjectName: '-',
    Data: 'TUM1',
    Interpretation: 'Set Target Update Mode 1',
    errorStatus: '-'
  },
  {
    msgNr: 104,
    OriginalMessage: '08 00 10 59 09 FF FF 08 00 80 //sgn',
    CobID: 'RW=?',
    FrameData: '0800105909FFFF080080',
    type: 'RW=?',
    AxisID: 1,
    CS: '5909',
    Object: '-',
    ObjectName: '-',
    Data: 'SGM',
    Interpretation: 'Set axis as Gear/Cam Master',
    errorStatus: '-'
  },
  {
    msgNr: 105,
    OriginalMessage: '08 00 10 59 09 F7 FF 00 00 70 //rgm',
    CobID: 'RW=?',
    FrameData: '0800105909F7FF000070',
    type: 'RW=?',
    AxisID: 1,
    CS: '5909',
    Object: '-',
    ObjectName: '-',
    Data: 'RGM',
    Interpretation: 'Reset axis as Gear/Cam Master',
    errorStatus: '-'
  },
  {
    msgNr: 106,
    OriginalMessage: '08 00 10 DC 01 03 68 03 66 C9 //VAR_LF/=VAR_I1',
    CobID: 'RW=?',
    FrameData: '080010DC0103680366C9',
    type: 'RW=?',
    AxisID: 1,
    CS: 'DC01',
    Object: '-',
    ObjectName: '-',
    Data: '0368 /= 0366  ',
    Interpretation: 'VAR_LF /= VAR_I1 [V32/V16] ',
    errorStatus: '-'
  },
  {
    msgNr: 107,
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
    msgNr: 108,
    OriginalMessage: '08 00 10 71 92 02 28 02 28 6F  //!ALPO apos',
    CobID: 'RW=?',
    FrameData: '0800107192022802286F',
    type: 'RW=?',
    AxisID: 1,
    CS: '7192',
    Object: '-',
    ObjectName: '-',
    Data: '!ALPO 0228',
    Interpretation: '! if Absolute Load Position Over =>  !ALPO APOS [&32]',
    errorStatus: '-'
  },
  {
    msgNr: 109,
    OriginalMessage: '0A 00 10 70 92 02 28 56 78 12 34 5A  //!ALPO 0X12345678',
    CobID: 'RW=?',
    FrameData: '0A001070920228567812345A',
    type: 'RW=?',
    AxisID: 1,
    CS: '7092',
    Object: '-',
    ObjectName: '-',
    Data: '!ALPO 0x12345678',
    Interpretation: '! if Absolute Load Position Over val32= 0x12345678 =  305419896',
    errorStatus: '-'
  },
  {
    msgNr: 110,
    OriginalMessage: '0A 00 10 70 92 02 28 12 34 00 00 8C  //!ALPO 0X1234',
    CobID: 'RW=?',
    FrameData: '0A001070920228123400008C',
    type: 'RW=?',
    AxisID: 1,
    CS: '7092',
    Object: '-',
    ObjectName: '-',
    Data: '!ALPO 0x00001234',
    Interpretation: '! if Absolute Load Position Over val32= 0x00001234 =  4660',
    errorStatus: '-'
  },
  {
    msgNr: 111,
    OriginalMessage: '08 00 10 71 92 09 88 02 28 D6  //!AMPO apos',
    CobID: 'RW=?',
    FrameData: '080010719209880228D6',
    type: 'RW=?',
    AxisID: 1,
    CS: '7192',
    Object: '-',
    ObjectName: '-',
    Data: '!AMPO 0228',
    Interpretation: '! if Absolute Motor Position Over =>  !AMPO APOS [&32]',
    errorStatus: '-'
  },
  {
    msgNr: 112,
    OriginalMessage: '0A 00 10 70 92 09 88 56 78 12 34 C1  //!AMPO 0X12345678',
    CobID: 'RW=?',
    FrameData: '0A00107092098856781234C1',
    type: 'RW=?',
    AxisID: 1,
    CS: '7092',
    Object: '-',
    ObjectName: '-',
    Data: '!AMPO 0x12345678',
    Interpretation: '! if Absolute Motor Position Over val32= 0x12345678 =  305419896',
    errorStatus: '-'
  },
  {
    msgNr: 113,
    OriginalMessage: '08 00 10 71 83 02 28 02 28 60  //!ALPU apos',
    CobID: 'RW=?',
    FrameData: '08001071830228022860',
    type: 'RW=?',
    AxisID: 1,
    CS: '7183',
    Object: '-',
    ObjectName: '-',
    Data: '!ALPU 0228',
    Interpretation: '! if Absolute Load Position Under =>  !ALPU APOS [&32]',
    errorStatus: '-'
  },
  {
    msgNr: 114,
    OriginalMessage: '0A 00 10 70 83 02 28 56 78 12 34 4B  //!ALPU 0X12345678',
    CobID: 'RW=?',
    FrameData: '0A001070830228567812344B',
    type: 'RW=?',
    AxisID: 1,
    CS: '7083',
    Object: '-',
    ObjectName: '-',
    Data: '!ALPU 12345678',
    Interpretation: '! if Absolute Load Position Under val32= 0x12345678 =  305419896',
    errorStatus: '-'
  },
  {
    msgNr: 115,
    OriginalMessage: '08 00 10 71 83 09 88 02 28 C7  //!AMPU apos',
    CobID: 'RW=?',
    FrameData: '080010718309880228C7',
    type: 'RW=?',
    AxisID: 1,
    CS: '7183',
    Object: '-',
    ObjectName: '-',
    Data: '!AMPU 0228',
    Interpretation: '! if Absolute Motor Position Under =>  !AMPU APOS [&32]',
    errorStatus: '-'
  },
  {
    msgNr: 116,
    OriginalMessage: '0A 00 10 70 83 09 88 56 78 12 34 B2  //!AMPU 0X12345678',
    CobID: 'RW=?',
    FrameData: '0A00107083098856781234B2',
    type: 'RW=?',
    AxisID: 1,
    CS: '7083',
    Object: '-',
    ObjectName: '-',
    Data: '!AMPU 12345678',
    Interpretation: '! if Absolute Motor Position Under val32= 0x12345678 =  305419896',
    errorStatus: '-'
  },
  {
    msgNr: 117,
    OriginalMessage: '08 00 10 71 98 02 C0 03 68 4E  //!AT var_lf',
    CobID: 'RW=?',
    FrameData: '080010719802C003684E',
    type: 'RW=?',
    AxisID: 1,
    CS: '7198',
    Object: '-',
    ObjectName: '-',
    Data: '!AT 0368',
    Interpretation: '! if Absolute Time >= V32 =>  !AT VAR_LF [&32]',
    errorStatus: '-'
  },
  {
    msgNr: 118,
    OriginalMessage: '0A 00 10 70 98 02 C0 56 78 12 34 F8  //!AT 0x12345678',
    CobID: 'RW=?',
    FrameData: '0A0010709802C056781234F8',
    type: 'RW=?',
    AxisID: 1,
    CS: '7098',
    Object: '-',
    ObjectName: '-',
    Data: '!AT 0x12345678',
    Interpretation: '! if Absolute Time >= Val32 => 0x12345678 =  305419896 ',
    errorStatus: '-'
  },
  {
    msgNr: 119,
    OriginalMessage: '04 00 10 70 0E 92  //!CAP',
    CobID: 'RW=?',
    FrameData: '040010700E92',
    type: 'RW=?',
    AxisID: 1,
    CS: '700E',
    Object: '-',
    ObjectName: '-',
    Data: '!CAP ',
    Interpretation: '! if Capture triggered',
    errorStatus: '-'
  },
  {
    msgNr: 120,
    OriginalMessage: '06 00 10 70 DB 00 80 E1  //!IN#7 0',
    CobID: 'RW=?',
    FrameData: '06001070DB0080E1',
    type: 'RW=?',
    AxisID: 1,
    CS: '70DB',
    Object: '-',
    ObjectName: '-',
    Data: '!IN#7 0',
    Interpretation: '! if Input #7 is 0',
    errorStatus: '-'
  },
  {
    msgNr: 121,
    OriginalMessage: '06 00 10 70 DA 00 04 64  //!IN#2 1',
    CobID: 'RW=?',
    FrameData: '06001070DA000464',
    type: 'RW=?',
    AxisID: 1,
    CS: '70DA',
    Object: '-',
    ObjectName: '-',
    Data: '!IN#2 1',
    Interpretation: '! if Input #2 is 1',
    errorStatus: '-'
  },
  {
    msgNr: 122,
    OriginalMessage: '04 00 10 70 0D 91  //!lsp',
    CobID: 'RW=?',
    FrameData: '040010700D91',
    type: 'RW=?',
    AxisID: 1,
    CS: '700D',
    Object: '-',
    ObjectName: '-',
    Data: '!LSP',
    Interpretation: '! if Limit Switch Positive active',
    errorStatus: '-'
  },
  {
    msgNr: 123,
    OriginalMessage: '04 00 10 70 0C 90  //!lsn',
    CobID: 'RW=?',
    FrameData: '040010700C90',
    type: 'RW=?',
    AxisID: 1,
    CS: '700C',
    Object: '-',
    ObjectName: '-',
    Data: '!LSN',
    Interpretation: '! if Limit Switch Negative active',
    errorStatus: '-'
  },
  {
    msgNr: 124,
    OriginalMessage: '04 00 10 70 0F 93 //!MC',
    CobID: 'RW=?',
    FrameData: '040010700F93',
    type: 'RW=?',
    AxisID: 1,
    CS: '700F',
    Object: '-',
    ObjectName: '-',
    Data: '!MC',
    Interpretation: '!(set event) if Motion Complete ',
    errorStatus: '-'
  },
  {
    msgNr: 125,
    OriginalMessage: '08 00 10 71 90 02 AE 03 68 34  //!RO var_lf;',
    CobID: 'RW=?',
    FrameData: '080010719002AE036834',
    type: 'RW=?',
    AxisID: 1,
    CS: '7190',
    Object: '-',
    ObjectName: '-',
    Data: '!RO  0368 ',
    Interpretation: ' if Reference Over V32 => !RO VAR_LF [&32], reference can be P/S/T',
    errorStatus: '-'
  },
  {
    msgNr: 126,
    OriginalMessage: '0A 00 10 70 90 02 AE 12 45 00 00 21  //!RO 0x1245',
    CobID: 'RW=?',
    FrameData: '0A0010709002AE1245000021',
    type: 'RW=?',
    AxisID: 1,
    CS: '7090',
    Object: '-',
    ObjectName: '-',
    Data: '!RO 0x00001245 ',
    Interpretation: '! if Reference Over val32 = 0x00001245 = 4677, reference can be P/S/T',
    errorStatus: '-'
  },
  {
    msgNr: 127,
    OriginalMessage: '08 00 10 71 90 02 AE 03 68 34  //!PRO var_lf;',
    CobID: 'RW=?',
    FrameData: '080010719002AE036834',
    type: 'RW=?',
    AxisID: 1,
    CS: '7190',
    Object: '-',
    ObjectName: '-',
    Data: '!RO  0368 ',
    Interpretation: ' if Reference Over V32 => !RO VAR_LF [&32], reference can be P/S/T',
    errorStatus: '-'
  },
  {
    msgNr: 128,
    OriginalMessage: '0A 00 10 70 90 02 AE 12 45 00 00 21  //!PRO 0x1245',
    CobID: 'RW=?',
    FrameData: '0A0010709002AE1245000021',
    type: 'RW=?',
    AxisID: 1,
    CS: '7090',
    Object: '-',
    ObjectName: '-',
    Data: '!RO 0x00001245 ',
    Interpretation: '! if Reference Over val32 = 0x00001245 = 4677, reference can be P/S/T',
    errorStatus: '-'
  },
  {
    msgNr: 129,
    OriginalMessage: '08 00 10 71 90 02 AE 03 68 34  //!SRO var_lf;',
    CobID: 'RW=?',
    FrameData: '080010719002AE036834',
    type: 'RW=?',
    AxisID: 1,
    CS: '7190',
    Object: '-',
    ObjectName: '-',
    Data: '!RO  0368 ',
    Interpretation: ' if Reference Over V32 => !RO VAR_LF [&32], reference can be P/S/T',
    errorStatus: '-'
  },
  {
    msgNr: 130,
    OriginalMessage: '0A 00 10 70 90 02 AE 12 45 00 00 21  //!SRO 0x1245',
    CobID: 'RW=?',
    FrameData: '0A0010709002AE1245000021',
    type: 'RW=?',
    AxisID: 1,
    CS: '7090',
    Object: '-',
    ObjectName: '-',
    Data: '!RO 0x00001245 ',
    Interpretation: '! if Reference Over val32 = 0x00001245 = 4677, reference can be P/S/T',
    errorStatus: '-'
  },
  {
    msgNr: 131,
    OriginalMessage: '08 00 10 71 90 02 AE 03 68 34  //!TRO var_lf;',
    CobID: 'RW=?',
    FrameData: '080010719002AE036834',
    type: 'RW=?',
    AxisID: 1,
    CS: '7190',
    Object: '-',
    ObjectName: '-',
    Data: '!RO  0368 ',
    Interpretation: ' if Reference Over V32 => !RO VAR_LF [&32], reference can be P/S/T',
    errorStatus: '-'
  },
  {
    msgNr: 132,
    OriginalMessage: '0A 00 10 70 90 02 AE 00 00 12 45 21  //!TRO 0x1245',
    CobID: 'RW=?',
    FrameData: '0A0010709002AE0000124521',
    type: 'RW=?',
    AxisID: 1,
    CS: '7090',
    Object: '-',
    ObjectName: '-',
    Data: '!RO 0x12450000 ',
    Interpretation: '! if Reference Over val32 = 0x12450000 = 306511872, reference can be P/S/T',
    errorStatus: '-'
  },
  {
    msgNr: 133,
    OriginalMessage: '08 00 10 71 94 02 BA 02 28 03  //!RPO apos;',
    CobID: 'RW=?',
    FrameData: '080010719402BA022803',
    type: 'RW=?',
    AxisID: 1,
    CS: '7194',
    Object: '-',
    ObjectName: '-',
    Data: '!RPO/!RLPO 0x0228 ',
    Interpretation: '! if Relative Position Over V32 => !RPO/!RLPO APOS [&32]',
    errorStatus: '-'
  },
  {
    msgNr: 134,
    OriginalMessage: '0A 00 10 70 94 02 BA 28 96 00 01 99  //!RPO 0x12896',
    CobID: 'RW=?',
    FrameData: '0A0010709402BA2896000199',
    type: 'RW=?',
    AxisID: 1,
    CS: '7094',
    Object: '-',
    ObjectName: '-',
    Data: '!RPO/ !RLPO  0x00012896 ',
    Interpretation: '! if Relative Position Over val32  = 0x00012896 = 75926',
    errorStatus: '-'
  },
  {
    msgNr: 135,
    OriginalMessage: '08 00 10 71 94 02 BA 02 28 03  //!RLPO apos;',
    CobID: 'RW=?',
    FrameData: '080010719402BA022803',
    type: 'RW=?',
    AxisID: 1,
    CS: '7194',
    Object: '-',
    ObjectName: '-',
    Data: '!RPO/!RLPO 0x0228 ',
    Interpretation: '! if Relative Position Over V32 => !RPO/!RLPO APOS [&32]',
    errorStatus: '-'
  },
  {
    msgNr: 136,
    OriginalMessage: '0A 00 10 70 94 02 BA 28 96 00 01 99  //!RLPO 0x12896',
    CobID: 'RW=?',
    FrameData: '0A0010709402BA2896000199',
    type: 'RW=?',
    AxisID: 1,
    CS: '7094',
    Object: '-',
    ObjectName: '-',
    Data: '!RPO/ !RLPO  0x00012896 ',
    Interpretation: '! if Relative Position Over val32  = 0x00012896 = 75926',
    errorStatus: '-'
  },
  {
    msgNr: 137,
    OriginalMessage: '08 00 10 71 94 09 88 02 28 D8  //!RMPO apos;',
    CobID: 'RW=?',
    FrameData: '080010719409880228D8',
    type: 'RW=?',
    AxisID: 1,
    CS: '7194',
    Object: '-',
    ObjectName: '-',
    Data: '!RMPO 0x0228 ',
    Interpretation: '! if Relative Motor Position Over V32 => !RMPO APOS [&32]',
    errorStatus: '-'
  },
  {
    msgNr: 138,
    OriginalMessage: '0A 00 10 70 94 09 88 28 96 00 01 6E  //!RMPO 0x12896',
    CobID: 'RW=?',
    FrameData: '0A001070940988289600016E',
    type: 'RW=?',
    AxisID: 1,
    CS: '7094',
    Object: '-',
    ObjectName: '-',
    Data: '!RMPO 0x00012896 ',
    Interpretation: '! if Relative Motor Position Over val32  = 0x00012896 = 75926',
    errorStatus: '-'
  },
  {
    msgNr: 139,
    OriginalMessage: '08 00 10 71 85 02 BA 02 9E 6A  //!RPU cpos',
    CobID: 'RW=?',
    FrameData: '080010718502BA029E6A',
    type: 'RW=?',
    AxisID: 1,
    CS: '7185',
    Object: '-',
    ObjectName: '-',
    Data: '!RPU/!RLPU 0x029E ',
    Interpretation: '! if Relative Position Under V32 => !RPU/!RLPU CPOS [&32]',
    errorStatus: '-'
  },
  {
    msgNr: 140,
    OriginalMessage: '0A 00 10 70 85 02 BA 00 12 00 00 DD  //!RPU 0x12',
    CobID: 'RW=?',
    FrameData: '0A0010708502BA00120000DD',
    type: 'RW=?',
    AxisID: 1,
    CS: '7085',
    Object: '-',
    ObjectName: '-',
    Data: '!RPU/ !RLPU  0x00000012 ',
    Interpretation: '! if Relative Position Under val32  = 0x00000012 = 18',
    errorStatus: '-'
  },
  {
    msgNr: 141,
    OriginalMessage: '08 00 10 71 85 02 BA 02 9E 6A  //!RLPU cpos',
    CobID: 'RW=?',
    FrameData: '080010718502BA029E6A',
    type: 'RW=?',
    AxisID: 1,
    CS: '7185',
    Object: '-',
    ObjectName: '-',
    Data: '!RPU/!RLPU 0x029E ',
    Interpretation: '! if Relative Position Under V32 => !RPU/!RLPU CPOS [&32]',
    errorStatus: '-'
  },
  {
    msgNr: 142,
    OriginalMessage: '0A 00 10 70 85 02 BA 00 12 00 00 DD  //!RLPU 0x12',
    CobID: 'RW=?',
    FrameData: '0A0010708502BA00120000DD',
    type: 'RW=?',
    AxisID: 1,
    CS: '7085',
    Object: '-',
    ObjectName: '-',
    Data: '!RPU/ !RLPU  0x00000012 ',
    Interpretation: '! if Relative Position Under val32  = 0x00000012 = 18',
    errorStatus: '-'
  },
  {
    msgNr: 143,
    OriginalMessage: '08 00 10 71 85 09 88 02 9E 3F  //!RMPU cpos',
    CobID: 'RW=?',
    FrameData: '08001071850988029E3F',
    type: 'RW=?',
    AxisID: 1,
    CS: '7185',
    Object: '-',
    ObjectName: '-',
    Data: '!RMPU 0x029E ',
    Interpretation: '! if Relative Motor Position Under V32 => !RMPU CPOS [&32]',
    errorStatus: '-'
  },
  {
    msgNr: 144,
    OriginalMessage: '0A 00 10 70 85 09 88 00 12 00 00 B2  //!RMPU 0x12',
    CobID: 'RW=?',
    FrameData: '0A00107085098800120000B2',
    type: 'RW=?',
    AxisID: 1,
    CS: '7085',
    Object: '-',
    ObjectName: '-',
    Data: '!RMPU 0x00000012 ',
    Interpretation: '! if Relative Motor Position Under val32  = 0x00000012 = 18',
    errorStatus: '-'
  },
  {
    msgNr: 145,
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
    msgNr: 146,
    OriginalMessage: '06 10 10 2D 68 02 28 E5 //var_lf =apos',
    CobID: 'RW=?',
    FrameData: '0610102D680228E5',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2D68',
    Object: '-',
    ObjectName: '-',
    Data: '0x0368 = 0x0228',
    Interpretation: 'VAR_LF = APOS -- [V32D = V32S]',
    errorStatus: '-'
  },
  {
    msgNr: 147,
    OriginalMessage: '08 10 10 25 68 00 12 00 00 C7 //var_lf =0x12',
    CobID: 'RW=?',
    FrameData: '081010256800120000C7',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2568',
    Object: '-',
    ObjectName: '-',
    Data: '0x0368 = 0x0x00000012',
    Interpretation: 'VAR_LF = 0x00000012 -- [V32 = val32]',
    errorStatus: '-'
  },
  {
    msgNr: 148,
    OriginalMessage: '08 10 10 26 1E 00 12 00 00 7E //CAPPOS2=0x12',
    CobID: 'RW=?',
    FrameData: '081010261E001200007E',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '261E',
    Object: '-',
    ObjectName: '-',
    Data: '0x081E = 0x0x00000012',
    Interpretation: 'CAPPOS2 = 0x00000012 -- [V32 = val32]',
    errorStatus: '-'
  },
  {
    msgNr: 149,
    OriginalMessage: '06 10 10 21 66 00 12 BF // var_i1 = 0x12',
    CobID: 'RW=?',
    FrameData: '06101021660012BF',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2166',
    Object: '-',
    ObjectName: '-',
    Data: '0x0366 = 0x0012',
    Interpretation: 'VAR_I1 = 0x0012 -- [V16D = val16/TML label]',
    errorStatus: '-'
  },
  {
    msgNr: 150,
    OriginalMessage: '06 10 10 21 69 00 12 C2 // var_lf(H) = 0x12',
    CobID: 'RW=?',
    FrameData: '06101021690012C2',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2169',
    Object: '-',
    ObjectName: '-',
    Data: '0x0369 = 0x0012',
    Interpretation: '0x0369 = 0x0012 -- [V16D = val16/TML label]',
    errorStatus: '-'
  },
  {
    msgNr: 151,
    OriginalMessage: '06 10 10 21 68 00 12 C1 // var_lf(L)=0x12',
    CobID: 'RW=?',
    FrameData: '06101021680012C1',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2168',
    Object: '-',
    ObjectName: '-',
    Data: '0x0368 = 0x0012',
    Interpretation: 'VAR_LF = 0x0012 -- [V16D = val16/TML label]',
    errorStatus: '-'
  },
  {
    msgNr: 152,
    OriginalMessage: '06 10 10 29 66 03 67 1F // var_i1= var_i2',
    CobID: 'RW=?',
    FrameData: '061010296603671F',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2966',
    Object: '-',
    ObjectName: '-',
    Data: '0x0366 = 0x0367',
    Interpretation: 'VAR_I1 = VAR_I2 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 153,
    OriginalMessage: '06 10 10 29 66 03 69 21 // var_i1 =var_lf(H)',
    CobID: 'RW=?',
    FrameData: '0610102966036921',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2966',
    Object: '-',
    ObjectName: '-',
    Data: '0x0366 = 0x0369',
    Interpretation: 'VAR_I1 = 0x0369 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 154,
    OriginalMessage: '06 10 10 29 66 03 68 20 // var_i1 = var_lf(L)',
    CobID: 'RW=?',
    FrameData: '0610102966036820',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2966',
    Object: '-',
    ObjectName: '-',
    Data: '0x0366 = 0x0368',
    Interpretation: 'VAR_I1 = VAR_LF -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 155,
    OriginalMessage: '06 10 10 29 69 03 66 21 // var_lf(H) =var_i1',
    CobID: 'RW=?',
    FrameData: '0610102969036621',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2969',
    Object: '-',
    ObjectName: '-',
    Data: '0x0369 = 0x0366',
    Interpretation: '0x0369 = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 156,
    OriginalMessage: '06 10 10 29 68 03 66 20 // var_lf(L) =var_i1',
    CobID: 'RW=?',
    FrameData: '0610102968036620',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2968',
    Object: '-',
    ObjectName: '-',
    Data: '0x0368 = 0x0366',
    Interpretation: 'VAR_LF = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 157,
    OriginalMessage: '06 10 10 29 0C 03 66 C4 // AAR= var_i1',
    CobID: 'RW=?',
    FrameData: '061010290C0366C4',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '290C',
    Object: '-',
    ObjectName: '-',
    Data: '0x030C = 0x0366',
    Interpretation: 'AAR = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 158,
    OriginalMessage: '06 10 10 2B 13 03 66 CD // AAR_table= var_i1',
    CobID: 'RW=?',
    FrameData: '0610102B130366CD',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2B13',
    Object: '-',
    ObjectName: '-',
    Data: '0x0913 = 0x0366',
    Interpretation:
      'AAR_table = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 159,
    OriginalMessage: '06 10 10 28 FF 03 66 B6 // ACCPL= var_i1',
    CobID: 'RW=?',
    FrameData: '06101028FF0366B6',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '28FF',
    Object: '-',
    ObjectName: '-',
    Data: '0x02FF = 0x0366',
    Interpretation: 'ACCPL = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 160,
    OriginalMessage: '06 10 10 28 C7 03 66 7E // ACC_LIMIT= var_i1',
    CobID: 'RW=?',
    FrameData: '06101028C703667E',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '28C7',
    Object: '-',
    ObjectName: '-',
    Data: '0x02C7 = 0x0366',
    Interpretation:
      'ACC_LIMIT = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 161,
    OriginalMessage: '06 10 10 2B 12 03 66 CC // ACR= var_i1',
    CobID: 'RW=?',
    FrameData: '0610102B120366CC',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2B12',
    Object: '-',
    ObjectName: '-',
    Data: '0x0912 = 0x0366',
    Interpretation: 'ACR = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 162,
    OriginalMessage: '06 10 10 28 3C 03 66 F3 // AD0= var_i1',
    CobID: 'RW=?',
    FrameData: '061010283C0366F3',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '283C',
    Object: '-',
    ObjectName: '-',
    Data: '0x023C = 0x0366',
    Interpretation: 'AD0 = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 163,
    OriginalMessage: '06 10 10 28 44 03 66 FB // AD0OFF= var_i1',
    CobID: 'RW=?',
    FrameData: '06101028440366FB',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2844',
    Object: '-',
    ObjectName: '-',
    Data: '0x0244 = 0x0366',
    Interpretation: 'AD0OFF = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 164,
    OriginalMessage: '06 10 10 28 3D 03 66 F4 // AD1= var_i1',
    CobID: 'RW=?',
    FrameData: '061010283D0366F4',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '283D',
    Object: '-',
    ObjectName: '-',
    Data: '0x023D = 0x0366',
    Interpretation: 'AD1 = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 165,
    OriginalMessage: '06 10 10 28 45 03 66 FC // AD1OFF= var_i1',
    CobID: 'RW=?',
    FrameData: '06101028450366FC',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2845',
    Object: '-',
    ObjectName: '-',
    Data: '0x0245 = 0x0366',
    Interpretation: 'AD1OFF = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 166,
    OriginalMessage: '06 10 10 28 3E 03 66 F5 // AD2= var_i1',
    CobID: 'RW=?',
    FrameData: '061010283E0366F5',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '283E',
    Object: '-',
    ObjectName: '-',
    Data: '0x023E = 0x0366',
    Interpretation: 'AD2 = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 167,
    OriginalMessage: '06 10 10 2B DD 03 66 97 // AD2FIL_CFG= var_i1',
    CobID: 'RW=?',
    FrameData: '0610102BDD036697',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2BDD',
    Object: '-',
    ObjectName: '-',
    Data: '0x09DD = 0x0366',
    Interpretation:
      'AD2FIL_CFG = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 168,
    OriginalMessage: '06 10 10 2B DC 03 66 96 // AD2FIL_VAL= var_i1',
    CobID: 'RW=?',
    FrameData: '0610102BDC036696',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2BDC',
    Object: '-',
    ObjectName: '-',
    Data: '0x09DC = 0x0366',
    Interpretation:
      'AD2FIL_VAL = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 169,
    OriginalMessage: '06 10 10 28 46 03 66 FD // AD2OFF= var_i1',
    CobID: 'RW=?',
    FrameData: '06101028460366FD',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2846',
    Object: '-',
    ObjectName: '-',
    Data: '0x0246 = 0x0366',
    Interpretation: 'AD2OFF = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 170,
    OriginalMessage: '06 10 10 28 3F 03 66 F6 // AD3= var_i1',
    CobID: 'RW=?',
    FrameData: '061010283F0366F6',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '283F',
    Object: '-',
    ObjectName: '-',
    Data: '0x023F = 0x0366',
    Interpretation: 'AD3 = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 171,
    OriginalMessage: '06 10 10 28 47 03 66 FE // AD3OFF= var_i1',
    CobID: 'RW=?',
    FrameData: '06101028470366FE',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2847',
    Object: '-',
    ObjectName: '-',
    Data: '0x0247 = 0x0366',
    Interpretation: 'AD3OFF = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 172,
    OriginalMessage: '06 10 10 28 40 03 66 F7 // AD4= var_i1',
    CobID: 'RW=?',
    FrameData: '06101028400366F7',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2840',
    Object: '-',
    ObjectName: '-',
    Data: '0x0240 = 0x0366',
    Interpretation: 'AD4 = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 173,
    OriginalMessage: '06 10 10 28 48 03 66 FF // AD4OFF= var_i1',
    CobID: 'RW=?',
    FrameData: '06101028480366FF',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2848',
    Object: '-',
    ObjectName: '-',
    Data: '0x0248 = 0x0366',
    Interpretation: 'AD4OFF = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 174,
    OriginalMessage: '06 10 10 28 41 03 66 F8 // AD5= var_i1',
    CobID: 'RW=?',
    FrameData: '06101028410366F8',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2841',
    Object: '-',
    ObjectName: '-',
    Data: '0x0241 = 0x0366',
    Interpretation: 'AD5 = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 175,
    OriginalMessage: '06 10 10 28 49 03 66 00 // AD5OFF= var_i1',
    CobID: 'RW=?',
    FrameData: '0610102849036600',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2849',
    Object: '-',
    ObjectName: '-',
    Data: '0x0249 = 0x0366',
    Interpretation: 'AD5OFF = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 176,
    OriginalMessage: '06 10 10 28 42 03 66 F9 // AD6= var_i1',
    CobID: 'RW=?',
    FrameData: '06101028420366F9',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2842',
    Object: '-',
    ObjectName: '-',
    Data: '0x0242 = 0x0366',
    Interpretation: 'AD6 = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 177,
    OriginalMessage: '06 10 10 28 4A 03 66 01 // AD6OFF= var_i1',
    CobID: 'RW=?',
    FrameData: '061010284A036601',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '284A',
    Object: '-',
    ObjectName: '-',
    Data: '0x024A = 0x0366',
    Interpretation: 'AD6OFF = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 178,
    OriginalMessage: '06 10 10 28 43 03 66 FA // AD7= var_i1',
    CobID: 'RW=?',
    FrameData: '06101028430366FA',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2843',
    Object: '-',
    ObjectName: '-',
    Data: '0x0243 = 0x0366',
    Interpretation: 'AD7 = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 179,
    OriginalMessage: '06 10 10 28 4B 03 66 02 // AD7OFF= var_i1',
    CobID: 'RW=?',
    FrameData: '061010284B036602',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '284B',
    Object: '-',
    ObjectName: '-',
    Data: '0x024B = 0x0366',
    Interpretation: 'AD7OFF = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 180,
    OriginalMessage: '06 10 10 2A 0B 03 66 C4 // AD8= var_i1',
    CobID: 'RW=?',
    FrameData: '0610102A0B0366C4',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2A0B',
    Object: '-',
    ObjectName: '-',
    Data: '0x080B = 0x0366',
    Interpretation: 'AD8 = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 181,
    OriginalMessage: '06 10 10 2B ED 03 66 A7 // AD9= var_i1',
    CobID: 'RW=?',
    FrameData: '0610102BED0366A7',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2BED',
    Object: '-',
    ObjectName: '-',
    Data: '0x09ED = 0x0366',
    Interpretation: 'AD9 = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 182,
    OriginalMessage: '06 10 10 2A 55 03 66 0E // AEI_CLKDIV= var_i1',
    CobID: 'RW=?',
    FrameData: '0610102A5503660E',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2A55',
    Object: '-',
    ObjectName: '-',
    Data: '0x0855 = 0x0366',
    Interpretation:
      'AEI_CLKDIV = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 183,
    OriginalMessage: '06 10 10 28 FA 03 66 B1 // AEI_CMPTIME= var_i1',
    CobID: 'RW=?',
    FrameData: '06101028FA0366B1',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '28FA',
    Object: '-',
    ObjectName: '-',
    Data: '0x02FA = 0x0366',
    Interpretation:
      'AEI_CMPTIME = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 184,
    OriginalMessage: '06 10 10 2A 54 03 66 0D // AEI_PER= var_i1',
    CobID: 'RW=?',
    FrameData: '0610102A5403660D',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2A54',
    Object: '-',
    ObjectName: '-',
    Data: '0x0854 = 0x0366',
    Interpretation: 'AEI_PER = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 185,
    OriginalMessage: '06 10 10 2A AF 03 66 68 // ANALOGUEREFERENCE= var_i1',
    CobID: 'RW=?',
    FrameData: '0610102AAF036668',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2AAF',
    Object: '-',
    ObjectName: '-',
    Data: '0x08AF = 0x0366',
    Interpretation:
      'ANALOGUEREFERENCE = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 186,
    OriginalMessage: '06 10 10 2A 9C 03 66 55 // ANGLE_INC= var_i1',
    CobID: 'RW=?',
    FrameData: '0610102A9C036655',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2A9C',
    Object: '-',
    ObjectName: '-',
    Data: '0x089C = 0x0366',
    Interpretation:
      'ANGLE_INC = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 187,
    OriginalMessage: '06 10 10 2B DE 03 66 98 // ASPD_BQ_INI= var_i1',
    CobID: 'RW=?',
    FrameData: '0610102BDE036698',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2BDE',
    Object: '-',
    ObjectName: '-',
    Data: '0x09DE = 0x0366',
    Interpretation:
      'ASPD_BQ_INI = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 188,
    OriginalMessage: '06 10 10 28 01 03 66 B8 // ASR= var_i1',
    CobID: 'RW=?',
    FrameData: '06101028010366B8',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2801',
    Object: '-',
    ObjectName: '-',
    Data: '0x0201 = 0x0366',
    Interpretation: 'ASR = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 189,
    OriginalMessage: '06 10 10 28 A7 03 66 5E // ASR2= var_i1',
    CobID: 'RW=?',
    FrameData: '06101028A703665E',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '28A7',
    Object: '-',
    ObjectName: '-',
    Data: '0x02A7 = 0x0366',
    Interpretation: 'ASR2 = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 190,
    OriginalMessage: '06 10 10 20 FD 00 21 64 //komega = 0x21',
    CobID: 'RW=?',
    FrameData: '06101020FD002164',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '20FD',
    Object: '-',
    ObjectName: '-',
    Data: '0x02FD = 0x0021',
    Interpretation: 'KOMEGA = 0x0021 -- [V16D = val16/TML label]',
    errorStatus: '-'
  },
  {
    msgNr: 191,
    OriginalMessage: '06 10 10 23 B7 00 21 21 //HOMING_NR = 0x21',
    CobID: 'RW=?',
    FrameData: '06101023B7002121',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '23B7',
    Object: '-',
    ObjectName: '-',
    Data: '0x09B7 = 0x0021',
    Interpretation: 'HOMING_NR = 0x0021 -- [V16D = val16/TML label]',
    errorStatus: '-'
  },
  {
    msgNr: 192,
    OriginalMessage: '06 10 10 21 9F 00 21 07 //HOME_NR_6098 =0x21',
    CobID: 'RW=?',
    FrameData: '061010219F002107',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '219F',
    Object: '-',
    ObjectName: '-',
    Data: '0x039F = 0x0021',
    Interpretation: 'HOME_NR_6098 = 0x0021 -- [V16D = val16/TML label]',
    errorStatus: '-'
  },
  {
    msgNr: 193,
    OriginalMessage: '06 10 10 20 39 00 21 A0 //IA= 0x21',
    CobID: 'RW=?',
    FrameData: '06101020390021A0',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2039',
    Object: '-',
    ObjectName: '-',
    Data: '0x0239 = 0x0021',
    Interpretation: 'IA = 0x0021 -- [V16D = val16/TML label]',
    errorStatus: '-'
  },
  {
    msgNr: 194,
    OriginalMessage: '06 10 10 22 01 00 21 6A //ENCRES = 0x21',
    CobID: 'RW=?',
    FrameData: '061010220100216A',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2201',
    Object: '-',
    ObjectName: '-',
    Data: '0x0801 = 0x0021',
    Interpretation: 'ENCRES = 0x0021 -- [V16D = val16/TML label]',
    errorStatus: '-'
  },
  {
    msgNr: 195,
    OriginalMessage: '//',
    CobID: 'xx',
    FrameData: '-',
    type: 'xx',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: 'Can`t extract data from this row',
    Data: '-',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 196,
    OriginalMessage: '06 10 10 21 66 00 12 BF  //var_i1 = 0x12',
    CobID: 'RW=?',
    FrameData: '06101021660012BF',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2166',
    Object: '-',
    ObjectName: '-',
    Data: '0x0366 = 0x0012',
    Interpretation: 'VAR_I1 = 0x0012 -- [V16D = val16/TML label]',
    errorStatus: '-'
  },
  {
    msgNr: 197,
    OriginalMessage: '08 10 10 25 68 00 12 00 00 C7  //var_lf = 0x12',
    CobID: 'RW=?',
    FrameData: '081010256800120000C7',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2568',
    Object: '-',
    ObjectName: '-',
    Data: '0x0368 = 0x0x00000012',
    Interpretation: 'VAR_LF = 0x00000012 -- [V32 = val32]',
    errorStatus: '-'
  },
  {
    msgNr: 198,
    OriginalMessage: '06 10 10 29 66 03 67 1F  //var_i1 =var_i2',
    CobID: 'RW=?',
    FrameData: '061010296603671F',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2966',
    Object: '-',
    ObjectName: '-',
    Data: '0x0366 = 0x0367',
    Interpretation: 'VAR_I1 = VAR_I2 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 199,
    OriginalMessage: '06 10 10 2D 68 02 28 E5  //var_lf = apos',
    CobID: 'RW=?',
    FrameData: '0610102D680228E5',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2D68',
    Object: '-',
    ObjectName: '-',
    Data: '0x0368 = 0x0228',
    Interpretation: 'VAR_LF = APOS -- [V32D = V32S]',
    errorStatus: '-'
  },
  {
    msgNr: 200,
    OriginalMessage: '08 10 10 25 68 00 12 00 00 C7  //var_lf = 0x12',
    CobID: 'RW=?',
    FrameData: '081010256800120000C7',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2568',
    Object: '-',
    ObjectName: '-',
    Data: '0x0368 = 0x0x00000012',
    Interpretation: 'VAR_LF = 0x00000012 -- [V32 = val32]',
    errorStatus: '-'
  },
  {
    msgNr: 201,
    OriginalMessage: '06 10 10 29 66 03 69 21  //var_i1 = var_lf(H)',
    CobID: 'RW=?',
    FrameData: '0610102966036921',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2966',
    Object: '-',
    ObjectName: '-',
    Data: '0x0366 = 0x0369',
    Interpretation: 'VAR_I1 = 0x0369 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 202,
    OriginalMessage: '06 10 10 29 66 03 68 20  //var_i1 = var_lf(L)',
    CobID: 'RW=?',
    FrameData: '0610102966036820',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2966',
    Object: '-',
    ObjectName: '-',
    Data: '0x0366 = 0x0368',
    Interpretation: 'VAR_I1 = VAR_LF -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 203,
    OriginalMessage: '06 10 10 29 69 03 66 21  //var_lf(H) = var_i1',
    CobID: 'RW=?',
    FrameData: '0610102969036621',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2969',
    Object: '-',
    ObjectName: '-',
    Data: '0x0369 = 0x0366',
    Interpretation: '0x0369 = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 204,
    OriginalMessage: '06 10 10 29 68 03 66 20  //var_lf(L) = var_i1',
    CobID: 'RW=?',
    FrameData: '0610102968036620',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2968',
    Object: '-',
    ObjectName: '-',
    Data: '0x0368 = 0x0366',
    Interpretation: 'VAR_LF = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 205,
    OriginalMessage: '08 10 10 25 68 56 78 12 34 C9 //var_lf = 0x12345678',
    CobID: 'RW=?',
    FrameData: '081010256856781234C9',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '2568',
    Object: '-',
    ObjectName: '-',
    Data: '0x0368 = 0x0x12345678',
    Interpretation: 'VAR_LF = 0x12345678 -- [V32 = val32]',
    errorStatus: '-'
  },
  {
    msgNr: 206,
    OriginalMessage: ' //',
    CobID: 'xx',
    FrameData: '-',
    type: 'xx',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: 'Can`t extract data from this row',
    Data: '-',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 207,
    OriginalMessage: '06 10 10 31 66 03 67 27  //var_i1 = - var_i2',
    CobID: 'RW=?',
    FrameData: '0610103166036727',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '3166',
    Object: '-',
    ObjectName: '-',
    Data: '0x0366 = - 0x0367',
    Interpretation: 'VAR_I1 = - VAR_I2 -- [V16D = -V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 208,
    OriginalMessage: '06 10 10 35 68 02 28 ED  //var_lf =-apos',
    CobID: 'RW=?',
    FrameData: '06101035680228ED',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '3568',
    Object: '-',
    ObjectName: '-',
    Data: '0x0368 = - 0x0228',
    Interpretation: 'VAR_LF = - APOS -- [V32D = -V32S]',
    errorStatus: '-'
  },
  {
    msgNr: 209,
    OriginalMessage: '06 10 10 39 66 00 12 D7  //var_i1 += 0x12',
    CobID: 'RW=?',
    FrameData: '06101039660012D7',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '3966',
    Object: '-',
    ObjectName: '-',
    Data: '0x0366 += 0x0012',
    Interpretation: 'VAR_I1 += 0x0012 -- [V16 += val16 ]',
    errorStatus: '-'
  },
  {
    msgNr: 210,
    OriginalMessage: '08 10 10 3D 68 00 12 00 00 DF  //var_lf += 0x12',
    CobID: 'RW=?',
    FrameData: '0810103D6800120000DF',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '3D68',
    Object: '-',
    ObjectName: '-',
    Data: '0x0368 += 0x0x00000012',
    Interpretation: 'VAR_LF += 0x00000012 -- [V32 += val32 ]',
    errorStatus: '-'
  },
  {
    msgNr: 211,
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
    msgNr: 212,
    OriginalMessage: '06 10 10 41 66 03 67 37  //var_i1 += var_i2',
    CobID: 'RW=?',
    FrameData: '0610104166036737',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '4166',
    Object: '-',
    ObjectName: '-',
    Data: '0x0366 += 0x0367',
    Interpretation: 'VAR_I1 += VAR_I2 -- [V16D += V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 213,
    OriginalMessage: '06 10 10 45 68 02 28 FD  //var_lf += apos',
    CobID: 'RW=?',
    FrameData: '06101045680228FD',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '4568',
    Object: '-',
    ObjectName: '-',
    Data: '0x0368 += 0x0228',
    Interpretation: 'VAR_LF += APOS -- [V32D += V32S ]',
    errorStatus: '-'
  },
  {
    msgNr: 214,
    OriginalMessage: '06 10 10 49 66 00 12 E7  //var_i1 -= 0x12',
    CobID: 'RW=?',
    FrameData: '06101049660012E7',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '4966',
    Object: '-',
    ObjectName: '-',
    Data: '0x0366 -= 0x0012',
    Interpretation: 'VAR_I1 -= 0x0012 -- [V16 -= val16]',
    errorStatus: '-'
  },
  {
    msgNr: 215,
    OriginalMessage: '08 10 10 4C 28 00 12 00 00 AE  //apos -= 0x12',
    CobID: 'RW=?',
    FrameData: '0810104C2800120000AE',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '4C28',
    Object: '-',
    ObjectName: '-',
    Data: '0x0228 -= 0x0x00000012',
    Interpretation: 'APOS -= 0x00000012 -- [V32 -= val32]',
    errorStatus: '-'
  },
  {
    msgNr: 216,
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
    msgNr: 217,
    OriginalMessage: '06 10 10 51 66 03 67 47  //var_i1 -= var_i2',
    CobID: 'RW=?',
    FrameData: '0610105166036747',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '5166',
    Object: '-',
    ObjectName: '-',
    Data: '0x0366 -= 0x0367',
    Interpretation: 'VAR_I1 -= VAR_I2 -- [V16D -= V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 218,
    OriginalMessage: '06 10 10 54 28 02 9E 42  //apos -= cpos',
    CobID: 'RW=?',
    FrameData: '0610105428029E42',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '5428',
    Object: '-',
    ObjectName: '-',
    Data: '0x0228 -= 0x029E',
    Interpretation: 'APOS -= CPOS -- [V32D -= V32S ]',
    errorStatus: '-'
  },
  {
    msgNr: 219,
    OriginalMessage: '08 10 10 59 66 12 34 23 45 95  //SRB var_i1,0x1234, 0x2345',
    CobID: 'RW=?',
    FrameData: '08101059661234234595',
    type: 'RW=?',
    AxisID: 'G1',
    CS: '5966',
    Object: '-',
    ObjectName: '-',
    Data: 'SRB 0x0366, 0x1234, 0x2345',
    Interpretation: 'SRB 0xVAR_I1,AND: 0x1234, OR: 0x2345',
    errorStatus: '-'
  },
  {
    msgNr: 220,
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
