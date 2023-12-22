export var InsertTextIntoTextArea = `
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


`
