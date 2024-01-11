export const Verify_RS232_rawList = `

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

18:12:48 Bytes Write :  06 00 10 74 01 40 26 F1 //TML>  call loop1 0x4026
18:12:48 Bytes Read :  4F
18:13:25 Bytes Write :  08 00 10 74 91 03 66 40 17 DD // TML> call loop, var_i1, LT
18:13:25 Bytes Read :  4F
18:13:30 Bytes Write :  08 00 10 74 85 03 66 40 17 D1 //TML> call loop, var_i1, GT
18:13:30 Bytes Read :  4F


06 10 10 74 00 40 12 EC //goto 0x4012;
08 10 10 74 88 03 66 40 12 DF //goto 0x4012, var_i1, LEQ
08 10 10 74 A0 03 66 40 12 F7 //goto 0x4012, var_i1, NEQ

08 10 10 75 91 02 28 40 12 AA //call 0x4012, apos, LT
08 10 10 75 82 02 9E 40 12 11 //goto 0x4012, cpos , geq
06 10 10 1E 01 03 66 AE  //calls var_i1

08 10 10 71 B9 02 C2 02 28 40  //!RT apos
0A 10 10 70 B9 02 C2 00 12 00 00 29  //!RT 0x12

08 10 10 71 81 02 AE 02 28 F4 //!RU apos
0A 10 10 70 81 02 AE 00 12 00 00 DD //!RU 0x12
08 10 10 71 81 02 AE 02 28 F4 //!PRU apos
0A 10 10 70 81 02 AE 00 12 00 00 DD //!PRU 0x12
08 10 10 71 81 02 AE 02 28 F4 //!SRU apos
0A 10 10 70 81 02 AE 00 12 00 00 DD //!SRU 0x12
08 10 10 71 81 02 AE 02 28 F4 //!TRU apos
0A 10 10 70 81 02 AE 00 00 00 12 DD //!TRU 0x12

08 10 10 71 96 09 8A 02 A0 64 //!LSO cspd
0A 10 10 70 96 09 8A 00 12 00 00 D5 //!LSO 0x12
08 10 10 71 96 02 2C 02 A0 FF //!MSO cspd
0A 10 10 70 96 02 2C 00 12 00 00 70 //!MSO 0x12
08 00 10 71 87 09 8A 02 A0 45 //!LSU cspd
0A 00 10 70 87 09 8A 00 32 00 00 D6 //!LSU 0x32
08 00 10 71 87 02 2C 02 A0 E0 //!MSU cspd
0A 00 10 70 87 02 2C 56 78 12 34 53 //!MSU 0x12345678
08 10 10 25 68 00 12 00 00 C7 //var_lf =0x12
08 00 10 71 90 02 9E 02 28 E3  // !VO cpos, apos
0A 00 10 70 90 02 9E 56 78 12 34 CE  // !VO cpos, 0x12345678
08 00 10 71 81 02 9E 02 28 D4  // !VU cpos, apos
0A 00 10 70 81 02 9E 00 12 00 00 BD  // !VU cpos, 0x12
08 00 10 06 08 56 78 12 34 3A //wait! 0x12345678
04 00 10 04 08 20 
04 00 10 80 28 BC //SAP apos    
04 00 10 80 9E 32 //SAP cpos    
04 00 10 81 68 FD //SAP var_lf  
06 00 10 7D 67 02 28 24  //SEG var_i2 , APOS
0A 10 00 91 05 03 68 78 91 34 56 AD //Checksum dont match
08 00 10 C9 63 02 28 03 67 D8 DD //Length dont match 
08 00 10 C9 63 02 28 03 67 D8  //PTP apos, var_i2,99
08 00 10 C9 64 02 28 03 66 D8  //PTP apos, var_i1, 100
08 10 10 25 68 00 12 00 00 C7 //var_lf =0x12
08 00 10 71 90 02 9E 02 28 E3  // !VO cpos, apos
0A 00 10 70 90 02 9E 56 78 12 34 CE  // !VO cpos, 0x12345678
08 00 10 71 81 02 9E 02 28 D4  // !VU cpos, apos
0A 00 10 70 81 02 9E 00 12 00 00 BD  // !VU cpos, 0x12
08 00 10 06 08 56 78 12 34 3A //wait! 0x12345678
04 00 10 04 08 20 
04 00 10 80 28 BC //SAP apos    
04 00 10 80 9E 32 //SAP cpos    
04 00 10 81 68 FD //SAP var_lf  
06 00 10 7D 67 02 28 24  //SEG var_i2 , APOS
04 00 10 01 02 17 /axison
04 00 10 00 02 16 /axisoff
04 00 10 00 20 34 /endinit
0A 00 10 C8 37 56 78 12 34 00 55 82 //PTP 0x12345678, 0x55,55
0A 00 10 19 03 02 9E 02 A0 03 66 E1  //PVTP cpos, cspd, var_i1, 3
0C 00 10 18 06 22 34 11 00 01 29 00 06 D1  //PVTP 0x112234, 0x129, 0x6, 6
0C 00 10 18 06 34 56 12 00 12 56 00 06 44 //PVTP 0x123456, 0x1256, 0x6, 6
0C 00 10 18 06 34 56 12 00 92 56 00 65 23 //PVTP 0x123456, 0x9256, 0x65, 6
0C 00 10 18 06 01 23 00 00 11 15 01 55 DA //PVTP 0x123, 0x1115, 0x155,6
08 00 10 84 00 56 78 12 34 B0 //sap 0x12345678
0A 00 10 78 00 85 21 56 78 12 34 4C //SEG 0x8521, 0x12345678

06 00 10 18 80 00 45 F3 //SETPT 0x45
08 00 10 14 04 34 56 32 12 FE //setsync 0x32123456

04 00 10 01 C4 D9 //STOP 
04 00 10 00 C4 D8 //STOP !
04 00 10 01 08 1D //UPD 
04 00 10 00 08 1C //UPD!
06 00 10 2C B2 02 28 1E //STA

04 00 10 06 81 9B //DISLSN
04 00 10 06 A0 BA //DISLSP
04 00 10 06 01 1B //ENLSN0
04 00 10 07 01 1C //ENLSN1
04 00 10 06 20 3A //ENLSP0
04 00 10 07 20 3B //ENLSP1
08 00 10 ED 00 00 1F 03 66 8D //OUT(0,1,2,3,4) = var_i1;
08 00 10 ED 00 00 18 03 66 86 //OUT(3,4) = var_i1;

08 00 10 EC 00 00 1F 00 12 35 //OUT(0,1,2,3,4) = 0x12
08 00 10 EC 00 00 18 00 12 2E //OUT(3,4) = 0x12;

08 00 10 E8 00 03 40 03 66 AC  //var_i1 = IN(6,8,9)
06 00 10 EE 00 00 0E 12  //SetasInput(1,2,3)
06 00 10 EF 00 00 0E 13  //SetasOutput(1,2,3)
0A 00 10 98 B4 00 20 03 66 03 67 59  //[2] (var_i1),dm = var_i2
0A 00 10 98 B4 00 30 03 66 03 67 69  //[3] (var_i1),dm = var_i2
0A 00 10 98 B4 00 A0 03 66 03 67 D9  //[10] (var_i1),dm = var_i2
 //
0A 00 10 98 B4 10 20 03 66 03 67 69  //[G2] (var_i1),dm = var_i2
0A 00 10 98 B4 14 00 03 66 03 67 4D  //[G7] (var_i1),dm = var_i2
0A 00 10 98 B0 14 00 03 66 03 67 49  //[G7] (var_i1),pm = var_i2
0A 00 10 98 B8 14 00 03 66 03 67 51  //[G7] (var_i1),spi = var_i2

0A 00 10 98 B9 14 00 03 67 02 9E 89 //[G7] (var_i2),spi= cpos
0A 00 10 98 38 14 00 03 67 03 66 D1 //[G7] (var_i2+),spi= var_i1
0A 00 10 98 39 14 00 03 67 02 9E 09 //[G7] (var_i2+),spi= cpos
0A 00 10 98 14 00 30 03 66 03 67 C9 //[3]var_i1,dm =var_i2
0A 00 10 98 15 00 30 03 68 02 9E 02 //[3]var_lf,dm =cpos
0A 00 10 9D 88 10 10 03 67 03 66 32 //var_i1 = [G1] (var_i2),spi
0A 00 10 9D 08 10 10 03 67 03 66 B2 //var_i1 = [G1] (var_i2+),spi
0A 00 10 9D 84 10 10 03 67 03 66 2E //var_i1 = [G1] (var_i2),dm
0A 00 10 9D 89 10 10 03 67 02 28 F4 //apos = [G1] (var_i2),spi
0A 00 10 9D 09 10 10 03 67 02 B2 FE //tpos = [G1] (var_i2+),spi


0A 00 10 9C 04 00 50 03 67 03 66 DD //var_i1 = [5]var_i2,dm
0A 00 10 9C 05 00 50 02 B2 02 28 E9 //apos = [5]tpos,dm
08 00 10 B9 66 00 30 03 67 D1 //[3] var_i1 = var_i2
08 00 10 BC 28 00 40 02 9E DC //[4] apos=cpos
08 00 10 E4 9E 10 10 02 28 E4 //apos = [G1] cpos

08 00 10 BB B7 05 80 03 67 79 //[88] homing_nr = var_i2
08 00 10 BB B7 05 80 02 34 45 //[88] homing_nr = id
08 00 10 E1 67 00 F0 03 66 B9  //var_i1 = [15] var_i2
06 00 10 09 40 03 66 C8 //addgrid var_i1
06 00 10 08 40 00 10 6E //addgrid (5)

06 00 10 08 01 00 05 24 //axisid 5
06 00 10 09 01 03 66 89 //axisid var_i1
06 00 10 08 01 00 37 56 //axisid (55
06 00 10 09 01 03 66 89 //axisid var_i1

06 00 10 08 80 00 01 9F //remgrid (0x1)
06 00 10 09 80 03 66 08 //remgrid var_i1
06 00 10 08 80 00 40 DE //remgrid (0x7)

04 00 10 01 02 17  //axison
08 00 10 94 00 10 40 01 02 FF  //[G3] {axison;}
06 00 10 29 66 03 67 0F  //var_i1= var_i2;
0A 00 10 94 01 10 40 29 66 03 67 F8  //[G3] {var_i1= var_i2;}
08 00 10 59 09 FF FF 20 00 98  //CPA
0C 00 10 94 02 10 40 59 09 FF FF 20 00 82  //[G3] {CPA;}
0A 00 10 94 01 10 40 89 25 02 28 D7 //[G3] {APOS <<=5;}
0C 00 11 B4 05 00 10 02 28 5A 5B AB BA 2A //TakeData 32V ?apos
08 00 30 B0 04 00 21 03 67 77 //?var_i2
08 00 30 B0 05 00 21 02 28 38 //?apos
0A 00 21 B4 04 00 30 03 67 56 78 4B //var_i2 == 5678
0C 00 21 B4 05 00 30 02 28 56 78 12 34 54 //apos == 12345678
08 00 30 B2 04 00 21 09 B7 CF //?? homing_nr 
08 00 30 B2 05 00 21 02 A0 B2 //??CSPD
4F 
08 00 21 D4 03 09 B7 56 78 8E  //??homing_nr == 5678
4F 
0A 00 21 D5 03 02 A0 56 78 12 34 B9 //??CSPD == 12345678
08 00 10 B0 04 00 11 03 66 46 //GiveData ?var_i1
4F 
0A 00 11 B4 04 00 10 03 66 5A 5B 01 // TakeData ?var_i1
08 00 10 B0 05 00 11 02 28 08 //?apos
4F 
0A 00 20 9D 08 0F F0 03 66 03 67 A1 
06 00 20 A1 66 00 21 4E //?TML var_i1
06 00 20 A5 68 00 21 54 //?TML VAr_lf
08 00 21 A9 66 00 20 12 34 9E // TML var_i1 ==0x1234
0A 00 21 AD 68 00 20 56 78 12 34 74 // TML var_lf ==0x12345678
06 00 10 D8 01 00 11 00 //GETVER
08 00 11 D8 01 34 4B 35 31  D7 //GETVER = F514K
08 00 20 D6 00 00 21 00 01 20 //PING 0x1
08 00 20 D6 00 00 21 00 55 74 //PING 0x55
04 00 20 00 01 25 //end
04 00 20 95 00 B9 //ENEEPROM
04 00 20 00 00 24 //nop
06 00 20 09 20 03 66 B8 //scibr VAR_I1
06 00 20 08 20 00 12 60 //scibr 0x12
06 00 20 09 10 03 66 A8 //SPIBR var_i1
06 00 20 08 10 00 12 50 //SPIBR 0x12
06 00 20 08 04 00 12 44 //CANBR 0x12
08 00 20 D8 C0 03 66 03 67 93 //INITCAM var_i1, var_i2

19:27:59 Bytes Write :  04 00 10 96 00 AA
19:27:59 Bytes Read :  4F
19:28:01 Bytes Write :  04 00 10 96 01 AB
19:28:01 Bytes Read :  4F
19:28:02 Bytes Write :  04 00 10 96 02 AC
19:28:02 Bytes Read :  4F
19:28:03 Bytes Write :  04 00 10 96 03 AD
19:28:03 Bytes Read :  4F
19:15:09 Bytes Write :  0A 00 10 DB 10 03 66 50 00 50 07 15
19:15:09 Bytes Read :  4F
19:15:14 Bytes Write :  0A 00 10 DB 30 03 66 50 00 50 07 35
19:15:14 Bytes Read :  4F
19:15:25 Bytes Write :  0A 00 10 DB 50 03 66 50 00 50 07 55
19:15:25 Bytes Read :  4F

19:08:31 Bytes Write :  0A 00 10 DB 50 03 66 50 00 50 07 55
19:08:31 Bytes Read :  4F
19:08:56 Bytes Write :  08 00 10 B0 04 00 11 03 66 46
19:08:56 Bytes Read :  4F
19:08:56 Bytes Read :  0A
19:08:56 Bytes Read :  00 11 B4 04 00 10 03 66 F5 68 A9
08 00 10 90 A4 03 66 00 12 C7
18:14:16 Bytes Write :  08 10 00 D6 00 00 11 07 D0 D6
18:14:16 Bytes Read :  4F
18:14:16 Bytes Read :  08
18:14:16 Bytes Read :  00 11 D6 01 35 31 34 4C D6
18:14:16 Bytes Read :  08
18:14:16 Bytes Read :  00 11 D6 02 35 30 39 4E DD
08 00 10 C9 63 02 28 03 67 D8 DD
08 00 00 B0 00 00 01 00 00 B9
17:29:47 Bytes Write :  04 00 10 04 02 1A
17:29:47 Bytes Read :  4F
17:29:47 Bytes Write :  FF
17:29:47 Bytes Read :  0D
17:29:47 Bytes Write :  FF
17:29:47 Bytes Read :  0D
17:29:47 Bytes Write :  06 00 10 D8 01 00 11 00
17:29:47 Bytes Read :  4F
17:29:47 Bytes Read :  08
17:29:47 Bytes Read :  00 11 D8 01 35 31 34 4C D8
17:29:47 Bytes Write :  06 00 10 08 20 00 04 42
17:29:47 Bytes Read :  4F
17:29:47 Bytes Write :  06 00 10 D8 01 00 11 00
17:29:47 Bytes Read :  4F
17:29:47 Bytes Read :  08
17:29:47 Bytes Read :  00 11 D8 01 35 31 34 4C D8
17:29:47 Bytes Write :  08 00 00 B0 00 00 01 00 00 B9
17:29:47 Bytes Read :  4F
17:29:47 Bytes Read :  0A
17:29:47 Bytes Read :  00 01 B4 04 00 10 00 00 24 F3 EA
17:29:47 Bytes Write :  06 00 10 D8 01 00 11 00
17:29:47 Bytes Read :  4F
17:29:47 Bytes Read :  08
17:29:47 Bytes Read :  00 11 D8 01 35 31 34 4C D8

`
export const Verify_TechnoCAN_rawList = `
12F B4 90 66 03 67 03 //(var_i1),dm = var_i2
12F B0 90 66 03 67 03 //(var_i1),pm = var_i2
12F B8 90 66 03 67 03 //(var_i1),spi = var_i2
12F B5 90 66 03 68 03 //(var_i1),dm = var_lf
12F B1 90 66 03 68 03 //(var_i1),pm = var_lf
12F B9 90 66 03 68 03 //(var_i1),spi = var_lf
12F A4 90 66 03 12 00 //(var_i1),dm = q0x12
12F A0 90 66 03 12 00 //(var_i1),pm = q0x12
12F A8 90 66 03 45 00 //(var_i1),spi = qq0x45
12F A5 90 66 03 78 56 34 12 //(var_i1),dm = qqq0x12345678
12F A1 90 66 03 78 56 34 12 //(var_i1),pm = qqq0x12345678
12F A9 90 66 03 78 56 34 12 //(var_i1),spi = qqq0x12345678
12F 34 90 66 03 67 03 //(var_i1+),dm = var_i2
12F 30 90 66 03 67 03 //(var_i1+),pm = var_i2
12F 38 90 66 03 67 03 //(var_i1+),spi = var_i2
12F 35 90 66 03 68 03 //(var_i1+),dm = var_lf
12F 31 90 66 03 68 03 //(var_i1+),pm = var_lf
12F 39 90 66 03 68 03 //(var_i1+),spi = var_lf
12F 24 90 66 03 12 00 //(var_i1+),dm = q0x12
12F 20 90 66 03 12 00 //(var_i1+),pm = q0x12
12F 28 90 66 03 45 00 //(var_i1+),spi = q0x45
12F 25 90 66 03 78 56 34 12 //(var_i1+),dm = qqq0x12345678
12F 21 90 66 03 78 56 34 12 //(var_i1+),pm = qqq0x12345678
12F 29 90 66 03 78 56 34 12 //(var_i1+),spi = qqq0x12345678
12F 66 21 55 00 //var_i1= 0x55
12F 84 91 67 03 66 03 //var_i1 = (var_i2),dm
12F 88 91 67 03 66 03 //var_i1 = (var_i2),spi
12F 84 91 67 03 66 03 //var_i1 = (var_i2),dm
12F 04 91 67 03 66 03 //var_i1 = (var_i2+),dm
12F 08 91 67 03 66 03 //var_i1 = (var_i2+),spi
12F 04 91 67 03 66 03 //var_i1 = (var_i2+),dm
12F 66 29 67 03 //var_i1 = var_i2
12F 66 31 67 03 //var_i1 = -var_i2
12F 66 29 69 03 //var_i1 = var_lf(H)
12F 66 29 68 03 //var_i1 = var_lf(L)
12F 14 90 66 03 67 03 //var_i1,dm = var_i2
12F 04 90 66 03 12 00 //var_i1,dm = q0x12
12F 28 24 78 56 34 12 //apos = qqq0x12345678
12F 29 20 34 12 //apos(H) = qq0x1234
12F 28 20 34 12 //apos(L) = qq0x1234
12F 85 91 66 03 9E 02 //cpos  = (var_i1),dm
12F 89 91 66 03 9E 02 //cpos  = (var_i1),spi
12F 85 91 66 03 9E 02 //cpos  = (var_i1),dm
12F 05 91 66 03 9E 02 //cpos  = (var_i1+),dm
12F 09 91 66 03 9E 02 //cpos  = (var_i1+),spi
12F 05 91 66 03 9E 02 //cpos  = (var_i1+),dm
12F 28 2C 9E 02 //apos=cpos
12F 28 34 9E 02 //apos=-cpos
12F 62 89 28 02 66 03 //apos = var_i1 <<2
12F 6E 89 28 02 66 03 //apos = var_i1 <<14
12F B5 28 66 03 //tspd(h) = var_i1
12F B4 28 66 03 //tspd(l) = var_i1
12F 15 90 2C 02 9E 02 //aspd ,dm = cpos
12F 05 90 2C 02 78 56 34 12 //aspd,dm = qqq0x12345678
010 B4 90 66 03 67 03 //(var_i1),dm = var_i2
010 B0 90 66 03 67 03 //(var_i1),pm = var_i2
010 B8 90 66 03 67 03 //(var_i1),spi = var_i2
010 B5 90 66 03 68 03 //(var_i1),dm = var_lf
010 B1 90 66 03 68 03 //(var_i1),pm = var_lf
010 B9 90 66 03 68 03 //(var_i1),spi = var_lf
010 A4 90 66 03 12 00 //(var_i1),dm = q0x12
010 A0 90 66 03 12 00 //(var_i1),pm = q0x12
010 A8 90 66 03 45 00 //(var_i1),spi = 0x45
010 A5 90 66 03 78 56 34 12 //(var_i1),dm = q0x12345678
010 A1 90 66 03 78 56 34 12 //(var_i1),pm = q0x12345678
010 A9 90 66 03 78 56 34 12 //(var_i1),spi = q0x12345678
010 34 90 66 03 67 03 //(var_i1+),dm = var_i2
010 30 90 66 03 67 03 //(var_i1+),pm = var_i2
010 38 90 66 03 67 03 //(var_i1+),spi = var_i2
010 35 90 66 03 68 03 //(var_i1+),dm = var_lf
010 31 90 66 03 68 03 //(var_i1+),pm = var_lf
010 39 90 66 03 68 03 //(var_i1+),spi = var_lf
010 24 90 66 03 12 00 //(var_i1+),dm = q0x12
010 20 90 66 03 12 00 //(var_i1+),pm = q0x12
010 28 90 66 03 45 00 //(var_i1+),spi = 0x45
010 25 90 66 03 78 56 34 12 //(var_i1+),dm = q0x12345678
010 21 90 66 03 78 56 34 12 //(var_i1+),pm = q0x12345678
010 29 90 66 03 78 56 34 12 //(var_i1+),spi = q0x12345678
010 66 21 55 00 //var_i1= q0x55
200 A5 88 //prod <<=5
200 85 88 //prod >>=5
200 66 59 12 00 45 00 //SRB var_i1,  q0x12,  q0x45
200 00 5C 66 03 12 00 45 00 //SRBL var_i1,  q0x12,  q0x45
200 25 88 66 03 //var_i1 <<=5
200 25 8C 66 03 12 00 //var_i1 * q0x12 <<5
200 05 8C 66 03 12 00 //var_i1 * q0x12 >>5
200 66 39 12 00 //var_i1 +=  q0x12
200 66 49 12 00 //var_i1 -= q0x12
200 05 88 66 03 //var_i1 >>=5
200 A5 8C 30 02 34 02 //iq*id <<5
200 85 8C 30 02 34 02 //iq*id >>5
200 28 3C 78 56 34 12 //apos += q0x12345678
200 25 89 28 02 //apos <<=5
200 28 4C 78 56 34 12 //apos -= q0x12345678
200 05 89 28 02 //apos >>=5
200 28 44 9E 02 //apos += cpos
200 28 54 9E 02 //apos -= cpos
200 01 DC 28 02 66 03 //apos /= var_i1
125 02 1C //abort
125 01 76 66 03 //call var_i1
125 01 74 2B 40 //call q0x402B
125 91 74 66 03 2B 40 //call q0x402B , var_i1, LT
125 91 75 28 02 2B 40 //call q0x402B , apos, LT
125 01 1E 66 03 //calls var_i1
125 01 1C 2B 40 //calls q0x402b
125 00 76 66 03 //goto var_i1
125 00 74 2B 40 //goto q0x402b
125 90 74 66 03 00 40 //goto q0x4000, var_i1, LT
125 90 75 28 02 00 40 //goto q0x4000, apos, LT
125 04 04 //ret
125 04 05 //reti
125 09 59 C6 B7 06 87 //mode cs
125 09 59 C5 B7 05 87 //mode gs
125 09 59 C2 BF 02 87 //mode pc
125 09 59 C1 BF 01 87 //mode pp
125 09 59 C1 FF 07 87 //mode psc
125 09 59 C0 FF 0A 87 //mode pt
125 09 59 C1 FF 09 87 //mode pvt
125 09 59 C2 BB 02 83 //mode sc
125 09 59 C0 B3 00 83 //mode se
125 09 59 C1 BB 01 83 //mode sp
125 09 59 C3 B1 03 81 //mode tc
125 09 59 E0 B1 20 81 // mode tef
125 09 59 C0 B1 00 81 // mode tes
125 09 59 C8 B1 08 81 //mode tt
125 09 59 C3 B0 03 80 // mode vc
125 09 59 C0 B0 00 80 //mode  ves
125 09 59 C8 B0 08 80 //mode vt
125 92 71 28 02 28 02 //!ALPO apos 
125 92 70 28 02 78 56 34 12 //!ALPO 0x12345678 
125 92 71 88 09 28 02 //!AMPO apos 
125 92 70 88 09 78 56 34 12 //!AMPO 0x12345678 
125 83 71 28 02 28 02 //!ALPU apos 
125 83 70 28 02 78 56 34 12 //!ALPU 0x12345678 
125 83 71 88 09 28 02 //!AMPU apos 
125 83 70 88 09 78 56 34 12 //!AMPU 0x12345678 
125 98 71 C0 02 28 02 //!AT apos 
125 98 70 C0 02 78 56 34 12 //!AT 0x12345678 
125 0E 70 //!CAP 
125 DB 70 04 00 //!IN#2 q0 
125 DA 70 04 00 //!IN#2 q1 
125 0C 70 //!LSN 
125 0D 70 //!LSP 
125 0F 70 //!MC 
125 90 71 AE 02 28 02 //!RO apos 
125 90 70 AE 02 78 56 34 12 //!RO 0x12345678 
125 90 71 AE 02 28 02 //!PRO apos 
125 90 70 AE 02 78 56 34 12 //!PRO 0x12345678 
125 90 71 AE 02 28 02 //!SRO apos 
125 90 70 AE 02 78 56 34 12 //!SRO 0x12345678 
125 90 71 AE 02 68 03 //!TRO var_lf
125 90 70 AE 02 00 00 34 12 //!TRO 0x1234
125 94 71 BA 02 28 02 //!RPO apos 
125 94 70 BA 02 78 56 34 12 //!RPO 0x12345678 
125 94 71 BA 02 28 02 //!RLPO apos 
125 94 70 BA 02 78 56 34 12 //!RLPO 0x12345678 
125 94 71 88 09 28 02 //!RMPO apos 
125 94 70 88 09 78 56 34 12 //!RMPO 0x12345678 
125 85 71 BA 02 28 02 //!RPU apos 
125 85 70 BA 02 78 56 34 12 //!RPU 0x12345678 
125 85 71 BA 02 28 02 //!RLPU apos 
125 85 70 BA 02 78 56 34 12 //!RLPU 0x12345678 
125 85 71 88 09 28 02 //!RMPU apos 
125 85 70 88 09 78 56 34 12 //!RMPU 0x12345678 
125 B9 71 C2 02 28 02 //!RT apos 
125 B9 70 C2 02 78 56 34 12 //!RT 0x12345678 
125 81 71 AE 02 28 02 //!RU apos 
125 81 70 AE 02 78 56 34 12 //!RU 0x12345678 
125 81 71 AE 02 28 02 //!PRU apos 
125 81 70 AE 02 78 56 34 12 //!PRU 0x12345678 
125 81 71 AE 02 28 02 //!SRU apos 
125 81 70 AE 02 78 56 34 12 //!SRU 0x12345678 
125 81 71 AE 02 68 03 //!TRU var_lf
125 81 70 AE 02 00 00 34 12 //!TRU 0x1234
INVALID OPERAND - APOS//!LSO apos 
125 96 70 8A 09 78 56 34 12 //!LSO 0x12345678 
125 96 71 2C 02 A0 02 //!MSO cspd
125 96 70 2C 02 78 56 34 12 //!MSO 0x12345678 
125 87 71 8A 09 A0 02 //!LSU cspd
125 87 70 8A 09 78 56 34 12 //!LSU 0x12345678 
125 87 71 2C 02 A0 02 //!MSU cspd
125 87 70 2C 02 78 56 34 12 //!MSU 0x12345678 
125 90 71 28 02 9E 02 //!VO apos, cpos 
125 90 70 28 02 78 56 34 12 //!VO apos, 0x12345678 
125 81 71 28 02 9E 02 //!VU apos, cpos 
125 81 70 28 02 78 56 34 12 //!VU apos, 0x12345678 
125 08 04 //WAIT!
125 08 06 78 56 34 12 //WAIT!0x12345678
04A - 11 11 00 11 22 22 33 0A
045 56 34 00 12 55 44 28 4B //PVTP 0x123456, 0x4455, 0x128, 0x25
045 56 34 00 12 55 44 55 2B //PVTP 0x123456, 0x4455, 0x155, 0x15
045 56 34 00 12 66 96 55 2B //PVTP 0x123456, 0x9666, 0x155, 0x15
045 77 99 00 18 66 96 55 2B //PVTP 0x189977, 0x9666, 0x155, 0x15
04A 11 11 00 11 22 22 33 08 //PVTP 0x111111, 0x2222, 0x33, 0x4
04A 11 11 00 11 22 22 33 0A //PVTP 0x111111, 0x2222, 0x33, 0x5
04A FF FF 00 7F FF FF FF FF //PVTP 0x7FFFFF, 0xFFFF, 0x1FF, 0x7F
045 78 36 00 12 45 12 12 20 //PVTP 0x123678, 0x1245, 0x12, 0x10
125 10 19 28 02 A0 02 66 03 //PVTP apos, cspd, var_i1, 0x10;
125 12 C8 21 12 01 00 12 00 //PTP 0x11221, 0x12, 0x12
125 02 00 //AXISOFF 
125 02 01 //AXISON 
125 09 59 FF FF 00 20 //CPA 
125 09 59 FF DF 00 00 //CPR 
125 10 04 //DINT 
125 10 05 //EINT 
125 20 00 //ENDINIT 
125 09 59 3F FF 00 00 //EXTREF0 
125 09 59 7F FF 40 00 //EXTREF1 
125 09 59 BF FF 80 00 //EXTREF2 
125 09 59 FF EF 00 00 //REG_OFF 
125 09 59 FF FF 00 10 //REG_ON 
125 02 04 //RESET 
125 09 59 FF F7 00 00 //RGM 
125 28 80 //SAP apos 
125 00 84 78 56 34 12 //SAP q0x12345678
125 00 78 12 00 45 00 00 00 //SEG q0x12, q0x45
125 66 7D 68 03 //SEG var_i1, var_lf 
125 80 18 34 12 //SETPT 0x1234 
125 80 18 34 12 //SETPVT 0x1234 
125 04 14 87 56 34 12 //SETSYNC  Q0x12345687 
125 09 59 FF FF 00 08 //SGM 
125 B2 2C 28 02 //STA 
125 C4 01 //STOP 
125 C4 00 //STOP! 
125 09 59 FF BF 00 00 //TUM0 
125 09 59 FF FF 00 40 //TUM1 
125 08 01 //UPD 
125 08 00 //UPD! 
12A A0 04 //DIS2CAPI 
12A 81 04 //DISCAPI 
12A 81 06 //DISLSN 
12A A0 06 //DISLSP 
12A 20 04 //EN2CAPI0 
12A 20 05 //EN2CAPI1
12A 01 04 //ENCAPI0 
12A 01 05 //ENCAPI1 
12A 01 06 //ENLSN0 
12A 01 07 //ENLSN1 
12A 20 06 //ENLSP0 
12A 20 07 //ENLSP1 
12A 00 EC 2A 00 12 00 //OUT(1,3,5)  = 0x12
12A 00 ED 2A 00 66 03 //OUT(1,3,5) =var_i1
12A 00 E8 2A 00 66 03 //var_i1 = IN(1,3,5) 
12A 00 EE 2A 00 //SetAsInput(1,3,5) 
12A 00 EF 2A 00 //SetAsOutput(1,3,5) 
12A 01 94 80 10 28 2C 9E 02 //[G4] { apos =cpos; } 
12A B0 98 80 10 66 03 67 03 //[G4] (var_i1),PM = var_i2 
12A B1 98 80 10 66 03 9E 02 //[G4] (var_i1),PM = cpos 
12A 30 98 80 10 66 03 67 03 //[G4] (var_i1+),PM = var_i2 
12A 31 98 80 10 66 03 9E 02 //[G4] (var_i1+),PM = cpos 
12A 66 B9 80 10 67 03 //[G4] var_i1 = var_i2 
12A 14 98 80 10 66 03 67 03 //[G4] var_i1,dm = var_i2 
12A 28 BC 80 10 9E 02 //[G4] apos = cpos 
12A 15 98 80 10 28 02 9E 02 //[G4] apos,dm = cpos 
12A 40 09 30 02 //ADDGRID iq 
12A 40 09 30 02 //ADDGRID iq 
12A 40 08 01 00 //ADDGRID 1 
12A 01 08 34 12 //AXISID 0x1234 
12A 01 09 30 02 //AXISID iq 
12A 80 09 30 02 //REMGRID iq 
12A 80 08 10 00 //REMGRID 0x5
12A 80 9D 70 01 67 03 66 03 //var_i1 = [23] (var_i2),PM 
12A 00 9D 70 01 67 03 66 03 //var_i1 = [23] (var_i2+),PM 
12A 67 E1 70 01 66 03 //var_i1 = [23] var_i2 
12A 04 9C 70 01 67 03 66 03 //var_i1 = [23] var_i2,dm 
12A 05 9C 70 01 9E 02 28 02 //apos = [23] cpos,dm 
12A 81 9D 70 01 67 03 28 02 //apos = [23] (var_i2),PM 
12A 01 9D 70 01 67 03 28 02 //apos = [23] (var_i2+),PM 
12A 9E E4 70 01 28 02 //apos = [23] cpos 
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
    type: 'Normal',
    AxisID: 'All',
    CS: '90B4',
    Object: '-',
    ObjectName: '-',
    Data: '(0x0366), DM = 0x0367',
    Interpretation: '(VAR_I1), DM = VAR_I2 ',
    errorStatus: '-'
  },
  {
    msgNr: 4,
    OriginalMessage: '08 10 00 90 B8 03 66 03 67 33 //(var_i1),spi =var_i2;',
    CobID: 'RW=?',
    FrameData: '08100090B80366036733',
    type: 'Normal',
    AxisID: 'All',
    CS: '90B8',
    Object: '-',
    ObjectName: '-',
    Data: '(0x0366), SPI = 0x0367',
    Interpretation: '(VAR_I1), SPI = VAR_I2 ',
    errorStatus: '-'
  },
  {
    msgNr: 5,
    OriginalMessage: '08 10 00 90 B0 03 66 03 67 2B //(var_i1),pm =var_i2;',
    CobID: 'RW=?',
    FrameData: '08100090B0036603672B',
    type: 'Normal',
    AxisID: 'All',
    CS: '90B0',
    Object: '-',
    ObjectName: '-',
    Data: '(0x0366), PM = 0x0367',
    Interpretation: '(VAR_I1), PM = VAR_I2 ',
    errorStatus: '-'
  },
  {
    msgNr: 6,
    OriginalMessage: '//',
    CobID: 'xx',
    FrameData: '-',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'Can`t extract data from this row',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 7,
    OriginalMessage: '08 10 00 90 B4 03 66 03 67 2F //(var_i1),dm =var_i2;',
    CobID: 'RW=?',
    FrameData: '08100090B4036603672F',
    type: 'Normal',
    AxisID: 'All',
    CS: '90B4',
    Object: '-',
    ObjectName: '-',
    Data: '(0x0366), DM = 0x0367',
    Interpretation: '(VAR_I1), DM = VAR_I2 ',
    errorStatus: '-'
  },
  {
    msgNr: 8,
    OriginalMessage: '08 10 00 90 B5 03 66 02 9E 66 //(var_i1),dm = cpos;',
    CobID: 'RW=?',
    FrameData: '08100090B50366029E66',
    type: 'Normal',
    AxisID: 'All',
    CS: '90B5',
    Object: '-',
    ObjectName: '-',
    Data: '(0x0366), DM = 0x029E',
    Interpretation: '(VAR_I1), DM = CPOS ',
    errorStatus: '-'
  },
  {
    msgNr: 9,
    OriginalMessage: '08 10 00 90 A4 03 66 12 34 FB //(var_i1),dm =0x1234;',
    CobID: 'RW=?',
    FrameData: '08100090A403661234FB',
    type: 'Normal',
    AxisID: 'All',
    CS: '90A4',
    Object: '-',
    ObjectName: '-',
    Data: '(0x0366), DM = 0x1234',
    Interpretation: '(VAR_I1), DM = 1234 (4660) ',
    errorStatus: '-'
  },
  {
    msgNr: 10,
    OriginalMessage: '08 10 00 90 A4 03 66 12 34 FB //(var_i1),dm =4660;',
    CobID: 'RW=?',
    FrameData: '08100090A403661234FB',
    type: 'Normal',
    AxisID: 'All',
    CS: '90A4',
    Object: '-',
    ObjectName: '-',
    Data: '(0x0366), DM = 0x1234',
    Interpretation: '(VAR_I1), DM = 1234 (4660) ',
    errorStatus: '-'
  },
  {
    msgNr: 11,
    OriginalMessage: '0A 10 00 90 A5 03 66 23 45 00 01 21 //(var_i1),dm =0x12345;',
    CobID: 'RW=?',
    FrameData: '0A100090A503662345000121',
    type: 'Normal',
    AxisID: 'All',
    CS: '90A5',
    Object: '-',
    ObjectName: '-',
    Data: '(0x0366), DM = 0x00012345',
    Interpretation: '(VAR_I1), DM = 00012345 (74565) ',
    errorStatus: '-'
  },
  {
    msgNr: 12,
    OriginalMessage: '0A 10 00 90 A5 03 66 56 78 12 34 CC //(var_i1),dm =0x12345678;',
    CobID: 'RW=?',
    FrameData: '0A100090A5036656781234CC',
    type: 'Normal',
    AxisID: 'All',
    CS: '90A5',
    Object: '-',
    ObjectName: '-',
    Data: '(0x0366), DM = 0x12345678',
    Interpretation: '(VAR_I1), DM = 12345678 (305419896) ',
    errorStatus: '-'
  },
  {
    msgNr: 13,
    OriginalMessage: '08 10 00 90 34 03 66 03 67 AF //(var_i1+),dm =var_i2;',
    CobID: 'RW=?',
    FrameData: '081000903403660367AF',
    type: 'Normal',
    AxisID: 'All',
    CS: '9034',
    Object: '-',
    ObjectName: '-',
    Data: '(0x0366+), DM = 0x0367',
    Interpretation: '(VAR_I1+), DM = VAR_I2 ',
    errorStatus: '-'
  },
  {
    msgNr: 14,
    OriginalMessage: '08 10 00 90 35 03 66 02 9E E6 //(var_i1+),dm = cpos;',
    CobID: 'RW=?',
    FrameData: '08100090350366029EE6',
    type: 'Normal',
    AxisID: 'All',
    CS: '9035',
    Object: '-',
    ObjectName: '-',
    Data: '(0x0366+), DM = 0x029E',
    Interpretation: '(VAR_I1+), DM = CPOS ',
    errorStatus: '-'
  },
  {
    msgNr: 15,
    OriginalMessage: '08 10 00 90 24 03 66 12 34 7B //(var_i1+),dm =0x1234;',
    CobID: 'RW=?',
    FrameData: '0810009024036612347B',
    type: 'Normal',
    AxisID: 'All',
    CS: '9024',
    Object: '-',
    ObjectName: '-',
    Data: '(0x0366+), DM = 0x1234',
    Interpretation: '(VAR_I1+), DM = 1234 (4660) ',
    errorStatus: '-'
  },
  {
    msgNr: 16,
    OriginalMessage: '08 10 00 90 24 03 66 12 34 7B //(var_i1+),dm =4660;',
    CobID: 'RW=?',
    FrameData: '0810009024036612347B',
    type: 'Normal',
    AxisID: 'All',
    CS: '9024',
    Object: '-',
    ObjectName: '-',
    Data: '(0x0366+), DM = 0x1234',
    Interpretation: '(VAR_I1+), DM = 1234 (4660) ',
    errorStatus: '-'
  },
  {
    msgNr: 17,
    OriginalMessage: '0A 10 00 90 25 03 66 23 45 00 01 A1 //(var_i1+),dm =0x12345;',
    CobID: 'RW=?',
    FrameData: '0A10009025036623450001A1',
    type: 'Normal',
    AxisID: 'All',
    CS: '9025',
    Object: '-',
    ObjectName: '-',
    Data: '(0x0366+), DM = 0x00012345',
    Interpretation: '(VAR_I1+), DM = 00012345 (74565) ',
    errorStatus: '-'
  },
  {
    msgNr: 18,
    OriginalMessage: '0A 10 00 90 25 03 66 56 78 12 34 4C //(var_i1+),dm =0x12345678;',
    CobID: 'RW=?',
    FrameData: '0A100090250366567812344C',
    type: 'Normal',
    AxisID: 'All',
    CS: '9025',
    Object: '-',
    ObjectName: '-',
    Data: '(0x0366+), DM = 0x12345678',
    Interpretation: '(VAR_I1+), DM = 12345678 (305419896) ',
    errorStatus: '-'
  },
  {
    msgNr: 19,
    OriginalMessage: '//',
    CobID: 'xx',
    FrameData: '-',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'Can`t extract data from this row',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 20,
    OriginalMessage: '08 10 00 90 14 03 66 03 67 8F //var_i1,dm= var_i2',
    CobID: 'RW=?',
    FrameData: '0810009014036603678F',
    type: 'Normal',
    AxisID: 'All',
    CS: '9014',
    Object: '-',
    ObjectName: '-',
    Data: '0x0366,dm= 0x0x0367',
    Interpretation: 'VAR_I1,dm= VAR_I2',
    errorStatus: '-'
  },
  {
    msgNr: 21,
    OriginalMessage: '08 10 00 90 04 03 66 12 34 5B //var_i1,dm= 0x1234',
    CobID: 'RW=?',
    FrameData: '0810009004036612345B',
    type: 'Normal',
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
    type: 'Normal',
    AxisID: 'All',
    CS: '9015',
    Object: '-',
    ObjectName: '-',
    Data: '0x0368,dm= 0x0x029E',
    Interpretation: 'VAR_LF,dm= CPOS',
    errorStatus: '-'
  },
  {
    msgNr: 23,
    OriginalMessage: '0A 10 00 90 05 03 68 56 78 12 34 2E //var_lf,dm= 0x12345678',
    CobID: 'RW=?',
    FrameData: '0A100090050368567812342E',
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: "Checksum 173 and calculated 174 don't match",
    Interpretation: 'Checksum doesn`t match',
    errorStatus: 'error'
  },
  {
    msgNr: 27,
    OriginalMessage: '//',
    CobID: 'xx',
    FrameData: '-',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'Can`t extract data from this row',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 28,
    OriginalMessage: '08 10 00 91 84 03 67 03 66 00  //var_i1 = (var_i2),dm',
    CobID: 'RW=?',
    FrameData: '08100091840367036600',
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'Can`t extract data from this row',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 35,
    OriginalMessage: '08 10 00 91 85 03 67 03 68 03  //var_lf = (var_i2),dm',
    CobID: 'RW=?',
    FrameData: '08100091850367036803',
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
    AxisID: 'All',
    CS: '8921',
    Object: '-',
    ObjectName: '-',
    Data: '0228  <<= 1 ',
    Interpretation: 'APOS<<= 1 [32D] ',
    errorStatus: '-'
  },
  {
    msgNr: 49,
    OriginalMessage: '06 10 00 89 2A 02 28 F3  //apos<<=10',
    CobID: 'RW=?',
    FrameData: '061000892A0228F3',
    type: 'Normal',
    AxisID: 'All',
    CS: '892A',
    Object: '-',
    ObjectName: '-',
    Data: '0228  <<= 10 ',
    Interpretation: 'APOS<<= 10 [32D] ',
    errorStatus: '-'
  },
  {
    msgNr: 50,
    OriginalMessage: '06 10 00 89 01 02 28 CA  //apos>>=1',
    CobID: 'RW=?',
    FrameData: '06100089010228CA',
    type: 'Normal',
    AxisID: 'All',
    CS: '8901',
    Object: '-',
    ObjectName: '-',
    Data: '0228  >>= 1 ',
    Interpretation: 'APOS>>= 1 [32D] ',
    errorStatus: '-'
  },
  {
    msgNr: 51,
    OriginalMessage: '06 10 00 89 0A 02 28 D3  //apos>>=10',
    CobID: 'RW=?',
    FrameData: '061000890A0228D3',
    type: 'Normal',
    AxisID: 'All',
    CS: '890A',
    Object: '-',
    ObjectName: '-',
    Data: '0228  >>= 10 ',
    Interpretation: 'APOS>>= 10 [32D] ',
    errorStatus: '-'
  },
  {
    msgNr: 52,
    OriginalMessage: '04 10 00 88 A4 40  // prod<<=4',
    CobID: 'RW=?',
    FrameData: '04100088A440',
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
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
    type: 'Normal',
    AxisID: 'G1',
    CS: '2D68',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0368 = 0x0228',
    Interpretation: ' VAR_LF = APOS -- [V32D = V32S]',
    errorStatus: '-'
  },
  {
    msgNr: 147,
    OriginalMessage: '08 10 10 25 68 00 12 00 00 C7 //var_lf =0x12',
    CobID: 'RW=?',
    FrameData: '081010256800120000C7',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2568',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0368 = 0x00000012',
    Interpretation: ' VAR_LF = 0x00000012 -- [V32 = val32]',
    errorStatus: '-'
  },
  {
    msgNr: 148,
    OriginalMessage: '08 10 10 26 1E 00 12 00 00 7E //CAPPOS2=0x12',
    CobID: 'RW=?',
    FrameData: '081010261E001200007E',
    type: 'Normal',
    AxisID: 'G1',
    CS: '261E',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x081E = 0x00000012',
    Interpretation: ' CAPPOS2 = 0x00000012 -- [V32 = val32]',
    errorStatus: '-'
  },
  {
    msgNr: 149,
    OriginalMessage: '06 10 10 21 66 00 12 BF // var_i1 = 0x12',
    CobID: 'RW=?',
    FrameData: '06101021660012BF',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2166',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0366 = 0x0012',
    Interpretation: ' VAR_I1 = 0x0012 -- [V16D = val16/TML label]',
    errorStatus: '-'
  },
  {
    msgNr: 150,
    OriginalMessage: '06 10 10 21 69 00 12 C2 // var_lf(H) = 0x12',
    CobID: 'RW=?',
    FrameData: '06101021690012C2',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2169',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0369 = 0x0012',
    Interpretation: ' 0x0369 = 0x0012 -- [V16D = val16/TML label]',
    errorStatus: '-'
  },
  {
    msgNr: 151,
    OriginalMessage: '06 10 10 21 68 00 12 C1 // var_lf(L)=0x12',
    CobID: 'RW=?',
    FrameData: '06101021680012C1',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2168',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0368 = 0x0012',
    Interpretation: ' VAR_LF = 0x0012 -- [V16D = val16/TML label]',
    errorStatus: '-'
  },
  {
    msgNr: 152,
    OriginalMessage: '06 10 10 29 66 03 67 1F // var_i1= var_i2',
    CobID: 'RW=?',
    FrameData: '061010296603671F',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2966',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0366 = 0x0367',
    Interpretation: ' VAR_I1 = VAR_I2 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 153,
    OriginalMessage: '06 10 10 29 66 03 69 21 // var_i1 =var_lf(H)',
    CobID: 'RW=?',
    FrameData: '0610102966036921',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2966',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0366 = 0x0369',
    Interpretation: ' VAR_I1 = 0x0369 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 154,
    OriginalMessage: '06 10 10 29 66 03 68 20 // var_i1 = var_lf(L)',
    CobID: 'RW=?',
    FrameData: '0610102966036820',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2966',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0366 = 0x0368',
    Interpretation: ' VAR_I1 = VAR_LF -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 155,
    OriginalMessage: '06 10 10 29 69 03 66 21 // var_lf(H) =var_i1',
    CobID: 'RW=?',
    FrameData: '0610102969036621',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2969',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0369 = 0x0366',
    Interpretation: ' 0x0369 = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 156,
    OriginalMessage: '06 10 10 29 68 03 66 20 // var_lf(L) =var_i1',
    CobID: 'RW=?',
    FrameData: '0610102968036620',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2968',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0368 = 0x0366',
    Interpretation: ' VAR_LF = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 157,
    OriginalMessage: '06 10 10 29 0C 03 66 C4 // AAR= var_i1',
    CobID: 'RW=?',
    FrameData: '061010290C0366C4',
    type: 'Normal',
    AxisID: 'G1',
    CS: '290C',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x030C = 0x0366',
    Interpretation: ' AAR = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 158,
    OriginalMessage: '06 10 10 2B 13 03 66 CD // AAR_table= var_i1',
    CobID: 'RW=?',
    FrameData: '0610102B130366CD',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2B13',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0913 = 0x0366',
    Interpretation:
      ' AAR_table = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 159,
    OriginalMessage: '06 10 10 28 FF 03 66 B6 // ACCPL= var_i1',
    CobID: 'RW=?',
    FrameData: '06101028FF0366B6',
    type: 'Normal',
    AxisID: 'G1',
    CS: '28FF',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x02FF = 0x0366',
    Interpretation: ' ACCPL = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 160,
    OriginalMessage: '06 10 10 28 C7 03 66 7E // ACC_LIMIT= var_i1',
    CobID: 'RW=?',
    FrameData: '06101028C703667E',
    type: 'Normal',
    AxisID: 'G1',
    CS: '28C7',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x02C7 = 0x0366',
    Interpretation:
      ' ACC_LIMIT = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 161,
    OriginalMessage: '06 10 10 2B 12 03 66 CC // ACR= var_i1',
    CobID: 'RW=?',
    FrameData: '0610102B120366CC',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2B12',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0912 = 0x0366',
    Interpretation: ' ACR = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 162,
    OriginalMessage: '06 10 10 28 3C 03 66 F3 // AD0= var_i1',
    CobID: 'RW=?',
    FrameData: '061010283C0366F3',
    type: 'Normal',
    AxisID: 'G1',
    CS: '283C',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x023C = 0x0366',
    Interpretation: ' AD0 = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 163,
    OriginalMessage: '06 10 10 28 44 03 66 FB // AD0OFF= var_i1',
    CobID: 'RW=?',
    FrameData: '06101028440366FB',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2844',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0244 = 0x0366',
    Interpretation: ' AD0OFF = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 164,
    OriginalMessage: '06 10 10 28 3D 03 66 F4 // AD1= var_i1',
    CobID: 'RW=?',
    FrameData: '061010283D0366F4',
    type: 'Normal',
    AxisID: 'G1',
    CS: '283D',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x023D = 0x0366',
    Interpretation: ' AD1 = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 165,
    OriginalMessage: '06 10 10 28 45 03 66 FC // AD1OFF= var_i1',
    CobID: 'RW=?',
    FrameData: '06101028450366FC',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2845',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0245 = 0x0366',
    Interpretation: ' AD1OFF = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 166,
    OriginalMessage: '06 10 10 28 3E 03 66 F5 // AD2= var_i1',
    CobID: 'RW=?',
    FrameData: '061010283E0366F5',
    type: 'Normal',
    AxisID: 'G1',
    CS: '283E',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x023E = 0x0366',
    Interpretation: ' AD2 = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 167,
    OriginalMessage: '06 10 10 2B DD 03 66 97 // AD2FIL_CFG= var_i1',
    CobID: 'RW=?',
    FrameData: '0610102BDD036697',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2BDD',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x09DD = 0x0366',
    Interpretation:
      ' AD2FIL_CFG = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 168,
    OriginalMessage: '06 10 10 2B DC 03 66 96 // AD2FIL_VAL= var_i1',
    CobID: 'RW=?',
    FrameData: '0610102BDC036696',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2BDC',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x09DC = 0x0366',
    Interpretation:
      ' AD2FIL_VAL = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 169,
    OriginalMessage: '06 10 10 28 46 03 66 FD // AD2OFF= var_i1',
    CobID: 'RW=?',
    FrameData: '06101028460366FD',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2846',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0246 = 0x0366',
    Interpretation: ' AD2OFF = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 170,
    OriginalMessage: '06 10 10 28 3F 03 66 F6 // AD3= var_i1',
    CobID: 'RW=?',
    FrameData: '061010283F0366F6',
    type: 'Normal',
    AxisID: 'G1',
    CS: '283F',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x023F = 0x0366',
    Interpretation: ' AD3 = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 171,
    OriginalMessage: '06 10 10 28 47 03 66 FE // AD3OFF= var_i1',
    CobID: 'RW=?',
    FrameData: '06101028470366FE',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2847',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0247 = 0x0366',
    Interpretation: ' AD3OFF = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 172,
    OriginalMessage: '06 10 10 28 40 03 66 F7 // AD4= var_i1',
    CobID: 'RW=?',
    FrameData: '06101028400366F7',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2840',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0240 = 0x0366',
    Interpretation: ' AD4 = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 173,
    OriginalMessage: '06 10 10 28 48 03 66 FF // AD4OFF= var_i1',
    CobID: 'RW=?',
    FrameData: '06101028480366FF',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2848',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0248 = 0x0366',
    Interpretation: ' AD4OFF = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 174,
    OriginalMessage: '06 10 10 28 41 03 66 F8 // AD5= var_i1',
    CobID: 'RW=?',
    FrameData: '06101028410366F8',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2841',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0241 = 0x0366',
    Interpretation: ' AD5 = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 175,
    OriginalMessage: '06 10 10 28 49 03 66 00 // AD5OFF= var_i1',
    CobID: 'RW=?',
    FrameData: '0610102849036600',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2849',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0249 = 0x0366',
    Interpretation: ' AD5OFF = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 176,
    OriginalMessage: '06 10 10 28 42 03 66 F9 // AD6= var_i1',
    CobID: 'RW=?',
    FrameData: '06101028420366F9',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2842',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0242 = 0x0366',
    Interpretation: ' AD6 = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 177,
    OriginalMessage: '06 10 10 28 4A 03 66 01 // AD6OFF= var_i1',
    CobID: 'RW=?',
    FrameData: '061010284A036601',
    type: 'Normal',
    AxisID: 'G1',
    CS: '284A',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x024A = 0x0366',
    Interpretation: ' AD6OFF = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 178,
    OriginalMessage: '06 10 10 28 43 03 66 FA // AD7= var_i1',
    CobID: 'RW=?',
    FrameData: '06101028430366FA',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2843',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0243 = 0x0366',
    Interpretation: ' AD7 = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 179,
    OriginalMessage: '06 10 10 28 4B 03 66 02 // AD7OFF= var_i1',
    CobID: 'RW=?',
    FrameData: '061010284B036602',
    type: 'Normal',
    AxisID: 'G1',
    CS: '284B',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x024B = 0x0366',
    Interpretation: ' AD7OFF = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 180,
    OriginalMessage: '06 10 10 2A 0B 03 66 C4 // AD8= var_i1',
    CobID: 'RW=?',
    FrameData: '0610102A0B0366C4',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2A0B',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x080B = 0x0366',
    Interpretation: ' AD8 = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 181,
    OriginalMessage: '06 10 10 2B ED 03 66 A7 // AD9= var_i1',
    CobID: 'RW=?',
    FrameData: '0610102BED0366A7',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2BED',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x09ED = 0x0366',
    Interpretation: ' AD9 = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 182,
    OriginalMessage: '06 10 10 2A 55 03 66 0E // AEI_CLKDIV= var_i1',
    CobID: 'RW=?',
    FrameData: '0610102A5503660E',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2A55',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0855 = 0x0366',
    Interpretation:
      ' AEI_CLKDIV = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 183,
    OriginalMessage: '06 10 10 28 FA 03 66 B1 // AEI_CMPTIME= var_i1',
    CobID: 'RW=?',
    FrameData: '06101028FA0366B1',
    type: 'Normal',
    AxisID: 'G1',
    CS: '28FA',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x02FA = 0x0366',
    Interpretation:
      ' AEI_CMPTIME = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 184,
    OriginalMessage: '06 10 10 2A 54 03 66 0D // AEI_PER= var_i1',
    CobID: 'RW=?',
    FrameData: '0610102A5403660D',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2A54',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0854 = 0x0366',
    Interpretation: ' AEI_PER = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 185,
    OriginalMessage: '06 10 10 2A AF 03 66 68 // ANALOGUEREFERENCE= var_i1',
    CobID: 'RW=?',
    FrameData: '0610102AAF036668',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2AAF',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x08AF = 0x0366',
    Interpretation:
      ' ANALOGUEREFERENCE = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 186,
    OriginalMessage: '06 10 10 2A 9C 03 66 55 // ANGLE_INC= var_i1',
    CobID: 'RW=?',
    FrameData: '0610102A9C036655',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2A9C',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x089C = 0x0366',
    Interpretation:
      ' ANGLE_INC = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 187,
    OriginalMessage: '06 10 10 2B DE 03 66 98 // ASPD_BQ_INI= var_i1',
    CobID: 'RW=?',
    FrameData: '0610102BDE036698',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2BDE',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x09DE = 0x0366',
    Interpretation:
      ' ASPD_BQ_INI = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 188,
    OriginalMessage: '06 10 10 28 01 03 66 B8 // ASR= var_i1',
    CobID: 'RW=?',
    FrameData: '06101028010366B8',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2801',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0201 = 0x0366',
    Interpretation: ' ASR = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 189,
    OriginalMessage: '06 10 10 28 A7 03 66 5E // ASR2= var_i1',
    CobID: 'RW=?',
    FrameData: '06101028A703665E',
    type: 'Normal',
    AxisID: 'G1',
    CS: '28A7',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x02A7 = 0x0366',
    Interpretation: ' ASR2 = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 190,
    OriginalMessage: '06 10 10 20 FD 00 21 64 //komega = 0x21',
    CobID: 'RW=?',
    FrameData: '06101020FD002164',
    type: 'Normal',
    AxisID: 'G1',
    CS: '20FD',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x02FD = 0x0021',
    Interpretation: ' KOMEGA = 0x0021 -- [V16D = val16/TML label]',
    errorStatus: '-'
  },
  {
    msgNr: 191,
    OriginalMessage: '06 10 10 23 B7 00 21 21 //HOMING_NR = 0x21',
    CobID: 'RW=?',
    FrameData: '06101023B7002121',
    type: 'Normal',
    AxisID: 'G1',
    CS: '23B7',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x09B7 = 0x0021',
    Interpretation: ' HOMING_NR = 0x0021 -- [V16D = val16/TML label]',
    errorStatus: '-'
  },
  {
    msgNr: 192,
    OriginalMessage: '06 10 10 21 9F 00 21 07 //HOME_NR_6098 =0x21',
    CobID: 'RW=?',
    FrameData: '061010219F002107',
    type: 'Normal',
    AxisID: 'G1',
    CS: '219F',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x039F = 0x0021',
    Interpretation: ' HOME_NR_6098 = 0x0021 -- [V16D = val16/TML label]',
    errorStatus: '-'
  },
  {
    msgNr: 193,
    OriginalMessage: '06 10 10 20 39 00 21 A0 //IA= 0x21',
    CobID: 'RW=?',
    FrameData: '06101020390021A0',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2039',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0239 = 0x0021',
    Interpretation: ' IA = 0x0021 -- [V16D = val16/TML label]',
    errorStatus: '-'
  },
  {
    msgNr: 194,
    OriginalMessage: '06 10 10 22 01 00 21 6A //ENCRES = 0x21',
    CobID: 'RW=?',
    FrameData: '061010220100216A',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2201',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0801 = 0x0021',
    Interpretation: ' ENCRES = 0x0021 -- [V16D = val16/TML label]',
    errorStatus: '-'
  },
  {
    msgNr: 195,
    OriginalMessage: '//',
    CobID: 'xx',
    FrameData: '-',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'Can`t extract data from this row',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 196,
    OriginalMessage: '06 10 10 21 66 00 12 BF  //var_i1 = 0x12',
    CobID: 'RW=?',
    FrameData: '06101021660012BF',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2166',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0366 = 0x0012',
    Interpretation: ' VAR_I1 = 0x0012 -- [V16D = val16/TML label]',
    errorStatus: '-'
  },
  {
    msgNr: 197,
    OriginalMessage: '08 10 10 25 68 00 12 00 00 C7  //var_lf = 0x12',
    CobID: 'RW=?',
    FrameData: '081010256800120000C7',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2568',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0368 = 0x00000012',
    Interpretation: ' VAR_LF = 0x00000012 -- [V32 = val32]',
    errorStatus: '-'
  },
  {
    msgNr: 198,
    OriginalMessage: '06 10 10 29 66 03 67 1F  //var_i1 =var_i2',
    CobID: 'RW=?',
    FrameData: '061010296603671F',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2966',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0366 = 0x0367',
    Interpretation: ' VAR_I1 = VAR_I2 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 199,
    OriginalMessage: '06 10 10 2D 68 02 28 E5  //var_lf = apos',
    CobID: 'RW=?',
    FrameData: '0610102D680228E5',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2D68',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0368 = 0x0228',
    Interpretation: ' VAR_LF = APOS -- [V32D = V32S]',
    errorStatus: '-'
  },
  {
    msgNr: 200,
    OriginalMessage: '08 10 10 25 68 00 12 00 00 C7  //var_lf = 0x12',
    CobID: 'RW=?',
    FrameData: '081010256800120000C7',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2568',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0368 = 0x00000012',
    Interpretation: ' VAR_LF = 0x00000012 -- [V32 = val32]',
    errorStatus: '-'
  },
  {
    msgNr: 201,
    OriginalMessage: '06 10 10 29 66 03 69 21  //var_i1 = var_lf(H)',
    CobID: 'RW=?',
    FrameData: '0610102966036921',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2966',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0366 = 0x0369',
    Interpretation: ' VAR_I1 = 0x0369 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 202,
    OriginalMessage: '06 10 10 29 66 03 68 20  //var_i1 = var_lf(L)',
    CobID: 'RW=?',
    FrameData: '0610102966036820',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2966',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0366 = 0x0368',
    Interpretation: ' VAR_I1 = VAR_LF -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 203,
    OriginalMessage: '06 10 10 29 69 03 66 21  //var_lf(H) = var_i1',
    CobID: 'RW=?',
    FrameData: '0610102969036621',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2969',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0369 = 0x0366',
    Interpretation: ' 0x0369 = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 204,
    OriginalMessage: '06 10 10 29 68 03 66 20  //var_lf(L) = var_i1',
    CobID: 'RW=?',
    FrameData: '0610102968036620',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2968',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0368 = 0x0366',
    Interpretation: ' VAR_LF = VAR_I1 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 205,
    OriginalMessage: '08 10 10 25 68 56 78 12 34 C9 //var_lf = 0x12345678',
    CobID: 'RW=?',
    FrameData: '081010256856781234C9',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2568',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0368 = 0x12345678',
    Interpretation: ' VAR_LF = 0x12345678 -- [V32 = val32]',
    errorStatus: '-'
  },
  {
    msgNr: 206,
    OriginalMessage: ' //',
    CobID: 'xx',
    FrameData: '-',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'Can`t extract data from this row',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 207,
    OriginalMessage: '06 10 10 31 66 03 67 27  //var_i1 = - var_i2',
    CobID: 'RW=?',
    FrameData: '0610103166036727',
    type: 'Normal',
    AxisID: 'G1',
    CS: '3166',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0366 = - 0x0367',
    Interpretation: ' VAR_I1 = - VAR_I2 -- [V16D = -V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 208,
    OriginalMessage: '06 10 10 35 68 02 28 ED  //var_lf =-apos',
    CobID: 'RW=?',
    FrameData: '06101035680228ED',
    type: 'Normal',
    AxisID: 'G1',
    CS: '3568',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0368 = - 0x0228',
    Interpretation: ' VAR_LF = - APOS -- [V32D = -V32S]',
    errorStatus: '-'
  },
  {
    msgNr: 209,
    OriginalMessage: '06 10 10 39 66 00 12 D7  //var_i1 += 0x12',
    CobID: 'RW=?',
    FrameData: '06101039660012D7',
    type: 'Normal',
    AxisID: 'G1',
    CS: '3966',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0366 += 0x0012',
    Interpretation: ' VAR_I1 += 0x0012 -- [V16 += val16 ]',
    errorStatus: '-'
  },
  {
    msgNr: 210,
    OriginalMessage: '08 10 10 3D 68 00 12 00 00 DF  //var_lf += 0x12',
    CobID: 'RW=?',
    FrameData: '0810103D6800120000DF',
    type: 'Normal',
    AxisID: 'G1',
    CS: '3D68',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0368 += 0x00000012',
    Interpretation: ' VAR_LF += 0x00000012 -- [V32 += val32 ]',
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
    type: 'Normal',
    AxisID: 'G1',
    CS: '4166',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0366 += 0x0367',
    Interpretation: ' VAR_I1 += VAR_I2 -- [V16D += V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 213,
    OriginalMessage: '06 10 10 45 68 02 28 FD  //var_lf += apos',
    CobID: 'RW=?',
    FrameData: '06101045680228FD',
    type: 'Normal',
    AxisID: 'G1',
    CS: '4568',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0368 += 0x0228',
    Interpretation: ' VAR_LF += APOS -- [V32D += V32S ]',
    errorStatus: '-'
  },
  {
    msgNr: 214,
    OriginalMessage: '06 10 10 49 66 00 12 E7  //var_i1 -= 0x12',
    CobID: 'RW=?',
    FrameData: '06101049660012E7',
    type: 'Normal',
    AxisID: 'G1',
    CS: '4966',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0366 -= 0x0012',
    Interpretation: ' VAR_I1 -= 0x0012 -- [V16 -= val16]',
    errorStatus: '-'
  },
  {
    msgNr: 215,
    OriginalMessage: '08 10 10 4C 28 00 12 00 00 AE  //apos -= 0x12',
    CobID: 'RW=?',
    FrameData: '0810104C2800120000AE',
    type: 'Normal',
    AxisID: 'G1',
    CS: '4C28',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0228 -= 0x00000012',
    Interpretation: ' APOS -= 0x00000012 -- [V32 -= val32]',
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
    type: 'Normal',
    AxisID: 'G1',
    CS: '5166',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0366 -= 0x0367',
    Interpretation: ' VAR_I1 -= VAR_I2 -- [V16D -= V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 218,
    OriginalMessage: '06 10 10 54 28 02 9E 42  //apos -= cpos',
    CobID: 'RW=?',
    FrameData: '0610105428029E42',
    type: 'Normal',
    AxisID: 'G1',
    CS: '5428',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0228 -= 0x029E',
    Interpretation: ' APOS -= CPOS -- [V32D -= V32S ]',
    errorStatus: '-'
  },
  {
    msgNr: 219,
    OriginalMessage: '08 10 10 59 66 12 34 23 45 95  //SRB var_i1,0x1234, 0x2345',
    CobID: 'RW=?',
    FrameData: '08101059661234234595',
    type: 'Normal',
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
  },
  {
    msgNr: 221,
    OriginalMessage: '06 00 10 1C 01 40 2B 9E // CALLS label , 0x402B',
    CobID: 'RW=?',
    FrameData: '0600101C01402B9E',
    type: 'Normal',
    AxisID: 1,
    CS: '1C01',
    Object: '-',
    ObjectName: '-',
    Data: 'CALLS Label 0x402B',
    Interpretation: 'Cancelable CALL with address set in Label 0x402B',
    errorStatus: '-'
  },
  {
    msgNr: 222,
    OriginalMessage: '04 10 10 1C 04 44 //FAULTR',
    CobID: 'RW=?',
    FrameData: '0410101C0444',
    type: 'Normal',
    AxisID: 'G1',
    CS: '1C04',
    Object: '-',
    ObjectName: '-',
    Data: 'FAULTR',
    Interpretation: 'Reset drive fault state ',
    errorStatus: '-'
  },
  {
    msgNr: 223,
    OriginalMessage: '04 10 10 1C 08 48 //SAVE',
    CobID: 'RW=?',
    FrameData: '0410101C0848',
    type: 'Normal',
    AxisID: 'G1',
    CS: '1C08',
    Object: '-',
    ObjectName: '-',
    Data: 'SAVE',
    Interpretation: 'Save setup table in E2ROM',
    errorStatus: '-'
  },
  {
    msgNr: 224,
    OriginalMessage: '06 00 10 76 01 03 66 F6 //call var_i1',
    CobID: 'RW=?',
    FrameData: '06001076010366F6',
    type: 'Normal',
    AxisID: 1,
    CS: '7601',
    Object: '-',
    ObjectName: '-',
    Data: 'CALL V16 0x0366',
    Interpretation: 'Uncoditional CALL with address set in VAR_I1',
    errorStatus: '-'
  },
  {
    msgNr: 225,
    OriginalMessage: '06 10 10 76 01 03 66 06 /call var_i1',
    CobID: 'RW=?',
    FrameData: '0610107601036606',
    type: 'Normal',
    AxisID: 'G1',
    CS: '7601',
    Object: '-',
    ObjectName: '-',
    Data: 'CALL V16 0x0366',
    Interpretation: 'Uncoditional CALL with address set in VAR_I1',
    errorStatus: '-'
  },
  {
    msgNr: 226,
    OriginalMessage: '06 10 10 76 00 03 66 05 /goto var_i1',
    CobID: 'RW=?',
    FrameData: '0610107600036605',
    type: 'Normal',
    AxisID: 'G1',
    CS: '7600',
    Object: '-',
    ObjectName: '-',
    Data: 'GOTO 0x0366',
    Interpretation: 'Unconditional GOTO with address set in VAR_I1',
    errorStatus: '-'
  },
  {
    msgNr: 227,
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
    msgNr: 228,
    OriginalMessage: '18:12:48 Bytes Write :  06 00 10 74 01 40 26 F1 //TML>  call loop1 0x4026',
    CobID: 'Write',
    FrameData: '06001074014026F1',
    type: 'Normal',
    AxisID: 1,
    CS: '7401',
    Object: '-',
    ObjectName: '-',
    Data: 'CALL 0x4026 ',
    Interpretation: 'Unconditional CALL with address set in 0x4026 ',
    errorStatus: '-'
  },
  {
    msgNr: 229,
    OriginalMessage: '18:12:48 Bytes Read :  4F',
    CobID: 'Read',
    FrameData: '4F',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'OK',
    Interpretation: 'OK',
    errorStatus: '-'
  },
  {
    msgNr: 230,
    OriginalMessage:
      '18:13:25 Bytes Write :  08 00 10 74 91 03 66 40 17 DD // TML> call loop, var_i1, LT',
    CobID: 'Write',
    FrameData: '080010749103664017DD',
    type: 'Normal',
    AxisID: 1,
    CS: '7491',
    Object: '-',
    ObjectName: '-',
    Data: 'CALL 0x4017 , 0x0366, LT',
    Interpretation: 'Unconditional CALL with address set in 0x4017 , VAR_I1, LT',
    errorStatus: '-'
  },
  {
    msgNr: 231,
    OriginalMessage: '18:13:25 Bytes Read :  4F',
    CobID: 'Read',
    FrameData: '4F',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'OK',
    Interpretation: 'OK',
    errorStatus: '-'
  },
  {
    msgNr: 232,
    OriginalMessage:
      '18:13:30 Bytes Write :  08 00 10 74 85 03 66 40 17 D1 //TML> call loop, var_i1, GT',
    CobID: 'Write',
    FrameData: '080010748503664017D1',
    type: 'Normal',
    AxisID: 1,
    CS: '7485',
    Object: '-',
    ObjectName: '-',
    Data: 'CALL 0x4017 , 0x0366, GT',
    Interpretation: 'Unconditional CALL with address set in 0x4017 , VAR_I1, GT',
    errorStatus: '-'
  },
  {
    msgNr: 233,
    OriginalMessage: '18:13:30 Bytes Read :  4F',
    CobID: 'Read',
    FrameData: '4F',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'OK',
    Interpretation: 'OK',
    errorStatus: '-'
  },
  {
    msgNr: 234,
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
    msgNr: 235,
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
    msgNr: 236,
    OriginalMessage: '06 10 10 74 00 40 12 EC //goto 0x4012;',
    CobID: 'RW=?',
    FrameData: '06101074004012EC',
    type: 'Normal',
    AxisID: 'G1',
    CS: '7400',
    Object: '-',
    ObjectName: '-',
    Data: 'GOTO 0x4012 ',
    Interpretation: 'Unconditional GOTO to label 0x4012 ',
    errorStatus: '-'
  },
  {
    msgNr: 237,
    OriginalMessage: '08 10 10 74 88 03 66 40 12 DF //goto 0x4012, var_i1, LEQ',
    CobID: 'RW=?',
    FrameData: '081010748803664012DF',
    type: 'Normal',
    AxisID: 'G1',
    CS: '7488',
    Object: '-',
    ObjectName: '-',
    Data: 'GOTO 0x4012 , 0x0366, LEQ',
    Interpretation: 'Unconditional GOTO to label 0x4012 , VAR_I1, LEQ',
    errorStatus: '-'
  },
  {
    msgNr: 238,
    OriginalMessage: '08 10 10 74 A0 03 66 40 12 F7 //goto 0x4012, var_i1, NEQ',
    CobID: 'RW=?',
    FrameData: '08101074A003664012F7',
    type: 'Normal',
    AxisID: 'G1',
    CS: '74A0',
    Object: '-',
    ObjectName: '-',
    Data: 'GOTO 0x4012 , 0x0366, NEQ',
    Interpretation: 'Unconditional GOTO to label 0x4012 , VAR_I1, NEQ',
    errorStatus: '-'
  },
  {
    msgNr: 239,
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
    msgNr: 240,
    OriginalMessage: '08 10 10 75 91 02 28 40 12 AA //call 0x4012, apos, LT',
    CobID: 'RW=?',
    FrameData: '081010759102284012AA',
    type: 'Normal',
    AxisID: 'G1',
    CS: '7591',
    Object: '-',
    ObjectName: '-',
    Data: 'CALL 0x4012 , 0x0228, LT',
    Interpretation: 'Unconditional CALL with address set in 0x4012 , APOS, LT',
    errorStatus: '-'
  },
  {
    msgNr: 241,
    OriginalMessage: '08 10 10 75 82 02 9E 40 12 11 //goto 0x4012, cpos , geq',
    CobID: 'RW=?',
    FrameData: '0810107582029E401211',
    type: 'Normal',
    AxisID: 'G1',
    CS: '7582',
    Object: '-',
    ObjectName: '-',
    Data: 'GOTO 0x4012 , 0x029E, GEQ',
    Interpretation: 'Unconditional GOTO to label 0x4012 , CPOS, GEQ',
    errorStatus: '-'
  },
  {
    msgNr: 242,
    OriginalMessage: '06 10 10 1E 01 03 66 AE  //calls var_i1',
    CobID: 'RW=?',
    FrameData: '0610101E010366AE',
    type: 'Normal',
    AxisID: 'G1',
    CS: '1E01',
    Object: '-',
    ObjectName: '-',
    Data: 'CALLS 0x0366 ',
    Interpretation: 'Cancelable CALL with address set in var VAR_I1 ',
    errorStatus: '-'
  },
  {
    msgNr: 243,
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
    msgNr: 244,
    OriginalMessage: '08 10 10 71 B9 02 C2 02 28 40  //!RT apos',
    CobID: 'RW=?',
    FrameData: '08101071B902C2022840',
    type: 'Normal',
    AxisID: 'G1',
    CS: '71B9',
    Object: '-',
    ObjectName: '-',
    Data: '!RT 0228  ',
    Interpretation: '! if Relative Time >= APOS  [V32]',
    errorStatus: '-'
  },
  {
    msgNr: 245,
    OriginalMessage: '0A 10 10 70 B9 02 C2 00 12 00 00 29  //!RT 0x12',
    CobID: 'RW=?',
    FrameData: '0A101070B902C20012000029',
    type: 'Normal',
    AxisID: 'G1',
    CS: '70B9',
    Object: '-',
    ObjectName: '-',
    Data: '!RT 0x00000012  ',
    Interpretation: '! if Relative Time >= 0x00000012  [val32]',
    errorStatus: '-'
  },
  {
    msgNr: 246,
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
    msgNr: 247,
    OriginalMessage: '08 10 10 71 81 02 AE 02 28 F4 //!RU apos',
    CobID: 'RW=?',
    FrameData: '081010718102AE0228F4',
    type: 'Normal',
    AxisID: 'G1',
    CS: '7181',
    Object: '-',
    ObjectName: '-',
    Data: '!RU/!SRU/!PRU/!TRU  0228  ',
    Interpretation: '! if Reference Under APOS  [V32]',
    errorStatus: '-'
  },
  {
    msgNr: 248,
    OriginalMessage: '0A 10 10 70 81 02 AE 00 12 00 00 DD //!RU 0x12',
    CobID: 'RW=?',
    FrameData: '0A1010708102AE00120000DD',
    type: 'Normal',
    AxisID: 'G1',
    CS: '7081',
    Object: '-',
    ObjectName: '-',
    Data: '!RU/!SRU/!PRU/!TRU 0x00000012  ',
    Interpretation: '! if Position Reference Under 0x00000012 = 18d  [val32]',
    errorStatus: '-'
  },
  {
    msgNr: 249,
    OriginalMessage: '08 10 10 71 81 02 AE 02 28 F4 //!PRU apos',
    CobID: 'RW=?',
    FrameData: '081010718102AE0228F4',
    type: 'Normal',
    AxisID: 'G1',
    CS: '7181',
    Object: '-',
    ObjectName: '-',
    Data: '!RU/!SRU/!PRU/!TRU  0228  ',
    Interpretation: '! if Reference Under APOS  [V32]',
    errorStatus: '-'
  },
  {
    msgNr: 250,
    OriginalMessage: '0A 10 10 70 81 02 AE 00 12 00 00 DD //!PRU 0x12',
    CobID: 'RW=?',
    FrameData: '0A1010708102AE00120000DD',
    type: 'Normal',
    AxisID: 'G1',
    CS: '7081',
    Object: '-',
    ObjectName: '-',
    Data: '!RU/!SRU/!PRU/!TRU 0x00000012  ',
    Interpretation: '! if Position Reference Under 0x00000012 = 18d  [val32]',
    errorStatus: '-'
  },
  {
    msgNr: 251,
    OriginalMessage: '08 10 10 71 81 02 AE 02 28 F4 //!SRU apos',
    CobID: 'RW=?',
    FrameData: '081010718102AE0228F4',
    type: 'Normal',
    AxisID: 'G1',
    CS: '7181',
    Object: '-',
    ObjectName: '-',
    Data: '!RU/!SRU/!PRU/!TRU  0228  ',
    Interpretation: '! if Reference Under APOS  [V32]',
    errorStatus: '-'
  },
  {
    msgNr: 252,
    OriginalMessage: '0A 10 10 70 81 02 AE 00 12 00 00 DD //!SRU 0x12',
    CobID: 'RW=?',
    FrameData: '0A1010708102AE00120000DD',
    type: 'Normal',
    AxisID: 'G1',
    CS: '7081',
    Object: '-',
    ObjectName: '-',
    Data: '!RU/!SRU/!PRU/!TRU 0x00000012  ',
    Interpretation: '! if Position Reference Under 0x00000012 = 18d  [val32]',
    errorStatus: '-'
  },
  {
    msgNr: 253,
    OriginalMessage: '08 10 10 71 81 02 AE 02 28 F4 //!TRU apos',
    CobID: 'RW=?',
    FrameData: '081010718102AE0228F4',
    type: 'Normal',
    AxisID: 'G1',
    CS: '7181',
    Object: '-',
    ObjectName: '-',
    Data: '!RU/!SRU/!PRU/!TRU  0228  ',
    Interpretation: '! if Reference Under APOS  [V32]',
    errorStatus: '-'
  },
  {
    msgNr: 254,
    OriginalMessage: '0A 10 10 70 81 02 AE 00 00 00 12 DD //!TRU 0x12',
    CobID: 'RW=?',
    FrameData: '0A1010708102AE00000012DD',
    type: 'Normal',
    AxisID: 'G1',
    CS: '7081',
    Object: '-',
    ObjectName: '-',
    Data: '!RU/!SRU/!PRU/!TRU 0x00120000  ',
    Interpretation: '! if Position Reference Under 0x00120000 = 1179648d  [val32]',
    errorStatus: '-'
  },
  {
    msgNr: 255,
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
    msgNr: 256,
    OriginalMessage: '08 10 10 71 96 09 8A 02 A0 64 //!LSO cspd',
    CobID: 'RW=?',
    FrameData: '0810107196098A02A064',
    type: 'Normal',
    AxisID: 'G1',
    CS: '7196',
    Object: '-',
    ObjectName: '-',
    Data: '!LSO  0x02A0  ',
    Interpretation: '! if Load Speed Over CSPD  [V32]',
    errorStatus: '-'
  },
  {
    msgNr: 257,
    OriginalMessage: '0A 10 10 70 96 09 8A 00 12 00 00 D5 //!LSO 0x12',
    CobID: 'RW=?',
    FrameData: '0A10107096098A00120000D5',
    type: 'Normal',
    AxisID: 'G1',
    CS: '7096',
    Object: '-',
    ObjectName: '-',
    Data: '!LSO 0x00000012  ',
    Interpretation: '! if Load Speed Over 0x00000012 = 18d   [val32]',
    errorStatus: '-'
  },
  {
    msgNr: 258,
    OriginalMessage: '08 10 10 71 96 02 2C 02 A0 FF //!MSO cspd',
    CobID: 'RW=?',
    FrameData: '0810107196022C02A0FF',
    type: 'Normal',
    AxisID: 'G1',
    CS: '7196',
    Object: '-',
    ObjectName: '-',
    Data: '!MSO  0x02A0  ',
    Interpretation: '! if Motor Speed Over CSPD  [V32]',
    errorStatus: '-'
  },
  {
    msgNr: 259,
    OriginalMessage: '0A 10 10 70 96 02 2C 00 12 00 00 70 //!MSO 0x12',
    CobID: 'RW=?',
    FrameData: '0A10107096022C0012000070',
    type: 'Normal',
    AxisID: 'G1',
    CS: '7096',
    Object: '-',
    ObjectName: '-',
    Data: '!MSO 0x00000012  ',
    Interpretation: '! if Motor Speed Over 0x00000012 = 18d   [val32]',
    errorStatus: '-'
  },
  {
    msgNr: 260,
    OriginalMessage: '08 00 10 71 87 09 8A 02 A0 45 //!LSU cspd',
    CobID: 'RW=?',
    FrameData: '0800107187098A02A045',
    type: 'Normal',
    AxisID: 1,
    CS: '7187',
    Object: '-',
    ObjectName: '-',
    Data: '!LSU  0x02A0  ',
    Interpretation: '! if Load Speed Under CSPD  [V32]',
    errorStatus: '-'
  },
  {
    msgNr: 261,
    OriginalMessage: '0A 00 10 70 87 09 8A 00 32 00 00 D6 //!LSU 0x32',
    CobID: 'RW=?',
    FrameData: '0A00107087098A00320000D6',
    type: 'Normal',
    AxisID: 1,
    CS: '7087',
    Object: '-',
    ObjectName: '-',
    Data: '!LSU 0x00000032  ',
    Interpretation: '! if Load Speed Under 0x00000032 = 50d   [val32]',
    errorStatus: '-'
  },
  {
    msgNr: 262,
    OriginalMessage: '08 00 10 71 87 02 2C 02 A0 E0 //!MSU cspd',
    CobID: 'RW=?',
    FrameData: '0800107187022C02A0E0',
    type: 'Normal',
    AxisID: 1,
    CS: '7187',
    Object: '-',
    ObjectName: '-',
    Data: '!MSU  0x02A0  ',
    Interpretation: '! if Motor Speed Under CSPD  [V32]',
    errorStatus: '-'
  },
  {
    msgNr: 263,
    OriginalMessage: '0A 00 10 70 87 02 2C 56 78 12 34 53 //!MSU 0x12345678',
    CobID: 'RW=?',
    FrameData: '0A00107087022C5678123453',
    type: 'Normal',
    AxisID: 1,
    CS: '7087',
    Object: '-',
    ObjectName: '-',
    Data: '!MSU 0x12345678  ',
    Interpretation: '! if Motor Speed Under 0x12345678 = 305419896d   [val32]',
    errorStatus: '-'
  },
  {
    msgNr: 264,
    OriginalMessage: '08 10 10 25 68 00 12 00 00 C7 //var_lf =0x12',
    CobID: 'RW=?',
    FrameData: '081010256800120000C7',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2568',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0368 = 0x00000012',
    Interpretation: ' VAR_LF = 0x00000012 -- [V32 = val32]',
    errorStatus: '-'
  },
  {
    msgNr: 265,
    OriginalMessage: '08 00 10 71 90 02 9E 02 28 E3  // !VO cpos, apos',
    CobID: 'RW=?',
    FrameData: '0800107190029E0228E3',
    type: 'Normal',
    AxisID: 1,
    CS: '7190',
    Object: '-',
    ObjectName: '-',
    Data: '!VO 0x029E, 0x0228 ',
    Interpretation: '! if CPOS over APOS  [V32A, V32B]',
    errorStatus: '-'
  },
  {
    msgNr: 266,
    OriginalMessage: '0A 00 10 70 90 02 9E 56 78 12 34 CE  // !VO cpos, 0x12345678',
    CobID: 'RW=?',
    FrameData: '0A00107090029E56781234CE',
    type: 'Normal',
    AxisID: 1,
    CS: '7090',
    Object: '-',
    ObjectName: '-',
    Data: '!VO 0x029E, 0x12345678 ',
    Interpretation: '! if CPOS over 0x12345678 = 305419896d  [V32A, val32]',
    errorStatus: '-'
  },
  {
    msgNr: 267,
    OriginalMessage: '08 00 10 71 81 02 9E 02 28 D4  // !VU cpos, apos',
    CobID: 'RW=?',
    FrameData: '0800107181029E0228D4',
    type: 'Normal',
    AxisID: 1,
    CS: '7181',
    Object: '-',
    ObjectName: '-',
    Data: '!VU 0x029E, 0x0228 ',
    Interpretation: '! if CPOS under APOS  [V32A, V32B]',
    errorStatus: '-'
  },
  {
    msgNr: 268,
    OriginalMessage: '0A 00 10 70 81 02 9E 00 12 00 00 BD  // !VU cpos, 0x12',
    CobID: 'RW=?',
    FrameData: '0A00107081029E00120000BD',
    type: 'Normal',
    AxisID: 1,
    CS: '7081',
    Object: '-',
    ObjectName: '-',
    Data: '!VU 0x029E, 0x00000012 ',
    Interpretation: '! if CPOS under 0x00000012 = 18d  [V32A, val32]',
    errorStatus: '-'
  },
  {
    msgNr: 269,
    OriginalMessage: '08 00 10 06 08 56 78 12 34 3A //wait! 0x12345678',
    CobID: 'RW=?',
    FrameData: '0800100608567812343A',
    type: 'Normal',
    AxisID: 1,
    CS: '0608',
    Object: '-',
    ObjectName: '-',
    Data: 'WAIT! 0x12345678',
    Interpretation: 'Wait until event occurs, but exit if Time > 0x12345678 = 305419896',
    errorStatus: '-'
  },
  {
    msgNr: 270,
    OriginalMessage: '04 00 10 04 08 20 ',
    CobID: 'RW=?',
    FrameData: '040010040820',
    type: 'Normal',
    AxisID: 1,
    CS: '0408',
    Object: '-',
    ObjectName: '-',
    Data: 'WAIT!',
    Interpretation: 'Wait until event occurs',
    errorStatus: '-'
  },
  {
    msgNr: 271,
    OriginalMessage: '04 00 10 80 28 BC //SAP apos    ',
    CobID: 'RW=?',
    FrameData: '0400108028BC',
    type: 'Normal',
    AxisID: 1,
    CS: '8028',
    Object: '-',
    ObjectName: '-',
    Data: 'SAP 0x0228  ',
    Interpretation: 'Set Actual Position APOS   -- [V32]',
    errorStatus: '-'
  },
  {
    msgNr: 272,
    OriginalMessage: '04 00 10 80 9E 32 //SAP cpos    ',
    CobID: 'RW=?',
    FrameData: '040010809E32',
    type: 'Normal',
    AxisID: 1,
    CS: '809E',
    Object: '-',
    ObjectName: '-',
    Data: 'SAP 0x029E  ',
    Interpretation: 'Set Actual Position CPOS   -- [V32]',
    errorStatus: '-'
  },
  {
    msgNr: 273,
    OriginalMessage: '04 00 10 81 68 FD //SAP var_lf  ',
    CobID: 'RW=?',
    FrameData: '0400108168FD',
    type: 'Normal',
    AxisID: 1,
    CS: '8168',
    Object: '-',
    ObjectName: '-',
    Data: 'SAP 0x0368  ',
    Interpretation: 'Set Actual Position VAR_LF   -- [V32]',
    errorStatus: '-'
  },
  {
    msgNr: 274,
    OriginalMessage: '06 00 10 7D 67 02 28 24  //SEG var_i2 , APOS',
    CobID: 'RW=?',
    FrameData: '0600107D67022824',
    type: 'Normal',
    AxisID: 1,
    CS: '7D67',
    Object: '-',
    ObjectName: '-',
    Data: 'SEG 0x0367 , 0x0228',
    Interpretation: 'Segment VAR_I2 , APOS -- [V16, V32]',
    errorStatus: '-'
  },
  {
    msgNr: 275,
    OriginalMessage: '0A 10 00 91 05 03 68 78 91 34 56 AD //Checksum dont match',
    CobID: 'RW=?',
    FrameData: '0A10009105036878913456AD',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: "Checksum 173 and calculated 174 don't match",
    Interpretation: 'Checksum doesn`t match',
    errorStatus: 'error'
  },
  {
    msgNr: 276,
    OriginalMessage: '08 00 10 C9 63 02 28 03 67 D8 DD //Length dont match ',
    CobID: 'RW=?',
    FrameData: '080010C96302280367D8DD',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: "MsgLength = 10 which don't match fist byte 8 or history length 8 ",
    Interpretation: 'Message length doesn`t match',
    errorStatus: 'error'
  },
  {
    msgNr: 277,
    OriginalMessage: '08 00 10 C9 63 02 28 03 67 D8  //PTP apos, var_i2,99',
    CobID: 'RW=?',
    FrameData: '080010C96302280367D8',
    type: 'Normal',
    AxisID: 1,
    CS: 'C963',
    Object: '-',
    ObjectName: '-',
    Data: 'PTP 0x0228 , 0x0367, 99  ',
    Interpretation: 'Send a PT point APOS, VAR_I2, 99  -- [PTP &V32, T, C]',
    errorStatus: '-'
  },
  {
    msgNr: 278,
    OriginalMessage: '08 00 10 C9 64 02 28 03 66 D8  //PTP apos, var_i1, 100',
    CobID: 'RW=?',
    FrameData: '080010C96402280366D8',
    type: 'Normal',
    AxisID: 1,
    CS: 'C964',
    Object: '-',
    ObjectName: '-',
    Data: 'PTP 0x0228 , 0x0366, 100  ',
    Interpretation: 'Send a PT point APOS, VAR_I1, 100  -- [PTP &V32, T, C]',
    errorStatus: '-'
  },
  {
    msgNr: 279,
    OriginalMessage: '08 10 10 25 68 00 12 00 00 C7 //var_lf =0x12',
    CobID: 'RW=?',
    FrameData: '081010256800120000C7',
    type: 'Normal',
    AxisID: 'G1',
    CS: '2568',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0368 = 0x00000012',
    Interpretation: ' VAR_LF = 0x00000012 -- [V32 = val32]',
    errorStatus: '-'
  },
  {
    msgNr: 280,
    OriginalMessage: '08 00 10 71 90 02 9E 02 28 E3  // !VO cpos, apos',
    CobID: 'RW=?',
    FrameData: '0800107190029E0228E3',
    type: 'Normal',
    AxisID: 1,
    CS: '7190',
    Object: '-',
    ObjectName: '-',
    Data: '!VO 0x029E, 0x0228 ',
    Interpretation: '! if CPOS over APOS  [V32A, V32B]',
    errorStatus: '-'
  },
  {
    msgNr: 281,
    OriginalMessage: '0A 00 10 70 90 02 9E 56 78 12 34 CE  // !VO cpos, 0x12345678',
    CobID: 'RW=?',
    FrameData: '0A00107090029E56781234CE',
    type: 'Normal',
    AxisID: 1,
    CS: '7090',
    Object: '-',
    ObjectName: '-',
    Data: '!VO 0x029E, 0x12345678 ',
    Interpretation: '! if CPOS over 0x12345678 = 305419896d  [V32A, val32]',
    errorStatus: '-'
  },
  {
    msgNr: 282,
    OriginalMessage: '08 00 10 71 81 02 9E 02 28 D4  // !VU cpos, apos',
    CobID: 'RW=?',
    FrameData: '0800107181029E0228D4',
    type: 'Normal',
    AxisID: 1,
    CS: '7181',
    Object: '-',
    ObjectName: '-',
    Data: '!VU 0x029E, 0x0228 ',
    Interpretation: '! if CPOS under APOS  [V32A, V32B]',
    errorStatus: '-'
  },
  {
    msgNr: 283,
    OriginalMessage: '0A 00 10 70 81 02 9E 00 12 00 00 BD  // !VU cpos, 0x12',
    CobID: 'RW=?',
    FrameData: '0A00107081029E00120000BD',
    type: 'Normal',
    AxisID: 1,
    CS: '7081',
    Object: '-',
    ObjectName: '-',
    Data: '!VU 0x029E, 0x00000012 ',
    Interpretation: '! if CPOS under 0x00000012 = 18d  [V32A, val32]',
    errorStatus: '-'
  },
  {
    msgNr: 284,
    OriginalMessage: '08 00 10 06 08 56 78 12 34 3A //wait! 0x12345678',
    CobID: 'RW=?',
    FrameData: '0800100608567812343A',
    type: 'Normal',
    AxisID: 1,
    CS: '0608',
    Object: '-',
    ObjectName: '-',
    Data: 'WAIT! 0x12345678',
    Interpretation: 'Wait until event occurs, but exit if Time > 0x12345678 = 305419896',
    errorStatus: '-'
  },
  {
    msgNr: 285,
    OriginalMessage: '04 00 10 04 08 20 ',
    CobID: 'RW=?',
    FrameData: '040010040820',
    type: 'Normal',
    AxisID: 1,
    CS: '0408',
    Object: '-',
    ObjectName: '-',
    Data: 'WAIT!',
    Interpretation: 'Wait until event occurs',
    errorStatus: '-'
  },
  {
    msgNr: 286,
    OriginalMessage: '04 00 10 80 28 BC //SAP apos    ',
    CobID: 'RW=?',
    FrameData: '0400108028BC',
    type: 'Normal',
    AxisID: 1,
    CS: '8028',
    Object: '-',
    ObjectName: '-',
    Data: 'SAP 0x0228  ',
    Interpretation: 'Set Actual Position APOS   -- [V32]',
    errorStatus: '-'
  },
  {
    msgNr: 287,
    OriginalMessage: '04 00 10 80 9E 32 //SAP cpos    ',
    CobID: 'RW=?',
    FrameData: '040010809E32',
    type: 'Normal',
    AxisID: 1,
    CS: '809E',
    Object: '-',
    ObjectName: '-',
    Data: 'SAP 0x029E  ',
    Interpretation: 'Set Actual Position CPOS   -- [V32]',
    errorStatus: '-'
  },
  {
    msgNr: 288,
    OriginalMessage: '04 00 10 81 68 FD //SAP var_lf  ',
    CobID: 'RW=?',
    FrameData: '0400108168FD',
    type: 'Normal',
    AxisID: 1,
    CS: '8168',
    Object: '-',
    ObjectName: '-',
    Data: 'SAP 0x0368  ',
    Interpretation: 'Set Actual Position VAR_LF   -- [V32]',
    errorStatus: '-'
  },
  {
    msgNr: 289,
    OriginalMessage: '06 00 10 7D 67 02 28 24  //SEG var_i2 , APOS',
    CobID: 'RW=?',
    FrameData: '0600107D67022824',
    type: 'Normal',
    AxisID: 1,
    CS: '7D67',
    Object: '-',
    ObjectName: '-',
    Data: 'SEG 0x0367 , 0x0228',
    Interpretation: 'Segment VAR_I2 , APOS -- [V16, V32]',
    errorStatus: '-'
  },
  {
    msgNr: 290,
    OriginalMessage: '04 00 10 01 02 17 /axison',
    CobID: 'RW=?',
    FrameData: '040010010217',
    type: 'Normal',
    AxisID: 1,
    CS: '0102',
    Object: '-',
    ObjectName: '-',
    Data: 'AXISON',
    Interpretation: 'AXIS is ON (deactivate control)',
    errorStatus: '-'
  },
  {
    msgNr: 291,
    OriginalMessage: '04 00 10 00 02 16 /axisoff',
    CobID: 'RW=?',
    FrameData: '040010000216',
    type: 'Normal',
    AxisID: 1,
    CS: '0002',
    Object: '-',
    ObjectName: '-',
    Data: 'AXISOFF',
    Interpretation: 'AXIS is OFF (deactivate control)',
    errorStatus: '-'
  },
  {
    msgNr: 292,
    OriginalMessage: '04 00 10 00 20 34 /endinit',
    CobID: 'RW=?',
    FrameData: '040010002034',
    type: 'Normal',
    AxisID: 1,
    CS: '0020',
    Object: '-',
    ObjectName: '-',
    Data: 'ENDINIT',
    Interpretation: 'END of Initialization',
    errorStatus: '-'
  },
  {
    msgNr: 293,
    OriginalMessage: '0A 00 10 C8 37 56 78 12 34 00 55 82 //PTP 0x12345678, 0x55,55',
    CobID: 'RW=?',
    FrameData: '0A0010C83756781234005582',
    type: 'Normal',
    AxisID: 1,
    CS: 'C837',
    Object: '-',
    ObjectName: '-',
    Data: 'PTP 0x12345678 , 0x0055, 55  ',
    Interpretation:
      'Send a PT point 0x12345678 = 305419896d, 0x0055 = 85d, 55  -- [PTP val32,val16, C]',
    errorStatus: '-'
  },
  {
    msgNr: 294,
    OriginalMessage: '0A 00 10 19 03 02 9E 02 A0 03 66 E1  //PVTP cpos, cspd, var_i1, 3',
    CobID: 'RW=?',
    FrameData: '0A00101903029E02A00366E1',
    type: 'Normal',
    AxisID: 1,
    CS: '1903',
    Object: '-',
    ObjectName: '-',
    Data: 'PVTP P, S, T, C => 0x029E , 0x02A0 , 0x0366 , 3',
    Interpretation: 'Send a PVT point to the axis, P = CPOS, S = CSPD, T = VAR_I1, C = 3',
    errorStatus: '-'
  },
  {
    msgNr: 295,
    OriginalMessage: '0C 00 10 18 06 22 34 11 00 01 29 00 06 D1  //PVTP 0x112234, 0x129, 0x6, 6',
    CobID: 'RW=?',
    FrameData: '0C001018062234110001290006D1',
    type: 'Normal',
    AxisID: 1,
    CS: '1806',
    Object: '-',
    ObjectName: '-',
    Data: 'PVTP 0x112234, 0x0129, 0x0006, 6',
    Interpretation: 'Send a PVT point PVTP valP= 0x112234, valS=0x0129, valT=0x0006, C=6',
    errorStatus: '-'
  },
  {
    msgNr: 296,
    OriginalMessage: '0C 00 10 18 06 34 56 12 00 12 56 00 06 44 //PVTP 0x123456, 0x1256, 0x6, 6',
    CobID: 'RW=?',
    FrameData: '0C00101806345612001256000644',
    type: 'Normal',
    AxisID: 1,
    CS: '1806',
    Object: '-',
    ObjectName: '-',
    Data: 'PVTP 0x123456, 0x1256, 0x0006, 6',
    Interpretation: 'Send a PVT point PVTP valP= 0x123456, valS=0x1256, valT=0x0006, C=6',
    errorStatus: '-'
  },
  {
    msgNr: 297,
    OriginalMessage: '0C 00 10 18 06 34 56 12 00 92 56 00 65 23 //PVTP 0x123456, 0x9256, 0x65, 6',
    CobID: 'RW=?',
    FrameData: '0C00101806345612009256006523',
    type: 'Normal',
    AxisID: 1,
    CS: '1806',
    Object: '-',
    ObjectName: '-',
    Data: 'PVTP 0x123456, 0x9256, 0x0065, 6',
    Interpretation: 'Send a PVT point PVTP valP= 0x123456, valS=0x9256, valT=0x0065, C=6',
    errorStatus: '-'
  },
  {
    msgNr: 298,
    OriginalMessage: '0C 00 10 18 06 01 23 00 00 11 15 01 55 DA //PVTP 0x123, 0x1115, 0x155,6',
    CobID: 'RW=?',
    FrameData: '0C001018060123000011150155DA',
    type: 'Normal',
    AxisID: 1,
    CS: '1806',
    Object: '-',
    ObjectName: '-',
    Data: 'PVTP 0x000123, 0x1115, 0x0155, 6',
    Interpretation: 'Send a PVT point PVTP valP= 0x000123, valS=0x1115, valT=0x0155, C=6',
    errorStatus: '-'
  },
  {
    msgNr: 299,
    OriginalMessage: '08 00 10 84 00 56 78 12 34 B0 //sap 0x12345678',
    CobID: 'RW=?',
    FrameData: '080010840056781234B0',
    type: 'Normal',
    AxisID: 1,
    CS: '8400',
    Object: '-',
    ObjectName: '-',
    Data: 'SAP 0x12345678 ',
    Interpretation: 'Set actual position = 0x12345678 = 305419896d  -- [SAP val32]',
    errorStatus: '-'
  },
  {
    msgNr: 300,
    OriginalMessage: '0A 00 10 78 00 85 21 56 78 12 34 4C //SEG 0x8521, 0x12345678',
    CobID: 'RW=?',
    FrameData: '0A001078008521567812344C',
    type: 'Normal',
    AxisID: 1,
    CS: '7800',
    Object: '-',
    ObjectName: '-',
    Data: 'SEG 0x8521, 0x12345678 ',
    Interpretation: 'SSegment 0x8521= -31455d,  0x12345678 = 305419896d  -- [SEG val16, val32]',
    errorStatus: '-'
  },
  {
    msgNr: 301,
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
    msgNr: 302,
    OriginalMessage: '06 00 10 18 80 00 45 F3 //SETPT 0x45',
    CobID: 'RW=?',
    FrameData: '06001018800045F3',
    type: 'Normal',
    AxisID: 1,
    CS: '1880',
    Object: '-',
    ObjectName: '-',
    Data: 'SETPT/SETPVT 0x0045 ',
    Interpretation: 'Configure PT/PVT mode 0x0045 [val16]',
    errorStatus: '-'
  },
  {
    msgNr: 303,
    OriginalMessage: '08 00 10 14 04 34 56 32 12 FE //setsync 0x32123456',
    CobID: 'RW=?',
    FrameData: '080010140434563212FE',
    type: 'Normal',
    AxisID: 1,
    CS: '1404',
    Object: '-',
    ObjectName: '-',
    Data: 'SETSYNC 0x32123456',
    Interpretation: 'Synchronization start/stop 0x32123456= 840053846d [val32]',
    errorStatus: '-'
  },
  {
    msgNr: 304,
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
    msgNr: 305,
    OriginalMessage: '04 00 10 01 C4 D9 //STOP ',
    CobID: 'RW=?',
    FrameData: '04001001C4D9',
    type: 'Normal',
    AxisID: 1,
    CS: '01C4',
    Object: '-',
    ObjectName: '-',
    Data: 'STOP',
    Interpretation: 'STOP motion',
    errorStatus: '-'
  },
  {
    msgNr: 306,
    OriginalMessage: '04 00 10 00 C4 D8 //STOP !',
    CobID: 'RW=?',
    FrameData: '04001000C4D8',
    type: 'Normal',
    AxisID: 1,
    CS: '00C4',
    Object: '-',
    ObjectName: '-',
    Data: 'STOP !',
    Interpretation: 'STOP motion when ! (event occurs)',
    errorStatus: '-'
  },
  {
    msgNr: 307,
    OriginalMessage: '04 00 10 01 08 1D //UPD ',
    CobID: 'RW=?',
    FrameData: '04001001081D',
    type: 'Normal',
    AxisID: 1,
    CS: '0108',
    Object: '-',
    ObjectName: '-',
    Data: 'UPD',
    Interpretation: 'Update motion immediate',
    errorStatus: '-'
  },
  {
    msgNr: 308,
    OriginalMessage: '04 00 10 00 08 1C //UPD!',
    CobID: 'RW=?',
    FrameData: '04001000081C',
    type: 'Normal',
    AxisID: 1,
    CS: '0008',
    Object: '-',
    ObjectName: '-',
    Data: 'UPD !',
    Interpretation: 'Update when ! (event occurs)',
    errorStatus: '-'
  },
  {
    msgNr: 309,
    OriginalMessage: '06 00 10 2C B2 02 28 1E //STA',
    CobID: 'RW=?',
    FrameData: '0600102CB202281E',
    type: 'Normal',
    AxisID: 1,
    CS: '2CB2',
    Object: '-',
    ObjectName: '-',
    Data: 'STA',
    Interpretation: 'Set Target pos. = Actual pos. ',
    errorStatus: '-'
  },
  {
    msgNr: 310,
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
    msgNr: 311,
    OriginalMessage: '04 00 10 06 81 9B //DISLSN',
    CobID: 'RW=?',
    FrameData: '04001006819B',
    type: 'Normal',
    AxisID: 1,
    CS: '0681',
    Object: '-',
    ObjectName: '-',
    Data: 'DISLSN',
    Interpretation: 'Disable LSN limit switch',
    errorStatus: '-'
  },
  {
    msgNr: 312,
    OriginalMessage: '04 00 10 06 A0 BA //DISLSP',
    CobID: 'RW=?',
    FrameData: '04001006A0BA',
    type: 'Normal',
    AxisID: 1,
    CS: '06A0',
    Object: '-',
    ObjectName: '-',
    Data: 'DISLSP',
    Interpretation: 'Disable LSP limit switch',
    errorStatus: '-'
  },
  {
    msgNr: 313,
    OriginalMessage: '04 00 10 06 01 1B //ENLSN0',
    CobID: 'RW=?',
    FrameData: '04001006011B',
    type: 'Normal',
    AxisID: 1,
    CS: '0601',
    Object: '-',
    ObjectName: '-',
    Data: 'ENLSN0',
    Interpretation: 'Enable LSN limit switch for 1->0',
    errorStatus: '-'
  },
  {
    msgNr: 314,
    OriginalMessage: '04 00 10 07 01 1C //ENLSN1',
    CobID: 'RW=?',
    FrameData: '04001007011C',
    type: 'Normal',
    AxisID: 1,
    CS: '0701',
    Object: '-',
    ObjectName: '-',
    Data: 'ENLSN1',
    Interpretation: 'Enable LSN limit switch for 0->1',
    errorStatus: '-'
  },
  {
    msgNr: 315,
    OriginalMessage: '04 00 10 06 20 3A //ENLSP0',
    CobID: 'RW=?',
    FrameData: '04001006203A',
    type: 'Normal',
    AxisID: 1,
    CS: '0620',
    Object: '-',
    ObjectName: '-',
    Data: 'ENLSP0',
    Interpretation: 'Enable LSP limit switch for 1->0',
    errorStatus: '-'
  },
  {
    msgNr: 316,
    OriginalMessage: '04 00 10 07 20 3B //ENLSP1',
    CobID: 'RW=?',
    FrameData: '04001007203B',
    type: 'Normal',
    AxisID: 1,
    CS: '0720',
    Object: '-',
    ObjectName: '-',
    Data: 'ENLSP1',
    Interpretation: 'Enable LSP limit switch for 0->1',
    errorStatus: '-'
  },
  {
    msgNr: 317,
    OriginalMessage: '08 00 10 ED 00 00 1F 03 66 8D //OUT(0,1,2,3,4) = var_i1;',
    CobID: 'RW=?',
    FrameData: '080010ED00001F03668D',
    type: 'Normal',
    AxisID: 1,
    CS: 'ED00',
    Object: '-',
    ObjectName: '-',
    Data: 'OUT(0, 1, 2, 3, 4) = 0x0366 ',
    Interpretation: 'Set output OUT(0, 1, 2, 3, 4) = VAR_I1  -- [OUT(#n #m #p) = &V16]',
    errorStatus: '-'
  },
  {
    msgNr: 318,
    OriginalMessage: '08 00 10 ED 00 00 18 03 66 86 //OUT(3,4) = var_i1;',
    CobID: 'RW=?',
    FrameData: '080010ED000018036686',
    type: 'Normal',
    AxisID: 1,
    CS: 'ED00',
    Object: '-',
    ObjectName: '-',
    Data: 'OUT(3, 4) = 0x0366 ',
    Interpretation: 'Set output OUT(3, 4) = VAR_I1  -- [OUT(#n #m #p) = &V16]',
    errorStatus: '-'
  },
  {
    msgNr: 319,
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
    msgNr: 320,
    OriginalMessage: '08 00 10 EC 00 00 1F 00 12 35 //OUT(0,1,2,3,4) = 0x12',
    CobID: 'RW=?',
    FrameData: '080010EC00001F001235',
    type: 'Normal',
    AxisID: 1,
    CS: 'EC00',
    Object: '-',
    ObjectName: '-',
    Data: 'OUT(0, 1, 2, 3, 4) = 0x0012 ',
    Interpretation: 'Set output OUT(0, 1, 2, 3, 4) = 18d  -- [OUT(#n #m #p) = val16]',
    errorStatus: '-'
  },
  {
    msgNr: 321,
    OriginalMessage: '08 00 10 EC 00 00 18 00 12 2E //OUT(3,4) = 0x12;',
    CobID: 'RW=?',
    FrameData: '080010EC00001800122E',
    type: 'Normal',
    AxisID: 1,
    CS: 'EC00',
    Object: '-',
    ObjectName: '-',
    Data: 'OUT(3, 4) = 0x0012 ',
    Interpretation: 'Set output OUT(3, 4) = 18d  -- [OUT(#n #m #p) = val16]',
    errorStatus: '-'
  },
  {
    msgNr: 322,
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
    msgNr: 323,
    OriginalMessage: '08 00 10 E8 00 03 40 03 66 AC  //var_i1 = IN(6,8,9)',
    CobID: 'RW=?',
    FrameData: '080010E80003400366AC',
    type: 'Normal',
    AxisID: 1,
    CS: 'E800',
    Object: '-',
    ObjectName: '-',
    Data: '0x0366  = IN(6,8,9) ',
    Interpretation: ' Read inputs VAR_I1  = IN(6,8,9) -- [V16D = IN(n,m,p) ]',
    errorStatus: '-'
  },
  {
    msgNr: 324,
    OriginalMessage: '06 00 10 EE 00 00 0E 12  //SetasInput(1,2,3)',
    CobID: 'RW=?',
    FrameData: '060010EE00000E12',
    type: 'Normal',
    AxisID: 1,
    CS: 'EE00',
    Object: '-',
    ObjectName: '-',
    Data: 'SetasInput(1,2,3) ',
    Interpretation: ' Set 1,2,3 as inputs ',
    errorStatus: '-'
  },
  {
    msgNr: 325,
    OriginalMessage: '06 00 10 EF 00 00 0E 13  //SetasOutput(1,2,3)',
    CobID: 'RW=?',
    FrameData: '060010EF00000E13',
    type: 'Normal',
    AxisID: 1,
    CS: 'EF00',
    Object: '-',
    ObjectName: '-',
    Data: 'SetasOutputs(1,2,3) ',
    Interpretation: ' Set 1,2,3 as outputs',
    errorStatus: '-'
  },
  {
    msgNr: 326,
    OriginalMessage: '0A 00 10 98 B4 00 20 03 66 03 67 59  //[2] (var_i1),dm = var_i2',
    CobID: 'RW=?',
    FrameData: '0A001098B400200366036759',
    type: 'Normal',
    AxisID: 1,
    CS: '98B4',
    Object: '-',
    ObjectName: '-',
    Data: '[2] (0x0366), DM  = 0x0367  ',
    Interpretation: '[2] (VAR_I1),DM = VAR_I2 [V16D, V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 327,
    OriginalMessage: '0A 00 10 98 B4 00 30 03 66 03 67 69  //[3] (var_i1),dm = var_i2',
    CobID: 'RW=?',
    FrameData: '0A001098B400300366036769',
    type: 'Normal',
    AxisID: 1,
    CS: '98B4',
    Object: '-',
    ObjectName: '-',
    Data: '[3] (0x0366), DM  = 0x0367  ',
    Interpretation: '[3] (VAR_I1),DM = VAR_I2 [V16D, V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 328,
    OriginalMessage: '0A 00 10 98 B4 00 A0 03 66 03 67 D9  //[10] (var_i1),dm = var_i2',
    CobID: 'RW=?',
    FrameData: '0A001098B400A003660367D9',
    type: 'Normal',
    AxisID: 1,
    CS: '98B4',
    Object: '-',
    ObjectName: '-',
    Data: '[10] (0x0366), DM  = 0x0367  ',
    Interpretation: '[10] (VAR_I1),DM = VAR_I2 [V16D, V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 329,
    OriginalMessage: ' //',
    CobID: 'xx',
    FrameData: '-',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'Can`t extract data from this row',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 330,
    OriginalMessage: '0A 00 10 98 B4 10 20 03 66 03 67 69  //[G2] (var_i1),dm = var_i2',
    CobID: 'RW=?',
    FrameData: '0A001098B410200366036769',
    type: 'Normal',
    AxisID: 1,
    CS: '98B4',
    Object: '-',
    ObjectName: '-',
    Data: '[G2] (0x0366), DM  = 0x0367  ',
    Interpretation: '[G2] (VAR_I1),DM = VAR_I2 [V16D, V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 331,
    OriginalMessage: '0A 00 10 98 B4 14 00 03 66 03 67 4D  //[G7] (var_i1),dm = var_i2',
    CobID: 'RW=?',
    FrameData: '0A001098B41400036603674D',
    type: 'Normal',
    AxisID: 1,
    CS: '98B4',
    Object: '-',
    ObjectName: '-',
    Data: '[G7] (0x0366), DM  = 0x0367  ',
    Interpretation: '[G7] (VAR_I1),DM = VAR_I2 [V16D, V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 332,
    OriginalMessage: '0A 00 10 98 B0 14 00 03 66 03 67 49  //[G7] (var_i1),pm = var_i2',
    CobID: 'RW=?',
    FrameData: '0A001098B014000366036749',
    type: 'Normal',
    AxisID: 1,
    CS: '98B0',
    Object: '-',
    ObjectName: '-',
    Data: '[G7] (0x0366), PM  = 0x0367  ',
    Interpretation: '[G7] (VAR_I1),PM = VAR_I2 [V16D, V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 333,
    OriginalMessage: '0A 00 10 98 B8 14 00 03 66 03 67 51  //[G7] (var_i1),spi = var_i2',
    CobID: 'RW=?',
    FrameData: '0A001098B814000366036751',
    type: 'Normal',
    AxisID: 1,
    CS: '98B8',
    Object: '-',
    ObjectName: '-',
    Data: '[G7] (0x0366), SPI  = 0x0367  ',
    Interpretation: '[G7] (VAR_I1),SPI = VAR_I2 [V16D, V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 334,
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
    msgNr: 335,
    OriginalMessage: '0A 00 10 98 B9 14 00 03 67 02 9E 89 //[G7] (var_i2),spi= cpos',
    CobID: 'RW=?',
    FrameData: '0A001098B914000367029E89',
    type: 'Normal',
    AxisID: 1,
    CS: '98B9',
    Object: '-',
    ObjectName: '-',
    Data: '[G7] (0x0367), SPI  = 0x029E  ',
    Interpretation: '[G7] (VAR_I2),SPI = CPOS [V16D, V32S]',
    errorStatus: '-'
  },
  {
    msgNr: 336,
    OriginalMessage: '0A 00 10 98 38 14 00 03 67 03 66 D1 //[G7] (var_i2+),spi= var_i1',
    CobID: 'RW=?',
    FrameData: '0A00109838140003670366D1',
    type: 'Normal',
    AxisID: 1,
    CS: '9838',
    Object: '-',
    ObjectName: '-',
    Data: '[G7] (0x0367+), SPI  = 0x0366  ',
    Interpretation: '[G7] (VAR_I2+),SPI = VAR_I1 [V16D, V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 337,
    OriginalMessage: '0A 00 10 98 39 14 00 03 67 02 9E 09 //[G7] (var_i2+),spi= cpos',
    CobID: 'RW=?',
    FrameData: '0A0010983914000367029E09',
    type: 'Normal',
    AxisID: 1,
    CS: '9839',
    Object: '-',
    ObjectName: '-',
    Data: '[G7] (0x0367+), SPI  = 0x029E  ',
    Interpretation: '[G7] (VAR_I2+),SPI = CPOS [V16D, V32S]',
    errorStatus: '-'
  },
  {
    msgNr: 338,
    OriginalMessage: '0A 00 10 98 14 00 30 03 66 03 67 C9 //[3]var_i1,dm =var_i2',
    CobID: 'RW=?',
    FrameData: '0A00109814003003660367C9',
    type: 'Normal',
    AxisID: 1,
    CS: '9814',
    Object: '-',
    ObjectName: '-',
    Data: '[3] 0x0366+, DM  = 0x0367  ',
    Interpretation: '[3] VAR_I1+,DM = VAR_I2 [V16D, V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 339,
    OriginalMessage: '0A 00 10 98 15 00 30 03 68 02 9E 02 //[3]var_lf,dm =cpos',
    CobID: 'RW=?',
    FrameData: '0A0010981500300368029E02',
    type: 'Normal',
    AxisID: 1,
    CS: '9815',
    Object: '-',
    ObjectName: '-',
    Data: '[3] 0x0368+, DM  = 0x029E  ',
    Interpretation: '[3] VAR_LF+,DM = CPOS [V32D, V32S]',
    errorStatus: '-'
  },
  {
    msgNr: 340,
    OriginalMessage: '0A 00 10 9D 88 10 10 03 67 03 66 32 //var_i1 = [G1] (var_i2),spi',
    CobID: 'RW=?',
    FrameData: '0A00109D8810100367036632',
    type: 'Normal',
    AxisID: 1,
    CS: '9D88',
    Object: '-',
    ObjectName: '-',
    Data: '0x0366 = [G1] (0x0367), SPI ',
    Interpretation: ' VAR_I1 = [G1] (VAR_I2),SPI  [V16D, V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 341,
    OriginalMessage: '0A 00 10 9D 08 10 10 03 67 03 66 B2 //var_i1 = [G1] (var_i2+),spi',
    CobID: 'RW=?',
    FrameData: '0A00109D08101003670366B2',
    type: 'Normal',
    AxisID: 1,
    CS: '9D08',
    Object: '-',
    ObjectName: '-',
    Data: '0x0366 = [G1] (0x0367+), SPI ',
    Interpretation: ' VAR_I1 = [G1] (VAR_I2+),SPI  [V16D, V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 342,
    OriginalMessage: '0A 00 10 9D 84 10 10 03 67 03 66 2E //var_i1 = [G1] (var_i2),dm',
    CobID: 'RW=?',
    FrameData: '0A00109D841010036703662E',
    type: 'Normal',
    AxisID: 1,
    CS: '9D84',
    Object: '-',
    ObjectName: '-',
    Data: '0x0366 = [G1] (0x0367), DM ',
    Interpretation: ' VAR_I1 = [G1] (VAR_I2),DM  [V16D, V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 343,
    OriginalMessage: '0A 00 10 9D 89 10 10 03 67 02 28 F4 //apos = [G1] (var_i2),spi',
    CobID: 'RW=?',
    FrameData: '0A00109D89101003670228F4',
    type: 'Normal',
    AxisID: 1,
    CS: '9D89',
    Object: '-',
    ObjectName: '-',
    Data: '0x0228 = [G1] (0x0367), SPI ',
    Interpretation: ' APOS = [G1] (VAR_I2),SPI  [V32D, V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 344,
    OriginalMessage: '0A 00 10 9D 09 10 10 03 67 02 B2 FE //tpos = [G1] (var_i2+),spi',
    CobID: 'RW=?',
    FrameData: '0A00109D091010036702B2FE',
    type: 'Normal',
    AxisID: 1,
    CS: '9D09',
    Object: '-',
    ObjectName: '-',
    Data: '0x02B2 = [G1] (0x0367+), SPI ',
    Interpretation: ' TPOS = [G1] (VAR_I2+),SPI  [V32D, V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 345,
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
    msgNr: 346,
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
    msgNr: 347,
    OriginalMessage: '0A 00 10 9C 04 00 50 03 67 03 66 DD //var_i1 = [5]var_i2,dm',
    CobID: 'RW=?',
    FrameData: '0A00109C04005003670366DD',
    type: 'Normal',
    AxisID: 1,
    CS: '9C04',
    Object: '-',
    ObjectName: '-',
    Data: '0x0366 = [5] 0x0367, DM ',
    Interpretation: ' VAR_I1 = [5] VAR_I2,DM  [V16D, V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 348,
    OriginalMessage: '0A 00 10 9C 05 00 50 02 B2 02 28 E9 //apos = [5]tpos,dm',
    CobID: 'RW=?',
    FrameData: '0A00109C05005002B20228E9',
    type: 'Normal',
    AxisID: 1,
    CS: '9C05',
    Object: '-',
    ObjectName: '-',
    Data: '0x0228 = [5] 0x02B2, DM ',
    Interpretation: ' APOS = [5] TPOS,DM  [V32D, V32]',
    errorStatus: '-'
  },
  {
    msgNr: 349,
    OriginalMessage: '08 00 10 B9 66 00 30 03 67 D1 //[3] var_i1 = var_i2',
    CobID: 'RW=?',
    FrameData: '080010B96600300367D1',
    type: 'Normal',
    AxisID: 1,
    CS: 'B966',
    Object: '-',
    ObjectName: '-',
    Data: '[3] 0x0366 = 0x0367',
    Interpretation: '[3] VAR_I1 = VAR_I2 -- [V16D, V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 350,
    OriginalMessage: '08 00 10 BC 28 00 40 02 9E DC //[4] apos=cpos',
    CobID: 'RW=?',
    FrameData: '080010BC280040029EDC',
    type: 'Normal',
    AxisID: 1,
    CS: 'BC28',
    Object: '-',
    ObjectName: '-',
    Data: '[4] 0x0228 = 0x029E',
    Interpretation: '[4] APOS = CPOS -- [V32D, V32S]',
    errorStatus: '-'
  },
  {
    msgNr: 351,
    OriginalMessage: '08 00 10 E4 9E 10 10 02 28 E4 //apos = [G1] cpos',
    CobID: 'RW=?',
    FrameData: '080010E49E10100228E4',
    type: 'Normal',
    AxisID: 1,
    CS: 'E49E',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0228 = [G1] 0x029E',
    Interpretation: ' APOS = [G1] CPOS -- [V32D, V32S]',
    errorStatus: '-'
  },
  {
    msgNr: 352,
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
    msgNr: 353,
    OriginalMessage: '08 00 10 BB B7 05 80 03 67 79 //[88] homing_nr = var_i2',
    CobID: 'RW=?',
    FrameData: '080010BBB70580036779',
    type: 'Normal',
    AxisID: 1,
    CS: 'BBB7',
    Object: '-',
    ObjectName: '-',
    Data: '[88] 0x09B7 = 0x0367',
    Interpretation: '[88] HOMING_NR = VAR_I2 -- [V16D, V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 354,
    OriginalMessage: '08 00 10 BB B7 05 80 02 34 45 //[88] homing_nr = id',
    CobID: 'RW=?',
    FrameData: '080010BBB70580023445',
    type: 'Normal',
    AxisID: 1,
    CS: 'BBB7',
    Object: '-',
    ObjectName: '-',
    Data: '[88] 0x09B7 = 0x0234',
    Interpretation: '[88] HOMING_NR = ID -- [V16D, V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 355,
    OriginalMessage: '08 00 10 E1 67 00 F0 03 66 B9  //var_i1 = [15] var_i2',
    CobID: 'RW=?',
    FrameData: '080010E16700F00366B9',
    type: 'Normal',
    AxisID: 1,
    CS: 'E167',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0366 = [15] 0x0367',
    Interpretation: ' VAR_I1 = [15] VAR_I2 -- [V16D, V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 356,
    OriginalMessage: '06 00 10 09 40 03 66 C8 //addgrid var_i1',
    CobID: 'RW=?',
    FrameData: '06001009400366C8',
    type: 'Normal',
    AxisID: 1,
    CS: '0940',
    Object: '-',
    ObjectName: '-',
    Data: 'ADDGRID 0x0366',
    Interpretation: 'Add Group ID  VAR_I1 [V16]',
    errorStatus: '-'
  },
  {
    msgNr: 357,
    OriginalMessage: '06 00 10 08 40 00 10 6E //addgrid (5)',
    CobID: 'RW=?',
    FrameData: '060010084000106E',
    type: 'Normal',
    AxisID: 1,
    CS: '0840',
    Object: '-',
    ObjectName: '-',
    Data: 'ADDGRID(5)',
    Interpretation: 'Add Group ID = 5',
    errorStatus: '-'
  },
  {
    msgNr: 358,
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
    msgNr: 359,
    OriginalMessage: '06 00 10 08 01 00 05 24 //axisid 5',
    CobID: 'RW=?',
    FrameData: '0600100801000524',
    type: 'Normal',
    AxisID: 1,
    CS: '0801',
    Object: '-',
    ObjectName: '-',
    Data: 'AxisID  5d ',
    Interpretation: 'AXIS ID 5d',
    errorStatus: '-'
  },
  {
    msgNr: 360,
    OriginalMessage: '06 00 10 09 01 03 66 89 //axisid var_i1',
    CobID: 'RW=?',
    FrameData: '0600100901036689',
    type: 'Normal',
    AxisID: 1,
    CS: '0901',
    Object: '-',
    ObjectName: '-',
    Data: 'AxisID  0x0366 ',
    Interpretation: 'AXIS ID VAR_I1',
    errorStatus: '-'
  },
  {
    msgNr: 361,
    OriginalMessage: '06 00 10 08 01 00 37 56 //axisid (55',
    CobID: 'RW=?',
    FrameData: '0600100801003756',
    type: 'Normal',
    AxisID: 1,
    CS: '0801',
    Object: '-',
    ObjectName: '-',
    Data: 'AxisID  55d ',
    Interpretation: 'AXIS ID 55d',
    errorStatus: '-'
  },
  {
    msgNr: 362,
    OriginalMessage: '06 00 10 09 01 03 66 89 //axisid var_i1',
    CobID: 'RW=?',
    FrameData: '0600100901036689',
    type: 'Normal',
    AxisID: 1,
    CS: '0901',
    Object: '-',
    ObjectName: '-',
    Data: 'AxisID  0x0366 ',
    Interpretation: 'AXIS ID VAR_I1',
    errorStatus: '-'
  },
  {
    msgNr: 363,
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
    msgNr: 364,
    OriginalMessage: '06 00 10 08 80 00 01 9F //remgrid (0x1)',
    CobID: 'RW=?',
    FrameData: '060010088000019F',
    type: 'Normal',
    AxisID: 1,
    CS: '0880',
    Object: '-',
    ObjectName: '-',
    Data: 'REMGRID(1)',
    Interpretation: 'Remove Group ID = 1',
    errorStatus: '-'
  },
  {
    msgNr: 365,
    OriginalMessage: '06 00 10 09 80 03 66 08 //remgrid var_i1',
    CobID: 'RW=?',
    FrameData: '0600100980036608',
    type: 'Normal',
    AxisID: 1,
    CS: '0980',
    Object: '-',
    ObjectName: '-',
    Data: 'REMGRID 0x0366',
    Interpretation: 'Remove Group ID  VAR_I1 [V16]',
    errorStatus: '-'
  },
  {
    msgNr: 366,
    OriginalMessage: '06 00 10 08 80 00 40 DE //remgrid (0x7)',
    CobID: 'RW=?',
    FrameData: '06001008800040DE',
    type: 'Normal',
    AxisID: 1,
    CS: '0880',
    Object: '-',
    ObjectName: '-',
    Data: 'REMGRID(7)',
    Interpretation: 'Remove Group ID = 7',
    errorStatus: '-'
  },
  {
    msgNr: 367,
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
    msgNr: 368,
    OriginalMessage: '04 00 10 01 02 17  //axison',
    CobID: 'RW=?',
    FrameData: '040010010217',
    type: 'Normal',
    AxisID: 1,
    CS: '0102',
    Object: '-',
    ObjectName: '-',
    Data: 'AXISON',
    Interpretation: 'AXIS is ON (deactivate control)',
    errorStatus: '-'
  },
  {
    msgNr: 369,
    OriginalMessage: '08 00 10 94 00 10 40 01 02 FF  //[G3] {axison;}',
    CobID: 'RW=?',
    FrameData: '080010940010400102FF',
    type: 'Normal',
    AxisID: 1,
    CS: '9400',
    Object: '-',
    ObjectName: '-',
    Data: '[G3]{AXISON;}',
    Interpretation: '[G3] {AXIS is ON (deactivate control);}',
    errorStatus: '-'
  },
  {
    msgNr: 370,
    OriginalMessage: '06 00 10 29 66 03 67 0F  //var_i1= var_i2;',
    CobID: 'RW=?',
    FrameData: '060010296603670F',
    type: 'Normal',
    AxisID: 1,
    CS: '2966',
    Object: '-',
    ObjectName: '-',
    Data: ' 0x0366 = 0x0367',
    Interpretation: ' VAR_I1 = VAR_I2 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 371,
    OriginalMessage: '0A 00 10 94 01 10 40 29 66 03 67 F8  //[G3] {var_i1= var_i2;}',
    CobID: 'RW=?',
    FrameData: '0A00109401104029660367F8',
    type: 'Normal',
    AxisID: 1,
    CS: '9401',
    Object: '-',
    ObjectName: '-',
    Data: '[G3]{ 0x0366 = 0x0367;}',
    Interpretation:
      '[G3] { VAR_I1 = VAR_I2 -- [V16D = V16S /V32S(H)/V32S(L) || V32D(H)/V32D(L) = V16S];}',
    errorStatus: '-'
  },
  {
    msgNr: 372,
    OriginalMessage: '08 00 10 59 09 FF FF 20 00 98  //CPA',
    CobID: 'RW=?',
    FrameData: '0800105909FFFF200098',
    type: 'Normal',
    AxisID: 1,
    CS: '5909',
    Object: '-',
    ObjectName: '-',
    Data: 'CPA',
    Interpretation: 'Command Position is Absolute',
    errorStatus: '-'
  },
  {
    msgNr: 373,
    OriginalMessage: '0C 00 10 94 02 10 40 59 09 FF FF 20 00 82  //[G3] {CPA;}',
    CobID: 'RW=?',
    FrameData: '0C0010940210405909FFFF200082',
    type: 'Normal',
    AxisID: 1,
    CS: '9402',
    Object: '-',
    ObjectName: '-',
    Data: '[G3]{CPA;}',
    Interpretation: '[G3] {Command Position is Absolute;}',
    errorStatus: '-'
  },
  {
    msgNr: 374,
    OriginalMessage: '0A 00 10 94 01 10 40 89 25 02 28 D7 //[G3] {APOS <<=5;}',
    CobID: 'RW=?',
    FrameData: '0A00109401104089250228D7',
    type: 'Normal',
    AxisID: 1,
    CS: '9401',
    Object: '-',
    ObjectName: '-',
    Data: '[G3]{0228  <<= 5 ;}',
    Interpretation: '[G3] {APOS<<= 5 [32D] ;}',
    errorStatus: '-'
  },
  {
    msgNr: 375,
    OriginalMessage: '0C 00 11 B4 05 00 10 02 28 5A 5B AB BA 2A //TakeData 32V ?apos',
    CobID: 'RW=?',
    FrameData: '0C0011B405001002285A5BABBA2A',
    type: 'TakeData',
    AxisID: 'H1',
    CS: 'B405',
    Object: 1,
    ObjectName: '-',
    Data: '0x0228 == ABBA5A5B ,DM  ',
    Interpretation: 'APOS == ABBA5A5B == 1515913768d ,DM [V32]',
    errorStatus: '-'
  },
  {
    msgNr: 376,
    OriginalMessage: '08 00 30 B0 04 00 21 03 67 77 //?var_i2',
    CobID: 'RW=?',
    FrameData: '080030B0040021036777',
    type: 'GiveData',
    AxisID: 3,
    CS: 'B004',
    Object: 'H2',
    ObjectName: '-',
    Data: '?0x0367 | DM  ',
    Interpretation: '?VAR_I2 | DM [?V16]',
    errorStatus: '-'
  },
  {
    msgNr: 377,
    OriginalMessage: '08 00 30 B0 05 00 21 02 28 38 //?apos',
    CobID: 'RW=?',
    FrameData: '080030B0050021022838',
    type: 'GiveData',
    AxisID: 3,
    CS: 'B005',
    Object: 'H2',
    ObjectName: '-',
    Data: '?0x0228 | DM  ',
    Interpretation: '?APOS | DM [?V32]',
    errorStatus: '-'
  },
  {
    msgNr: 378,
    OriginalMessage: '0A 00 21 B4 04 00 30 03 67 56 78 4B //var_i2 == 5678',
    CobID: 'RW=?',
    FrameData: '0A0021B4040030036756784B',
    type: 'TakeData',
    AxisID: 'H2',
    CS: 'B404',
    Object: 3,
    ObjectName: '-',
    Data: '0x0367 == 0x5678 ,DM  ',
    Interpretation: 'VAR_I2 == 0x5678 == 22136d ,DM [V16]',
    errorStatus: '-'
  },
  {
    msgNr: 379,
    OriginalMessage: '0C 00 21 B4 05 00 30 02 28 56 78 12 34 54 //apos == 12345678',
    CobID: 'RW=?',
    FrameData: '0C0021B405003002285678123454',
    type: 'TakeData',
    AxisID: 'H2',
    CS: 'B405',
    Object: 3,
    ObjectName: '-',
    Data: '0x0228 == 12345678 ,DM  ',
    Interpretation: 'APOS == 12345678 == 1450705448d ,DM [V32]',
    errorStatus: '-'
  },
  {
    msgNr: 380,
    OriginalMessage: '08 00 30 B2 04 00 21 09 B7 CF //?? homing_nr ',
    CobID: 'RW=?',
    FrameData: '080030B204002109B7CF',
    type: 'GiveData2',
    AxisID: 3,
    CS: 'B204',
    Object: 'H2',
    ObjectName: '-',
    Data: '??0x09B7 ,DM  ',
    Interpretation: '??HOMING_NR ,DM [V16]',
    errorStatus: '-'
  },
  {
    msgNr: 381,
    OriginalMessage: '08 00 30 B2 05 00 21 02 A0 B2 //??CSPD',
    CobID: 'RW=?',
    FrameData: '080030B205002102A0B2',
    type: 'GiveData2',
    AxisID: 3,
    CS: 'B205',
    Object: 'H2',
    ObjectName: '-',
    Data: '??0x02A0 ,DM  ',
    Interpretation: '??CSPD ,DM [V32]',
    errorStatus: '-'
  },
  {
    msgNr: 382,
    OriginalMessage: '4F ',
    CobID: 'RW=?',
    FrameData: '4F',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'OK',
    Interpretation: 'OK',
    errorStatus: '-'
  },
  {
    msgNr: 383,
    OriginalMessage: '08 00 21 D4 03 09 B7 56 78 8E  //??homing_nr == 5678',
    CobID: 'RW=?',
    FrameData: '080021D40309B756788E',
    type: 'TakeData2',
    AxisID: 'H2',
    CS: 'D403',
    Object: 3,
    ObjectName: '-',
    Data: '0x09B7 == 0x5678 ',
    Interpretation: 'HOMING_NR == 0x5678 == 22136d [V16]',
    errorStatus: '-'
  },
  {
    msgNr: 384,
    OriginalMessage: '4F ',
    CobID: 'RW=?',
    FrameData: '4F',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'OK',
    Interpretation: 'OK',
    errorStatus: '-'
  },
  {
    msgNr: 385,
    OriginalMessage: '0A 00 21 D5 03 02 A0 56 78 12 34 B9 //??CSPD == 12345678',
    CobID: 'RW=?',
    FrameData: '0A0021D50302A056781234B9',
    type: 'TakeData2',
    AxisID: 'H2',
    CS: 'D503',
    Object: 3,
    ObjectName: '-',
    Data: '0x02A0 == 0x12345678 ',
    Interpretation: 'CSPD == 0x12345678 == 305419896d [V32]',
    errorStatus: '-'
  },
  {
    msgNr: 386,
    OriginalMessage: '08 00 10 B0 04 00 11 03 66 46 //GiveData ?var_i1',
    CobID: 'RW=?',
    FrameData: '080010B0040011036646',
    type: 'GiveData',
    AxisID: 1,
    CS: 'B004',
    Object: 'H1',
    ObjectName: '-',
    Data: '?0x0366 | DM  ',
    Interpretation: '?VAR_I1 | DM [?V16]',
    errorStatus: '-'
  },
  {
    msgNr: 387,
    OriginalMessage: '4F ',
    CobID: 'RW=?',
    FrameData: '4F',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'OK',
    Interpretation: 'OK',
    errorStatus: '-'
  },
  {
    msgNr: 388,
    OriginalMessage: '0A 00 11 B4 04 00 10 03 66 5A 5B 01 // TakeData ?var_i1',
    CobID: 'RW=?',
    FrameData: '0A0011B404001003665A5B01',
    type: 'TakeData',
    AxisID: 'H1',
    CS: 'B404',
    Object: 1,
    ObjectName: '-',
    Data: '0x0366 == 0x5A5B ,DM  ',
    Interpretation: 'VAR_I1 == 0x5A5B == 23131d ,DM [V16]',
    errorStatus: '-'
  },
  {
    msgNr: 389,
    OriginalMessage: '08 00 10 B0 05 00 11 02 28 08 //?apos',
    CobID: 'RW=?',
    FrameData: '080010B0050011022808',
    type: 'GiveData',
    AxisID: 1,
    CS: 'B005',
    Object: 'H1',
    ObjectName: '-',
    Data: '?0x0228 | DM  ',
    Interpretation: '?APOS | DM [?V32]',
    errorStatus: '-'
  },
  {
    msgNr: 390,
    OriginalMessage: '4F ',
    CobID: 'RW=?',
    FrameData: '4F',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'OK',
    Interpretation: 'OK',
    errorStatus: '-'
  },
  {
    msgNr: 391,
    OriginalMessage: '0A 00 20 9D 08 0F F0 03 66 03 67 A1 ',
    CobID: 'RW=?',
    FrameData: '0A00209D080FF003660367A1',
    type: 'Normal',
    AxisID: 2,
    CS: '9D08',
    Object: '-',
    ObjectName: '-',
    Data: '0x0367 = [255] (0x0366+), SPI ',
    Interpretation: ' VAR_I2 = [255] (VAR_I1+),SPI  [V16D, V16S]',
    errorStatus: '-'
  },
  {
    msgNr: 392,
    OriginalMessage: '06 00 20 A1 66 00 21 4E //?TML var_i1',
    CobID: 'RW=?',
    FrameData: '060020A16600214E',
    type: 'Normal',
    AxisID: 2,
    CS: 'A166',
    Object: 'H2',
    ObjectName: '-',
    Data: '?TML  0x0366  ',
    Interpretation: '?TML VAR_I1   -- [?TML V16]',
    errorStatus: '-'
  },
  {
    msgNr: 393,
    OriginalMessage: '06 00 20 A5 68 00 21 54 //?TML VAr_lf',
    CobID: 'RW=?',
    FrameData: '060020A568002154',
    type: 'Normal',
    AxisID: 2,
    CS: 'A568',
    Object: 'H2',
    ObjectName: '-',
    Data: '?TML  0x0368  ',
    Interpretation: '?TML VAR_LF   -- [?TML V32]',
    errorStatus: '-'
  },
  {
    msgNr: 394,
    OriginalMessage: '08 00 21 A9 66 00 20 12 34 9E // TML var_i1 ==0x1234',
    CobID: 'RW=?',
    FrameData: '080021A966002012349E',
    type: 'Normal',
    AxisID: 'H2',
    CS: 'A966',
    Object: 2,
    ObjectName: '-',
    Data: '?TML  0x0366  =  0x1234',
    Interpretation: '?TML VAR_I1  =  0x1234 = 4660d -- [?TML V16 TakeData]',
    errorStatus: '-'
  },
  {
    msgNr: 395,
    OriginalMessage: '0A 00 21 AD 68 00 20 56 78 12 34 74 // TML var_lf ==0x12345678',
    CobID: 'RW=?',
    FrameData: '0A0021AD6800205678123474',
    type: 'Normal',
    AxisID: 'H2',
    CS: 'AD68',
    Object: 2,
    ObjectName: '-',
    Data: '?TML  0x0368  =  0x12345678',
    Interpretation: '?TML VAR_LF  =  0x12345678 = 305419896d -- [?TML V32 TakeData]',
    errorStatus: '-'
  },
  {
    msgNr: 396,
    OriginalMessage: '06 00 10 D8 01 00 11 00 //GETVER',
    CobID: 'RW=?',
    FrameData: '060010D801001100',
    type: 'Normal',
    AxisID: 1,
    CS: 'D801',
    Object: 'H1',
    ObjectName: '-',
    Data: 'GETVAR',
    Interpretation: 'Get version. On-line cmd. ',
    errorStatus: '-'
  },
  {
    msgNr: 397,
    OriginalMessage: '08 00 11 D8 01 34 4B 35 31  D7 //GETVER = F514K',
    CobID: 'RW=?',
    FrameData: '080011D801344B3531D7',
    type: 'Normal',
    AxisID: 'H1',
    CS: 'D801',
    Object: '-',
    ObjectName: '-',
    Data: 'GetVAR response:  F4K51',
    Interpretation: 'Get version. On-line cmd. ',
    errorStatus: '-'
  },
  {
    msgNr: 398,
    OriginalMessage: '08 00 20 D6 00 00 21 00 01 20 //PING 0x1',
    CobID: 'RW=?',
    FrameData: '080020D6000021000120',
    type: 'Normal',
    AxisID: 2,
    CS: 'D600',
    Object: 'H2',
    ObjectName: '-',
    Data: 'PING 1d',
    Interpretation: 'PING - Ask a group of axes to return their axis ID ',
    errorStatus: '-'
  },
  {
    msgNr: 399,
    OriginalMessage: '08 00 20 D6 00 00 21 00 55 74 //PING 0x55',
    CobID: 'RW=?',
    FrameData: '080020D6000021005574',
    type: 'Normal',
    AxisID: 2,
    CS: 'D600',
    Object: 'H2',
    ObjectName: '-',
    Data: 'PING 85d',
    Interpretation: 'PING - Ask a group of axes to return their axis ID ',
    errorStatus: '-'
  },
  {
    msgNr: 400,
    OriginalMessage: '04 00 20 00 01 25 //end',
    CobID: 'RW=?',
    FrameData: '040020000125',
    type: 'Normal',
    AxisID: 2,
    CS: '0001',
    Object: '-',
    ObjectName: '-',
    Data: 'END',
    Interpretation: 'END of a TML program',
    errorStatus: '-'
  },
  {
    msgNr: 401,
    OriginalMessage: '04 00 20 95 00 B9 //ENEEPROM',
    CobID: 'RW=?',
    FrameData: '0400209500B9',
    type: 'Normal',
    AxisID: 2,
    CS: '9500',
    Object: '-',
    ObjectName: '-',
    Data: 'ENEEPROM',
    Interpretation: 'Enable EEPROM ',
    errorStatus: '-'
  },
  {
    msgNr: 402,
    OriginalMessage: '04 00 20 00 00 24 //nop',
    CobID: 'RW=?',
    FrameData: '040020000024',
    type: 'Normal',
    AxisID: 2,
    CS: '0000',
    Object: '-',
    ObjectName: '-',
    Data: 'NOP',
    Interpretation: 'No Operation',
    errorStatus: '-'
  },
  {
    msgNr: 403,
    OriginalMessage: '06 00 20 09 20 03 66 B8 //scibr VAR_I1',
    CobID: 'RW=?',
    FrameData: '06002009200366B8',
    type: 'Normal',
    AxisID: 2,
    CS: '0920',
    Object: '-',
    ObjectName: '-',
    Data: 'SCIBR 0x0366',
    Interpretation: 'Set SCI Baud Rate VAR_I1 [V16]',
    errorStatus: '-'
  },
  {
    msgNr: 404,
    OriginalMessage: '06 00 20 08 20 00 12 60 //scibr 0x12',
    CobID: 'RW=?',
    FrameData: '0600200820001260',
    type: 'Normal',
    AxisID: 2,
    CS: '0820',
    Object: '-',
    ObjectName: '-',
    Data: 'SCIBR 0x0012',
    Interpretation: 'Set SCI Baud Rate 0x0012 = 18d [val16]',
    errorStatus: '-'
  },
  {
    msgNr: 405,
    OriginalMessage: '06 00 20 09 10 03 66 A8 //SPIBR var_i1',
    CobID: 'RW=?',
    FrameData: '06002009100366A8',
    type: 'Normal',
    AxisID: 2,
    CS: '0910',
    Object: '-',
    ObjectName: '-',
    Data: 'SPIBR 0x0366',
    Interpretation: 'Set SPI Baud Rate VAR_I1 [V16]',
    errorStatus: '-'
  },
  {
    msgNr: 406,
    OriginalMessage: '06 00 20 08 10 00 12 50 //SPIBR 0x12',
    CobID: 'RW=?',
    FrameData: '0600200810001250',
    type: 'Normal',
    AxisID: 2,
    CS: '0810',
    Object: '-',
    ObjectName: '-',
    Data: 'SPIBR 0x0012',
    Interpretation: 'Set SPI Baud Rate 0x0012 = 18d [val16]',
    errorStatus: '-'
  },
  {
    msgNr: 407,
    OriginalMessage: '06 00 20 08 04 00 12 44 //CANBR 0x12',
    CobID: 'RW=?',
    FrameData: '0600200804001244',
    type: 'Normal',
    AxisID: 2,
    CS: '0804',
    Object: '-',
    ObjectName: '-',
    Data: 'CANBR 0x0012',
    Interpretation: 'Set CAN Baud Rate 0x0012 = 18d [val16]',
    errorStatus: '-'
  },
  {
    msgNr: 408,
    OriginalMessage: '08 00 20 D8 C0 03 66 03 67 93 //INITCAM var_i1, var_i2',
    CobID: 'RW=?',
    FrameData: '080020D8C00366036793',
    type: 'Normal',
    AxisID: 2,
    CS: 'D8C0',
    Object: '-',
    ObjectName: '-',
    Data: 'INITCAM 0x0366, 0x0367 ',
    Interpretation: 'Copy CAM table from SPI VAR_I1 to RAM VAR_I2  -- [&V16, &V16]',
    errorStatus: '-'
  },
  {
    msgNr: 409,
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
    msgNr: 410,
    OriginalMessage: '19:27:59 Bytes Write :  04 00 10 96 00 AA',
    CobID: 'Write',
    FrameData: '0400109600AA',
    type: 'Normal',
    AxisID: 1,
    CS: '9600',
    Object: '-',
    ObjectName: '-',
    Data: 'LOCKEEPROM 0',
    Interpretation: 'Write protect/unprotect EEPROM 0',
    errorStatus: '-'
  },
  {
    msgNr: 411,
    OriginalMessage: '19:27:59 Bytes Read :  4F',
    CobID: 'Read',
    FrameData: '4F',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'OK',
    Interpretation: 'OK',
    errorStatus: '-'
  },
  {
    msgNr: 412,
    OriginalMessage: '19:28:01 Bytes Write :  04 00 10 96 01 AB',
    CobID: 'Write',
    FrameData: '0400109601AB',
    type: 'Normal',
    AxisID: 1,
    CS: '9601',
    Object: '-',
    ObjectName: '-',
    Data: 'LOCKEEPROM 1',
    Interpretation: 'Write protect/unprotect EEPROM 1',
    errorStatus: '-'
  },
  {
    msgNr: 413,
    OriginalMessage: '19:28:01 Bytes Read :  4F',
    CobID: 'Read',
    FrameData: '4F',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'OK',
    Interpretation: 'OK',
    errorStatus: '-'
  },
  {
    msgNr: 414,
    OriginalMessage: '19:28:02 Bytes Write :  04 00 10 96 02 AC',
    CobID: 'Write',
    FrameData: '0400109602AC',
    type: 'Normal',
    AxisID: 1,
    CS: '9602',
    Object: '-',
    ObjectName: '-',
    Data: 'LOCKEEPROM 2',
    Interpretation: 'Write protect/unprotect EEPROM 2',
    errorStatus: '-'
  },
  {
    msgNr: 415,
    OriginalMessage: '19:28:02 Bytes Read :  4F',
    CobID: 'Read',
    FrameData: '4F',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'OK',
    Interpretation: 'OK',
    errorStatus: '-'
  },
  {
    msgNr: 416,
    OriginalMessage: '19:28:03 Bytes Write :  04 00 10 96 03 AD',
    CobID: 'Write',
    FrameData: '0400109603AD',
    type: 'Normal',
    AxisID: 1,
    CS: '9603',
    Object: '-',
    ObjectName: '-',
    Data: 'LOCKEEPROM 3',
    Interpretation: 'Write protect/unprotect EEPROM 3',
    errorStatus: '-'
  },
  {
    msgNr: 417,
    OriginalMessage: '19:28:03 Bytes Read :  4F',
    CobID: 'Read',
    FrameData: '4F',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'OK',
    Interpretation: 'OK',
    errorStatus: '-'
  },
  {
    msgNr: 418,
    OriginalMessage: '19:15:09 Bytes Write :  0A 00 10 DB 10 03 66 50 00 50 07 15',
    CobID: 'Write',
    FrameData: '0A0010DB1003665000500715',
    type: 'Normal',
    AxisID: 1,
    CS: 'DB10',
    Object: '-',
    ObjectName: '-',
    Data: 'CHECKSUM, PM 0x5000, 0x5007, 0x0366',
    Interpretation: 'CHECKSUM, PM 0x5000, 0x5007, VAR_I1 ',
    errorStatus: '-'
  },
  {
    msgNr: 419,
    OriginalMessage: '19:15:09 Bytes Read :  4F',
    CobID: 'Read',
    FrameData: '4F',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'OK',
    Interpretation: 'OK',
    errorStatus: '-'
  },
  {
    msgNr: 420,
    OriginalMessage: '19:15:14 Bytes Write :  0A 00 10 DB 30 03 66 50 00 50 07 35',
    CobID: 'Write',
    FrameData: '0A0010DB3003665000500735',
    type: 'Normal',
    AxisID: 1,
    CS: 'DB30',
    Object: '-',
    ObjectName: '-',
    Data: 'CHECKSUM, DM 0x5000, 0x5007, 0x0366',
    Interpretation: 'CHECKSUM, DM 0x5000, 0x5007, VAR_I1 ',
    errorStatus: '-'
  },
  {
    msgNr: 421,
    OriginalMessage: '19:15:14 Bytes Read :  4F',
    CobID: 'Read',
    FrameData: '4F',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'OK',
    Interpretation: 'OK',
    errorStatus: '-'
  },
  {
    msgNr: 422,
    OriginalMessage: '19:15:25 Bytes Write :  0A 00 10 DB 50 03 66 50 00 50 07 55',
    CobID: 'Write',
    FrameData: '0A0010DB5003665000500755',
    type: 'Normal',
    AxisID: 1,
    CS: 'DB50',
    Object: '-',
    ObjectName: '-',
    Data: 'CHECKSUM, SPI 0x5000, 0x5007, 0x0366',
    Interpretation: 'CHECKSUM, SPI 0x5000, 0x5007, VAR_I1 ',
    errorStatus: '-'
  },
  {
    msgNr: 423,
    OriginalMessage: '19:15:25 Bytes Read :  4F',
    CobID: 'Read',
    FrameData: '4F',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'OK',
    Interpretation: 'OK',
    errorStatus: '-'
  },
  {
    msgNr: 424,
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
    msgNr: 425,
    OriginalMessage: '19:08:31 Bytes Write :  0A 00 10 DB 50 03 66 50 00 50 07 55',
    CobID: 'Write',
    FrameData: '0A0010DB5003665000500755',
    type: 'Normal',
    AxisID: 1,
    CS: 'DB50',
    Object: '-',
    ObjectName: '-',
    Data: 'CHECKSUM, SPI 0x5000, 0x5007, 0x0366',
    Interpretation: 'CHECKSUM, SPI 0x5000, 0x5007, VAR_I1 ',
    errorStatus: '-'
  },
  {
    msgNr: 426,
    OriginalMessage: '19:08:31 Bytes Read :  4F',
    CobID: 'Read',
    FrameData: '4F',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'OK',
    Interpretation: 'OK',
    errorStatus: '-'
  },
  {
    msgNr: 427,
    OriginalMessage: '19:08:56 Bytes Write :  08 00 10 B0 04 00 11 03 66 46',
    CobID: 'Write',
    FrameData: '080010B0040011036646',
    type: 'GiveData',
    AxisID: 1,
    CS: 'B004',
    Object: 'H1',
    ObjectName: '-',
    Data: '?0x0366 | DM  ',
    Interpretation: '?VAR_I1 | DM [?V16]',
    errorStatus: '-'
  },
  {
    msgNr: 428,
    OriginalMessage: '19:08:56 Bytes Read :  4F',
    CobID: 'Read',
    FrameData: '4F',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'OK',
    Interpretation: 'OK',
    errorStatus: '-'
  },
  {
    msgNr: 429,
    OriginalMessage: '19:08:56 Bytes Read :  0A',
    CobID: 'Read',
    FrameData: '0A',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'Length',
    Interpretation: 'Next message = 10 bytes',
    errorStatus: '-'
  },
  {
    msgNr: 430,
    OriginalMessage: '19:08:56 Bytes Read :  00 11 B4 04 00 10 03 66 F5 68 A9',
    CobID: 'Read',
    FrameData: '0011B40400100366F568A9',
    type: 'TakeData',
    AxisID: 'H1',
    CS: 'B404',
    Object: 1,
    ObjectName: '-',
    Data: '0x0366 == 0xF568 ,DM  ',
    Interpretation: 'VAR_I1 == 0xF568 == -2712d ,DM [V16]',
    errorStatus: '-'
  },
  {
    msgNr: 431,
    OriginalMessage: '08 00 10 90 A4 03 66 00 12 C7',
    CobID: 'RW=?',
    FrameData: '08001090A403660012C7',
    type: 'Normal',
    AxisID: 1,
    CS: '90A4',
    Object: '-',
    ObjectName: '-',
    Data: '(0x0366), DM = 0x0012',
    Interpretation: '(VAR_I1), DM = 0012 (18) ',
    errorStatus: '-'
  },
  {
    msgNr: 432,
    OriginalMessage: '18:14:16 Bytes Write :  08 10 00 D6 00 00 11 07 D0 D6',
    CobID: 'Write',
    FrameData: '081000D600001107D0D6',
    type: 'Normal',
    AxisID: 'All',
    CS: 'D600',
    Object: 'H1',
    ObjectName: '-',
    Data: 'PING 2000d',
    Interpretation: 'PING - Ask a group of axes to return their axis ID ',
    errorStatus: '-'
  },
  {
    msgNr: 433,
    OriginalMessage: '18:14:16 Bytes Read :  4F',
    CobID: 'Read',
    FrameData: '4F',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'OK',
    Interpretation: 'OK',
    errorStatus: '-'
  },
  {
    msgNr: 434,
    OriginalMessage: '18:14:16 Bytes Read :  08',
    CobID: 'Read',
    FrameData: '08',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'Length',
    Interpretation: 'Next message = 8 bytes',
    errorStatus: '-'
  },
  {
    msgNr: 435,
    OriginalMessage: '18:14:16 Bytes Read :  00 11 D6 01 35 31 34 4C D6',
    CobID: 'Read',
    FrameData: '0011D6013531344CD6',
    type: 'Normal',
    AxisID: 'H1',
    CS: 'D601',
    Object: 1,
    ObjectName: '-',
    Data: 'PONG: F514L',
    Interpretation: '-',
    errorStatus: '-'
  },
  {
    msgNr: 436,
    OriginalMessage: '18:14:16 Bytes Read :  08',
    CobID: 'Read',
    FrameData: '08',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'Length',
    Interpretation: 'Next message = 8 bytes',
    errorStatus: '-'
  },
  {
    msgNr: 437,
    OriginalMessage: '18:14:16 Bytes Read :  00 11 D6 02 35 30 39 4E DD',
    CobID: 'Read',
    FrameData: '0011D6023530394EDD',
    type: 'Normal',
    AxisID: 'H1',
    CS: 'D602',
    Object: 2,
    ObjectName: '-',
    Data: 'PONG: F509N',
    Interpretation: '-',
    errorStatus: '-'
  },
  {
    msgNr: 438,
    OriginalMessage: '08 00 10 C9 63 02 28 03 67 D8 DD',
    CobID: 'RW=?',
    FrameData: '080010C96302280367D8DD',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: "MsgLength = 10 which don't match fist byte 8 or history length 8 ",
    Interpretation: 'Message length doesn`t match',
    errorStatus: 'error'
  },
  {
    msgNr: 439,
    OriginalMessage: '08 00 00 B0 00 00 01 00 00 B9',
    CobID: 'RW=?',
    FrameData: '080000B00000010000B9',
    type: 'GiveData',
    AxisID: '0',
    CS: 'B000',
    Object: 'H0',
    ObjectName: '-',
    Data: '?0x0000 | PM  ',
    Interpretation: '?0x0000 | PM [?V16]',
    errorStatus: '-'
  },
  {
    msgNr: 440,
    OriginalMessage: '17:29:47 Bytes Write :  04 00 10 04 02 1A',
    CobID: 'Write',
    FrameData: '04001004021A',
    type: 'Normal',
    AxisID: 1,
    CS: '0402',
    Object: '-',
    ObjectName: '-',
    Data: 'RESET',
    Interpretation: 'Reset DSP controller',
    errorStatus: '-'
  },
  {
    msgNr: 441,
    OriginalMessage: '17:29:47 Bytes Read :  4F',
    CobID: 'Read',
    FrameData: '4F',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'OK',
    Interpretation: 'OK',
    errorStatus: '-'
  },
  {
    msgNr: 442,
    OriginalMessage: '17:29:47 Bytes Write :  FF',
    CobID: 'Write',
    FrameData: 'FF',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'SYNC',
    errorStatus: '-'
  },
  {
    msgNr: 443,
    OriginalMessage: '17:29:47 Bytes Read :  0D',
    CobID: 'Read',
    FrameData: '0D',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'SYNC response',
    errorStatus: '-'
  },
  {
    msgNr: 444,
    OriginalMessage: '17:29:47 Bytes Write :  FF',
    CobID: 'Write',
    FrameData: 'FF',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'SYNC',
    errorStatus: '-'
  },
  {
    msgNr: 445,
    OriginalMessage: '17:29:47 Bytes Read :  0D',
    CobID: 'Read',
    FrameData: '0D',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'SYNC response',
    errorStatus: '-'
  },
  {
    msgNr: 446,
    OriginalMessage: '17:29:47 Bytes Write :  06 00 10 D8 01 00 11 00',
    CobID: 'Write',
    FrameData: '060010D801001100',
    type: 'Normal',
    AxisID: 1,
    CS: 'D801',
    Object: 'H1',
    ObjectName: '-',
    Data: 'GETVAR',
    Interpretation: 'Get version. On-line cmd. ',
    errorStatus: '-'
  },
  {
    msgNr: 447,
    OriginalMessage: '17:29:47 Bytes Read :  4F',
    CobID: 'Read',
    FrameData: '4F',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'OK',
    Interpretation: 'OK',
    errorStatus: '-'
  },
  {
    msgNr: 448,
    OriginalMessage: '17:29:47 Bytes Read :  08',
    CobID: 'Read',
    FrameData: '08',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'Length',
    Interpretation: 'Next message = 8 bytes',
    errorStatus: '-'
  },
  {
    msgNr: 449,
    OriginalMessage: '17:29:47 Bytes Read :  00 11 D8 01 35 31 34 4C D8',
    CobID: 'Read',
    FrameData: '0011D8013531344CD8',
    type: 'Normal',
    AxisID: 'H1',
    CS: 'D801',
    Object: '-',
    ObjectName: '-',
    Data: 'GetVAR response:  F514L',
    Interpretation: 'Get version. On-line cmd. ',
    errorStatus: '-'
  },
  {
    msgNr: 450,
    OriginalMessage: '17:29:47 Bytes Write :  06 00 10 08 20 00 04 42',
    CobID: 'Write',
    FrameData: '0600100820000442',
    type: 'Normal',
    AxisID: 1,
    CS: '0820',
    Object: '-',
    ObjectName: '-',
    Data: 'SCIBR 0x0004',
    Interpretation: 'Set SCI Baud Rate 0x0004 = 4d [val16]',
    errorStatus: '-'
  },
  {
    msgNr: 451,
    OriginalMessage: '17:29:47 Bytes Read :  4F',
    CobID: 'Read',
    FrameData: '4F',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'OK',
    Interpretation: 'OK',
    errorStatus: '-'
  },
  {
    msgNr: 452,
    OriginalMessage: '17:29:47 Bytes Write :  06 00 10 D8 01 00 11 00',
    CobID: 'Write',
    FrameData: '060010D801001100',
    type: 'Normal',
    AxisID: 1,
    CS: 'D801',
    Object: 'H1',
    ObjectName: '-',
    Data: 'GETVAR',
    Interpretation: 'Get version. On-line cmd. ',
    errorStatus: '-'
  },
  {
    msgNr: 453,
    OriginalMessage: '17:29:47 Bytes Read :  4F',
    CobID: 'Read',
    FrameData: '4F',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'OK',
    Interpretation: 'OK',
    errorStatus: '-'
  },
  {
    msgNr: 454,
    OriginalMessage: '17:29:47 Bytes Read :  08',
    CobID: 'Read',
    FrameData: '08',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'Length',
    Interpretation: 'Next message = 8 bytes',
    errorStatus: '-'
  },
  {
    msgNr: 455,
    OriginalMessage: '17:29:47 Bytes Read :  00 11 D8 01 35 31 34 4C D8',
    CobID: 'Read',
    FrameData: '0011D8013531344CD8',
    type: 'Normal',
    AxisID: 'H1',
    CS: 'D801',
    Object: '-',
    ObjectName: '-',
    Data: 'GetVAR response:  F514L',
    Interpretation: 'Get version. On-line cmd. ',
    errorStatus: '-'
  },
  {
    msgNr: 456,
    OriginalMessage: '17:29:47 Bytes Write :  08 00 00 B0 00 00 01 00 00 B9',
    CobID: 'Write',
    FrameData: '080000B00000010000B9',
    type: 'GiveData',
    AxisID: '0',
    CS: 'B000',
    Object: 'H0',
    ObjectName: '-',
    Data: '?0x0000 | PM  ',
    Interpretation: '?0x0000 | PM [?V16]',
    errorStatus: '-'
  },
  {
    msgNr: 457,
    OriginalMessage: '17:29:47 Bytes Read :  4F',
    CobID: 'Read',
    FrameData: '4F',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'OK',
    Interpretation: 'OK',
    errorStatus: '-'
  },
  {
    msgNr: 458,
    OriginalMessage: '17:29:47 Bytes Read :  0A',
    CobID: 'Read',
    FrameData: '0A',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'Length',
    Interpretation: 'Next message = 10 bytes',
    errorStatus: '-'
  },
  {
    msgNr: 459,
    OriginalMessage: '17:29:47 Bytes Read :  00 01 B4 04 00 10 00 00 24 F3 EA',
    CobID: 'Read',
    FrameData: '0001B4040010000024F3EA',
    type: 'TakeData',
    AxisID: 'H0',
    CS: 'B404',
    Object: 1,
    ObjectName: '-',
    Data: '0x0000 == 0x24F3 ,DM  ',
    Interpretation: '0x0000 == 0x24F3 == 9459d ,DM [V16]',
    errorStatus: '-'
  },
  {
    msgNr: 460,
    OriginalMessage: '17:29:47 Bytes Write :  06 00 10 D8 01 00 11 00',
    CobID: 'Write',
    FrameData: '060010D801001100',
    type: 'Normal',
    AxisID: 1,
    CS: 'D801',
    Object: 'H1',
    ObjectName: '-',
    Data: 'GETVAR',
    Interpretation: 'Get version. On-line cmd. ',
    errorStatus: '-'
  },
  {
    msgNr: 461,
    OriginalMessage: '17:29:47 Bytes Read :  4F',
    CobID: 'Read',
    FrameData: '4F',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'OK',
    Interpretation: 'OK',
    errorStatus: '-'
  },
  {
    msgNr: 462,
    OriginalMessage: '17:29:47 Bytes Read :  08',
    CobID: 'Read',
    FrameData: '08',
    type: '-',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: 'Length',
    Interpretation: 'Next message = 8 bytes',
    errorStatus: '-'
  },
  {
    msgNr: 463,
    OriginalMessage: '17:29:47 Bytes Read :  00 11 D8 01 35 31 34 4C D8',
    CobID: 'Read',
    FrameData: '0011D8013531344CD8',
    type: 'Normal',
    AxisID: 'H1',
    CS: 'D801',
    Object: '-',
    ObjectName: '-',
    Data: 'GetVAR response:  F514L',
    Interpretation: 'Get version. On-line cmd. ',
    errorStatus: '-'
  },
  {
    msgNr: 464,
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
    msgNr: 465,
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

export const Hardcoded_VerifyTechnoCAN = []
