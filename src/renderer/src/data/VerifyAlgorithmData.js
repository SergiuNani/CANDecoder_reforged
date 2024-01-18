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
    //====== Testing Mapping AXIS 4 ======
    Line     35:     19)     25901.1  Rx         0604  8  40 02 10 00 00 00 00 00 
    Line     37:     21)     25901.7  Rx         0584  8  43 02 10 00 50 02 1F 02 
    Line     41:     25)     25903.6  Rx         0604  8  40 61 60 00 00 00 00 00 
    Line     44:     28)     25904.2  Rx         0584  8  4F 61 60 00 00 00 00 00 
    Line     49:     33)     25906.1  Rx         0604  8  40 64 60 00 00 00 00 00 
    Line     51:     35)     25906.8  Rx         0584  8  43 64 60 00 00 00 00 00 
    Line     58:     42)     25909.0  Rx         0604  8  23 00 18 01 84 01 00 80 
    Line     59:     43)     25909.4  Rx         0584  8  60 00 18 01 00 00 00 00 
    Line     63:     47)     25910.9  Rx         0604  8  2F 00 1A 00 00 00 00 00 
    Line     65:     49)     25911.3  Rx         0584  8  60 00 1A 00 00 00 00 00 
    Line     71:     55)     26246.7  Rx         0604  8  23 00 1A 01 20 00 02 10 
    Line     72:     56)     26247.0  Rx         0584  8  60 00 1A 01 00 00 00 00 
    Line     77:     61)     26250.6  Rx         0604  8  23 00 1A 02 10 00 00 20 
    Line     79:     63)     26251.2  Rx         0584  8  60 00 1A 02 00 00 00 00 
    Line     85:     69)     26253.6  Rx         0604  8  23 00 1A 03 08 00 61 60 
    Line     86:     70)     26254.0  Rx         0584  8  60 00 1A 03 00 00 00 00 
    Line     88:     72)     26261.2  Rx         0604  8  2F 00 1A 00 03 00 00 00 
    Line     91:     75)     26262.1  Rx         0584  8  60 00 1A 00 00 00 00 00 
    Line     94:     78)     26265.1  Rx         0604  8  2F 00 18 02 FF 00 00 00 
    Line     95:     79)     26265.7  Rx         0584  8  60 00 18 02 00 00 00 00 
    Line    100:     84)     26267.8  Rx         0604  8  2B 00 18 03 E8 03 00 00 
    Line    101:     85)     26268.2  Rx         0584  8  60 00 18 03 00 00 00 00 
    Line    106:     90)     26269.7  Rx         0604  8  23 00 18 01 84 01 00 00 
    Line    107:     91)     26270.2  Rx         0584  8  60 00 18 01 00 00 00 00 
    Line    112:     96)     26272.2  Rx         0604  8  23 01 18 01 84 02 00 80 
    Line    113:     97)     26272.6  Rx         0584  8  60 01 18 01 00 00 00 00 
    Line    119:    103)     26607.8  Rx         0604  8  2F 01 1A 00 00 00 00 00 
    Line    120:    104)     26608.2  Rx         0584  8  60 01 1A 00 00 00 00 00 
    Line    123:    107)     26609.3  Rx         0604  8  23 01 1A 01 20 00 64 60 
    Line    126:    110)     26610.0  Rx         0584  8  60 01 1A 01 00 00 00 00 
    Line    130:    114)     26611.4  Rx         0604  8  23 01 1A 02 20 00 6C 60 
    Line    133:    117)     26612.0  Rx         0584  8  60 01 1A 02 00 00 00 00 
    Line    136:    120)     26613.0  Rx         0604  8  2F 01 1A 00 02 00 00 00 
    Line    140:    124)     26614.0  Rx         0584  8  60 01 1A 00 00 00 00 00 
    Line    143:    127)     26614.7  Rx         0604  8  2F 01 18 02 02 00 00 00 
    Line    145:    129)     26615.2  Rx         0584  8  60 01 18 02 00 00 00 00 
    Line    152:    136)     26618.1  Rx         0604  8  23 01 18 01 84 02 00 00 
    Line    154:    138)     26618.6  Rx         0584  8  60 01 18 01 00 00 00 00 
    Line    159:    143)     26620.4  Rx         0604  8  23 00 14 01 04 02 00 80 
    Line    161:    145)     26620.8  Rx         0584  8  60 00 14 01 00 00 00 00 
    Line    167:    151)     26955.8  Rx         0604  8  2F 00 16 00 00 00 00 00 
    Line    168:    152)     26956.2  Rx         0584  8  60 00 16 00 00 00 00 00 
    Line    176:    160)     26958.4  Rx         0604  8  23 00 16 01 10 00 40 60 
    Line    179:    163)     26958.9  Rx         0584  8  60 00 16 01 00 00 00 00 
    Line    184:    168)     26960.2  Rx         0604  8  2F 00 16 00 01 00 00 00 
    Line    185:    169)     26960.8  Rx         0584  8  60 00 16 00 00 00 00 00 
    Line    190:    174)     26962.6  Rx         0604  8  2F 00 14 02 FF 00 00 00 
    Line    191:    175)     26963.0  Rx         0584  8  60 00 14 02 00 00 00 00 
    Line    195:    179)     26964.3  Rx         0604  8  23 00 14 01 04 02 00 00 
    Line    197:    181)     26964.8  Rx         0584  8  60 00 14 01 00 00 00 00 
    Line    201:    185)     26966.4  Rx         0604  8  23 02 18 01 84 03 00 80 
    Line    203:    187)     26966.8  Rx         0584  8  60 02 18 01 00 00 00 00 
    Line    207:    191)     26968.3  Rx         0604  8  2F 02 1A 00 00 00 00 00 
    Line    209:    193)     26968.8  Rx         0584  8  60 02 1A 00 00 00 00 00 
    Line    213:    197)     27303.7  Rx         0604  8  23 02 1A 01 10 00 72 20 
    Line    216:    200)     27304.2  Rx         0584  8  60 02 1A 01 00 00 00 00 
    Line    220:    204)     27306.0  Rx         0604  8  2F 02 1A 00 01 00 00 00 
    Line    224:    208)     27306.8  Rx         0584  8  60 02 1A 00 00 00 00 00 
    Line    228:    212)     27308.3  Rx         0604  8  2F 02 18 02 FF 00 00 00 
    Line    231:    215)     27308.8  Rx         0584  8  60 02 18 02 00 00 00 00 
    Line    234:    218)     27310.1  Rx         0604  8  2B 02 18 03 32 00 00 00 
    Line    237:    221)     27310.6  Rx         0584  8  60 02 18 03 00 00 00 00 
    Line    242:    226)     27312.7  Rx         0604  8  23 02 18 01 84 03 00 00 
    Line    243:    227)     27313.2  Rx         0584  8  60 02 18 01 00 00 00 00 
    Line    248:    232)     27314.6  Rx         0604  8  23 01 14 01 04 03 00 80 
    Line    249:    233)     27315.0  Rx         0584  8  60 01 14 01 00 00 00 00 
    Line    254:    238)     27316.8  Rx         0604  8  2F 01 16 00 00 00 00 00 
    Line    255:    239)     27317.2  Rx         0584  8  60 01 16 00 00 00 00 00 
    Line    260:    244)     27652.0  Rx         0604  8  23 01 16 01 20 01 C1 60 
    Line    262:    246)     27652.6  Rx         0584  8  60 01 16 01 00 00 00 00 
    Line    267:    251)     27653.9  Rx         0604  8  23 01 16 02 20 02 C1 60 
    Line    268:    252)     27654.4  Rx         0584  8  60 01 16 02 00 00 00 00 
    Line    274:    258)     27655.9  Rx         0604  8  2F 01 16 00 02 00 00 00 
    Line    277:    261)     27656.7  Rx         0584  8  60 01 16 00 00 00 00 00 
    Line    280:    264)     27657.4  Rx         0604  8  2F 01 14 02 FF 00 00 00 
    Line    282:    266)     27657.9  Rx         0584  8  60 01 14 02 00 00 00 00 
    Line    287:    271)     27659.1  Rx         0604  8  23 01 14 01 04 03 00 00 
    Line    288:    272)     27659.6  Rx         0584  8  60 01 14 01 00 00 00 00 
    Line    293:    277)     27661.1  Rx         0604  8  23 03 18 01 84 04 00 80 
    Line    295:    279)     27661.9  Rx         0584  8  60 03 18 01 00 00 00 00 
    Line    299:    283)     27663.0  Rx         0604  8  2F 03 1A 00 00 00 00 00 
    Line    301:    285)     27663.4  Rx         0584  8  60 03 1A 00 00 00 00 00 
    Line    305:    289)     27664.8  Rx         0604  8  23 03 1A 01 10 00 77 60 
    Line    307:    291)     27665.3  Rx         0584  8  60 03 1A 01 00 00 00 00 
    Line    311:    295)     27666.4  Rx         0604  8  2F 03 1A 00 01 00 00 00 
    Line    313:    297)     27667.0  Rx         0584  8  60 03 1A 00 00 00 00 00 
    Line    317:    301)     28001.5  Rx         0604  8  2F 03 18 02 05 00 00 00 
    Line    318:    302)     28001.9  Rx         0584  8  60 03 18 02 00 00 00 00 
    Line    325:    309)     28003.7  Rx         0604  8  23 03 18 01 84 04 00 00 
    Line    327:    311)     28004.3  Rx         0584  8  60 03 18 01 00 00 00 00 
    //====== Testing Mapping AXIS 6 ======
    //Interpolation  PVT abs
0 01 06
206 06 00
206 07 00
206 0F 00
606 2B 8E 20 00 00 00 00 00
606 2F 02 16 00 00 00 00 00
606 23 02 16 01 20 01 C1 60
606 23 02 16 02 20 02 C1 60
606 2F 02 16 00 02 00 00 00
606 2F 60 60 00 07 00 00 00
606 2B C0 60 00 FF FF 00 00
606 2B 73 20 00 0F 00 00 00
606 2B 74 20 00 00 B0 00 00
406 58 00 54 00 03 00 37 00
406 72 01 A8 00 06 00 37 02
406 A6 0B A8 00 06 00 86 05
406 FF 15 A8 00 06 00 90 07
406 25 17 00 00 03 00 3C 08
406 70 17 00 00 00 00 32 0A
406 07 14 80 00 F8 FF F0 0C
406 2B 0C AB 00 F2 FF BE 0E
406 6A F9 AB FF F2 FF 68 11
406 17 E4 AB FF F2 FF 9A 13
406 51 DC 99 FF F8 FF BE 14
406 F0 D8 00 FF 00 00 F0 16
206 1F 00
//Interpolation  PT
606 2B 8E 20 00 00 00 00 00
606 2F 02 16 00 00 00 00 00
606 23 02 16 01 20 01 C1 60
606 23 02 16 02 20 02 C1 60
606 2F 02 16 00 02 00 00 00
606 2F 60 60 00 07 00 00 00
606 2B C0 60 00 00 00 00 00
606 2B 73 20 00 0C 00 00 00
606 2B 74 20 00 01 A0 00 00
606 23 79 20 00 E8 03 00 00
406 20 4E 00 00 E8 03 00 02
406 30 75 00 00 D0 07 00 04
406 D0 07 00 00 E8 03 00 06
406 00 00 00 00 F4 01 00 08
206 1F 00
//Interpolation  PVT relative
0 01 06
206 06 00
206 07 00
206 0F 00
606 2B 8E 20 00 00 00 00 00
606 2F 02 16 00 00 00 00 00
606 23 02 16 01 20 01 C1 60
606 23 02 16 02 20 02 C1 60
606 2F 02 16 00 02 00 00 00
606 2F 60 60 00 07 00 00 00
206 4F 00
606 2B C0 60 00 FF FF 00 00
606 2B 73 20 00 0C 00 00 00
606 2B 74 20 00 01 A0 00 00
606 23 79 20 00 00 00 00 00
406 90 01 00 00 03 00 FA 02
406 D8 04 00 00 06 00 FA 04
406 8A 06 00 00 06 00 FA 06
406 82 06 00 00 06 00 FA 08
406 D8 04 00 00 03 00 FA 0A
406 9A 01 00 00 00 00 FA 0C
206 5F 00
/****** COB ID/DATA EXTRACTION VALIDATION **********/
           1	    	17:46:00	524.117	       3116.135		      1551	       70F	R     	  0	  	  	  	  	  	  	  	  	        	
0x0 81 00
0 81 00
0 2 81 00
0 02 81 00
0 0x2 81 00
0 0x02 81 00
0 0x02 0x81 0x00
0 02 0x81 0x00
0 2 0x81 0x00
0 2 81 00
000 81 00
000 2 81 00
000 0x2 81 00
000 0x02 81 00
000 0x02 0x81 0x00
000 02 0x81 0x00
000 2 0x81 0x00
000 2 81 00
0x000 81 00
0x000 2 81 00
0x000 0x2 81 00
0x000 0x02 81 00
0x000 0x02 0x81 0x00
0x000 02 0x81 0x00
0x000 2 0x81 0x00
0x000 2 81 00
0x000 4 0x81 0x00
0x000 4 81 00
0x000 2 0x81 0x00 00 01
0x000 2 81 00 00 02
084 2 81 00 00 02
084 2 
084 0
084 0x0
0x084 0x0
0x084 0
0x084 00
0x084 0x00
084 0x00
084 0x00 12 45
084 00 12 45
084 00 12 45
205 0 15 74
205 2 15 74
205 02 15 74
205 00 15 74
205 0x0 15 74
205 0x1 15 74
205 0x02 15 74
205 0x2 15 74
205  0x15 0x74
205 0x2 0x15 0x74
0x205 2 0x15 0x74
0x205 00 15 74
0x205 02 15 74
0x205 02 15 74
0x205 05 15 74
0x205 0F 15 74
205 00 45 85
205 02 45 85
204 00
406 6A F9 AB FF F2 FF 68 11
406 00 F9 AB FF F2 FF 68 11
406 00 F9 AB FF F2 FF 68 
406 00 F9 AB FF F2 FF 
406 0x06 00 F9 AB FF F2 FF 
406 6 00 F9 AB FF F2 FF 
406 5 00 F9 AB FF F2 FF 
    18)     92905.6  Rx         0281  3  50 03 00 
    19)     92935.5  Rx         0181  2  31 02 
    20)     92935.6  Rx         0281  3  31 02 00 
  can0  601   [8]  2F 00 1A 00 00 00 00 00
601 8 2 3 816000 1245858500
beautiful 601,1,45 00 52 86 1 cunt
601 238160 00 12569874
ARRAY11 = [
  ["701", "12 00"],
  ["701", "45"],
  ["700", "45"],
  ["70a", "05"],
  ["70a", "7f"],
  ["70a", "04"],
  ["70a", "4"],
  ["70a", "4daedef"],
  ["70a", ""],
];
"605"	"23 4585 00 458566"
"USB-t,o-CAN V2 compact  CAN-1","77,8","1,09.9",      ,185,6,33 06 BC 00 00 00,3.....
USB-to-CAN V2 compact  CAN-1,17,93.865,      ,605,8,2B 17 10 00 C8 00 00 00,+.......
SB-to-CAN V2 compact  CAN-1,54,00:06.3,      ,702,1,5,.
        1	    	14:22:01	441.473	       6905.473		         0	       000	      	  2	81	00	  	  	  	  	  	  	�_      	
           2	    	14:22:01	672.960	        231.487		      1793	       701	      	  1	00	  	  	  	  	  	  	  	_       	      	
           5	    	14:22:04	840.272	       3166.812		         0	       000	      	  2	01	00	  	  	  	  	  	  	__      		
           8	    	14:22:04	841.086	          0.127		       387	       183	      	  2	50	02	  	  	  	  	  	  	P_      	
           9	    	14:22:04	841.243	          0.157		       641	       281	      	  3	50	02	00	  	  	  	  	  	P__     		
          12	    	14:22:07	938.135	       3096.584		      1539	       603	      	  8	23	03	18	01	83	04	00	80	#___�__�	
          13	    	14:22:07
          0    00000597         8  43  00  10  00  91  01  0E  00    1533.777080 R
 0    00000000         2  81  09                            1533.785080 R
 0    00000080         0                                    1533.794430 R
 0    00000617         8  23  05  10  00  80  00  00  80    1533.794870 R
 0    00000000         2  81  0A                            1533.795130 R
 0    00000297         8  00  00  00  00  00  00  00  00    1533.795640 R
 0    00000717         1  05                                1533.795900 R
 0    00000597         8  60  05  10  00  00  00  00  00    1533.796410 R
 0    00000000         2  81  0B                            1533.805630 R
 0    00000597         8  23  06  10  00  20  4E  00  00    1533.806140 R
 0    00000080         0                                    1533.814780 R
 0    00000617         8  80  06  10  00  01  00  04  05    1533.815230 R
 0    00000000         2  81  0C                            1533.816510 R
     000001A0         4  00  00  00  00                     305.106090 R
 0    000001A1         4  00  00  00  00                     305.107110 R
 0    0000077F         1  05                                 305.108990 R
 0    0000070B  R      1                                     305.109160 R
 0    0000070C  R      1                                     305.109330 R
 0    0000070B         1  05                                 305.109580 R
 0    0000070C         1  85                                 305.109840 R
 0    000001A0         4  00  00  00  00                     305.114790 R
 0    0x000001A0         4  00  00  00  00                     305.114790 R
 13:59:35:8311 Rx 1 0x080 s 0 
