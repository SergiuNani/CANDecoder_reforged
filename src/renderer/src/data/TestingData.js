export var InsertTextIntoTextArea = `

08 00 10 B0 04 00 11 03 66 46 //GiveData ?var_i1
4F 
0A 00 11 B4 04 00 10 03 66 5A 5B 01 // TakeData ?var_i1

08 00 10 B0 05 00 11 02 28 08 //?apos
4F 
0C 00 11 B4 05 00 10 02 28 5A 5B AB BA 2A //TakeData 32V ?apos


08 00 30 B0 04 00 21 03 67 77 //?var_i2
08 00 30 B0 05 00 21 02 28 38 //?apos

4F 
0A 00 21 B4 04 00 30 03 67 56 78 4B //var_i2 == 5678
4F 
0C 00 21 B4 05 00 30 02 28 56 78 12 34 54 //apos == 12345678

08 00 30 B2 04 00 21 09 B7 CF //?? homing_nr 
08 00 30 B2 05 00 21 02 A0 B2 //??CSPD
4F 
08 00 21 D4 03 09 B7 56 78 8E  //??homing_nr == 5678
4F 
0A 00 21 D5 03 02 A0 56 78 12 34 B9 //??CSPD == 12345678

0A 00 20 9D 08 0F F0 03 66 03 67 A1 
`
