export var InsertTextIntoTextArea = `
045 /56 34 00 12/ /55 44/ 28 2B //PVTP 0x123456, 0x4455, 0x128, 0x15
//0C 00 A0 "18 15" /34 56 12/ 00 /44 55/ /01 28/ 37 //PVTP 0x123456, 0x4455, 0x0128, 21
045 56 34 00 12 55 44 28 4B //PVTP 0x123456, 0x4455, 0x128, 0x25
045 56 34 00 12 55 44 55 2B //PVTP 0x123456, 0x4455, 0x155, 0x15
045 56 34 00 12 66 96 55 2B //PVTP 0x123456, 0x9666, 0x155, 0x15
045 77 99 00 18 66 96 55 2B //PVTP 0x189977, 0x9666, 0x155, 0x15
04A 11 11 00 11 22 22 33 08 //PVTP 0x111111, 0x2222, 0x33, 0x4
04A 11 11 00 11 22 22 33 0A //PVTP 0x111111, 0x2222, 0x33, 0x5

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


`
var a = `
(var_i1),dm = var_i2
(var_i1),pm = var_i2
(var_i1),spi = var_i2
(var_i1),dm = var_lf
(var_i1),pm = var_lf
(var_i1),spi = var_lf
(var_i1),dm = q0x12
(var_i1),pm = q0x12
(var_i1),spi = 0x45
(var_i1),dm = q0x12345678
(var_i1),pm = q0x12345678
(var_i1),spi = q0x12345678
(var_i1+),dm = var_i2
(var_i1+),pm = var_i2
(var_i1+),spi = var_i2
(var_i1+),dm = var_lf
(var_i1+),pm = var_lf
(var_i1+),spi = var_lf
(var_i1+),dm = q0x12
(var_i1+),pm = q0x12
(var_i1+),spi = 0x45
(var_i1+),dm = q0x12345678
(var_i1+),pm = q0x12345678
(var_i1+),spi = q0x12345678
var_i1= q0x55
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
var_i1,dm = q0x12
apos = q0x12345678
apos(H) = q0x1234
apos(L) = q0x1234
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
aspd,dm = q0x12345678
`