13:59:35:8361 Rx 1 0x608 s 8 2B 0C 10 00 64 00 00 00 
13:59:35:8371 Rx 1 0x588 s 8 60 0C 10 00 00 00 00 00 
13:59:35:8431 Rx 1 0x588 s 8 60 0D 10 00 00 00 00 00 
13:59:35:8511 Rx 1 0x080 s 0 
13:59:35:8561 Rx 1 0x588 s 8 60 14 10 00 00 00 00 00 
13:59:35:8571 Rx 1 0x708 s 1 7F 
13:59:35:8621 Rx 1 0x608 s 8 2B 17 10 00 00 00 00 00 
13:59:35:8711 Rx 1 0x080 s 0 
13:59:35:8751 Rx 1 0x588 s 8 60 00 14 01 00 00 00 00 
13:59:35:8911 Rx 1 0x080 s 0 
13:59:35:8951 Rx 1 0x608 s 8 2F 00 16 00 00 00 00 00  
301 0x03 45 85 
301 03 45 85 11
301 3 45 85 11
0	接收	13:44:51.684			701	数据帧	标准帧	0x01	7F 	
3	接收	13:44:53.972			0x00000000	数据帧	标准帧	0x02	80 00 	
13	接收	13:44:57.382			0x00000601	数据帧	标准帧	0x08	2F 00 18 02 01 00 47 95 
/****** Read Write DAta validation **********/
1	    	20:28:20	424.527	>> 2147483.647		      1537	       601	      	  8	23	64	20	00	88	00	00	40	#d__ˆ__@	
2	    	20:28:20	424.934	          0.407		      1409	       581	      	  8	60	64	20	00	00	00	00	00	d______	
3	    	20:28:21	406.268	        981.334		      1537	       601	      	  8	23	65	20	00	76	54	34	12	#e__vT4_	
4	    	20:28:21	409.739	          3.471		      1409	       581	      	  8	60	65	20	00	00	00	00	00	e______	
5	    	20:28:22	144.714	        734.975		      1537	       601	      	  8	23	65	20	00	76	54	34	12	#e__vT4_	
6	    	20:28:22	148.130	          3.416		      1409	       581	      	  8	60	65	20	00	00	00	00	00	e______	
7	    	20:28:22	304.564	        156.434		      1537	       601	      	  8	23	65	20	00	76	54	34	12	#e__vT4_	
8	    	20:28:22	308.040	          3.476		      1409	       581	      	  8	60	65	20	00	00	00	00	00	e______	
9	    	20:28:22	482.672	        174.632		      1537	       601	      	  8	23	65	20	00	76	54	34	12	#e__vT4_	
10	    	20:28:22	486.121	          3.449		      1409	       581	      	  8	60	65	20	00	00	00	00	00	e______	
11	    	20:29:24	604.978	      62118.857		      1537	       601	      	  8	40	66	20	00	00	00	34	12	@f____4_	
12	    	20:29:24	605.338	          0.360	                           <NTCAN Event>	         0	       000	E     	  6	00	00	00	00	00	00	  	  	CONTROLLER(ok)	
13	    	20:29:24	605.355	          0.017		      1409	       581	      	  8	43	66	20	00	76	54	00	00	Cf__vT__	
14	    	20:29:25	932.547	       1327.192		      1537	       601	      	  8	40	66	20	00	00	00	34	12	@f____4_	
15	    	20:29:25	932.935	          0.388		      1409	       581	      	  8	43	66	20	00	76	54	00	00	Cf__vT__	
16	    	20:29:26	860.131	        927.196		      1537	       601	      	  8	40	66	20	00	00	00	34	12	@f____4_	
17	    	20:29:26	860.535	          0.404		      1409	       581	      	  8	43	66	20	00	76	54	00	00	Cf__vT__	
18	    	20:29:27	367.721	        507.186		      1537	       601	      	  8	40	66	20	00	00	00	34	12	@f____4_	
19	    	20:29:27	368.113	          0.392		      1409	       581	      	  8	43	66	20	00	76	54	00	00	Cf__vT__	
1	    	20:34:19	530.597	     292162.484		      1537	       601	      	  8	23	64	20	00	08	00	00	40	#d_____@	
20:34:19	530.983	          0.386		      1409	       581	      	  8	60	64	20	00	00	00	00	00	d______	
3	    	20:34:20	549.751	       1018.768		      1537	       601	      	  8	23	65	20	00	76	54	34	12	#e__vT4_	
4	    	20:34:20	553.256	          3.505		      1409	       581	      	  8	60	65	20	00	00	00	00	00	e______	
5	    	20:34:20	891.829	        338.573		      1537	       601	      	  8	23	65	20	00	76	54	34	12	#e__vT4_	
6	    	20:34:20	895.334	          3.505		      1409	       581	      	  8	60	65	20	00	00	00	00	00	e______	
7	    	20:34:21	182.452	        287.118		      1537	       601	      	  8	23	65	20	00	76	54	34	12	#e__vT4_	
8	    	20:34:21	185.938	          3.486		      1409	       581	      	  8	60	65	20	00	00	00	00	00	e______	
9	    	20:34:21	484.320	        298.382		      1537	       601	      	  8	23	65	20	00	76	54	34	12	#e__vT4_	
10	    	20:34:21	487.772	          3.452		      1409	       581	      	  8	60	65	20	00	00	00	00	00	e______	
11	    	20:34:21	945.868	        458.096		      1537	       601	      	  8	23	65	20	00	76	54	34	12	#e__vT4_	
12	    	20:34:21	949.344	          3.476		      1409	       581	      	  8	60	65	20	00	00	00	00	00	e______	
13	    	20:34:23	390.722	       1441.378		      1537	       601	      	  8	40	66	20	00	00	00	34	12	@f____4_	
14	    	20:34:23	391.096	          0.374		      1409	       581	      	  8	43	66	20	00	C0	74	00	00	Cf__Àt__	
15	    	20:34:23	792.730	        401.634		      1537	       601	      	  8	40	66	20	00	00	00	34	12	@f____4_	
16	    	20:34:23	793.075	          0.345		      1409	       581	      	  8	43	66	20	00	C0	09	00	00	Cf__À___	
17	    	20:34:24	086.702	        293.627		      1537	       601	      	  8	40	66	20	00	00	00	34	12	@f____4_	
18	    	20:34:24	087.071	          0.369		      1409	       581	      	  8	43	66	20	00	09	40	00	00	Cf___@__	
19	    	20:34:24	360.329	        273.258		      1537	       601	      	  8	40	66	20	00	00	00	34	12	@f____4_	
20	    	20:34:24	360.679	          0.350		      1409	       581	      	  8	43	66	20	00	04	04	00	00	Cf______	
21	    	20:34:24	694.605	        333.926		      1537	       601	      	  8	40	66	20	00	00	00	34	12	@f____4_	
22	    	20:34:24	694.985	          0.380		      1409	       581	      	  8	43	66	20	00	57	5A	00	00	Cf__WZ__	
23	    	20:34:25	087.729	        392.744		      1537	       601	      	  8	40	66	20	00	00	00	34	12	@f____4_	
24	    	20:34:25	088.071	          0.342		      1409	       581	      	  8	43	66	20	00	FF	FF	00	00	Cf__ÿÿ__
606 23 67 20 00 34 12 6A 03
605 23 64 20 00 08 00 38 56
605 23 65 20 00 00 C4 00 00
605 23 65 20 00 00 00 00 00	
Line  3818: USB-to-CAN V2 compact  CAN-1,"5,297",185.639,      ,85,8,00 00 00 00 00 00 00 00,........
Line  4135: USB-to-CAN V2 compact  CAN-1,"6,774",210.979,      ,85,8,20 32 01 00 00 00 00 00, 2......
Line  4149: USB-to-CAN V2 compact  CAN-1,"6,808",211.114,      ,85,8,00 00 00 00 00 00 00 00,........
Line  4271: USB-to-CAN V2 compact  CAN-1,"8,126",256.244,      ,85,8,20 32 01 00 00 00 00 00, 2......
Line  4321: USB-to-CAN V2 compact  CAN-1,"8,278",258.213,      ,85,8,00 00 00 00 00 00 00 00,...
[19873] --  [BC] Stats std rtr Rx,Tx:     	         0	         0
[19874] --  [BD] Stats ext rtr Rx,Tx:     	         0	         0
[19880] --  [BI] Stats error count Rx,Tx: 	         0	         0
[19882] --  -
`
export const Hardcoded_VerifyCANopenValidityArray = [
  {
    msgNr: 1,
    OriginalMessage: '-',
    CobID: 'Empty',
    FrameData: 'Line',
    type: '-',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: '-',
    errorStatus: '-'
  },
  {
    msgNr: 2,
    OriginalMessage: '//====== Testing x6060 and its influence over x6040 and x6041 AXIS 31 ======',
    CobID: 'invalid',
    FrameData: 'invalid',
    type: 'invalid',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 3,
    OriginalMessage: '21F 0455 //Simple x6040',
    CobID: '21F',
    FrameData: '0455',
    type: 'RPDO1',
    AxisID: 31,
    CS: 1,
    Object: '#x6040',
    ObjectName: 'Controlword',
    Data: '5504',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 4,
    OriginalMessage: '61F 2f 6060 00 01 00 00 00 //via SDO in PP',
    CobID: '61F',
    FrameData: '2f60600001000000',
    type: 'R_SDO',
    AxisID: 31,
    CS: '2F',
    Object: '#x6060',
    ObjectName: 'Modes of operation',
    Data: '01',
    Interpretation: 'Profile Position Mode',
    errorStatus: 'blue'
  },
  {
    msgNr: 5,
    OriginalMessage: '21F 0455 // x6040 in PP',
    CobID: '21F',
    FrameData: '0455',
    type: 'RPDO1',
    AxisID: 31,
    CS: 1,
    Object: '#x60401',
    ObjectName: 'Controlword',
    Data: '5504',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 6,
    OriginalMessage: '31F 04551155889922 // x6041 in PP',
    CobID: '31F',
    FrameData: '04551155889922',
    type: 'RPDO2',
    AxisID: 31,
    CS: 3,
    Object: '#x607A / #x60411 / #x6061',
    ObjectName: 'Target position / Statusword / Modes of operation display',
    Data: '55115504 / 9988 / 22',
    Interpretation: '1427199236 IU / - / -',
    errorStatus: 'blue'
  },
  {
    msgNr: 7,
    OriginalMessage: '61F 2f 6060 00 FE 00 00 00 // El Camming',
    CobID: '61F',
    FrameData: '2f606000FE000000',
    type: 'R_SDO',
    AxisID: 31,
    CS: '2F',
    Object: '#x6060',
    ObjectName: 'Modes of operation',
    Data: 'FE',
    Interpretation: 'Manufacturer specific – Electronic Camming Position Mode',
    errorStatus: 'blue'
  },
  {
    msgNr: 8,
    OriginalMessage: '21F 0455 // x6040 in El Camming',
    CobID: '21F',
    FrameData: '0455',
    type: 'RPDO1',
    AxisID: 31,
    CS: 1,
    Object: '#x6040FE',
    ObjectName: 'Controlword',
    Data: '5504',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 9,
    OriginalMessage: '31F 04551155889922 // x6041 ',
    CobID: '31F',
    FrameData: '04551155889922',
    type: 'RPDO2',
    AxisID: 31,
    CS: 3,
    Object: '#x607A / #x6041 / #x6061',
    ObjectName: 'Target position / Statusword / Modes of operation display',
    Data: '55115504 / 9988 / 22',
    Interpretation: '1427199236 IU / - / -',
    errorStatus: 'blue'
  },
  {
    msgNr: 10,
    OriginalMessage: '41F 08 // In CSP changed via PDO',
    CobID: '41F',
    FrameData: '08',
    type: 'RPDO3',
    AxisID: 31,
    CS: 1,
    Object: '#x6060',
    ObjectName: 'Modes of operation',
    Data: '08',
    Interpretation: 'Cyclic Synchronous Position Mode (CSP)',
    errorStatus: 'blue'
  },
  {
    msgNr: 11,
    OriginalMessage: '21F 0455 // x6040 in CSP',
    CobID: '21F',
    FrameData: '0455',
    type: 'RPDO1',
    AxisID: 31,
    CS: 1,
    Object: '#x60408',
    ObjectName: 'Controlword',
    Data: '5504',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 12,
    OriginalMessage: '31F 04551155889922 // x6041 in CSP ',
    CobID: '31F',
    FrameData: '04551155889922',
    type: 'RPDO2',
    AxisID: 31,
    CS: 3,
    Object: '#x607A / #x60418 / #x6061',
    ObjectName: 'Target position / Statusword / Modes of operation display',
    Data: '55115504 / 9988 / 22',
    Interpretation: '1427199236 IU / - / -',
    errorStatus: 'blue'
  },
  {
    msgNr: 13,
    OriginalMessage: '61F 2f 6060 00 01 00 00 00 //via SDO in PP',
    CobID: '61F',
    FrameData: '2f60600001000000',
    type: 'R_SDO',
    AxisID: 31,
    CS: '2F',
    Object: '#x6060',
    ObjectName: 'Modes of operation',
    Data: '01',
    Interpretation: 'Profile Position Mode',
    errorStatus: 'blue'
  },
  {
    msgNr: 14,
    OriginalMessage: '21F 0455 // x6040 in PP',
    CobID: '21F',
    FrameData: '0455',
    type: 'RPDO1',
    AxisID: 31,
    CS: 1,
    Object: '#x60401',
    ObjectName: 'Controlword',
    Data: '5504',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 15,
    OriginalMessage: '31F 04551155889922 // x6041 in PP',
    CobID: '31F',
    FrameData: '04551155889922',
    type: 'RPDO2',
    AxisID: 31,
    CS: 3,
    Object: '#x607A / #x60411 / #x6061',
    ObjectName: 'Target position / Statusword / Modes of operation display',
    Data: '55115504 / 9988 / 22',
    Interpretation: '1427199236 IU / - / -',
    errorStatus: 'blue'
  },
  {
    msgNr: 16,
    OriginalMessage: '61F 2f 6060 00 0F 00 00 00 //via SDO BS',
    CobID: '61F',
    FrameData: '2f6060000F000000',
    type: 'R_SDO',
    AxisID: 31,
    CS: '2F',
    Object: '#x6060',
    ObjectName: 'Modes of operation',
    Data: '0F',
    Interpretation: 'Write: #x6060 <- 0Fh',
    errorStatus: 'neutral'
  },
  {
    msgNr: 17,
    OriginalMessage: '21F 0455 // x6040 in PP',
    CobID: '21F',
    FrameData: '0455',
    type: 'RPDO1',
    AxisID: 31,
    CS: 1,
    Object: '#x6040',
    ObjectName: 'Controlword',
    Data: '5504',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 18,
    OriginalMessage: '31F 04551155889922 // x6041 in PP',
    CobID: '31F',
    FrameData: '04551155889922',
    type: 'RPDO2',
    AxisID: 31,
    CS: 3,
    Object: '#x607A / #x6041 / #x6061',
    ObjectName: 'Target position / Statusword / Modes of operation display',
    Data: '55115504 / 9988 / 22',
    Interpretation: '1427199236 IU / - / -',
    errorStatus: 'blue'
  },
  {
    msgNr: 19,
    OriginalMessage: '61F 2f 6060 00 01 00 00 00 //via SDO in PP',
    CobID: '61F',
    FrameData: '2f60600001000000',
    type: 'R_SDO',
    AxisID: 31,
    CS: '2F',
    Object: '#x6060',
    ObjectName: 'Modes of operation',
    Data: '01',
    Interpretation: 'Profile Position Mode',
    errorStatus: 'blue'
  },
  {
    msgNr: 20,
    OriginalMessage: '21F 0455 // x6040 in PP',
    CobID: '21F',
    FrameData: '0455',
    type: 'RPDO1',
    AxisID: 31,
    CS: 1,
    Object: '#x60401',
    ObjectName: 'Controlword',
    Data: '5504',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 21,
    OriginalMessage: '31F 04551155889922 // x6041 in PP',
    CobID: '31F',
    FrameData: '04551155889922',
    type: 'RPDO2',
    AxisID: 31,
    CS: 3,
    Object: '#x607A / #x60411 / #x6061',
    ObjectName: 'Target position / Statusword / Modes of operation display',
    Data: '55115504 / 9988 / 22',
    Interpretation: '1427199236 IU / - / -',
    errorStatus: 'blue'
  },
  {
    msgNr: 22,
    OriginalMessage: '41F 0B //via PDO BS',
    CobID: '41F',
    FrameData: '0B',
    type: 'RPDO3',
    AxisID: 31,
    CS: 1,
    Object: '#x6060',
    ObjectName: 'Modes of operation',
    Data: '0B',
    Interpretation: '-',
    errorStatus: 'blue'
  },
  {
    msgNr: 23,
    OriginalMessage: '21F 0455 // x6040 in BS',
    CobID: '21F',
    FrameData: '0455',
    type: 'RPDO1',
    AxisID: 31,
    CS: 1,
    Object: '#x6040',
    ObjectName: 'Controlword',
    Data: '5504',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 24,
    OriginalMessage: '31F 04551155889922 // x6041 in BS',
    CobID: '31F',
    FrameData: '04551155889922',
    type: 'RPDO2',
    AxisID: 31,
    CS: 3,
    Object: '#x607A / #x6041 / #x6061',
    ObjectName: 'Target position / Statusword / Modes of operation display',
    Data: '55115504 / 9988 / 22',
    Interpretation: '1427199236 IU / - / -',
    errorStatus: 'blue'
  },
  {
    msgNr: 25,
    OriginalMessage: '61F 2F 6060 00 01 05 00 00 //good SDO',
    CobID: '61F',
    FrameData: '2F60600001050000',
    type: 'R_SDO',
    AxisID: 31,
    CS: '2F',
    Object: '#x6060',
    ObjectName: 'Modes of operation',
    Data: '01',
    Interpretation: 'Profile Position Mode',
    errorStatus: 'blue'
  },
  {
    msgNr: 26,
    OriginalMessage: '61F 21 6060 00 01 05 00 00 //bad SDO',
    CobID: '61F',
    FrameData: '2160600001050000',
    type: 'R_SDO',
    AxisID: 31,
    CS: '21',
    Object: '#x6060',
    ObjectName: 'Modes of operation',
    Data: '00000501',
    Interpretation: 'unknown SDO message',
    errorStatus: 'error'
  },
  {
    msgNr: 27,
    OriginalMessage: '21F 0455 // x6040 in PP',
    CobID: '21F',
    FrameData: '0455',
    type: 'RPDO1',
    AxisID: 31,
    CS: 1,
    Object: '#x60401',
    ObjectName: 'Controlword',
    Data: '5504',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 28,
    OriginalMessage: '31F 04551155889922 // x6041 in PP',
    CobID: '31F',
    FrameData: '04551155889922',
    type: 'RPDO2',
    AxisID: 31,
    CS: 3,
    Object: '#x607A / #x60411 / #x6061',
    ObjectName: 'Target position / Statusword / Modes of operation display',
    Data: '55115504 / 9988 / 22',
    Interpretation: '1427199236 IU / - / -',
    errorStatus: 'blue'
  },
  {
    msgNr: 29,
    OriginalMessage: '61E 2F 6060 00 03 05 00 00 //Different axis',
    CobID: '61E',
    FrameData: '2F60600003050000',
    type: 'R_SDO',
    AxisID: 30,
    CS: '2F',
    Object: '#x6060',
    ObjectName: 'Modes of operation',
    Data: '03',
    Interpretation: 'Profile Velocity Mode',
    errorStatus: 'blue'
  },
  {
    msgNr: 30,
    OriginalMessage: '21F 0455 // x6040 in PP',
    CobID: '21F',
    FrameData: '0455',
    type: 'RPDO1',
    AxisID: 31,
    CS: 1,
    Object: '#x60401',
    ObjectName: 'Controlword',
    Data: '5504',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 31,
    OriginalMessage: '31F 04551155889922 // x6041 in PP',
    CobID: '31F',
    FrameData: '04551155889922',
    type: 'RPDO2',
    AxisID: 31,
    CS: 3,
    Object: '#x607A / #x60411 / #x6061',
    ObjectName: 'Target position / Statusword / Modes of operation display',
    Data: '55115504 / 9988 / 22',
    Interpretation: '1427199236 IU / - / -',
    errorStatus: 'blue'
  },
  {
    msgNr: 32,
    OriginalMessage: '904      4023.599 DT     0601 Rx 8  40 00 10 00 00 00 00 00 ',
    CobID: '0601',
    FrameData: '4000100000000000',
    type: 'R_SDO',
    AxisID: 1,
    CS: '40',
    Object: '#x1000',
    ObjectName: 'Device type',
    Data: '-',
    Interpretation: 'Read object #x1000',
    errorStatus: 'perfect'
  },
  {
    msgNr: 33,
    OriginalMessage: '905      4023.882 DT     0581 Rx 8  43 00 10 00 92 01 06 00 ',
    CobID: '0581',
    FrameData: '4300100092010600',
    type: 'T_SDO',
    AxisID: 1,
    CS: '43',
    Object: '#x1000',
    ObjectName: 'Device type',
    Data: '00060192',
    Interpretation: '60192h for iPOS family',
    errorStatus: 'random'
  },
  {
    msgNr: 34,
    OriginalMessage: '906      4027.463 DT     0080 Rx 0  ',
    CobID: '0080',
    FrameData: '-',
    type: 'SYNC',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'SYNC',
    errorStatus: 'neutral'
  },
  {
    msgNr: 35,
    OriginalMessage: '907      4031.455 DT     0080 Rx 0  ',
    CobID: '0080',
    FrameData: '-',
    type: 'SYNC',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'SYNC',
    errorStatus: 'neutral'
  },
  {
    msgNr: 36,
    OriginalMessage: '908      4031.574 DT     0601 Rx 8  2B 17 10 00 E8 03 01 00 ',
    CobID: '0601',
    FrameData: '2B171000E8030100',
    type: 'R_SDO',
    AxisID: 1,
    CS: '2B',
    Object: '#x1017',
    ObjectName: 'Producer Heartbeat Time',
    Data: '03E8',
    Interpretation: '1000 ms',
    errorStatus: 'blue'
  },
  {
    msgNr: 37,
    OriginalMessage: '909      4031.847 DT     0581 Rx 8  60 17 10 00 00 00 00 00 ',
    CobID: '0581',
    FrameData: '6017100000000000',
    type: 'T_SDO',
    AxisID: 1,
    CS: '60',
    Object: '#x1017',
    ObjectName: 'Producer Heartbeat Time',
    Data: '-',
    Interpretation: 'Writing in #x1017 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 38,
    OriginalMessage: '//====== Testing Segmented Reading AXIS 1 ======',
    CobID: 'invalid',
    FrameData: 'invalid',
    type: 'invalid',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 39,
    OriginalMessage: '    13)     45412.6  Tx         0601  8  40 0A 10 00 00 00 00 00 ',
    CobID: '0601',
    FrameData: '400A100000000000',
    type: 'R_SDO',
    AxisID: 1,
    CS: '40',
    Object: '#x100A',
    ObjectName: 'Software version',
    Data: '-',
    Interpretation: 'Read object #x100A',
    errorStatus: 'perfect'
  },
  {
    msgNr: 40,
    OriginalMessage: '    14)     45413.6  Rx         0581  8  41 0A 10 00 0F 00 00 00 ',
    CobID: '0581',
    FrameData: '410A10000F000000',
    type: 'T_SDO',
    AxisID: 1,
    CS: '41',
    Object: '#x100A',
    ObjectName: 'Software version',
    Data: '0000000F',
    Interpretation: 'Use Segmented Reading. There are 15bytes of Info',
    errorStatus: 'neutral'
  },
  {
    msgNr: 41,
    OriginalMessage: '    15)     46584.3  Tx         0601  8  60 0A 10 00 00 00 00 00 ',
    CobID: '0601',
    FrameData: '600A100000000000',
    type: 'R_SDO',
    AxisID: 1,
    CS: '60',
    Object: '#x100A',
    ObjectName: 'Software version',
    Data: '00000000',
    Interpretation: 'Request a segmented Read',
    errorStatus: 'neutral'
  },
  {
    msgNr: 42,
    OriginalMessage: '    16)     46585.3  Rx         0581  8  00 46 35 30 38 4D 20 20 ',
    CobID: '0581',
    FrameData: '00463530384D2020',
    type: 'T_SDO',
    AxisID: 1,
    CS: '00',
    Object: '3546_30',
    ObjectName: 'Nothing Found',
    Data: '20204D38',
    Interpretation: '\u0000F508M  ',
    errorStatus: 'random'
  },
  {
    msgNr: 43,
    OriginalMessage: '    17)     49374.6  Tx         0601  8  60 0A 10 00 00 00 00 00 ',
    CobID: '0601',
    FrameData: '600A100000000000',
    type: 'R_SDO',
    AxisID: 1,
    CS: '60',
    Object: '#x100A',
    ObjectName: 'Software version',
    Data: '00000000',
    Interpretation: 'Request a segmented Read',
    errorStatus: 'neutral'
  },
  {
    msgNr: 44,
    OriginalMessage: '    18)     49375.6  Rx         0581  8  80 0A 10 00 00 00 03 05 ',
    CobID: '0581',
    FrameData: '800A100000000305',
    type: 'T_SDO',
    AxisID: 1,
    CS: '80',
    Object: '#x100A',
    ObjectName: 'Software version',
    Data: '05030000',
    Interpretation: 'SDO_Abort: Toggle bit not changed.',
    errorStatus: 'error'
  },
  {
    msgNr: 45,
    OriginalMessage: '    19)     53010.6  Tx         0601  8  70 0A 10 00 00 00 00 00 ',
    CobID: '0601',
    FrameData: '700A100000000000',
    type: 'R_SDO',
    AxisID: 1,
    CS: '70',
    Object: '#x100A',
    ObjectName: 'Software version',
    Data: '00000000',
    Interpretation: 'Request a segmented Read',
    errorStatus: 'neutral'
  },
  {
    msgNr: 46,
    OriginalMessage: '    20)     53011.6  Rx         0581  8  80 0A 10 00 00 00 03 05 ',
    CobID: '0581',
    FrameData: '800A100000000305',
    type: 'T_SDO',
    AxisID: 1,
    CS: '80',
    Object: '#x100A',
    ObjectName: 'Software version',
    Data: '05030000',
    Interpretation: 'SDO_Abort: Toggle bit not changed.',
    errorStatus: 'error'
  },
  {
    msgNr: 47,
    OriginalMessage: '    21)     54168.9  Tx         0601  8  70 0A 10 00 00 00 00 00 ',
    CobID: '0601',
    FrameData: '700A100000000000',
    type: 'R_SDO',
    AxisID: 1,
    CS: '70',
    Object: '#x100A',
    ObjectName: 'Software version',
    Data: '00000000',
    Interpretation: 'Request a segmented Read',
    errorStatus: 'neutral'
  },
  {
    msgNr: 48,
    OriginalMessage: '    22)     54169.9  Rx         0581  8  80 0A 10 00 00 00 03 05 ',
    CobID: '0581',
    FrameData: '800A100000000305',
    type: 'T_SDO',
    AxisID: 1,
    CS: '80',
    Object: '#x100A',
    ObjectName: 'Software version',
    Data: '05030000',
    Interpretation: 'SDO_Abort: Toggle bit not changed.',
    errorStatus: 'error'
  },
  {
    msgNr: 49,
    OriginalMessage: '    23)     56253.2  Tx         0601  8  40 0A 10 00 00 00 00 00 ',
    CobID: '0601',
    FrameData: '400A100000000000',
    type: 'R_SDO',
    AxisID: 1,
    CS: '40',
    Object: '#x100A',
    ObjectName: 'Software version',
    Data: '-',
    Interpretation: 'Read object #x100A',
    errorStatus: 'perfect'
  },
  {
    msgNr: 50,
    OriginalMessage: '    24)     56254.3  Rx         0581  8  41 0A 10 00 0F 00 00 00 ',
    CobID: '0581',
    FrameData: '410A10000F000000',
    type: 'T_SDO',
    AxisID: 1,
    CS: '41',
    Object: '#x100A',
    ObjectName: 'Software version',
    Data: '0000000F',
    Interpretation: 'Use Segmented Reading. There are 15bytes of Info',
    errorStatus: 'neutral'
  },
  {
    msgNr: 51,
    OriginalMessage: '    25)     58880.5  Tx         0601  8  70 0A 10 00 00 00 00 00 ',
    CobID: '0601',
    FrameData: '700A100000000000',
    type: 'R_SDO',
    AxisID: 1,
    CS: '70',
    Object: '#x100A',
    ObjectName: 'Software version',
    Data: '00000000',
    Interpretation: 'Request a segmented Read',
    errorStatus: 'neutral'
  },
  {
    msgNr: 52,
    OriginalMessage: '    26)     58881.5  Rx         0581  8  80 0A 10 00 00 00 03 05 ',
    CobID: '0581',
    FrameData: '800A100000000305',
    type: 'T_SDO',
    AxisID: 1,
    CS: '80',
    Object: '#x100A',
    ObjectName: 'Software version',
    Data: '05030000',
    Interpretation: 'SDO_Abort: Toggle bit not changed.',
    errorStatus: 'error'
  },
  {
    msgNr: 53,
    OriginalMessage: '    27)     60466.8  Tx         0601  8  40 0A 10 00 00 00 00 00 ',
    CobID: '0601',
    FrameData: '400A100000000000',
    type: 'R_SDO',
    AxisID: 1,
    CS: '40',
    Object: '#x100A',
    ObjectName: 'Software version',
    Data: '-',
    Interpretation: 'Read object #x100A',
    errorStatus: 'perfect'
  },
  {
    msgNr: 54,
    OriginalMessage: '    28)     60467.9  Rx         0581  8  41 0A 10 00 0F 00 00 00 ',
    CobID: '0581',
    FrameData: '410A10000F000000',
    type: 'T_SDO',
    AxisID: 1,
    CS: '41',
    Object: '#x100A',
    ObjectName: 'Software version',
    Data: '0000000F',
    Interpretation: 'Use Segmented Reading. There are 15bytes of Info',
    errorStatus: 'neutral'
  },
  {
    msgNr: 55,
    OriginalMessage: '    29)     62660.5  Tx         0601  8  60 0A 10 00 00 00 00 00 ',
    CobID: '0601',
    FrameData: '600A100000000000',
    type: 'R_SDO',
    AxisID: 1,
    CS: '60',
    Object: '#x100A',
    ObjectName: 'Software version',
    Data: '00000000',
    Interpretation: 'Request a segmented Read',
    errorStatus: 'neutral'
  },
  {
    msgNr: 56,
    OriginalMessage: '    30)     62661.6  Rx         0581  8  00 46 35 30 38 4D 20 20 ',
    CobID: '0581',
    FrameData: '00463530384D2020',
    type: 'T_SDO',
    AxisID: 1,
    CS: '00',
    Object: '3546_30',
    ObjectName: 'Nothing Found',
    Data: '20204D38',
    Interpretation: '\u0000F508M  ',
    errorStatus: 'random'
  },
  {
    msgNr: 57,
    OriginalMessage: '    31)     64836.9  Tx         0601  8  70 0A 10 00 00 00 00 00 ',
    CobID: '0601',
    FrameData: '700A100000000000',
    type: 'R_SDO',
    AxisID: 1,
    CS: '70',
    Object: '#x100A',
    ObjectName: 'Software version',
    Data: '00000000',
    Interpretation: 'Request a segmented Read',
    errorStatus: 'neutral'
  },
  {
    msgNr: 58,
    OriginalMessage: '    32)     64837.9  Rx         0581  8  10 20 20 20 20 20 20 20',
    CobID: '0581',
    FrameData: '1020202020202020',
    type: 'T_SDO',
    AxisID: 1,
    CS: '10',
    Object: '2020_20',
    ObjectName: 'Nothing Found',
    Data: '20202020',
    Interpretation: '\u0010       ',
    errorStatus: 'random'
  },
  {
    msgNr: 59,
    OriginalMessage: '    35)    179726.8  Tx         0601  8  40 18 10 01 00 00 00 00 ',
    CobID: '0601',
    FrameData: '4018100100000000',
    type: 'R_SDO',
    AxisID: 1,
    CS: '40',
    Object: '#x1018_01',
    ObjectName: 'Vendor ID',
    Data: '-',
    Interpretation: 'Read object #x1018_01',
    errorStatus: 'perfect'
  },
  {
    msgNr: 60,
    OriginalMessage: '    36)    179727.9  Rx         0581  8  43 18 10 01 A3 01 00 00 ',
    CobID: '0581',
    FrameData: '43181001A3010000',
    type: 'T_SDO',
    AxisID: 1,
    CS: '43',
    Object: '#x1018_01',
    ObjectName: 'Vendor ID',
    Data: '000001A3',
    Interpretation: 'Read: #x1018_01 -> 000001A3h',
    errorStatus: 'neutral'
  },
  {
    msgNr: 61,
    OriginalMessage: '    37)    189688.2  Tx         0601  8  60 00 00 00 00 00 00 00 ',
    CobID: '0601',
    FrameData: '6000000000000000',
    type: 'R_SDO',
    AxisID: 1,
    CS: '60',
    Object: '0000_00',
    ObjectName: 'Nothing Found',
    Data: '00000000',
    Interpretation: 'Request a segmented Read',
    errorStatus: 'neutral'
  },
  {
    msgNr: 62,
    OriginalMessage: '    38)    189689.3  Rx         0581  8  80 18 10 01 00 00 03 05',
    CobID: '0581',
    FrameData: '8018100100000305',
    type: 'T_SDO',
    AxisID: 1,
    CS: '80',
    Object: '#x1018_01',
    ObjectName: 'Vendor ID',
    Data: '05030000',
    Interpretation: 'SDO_Abort: Toggle bit not changed.',
    errorStatus: 'error'
  },
  {
    msgNr: 63,
    OriginalMessage: '    39)    201118.3  Tx         0601  8  40 18 10 02 00 00 00 00 ',
    CobID: '0601',
    FrameData: '4018100200000000',
    type: 'R_SDO',
    AxisID: 1,
    CS: '40',
    Object: '#x1018_02',
    ObjectName: 'Product Code',
    Data: '-',
    Interpretation: 'Read object #x1018_02',
    errorStatus: 'perfect'
  },
  {
    msgNr: 64,
    OriginalMessage: '    40)    201119.4  Rx         0581  8  43 18 10 02 D1 46 AB 01 ',
    CobID: '0581',
    FrameData: '43181002D146AB01',
    type: 'T_SDO',
    AxisID: 1,
    CS: '43',
    Object: '#x1018_02',
    ObjectName: 'Product Code',
    Data: '01AB46D1',
    Interpretation: 'P028.002.001',
    errorStatus: 'random'
  },
  {
    msgNr: 65,
    OriginalMessage: '    41)    205484.7  Tx         0601  8  60 00 00 00 00 00 00 00 ',
    CobID: '0601',
    FrameData: '6000000000000000',
    type: 'R_SDO',
    AxisID: 1,
    CS: '60',
    Object: '0000_00',
    ObjectName: 'Nothing Found',
    Data: '00000000',
    Interpretation: 'Request a segmented Read',
    errorStatus: 'neutral'
  },
  {
    msgNr: 66,
    OriginalMessage: '    42)    205485.8  Rx         0581  8  80 18 10 02 00 00 03 05 ',
    CobID: '0581',
    FrameData: '8018100200000305',
    type: 'T_SDO',
    AxisID: 1,
    CS: '80',
    Object: '#x1018_02',
    ObjectName: 'Product Code',
    Data: '05030000',
    Interpretation: 'SDO_Abort: Toggle bit not changed.',
    errorStatus: 'error'
  },
  {
    msgNr: 67,
    OriginalMessage: '    43)    563694.2  Tx         0601  8  40 18 10 04 00 00 00 00 ',
    CobID: '0601',
    FrameData: '4018100400000000',
    type: 'R_SDO',
    AxisID: 1,
    CS: '40',
    Object: '#x1018_04',
    ObjectName: 'Serial number',
    Data: '-',
    Interpretation: 'Read object #x1018_04',
    errorStatus: 'perfect'
  },
  {
    msgNr: 68,
    OriginalMessage: '    44)    563695.2  Rx         0581  8  43 18 10 04 22 72 47 47 ',
    CobID: '0581',
    FrameData: '4318100422724747',
    type: 'T_SDO',
    AxisID: 1,
    CS: '43',
    Object: '#x1018_04',
    ObjectName: 'Serial number',
    Data: '47477222',
    Interpretation: 'GG7222',
    errorStatus: 'random'
  },
  {
    msgNr: 69,
    OriginalMessage: '    45)    633719.1  Tx         0601  8  60 0A 10 00 00 00 00 00 ',
    CobID: '0601',
    FrameData: '600A100000000000',
    type: 'R_SDO',
    AxisID: 1,
    CS: '60',
    Object: '#x100A',
    ObjectName: 'Software version',
    Data: '00000000',
    Interpretation: 'Request a segmented Read',
    errorStatus: 'neutral'
  },
  {
    msgNr: 70,
    OriginalMessage: '    46)    633720.1  Rx         0581  8  80 18 10 04 00 00 03 05 ',
    CobID: '0581',
    FrameData: '8018100400000305',
    type: 'T_SDO',
    AxisID: 1,
    CS: '80',
    Object: '#x1018_04',
    ObjectName: 'Serial number',
    Data: '05030000',
    Interpretation: 'SDO_Abort: Toggle bit not changed.',
    errorStatus: 'error'
  },
  {
    msgNr: 71,
    OriginalMessage: '    47)   1278768.0  Tx         0601  8  40 08 10 00 00 00 00 00 ',
    CobID: '0601',
    FrameData: '4008100000000000',
    type: 'R_SDO',
    AxisID: 1,
    CS: '40',
    Object: '#x1008',
    ObjectName: 'Device name',
    Data: '-',
    Interpretation: 'Read object #x1008',
    errorStatus: 'perfect'
  },
  {
    msgNr: 72,
    OriginalMessage: '    48)   1278769.0  Rx         0581  8  41 08 10 00 0F 00 00 00 ',
    CobID: '0581',
    FrameData: '410810000F000000',
    type: 'T_SDO',
    AxisID: 1,
    CS: '41',
    Object: '#x1008',
    ObjectName: 'Device name',
    Data: '0000000F',
    Interpretation: 'Use Segmented Reading. There are 15bytes of Info',
    errorStatus: 'neutral'
  },
  {
    msgNr: 73,
    OriginalMessage: '    49)   1284831.0  Tx         0601  8  60 0A 10 00 00 00 00 00 ',
    CobID: '0601',
    FrameData: '600A100000000000',
    type: 'R_SDO',
    AxisID: 1,
    CS: '60',
    Object: '#x100A',
    ObjectName: 'Software version',
    Data: '00000000',
    Interpretation: 'Request a segmented Read',
    errorStatus: 'neutral'
  },
  {
    msgNr: 74,
    OriginalMessage: '    50)   1284832.1  Rx         0581  8  00 69 50 4F 53 20 20 20 ',
    CobID: '0581',
    FrameData: '0069504F53202020',
    type: 'T_SDO',
    AxisID: 1,
    CS: '00',
    Object: '5069_4F',
    ObjectName: 'Nothing Found',
    Data: '20202053',
    Interpretation: '\u0000iPOS   ',
    errorStatus: 'random'
  },
  {
    msgNr: 75,
    OriginalMessage: '    51)   1293569.1  Tx         0601  8  60 00 00 00 00 00 00 00 ',
    CobID: '0601',
    FrameData: '6000000000000000',
    type: 'R_SDO',
    AxisID: 1,
    CS: '60',
    Object: '0000_00',
    ObjectName: 'Nothing Found',
    Data: '00000000',
    Interpretation: 'Request a segmented Read',
    errorStatus: 'neutral'
  },
  {
    msgNr: 76,
    OriginalMessage: '    52)   1293570.2  Rx         0581  8  80 08 10 00 00 00 03 05 ',
    CobID: '0581',
    FrameData: '8008100000000305',
    type: 'T_SDO',
    AxisID: 1,
    CS: '80',
    Object: '#x1008',
    ObjectName: 'Device name',
    Data: '05030000',
    Interpretation: 'SDO_Abort: Toggle bit not changed.',
    errorStatus: 'error'
  },
  {
    msgNr: 77,
    OriginalMessage: '    53)   1296728.1  Tx         0601  8  70 00 00 00 00 00 00 00 ',
    CobID: '0601',
    FrameData: '7000000000000000',
    type: 'R_SDO',
    AxisID: 1,
    CS: '70',
    Object: '0000_00',
    ObjectName: 'Nothing Found',
    Data: '00000000',
    Interpretation: 'Request a segmented Read',
    errorStatus: 'neutral'
  },
  {
    msgNr: 78,
    OriginalMessage: '    54)   1296729.2  Rx         0581  8  80 08 10 00 00 00 03 05 ',
    CobID: '0581',
    FrameData: '8008100000000305',
    type: 'T_SDO',
    AxisID: 1,
    CS: '80',
    Object: '#x1008',
    ObjectName: 'Device name',
    Data: '05030000',
    Interpretation: 'SDO_Abort: Toggle bit not changed.',
    errorStatus: 'error'
  },
  {
    msgNr: 79,
    OriginalMessage: '    55)   1297944.2  Tx         0601  8  70 00 00 00 00 00 00 00 ',
    CobID: '0601',
    FrameData: '7000000000000000',
    type: 'R_SDO',
    AxisID: 1,
    CS: '70',
    Object: '0000_00',
    ObjectName: 'Nothing Found',
    Data: '00000000',
    Interpretation: 'Request a segmented Read',
    errorStatus: 'neutral'
  },
  {
    msgNr: 80,
    OriginalMessage: '    56)   1297945.3  Rx         0581  8  80 08 10 00 00 00 03 05 ',
    CobID: '0581',
    FrameData: '8008100000000305',
    type: 'T_SDO',
    AxisID: 1,
    CS: '80',
    Object: '#x1008',
    ObjectName: 'Device name',
    Data: '05030000',
    Interpretation: 'SDO_Abort: Toggle bit not changed.',
    errorStatus: 'error'
  },
  {
    msgNr: 81,
    OriginalMessage: '    57)   1306036.1  Tx         0601  8  40 08 10 00 00 00 00 00 ',
    CobID: '0601',
    FrameData: '4008100000000000',
    type: 'R_SDO',
    AxisID: 1,
    CS: '40',
    Object: '#x1008',
    ObjectName: 'Device name',
    Data: '-',
    Interpretation: 'Read object #x1008',
    errorStatus: 'perfect'
  },
  {
    msgNr: 82,
    OriginalMessage: '    58)   1306037.3  Rx         0581  8  41 08 10 00 0F 00 00 00 ',
    CobID: '0581',
    FrameData: '410810000F000000',
    type: 'T_SDO',
    AxisID: 1,
    CS: '41',
    Object: '#x1008',
    ObjectName: 'Device name',
    Data: '0000000F',
    Interpretation: 'Use Segmented Reading. There are 15bytes of Info',
    errorStatus: 'neutral'
  },
  {
    msgNr: 83,
    OriginalMessage: '    59)   1309877.4  Tx         0601  8  60 0A 10 00 00 00 00 00 ',
    CobID: '0601',
    FrameData: '600A100000000000',
    type: 'R_SDO',
    AxisID: 1,
    CS: '60',
    Object: '#x100A',
    ObjectName: 'Software version',
    Data: '00000000',
    Interpretation: 'Request a segmented Read',
    errorStatus: 'neutral'
  },
  {
    msgNr: 84,
    OriginalMessage: '    60)   1309878.4  Rx         0581  8  00 69 50 4F 53 20 20 20 ',
    CobID: '0581',
    FrameData: '0069504F53202020',
    type: 'T_SDO',
    AxisID: 1,
    CS: '00',
    Object: '5069_4F',
    ObjectName: 'Nothing Found',
    Data: '20202053',
    Interpretation: '\u0000iPOS   ',
    errorStatus: 'random'
  },
  {
    msgNr: 85,
    OriginalMessage: '    61)   1312873.9  Tx         0601  8  70 00 00 00 00 00 00 00 ',
    CobID: '0601',
    FrameData: '7000000000000000',
    type: 'R_SDO',
    AxisID: 1,
    CS: '70',
    Object: '0000_00',
    ObjectName: 'Nothing Found',
    Data: '00000000',
    Interpretation: 'Request a segmented Read',
    errorStatus: 'neutral'
  },
  {
    msgNr: 86,
    OriginalMessage: '    62)   1312875.0  Rx         0581  8  10 20 20 20 20 20 20 20',
    CobID: '0581',
    FrameData: '1020202020202020',
    type: 'T_SDO',
    AxisID: 1,
    CS: '10',
    Object: '2020_20',
    ObjectName: 'Nothing Found',
    Data: '20202020',
    Interpretation: '\u0010       ',
    errorStatus: 'random'
  },
  {
    msgNr: 87,
    OriginalMessage: '    //====== Testing Mapping AXIS 4 ======',
    CobID: 'invalid',
    FrameData: 'invalid',
    type: 'invalid',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 88,
    OriginalMessage:
      '    Line     35:     19)     25901.1  Rx         0604  8  40 02 10 00 00 00 00 00 ',
    CobID: '0604',
    FrameData: '4002100000000000',
    type: 'R_SDO',
    AxisID: 4,
    CS: '40',
    Object: '#x1002',
    ObjectName: 'Manufacturer status register',
    Data: '-',
    Interpretation: 'Read object #x1002',
    errorStatus: 'perfect'
  },
  {
    msgNr: 89,
    OriginalMessage:
      '    Line     37:     21)     25901.7  Rx         0584  8  43 02 10 00 50 02 1F 02 ',
    CobID: '0584',
    FrameData: '4302100050021F02',
    type: 'T_SDO',
    AxisID: 4,
    CS: '43',
    Object: '#x1002',
    ObjectName: 'Manufacturer status register',
    Data: '021F0250',
    Interpretation: 'Read: #x1002 -> 021F0250h',
    errorStatus: 'neutral'
  },
  {
    msgNr: 90,
    OriginalMessage:
      '    Line     41:     25)     25903.6  Rx         0604  8  40 61 60 00 00 00 00 00 ',
    CobID: '0604',
    FrameData: '4061600000000000',
    type: 'R_SDO',
    AxisID: 4,
    CS: '40',
    Object: '#x6061',
    ObjectName: 'Modes of operation display',
    Data: '-',
    Interpretation: 'Read object #x6061',
    errorStatus: 'perfect'
  },
  {
    msgNr: 91,
    OriginalMessage:
      '    Line     44:     28)     25904.2  Rx         0584  8  4F 61 60 00 00 00 00 00 ',
    CobID: '0584',
    FrameData: '4F61600000000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '4F',
    Object: '#x6061',
    ObjectName: 'Modes of operation display',
    Data: '00',
    Interpretation: 'Reserved',
    errorStatus: 'blue'
  },
  {
    msgNr: 92,
    OriginalMessage:
      '    Line     49:     33)     25906.1  Rx         0604  8  40 64 60 00 00 00 00 00 ',
    CobID: '0604',
    FrameData: '4064600000000000',
    type: 'R_SDO',
    AxisID: 4,
    CS: '40',
    Object: '#x6064',
    ObjectName: 'Position actual value',
    Data: '-',
    Interpretation: 'Read object #x6064',
    errorStatus: 'perfect'
  },
  {
    msgNr: 93,
    OriginalMessage:
      '    Line     51:     35)     25906.8  Rx         0584  8  43 64 60 00 00 00 00 00 ',
    CobID: '0584',
    FrameData: '4364600000000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '43',
    Object: '#x6064',
    ObjectName: 'Position actual value',
    Data: '00000000',
    Interpretation: '0 IU',
    errorStatus: 'blue'
  },
  {
    msgNr: 94,
    OriginalMessage:
      '    Line     58:     42)     25909.0  Rx         0604  8  23 00 18 01 84 01 00 80 ',
    CobID: '0604',
    FrameData: '2300180184010080',
    type: 'R_SDO',
    AxisID: 4,
    CS: '23',
    Object: '#x1800_01',
    ObjectName: 'COB-ID TPDO1',
    Data: '80000184',
    Interpretation: 'Disable [184h]',
    errorStatus: 'blue'
  },
  {
    msgNr: 95,
    OriginalMessage:
      '    Line     59:     43)     25909.4  Rx         0584  8  60 00 18 01 00 00 00 00 ',
    CobID: '0584',
    FrameData: '6000180100000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1800_01',
    ObjectName: 'COB-ID TPDO1',
    Data: '-',
    Interpretation: 'Writing in #x1800_01 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 96,
    OriginalMessage:
      '    Line     63:     47)     25910.9  Rx         0604  8  2F 00 1A 00 00 00 00 00 ',
    CobID: '0604',
    FrameData: '2F001A0000000000',
    type: 'R_SDO',
    AxisID: 4,
    CS: '2F',
    Object: '#x1A00_00',
    ObjectName: 'Number of mapped objects',
    Data: '00',
    Interpretation: '[184h] - Nr of mapped objects : 00',
    errorStatus: 'blue'
  },
  {
    msgNr: 97,
    OriginalMessage:
      '    Line     65:     49)     25911.3  Rx         0584  8  60 00 1A 00 00 00 00 00 ',
    CobID: '0584',
    FrameData: '60001A0000000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1A00_00',
    ObjectName: 'Number of mapped objects',
    Data: '-',
    Interpretation: 'Writing in #x1A00_00 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 98,
    OriginalMessage:
      '    Line     71:     55)     26246.7  Rx         0604  8  23 00 1A 01 20 00 02 10 ',
    CobID: '0604',
    FrameData: '23001A0120000210',
    type: 'R_SDO',
    AxisID: 4,
    CS: '23',
    Object: '#x1A00_01',
    ObjectName: '1st mapped object',
    Data: '10020020',
    Interpretation: '[184h][1] - #x1002 - Manufacturer status register',
    errorStatus: 'blue'
  },
  {
    msgNr: 99,
    OriginalMessage:
      '    Line     72:     56)     26247.0  Rx         0584  8  60 00 1A 01 00 00 00 00 ',
    CobID: '0584',
    FrameData: '60001A0100000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1A00_01',
    ObjectName: '1st mapped object',
    Data: '-',
    Interpretation: 'Writing in #x1A00_01 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 100,
    OriginalMessage:
      '    Line     77:     61)     26250.6  Rx         0604  8  23 00 1A 02 10 00 00 20 ',
    CobID: '0604',
    FrameData: '23001A0210000020',
    type: 'R_SDO',
    AxisID: 4,
    CS: '23',
    Object: '#x1A00_02',
    ObjectName: '2nd mapped object',
    Data: '20000010',
    Interpretation: '[184h][2] - #x2000 - Motion Error Register',
    errorStatus: 'blue'
  },
  {
    msgNr: 101,
    OriginalMessage:
      '    Line     79:     63)     26251.2  Rx         0584  8  60 00 1A 02 00 00 00 00 ',
    CobID: '0584',
    FrameData: '60001A0200000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1A00_02',
    ObjectName: '2nd mapped object',
    Data: '-',
    Interpretation: 'Writing in #x1A00_02 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 102,
    OriginalMessage:
      '    Line     85:     69)     26253.6  Rx         0604  8  23 00 1A 03 08 00 61 60 ',
    CobID: '0604',
    FrameData: '23001A0308006160',
    type: 'R_SDO',
    AxisID: 4,
    CS: '23',
    Object: '#x1A00_03',
    ObjectName: '3rd mapped object',
    Data: '60610008',
    Interpretation: '[184h][3] - #x6061 - Modes of operation display',
    errorStatus: 'blue'
  },
  {
    msgNr: 103,
    OriginalMessage:
      '    Line     86:     70)     26254.0  Rx         0584  8  60 00 1A 03 00 00 00 00 ',
    CobID: '0584',
    FrameData: '60001A0300000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1A00_03',
    ObjectName: '3rd mapped object',
    Data: '-',
    Interpretation: 'Writing in #x1A00_03 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 104,
    OriginalMessage:
      '    Line     88:     72)     26261.2  Rx         0604  8  2F 00 1A 00 03 00 00 00 ',
    CobID: '0604',
    FrameData: '2F001A0003000000',
    type: 'R_SDO',
    AxisID: 4,
    CS: '2F',
    Object: '#x1A00_00',
    ObjectName: 'Number of mapped objects',
    Data: '03',
    Interpretation: '[184h] - Nr of mapped objects : 03',
    errorStatus: 'blue'
  },
  {
    msgNr: 105,
    OriginalMessage:
      '    Line     91:     75)     26262.1  Rx         0584  8  60 00 1A 00 00 00 00 00 ',
    CobID: '0584',
    FrameData: '60001A0000000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1A00_00',
    ObjectName: 'Number of mapped objects',
    Data: '-',
    Interpretation: 'Writing in #x1A00_00 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 106,
    OriginalMessage:
      '    Line     94:     78)     26265.1  Rx         0604  8  2F 00 18 02 FF 00 00 00 ',
    CobID: '0604',
    FrameData: '2F001802FF000000',
    type: 'R_SDO',
    AxisID: 4,
    CS: '2F',
    Object: '#x1800_02',
    ObjectName: 'Transmission type',
    Data: 'FF',
    Interpretation: '[184h] - Event-driven (asynchronous)',
    errorStatus: 'blue'
  },
  {
    msgNr: 107,
    OriginalMessage:
      '    Line     95:     79)     26265.7  Rx         0584  8  60 00 18 02 00 00 00 00 ',
    CobID: '0584',
    FrameData: '6000180200000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1800_02',
    ObjectName: 'Transmission type',
    Data: '-',
    Interpretation: 'Writing in #x1800_02 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 108,
    OriginalMessage:
      '    Line    100:     84)     26267.8  Rx         0604  8  2B 00 18 03 E8 03 00 00 ',
    CobID: '0604',
    FrameData: '2B001803E8030000',
    type: 'R_SDO',
    AxisID: 4,
    CS: '2B',
    Object: '#x1800_03',
    ObjectName: 'Inhibit time',
    Data: '03E8',
    Interpretation: '[184h] - Inhibit time : 100ms',
    errorStatus: 'blue'
  },
  {
    msgNr: 109,
    OriginalMessage:
      '    Line    101:     85)     26268.2  Rx         0584  8  60 00 18 03 00 00 00 00 ',
    CobID: '0584',
    FrameData: '6000180300000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1800_03',
    ObjectName: 'Inhibit time',
    Data: '-',
    Interpretation: 'Writing in #x1800_03 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 110,
    OriginalMessage:
      '    Line    106:     90)     26269.7  Rx         0604  8  23 00 18 01 84 01 00 00 ',
    CobID: '0604',
    FrameData: '2300180184010000',
    type: 'R_SDO',
    AxisID: 4,
    CS: '23',
    Object: '#x1800_01',
    ObjectName: 'COB-ID TPDO1',
    Data: '00000184',
    Interpretation: 'Enable [184h]',
    errorStatus: 'blue'
  },
  {
    msgNr: 111,
    OriginalMessage:
      '    Line    107:     91)     26270.2  Rx         0584  8  60 00 18 01 00 00 00 00 ',
    CobID: '0584',
    FrameData: '6000180100000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1800_01',
    ObjectName: 'COB-ID TPDO1',
    Data: '-',
    Interpretation: 'Writing in #x1800_01 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 112,
    OriginalMessage:
      '    Line    112:     96)     26272.2  Rx         0604  8  23 01 18 01 84 02 00 80 ',
    CobID: '0604',
    FrameData: '2301180184020080',
    type: 'R_SDO',
    AxisID: 4,
    CS: '23',
    Object: '#x1801_01',
    ObjectName: 'COB-ID TPDO2',
    Data: '80000284',
    Interpretation: 'Disable [284h]',
    errorStatus: 'blue'
  },
  {
    msgNr: 113,
    OriginalMessage:
      '    Line    113:     97)     26272.6  Rx         0584  8  60 01 18 01 00 00 00 00 ',
    CobID: '0584',
    FrameData: '6001180100000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1801_01',
    ObjectName: 'COB-ID TPDO2',
    Data: '-',
    Interpretation: 'Writing in #x1801_01 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 114,
    OriginalMessage:
      '    Line    119:    103)     26607.8  Rx         0604  8  2F 01 1A 00 00 00 00 00 ',
    CobID: '0604',
    FrameData: '2F011A0000000000',
    type: 'R_SDO',
    AxisID: 4,
    CS: '2F',
    Object: '#x1A01_00',
    ObjectName: 'Number of mapped objects',
    Data: '00',
    Interpretation: '[284h] - Nr of mapped objects : 00',
    errorStatus: 'blue'
  },
  {
    msgNr: 115,
    OriginalMessage:
      '    Line    120:    104)     26608.2  Rx         0584  8  60 01 1A 00 00 00 00 00 ',
    CobID: '0584',
    FrameData: '60011A0000000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1A01_00',
    ObjectName: 'Number of mapped objects',
    Data: '-',
    Interpretation: 'Writing in #x1A01_00 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 116,
    OriginalMessage:
      '    Line    123:    107)     26609.3  Rx         0604  8  23 01 1A 01 20 00 64 60 ',
    CobID: '0604',
    FrameData: '23011A0120006460',
    type: 'R_SDO',
    AxisID: 4,
    CS: '23',
    Object: '#x1A01_01',
    ObjectName: '1st mapped object',
    Data: '60640020',
    Interpretation: '[284h][1] - #x6064 - Position actual value',
    errorStatus: 'blue'
  },
  {
    msgNr: 117,
    OriginalMessage:
      '    Line    126:    110)     26610.0  Rx         0584  8  60 01 1A 01 00 00 00 00 ',
    CobID: '0584',
    FrameData: '60011A0100000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1A01_01',
    ObjectName: '1st mapped object',
    Data: '-',
    Interpretation: 'Writing in #x1A01_01 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 118,
    OriginalMessage:
      '    Line    130:    114)     26611.4  Rx         0604  8  23 01 1A 02 20 00 6C 60 ',
    CobID: '0604',
    FrameData: '23011A0220006C60',
    type: 'R_SDO',
    AxisID: 4,
    CS: '23',
    Object: '#x1A01_02',
    ObjectName: '2nd mapped object',
    Data: '606C0020',
    Interpretation: '[284h][2] - #x606C - Velocity actual value',
    errorStatus: 'blue'
  },
  {
    msgNr: 119,
    OriginalMessage:
      '    Line    133:    117)     26612.0  Rx         0584  8  60 01 1A 02 00 00 00 00 ',
    CobID: '0584',
    FrameData: '60011A0200000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1A01_02',
    ObjectName: '2nd mapped object',
    Data: '-',
    Interpretation: 'Writing in #x1A01_02 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 120,
    OriginalMessage:
      '    Line    136:    120)     26613.0  Rx         0604  8  2F 01 1A 00 02 00 00 00 ',
    CobID: '0604',
    FrameData: '2F011A0002000000',
    type: 'R_SDO',
    AxisID: 4,
    CS: '2F',
    Object: '#x1A01_00',
    ObjectName: 'Number of mapped objects',
    Data: '02',
    Interpretation: '[284h] - Nr of mapped objects : 02',
    errorStatus: 'blue'
  },
  {
    msgNr: 121,
    OriginalMessage:
      '    Line    140:    124)     26614.0  Rx         0584  8  60 01 1A 00 00 00 00 00 ',
    CobID: '0584',
    FrameData: '60011A0000000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1A01_00',
    ObjectName: 'Number of mapped objects',
    Data: '-',
    Interpretation: 'Writing in #x1A01_00 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 122,
    OriginalMessage:
      '    Line    143:    127)     26614.7  Rx         0604  8  2F 01 18 02 02 00 00 00 ',
    CobID: '0604',
    FrameData: '2F01180202000000',
    type: 'R_SDO',
    AxisID: 4,
    CS: '2F',
    Object: '#x1801_02',
    ObjectName: 'Transmission type',
    Data: '02',
    Interpretation: '[284h] - synchronous( cyclic every 2 SYNC)',
    errorStatus: 'blue'
  },
  {
    msgNr: 123,
    OriginalMessage:
      '    Line    145:    129)     26615.2  Rx         0584  8  60 01 18 02 00 00 00 00 ',
    CobID: '0584',
    FrameData: '6001180200000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1801_02',
    ObjectName: 'Transmission type',
    Data: '-',
    Interpretation: 'Writing in #x1801_02 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 124,
    OriginalMessage:
      '    Line    152:    136)     26618.1  Rx         0604  8  23 01 18 01 84 02 00 00 ',
    CobID: '0604',
    FrameData: '2301180184020000',
    type: 'R_SDO',
    AxisID: 4,
    CS: '23',
    Object: '#x1801_01',
    ObjectName: 'COB-ID TPDO2',
    Data: '00000284',
    Interpretation: 'Enable [284h]',
    errorStatus: 'blue'
  },
  {
    msgNr: 125,
    OriginalMessage:
      '    Line    154:    138)     26618.6  Rx         0584  8  60 01 18 01 00 00 00 00 ',
    CobID: '0584',
    FrameData: '6001180100000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1801_01',
    ObjectName: 'COB-ID TPDO2',
    Data: '-',
    Interpretation: 'Writing in #x1801_01 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 126,
    OriginalMessage:
      '    Line    159:    143)     26620.4  Rx         0604  8  23 00 14 01 04 02 00 80 ',
    CobID: '0604',
    FrameData: '2300140104020080',
    type: 'R_SDO',
    AxisID: 4,
    CS: '23',
    Object: '#x1400_01',
    ObjectName: 'COB-ID RPDO1',
    Data: '80000204',
    Interpretation: 'Disable [204h]',
    errorStatus: 'blue'
  },
  {
    msgNr: 127,
    OriginalMessage:
      '    Line    161:    145)     26620.8  Rx         0584  8  60 00 14 01 00 00 00 00 ',
    CobID: '0584',
    FrameData: '6000140100000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1400_01',
    ObjectName: 'COB-ID RPDO1',
    Data: '-',
    Interpretation: 'Writing in #x1400_01 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 128,
    OriginalMessage:
      '    Line    167:    151)     26955.8  Rx         0604  8  2F 00 16 00 00 00 00 00 ',
    CobID: '0604',
    FrameData: '2F00160000000000',
    type: 'R_SDO',
    AxisID: 4,
    CS: '2F',
    Object: '#x1600_00',
    ObjectName: 'Number of mapped objects',
    Data: '00',
    Interpretation: '[204h] - Nr of mapped objects : 00',
    errorStatus: 'blue'
  },
  {
    msgNr: 129,
    OriginalMessage:
      '    Line    168:    152)     26956.2  Rx         0584  8  60 00 16 00 00 00 00 00 ',
    CobID: '0584',
    FrameData: '6000160000000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1600_00',
    ObjectName: 'Number of mapped objects',
    Data: '-',
    Interpretation: 'Writing in #x1600_00 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 130,
    OriginalMessage:
      '    Line    176:    160)     26958.4  Rx         0604  8  23 00 16 01 10 00 40 60 ',
    CobID: '0604',
    FrameData: '2300160110004060',
    type: 'R_SDO',
    AxisID: 4,
    CS: '23',
    Object: '#x1600_01',
    ObjectName: '1st mapped object',
    Data: '60400010',
    Interpretation: '[204h][1] - #x6040 - Controlword',
    errorStatus: 'blue'
  },
  {
    msgNr: 131,
    OriginalMessage:
      '    Line    179:    163)     26958.9  Rx         0584  8  60 00 16 01 00 00 00 00 ',
    CobID: '0584',
    FrameData: '6000160100000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1600_01',
    ObjectName: '1st mapped object',
    Data: '-',
    Interpretation: 'Writing in #x1600_01 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 132,
    OriginalMessage:
      '    Line    184:    168)     26960.2  Rx         0604  8  2F 00 16 00 01 00 00 00 ',
    CobID: '0604',
    FrameData: '2F00160001000000',
    type: 'R_SDO',
    AxisID: 4,
    CS: '2F',
    Object: '#x1600_00',
    ObjectName: 'Number of mapped objects',
    Data: '01',
    Interpretation: '[204h] - Nr of mapped objects : 01',
    errorStatus: 'blue'
  },
  {
    msgNr: 133,
    OriginalMessage:
      '    Line    185:    169)     26960.8  Rx         0584  8  60 00 16 00 00 00 00 00 ',
    CobID: '0584',
    FrameData: '6000160000000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1600_00',
    ObjectName: 'Number of mapped objects',
    Data: '-',
    Interpretation: 'Writing in #x1600_00 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 134,
    OriginalMessage:
      '    Line    190:    174)     26962.6  Rx         0604  8  2F 00 14 02 FF 00 00 00 ',
    CobID: '0604',
    FrameData: '2F001402FF000000',
    type: 'R_SDO',
    AxisID: 4,
    CS: '2F',
    Object: '#x1400_02',
    ObjectName: 'Transmission type',
    Data: 'FF',
    Interpretation:
      '[204h] - Asynchronous: the PDO will be sent every time anything changes in its data field',
    errorStatus: 'blue'
  },
  {
    msgNr: 135,
    OriginalMessage:
      '    Line    191:    175)     26963.0  Rx         0584  8  60 00 14 02 00 00 00 00 ',
    CobID: '0584',
    FrameData: '6000140200000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1400_02',
    ObjectName: 'Transmission type',
    Data: '-',
    Interpretation: 'Writing in #x1400_02 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 136,
    OriginalMessage:
      '    Line    195:    179)     26964.3  Rx         0604  8  23 00 14 01 04 02 00 00 ',
    CobID: '0604',
    FrameData: '2300140104020000',
    type: 'R_SDO',
    AxisID: 4,
    CS: '23',
    Object: '#x1400_01',
    ObjectName: 'COB-ID RPDO1',
    Data: '00000204',
    Interpretation: 'Enable [204h]',
    errorStatus: 'blue'
  },
  {
    msgNr: 137,
    OriginalMessage:
      '    Line    197:    181)     26964.8  Rx         0584  8  60 00 14 01 00 00 00 00 ',
    CobID: '0584',
    FrameData: '6000140100000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1400_01',
    ObjectName: 'COB-ID RPDO1',
    Data: '-',
    Interpretation: 'Writing in #x1400_01 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 138,
    OriginalMessage:
      '    Line    201:    185)     26966.4  Rx         0604  8  23 02 18 01 84 03 00 80 ',
    CobID: '0604',
    FrameData: '2302180184030080',
    type: 'R_SDO',
    AxisID: 4,
    CS: '23',
    Object: '#x1802_01',
    ObjectName: 'COB-ID TPDO3',
    Data: '80000384',
    Interpretation: 'Disable [384h]',
    errorStatus: 'blue'
  },
  {
    msgNr: 139,
    OriginalMessage:
      '    Line    203:    187)     26966.8  Rx         0584  8  60 02 18 01 00 00 00 00 ',
    CobID: '0584',
    FrameData: '6002180100000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1802_01',
    ObjectName: 'COB-ID TPDO3',
    Data: '-',
    Interpretation: 'Writing in #x1802_01 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 140,
    OriginalMessage:
      '    Line    207:    191)     26968.3  Rx         0604  8  2F 02 1A 00 00 00 00 00 ',
    CobID: '0604',
    FrameData: '2F021A0000000000',
    type: 'R_SDO',
    AxisID: 4,
    CS: '2F',
    Object: '#x1A02_00',
    ObjectName: 'Number of mapped objects',
    Data: '00',
    Interpretation: '[384h] - Nr of mapped objects : 00',
    errorStatus: 'blue'
  },
  {
    msgNr: 141,
    OriginalMessage:
      '    Line    209:    193)     26968.8  Rx         0584  8  60 02 1A 00 00 00 00 00 ',
    CobID: '0584',
    FrameData: '60021A0000000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1A02_00',
    ObjectName: 'Number of mapped objects',
    Data: '-',
    Interpretation: 'Writing in #x1A02_00 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 142,
    OriginalMessage:
      '    Line    213:    197)     27303.7  Rx         0604  8  23 02 1A 01 10 00 72 20 ',
    CobID: '0604',
    FrameData: '23021A0110007220',
    type: 'R_SDO',
    AxisID: 4,
    CS: '23',
    Object: '#x1A02_01',
    ObjectName: '1st mapped object',
    Data: '20720010',
    Interpretation: '[384h][1] - #x2072 - Interpolated position mode status',
    errorStatus: 'blue'
  },
  {
    msgNr: 143,
    OriginalMessage:
      '    Line    216:    200)     27304.2  Rx         0584  8  60 02 1A 01 00 00 00 00 ',
    CobID: '0584',
    FrameData: '60021A0100000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1A02_01',
    ObjectName: '1st mapped object',
    Data: '-',
    Interpretation: 'Writing in #x1A02_01 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 144,
    OriginalMessage:
      '    Line    220:    204)     27306.0  Rx         0604  8  2F 02 1A 00 01 00 00 00 ',
    CobID: '0604',
    FrameData: '2F021A0001000000',
    type: 'R_SDO',
    AxisID: 4,
    CS: '2F',
    Object: '#x1A02_00',
    ObjectName: 'Number of mapped objects',
    Data: '01',
    Interpretation: '[384h] - Nr of mapped objects : 01',
    errorStatus: 'blue'
  },
  {
    msgNr: 145,
    OriginalMessage:
      '    Line    224:    208)     27306.8  Rx         0584  8  60 02 1A 00 00 00 00 00 ',
    CobID: '0584',
    FrameData: '60021A0000000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1A02_00',
    ObjectName: 'Number of mapped objects',
    Data: '-',
    Interpretation: 'Writing in #x1A02_00 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 146,
    OriginalMessage:
      '    Line    228:    212)     27308.3  Rx         0604  8  2F 02 18 02 FF 00 00 00 ',
    CobID: '0604',
    FrameData: '2F021802FF000000',
    type: 'R_SDO',
    AxisID: 4,
    CS: '2F',
    Object: '#x1802_02',
    ObjectName: 'Transmission type',
    Data: 'FF',
    Interpretation: '[384h] - Event-driven (asynchronous)',
    errorStatus: 'blue'
  },
  {
    msgNr: 147,
    OriginalMessage:
      '    Line    231:    215)     27308.8  Rx         0584  8  60 02 18 02 00 00 00 00 ',
    CobID: '0584',
    FrameData: '6002180200000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1802_02',
    ObjectName: 'Transmission type',
    Data: '-',
    Interpretation: 'Writing in #x1802_02 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 148,
    OriginalMessage:
      '    Line    234:    218)     27310.1  Rx         0604  8  2B 02 18 03 32 00 00 00 ',
    CobID: '0604',
    FrameData: '2B02180332000000',
    type: 'R_SDO',
    AxisID: 4,
    CS: '2B',
    Object: '#x1802_03',
    ObjectName: 'Inhibit time',
    Data: '0032',
    Interpretation: '[384h] - Inhibit time : 5ms',
    errorStatus: 'blue'
  },
  {
    msgNr: 149,
    OriginalMessage:
      '    Line    237:    221)     27310.6  Rx         0584  8  60 02 18 03 00 00 00 00 ',
    CobID: '0584',
    FrameData: '6002180300000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1802_03',
    ObjectName: 'Inhibit time',
    Data: '-',
    Interpretation: 'Writing in #x1802_03 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 150,
    OriginalMessage:
      '    Line    242:    226)     27312.7  Rx         0604  8  23 02 18 01 84 03 00 00 ',
    CobID: '0604',
    FrameData: '2302180184030000',
    type: 'R_SDO',
    AxisID: 4,
    CS: '23',
    Object: '#x1802_01',
    ObjectName: 'COB-ID TPDO3',
    Data: '00000384',
    Interpretation: 'Enable [384h]',
    errorStatus: 'blue'
  },
  {
    msgNr: 151,
    OriginalMessage:
      '    Line    243:    227)     27313.2  Rx         0584  8  60 02 18 01 00 00 00 00 ',
    CobID: '0584',
    FrameData: '6002180100000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1802_01',
    ObjectName: 'COB-ID TPDO3',
    Data: '-',
    Interpretation: 'Writing in #x1802_01 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 152,
    OriginalMessage:
      '    Line    248:    232)     27314.6  Rx         0604  8  23 01 14 01 04 03 00 80 ',
    CobID: '0604',
    FrameData: '2301140104030080',
    type: 'R_SDO',
    AxisID: 4,
    CS: '23',
    Object: '#x1401_01',
    ObjectName: 'COB-ID RPDO2',
    Data: '80000304',
    Interpretation: 'Disable [304h]',
    errorStatus: 'blue'
  },
  {
    msgNr: 153,
    OriginalMessage:
      '    Line    249:    233)     27315.0  Rx         0584  8  60 01 14 01 00 00 00 00 ',
    CobID: '0584',
    FrameData: '6001140100000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1401_01',
    ObjectName: 'COB-ID RPDO2',
    Data: '-',
    Interpretation: 'Writing in #x1401_01 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 154,
    OriginalMessage:
      '    Line    254:    238)     27316.8  Rx         0604  8  2F 01 16 00 00 00 00 00 ',
    CobID: '0604',
    FrameData: '2F01160000000000',
    type: 'R_SDO',
    AxisID: 4,
    CS: '2F',
    Object: '#x1601_00',
    ObjectName: 'Number of mapped objects',
    Data: '00',
    Interpretation: '[304h] - Nr of mapped objects : 00',
    errorStatus: 'blue'
  },
  {
    msgNr: 155,
    OriginalMessage:
      '    Line    255:    239)     27317.2  Rx         0584  8  60 01 16 00 00 00 00 00 ',
    CobID: '0584',
    FrameData: '6001160000000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1601_00',
    ObjectName: 'Number of mapped objects',
    Data: '-',
    Interpretation: 'Writing in #x1601_00 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 156,
    OriginalMessage:
      '    Line    260:    244)     27652.0  Rx         0604  8  23 01 16 01 20 01 C1 60 ',
    CobID: '0604',
    FrameData: '230116012001C160',
    type: 'R_SDO',
    AxisID: 4,
    CS: '23',
    Object: '#x1601_01',
    ObjectName: '1st mapped object',
    Data: '60C10120',
    Interpretation: '[304h][1] - #x60C1_01 - X1: the first parameter of ip function',
    errorStatus: 'blue'
  },
  {
    msgNr: 157,
    OriginalMessage:
      '    Line    262:    246)     27652.6  Rx         0584  8  60 01 16 01 00 00 00 00 ',
    CobID: '0584',
    FrameData: '6001160100000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1601_01',
    ObjectName: '1st mapped object',
    Data: '-',
    Interpretation: 'Writing in #x1601_01 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 158,
    OriginalMessage:
      '    Line    267:    251)     27653.9  Rx         0604  8  23 01 16 02 20 02 C1 60 ',
    CobID: '0604',
    FrameData: '230116022002C160',
    type: 'R_SDO',
    AxisID: 4,
    CS: '23',
    Object: '#x1601_02',
    ObjectName: '2nd mapped object',
    Data: '60C10220',
    Interpretation: '[304h][2] - #x60C1_02 - X2: the second parameter of ip function',
    errorStatus: 'blue'
  },
  {
    msgNr: 159,
    OriginalMessage:
      '    Line    268:    252)     27654.4  Rx         0584  8  60 01 16 02 00 00 00 00 ',
    CobID: '0584',
    FrameData: '6001160200000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1601_02',
    ObjectName: '2nd mapped object',
    Data: '-',
    Interpretation: 'Writing in #x1601_02 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 160,
    OriginalMessage:
      '    Line    274:    258)     27655.9  Rx         0604  8  2F 01 16 00 02 00 00 00 ',
    CobID: '0604',
    FrameData: '2F01160002000000',
    type: 'R_SDO',
    AxisID: 4,
    CS: '2F',
    Object: '#x1601_00',
    ObjectName: 'Number of mapped objects',
    Data: '02',
    Interpretation: '[304h] - Nr of mapped objects : 02',
    errorStatus: 'blue'
  },
  {
    msgNr: 161,
    OriginalMessage:
      '    Line    277:    261)     27656.7  Rx         0584  8  60 01 16 00 00 00 00 00 ',
    CobID: '0584',
    FrameData: '6001160000000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1601_00',
    ObjectName: 'Number of mapped objects',
    Data: '-',
    Interpretation: 'Writing in #x1601_00 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 162,
    OriginalMessage:
      '    Line    280:    264)     27657.4  Rx         0604  8  2F 01 14 02 FF 00 00 00 ',
    CobID: '0604',
    FrameData: '2F011402FF000000',
    type: 'R_SDO',
    AxisID: 4,
    CS: '2F',
    Object: '#x1401_02',
    ObjectName: 'Transmission type',
    Data: 'FF',
    Interpretation:
      '[304h] - Asynchronous: the PDO will be sent every time anything changes in its data field',
    errorStatus: 'blue'
  },
  {
    msgNr: 163,
    OriginalMessage:
      '    Line    282:    266)     27657.9  Rx         0584  8  60 01 14 02 00 00 00 00 ',
    CobID: '0584',
    FrameData: '6001140200000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1401_02',
    ObjectName: 'Transmission type',
    Data: '-',
    Interpretation: 'Writing in #x1401_02 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 164,
    OriginalMessage:
      '    Line    287:    271)     27659.1  Rx         0604  8  23 01 14 01 04 03 00 00 ',
    CobID: '0604',
    FrameData: '2301140104030000',
    type: 'R_SDO',
    AxisID: 4,
    CS: '23',
    Object: '#x1401_01',
    ObjectName: 'COB-ID RPDO2',
    Data: '00000304',
    Interpretation: 'Enable [304h]',
    errorStatus: 'blue'
  },
  {
    msgNr: 165,
    OriginalMessage:
      '    Line    288:    272)     27659.6  Rx         0584  8  60 01 14 01 00 00 00 00 ',
    CobID: '0584',
    FrameData: '6001140100000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1401_01',
    ObjectName: 'COB-ID RPDO2',
    Data: '-',
    Interpretation: 'Writing in #x1401_01 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 166,
    OriginalMessage:
      '    Line    293:    277)     27661.1  Rx         0604  8  23 03 18 01 84 04 00 80 ',
    CobID: '0604',
    FrameData: '2303180184040080',
    type: 'R_SDO',
    AxisID: 4,
    CS: '23',
    Object: '#x1803_01',
    ObjectName: 'COB-ID TPDO4',
    Data: '80000484',
    Interpretation: 'Disable [484h]',
    errorStatus: 'blue'
  },
  {
    msgNr: 167,
    OriginalMessage:
      '    Line    295:    279)     27661.9  Rx         0584  8  60 03 18 01 00 00 00 00 ',
    CobID: '0584',
    FrameData: '6003180100000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1803_01',
    ObjectName: 'COB-ID TPDO4',
    Data: '-',
    Interpretation: 'Writing in #x1803_01 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 168,
    OriginalMessage:
      '    Line    299:    283)     27663.0  Rx         0604  8  2F 03 1A 00 00 00 00 00 ',
    CobID: '0604',
    FrameData: '2F031A0000000000',
    type: 'R_SDO',
    AxisID: 4,
    CS: '2F',
    Object: '#x1A03_00',
    ObjectName: 'Number of mapped objects',
    Data: '00',
    Interpretation: '[484h] - Nr of mapped objects : 00',
    errorStatus: 'blue'
  },
  {
    msgNr: 169,
    OriginalMessage:
      '    Line    301:    285)     27663.4  Rx         0584  8  60 03 1A 00 00 00 00 00 ',
    CobID: '0584',
    FrameData: '60031A0000000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1A03_00',
    ObjectName: 'Number of mapped objects',
    Data: '-',
    Interpretation: 'Writing in #x1A03_00 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 170,
    OriginalMessage:
      '    Line    305:    289)     27664.8  Rx         0604  8  23 03 1A 01 10 00 77 60 ',
    CobID: '0604',
    FrameData: '23031A0110007760',
    type: 'R_SDO',
    AxisID: 4,
    CS: '23',
    Object: '#x1A03_01',
    ObjectName: '1st mapped object',
    Data: '60770010',
    Interpretation: '[484h][1] - #x6077 - Torque(Current) actual value',
    errorStatus: 'blue'
  },
  {
    msgNr: 171,
    OriginalMessage:
      '    Line    307:    291)     27665.3  Rx         0584  8  60 03 1A 01 00 00 00 00 ',
    CobID: '0584',
    FrameData: '60031A0100000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1A03_01',
    ObjectName: '1st mapped object',
    Data: '-',
    Interpretation: 'Writing in #x1A03_01 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 172,
    OriginalMessage:
      '    Line    311:    295)     27666.4  Rx         0604  8  2F 03 1A 00 01 00 00 00 ',
    CobID: '0604',
    FrameData: '2F031A0001000000',
    type: 'R_SDO',
    AxisID: 4,
    CS: '2F',
    Object: '#x1A03_00',
    ObjectName: 'Number of mapped objects',
    Data: '01',
    Interpretation: '[484h] - Nr of mapped objects : 01',
    errorStatus: 'blue'
  },
  {
    msgNr: 173,
    OriginalMessage:
      '    Line    313:    297)     27667.0  Rx         0584  8  60 03 1A 00 00 00 00 00 ',
    CobID: '0584',
    FrameData: '60031A0000000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1A03_00',
    ObjectName: 'Number of mapped objects',
    Data: '-',
    Interpretation: 'Writing in #x1A03_00 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 174,
    OriginalMessage:
      '    Line    317:    301)     28001.5  Rx         0604  8  2F 03 18 02 05 00 00 00 ',
    CobID: '0604',
    FrameData: '2F03180205000000',
    type: 'R_SDO',
    AxisID: 4,
    CS: '2F',
    Object: '#x1803_02',
    ObjectName: 'Transmission type',
    Data: '05',
    Interpretation: '[484h] - synchronous( cyclic every 5 SYNC)',
    errorStatus: 'blue'
  },
  {
    msgNr: 175,
    OriginalMessage:
      '    Line    318:    302)     28001.9  Rx         0584  8  60 03 18 02 00 00 00 00 ',
    CobID: '0584',
    FrameData: '6003180200000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1803_02',
    ObjectName: 'Transmission type',
    Data: '-',
    Interpretation: 'Writing in #x1803_02 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 176,
    OriginalMessage:
      '    Line    325:    309)     28003.7  Rx         0604  8  23 03 18 01 84 04 00 00 ',
    CobID: '0604',
    FrameData: '2303180184040000',
    type: 'R_SDO',
    AxisID: 4,
    CS: '23',
    Object: '#x1803_01',
    ObjectName: 'COB-ID TPDO4',
    Data: '00000484',
    Interpretation: 'Enable [484h]',
    errorStatus: 'blue'
  },
  {
    msgNr: 177,
    OriginalMessage:
      '    Line    327:    311)     28004.3  Rx         0584  8  60 03 18 01 00 00 00 00 ',
    CobID: '0584',
    FrameData: '6003180100000000',
    type: 'T_SDO',
    AxisID: 4,
    CS: '60',
    Object: '#x1803_01',
    ObjectName: 'COB-ID TPDO4',
    Data: '-',
    Interpretation: 'Writing in #x1803_01 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 178,
    OriginalMessage: '    //====== Testing Mapping AXIS 6 ======',
    CobID: 'invalid',
    FrameData: 'invalid',
    type: 'invalid',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 179,
    OriginalMessage: '    //Interpolation  PVT abs',
    CobID: 'invalid',
    FrameData: 'invalid',
    type: 'invalid',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 180,
    OriginalMessage: '0 01 06',
    CobID: 'invalid',
    FrameData: 'invalid',
    type: 'invalid',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 181,
    OriginalMessage: '206 06 00',
    CobID: '206',
    FrameData: '0600',
    type: 'RPDO1',
    AxisID: 6,
    CS: 1,
    Object: '#x6040',
    ObjectName: 'Controlword',
    Data: '0006',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 182,
    OriginalMessage: '206 07 00',
    CobID: '206',
    FrameData: '0700',
    type: 'RPDO1',
    AxisID: 6,
    CS: 1,
    Object: '#x6040',
    ObjectName: 'Controlword',
    Data: '0007',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 183,
    OriginalMessage: '206 0F 00',
    CobID: '206',
    FrameData: '0F00',
    type: 'RPDO1',
    AxisID: 6,
    CS: 1,
    Object: '#x6040',
    ObjectName: 'Controlword',
    Data: '000F',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 184,
    OriginalMessage: '606 2B 8E 20 00 00 00 00 00',
    CobID: '606',
    FrameData: '2B8E200000000000',
    type: 'R_SDO',
    AxisID: 6,
    CS: '2B',
    Object: '#x208E',
    ObjectName: 'Auxiliary settings register',
    Data: '0000',
    Interpretation: 'Write #208E <- 0000',
    errorStatus: 'random'
  },
  {
    msgNr: 185,
    OriginalMessage: '606 2F 02 16 00 00 00 00 00',
    CobID: '606',
    FrameData: '2F02160000000000',
    type: 'R_SDO',
    AxisID: 6,
    CS: '2F',
    Object: '#x1602_00',
    ObjectName: 'Number of mapped objects',
    Data: '00',
    Interpretation: '[406h] - Nr of mapped objects : 00',
    errorStatus: 'blue'
  },
  {
    msgNr: 186,
    OriginalMessage: '606 23 02 16 01 20 01 C1 60',
    CobID: '606',
    FrameData: '230216012001C160',
    type: 'R_SDO',
    AxisID: 6,
    CS: '23',
    Object: '#x1602_01',
    ObjectName: '1st mapped object',
    Data: '60C10120',
    Interpretation: '[406h][1] - #x60C1_01 - X1: the first parameter of ip function',
    errorStatus: 'blue'
  },
  {
    msgNr: 187,
    OriginalMessage: '606 23 02 16 02 20 02 C1 60',
    CobID: '606',
    FrameData: '230216022002C160',
    type: 'R_SDO',
    AxisID: 6,
    CS: '23',
    Object: '#x1602_02',
    ObjectName: '2nd mapped object',
    Data: '60C10220',
    Interpretation: '[406h][2] - #x60C1_02 - X2: the second parameter of ip function',
    errorStatus: 'blue'
  },
  {
    msgNr: 188,
    OriginalMessage: '606 2F 02 16 00 02 00 00 00',
    CobID: '606',
    FrameData: '2F02160002000000',
    type: 'R_SDO',
    AxisID: 6,
    CS: '2F',
    Object: '#x1602_00',
    ObjectName: 'Number of mapped objects',
    Data: '02',
    Interpretation: '[406h] - Nr of mapped objects : 02',
    errorStatus: 'blue'
  },
  {
    msgNr: 189,
    OriginalMessage: '606 2F 60 60 00 07 00 00 00',
    CobID: '606',
    FrameData: '2F60600007000000',
    type: 'R_SDO',
    AxisID: 6,
    CS: '2F',
    Object: '#x6060',
    ObjectName: 'Modes of operation',
    Data: '07',
    Interpretation: 'Interpolated Position Mode',
    errorStatus: 'blue'
  },
  {
    msgNr: 190,
    OriginalMessage: '606 2B C0 60 00 FF FF 00 00',
    CobID: '606',
    FrameData: '2BC06000FFFF0000',
    type: 'R_SDO',
    AxisID: 6,
    CS: '2B',
    Object: '#x60C0',
    ObjectName: 'Interpolation submode select',
    Data: 'FFFF',
    Interpretation: 'PVT (Position – Velocity – Time) cubic interpolation',
    errorStatus: 'blue'
  },
  {
    msgNr: 191,
    OriginalMessage: '606 2B 73 20 00 0F 00 00 00',
    CobID: '606',
    FrameData: '2B7320000F000000',
    type: 'R_SDO',
    AxisID: 6,
    CS: '2B',
    Object: '#x2073',
    ObjectName: 'Interpolated position buffer length',
    Data: '000F',
    Interpretation: 'Buffer length: 15',
    errorStatus: 'random'
  },
  {
    msgNr: 192,
    OriginalMessage: '606 2B 74 20 00 00 B0 00 00',
    CobID: '606',
    FrameData: '2B74200000B00000',
    type: 'R_SDO',
    AxisID: 6,
    CS: '2B',
    Object: '#x2074',
    ObjectName: 'Interpolated position buffer configuration',
    Data: 'B000',
    Interpretation: 'Write: #x2074 <- B000h',
    errorStatus: 'neutral'
  },
  {
    msgNr: 193,
    OriginalMessage: '406 58 00 54 00 03 00 37 00',
    CobID: '406',
    FrameData: '5800540003003700',
    type: 'RPDO3',
    AxisID: 6,
    CS: 2,
    Object: '#x60C1_01 / #x60C1_02',
    ObjectName: 'X1: the first parameter of ip function / X2: the second parameter of ip function',
    Data: '00540058 / 00370003',
    Interpretation: 'Pos: 88 IU / Speed: 3.328125 IU, Time: 55 IU, Counter: 0',
    errorStatus: 'neutral'
  },
  {
    msgNr: 194,
    OriginalMessage: '406 72 01 A8 00 06 00 37 02',
    CobID: '406',
    FrameData: '7201A80006003702',
    type: 'RPDO3',
    AxisID: 6,
    CS: 2,
    Object: '#x60C1_01 / #x60C1_02',
    ObjectName: 'X1: the first parameter of ip function / X2: the second parameter of ip function',
    Data: '00A80172 / 02370006',
    Interpretation: 'Pos: 370 IU / Speed: 6.65625 IU, Time: 55 IU, Counter: 1',
    errorStatus: 'neutral'
  },
  {
    msgNr: 195,
    OriginalMessage: '406 A6 0B A8 00 06 00 86 05',
    CobID: '406',
    FrameData: 'A60BA80006008605',
    type: 'RPDO3',
    AxisID: 6,
    CS: 2,
    Object: '#x60C1_01 / #x60C1_02',
    ObjectName: 'X1: the first parameter of ip function / X2: the second parameter of ip function',
    Data: '00A80BA6 / 05860006',
    Interpretation: 'Pos: 2982 IU / Speed: 6.65625 IU, Time: 390 IU, Counter: 2',
    errorStatus: 'neutral'
  },
  {
    msgNr: 196,
    OriginalMessage: '406 FF 15 A8 00 06 00 90 07',
    CobID: '406',
    FrameData: 'FF15A80006009007',
    type: 'RPDO3',
    AxisID: 6,
    CS: 2,
    Object: '#x60C1_01 / #x60C1_02',
    ObjectName: 'X1: the first parameter of ip function / X2: the second parameter of ip function',
    Data: '00A815FF / 07900006',
    Interpretation: 'Pos: 5631 IU / Speed: 6.65625 IU, Time: 400 IU, Counter: 3',
    errorStatus: 'neutral'
  },
  {
    msgNr: 197,
    OriginalMessage: '406 25 17 00 00 03 00 3C 08',
    CobID: '406',
    FrameData: '2517000003003C08',
    type: 'RPDO3',
    AxisID: 6,
    CS: 2,
    Object: '#x60C1_01 / #x60C1_02',
    ObjectName: 'X1: the first parameter of ip function / X2: the second parameter of ip function',
    Data: '00001725 / 083C0003',
    Interpretation: 'Pos: 5925 IU / Speed: 3 IU, Time: 60 IU, Counter: 4',
    errorStatus: 'neutral'
  },
  {
    msgNr: 198,
    OriginalMessage: '406 70 17 00 00 00 00 32 0A',
    CobID: '406',
    FrameData: '701700000000320A',
    type: 'RPDO3',
    AxisID: 6,
    CS: 2,
    Object: '#x60C1_01 / #x60C1_02',
    ObjectName: 'X1: the first parameter of ip function / X2: the second parameter of ip function',
    Data: '00001770 / 0A320000',
    Interpretation: 'Pos: 6000 IU / Speed: 0 IU, Time: 50 IU, Counter: 5',
    errorStatus: 'neutral'
  },
  {
    msgNr: 199,
    OriginalMessage: '406 07 14 80 00 F8 FF F0 0C',
    CobID: '406',
    FrameData: '07148000F8FFF00C',
    type: 'RPDO3',
    AxisID: 6,
    CS: 2,
    Object: '#x60C1_01 / #x60C1_02',
    ObjectName: 'X1: the first parameter of ip function / X2: the second parameter of ip function',
    Data: '00801407 / 0CF0FFF8',
    Interpretation: 'Pos: 5127 IU / Speed: -7.5 IU, Time: 240 IU, Counter: 6',
    errorStatus: 'neutral'
  },
  {
    msgNr: 200,
    OriginalMessage: '406 2B 0C AB 00 F2 FF BE 0E',
    CobID: '406',
    FrameData: '2B0CAB00F2FFBE0E',
    type: 'RPDO3',
    AxisID: 6,
    CS: 2,
    Object: '#x60C1_01 / #x60C1_02',
    ObjectName: 'X1: the first parameter of ip function / X2: the second parameter of ip function',
    Data: '00AB0C2B / 0EBEFFF2',
    Interpretation: 'Pos: 3115 IU / Speed: -13.33203125 IU, Time: 190 IU, Counter: 7',
    errorStatus: 'neutral'
  },
  {
    msgNr: 201,
    OriginalMessage: '406 6A F9 AB FF F2 FF 68 11',
    CobID: '406',
    FrameData: '6AF9ABFFF2FF6811',
    type: 'RPDO3',
    AxisID: 6,
    CS: 2,
    Object: '#x60C1_01 / #x60C1_02',
    ObjectName: 'X1: the first parameter of ip function / X2: the second parameter of ip function',
    Data: 'FFABF96A / 1168FFF2',
    Interpretation: 'Pos: -1686 IU / Speed: -13.33203125 IU, Time: 360 IU, Counter: 8',
    errorStatus: 'neutral'
  },
  {
    msgNr: 202,
    OriginalMessage: '406 17 E4 AB FF F2 FF 9A 13',
    CobID: '406',
    FrameData: '17E4ABFFF2FF9A13',
    type: 'RPDO3',
    AxisID: 6,
    CS: 2,
    Object: '#x60C1_01 / #x60C1_02',
    ObjectName: 'X1: the first parameter of ip function / X2: the second parameter of ip function',
    Data: 'FFABE417 / 139AFFF2',
    Interpretation: 'Pos: -7145 IU / Speed: -13.33203125 IU, Time: 410 IU, Counter: 9',
    errorStatus: 'neutral'
  },
  {
    msgNr: 203,
    OriginalMessage: '406 51 DC 99 FF F8 FF BE 14',
    CobID: '406',
    FrameData: '51DC99FFF8FFBE14',
    type: 'RPDO3',
    AxisID: 6,
    CS: 2,
    Object: '#x60C1_01 / #x60C1_02',
    ObjectName: 'X1: the first parameter of ip function / X2: the second parameter of ip function',
    Data: 'FF99DC51 / 14BEFFF8',
    Interpretation: 'Pos: -9135 IU / Speed: -7.40234375 IU, Time: 190 IU, Counter: 10',
    errorStatus: 'neutral'
  },
  {
    msgNr: 204,
    OriginalMessage: '406 F0 D8 00 FF 00 00 F0 16',
    CobID: '406',
    FrameData: 'F0D800FF0000F016',
    type: 'RPDO3',
    AxisID: 6,
    CS: 2,
    Object: '#x60C1_01 / #x60C1_02',
    ObjectName: 'X1: the first parameter of ip function / X2: the second parameter of ip function',
    Data: 'FF00D8F0 / 16F00000',
    Interpretation: 'Pos: -10000 IU / Speed: 0 IU, Time: 240 IU, Counter: 11',
    errorStatus: 'neutral'
  },
  {
    msgNr: 205,
    OriginalMessage: '206 1F 00',
    CobID: '206',
    FrameData: '1F00',
    type: 'RPDO1',
    AxisID: 6,
    CS: 1,
    Object: '#x60407',
    ObjectName: 'Controlword',
    Data: '001F',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 206,
    OriginalMessage: '//Interpolation  PT',
    CobID: 'invalid',
    FrameData: 'invalid',
    type: 'invalid',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 207,
    OriginalMessage: '606 2B 8E 20 00 00 00 00 00',
    CobID: '606',
    FrameData: '2B8E200000000000',
    type: 'R_SDO',
    AxisID: 6,
    CS: '2B',
    Object: '#x208E',
    ObjectName: 'Auxiliary settings register',
    Data: '0000',
    Interpretation: 'Write #208E <- 0000',
    errorStatus: 'random'
  },
  {
    msgNr: 208,
    OriginalMessage: '606 2F 02 16 00 00 00 00 00',
    CobID: '606',
    FrameData: '2F02160000000000',
    type: 'R_SDO',
    AxisID: 6,
    CS: '2F',
    Object: '#x1602_00',
    ObjectName: 'Number of mapped objects',
    Data: '00',
    Interpretation: '[406h] - Nr of mapped objects : 00',
    errorStatus: 'blue'
  },
  {
    msgNr: 209,
    OriginalMessage: '606 23 02 16 01 20 01 C1 60',
    CobID: '606',
    FrameData: '230216012001C160',
    type: 'R_SDO',
    AxisID: 6,
    CS: '23',
    Object: '#x1602_01',
    ObjectName: '1st mapped object',
    Data: '60C10120',
    Interpretation: '[406h][1] - #x60C1_01 - X1: the first parameter of ip function',
    errorStatus: 'blue'
  },
  {
    msgNr: 210,
    OriginalMessage: '606 23 02 16 02 20 02 C1 60',
    CobID: '606',
    FrameData: '230216022002C160',
    type: 'R_SDO',
    AxisID: 6,
    CS: '23',
    Object: '#x1602_02',
    ObjectName: '2nd mapped object',
    Data: '60C10220',
    Interpretation: '[406h][2] - #x60C1_02 - X2: the second parameter of ip function',
    errorStatus: 'blue'
  },
  {
    msgNr: 211,
    OriginalMessage: '606 2F 02 16 00 02 00 00 00',
    CobID: '606',
    FrameData: '2F02160002000000',
    type: 'R_SDO',
    AxisID: 6,
    CS: '2F',
    Object: '#x1602_00',
    ObjectName: 'Number of mapped objects',
    Data: '02',
    Interpretation: '[406h] - Nr of mapped objects : 02',
    errorStatus: 'blue'
  },
  {
    msgNr: 212,
    OriginalMessage: '606 2F 60 60 00 07 00 00 00',
    CobID: '606',
    FrameData: '2F60600007000000',
    type: 'R_SDO',
    AxisID: 6,
    CS: '2F',
    Object: '#x6060',
    ObjectName: 'Modes of operation',
    Data: '07',
    Interpretation: 'Interpolated Position Mode',
    errorStatus: 'blue'
  },
  {
    msgNr: 213,
    OriginalMessage: '606 2B C0 60 00 00 00 00 00',
    CobID: '606',
    FrameData: '2BC0600000000000',
    type: 'R_SDO',
    AxisID: 6,
    CS: '2B',
    Object: '#x60C0',
    ObjectName: 'Interpolation submode select',
    Data: '0000',
    Interpretation: 'Linear Interpolation or PT (Position –Time) ',
    errorStatus: 'blue'
  },
  {
    msgNr: 214,
    OriginalMessage: '606 2B 73 20 00 0C 00 00 00',
    CobID: '606',
    FrameData: '2B7320000C000000',
    type: 'R_SDO',
    AxisID: 6,
    CS: '2B',
    Object: '#x2073',
    ObjectName: 'Interpolated position buffer length',
    Data: '000C',
    Interpretation: 'Buffer length: 12',
    errorStatus: 'random'
  },
  {
    msgNr: 215,
    OriginalMessage: '606 2B 74 20 00 01 A0 00 00',
    CobID: '606',
    FrameData: '2B74200001A00000',
    type: 'R_SDO',
    AxisID: 6,
    CS: '2B',
    Object: '#x2074',
    ObjectName: 'Interpolated position buffer configuration',
    Data: 'A001',
    Interpretation: 'Write: #x2074 <- A001h',
    errorStatus: 'neutral'
  },
  {
    msgNr: 216,
    OriginalMessage: '606 23 79 20 00 E8 03 00 00',
    CobID: '606',
    FrameData: '23792000E8030000',
    type: 'R_SDO',
    AxisID: 6,
    CS: '23',
    Object: '#x2079',
    ObjectName: 'Interpolated position initial position',
    Data: '000003E8',
    Interpretation: '1000 IU',
    errorStatus: 'blue'
  },
  {
    msgNr: 217,
    OriginalMessage: '406 20 4E 00 00 E8 03 00 02',
    CobID: '406',
    FrameData: '204E0000E8030002',
    type: 'RPDO3',
    AxisID: 6,
    CS: 2,
    Object: '#x60C1_01 / #x60C1_02',
    ObjectName: 'X1: the first parameter of ip function / X2: the second parameter of ip function',
    Data: '00004E20 / 020003E8',
    Interpretation: 'Pos: 20000 IU / Time: 1000, Counter: 1',
    errorStatus: 'neutral'
  },
  {
    msgNr: 218,
    OriginalMessage: '406 30 75 00 00 D0 07 00 04',
    CobID: '406',
    FrameData: '30750000D0070004',
    type: 'RPDO3',
    AxisID: 6,
    CS: 2,
    Object: '#x60C1_01 / #x60C1_02',
    ObjectName: 'X1: the first parameter of ip function / X2: the second parameter of ip function',
    Data: '00007530 / 040007D0',
    Interpretation: 'Pos: 30000 IU / Time: 2000, Counter: 2',
    errorStatus: 'neutral'
  },
  {
    msgNr: 219,
    OriginalMessage: '406 D0 07 00 00 E8 03 00 06',
    CobID: '406',
    FrameData: 'D0070000E8030006',
    type: 'RPDO3',
    AxisID: 6,
    CS: 2,
    Object: '#x60C1_01 / #x60C1_02',
    ObjectName: 'X1: the first parameter of ip function / X2: the second parameter of ip function',
    Data: '000007D0 / 060003E8',
    Interpretation: 'Pos: 2000 IU / Time: 1000, Counter: 3',
    errorStatus: 'neutral'
  },
  {
    msgNr: 220,
    OriginalMessage: '406 00 00 00 00 F4 01 00 08',
    CobID: '406',
    FrameData: '00000000F4010008',
    type: 'RPDO3',
    AxisID: 6,
    CS: 2,
    Object: '#x60C1_01 / #x60C1_02',
    ObjectName: 'X1: the first parameter of ip function / X2: the second parameter of ip function',
    Data: '00000000 / 080001F4',
    Interpretation: 'Pos: 0 IU / Time: 500, Counter: 4',
    errorStatus: 'neutral'
  },
  {
    msgNr: 221,
    OriginalMessage: '206 1F 00',
    CobID: '206',
    FrameData: '1F00',
    type: 'RPDO1',
    AxisID: 6,
    CS: 1,
    Object: '#x60407',
    ObjectName: 'Controlword',
    Data: '001F',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 222,
    OriginalMessage: '//Interpolation  PVT relative',
    CobID: 'invalid',
    FrameData: 'invalid',
    type: 'invalid',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 223,
    OriginalMessage: '0 01 06',
    CobID: 'invalid',
    FrameData: 'invalid',
    type: 'invalid',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 224,
    OriginalMessage: '206 06 00',
    CobID: '206',
    FrameData: '0600',
    type: 'RPDO1',
    AxisID: 6,
    CS: 1,
    Object: '#x60407',
    ObjectName: 'Controlword',
    Data: '0006',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 225,
    OriginalMessage: '206 07 00',
    CobID: '206',
    FrameData: '0700',
    type: 'RPDO1',
    AxisID: 6,
    CS: 1,
    Object: '#x60407',
    ObjectName: 'Controlword',
    Data: '0007',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 226,
    OriginalMessage: '206 0F 00',
    CobID: '206',
    FrameData: '0F00',
    type: 'RPDO1',
    AxisID: 6,
    CS: 1,
    Object: '#x60407',
    ObjectName: 'Controlword',
    Data: '000F',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 227,
    OriginalMessage: '606 2B 8E 20 00 00 00 00 00',
    CobID: '606',
    FrameData: '2B8E200000000000',
    type: 'R_SDO',
    AxisID: 6,
    CS: '2B',
    Object: '#x208E',
    ObjectName: 'Auxiliary settings register',
    Data: '0000',
    Interpretation: 'Write #208E <- 0000',
    errorStatus: 'random'
  },
  {
    msgNr: 228,
    OriginalMessage: '606 2F 02 16 00 00 00 00 00',
    CobID: '606',
    FrameData: '2F02160000000000',
    type: 'R_SDO',
    AxisID: 6,
    CS: '2F',
    Object: '#x1602_00',
    ObjectName: 'Number of mapped objects',
    Data: '00',
    Interpretation: '[406h] - Nr of mapped objects : 00',
    errorStatus: 'blue'
  },
  {
    msgNr: 229,
    OriginalMessage: '606 23 02 16 01 20 01 C1 60',
    CobID: '606',
    FrameData: '230216012001C160',
    type: 'R_SDO',
    AxisID: 6,
    CS: '23',
    Object: '#x1602_01',
    ObjectName: '1st mapped object',
    Data: '60C10120',
    Interpretation: '[406h][1] - #x60C1_01 - X1: the first parameter of ip function',
    errorStatus: 'blue'
  },
  {
    msgNr: 230,
    OriginalMessage: '606 23 02 16 02 20 02 C1 60',
    CobID: '606',
    FrameData: '230216022002C160',
    type: 'R_SDO',
    AxisID: 6,
    CS: '23',
    Object: '#x1602_02',
    ObjectName: '2nd mapped object',
    Data: '60C10220',
    Interpretation: '[406h][2] - #x60C1_02 - X2: the second parameter of ip function',
    errorStatus: 'blue'
  },
  {
    msgNr: 231,
    OriginalMessage: '606 2F 02 16 00 02 00 00 00',
    CobID: '606',
    FrameData: '2F02160002000000',
    type: 'R_SDO',
    AxisID: 6,
    CS: '2F',
    Object: '#x1602_00',
    ObjectName: 'Number of mapped objects',
    Data: '02',
    Interpretation: '[406h] - Nr of mapped objects : 02',
    errorStatus: 'blue'
  },
  {
    msgNr: 232,
    OriginalMessage: '606 2F 60 60 00 07 00 00 00',
    CobID: '606',
    FrameData: '2F60600007000000',
    type: 'R_SDO',
    AxisID: 6,
    CS: '2F',
    Object: '#x6060',
    ObjectName: 'Modes of operation',
    Data: '07',
    Interpretation: 'Interpolated Position Mode',
    errorStatus: 'blue'
  },
  {
    msgNr: 233,
    OriginalMessage: '206 4F 00',
    CobID: '206',
    FrameData: '4F00',
    type: 'RPDO1',
    AxisID: 6,
    CS: 1,
    Object: '#x60407',
    ObjectName: 'Controlword',
    Data: '004F',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 234,
    OriginalMessage: '606 2B C0 60 00 FF FF 00 00',
    CobID: '606',
    FrameData: '2BC06000FFFF0000',
    type: 'R_SDO',
    AxisID: 6,
    CS: '2B',
    Object: '#x60C0',
    ObjectName: 'Interpolation submode select',
    Data: 'FFFF',
    Interpretation: 'PVT (Position – Velocity – Time) cubic interpolation',
    errorStatus: 'blue'
  },
  {
    msgNr: 235,
    OriginalMessage: '606 2B 73 20 00 0C 00 00 00',
    CobID: '606',
    FrameData: '2B7320000C000000',
    type: 'R_SDO',
    AxisID: 6,
    CS: '2B',
    Object: '#x2073',
    ObjectName: 'Interpolated position buffer length',
    Data: '000C',
    Interpretation: 'Buffer length: 12',
    errorStatus: 'random'
  },
  {
    msgNr: 236,
    OriginalMessage: '606 2B 74 20 00 01 A0 00 00',
    CobID: '606',
    FrameData: '2B74200001A00000',
    type: 'R_SDO',
    AxisID: 6,
    CS: '2B',
    Object: '#x2074',
    ObjectName: 'Interpolated position buffer configuration',
    Data: 'A001',
    Interpretation: 'Write: #x2074 <- A001h',
    errorStatus: 'neutral'
  },
  {
    msgNr: 237,
    OriginalMessage: '606 23 79 20 00 00 00 00 00',
    CobID: '606',
    FrameData: '2379200000000000',
    type: 'R_SDO',
    AxisID: 6,
    CS: '23',
    Object: '#x2079',
    ObjectName: 'Interpolated position initial position',
    Data: '00000000',
    Interpretation: '0 IU',
    errorStatus: 'blue'
  },
  {
    msgNr: 238,
    OriginalMessage: '406 90 01 00 00 03 00 FA 02',
    CobID: '406',
    FrameData: '900100000300FA02',
    type: 'RPDO3',
    AxisID: 6,
    CS: 2,
    Object: '#x60C1_01 / #x60C1_02',
    ObjectName: 'X1: the first parameter of ip function / X2: the second parameter of ip function',
    Data: '00000190 / 02FA0003',
    Interpretation: 'Pos: 400 IU / Speed: 3 IU, Time: 250 IU, Counter: 1',
    errorStatus: 'neutral'
  },
  {
    msgNr: 239,
    OriginalMessage: '406 D8 04 00 00 06 00 FA 04',
    CobID: '406',
    FrameData: 'D80400000600FA04',
    type: 'RPDO3',
    AxisID: 6,
    CS: 2,
    Object: '#x60C1_01 / #x60C1_02',
    ObjectName: 'X1: the first parameter of ip function / X2: the second parameter of ip function',
    Data: '000004D8 / 04FA0006',
    Interpretation: 'Pos: 1240 IU / Speed: 6 IU, Time: 250 IU, Counter: 2',
    errorStatus: 'neutral'
  },
  {
    msgNr: 240,
    OriginalMessage: '406 8A 06 00 00 06 00 FA 06',
    CobID: '406',
    FrameData: '8A0600000600FA06',
    type: 'RPDO3',
    AxisID: 6,
    CS: 2,
    Object: '#x60C1_01 / #x60C1_02',
    ObjectName: 'X1: the first parameter of ip function / X2: the second parameter of ip function',
    Data: '0000068A / 06FA0006',
    Interpretation: 'Pos: 1674 IU / Speed: 6 IU, Time: 250 IU, Counter: 3',
    errorStatus: 'neutral'
  },
  {
    msgNr: 241,
    OriginalMessage: '406 82 06 00 00 06 00 FA 08',
    CobID: '406',
    FrameData: '820600000600FA08',
    type: 'RPDO3',
    AxisID: 6,
    CS: 2,
    Object: '#x60C1_01 / #x60C1_02',
    ObjectName: 'X1: the first parameter of ip function / X2: the second parameter of ip function',
    Data: '00000682 / 08FA0006',
    Interpretation: 'Pos: 1666 IU / Speed: 6 IU, Time: 250 IU, Counter: 4',
    errorStatus: 'neutral'
  },
  {
    msgNr: 242,
    OriginalMessage: '406 D8 04 00 00 03 00 FA 0A',
    CobID: '406',
    FrameData: 'D80400000300FA0A',
    type: 'RPDO3',
    AxisID: 6,
    CS: 2,
    Object: '#x60C1_01 / #x60C1_02',
    ObjectName: 'X1: the first parameter of ip function / X2: the second parameter of ip function',
    Data: '000004D8 / 0AFA0003',
    Interpretation: 'Pos: 1240 IU / Speed: 3 IU, Time: 250 IU, Counter: 5',
    errorStatus: 'neutral'
  },
  {
    msgNr: 243,
    OriginalMessage: '406 9A 01 00 00 00 00 FA 0C',
    CobID: '406',
    FrameData: '9A0100000000FA0C',
    type: 'RPDO3',
    AxisID: 6,
    CS: 2,
    Object: '#x60C1_01 / #x60C1_02',
    ObjectName: 'X1: the first parameter of ip function / X2: the second parameter of ip function',
    Data: '0000019A / 0CFA0000',
    Interpretation: 'Pos: 410 IU / Speed: 0 IU, Time: 250 IU, Counter: 6',
    errorStatus: 'neutral'
  },
  {
    msgNr: 244,
    OriginalMessage: '206 5F 00',
    CobID: '206',
    FrameData: '5F00',
    type: 'RPDO1',
    AxisID: 6,
    CS: 1,
    Object: '#x60407',
    ObjectName: 'Controlword',
    Data: '005F',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 245,
    OriginalMessage: '/****** COB ID/DATA EXTRACTION VALIDATION **********/',
    CobID: 'invalid',
    FrameData: 'invalid',
    type: 'invalid',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 246,
    OriginalMessage:
      '           1\t    \t17:46:00\t524.117\t       3116.135\t\t      1551\t       70F\tR     \t  0\t  \t  \t  \t  \t  \t  \t  \t  \t        \t',
    CobID: '70F',
    FrameData: '-',
    type: 'NMT_M',
    AxisID: 15,
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'RTR request from master',
    errorStatus: 'neutral'
  },
  {
    msgNr: 247,
    OriginalMessage: '0x0 81 00',
    CobID: 'invalid',
    FrameData: 'invalid',
    type: 'invalid',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 248,
    OriginalMessage: '0 81 00',
    CobID: 'invalid',
    FrameData: 'invalid',
    type: 'invalid',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 249,
    OriginalMessage: '0 2 81 00',
    CobID: '0',
    FrameData: '8100',
    type: 'NMT',
    AxisID: 'All',
    CS: '81',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'All Axes - Reset Node',
    errorStatus: 'blue'
  },
  {
    msgNr: 250,
    OriginalMessage: '0 02 81 00',
    CobID: 'invalid',
    FrameData: 'invalid',
    type: 'invalid',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 251,
    OriginalMessage: '0 0x2 81 00',
    CobID: '0',
    FrameData: '8100',
    type: 'NMT',
    AxisID: 'All',
    CS: '81',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'All Axes - Reset Node',
    errorStatus: 'blue'
  },
  {
    msgNr: 252,
    OriginalMessage: '0 0x02 81 00',
    CobID: 'invalid',
    FrameData: 'invalid',
    type: 'invalid',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 253,
    OriginalMessage: '0 0x02 0x81 0x00',
    CobID: 'invalid',
    FrameData: 'invalid',
    type: 'invalid',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 254,
    OriginalMessage: '0 02 0x81 0x00',
    CobID: 'invalid',
    FrameData: 'invalid',
    type: 'invalid',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 255,
    OriginalMessage: '0 2 0x81 0x00',
    CobID: '0',
    FrameData: '8100',
    type: 'NMT',
    AxisID: 'All',
    CS: '81',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'All Axes - Reset Node',
    errorStatus: 'blue'
  },
  {
    msgNr: 256,
    OriginalMessage: '0 2 81 00',
    CobID: '0',
    FrameData: '8100',
    type: 'NMT',
    AxisID: 'All',
    CS: '81',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'All Axes - Reset Node',
    errorStatus: 'blue'
  },
  {
    msgNr: 257,
    OriginalMessage: '000 81 00',
    CobID: '000',
    FrameData: '8100',
    type: 'NMT',
    AxisID: 'All',
    CS: '81',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'All Axes - Reset Node',
    errorStatus: 'blue'
  },
  {
    msgNr: 258,
    OriginalMessage: '000 2 81 00',
    CobID: '000',
    FrameData: '8100',
    type: 'NMT',
    AxisID: 'All',
    CS: '81',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'All Axes - Reset Node',
    errorStatus: 'blue'
  },
  {
    msgNr: 259,
    OriginalMessage: '000 0x2 81 00',
    CobID: '000',
    FrameData: '8100',
    type: 'NMT',
    AxisID: 'All',
    CS: '81',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'All Axes - Reset Node',
    errorStatus: 'blue'
  },
  {
    msgNr: 260,
    OriginalMessage: '000 0x02 81 00',
    CobID: '000',
    FrameData: '8100',
    type: 'NMT',
    AxisID: 'All',
    CS: '81',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'All Axes - Reset Node',
    errorStatus: 'blue'
  },
  {
    msgNr: 261,
    OriginalMessage: '000 0x02 0x81 0x00',
    CobID: '000',
    FrameData: '028100',
    type: 'NMT',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'DATA too big for this type of message',
    errorStatus: 'error'
  },
  {
    msgNr: 262,
    OriginalMessage: '000 02 0x81 0x00',
    CobID: '000',
    FrameData: '8100',
    type: 'NMT',
    AxisID: 'All',
    CS: '81',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'All Axes - Reset Node',
    errorStatus: 'blue'
  },
  {
    msgNr: 263,
    OriginalMessage: '000 2 0x81 0x00',
    CobID: '000',
    FrameData: '8100',
    type: 'NMT',
    AxisID: 'All',
    CS: '81',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'All Axes - Reset Node',
    errorStatus: 'blue'
  },
  {
    msgNr: 264,
    OriginalMessage: '000 2 81 00',
    CobID: '000',
    FrameData: '8100',
    type: 'NMT',
    AxisID: 'All',
    CS: '81',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'All Axes - Reset Node',
    errorStatus: 'blue'
  },
  {
    msgNr: 265,
    OriginalMessage: '0x000 81 00',
    CobID: '000',
    FrameData: '8100',
    type: 'NMT',
    AxisID: 'All',
    CS: '81',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'All Axes - Reset Node',
    errorStatus: 'blue'
  },
  {
    msgNr: 266,
    OriginalMessage: '0x000 2 81 00',
    CobID: '000',
    FrameData: '8100',
    type: 'NMT',
    AxisID: 'All',
    CS: '81',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'All Axes - Reset Node',
    errorStatus: 'blue'
  },
  {
    msgNr: 267,
    OriginalMessage: '0x000 0x2 81 00',
    CobID: '000',
    FrameData: '8100',
    type: 'NMT',
    AxisID: 'All',
    CS: '81',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'All Axes - Reset Node',
    errorStatus: 'blue'
  },
  {
    msgNr: 268,
    OriginalMessage: '0x000 0x02 81 00',
    CobID: '000',
    FrameData: '8100',
    type: 'NMT',
    AxisID: 'All',
    CS: '81',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'All Axes - Reset Node',
    errorStatus: 'blue'
  },
  {
    msgNr: 269,
    OriginalMessage: '0x000 0x02 0x81 0x00',
    CobID: '000',
    FrameData: '028100',
    type: 'NMT',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'DATA too big for this type of message',
    errorStatus: 'error'
  },
  {
    msgNr: 270,
    OriginalMessage: '0x000 02 0x81 0x00',
    CobID: '000',
    FrameData: '8100',
    type: 'NMT',
    AxisID: 'All',
    CS: '81',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'All Axes - Reset Node',
    errorStatus: 'blue'
  },
  {
    msgNr: 271,
    OriginalMessage: '0x000 2 0x81 0x00',
    CobID: '000',
    FrameData: '8100',
    type: 'NMT',
    AxisID: 'All',
    CS: '81',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'All Axes - Reset Node',
    errorStatus: 'blue'
  },
  {
    msgNr: 272,
    OriginalMessage: '0x000 2 81 00',
    CobID: '000',
    FrameData: '8100',
    type: 'NMT',
    AxisID: 'All',
    CS: '81',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'All Axes - Reset Node',
    errorStatus: 'blue'
  },
  {
    msgNr: 273,
    OriginalMessage: '0x000 4 0x81 0x00',
    CobID: '000',
    FrameData: '8100',
    type: 'NMT',
    AxisID: 'All',
    CS: '81',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'All Axes - Reset Node',
    errorStatus: 'blue'
  },
  {
    msgNr: 274,
    OriginalMessage: '0x000 4 81 00',
    CobID: '000',
    FrameData: '8100',
    type: 'NMT',
    AxisID: 'All',
    CS: '81',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'All Axes - Reset Node',
    errorStatus: 'blue'
  },
  {
    msgNr: 275,
    OriginalMessage: '0x000 2 0x81 0x00 00 01',
    CobID: '000',
    FrameData: '81000001',
    type: 'NMT',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'DATA too big for this type of message',
    errorStatus: 'error'
  },
  {
    msgNr: 276,
    OriginalMessage: '0x000 2 81 00 00 02',
    CobID: '000',
    FrameData: '81000002',
    type: 'NMT',
    AxisID: '-',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'DATA too big for this type of message',
    errorStatus: 'error'
  },
  {
    msgNr: 277,
    OriginalMessage: '084 2 81 00 00 02',
    CobID: '084',
    FrameData: '81000002',
    type: 'EMCY',
    AxisID: 4,
    CS: '-',
    Object: '1001',
    ObjectName: 'Error Register',
    Data: '00 ',
    Interpretation: 'EMCY : 0081 - Unknown EMCY Code',
    errorStatus: 'error'
  },
  {
    msgNr: 278,
    OriginalMessage: '084 2 ',
    CobID: 'invalid',
    FrameData: 'empty',
    type: 'invalid',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 279,
    OriginalMessage: '084 0',
    CobID: 'invalid',
    FrameData: 'empty',
    type: 'invalid',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 280,
    OriginalMessage: '084 0x0',
    CobID: 'invalid',
    FrameData: 'empty',
    type: 'invalid',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 281,
    OriginalMessage: '0x084 0x0',
    CobID: 'invalid',
    FrameData: 'empty',
    type: 'invalid',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 282,
    OriginalMessage: '0x084 0',
    CobID: 'invalid',
    FrameData: 'empty',
    type: 'invalid',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 283,
    OriginalMessage: '0x084 00',
    CobID: '084',
    FrameData: '00',
    type: 'EMCY',
    AxisID: 4,
    CS: '-',
    Object: '1001',
    ObjectName: 'Error Register',
    Data: ' ',
    Interpretation: 'EMCY : 00 - Unknown EMCY Code',
    errorStatus: 'error'
  },
  {
    msgNr: 284,
    OriginalMessage: '0x084 0x00',
    CobID: '084',
    FrameData: '00',
    type: 'EMCY',
    AxisID: 4,
    CS: '-',
    Object: '1001',
    ObjectName: 'Error Register',
    Data: ' ',
    Interpretation: 'EMCY : 00 - Unknown EMCY Code',
    errorStatus: 'error'
  },
  {
    msgNr: 285,
    OriginalMessage: '084 0x00',
    CobID: '084',
    FrameData: '00',
    type: 'EMCY',
    AxisID: 4,
    CS: '-',
    Object: '1001',
    ObjectName: 'Error Register',
    Data: ' ',
    Interpretation: 'EMCY : 00 - Unknown EMCY Code',
    errorStatus: 'error'
  },
  {
    msgNr: 286,
    OriginalMessage: '084 0x00 12 45',
    CobID: '084',
    FrameData: '001245',
    type: 'EMCY',
    AxisID: 4,
    CS: '-',
    Object: '1001',
    ObjectName: 'Error Register',
    Data: '45 ',
    Interpretation: 'EMCY : 1200 - Unknown EMCY Code',
    errorStatus: 'error'
  },
  {
    msgNr: 287,
    OriginalMessage: '084 00 12 45',
    CobID: '084',
    FrameData: '001245',
    type: 'EMCY',
    AxisID: 4,
    CS: '-',
    Object: '1001',
    ObjectName: 'Error Register',
    Data: '45 ',
    Interpretation: 'EMCY : 1200 - Unknown EMCY Code',
    errorStatus: 'error'
  },
  {
    msgNr: 288,
    OriginalMessage: '084 00 12 45',
    CobID: '084',
    FrameData: '001245',
    type: 'EMCY',
    AxisID: 4,
    CS: '-',
    Object: '1001',
    ObjectName: 'Error Register',
    Data: '45 ',
    Interpretation: 'EMCY : 1200 - Unknown EMCY Code',
    errorStatus: 'error'
  },
  {
    msgNr: 289,
    OriginalMessage: '205 0 15 74',
    CobID: '205',
    FrameData: '1574',
    type: 'RPDO1',
    AxisID: 5,
    CS: 1,
    Object: '#x6040',
    ObjectName: 'Controlword',
    Data: '7415',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 290,
    OriginalMessage: '205 2 15 74',
    CobID: '205',
    FrameData: '1574',
    type: 'RPDO1',
    AxisID: 5,
    CS: 1,
    Object: '#x6040',
    ObjectName: 'Controlword',
    Data: '7415',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 291,
    OriginalMessage: '205 02 15 74',
    CobID: '205',
    FrameData: '021574',
    type: 'RPDO1',
    AxisID: 5,
    CS: 1,
    Object: '#x6040',
    ObjectName: 'Controlword',
    Data: '1502',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 292,
    OriginalMessage: '205 00 15 74',
    CobID: '205',
    FrameData: '001574',
    type: 'RPDO1',
    AxisID: 5,
    CS: 1,
    Object: '#x6040',
    ObjectName: 'Controlword',
    Data: '1500',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 293,
    OriginalMessage: '205 0x0 15 74',
    CobID: '205',
    FrameData: '1574',
    type: 'RPDO1',
    AxisID: 5,
    CS: 1,
    Object: '#x6040',
    ObjectName: 'Controlword',
    Data: '7415',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 294,
    OriginalMessage: '205 0x1 15 74',
    CobID: '205',
    FrameData: '1574',
    type: 'RPDO1',
    AxisID: 5,
    CS: 1,
    Object: '#x6040',
    ObjectName: 'Controlword',
    Data: '7415',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 295,
    OriginalMessage: '205 0x02 15 74',
    CobID: '205',
    FrameData: '1574',
    type: 'RPDO1',
    AxisID: 5,
    CS: 1,
    Object: '#x6040',
    ObjectName: 'Controlword',
    Data: '7415',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 296,
    OriginalMessage: '205 0x2 15 74',
    CobID: '205',
    FrameData: '1574',
    type: 'RPDO1',
    AxisID: 5,
    CS: 1,
    Object: '#x6040',
    ObjectName: 'Controlword',
    Data: '7415',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 297,
    OriginalMessage: '205  0x15 0x74',
    CobID: '205',
    FrameData: '1574',
    type: 'RPDO1',
    AxisID: 5,
    CS: 1,
    Object: '#x6040',
    ObjectName: 'Controlword',
    Data: '7415',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 298,
    OriginalMessage: '205 0x2 0x15 0x74',
    CobID: '205',
    FrameData: '1574',
    type: 'RPDO1',
    AxisID: 5,
    CS: 1,
    Object: '#x6040',
    ObjectName: 'Controlword',
    Data: '7415',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 299,
    OriginalMessage: '0x205 2 0x15 0x74',
    CobID: '205',
    FrameData: '1574',
    type: 'RPDO1',
    AxisID: 5,
    CS: 1,
    Object: '#x6040',
    ObjectName: 'Controlword',
    Data: '7415',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 300,
    OriginalMessage: '0x205 00 15 74',
    CobID: '205',
    FrameData: '001574',
    type: 'RPDO1',
    AxisID: 5,
    CS: 1,
    Object: '#x6040',
    ObjectName: 'Controlword',
    Data: '1500',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 301,
    OriginalMessage: '0x205 02 15 74',
    CobID: '205',
    FrameData: '021574',
    type: 'RPDO1',
    AxisID: 5,
    CS: 1,
    Object: '#x6040',
    ObjectName: 'Controlword',
    Data: '1502',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 302,
    OriginalMessage: '0x205 02 15 74',
    CobID: '205',
    FrameData: '021574',
    type: 'RPDO1',
    AxisID: 5,
    CS: 1,
    Object: '#x6040',
    ObjectName: 'Controlword',
    Data: '1502',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 303,
    OriginalMessage: '0x205 05 15 74',
    CobID: '205',
    FrameData: '051574',
    type: 'RPDO1',
    AxisID: 5,
    CS: 1,
    Object: '#x6040',
    ObjectName: 'Controlword',
    Data: '1505',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 304,
    OriginalMessage: '0x205 0F 15 74',
    CobID: '205',
    FrameData: '0F1574',
    type: 'RPDO1',
    AxisID: 5,
    CS: 1,
    Object: '#x6040',
    ObjectName: 'Controlword',
    Data: '150F',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 305,
    OriginalMessage: '205 00 45 85',
    CobID: '205',
    FrameData: '004585',
    type: 'RPDO1',
    AxisID: 5,
    CS: 1,
    Object: '#x6040',
    ObjectName: 'Controlword',
    Data: '4500',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 306,
    OriginalMessage: '205 02 45 85',
    CobID: '205',
    FrameData: '024585',
    type: 'RPDO1',
    AxisID: 5,
    CS: 1,
    Object: '#x6040',
    ObjectName: 'Controlword',
    Data: '4502',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 307,
    OriginalMessage: '204 00',
    CobID: '204',
    FrameData: '00',
    type: 'RPDO1',
    AxisID: 4,
    CS: 1,
    Object: '#x6040',
    ObjectName: 'Controlword',
    Data: '0000',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 308,
    OriginalMessage: '406 6A F9 AB FF F2 FF 68 11',
    CobID: '406',
    FrameData: '6AF9ABFFF2FF6811',
    type: 'RPDO3',
    AxisID: 6,
    CS: 2,
    Object: '#x60C1_01 / #x60C1_02',
    ObjectName: 'X1: the first parameter of ip function / X2: the second parameter of ip function',
    Data: 'FFABF96A / 1168FFF2',
    Interpretation: 'Pos: -1686 IU / Speed: -13.33203125 IU, Time: 360 IU, Counter: 8',
    errorStatus: 'neutral'
  },
  {
    msgNr: 309,
    OriginalMessage: '406 00 F9 AB FF F2 FF 68 11',
    CobID: '406',
    FrameData: '00F9ABFFF2FF6811',
    type: 'RPDO3',
    AxisID: 6,
    CS: 2,
    Object: '#x60C1_01 / #x60C1_02',
    ObjectName: 'X1: the first parameter of ip function / X2: the second parameter of ip function',
    Data: 'FFABF900 / 1168FFF2',
    Interpretation: 'Pos: -1792 IU / Speed: -13.33203125 IU, Time: 360 IU, Counter: 8',
    errorStatus: 'neutral'
  },
  {
    msgNr: 310,
    OriginalMessage: '406 00 F9 AB FF F2 FF 68 ',
    CobID: '406',
    FrameData: '00F9ABFFF2FF68',
    type: 'RPDO3',
    AxisID: 6,
    CS: 2,
    Object: '#x60C1_01 / #x60C1_02',
    ObjectName: 'X1: the first parameter of ip function / X2: the second parameter of ip function',
    Data: 'FFABF900 / 0068FFF2',
    Interpretation: 'Pos: -1792 IU / Speed: -13.33203125 IU, Time: 104 IU, Counter: 0',
    errorStatus: 'neutral'
  },
  {
    msgNr: 311,
    OriginalMessage: '406 00 F9 AB FF F2 FF ',
    CobID: '406',
    FrameData: '00F9ABFFF2FF',
    type: 'RPDO3',
    AxisID: 6,
    CS: 2,
    Object: '#x60C1_01 / #x60C1_02',
    ObjectName: 'X1: the first parameter of ip function / X2: the second parameter of ip function',
    Data: 'FFABF900 / 0000FFF2',
    Interpretation: 'Pos: -1792 IU / Speed: -13.33203125 IU, Time: 0 IU, Counter: 0',
    errorStatus: 'neutral'
  },
  {
    msgNr: 312,
    OriginalMessage: '406 0x06 00 F9 AB FF F2 FF ',
    CobID: '406',
    FrameData: '00F9ABFFF2FF',
    type: 'RPDO3',
    AxisID: 6,
    CS: 2,
    Object: '#x60C1_01 / #x60C1_02',
    ObjectName: 'X1: the first parameter of ip function / X2: the second parameter of ip function',
    Data: 'FFABF900 / 0000FFF2',
    Interpretation: 'Pos: -1792 IU / Speed: -13.33203125 IU, Time: 0 IU, Counter: 0',
    errorStatus: 'neutral'
  },
  {
    msgNr: 313,
    OriginalMessage: '406 6 00 F9 AB FF F2 FF ',
    CobID: '406',
    FrameData: '00F9ABFFF2FF',
    type: 'RPDO3',
    AxisID: 6,
    CS: 2,
    Object: '#x60C1_01 / #x60C1_02',
    ObjectName: 'X1: the first parameter of ip function / X2: the second parameter of ip function',
    Data: 'FFABF900 / 0000FFF2',
    Interpretation: 'Pos: -1792 IU / Speed: -13.33203125 IU, Time: 0 IU, Counter: 0',
    errorStatus: 'neutral'
  },
  {
    msgNr: 314,
    OriginalMessage: '406 5 00 F9 AB FF F2 FF ',
    CobID: '406',
    FrameData: '00F9ABFFF2FF',
    type: 'RPDO3',
    AxisID: 6,
    CS: 2,
    Object: '#x60C1_01 / #x60C1_02',
    ObjectName: 'X1: the first parameter of ip function / X2: the second parameter of ip function',
    Data: 'FFABF900 / 0000FFF2',
    Interpretation: 'Pos: -1792 IU / Speed: -13.33203125 IU, Time: 0 IU, Counter: 0',
    errorStatus: 'neutral'
  },
  {
    msgNr: 315,
    OriginalMessage: '    18)     92905.6  Rx         0281  3  50 03 00 ',
    CobID: '0281',
    FrameData: '500300',
    type: 'TPDO2',
    AxisID: 1,
    CS: 2,
    Object: '#x6040 / #x100D',
    ObjectName: 'Controlword / Life time factor',
    Data: '0350 / 00',
    Interpretation: '- / -',
    errorStatus: 'neutral'
  },
  {
    msgNr: 316,
    OriginalMessage: '    19)     92935.5  Rx         0181  2  31 02 ',
    CobID: '0181',
    FrameData: '3102',
    type: 'TPDO1',
    AxisID: 1,
    CS: 1,
    Object: '#x6040',
    ObjectName: 'Controlword',
    Data: '0231',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 317,
    OriginalMessage: '    20)     92935.6  Rx         0281  3  31 02 00 ',
    CobID: '0281',
    FrameData: '310200',
    type: 'TPDO2',
    AxisID: 1,
    CS: 2,
    Object: '#x6040 / #x100D',
    ObjectName: 'Controlword / Life time factor',
    Data: '0231 / 00',
    Interpretation: '- / -',
    errorStatus: 'neutral'
  },
  {
    msgNr: 318,
    OriginalMessage: '  can0  601   [8]  2F 00 1A 00 00 00 00 00',
    CobID: '601',
    FrameData: '2F001A0000000000',
    type: 'R_SDO',
    AxisID: 1,
    CS: '2F',
    Object: '#x1A00_00',
    ObjectName: 'Number of mapped objects',
    Data: '00',
    Interpretation: '[181h] - Nr of mapped objects : 00',
    errorStatus: 'blue'
  },
  {
    msgNr: 319,
    OriginalMessage: '601 8 2 3 816000 1245858500',
    CobID: '601',
    FrameData: '2381600012458585',
    type: 'R_SDO',
    AxisID: 1,
    CS: '23',
    Object: '#x6081',
    ObjectName: 'Profile velocity',
    Data: '85854512',
    Interpretation: '-31354.73019 IU',
    errorStatus: 'blue'
  },
  {
    msgNr: 320,
    OriginalMessage: 'beautiful 601,1,45 00 52 86 1 cunt',
    CobID: '601',
    FrameData: '450052861',
    type: 'R_SDO',
    AxisID: 1,
    CS: '45',
    Object: '5200_86',
    ObjectName: 'Nothing Found',
    Data: '01',
    Interpretation: "SDO_Error: Couldn't find object : 5200_86",
    errorStatus: 'error'
  },
  {
    msgNr: 321,
    OriginalMessage: '601 238160 00 12569874',
    CobID: '601',
    FrameData: '2381600012569874',
    type: 'R_SDO',
    AxisID: 1,
    CS: '23',
    Object: '#x6081',
    ObjectName: 'Profile velocity',
    Data: '74985612',
    Interpretation: '29848.33621 IU',
    errorStatus: 'blue'
  },
  {
    msgNr: 322,
    OriginalMessage: 'ARRAY11 = [',
    CobID: 'invalid',
    FrameData: 'invalid',
    type: 'invalid',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 323,
    OriginalMessage: '  ["701", "12 00"],',
    CobID: '701',
    FrameData: '1200',
    type: 'NMT_M',
    AxisID: 1,
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: '1200 - DATA too big for this type of message',
    errorStatus: 'error'
  },
  {
    msgNr: 324,
    OriginalMessage: '  ["701", "45"],',
    CobID: '701',
    FrameData: '45',
    type: 'NMT_M',
    AxisID: 1,
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: '45 - Unknown NMT state for the slave',
    errorStatus: 'error'
  },
  {
    msgNr: 325,
    OriginalMessage: '  ["700", "45"],',
    CobID: 'invalid',
    FrameData: 'invalid',
    type: 'invalid',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 326,
    OriginalMessage: '  ["70a", "05"],',
    CobID: '70a',
    FrameData: '05',
    type: 'NMT_M',
    AxisID: 10,
    CS: '05',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'NMT Operational',
    errorStatus: '-'
  },
  {
    msgNr: 327,
    OriginalMessage: '  ["70a", "7f"],',
    CobID: '70a',
    FrameData: '7f',
    type: 'NMT_M',
    AxisID: 10,
    CS: '7F',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'NMT Pre-Operational',
    errorStatus: '-'
  },
  {
    msgNr: 328,
    OriginalMessage: '  ["70a", "04"],',
    CobID: '70a',
    FrameData: '04',
    type: 'NMT_M',
    AxisID: 10,
    CS: '04',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'NMT Stopped',
    errorStatus: '-'
  },
  {
    msgNr: 329,
    OriginalMessage: '  ["70a", "4"],',
    CobID: '70a',
    FrameData: '-',
    type: 'NMT_M',
    AxisID: 10,
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'RTR request from master',
    errorStatus: 'neutral'
  },
  {
    msgNr: 330,
    OriginalMessage: '  ["70a", "4daedef"],',
    CobID: '70a',
    FrameData: '4daedef',
    type: 'NMT_M',
    AxisID: 10,
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: '4DAEDEF - DATA too big for this type of message',
    errorStatus: 'error'
  },
  {
    msgNr: 331,
    OriginalMessage: '  ["70a", ""],',
    CobID: '70a',
    FrameData: 'invalid',
    type: 'NMT_M',
    AxisID: 10,
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'INVALID - DATA too big for this type of message',
    errorStatus: 'error'
  },
  {
    msgNr: 332,
    OriginalMessage: '];',
    CobID: 'invalid',
    FrameData: 'invalid',
    type: 'invalid',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 333,
    OriginalMessage: '"605"\t"23 4585 00 458566"',
    CobID: '605',
    FrameData: '23458500458566',
    type: 'R_SDO',
    AxisID: 5,
    CS: '23',
    Object: '8545_00',
    ObjectName: 'Nothing Found',
    Data: '668545',
    Interpretation: "SDO_Error: Couldn't find object : 8545_00",
    errorStatus: 'error'
  },
  {
    msgNr: 334,
    OriginalMessage:
      '"USB-t,o-CAN V2 compact  CAN-1","77,8","1,09.9",      ,185,6,33 06 BC 00 00 00,3.....',
    CobID: '185',
    FrameData: '3306BC000000',
    type: 'TPDO1',
    AxisID: 5,
    CS: 2,
    Object: '#x607A / #x2023',
    ObjectName: 'Target position / Time jerk',
    Data: '00BC0633 / 0000',
    Interpretation: '12322355 IU / 0 ms',
    errorStatus: 'blue'
  },
  {
    msgNr: 335,
    OriginalMessage:
      'USB-to-CAN V2 compact  CAN-1,17,93.865,      ,605,8,2B 17 10 00 C8 00 00 00,+.......',
    CobID: '605',
    FrameData: '2B171000C8000000',
    type: 'R_SDO',
    AxisID: 5,
    CS: '2B',
    Object: '#x1017',
    ObjectName: 'Producer Heartbeat Time',
    Data: '00C8',
    Interpretation: '200 ms',
    errorStatus: 'blue'
  },
  {
    msgNr: 336,
    OriginalMessage: 'SB-to-CAN V2 compact  CAN-1,54,00:06.3,      ,702,1,5,.',
    CobID: '702',
    FrameData: '5',
    type: 'NMT_M',
    AxisID: 2,
    CS: '5',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'NMT Operational',
    errorStatus: '-'
  },
  {
    msgNr: 337,
    OriginalMessage:
      '        1\t    \t14:22:01\t441.473\t       6905.473\t\t         0\t       000\t      \t  2\t81\t00\t  \t  \t  \t  \t  \t  \t�_      \t',
    CobID: '000',
    FrameData: '8100',
    type: 'NMT',
    AxisID: 'All',
    CS: '81',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'All Axes - Reset Node',
    errorStatus: 'blue'
  },
  {
    msgNr: 338,
    OriginalMessage:
      '           2\t    \t14:22:01\t672.960\t        231.487\t\t      1793\t       701\t      \t  1\t00\t  \t  \t  \t  \t  \t  \t  \t_       \t      \t',
    CobID: '701',
    FrameData: '00',
    type: 'NMT_M',
    AxisID: 1,
    CS: '00',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'Boot Up',
    errorStatus: '-'
  },
  {
    msgNr: 339,
    OriginalMessage:
      '           5\t    \t14:22:04\t840.272\t       3166.812\t\t         0\t       000\t      \t  2\t01\t00\t  \t  \t  \t  \t  \t  \t__      \t\t',
    CobID: '000',
    FrameData: '0100',
    type: 'NMT',
    AxisID: 'All',
    CS: '01',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'All Axes - Start Remote Node',
    errorStatus: 'blue'
  },
  {
    msgNr: 340,
    OriginalMessage:
      '           8\t    \t14:22:04\t841.086\t          0.127\t\t       387\t       183\t      \t  2\t50\t02\t  \t  \t  \t  \t  \t  \tP_      \t',
    CobID: '183',
    FrameData: '5002',
    type: 'TPDO1',
    AxisID: 3,
    CS: 1,
    Object: '#x6040',
    ObjectName: 'Controlword',
    Data: '0250',
    Interpretation: '-',
    errorStatus: 'neutral'
  },
  {
    msgNr: 341,
    OriginalMessage:
      '           9\t    \t14:22:04\t841.243\t          0.157\t\t       641\t       281\t      \t  3\t50\t02\t00\t  \t  \t  \t  \t  \tP__     \t\t',
    CobID: '281',
    FrameData: '500200',
    type: 'TPDO2',
    AxisID: 1,
    CS: 2,
    Object: '#x6040 / #x100D',
    ObjectName: 'Controlword / Life time factor',
    Data: '0250 / 00',
    Interpretation: '- / -',
    errorStatus: 'neutral'
  },
  {
    msgNr: 342,
    OriginalMessage:
      '          12\t    \t14:22:07\t938.135\t       3096.584\t\t      1539\t       603\t      \t  8\t23\t03\t18\t01\t83\t04\t00\t80\t#___�__�\t',
    CobID: '603',
    FrameData: '2303180183040080',
    type: 'R_SDO',
    AxisID: 3,
    CS: '23',
    Object: '#x1803_01',
    ObjectName: 'COB-ID TPDO4',
    Data: '80000483',
    Interpretation: 'Disable [483h]',
    errorStatus: 'blue'
  },
  {
    msgNr: 343,
    OriginalMessage: '          13\t    \t14:22:07',
    CobID: 'invalid',
    FrameData: 'invalid',
    type: 'invalid',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 344,
    OriginalMessage:
      '          0    00000597         8  43  00  10  00  91  01  0E  00    1533.777080 R',
    CobID: '00000597',
    FrameData: '4300100091010E00',
    type: 'T_SDO',
    AxisID: 23,
    CS: '43',
    Object: '#x1000',
    ObjectName: 'Device type',
    Data: '000E0191',
    Interpretation: '-',
    errorStatus: 'random'
  },
  {
    msgNr: 345,
    OriginalMessage: ' 0    00000000         2  81  09                            1533.785080 R',
    CobID: '00000000',
    FrameData: '8109',
    type: 'NMT',
    AxisID: 9,
    CS: '81',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'Reset Node',
    errorStatus: 'blue'
  },
  {
    msgNr: 346,
    OriginalMessage: ' 0    00000080         0                                    1533.794430 R',
    CobID: '00000080',
    FrameData: '-',
    type: 'SYNC',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'SYNC',
    errorStatus: 'neutral'
  },
  {
    msgNr: 347,
    OriginalMessage: ' 0    00000617         8  23  05  10  00  80  00  00  80    1533.794870 R',
    CobID: '00000617',
    FrameData: '2305100080000080',
    type: 'R_SDO',
    AxisID: 23,
    CS: '23',
    Object: '#x1005',
    ObjectName: 'COD-ID of the SYNC Message',
    Data: '80000080',
    Interpretation: '-',
    errorStatus: 'random'
  },
  {
    msgNr: 348,
    OriginalMessage: ' 0    00000000         2  81  0A                            1533.795130 R',
    CobID: '00000000',
    FrameData: '810A',
    type: 'NMT',
    AxisID: 10,
    CS: '81',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'Reset Node',
    errorStatus: 'blue'
  },
  {
    msgNr: 349,
    OriginalMessage: ' 0    00000297         8  00  00  00  00  00  00  00  00    1533.795640 R',
    CobID: '00000297',
    FrameData: '0000000000000000',
    type: 'TPDO2',
    AxisID: 23,
    CS: 2,
    Object: '#x607A / #x6081',
    ObjectName: 'Target position / Profile velocity',
    Data: '00000000 / 00000000',
    Interpretation: '0 IU / 0 IU',
    errorStatus: 'blue'
  },
  {
    msgNr: 350,
    OriginalMessage: ' 0    00000717         1  05                                1533.795900 R',
    CobID: '00000717',
    FrameData: '05',
    type: 'NMT_M',
    AxisID: 23,
    CS: '05',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'NMT Operational',
    errorStatus: '-'
  },
  {
    msgNr: 351,
    OriginalMessage: ' 0    00000597         8  60  05  10  00  00  00  00  00    1533.796410 R',
    CobID: '00000597',
    FrameData: '6005100000000000',
    type: 'T_SDO',
    AxisID: 23,
    CS: '60',
    Object: '#x1005',
    ObjectName: 'COD-ID of the SYNC Message',
    Data: '-',
    Interpretation: 'Writing in #x1005 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 352,
    OriginalMessage: ' 0    00000000         2  81  0B                            1533.805630 R',
    CobID: '00000000',
    FrameData: '810B',
    type: 'NMT',
    AxisID: 11,
    CS: '81',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'Reset Node',
    errorStatus: 'blue'
  },
  {
    msgNr: 353,
    OriginalMessage: ' 0    00000597         8  23  06  10  00  20  4E  00  00    1533.806140 R',
    CobID: '00000597',
    FrameData: '23061000204E0000',
    type: 'T_SDO',
    AxisID: 23,
    CS: '23',
    Object: '#x1006',
    ObjectName: 'Communication cycle period',
    Data: '00004E20',
    Interpretation: '23 is a Command Specifier only for R_SDO',
    errorStatus: 'error'
  },
  {
    msgNr: 354,
    OriginalMessage: ' 0    00000080         0                                    1533.814780 R',
    CobID: '00000080',
    FrameData: '-',
    type: 'SYNC',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'SYNC',
    errorStatus: 'neutral'
  },
  {
    msgNr: 355,
    OriginalMessage: ' 0    00000617         8  80  06  10  00  01  00  04  05    1533.815230 R',
    CobID: '00000617',
    FrameData: '8006100001000405',
    type: 'R_SDO',
    AxisID: 23,
    CS: '80',
    Object: '#x1006',
    ObjectName: 'Communication cycle period',
    Data: '05040001',
    Interpretation: 'Invalid CS',
    errorStatus: 'error'
  },
  {
    msgNr: 356,
    OriginalMessage: ' 0    00000000         2  81  0C                            1533.816510 R',
    CobID: '00000000',
    FrameData: '810C',
    type: 'NMT',
    AxisID: 12,
    CS: '81',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'Reset Node',
    errorStatus: 'blue'
  },
  {
    msgNr: 357,
    OriginalMessage: '     000001A0         4  00  00  00  00                     305.106090 R',
    CobID: '000001A0',
    FrameData: '00000000',
    type: 'TPDO1',
    AxisID: 32,
    CS: 2,
    Object: '#x6041 / #x208E',
    ObjectName: 'Statusword / Auxiliary settings register',
    Data: '0000 / 0000',
    Interpretation: '- / false',
    errorStatus: 'neutral'
  },
  {
    msgNr: 358,
    OriginalMessage: ' 0    000001A1         4  00  00  00  00                     305.107110 R',
    CobID: '000001A1',
    FrameData: '00000000',
    type: 'TPDO1',
    AxisID: 33,
    CS: 2,
    Object: '#x6041 / #x208E',
    ObjectName: 'Statusword / Auxiliary settings register',
    Data: '0000 / 0000',
    Interpretation: '- / false',
    errorStatus: 'neutral'
  },
  {
    msgNr: 359,
    OriginalMessage: ' 0    0000077F         1  05                                 305.108990 R',
    CobID: '0000077F',
    FrameData: '05',
    type: 'NMT_M',
    AxisID: 127,
    CS: '05',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'NMT Operational',
    errorStatus: '-'
  },
  {
    msgNr: 360,
    OriginalMessage: ' 0    0000070B  R      1                                     305.109160 R',
    CobID: '0000070B',
    FrameData: '-',
    type: 'NMT_M',
    AxisID: 11,
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'RTR request from master',
    errorStatus: 'neutral'
  },
  {
    msgNr: 361,
    OriginalMessage: ' 0    0000070C  R      1                                     305.109330 R',
    CobID: '0000070C',
    FrameData: '-',
    type: 'NMT_M',
    AxisID: 12,
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'RTR request from master',
    errorStatus: 'neutral'
  },
  {
    msgNr: 362,
    OriginalMessage: ' 0    0000070B         1  05                                 305.109580 R',
    CobID: '0000070B',
    FrameData: '05',
    type: 'NMT_M',
    AxisID: 11,
    CS: '05',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'NMT Operational',
    errorStatus: '-'
  },
  {
    msgNr: 363,
    OriginalMessage: ' 0    0000070C         1  85                                 305.109840 R',
    CobID: '0000070C',
    FrameData: '85',
    type: 'NMT_M',
    AxisID: 12,
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: '85 - Unknown NMT state for the slave',
    errorStatus: 'error'
  },
  {
    msgNr: 364,
    OriginalMessage: ' 0    000001A0         4  00  00  00  00                     305.114790 R',
    CobID: '000001A0',
    FrameData: '00000000',
    type: 'TPDO1',
    AxisID: 32,
    CS: 2,
    Object: '#x6041 / #x208E',
    ObjectName: 'Statusword / Auxiliary settings register',
    Data: '0000 / 0000',
    Interpretation: '- / false',
    errorStatus: 'neutral'
  },
  {
    msgNr: 365,
    OriginalMessage: ' 0    0x000001A0         4  00  00  00  00                     305.114790 R',
    CobID: '000001A0',
    FrameData: '00000000',
    type: 'TPDO1',
    AxisID: 32,
    CS: 2,
    Object: '#x6041 / #x208E',
    ObjectName: 'Statusword / Auxiliary settings register',
    Data: '0000 / 0000',
    Interpretation: '- / false',
    errorStatus: 'neutral'
  },
  {
    msgNr: 366,
    OriginalMessage: ' 13:59:35:8311 Rx 1 0x080 s 0 ',
    CobID: '080',
    FrameData: '-',
    type: 'SYNC',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'SYNC',
    errorStatus: 'neutral'
  },
  {
    msgNr: 367,
    OriginalMessage: '13:59:35:8361 Rx 1 0x608 s 8 2B 0C 10 00 64 00 00 00 ',
    CobID: '608',
    FrameData: '2B0C100064000000',
    type: 'R_SDO',
    AxisID: 8,
    CS: '2B',
    Object: '#x100C',
    ObjectName: 'Guard Time',
    Data: '0064',
    Interpretation: 'Write: #x100C <- 0064h',
    errorStatus: 'neutral'
  },
  {
    msgNr: 368,
    OriginalMessage: '13:59:35:8371 Rx 1 0x588 s 8 60 0C 10 00 00 00 00 00 ',
    CobID: '588',
    FrameData: '600C100000000000',
    type: 'T_SDO',
    AxisID: 8,
    CS: '60',
    Object: '#x100C',
    ObjectName: 'Guard Time',
    Data: '-',
    Interpretation: 'Writing in #x100C - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 369,
    OriginalMessage: '13:59:35:8431 Rx 1 0x588 s 8 60 0D 10 00 00 00 00 00 ',
    CobID: '588',
    FrameData: '600D100000000000',
    type: 'T_SDO',
    AxisID: 8,
    CS: '60',
    Object: '#x100D',
    ObjectName: 'Life time factor',
    Data: '-',
    Interpretation: 'Writing in #x100D - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 370,
    OriginalMessage: '13:59:35:8511 Rx 1 0x080 s 0 ',
    CobID: '080',
    FrameData: '-',
    type: 'SYNC',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'SYNC',
    errorStatus: 'neutral'
  },
  {
    msgNr: 371,
    OriginalMessage: '13:59:35:8561 Rx 1 0x588 s 8 60 14 10 00 00 00 00 00 ',
    CobID: '588',
    FrameData: '6014100000000000',
    type: 'T_SDO',
    AxisID: 8,
    CS: '60',
    Object: '#x1014',
    ObjectName: 'COD-ID Emergency Object',
    Data: '-',
    Interpretation: 'Writing in #x1014 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 372,
    OriginalMessage: '13:59:35:8571 Rx 1 0x708 s 1 7F ',
    CobID: '708',
    FrameData: '7F',
    type: 'NMT_M',
    AxisID: 8,
    CS: '7F',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'NMT Pre-Operational',
    errorStatus: '-'
  },
  {
    msgNr: 373,
    OriginalMessage: '13:59:35:8621 Rx 1 0x608 s 8 2B 17 10 00 00 00 00 00 ',
    CobID: '608',
    FrameData: '2B17100000000000',
    type: 'R_SDO',
    AxisID: 8,
    CS: '2B',
    Object: '#x1017',
    ObjectName: 'Producer Heartbeat Time',
    Data: '0000',
    Interpretation: '0 ms',
    errorStatus: 'blue'
  },
  {
    msgNr: 374,
    OriginalMessage: '13:59:35:8711 Rx 1 0x080 s 0 ',
    CobID: '080',
    FrameData: '-',
    type: 'SYNC',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'SYNC',
    errorStatus: 'neutral'
  },
  {
    msgNr: 375,
    OriginalMessage: '13:59:35:8751 Rx 1 0x588 s 8 60 00 14 01 00 00 00 00 ',
    CobID: '588',
    FrameData: '6000140100000000',
    type: 'T_SDO',
    AxisID: 8,
    CS: '60',
    Object: '#x1400_01',
    ObjectName: 'COB-ID RPDO1',
    Data: '-',
    Interpretation: 'Writing in #x1400_01 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 376,
    OriginalMessage: '13:59:35:8911 Rx 1 0x080 s 0 ',
    CobID: '080',
    FrameData: '-',
    type: 'SYNC',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'SYNC',
    errorStatus: 'neutral'
  },
  {
    msgNr: 377,
    OriginalMessage: '13:59:35:8951 Rx 1 0x608 s 8 2F 00 16 00 00 00 00 00  ',
    CobID: '608',
    FrameData: '2F00160000000000',
    type: 'R_SDO',
    AxisID: 8,
    CS: '2F',
    Object: '#x1600_00',
    ObjectName: 'Number of mapped objects',
    Data: '00',
    Interpretation: '[208h] - Nr of mapped objects : 00',
    errorStatus: 'blue'
  },
  {
    msgNr: 378,
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
    msgNr: 379,
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
    msgNr: 380,
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
    msgNr: 381,
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
    msgNr: 382,
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
    msgNr: 383,
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
    msgNr: 384,
    OriginalMessage: '/****** Read Write DAta validation **********/',
    CobID: 'invalid',
    FrameData: 'invalid',
    type: 'invalid',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 385,
    OriginalMessage:
      '1\t    \t20:28:20\t424.527\t>> 2147483.647\t\t      1537\t       601\t      \t  8\t23\t64\t20\t00\t88\t00\t00\t40\t#d__ˆ__@\t',
    CobID: '601',
    FrameData: '2364200088000040',
    type: 'R_SDO',
    AxisID: 1,
    CS: '23',
    Object: '#x2064',
    ObjectName: 'Read/Write configuration register',
    Data: '40000088',
    Interpretation: 'StartAddress: 4000, 16bits data, EEPROM memory, AutoIncrement: 0',
    errorStatus: 'random'
  },
  {
    msgNr: 386,
    OriginalMessage:
      '2\t    \t20:28:20\t424.934\t          0.407\t\t      1409\t       581\t      \t  8\t60\t64\t20\t00\t00\t00\t00\t00\td______\t',
    CobID: '581',
    FrameData: '6064200000000000',
    type: 'T_SDO',
    AxisID: 1,
    CS: '60',
    Object: '#x2064',
    ObjectName: 'Read/Write configuration register',
    Data: '-',
    Interpretation: 'Writing in #x2064 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 387,
    OriginalMessage:
      '3\t    \t20:28:21\t406.268\t        981.334\t\t      1537\t       601\t      \t  8\t23\t65\t20\t00\t76\t54\t34\t12\t#e__vT4_\t',
    CobID: '601',
    FrameData: '2365200076543412',
    type: 'R_SDO',
    AxisID: 1,
    CS: '23',
    Object: '#x2065',
    ObjectName: 'Write data at address set in 2064h\n                            (16/32 bits)',
    Data: '12345476',
    Interpretation: 'Write,  0x4000h <- 5476h , EEPROM memory ',
    errorStatus: 'random'
  },
  {
    msgNr: 388,
    OriginalMessage:
      '4\t    \t20:28:21\t409.739\t          3.471\t\t      1409\t       581\t      \t  8\t60\t65\t20\t00\t00\t00\t00\t00\te______\t',
    CobID: '581',
    FrameData: '6065200000000000',
    type: 'T_SDO',
    AxisID: 1,
    CS: '60',
    Object: '#x2065',
    ObjectName: 'Write data at address set in 2064h\n                            (16/32 bits)',
    Data: '-',
    Interpretation: 'Writing in #x2065 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 389,
    OriginalMessage:
      '5\t    \t20:28:22\t144.714\t        734.975\t\t      1537\t       601\t      \t  8\t23\t65\t20\t00\t76\t54\t34\t12\t#e__vT4_\t',
    CobID: '601',
    FrameData: '2365200076543412',
    type: 'R_SDO',
    AxisID: 1,
    CS: '23',
    Object: '#x2065',
    ObjectName: 'Write data at address set in 2064h\n                            (16/32 bits)',
    Data: '12345476',
    Interpretation: 'Write,  0x4000h <- 5476h , EEPROM memory ',
    errorStatus: 'random'
  },
  {
    msgNr: 390,
    OriginalMessage:
      '6\t    \t20:28:22\t148.130\t          3.416\t\t      1409\t       581\t      \t  8\t60\t65\t20\t00\t00\t00\t00\t00\te______\t',
    CobID: '581',
    FrameData: '6065200000000000',
    type: 'T_SDO',
    AxisID: 1,
    CS: '60',
    Object: '#x2065',
    ObjectName: 'Write data at address set in 2064h\n                            (16/32 bits)',
    Data: '-',
    Interpretation: 'Writing in #x2065 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 391,
    OriginalMessage:
      '7\t    \t20:28:22\t304.564\t        156.434\t\t      1537\t       601\t      \t  8\t23\t65\t20\t00\t76\t54\t34\t12\t#e__vT4_\t',
    CobID: '601',
    FrameData: '2365200076543412',
    type: 'R_SDO',
    AxisID: 1,
    CS: '23',
    Object: '#x2065',
    ObjectName: 'Write data at address set in 2064h\n                            (16/32 bits)',
    Data: '12345476',
    Interpretation: 'Write,  0x4000h <- 5476h , EEPROM memory ',
    errorStatus: 'random'
  },
  {
    msgNr: 392,
    OriginalMessage:
      '8\t    \t20:28:22\t308.040\t          3.476\t\t      1409\t       581\t      \t  8\t60\t65\t20\t00\t00\t00\t00\t00\te______\t',
    CobID: '581',
    FrameData: '6065200000000000',
    type: 'T_SDO',
    AxisID: 1,
    CS: '60',
    Object: '#x2065',
    ObjectName: 'Write data at address set in 2064h\n                            (16/32 bits)',
    Data: '-',
    Interpretation: 'Writing in #x2065 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 393,
    OriginalMessage:
      '9\t    \t20:28:22\t482.672\t        174.632\t\t      1537\t       601\t      \t  8\t23\t65\t20\t00\t76\t54\t34\t12\t#e__vT4_\t',
    CobID: '601',
    FrameData: '2365200076543412',
    type: 'R_SDO',
    AxisID: 1,
    CS: '23',
    Object: '#x2065',
    ObjectName: 'Write data at address set in 2064h\n                            (16/32 bits)',
    Data: '12345476',
    Interpretation: 'Write,  0x4000h <- 5476h , EEPROM memory ',
    errorStatus: 'random'
  },
  {
    msgNr: 394,
    OriginalMessage:
      '10\t    \t20:28:22\t486.121\t          3.449\t\t      1409\t       581\t      \t  8\t60\t65\t20\t00\t00\t00\t00\t00\te______\t',
    CobID: '581',
    FrameData: '6065200000000000',
    type: 'T_SDO',
    AxisID: 1,
    CS: '60',
    Object: '#x2065',
    ObjectName: 'Write data at address set in 2064h\n                            (16/32 bits)',
    Data: '-',
    Interpretation: 'Writing in #x2065 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 395,
    OriginalMessage:
      '11\t    \t20:29:24\t604.978\t      62118.857\t\t      1537\t       601\t      \t  8\t40\t66\t20\t00\t00\t00\t34\t12\t@f____4_\t',
    CobID: '601',
    FrameData: '4066200000003412',
    type: 'R_SDO',
    AxisID: 1,
    CS: '40',
    Object: '#x2066',
    ObjectName: 'Read data from address set in 2064h\n                            (16/32 bits)',
    Data: '-',
    Interpretation: 'Read object #x2066',
    errorStatus: 'perfect'
  },
  {
    msgNr: 396,
    OriginalMessage:
      '12\t    \t20:29:24\t605.338\t          0.360\t                           <NTCAN Event>\t         0\t       000\tE     \t  6\t00\t00\t00\t00\t00\t00\t  \t  \tCONTROLLER(ok)\t',
    CobID: 'E',
    FrameData: '000000000000',
    type: 'TGroup',
    AxisID: 'G2 , G3 , G4',
    CS: '-',
    Object: '-',
    ObjectName: 'Can`t extract data from this row',
    Data: '-',
    Interpretation: 'TechnoCAN Message ',
    errorStatus: 'blue'
  },
  {
    msgNr: 397,
    OriginalMessage:
      '13\t    \t20:29:24\t605.355\t          0.017\t\t      1409\t       581\t      \t  8\t43\t66\t20\t00\t76\t54\t00\t00\tCf__vT__\t',
    CobID: '581',
    FrameData: '4366200076540000',
    type: 'T_SDO',
    AxisID: 1,
    CS: '43',
    Object: '#x2066',
    ObjectName: 'Read data from address set in 2064h\n                            (16/32 bits)',
    Data: '00005476',
    Interpretation: 'Read,  0x4000h -> 5476h , EEPROM memory ',
    errorStatus: 'random'
  },
  {
    msgNr: 398,
    OriginalMessage:
      '14\t    \t20:29:25\t932.547\t       1327.192\t\t      1537\t       601\t      \t  8\t40\t66\t20\t00\t00\t00\t34\t12\t@f____4_\t',
    CobID: '601',
    FrameData: '4066200000003412',
    type: 'R_SDO',
    AxisID: 1,
    CS: '40',
    Object: '#x2066',
    ObjectName: 'Read data from address set in 2064h\n                            (16/32 bits)',
    Data: '-',
    Interpretation: 'Read object #x2066',
    errorStatus: 'perfect'
  },
  {
    msgNr: 399,
    OriginalMessage:
      '15\t    \t20:29:25\t932.935\t          0.388\t\t      1409\t       581\t      \t  8\t43\t66\t20\t00\t76\t54\t00\t00\tCf__vT__\t',
    CobID: '581',
    FrameData: '4366200076540000',
    type: 'T_SDO',
    AxisID: 1,
    CS: '43',
    Object: '#x2066',
    ObjectName: 'Read data from address set in 2064h\n                            (16/32 bits)',
    Data: '00005476',
    Interpretation: 'Read,  0x4000h -> 5476h , EEPROM memory ',
    errorStatus: 'random'
  },
  {
    msgNr: 400,
    OriginalMessage:
      '16\t    \t20:29:26\t860.131\t        927.196\t\t      1537\t       601\t      \t  8\t40\t66\t20\t00\t00\t00\t34\t12\t@f____4_\t',
    CobID: '601',
    FrameData: '4066200000003412',
    type: 'R_SDO',
    AxisID: 1,
    CS: '40',
    Object: '#x2066',
    ObjectName: 'Read data from address set in 2064h\n                            (16/32 bits)',
    Data: '-',
    Interpretation: 'Read object #x2066',
    errorStatus: 'perfect'
  },
  {
    msgNr: 401,
    OriginalMessage:
      '17\t    \t20:29:26\t860.535\t          0.404\t\t      1409\t       581\t      \t  8\t43\t66\t20\t00\t76\t54\t00\t00\tCf__vT__\t',
    CobID: '581',
    FrameData: '4366200076540000',
    type: 'T_SDO',
    AxisID: 1,
    CS: '43',
    Object: '#x2066',
    ObjectName: 'Read data from address set in 2064h\n                            (16/32 bits)',
    Data: '00005476',
    Interpretation: 'Read,  0x4000h -> 5476h , EEPROM memory ',
    errorStatus: 'random'
  },
  {
    msgNr: 402,
    OriginalMessage:
      '18\t    \t20:29:27\t367.721\t        507.186\t\t      1537\t       601\t      \t  8\t40\t66\t20\t00\t00\t00\t34\t12\t@f____4_\t',
    CobID: '601',
    FrameData: '4066200000003412',
    type: 'R_SDO',
    AxisID: 1,
    CS: '40',
    Object: '#x2066',
    ObjectName: 'Read data from address set in 2064h\n                            (16/32 bits)',
    Data: '-',
    Interpretation: 'Read object #x2066',
    errorStatus: 'perfect'
  },
  {
    msgNr: 403,
    OriginalMessage:
      '19\t    \t20:29:27\t368.113\t          0.392\t\t      1409\t       581\t      \t  8\t43\t66\t20\t00\t76\t54\t00\t00\tCf__vT__\t',
    CobID: '581',
    FrameData: '4366200076540000',
    type: 'T_SDO',
    AxisID: 1,
    CS: '43',
    Object: '#x2066',
    ObjectName: 'Read data from address set in 2064h\n                            (16/32 bits)',
    Data: '00005476',
    Interpretation: 'Read,  0x4000h -> 5476h , EEPROM memory ',
    errorStatus: 'random'
  },
  {
    msgNr: 404,
    OriginalMessage:
      '1\t    \t20:34:19\t530.597\t     292162.484\t\t      1537\t       601\t      \t  8\t23\t64\t20\t00\t08\t00\t00\t40\t#d_____@\t',
    CobID: '601',
    FrameData: '2364200008000040',
    type: 'R_SDO',
    AxisID: 1,
    CS: '23',
    Object: '#x2064',
    ObjectName: 'Read/Write configuration register',
    Data: '40000008',
    Interpretation: 'StartAddress: 4000, 16bits data, EEPROM memory, AutoIncrement: 1',
    errorStatus: 'random'
  },
  {
    msgNr: 405,
    OriginalMessage:
      '20:34:19\t530.983\t          0.386\t\t      1409\t       581\t      \t  8\t60\t64\t20\t00\t00\t00\t00\t00\td______\t',
    CobID: '581',
    FrameData: '6064200000000000',
    type: 'T_SDO',
    AxisID: 1,
    CS: '60',
    Object: '#x2064',
    ObjectName: 'Read/Write configuration register',
    Data: '-',
    Interpretation: 'Writing in #x2064 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 406,
    OriginalMessage:
      '3\t    \t20:34:20\t549.751\t       1018.768\t\t      1537\t       601\t      \t  8\t23\t65\t20\t00\t76\t54\t34\t12\t#e__vT4_\t',
    CobID: '601',
    FrameData: '2365200076543412',
    type: 'R_SDO',
    AxisID: 1,
    CS: '23',
    Object: '#x2065',
    ObjectName: 'Write data at address set in 2064h\n                            (16/32 bits)',
    Data: '12345476',
    Interpretation: 'Write,  0x4000h <- 5476h , EEPROM memory ',
    errorStatus: 'random'
  },
  {
    msgNr: 407,
    OriginalMessage:
      '4\t    \t20:34:20\t553.256\t          3.505\t\t      1409\t       581\t      \t  8\t60\t65\t20\t00\t00\t00\t00\t00\te______\t',
    CobID: '581',
    FrameData: '6065200000000000',
    type: 'T_SDO',
    AxisID: 1,
    CS: '60',
    Object: '#x2065',
    ObjectName: 'Write data at address set in 2064h\n                            (16/32 bits)',
    Data: '-',
    Interpretation: 'Writing in #x2065 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 408,
    OriginalMessage:
      '5\t    \t20:34:20\t891.829\t        338.573\t\t      1537\t       601\t      \t  8\t23\t65\t20\t00\t76\t54\t34\t12\t#e__vT4_\t',
    CobID: '601',
    FrameData: '2365200076543412',
    type: 'R_SDO',
    AxisID: 1,
    CS: '23',
    Object: '#x2065',
    ObjectName: 'Write data at address set in 2064h\n                            (16/32 bits)',
    Data: '12345476',
    Interpretation: 'Write,  0x4001h <- 5476h , EEPROM memory ',
    errorStatus: 'random'
  },
  {
    msgNr: 409,
    OriginalMessage:
      '6\t    \t20:34:20\t895.334\t          3.505\t\t      1409\t       581\t      \t  8\t60\t65\t20\t00\t00\t00\t00\t00\te______\t',
    CobID: '581',
    FrameData: '6065200000000000',
    type: 'T_SDO',
    AxisID: 1,
    CS: '60',
    Object: '#x2065',
    ObjectName: 'Write data at address set in 2064h\n                            (16/32 bits)',
    Data: '-',
    Interpretation: 'Writing in #x2065 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 410,
    OriginalMessage:
      '7\t    \t20:34:21\t182.452\t        287.118\t\t      1537\t       601\t      \t  8\t23\t65\t20\t00\t76\t54\t34\t12\t#e__vT4_\t',
    CobID: '601',
    FrameData: '2365200076543412',
    type: 'R_SDO',
    AxisID: 1,
    CS: '23',
    Object: '#x2065',
    ObjectName: 'Write data at address set in 2064h\n                            (16/32 bits)',
    Data: '12345476',
    Interpretation: 'Write,  0x4002h <- 5476h , EEPROM memory ',
    errorStatus: 'random'
  },
  {
    msgNr: 411,
    OriginalMessage:
      '8\t    \t20:34:21\t185.938\t          3.486\t\t      1409\t       581\t      \t  8\t60\t65\t20\t00\t00\t00\t00\t00\te______\t',
    CobID: '581',
    FrameData: '6065200000000000',
    type: 'T_SDO',
    AxisID: 1,
    CS: '60',
    Object: '#x2065',
    ObjectName: 'Write data at address set in 2064h\n                            (16/32 bits)',
    Data: '-',
    Interpretation: 'Writing in #x2065 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 412,
    OriginalMessage:
      '9\t    \t20:34:21\t484.320\t        298.382\t\t      1537\t       601\t      \t  8\t23\t65\t20\t00\t76\t54\t34\t12\t#e__vT4_\t',
    CobID: '601',
    FrameData: '2365200076543412',
    type: 'R_SDO',
    AxisID: 1,
    CS: '23',
    Object: '#x2065',
    ObjectName: 'Write data at address set in 2064h\n                            (16/32 bits)',
    Data: '12345476',
    Interpretation: 'Write,  0x4003h <- 5476h , EEPROM memory ',
    errorStatus: 'random'
  },
  {
    msgNr: 413,
    OriginalMessage:
      '10\t    \t20:34:21\t487.772\t          3.452\t\t      1409\t       581\t      \t  8\t60\t65\t20\t00\t00\t00\t00\t00\te______\t',
    CobID: '581',
    FrameData: '6065200000000000',
    type: 'T_SDO',
    AxisID: 1,
    CS: '60',
    Object: '#x2065',
    ObjectName: 'Write data at address set in 2064h\n                            (16/32 bits)',
    Data: '-',
    Interpretation: 'Writing in #x2065 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 414,
    OriginalMessage:
      '11\t    \t20:34:21\t945.868\t        458.096\t\t      1537\t       601\t      \t  8\t23\t65\t20\t00\t76\t54\t34\t12\t#e__vT4_\t',
    CobID: '601',
    FrameData: '2365200076543412',
    type: 'R_SDO',
    AxisID: 1,
    CS: '23',
    Object: '#x2065',
    ObjectName: 'Write data at address set in 2064h\n                            (16/32 bits)',
    Data: '12345476',
    Interpretation: 'Write,  0x4004h <- 5476h , EEPROM memory ',
    errorStatus: 'random'
  },
  {
    msgNr: 415,
    OriginalMessage:
      '12\t    \t20:34:21\t949.344\t          3.476\t\t      1409\t       581\t      \t  8\t60\t65\t20\t00\t00\t00\t00\t00\te______\t',
    CobID: '581',
    FrameData: '6065200000000000',
    type: 'T_SDO',
    AxisID: 1,
    CS: '60',
    Object: '#x2065',
    ObjectName: 'Write data at address set in 2064h\n                            (16/32 bits)',
    Data: '-',
    Interpretation: 'Writing in #x2065 - OK ',
    errorStatus: 'perfect'
  },
  {
    msgNr: 416,
    OriginalMessage:
      '13\t    \t20:34:23\t390.722\t       1441.378\t\t      1537\t       601\t      \t  8\t40\t66\t20\t00\t00\t00\t34\t12\t@f____4_\t',
    CobID: '601',
    FrameData: '4066200000003412',
    type: 'R_SDO',
    AxisID: 1,
    CS: '40',
    Object: '#x2066',
    ObjectName: 'Read data from address set in 2064h\n                            (16/32 bits)',
    Data: '-',
    Interpretation: 'Read object #x2066',
    errorStatus: 'perfect'
  },
  {
    msgNr: 417,
    OriginalMessage:
      '14\t    \t20:34:23\t391.096\t          0.374\t\t      1409\t       581\t      \t  8\t43\t66\t20\t00\tC0\t74\t00\t00\tCf__Àt__\t',
    CobID: '581',
    FrameData: '43662000C0740000',
    type: 'T_SDO',
    AxisID: 1,
    CS: '43',
    Object: '#x2066',
    ObjectName: 'Read data from address set in 2064h\n                            (16/32 bits)',
    Data: '000074C0',
    Interpretation: 'Read,  0x4005h -> 74C0h , EEPROM memory ',
    errorStatus: 'random'
  },
  {
    msgNr: 418,
    OriginalMessage:
      '15\t    \t20:34:23\t792.730\t        401.634\t\t      1537\t       601\t      \t  8\t40\t66\t20\t00\t00\t00\t34\t12\t@f____4_\t',
    CobID: '601',
    FrameData: '4066200000003412',
    type: 'R_SDO',
    AxisID: 1,
    CS: '40',
    Object: '#x2066',
    ObjectName: 'Read data from address set in 2064h\n                            (16/32 bits)',
    Data: '-',
    Interpretation: 'Read object #x2066',
    errorStatus: 'perfect'
  },
  {
    msgNr: 419,
    OriginalMessage:
      '16\t    \t20:34:23\t793.075\t          0.345\t\t      1409\t       581\t      \t  8\t43\t66\t20\t00\tC0\t09\t00\t00\tCf__À___\t',
    CobID: '581',
    FrameData: '43662000C0090000',
    type: 'T_SDO',
    AxisID: 1,
    CS: '43',
    Object: '#x2066',
    ObjectName: 'Read data from address set in 2064h\n                            (16/32 bits)',
    Data: '000009C0',
    Interpretation: 'Read,  0x4006h -> 09C0h , EEPROM memory ',
    errorStatus: 'random'
  },
  {
    msgNr: 420,
    OriginalMessage:
      '17\t    \t20:34:24\t086.702\t        293.627\t\t      1537\t       601\t      \t  8\t40\t66\t20\t00\t00\t00\t34\t12\t@f____4_\t',
    CobID: '601',
    FrameData: '4066200000003412',
    type: 'R_SDO',
    AxisID: 1,
    CS: '40',
    Object: '#x2066',
    ObjectName: 'Read data from address set in 2064h\n                            (16/32 bits)',
    Data: '-',
    Interpretation: 'Read object #x2066',
    errorStatus: 'perfect'
  },
  {
    msgNr: 421,
    OriginalMessage:
      '18\t    \t20:34:24\t087.071\t          0.369\t\t      1409\t       581\t      \t  8\t43\t66\t20\t00\t09\t40\t00\t00\tCf___@__\t',
    CobID: '581',
    FrameData: '4366200009400000',
    type: 'T_SDO',
    AxisID: 1,
    CS: '43',
    Object: '#x2066',
    ObjectName: 'Read data from address set in 2064h\n                            (16/32 bits)',
    Data: '00004009',
    Interpretation: 'Read,  0x4007h -> 4009h , EEPROM memory ',
    errorStatus: 'random'
  },
  {
    msgNr: 422,
    OriginalMessage:
      '19\t    \t20:34:24\t360.329\t        273.258\t\t      1537\t       601\t      \t  8\t40\t66\t20\t00\t00\t00\t34\t12\t@f____4_\t',
    CobID: '601',
    FrameData: '4066200000003412',
    type: 'R_SDO',
    AxisID: 1,
    CS: '40',
    Object: '#x2066',
    ObjectName: 'Read data from address set in 2064h\n                            (16/32 bits)',
    Data: '-',
    Interpretation: 'Read object #x2066',
    errorStatus: 'perfect'
  },
  {
    msgNr: 423,
    OriginalMessage:
      '20\t    \t20:34:24\t360.679\t          0.350\t\t      1409\t       581\t      \t  8\t43\t66\t20\t00\t04\t04\t00\t00\tCf______\t',
    CobID: '581',
    FrameData: '4366200004040000',
    type: 'T_SDO',
    AxisID: 1,
    CS: '43',
    Object: '#x2066',
    ObjectName: 'Read data from address set in 2064h\n                            (16/32 bits)',
    Data: '00000404',
    Interpretation: 'Read,  0x4008h -> 0404h , EEPROM memory ',
    errorStatus: 'random'
  },
  {
    msgNr: 424,
    OriginalMessage:
      '21\t    \t20:34:24\t694.605\t        333.926\t\t      1537\t       601\t      \t  8\t40\t66\t20\t00\t00\t00\t34\t12\t@f____4_\t',
    CobID: '601',
    FrameData: '4066200000003412',
    type: 'R_SDO',
    AxisID: 1,
    CS: '40',
    Object: '#x2066',
    ObjectName: 'Read data from address set in 2064h\n                            (16/32 bits)',
    Data: '-',
    Interpretation: 'Read object #x2066',
    errorStatus: 'perfect'
  },
  {
    msgNr: 425,
    OriginalMessage:
      '22\t    \t20:34:24\t694.985\t          0.380\t\t      1409\t       581\t      \t  8\t43\t66\t20\t00\t57\t5A\t00\t00\tCf__WZ__\t',
    CobID: '581',
    FrameData: '43662000575A0000',
    type: 'T_SDO',
    AxisID: 1,
    CS: '43',
    Object: '#x2066',
    ObjectName: 'Read data from address set in 2064h\n                            (16/32 bits)',
    Data: '00005A57',
    Interpretation: 'Read,  0x4009h -> 5A57h , EEPROM memory ',
    errorStatus: 'random'
  },
  {
    msgNr: 426,
    OriginalMessage:
      '23\t    \t20:34:25\t087.729\t        392.744\t\t      1537\t       601\t      \t  8\t40\t66\t20\t00\t00\t00\t34\t12\t@f____4_\t',
    CobID: '601',
    FrameData: '4066200000003412',
    type: 'R_SDO',
    AxisID: 1,
    CS: '40',
    Object: '#x2066',
    ObjectName: 'Read data from address set in 2064h\n                            (16/32 bits)',
    Data: '-',
    Interpretation: 'Read object #x2066',
    errorStatus: 'perfect'
  },
  {
    msgNr: 427,
    OriginalMessage:
      '24\t    \t20:34:25\t088.071\t          0.342\t\t      1409\t       581\t      \t  8\t43\t66\t20\t00\tFF\tFF\t00\t00\tCf__ÿÿ__',
    CobID: '581',
    FrameData: '43662000FFFF0000',
    type: 'T_SDO',
    AxisID: 1,
    CS: '43',
    Object: '#x2066',
    ObjectName: 'Read data from address set in 2064h\n                            (16/32 bits)',
    Data: '0000FFFF',
    Interpretation: 'Read,  0x400Ah -> FFFFh , EEPROM memory ',
    errorStatus: 'random'
  },
  {
    msgNr: 428,
    OriginalMessage: '606 23 67 20 00 34 12 6A 03',
    CobID: '606',
    FrameData: '2367200034126A03',
    type: 'R_SDO',
    AxisID: 6,
    CS: '23',
    Object: '#x2067',
    ObjectName: 'Write data at specified address',
    Data: '036A1234',
    Interpretation: 'Write,  0x036Ah <- 1234h , Memory range : 0x1234h - 0x036Ah ',
    errorStatus: 'random'
  },
  {
    msgNr: 429,
    OriginalMessage: '605 23 64 20 00 08 00 38 56',
    CobID: '605',
    FrameData: '2364200008003856',
    type: 'R_SDO',
    AxisID: 5,
    CS: '23',
    Object: '#x2064',
    ObjectName: 'Read/Write configuration register',
    Data: '56380008',
    Interpretation: 'StartAddress: 5638, 16bits data, EEPROM memory, AutoIncrement: 1',
    errorStatus: 'random'
  },
  {
    msgNr: 430,
    OriginalMessage: '605 23 65 20 00 00 C4 00 00',
    CobID: '605',
    FrameData: '2365200000C40000',
    type: 'R_SDO',
    AxisID: 5,
    CS: '23',
    Object: '#x2065',
    ObjectName: 'Write data at address set in 2064h\n                            (16/32 bits)',
    Data: '0000C400',
    Interpretation: 'Write,  0x5638h <- C400h , EEPROM memory ',
    errorStatus: 'random'
  },
  {
    msgNr: 431,
    OriginalMessage: '605 23 65 20 00 00 00 00 00\t',
    CobID: '605',
    FrameData: '2365200000000000',
    type: 'R_SDO',
    AxisID: 5,
    CS: '23',
    Object: '#x2065',
    ObjectName: 'Write data at address set in 2064h\n                            (16/32 bits)',
    Data: '00000000',
    Interpretation: 'Write,  0x5639h <- 0000h , EEPROM memory ',
    errorStatus: 'random'
  },
  {
    msgNr: 432,
    OriginalMessage:
      'Line  3818: USB-to-CAN V2 compact  CAN-1,"5,297",185.639,      ,85,8,00 00 00 00 00 00 00 00,........',
    CobID: '85',
    FrameData: '0000000000000000',
    type: 'EMCY',
    AxisID: 5,
    CS: '-',
    Object: '1001',
    ObjectName: 'Error Register',
    Data: '00 ',
    Interpretation: 'EMCY : 0000 - Error Reset or No Error',
    errorStatus: 'error'
  },
  {
    msgNr: 433,
    OriginalMessage:
      'Line  4135: USB-to-CAN V2 compact  CAN-1,"6,774",210.979,      ,85,8,20 32 01 00 00 00 00 00, 2......',
    CobID: '85',
    FrameData: '2032010000000000',
    type: 'EMCY',
    AxisID: 5,
    CS: '-',
    Object: '1001',
    ObjectName: 'Error Register',
    Data: '01 ',
    Interpretation: 'EMCY : 3220 - DC-link under-voltage',
    errorStatus: 'error'
  },
  {
    msgNr: 434,
    OriginalMessage:
      'Line  4149: USB-to-CAN V2 compact  CAN-1,"6,808",211.114,      ,85,8,00 00 00 00 00 00 00 00,........',
    CobID: '85',
    FrameData: '0000000000000000',
    type: 'EMCY',
    AxisID: 5,
    CS: '-',
    Object: '1001',
    ObjectName: 'Error Register',
    Data: '00 ',
    Interpretation: 'EMCY : 0000 - Error Reset or No Error',
    errorStatus: 'error'
  },
  {
    msgNr: 435,
    OriginalMessage:
      'Line  4271: USB-to-CAN V2 compact  CAN-1,"8,126",256.244,      ,85,8,20 32 01 00 00 00 00 00, 2......',
    CobID: '85',
    FrameData: '2032010000000000',
    type: 'EMCY',
    AxisID: 5,
    CS: '-',
    Object: '1001',
    ObjectName: 'Error Register',
    Data: '01 ',
    Interpretation: 'EMCY : 3220 - DC-link under-voltage',
    errorStatus: 'error'
  },
  {
    msgNr: 436,
    OriginalMessage:
      'Line  4321: USB-to-CAN V2 compact  CAN-1,"8,278",258.213,      ,85,8,00 00 00 00 00 00 00 00,...',
    CobID: '85',
    FrameData: '0000000000000000',
    type: 'EMCY',
    AxisID: 5,
    CS: '-',
    Object: '1001',
    ObjectName: 'Error Register',
    Data: '00 ',
    Interpretation: 'EMCY : 0000 - Error Reset or No Error',
    errorStatus: 'error'
  },
  {
    msgNr: 437,
    OriginalMessage: '[19873] --  [BC] Stats std rtr Rx,Tx:     \t         0\t         0',
    CobID: 'invalid',
    FrameData: 'empty',
    type: 'invalid',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 438,
    OriginalMessage: '[19874] --  [BD] Stats ext rtr Rx,Tx:     \t         0\t         0',
    CobID: 'invalid',
    FrameData: 'empty',
    type: 'invalid',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 439,
    OriginalMessage: '[19880] --  [BI] Stats error count Rx,Tx: \t         0\t         0',
    CobID: 'invalid',
    FrameData: 'empty',
    type: 'invalid',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 440,
    OriginalMessage: '[19882] --  -',
    CobID: 'invalid',
    FrameData: 'invalid',
    type: 'invalid',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: 'Invalid Message',
    errorStatus: 'error'
  },
  {
    msgNr: 441,
    OriginalMessage: '-',
    CobID: 'Empty',
    FrameData: 'Line',
    type: '-',
    AxisID: 'All',
    CS: '-',
    Object: '-',
    ObjectName: '-',
    Data: '-',
    Interpretation: '-',
    errorStatus: '-'
  }
]
