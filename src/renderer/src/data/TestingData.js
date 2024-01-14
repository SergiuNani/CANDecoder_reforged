export var InsertTextIntoTextArea = `127 00 00 //NOP 

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

`
var a = `

`
