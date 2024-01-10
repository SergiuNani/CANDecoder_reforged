export var InsertTextIntoTextArea = `var_lf
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
`
var a = `
(var_i1),dm = var_i2
(var_i1),pm = var_i2
(var_i1),spi = var_i2
(var_i1),dm = var_lf
(var_i1),pm = var_lf
(var_i1),spi = var_lf
(var_i1),dm = 0x12
(var_i1),pm = 0x12
(var_i1),spi = 0x45
(var_i1),dm = 0x12345678
(var_i1),pm = 0x12345678
(var_i1),spi = 0x12345678
(var_i1+),dm = var_i2
(var_i1+),pm = var_i2
(var_i1+),spi = var_i2
(var_i1+),dm = var_lf
(var_i1+),pm = var_lf
(var_i1+),spi = var_lf
(var_i1+),dm = 0x12
(var_i1+),pm = 0x12
(var_i1+),spi = 0x45
(var_i1+),dm = 0x12345678
(var_i1+),pm = 0x12345678
(var_i1+),spi = 0x12345678
var_i1= 0x55
var_i1 = (var_i2),dm
var_i1 = (var_i2),spi
var_i1 = (var_i2),dm
var_i1 = (var_i2+),dm
var_i1 = (var_i2+),spi
var_i1 = (var_i2+),dm
var_i1 = var_i2
var_i1 = -var_i2
var_i1 = var_lf(H)
var_i1 = var_lf(L)
var_i1,dm = var_i2
var_i1,dm = 0x12
apos = 0x12345678
apos(H) = 0x1234
apos(L) = 0x1234
cpos  = (var_i1),dm
cpos  = (var_i1),spi
cpos  = (var_i1),dm
cpos  = (var_i1+),dm
cpos  = (var_i1+),spi
cpos  = (var_i1+),dm
apos=cpos
apos=-cpos
apos = var_i1 <<2
apos = var_i1 <<14
tspd(h) = var_i1
tspd(l) = var_i1
aspd ,dm = cpos
aspd,dm = 0x12345678
`
