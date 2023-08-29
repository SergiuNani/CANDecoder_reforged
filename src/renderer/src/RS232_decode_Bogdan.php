<?php

define ("BIT15",0x8000);
define ("BIT14",0x4000);
define ("BIT13",0x2000);
define ("BIT12",0x1000);
define ("BIT11",0x0800);
define ("BIT10",0x0400);
define ("BIT9" ,0x0200);
define ("BIT8" ,0x0100);
define ("BIT7" ,0x0080);
define ("BIT6" ,0x0040);
define ("BIT5" ,0x0020);
define ("BIT4" ,0x0010);
define ("BIT3" ,0x0008);
define ("BIT2" ,0x0004);
define ("BIT1" ,0x0002);
define ("BIT0" ,0x0001);

$text = file("Output.txt");

$lastRW_str = "";
$lastRW = "";

foreach ($text as $line) {
	//print "#$line<br>";
	$pR = strpos ($line, "Bytes Read");
	$pW = strpos ($line, "Bytes Write");
	if ($pW!== false) {
		$bytes = trim(substr($line, $pW + 13));
		$bytes_arr = explode(" ",$bytes);
		if ($lastRW != "") {
			if ($lastRW == "R" && $lastRW_str!="") {
				print "R : $lastRW_str<br>\n";
				process_bytes($lastRW_str);
				$lastRW_str = "";
				$lastRW = "W";
			}
		}
		$lastRW_str .= "$bytes ";
		if (count($bytes_arr)>4) {
			print "W : $lastRW_str<br>\n";
			process_bytes($lastRW_str);
			$lastRW_str = "";
		}
		$lastRW = "W";
	}
	else if ($pR!== false) {
		$bytes = trim(substr($line, $pR + 12));
		$bytes_arr = explode(" ",$bytes);
		if (count($bytes_arr)==1 && trim($bytes_arr[0]) == "4F") { continue; }
		if (count($bytes_arr)>4) { $lastRW = ""; }
		if ($lastRW != "") {
			if ($lastRW == "W" && $lastRW_str!="") {
				print "W : $lastRW_str<br>\n";
				process_bytes($lastRW_str);
				$lastRW_str = "";
				$lastRW = "R";
			}
		}
		$lastRW_str .= "$bytes ";
		if (count($bytes_arr)>4) {
			print "R : $lastRW_str<br>\n";
			process_bytes($lastRW_str);
			$lastRW_str = "";
		}
		$lastRW = "W";
	}
}

function process_bytes($bytes) {
	global $result;
	
	$bytes_arr = explode(" ",trim($bytes));
	//print_r($bytes_arr);
	for ($i=0;$i<count($bytes_arr);$i++){
		$len = hexdec($bytes_arr[$i]);
		//print "#$bytes_arr[$i]#";
		if (count($bytes_arr) < ($len+2)) { print "invalid tml length ($bytes_arr[$i] -> $len) <br>"; break; }
		$axis_id = (hexdec($bytes_arr[$i+1].$bytes_arr[$i+2]) & 0x0FF0) >> 4;
		$op_code = trim($bytes_arr[$i+3].$bytes_arr[$i+4]);
		if ($len == 4) { 
			$data0 = 0; 
			$data1 = 0;
			$data2 = 0;
			$data3 = 0;
		}
		if ($len == 6) { 
			$data0 = hexdec($bytes_arr[$i+5].$bytes_arr[$i+6]); 
			$data1 = 0;
			$data2 = 0;
			$data3 = 0;
		}
		if ($len == 8) { 
			$data0 = hexdec($bytes_arr[$i+5].$bytes_arr[$i+6]); 
			$data1 = hexdec($bytes_arr[$i+7].$bytes_arr[$i+8]);
			$data2 = 0;
			$data3 = 0;
		}
		if ($len == 10) { 
			$data0 = hexdec($bytes_arr[$i+5].$bytes_arr[$i+6]); 
			$data1 = hexdec($bytes_arr[$i+7].$bytes_arr[$i+8]);
			$data2 = hexdec($bytes_arr[$i+9].$bytes_arr[$i+10]);
			$data3 = 0;
		}
		if ($len == 12) { 
			$data0 = hexdec($bytes_arr[$i+5].$bytes_arr[$i+6]); 
			$data1 = hexdec($bytes_arr[$i+7].$bytes_arr[$i+8]);
			$data2 = hexdec($bytes_arr[$i+9].$bytes_arr[$i+10]);
			$data3 = hexdec($bytes_arr[$i+11].$bytes_arr[$i+12]);
		}
		$chk_sum = hexdec($bytes_arr[$i+$len+1]);
		$sum = 0;
		for ($j=0;$j<$len+1;$j++) {
			$sum += hexdec($bytes_arr[$i+$j]);
		}
		$sum = $sum % 256;
		if ($sum != $chk_sum) {print "invalid tml checksum (".$bytes_arr[$i+$len+1]." -> $chk_sum -> $sum) <br>"; break; }
		
		//print "TML | destination : $axis_id opcode : $op_code data : $data0 $data1 $data2 $data3 <br>";
		
		$sw_text = array($op_code, dechex($data0),  dechex($data1),  dechex($data2),  dechex($data3));
		find_tml($sw_text, $op_code, 0);
		print "[$axis_id] $result<br>";
		
		$i += $len + 1;
		//break;
	}
	//print "<br>\n";
}

function find_tml($sw_text, $word, $i) {
	$mli_code = hexdec($word);
	$mli_offset = $mli_code >> 10; 
	if ($mli_code == 0) {
		 add2result("NOP;");
		 return 0;
	}
	if ($mli_offset == 0x36) {
		$skip = 0;
		if ($mli_code == 0xD801) { 
			$word1 = str_pad($sw_text[$i+1],4,'0',STR_PAD_LEFT); $skip++;
			$axisid = (hexdec($word1) & 0x0FF0) >> 4;
			add2result("GetFwVer to AxisID $axisid;"); 
			return $skip; 
		}
	}
	if ($mli_offset == 0x2c) {
		$skip = 0;
		$word1 = str_pad($sw_text[$i+1],4,'0',STR_PAD_LEFT); $skip++;
		$word2 = str_pad($sw_text[$i+2],4,'0',STR_PAD_LEFT); $skip++;
		$axisid = (hexdec($word1) & 0x0FF0) >> 4;
		$address = "0x".strtoupper($word2);
		add2result("GiveMeData to AxisID $axisid from address $address;");
		return $skip; 
	}
	if ($mli_offset == 0x2d) {
		$skip = 0;
		$word1 = str_pad($sw_text[$i+1],4,'0',STR_PAD_LEFT); $skip++;
		$word2 = str_pad($sw_text[$i+2],4,'0',STR_PAD_LEFT); $skip++;
		$word3 = str_pad($sw_text[$i+3],4,'0',STR_PAD_LEFT); $skip++;
		$word4 = str_pad($sw_text[$i+4],4,'0',STR_PAD_LEFT); $skip++;
		$value = "";
		if ($mli_code & BIT10) {
			$value = "0x$word3 0x$word4";
		} else {
			$value = "0x$word3";
		}
		$axisid = (hexdec($word1) & 0x0FF0) >> 4;
		$address = "0x".strtoupper($word2);
		add2result("TakeData to AxisID $axisid from address $address with value $value;");
		return $skip; 
	}
	if ($mli_offset == 0x00) {
		if ($mli_code & BIT5){ add2result("ENDINIT;"); }
		else if ($mli_code & BIT4){if ($mli_code & BIT8) { add2result("CONTINUE;"); } else { add2result("BREAK;"); } }
		else if ($mli_code & BIT3){if ($mli_code & BIT8) { add2result("UPD;"); } else { add2result("UPD!;"); } }
		else if ($mli_code & BIT2){
			$n = '';
			if (!($mli_code & BIT6) &&  ($mli_code & BIT7)) { $n = '2'; }
			if ( ($mli_code & BIT6) && !($mli_code & BIT7)) { $n = '1'; }
			if (!($mli_code & BIT6) && !($mli_code & BIT7)) { $n = '0'; }
			if ($mli_code & BIT8) { add2result("STOP$n;"); } else { add2result("STOP$n!;"); } 
		}
		else if ($mli_code & BIT1){if ($mli_code & BIT8) { add2result("AXISON;"); } else { add2result("AXISOFF;"); } }
		else if ($mli_code & BIT0){ add2result("END;"); }
		return 0;
	}
	if ($mli_offset == 0x01) {
		$skip = 0;
		if ($mli_code & BIT9){
			if ($mli_code & BIT7){
				if ($mli_code & BIT5) { add2result("DISLSP;"); } else { add2result("DISLSN;"); } 
			} else {
				if ($mli_code & BIT3) {
					$word1 = str_pad($sw_text[$i+1],4,'0',STR_PAD_LEFT); $skip++;
					$word2 = str_pad($sw_text[$i+2],4,'0',STR_PAD_LEFT); $skip++;
					add2result("WAIT! ".hexdec($word2.$word1).";");
				} else if ($mli_code & BIT5) {
					if ($mli_code & BIT8) { add2result("ENLSP1;"); } else { add2result("ENLSP0;"); } 
				} else {
					if ($mli_code & BIT8) { add2result("ENLSN1;"); } else { add2result("ENLSN0;"); } 
				}		
			}
		}
		else if ($mli_code & BIT7){if ($mli_code & BIT5) { add2result("DIS2CAPI;"); } else { add2result("DISCAPI;"); } }
		else if ($mli_code & BIT6){if ($mli_code & BIT8) { add2result("ENPWM;"); } else { add2result("DISPWM;"); } }
		else if ($mli_code & BIT5){if ($mli_code & BIT8) { add2result("EN2CAPI1;"); } else { add2result("EN2CAPI0;"); } }
		else if ($mli_code & BIT4){if ($mli_code & BIT8) { add2result("EINT;"); } else { add2result("DINT;"); } }
		else if ($mli_code & BIT3){ add2result('WAIT!;'); }
		else if ($mli_code & BIT2){if ($mli_code & BIT8) { add2result("RETI;"); } else { add2result("RET;"); } }
		else if ($mli_code & BIT1){ add2result("RESET;"); }
		else if ($mli_code & BIT0){if ($mli_code & BIT8) { add2result("ENCAPI1;"); } else { add2result("ENCAPI0;"); } }
		return $skip;
	}
	if ($mli_offset == 0x02) {
		$type = 0;
		if ($mli_code & BIT0){ add2result("AXISID"); }
		else if ($mli_code & BIT1){ add2result("GROUPID"); $type = 1; }
		else if ($mli_code & BIT2){ add2result("CANBR"); }
		else if ($mli_code & BIT3){ add2result("CANOC"); }
		else if ($mli_code & BIT4){ add2result("SPIBR"); }
		else if ($mli_code & BIT5){ add2result("SCIBR"); }
		else if ($mli_code & BIT6){ add2result("ADDGRID"); $type = 1; }
		else if ($mli_code & BIT7){ add2result("REMGRID"); $type = 1; }
		if ($type == 0) {
			if ($mli_code & BIT8) { add2result(' '.get_var_name($sw_text[$i+1]).';'); } 
			else { add2result(' 0x'.$sw_text[$i+1].';'); }
		}
		if ($type == 1) {
			if ($mli_code & BIT8) { add2result(' '.get_var_name($sw_text[$i+1]).';'); } 
			else { 
				$bits = get_bit_position_array($sw_text[$i+1]);
				foreach($bits as $k=>$v) { $bits[$k]++; }
				add2result(" (".implode(",",$bits).")");
			}
		}
		return 1;
	}
	if ($mli_offset == 0x04) {
		if ($mli_code == 0x1020) { add2result("RSTSTSENDAT;"); return 0; }
		if ($mli_code == 0x1010) { add2result("DIRENDAT_CW;"); return 0; }
		if ($mli_code == 0x1008) { add2result("DIRENDAT_CCW;"); return 0; }
		if ($mli_code == 0x1001) { add2result("IN_PORT0 ".get_var_name($sw_text[$i+1]).";"); return 1; }
		if ($mli_code == 0x1100) { add2result("OUT_PORT0 ".get_var_name($sw_text[$i+1]).";"); return 1; }
		if ($mli_code == 0x1080) { add2result("POSENDAT ".get_var_name($sw_text[$i+1],2).";"); return 1; }
		if ($mli_code == 0x1040) { add2result("STSENDAT ".get_var_name($sw_text[$i+1]).";"); return 1; }
		if ($mli_code == 0x1004) { add2result("GETOFFSET ".get_var_name($sw_text[$i+1],2).";"); return 1; }
		if ($mli_code == 0x1002) { add2result("SETOFFSET ".get_var_name($sw_text[$i+1],2).";"); return 1; }
	}
	if ($mli_offset == 0x05) {
		if ($mli_code == 0x1404) { 
			add2result('SETSYNC '.hexdec($sw_text[$i+2].$sw_text[$i+1]).';'); 
			return 2; 
		}
		if ($mli_code == 0x1401) { 
			add2result('MENU 0x'.$sw_text[$i+1].';'); 
			return 1; 
		}
	}
	if ($mli_offset == 0x06) {
		if ($mli_code == 0x1880) { 
			$word1 = $sw_text[$i+1];
			add2result('SETPVT 0x'.$word1.';'); 
			return 1; 
		}
		$skip = 0;
		$word1 = str_pad($sw_text[$i+$skip+1],4,'0',STR_PAD_LEFT); $skip++;
		$word2 = str_pad($sw_text[$i+$skip+1],4,'0',STR_PAD_LEFT); $skip++;
		$word3 = str_pad($sw_text[$i+$skip+1],4,'0',STR_PAD_LEFT); $skip++;
		
		$pos = substr($word2,0,2).$word1;
		$spd = substr($word2,2,2).$word3;
		
		$word4 = hexdec($sw_text[$i+$skip+1]); $skip++;
		$val = $mli_code & 0x7F;
		add2result('PVTP '.hexdec($pos).', '.hexdec($spd).', '.$word4.', '.$val.';');
		return $skip;
	}
	if ($mli_offset == 0x07) {
		$skip = 0;
		if ($mli_code & BIT7) { 
			$val = $mli_code & 0xF;
			add2result('FUNCTION '.$val.';'); 
		}
		else if ($mli_code & BIT3) { add2result('SAVE;'); }
		else if ($mli_code & BIT2) { add2result('FAULTR;'); }
		else if ($mli_code & BIT1) { add2result('ABORT;'); }
		else {
			$word1 = $sw_text[$i+$skip+1]; $skip++;
			if ($mli_code & BIT9) { 
				$word1 = get_var_name($word1);
			} else {
				$wvar = get_label_name($word1,1);
				if ($word1!=$wvar) { $word1 = $wvar; } else { $word1 = '0x'.$word1; }
			}
			add2result('CALLS '.$word1.'; ');
		}
		return $skip;
	}
	if ($mli_offset == 0x08 || $mli_offset == 0x09) {
		$size = (($mli_code & BIT10)==0?0:1)+1;
		if ($mli_code & 0x200) { $destination = 0x800; } else {	$destination = 0x200; } 
		$destination += ($mli_code & 0x1FF); 
		$destination = bn_dec_hex($destination); 
		$destination = get_var_name($destination,$size);
		if (!($mli_code & 0x400)) {
			$source = '0x'.str_pad($sw_text[$i+1],4,'0',STR_PAD_LEFT);
			add2result($destination.' = '.$source.';');
			return 1;
		} else {
			$source = '0x'.str_pad($sw_text[$i+2],4,'0',STR_PAD_LEFT).str_pad($sw_text[$i+1],4,'0',STR_PAD_LEFT);
			add2result($destination.' = '.$source.';');
			return 2;
		}
	}
	if ($mli_offset == 0x0A || $mli_offset == 0x0B || $mli_offset == 0x0C || $mli_offset == 0x0D) {
		$size = (($mli_code & BIT10)==0?0:1)+1;
		$skip = 0;
		$sign = ($mli_code & BIT12) ? '-' : '';
		if ($mli_code & BIT9) { $destination = 0x800; } else {	$destination = 0x200; } 
		$destination += ($mli_code & 0x1FF); 
		$destination = bn_dec_hex($destination); 
		$var = str_pad($sw_text[$i+$skip+1],4,'0',STR_PAD_LEFT); $skip++;
		//print "#$destination#$var#";
		if ($destination=="02B2" && $var=="0228") {
			add2result('STA;');
		} else {
			$var = get_var_name($var,$size); 
			$destination = get_var_name($destination,$size);
			add2result($destination.' = '.$sign.$var.';');
		}
		return $skip;
	}
	if ($mli_offset == 0x0E || $mli_offset == 0x0F) {
		$size = (($mli_code & BIT10)==0?0:1)+1;
		$skip = 0;
		if ($mli_code & BIT9) { $destination = 0x800; } else {	$destination = 0x200; } 
		$destination += ($mli_code & 0x1FF); 
		$destination = bn_dec_hex($destination); 
		$destination = get_var_name($destination,$size);
		if ($mli_code & BIT10) {
			$word2 = str_pad($sw_text[$i+$skip+1],4,'0',STR_PAD_LEFT); $skip++;
			$word1 = str_pad($sw_text[$i+$skip+1],4,'0',STR_PAD_LEFT); $skip++;
		} else {
			$word1 = str_pad($sw_text[$i+$skip+1],4,'0',STR_PAD_LEFT); $skip++;
			$word2 = '';
		}
		add2result($destination.' += 0x'.$word1.$word2.';');
		return $skip;
	}
	if ($mli_offset == 0x10 || $mli_offset == 0x11) {
		$size = (($mli_code & BIT10)==0?0:1)+1;
		if ($mli_code & BIT9) { $destination = 0x800; } else {	$destination = 0x200; } 
		$destination += ($mli_code & 0x1FF); 
		$destination = bn_dec_hex($destination); 
		$destination = get_var_name($destination,$size);
		$source = get_var_name($sw_text[$i+1],$size);
		add2result($destination.' += '.$source.';');
		return 1;
	}
	if ($mli_offset == 0x12 || $mli_offset == 0x13) {
		$size = (($mli_code & BIT10)==0?0:1)+1;
		if ($mli_code & BIT9) { $destination = 0x800; } else {	$destination = 0x200; } 
		$destination += ($mli_code & 0x1FF); 
		$destination = bn_dec_hex($destination); 
		$destination = get_var_name($destination,$size);
		$size = $mli_code & BIT10;
		if ($size) {
			$source = '0x'.str_pad($sw_text[$i+2],4,'0',STR_PAD_LEFT).str_pad($sw_text[$i+1],4,'0',STR_PAD_LEFT);
		} else {
			$source = '0x'.str_pad($sw_text[$i+1],4,'0',STR_PAD_LEFT);
		}
		add2result($destination.' -= '.$source.';');
		return $size==0?1:2;
	}
	if ($mli_offset == 0x14 || $mli_offset == 0x15) {
		$size = (($mli_code & BIT10)==0?0:1)+1;
		if ($mli_code & BIT9) { $destination = 0x800; } else {	$destination = 0x200; } 
		$destination += ($mli_code & 0x1FF); 
		$destination = bn_dec_hex($destination); 
		$destination = get_var_name($destination,$size);
		$source = get_var_name($sw_text[$i+1],$size);
		add2result($destination.' -= '.$source.';');
		return 1;
	}
	if ($mli_offset == 0x16 || $mli_offset == 0x17) {
		$skip = 0;
		$mode_instr = false;
		if ($mli_code & BIT10){  
			$instr = 'SRBL '; 
			$var = get_var_name(str_pad($sw_text[$i+$skip+1],4,'0',STR_PAD_LEFT),1); $skip++;
		} else { 
			$instr = 'SRB '; 
			if ($mli_code & BIT9) { $var = 0x800; } else {	$var = 0x200; } 
			$var += ($mli_code & 0x1FF); 
			$var = bn_dec_hex($var); 
			if ($var=="0365") {
				$mode_instr = true;
				$word1 = str_pad($sw_text[$i+$skip+1],4,'0',STR_PAD_LEFT); $skip++;
				$word2 = str_pad($sw_text[$i+$skip+1],4,'0',STR_PAD_LEFT); $skip++;
				     if ($word1 == "FFFC" && $word2 == "0000") { add2result("STOPLOG;"); } 
				else if ($word1 == "FFFC" && $word2 == "0001") { add2result("STARTLOG 1;"); } 
				else if ($word1 == "FFFC" && $word2 == "0002") { add2result("STARTLOG 2;"); } 
				else { 
					$var = get_var_name($var,1);
					add2result( $instr.$var.', 0x'.$word1.', 0x'.$word2.';'); 
				}
			}
			if ($var=="0309") {
				$mode_instr = true;
				$word1 = str_pad($sw_text[$i+$skip+1],4,'0',STR_PAD_LEFT); $skip++;
				$word2 = str_pad($sw_text[$i+$skip+1],4,'0',STR_PAD_LEFT); $skip++;
				     if ($word1 == "BFC1" && $word2 == "8701") { add2result("MODE PP;"); } 
				else if ($word1 == "BEC1" && $word2 == "8601") { add2result("MODE PP2;"); } 
				else if ($word1 == "BDC1" && $word2 == "8501") { add2result("MODE PP1;"); } 
				else if ($word1 == "BCC1" && $word2 == "8401") { add2result("MODE PP0;"); } 
				else if ($word1 == "BBC1" && $word2 == "8301") { add2result("MODE SP;"); } 
				else if ($word1 == "BAC1" && $word2 == "8201") { add2result("MODE SP0;"); } 
				else if ($word1 == "BFC2" && $word2 == "8702") { add2result("MODE PC;"); } 
				else if ($word1 == "BEC2" && $word2 == "8602") { add2result("MODE PC2;"); } 
				else if ($word1 == "BDC2" && $word2 == "8502") { add2result("MODE PC1;"); } 
				else if ($word1 == "BCC2" && $word2 == "8402") { add2result("MODE PC0;"); } 
				else if ($word1 == "BBC2" && $word2 == "8302") { add2result("MODE SC;"); } 
				else if ($word1 == "BAC2" && $word2 == "8202") { add2result("MODE SC0;"); } 
				else if ($word1 == "B1C3" && $word2 == "8103") { add2result("MODE TC;"); } 
				else if ($word1 == "B0C3" && $word2 == "8003") { add2result("MODE VC;"); } 
				else if ($word1 == "BFC4" && $word2 == "8704") { add2result("MODE PPD;"); } 
				else if ($word1 == "BEC4" && $word2 == "8604") { add2result("MODE PPD2;"); } 
				else if ($word1 == "BDC4" && $word2 == "8504") { add2result("MODE PPD1;"); } 
				else if ($word1 == "BCC4" && $word2 == "8404") { add2result("MODE PPD0;"); } 
				else if ($word1 == "BBC4" && $word2 == "8304") { add2result("MODE SPD;"); } 
				else if ($word1 == "BAC4" && $word2 == "8204") { add2result("MODE SPD0;"); } 
				else if ($word1 == "B1C8" && $word2 == "8108") { add2result("MODE TT;"); } 
				else if ($word1 == "B0C8" && $word2 == "8008") { add2result("MODE VT;"); } 
				else if ($word1 == "BFC0" && $word2 == "8700") { add2result("MODE PE;"); } 
				else if ($word1 == "BEC0" && $word2 == "8600") { add2result("MODE PE2;"); } 
				else if ($word1 == "BDC0" && $word2 == "8500") { add2result("MODE PE1;"); } 
				else if ($word1 == "BCC0" && $word2 == "8400") { add2result("MODE PE0;"); } 
				else if ($word1 == "B3C0" && $word2 == "8300") { add2result("MODE SE;"); } 
				else if ($word1 == "B2C0" && $word2 == "8200") { add2result("MODE SE0;"); } 
				else if ($word1 == "B1C0" && $word2 == "8100") { add2result("MODE TES;"); } 
				else if ($word1 == "B0C0" && $word2 == "8000") { add2result("MODE VES;"); } 
				else if ($word1 == "B1E0" && $word2 == "8120") { add2result("MODE TEF;"); } 
				else if ($word1 == "B0E0" && $word2 == "8020") { add2result("MODE VEF;"); } 
				else if ($word1 == "B7C5" && $word2 == "8705") { add2result("MODE GS;"); } 
				else if ($word1 == "B6C5" && $word2 == "8605") { add2result("MODE GS2;"); } 
				else if ($word1 == "B5C5" && $word2 == "8505") { add2result("MODE GS1;"); } 
				else if ($word1 == "B4C5" && $word2 == "8405") { add2result("MODE GS0;"); } 
				else if ($word1 == "B7C6" && $word2 == "8706") { add2result("MODE CS;"); } 
				else if ($word1 == "B6C6" && $word2 == "8606") { add2result("MODE CS2;"); } 
				else if ($word1 == "B5C6" && $word2 == "8506") { add2result("MODE CS1;"); } 
				else if ($word1 == "B4C6" && $word2 == "8406") { add2result("MODE CS0;"); } 
				else if ($word1 == "FFC1" && $word2 == "8707") { add2result("MODE PSC;"); } 
				else if ($word1 == "FFC1" && $word2 == "8709") { add2result("MODE PVT;"); } 
				else if ($word1 == "FFC0" && $word2 == "870A") { add2result("MODE PT;"); } 
				else if ($word1 == "BFCC" && $word2 == "870C") { add2result("MODE VM;"); } 
				else if ($word1 == "BFCB" && $word2 == "870B") { add2result("MODE PSIN;"); } 
				else if ($word1 == "BBCB" && $word2 == "830B") { add2result("MODE SSIN;"); } 
				else if ($word1 == "B1CB" && $word2 == "810B") { add2result("MODE TSIN;"); } 
				else if ($word1 == "B0CB" && $word2 == "800B") { add2result("MODE VSIN;"); } 
				else if ($word1 == "FF3F" && $word2 == "0000") { add2result("EXTREF 0;"); } 
				else if ($word1 == "FF7F" && $word2 == "0040") { add2result("EXTREF 1;"); } 
				else if ($word1 == "FFBF" && $word2 == "0080") { add2result("EXTREF 2;"); } 
				else if ($word1 == "FFFF" && $word2 == "00C0") { add2result("EXTREF 3;"); } 
				else if ($word1 == "FFFF" && $word2 == "2000") { add2result("CPA;"); } 
				else if ($word1 == "DFFF" && $word2 == "0000") { add2result("CPR;"); } 
				else if ($word1 == "EFFF" && $word2 == "0000") { add2result("REG_OFF;"); } 
				else if ($word1 == "FFFF" && $word2 == "1000") { add2result("REG_ON;"); } 
				else if ($word1 == "F7FF" && $word2 == "0000") { add2result("RGM;"); } 
				else if ($word1 == "FFFF" && $word2 == "0800") { add2result("SGM;"); } 
				else if ($word1 == "BFFF" && $word2 == "0000") { add2result("TUM0;"); } 
				else if ($word1 == "FFFF" && $word2 == "4000") { add2result("TUM1;"); } 
				
				else { add2result( $instr.'MCR, 0x'.$word1.', 0x'.$word2.';'); }
			} else {
				$var = get_var_name($var,1);
			}
		}
		if ($mode_instr==false) {
			$word1 = str_pad($sw_text[$i+$skip+1],4,'0',STR_PAD_LEFT); $skip++;
			$word2 = str_pad($sw_text[$i+$skip+1],4,'0',STR_PAD_LEFT); $skip++;
			add2result( $instr.$var.', 0x'.$word1.', 0x'.$word2.';');
		}
		return $skip;
	}
	if ($mli_offset == 0x19) {
		add2result("BEGIN;");
		return 0;
	}
	if ($mli_offset == 0x1C) {
		$skip = 0;
		//$val = ($mli_code & 0x000F); 
		$word1 = '';
		$word2 = '';
		$word3 = '';
		$word4 = '';
		//if ($val <=9) {
		//	$word1 = $sw_text[$i+$skip+1]; $skip++;
		//	$word2 = $sw_text[$i+$skip+1]; $skip++;
		//	$word3 = $sw_text[$i+$skip+1]; $skip++;
		//}
		$word1 = str_pad(@$sw_text[$i+1],4,'0',STR_PAD_LEFT);
		$word2 = str_pad(@$sw_text[$i+2],4,'0',STR_PAD_LEFT);
		$operation = '';
		$size = 1;
		$is_fixed = false;
		     if (($mli_code==0x7192 || $mli_code==0x7092) && $word1=="0228") { $operation = "!ALPO "; $size=2; $is_fixed = false; }
		else if (($mli_code==0x7192 || $mli_code==0x7092) && $word1=="0988") { $operation = "!AMPO "; $size=2; $is_fixed = false; }
		else if (($mli_code==0x7183 || $mli_code==0x7083) && $word1=="0228") { $operation = "!ALPU "; $size=2; $is_fixed = false; }
		else if (($mli_code==0x7183 || $mli_code==0x7083) && $word1=="0988") { $operation = "!AMPU "; $size=2; $is_fixed = false; }
		else if (($mli_code==0x7198 || $mli_code==0x7098) && $word1=="02C0") { $operation = "!AT ";   $size=2; $is_fixed = false; }
		else if (($mli_code==0x7190 || $mli_code==0x7090) && $word1=="02AE") { $operation = "!RO ";   $size=2; $is_fixed = false; }
		else if (($mli_code==0x7194 || $mli_code==0x7094) && $word1=="02BA") { $operation = "!RPO ";  $size=2; $is_fixed = false; }
		else if (($mli_code==0x7194 || $mli_code==0x7094) && $word1=="0988") { $operation = "!RMPO "; $size=2; $is_fixed = false; }
		else if (($mli_code==0x7185 || $mli_code==0x7085) && $word1=="02BA") { $operation = "!RPU ";  $size=2; $is_fixed = false; }
		else if (($mli_code==0x7185 || $mli_code==0x7085) && $word1=="0988") { $operation = "!RMPU "; $size=2; $is_fixed = false; }
		else if (($mli_code==0x71B9 || $mli_code==0x70B9) && $word1=="02C2") { $operation = "!RT ";   $size=2; $is_fixed = false; }
		else if (($mli_code==0x7181 || $mli_code==0x7081) && $word1=="02AE") { $operation = "!RU ";   $size=2; $is_fixed = false; }
		else if (($mli_code==0x7196 || $mli_code==0x7096) && $word1=="098A") { $operation = "!LSO ";  $size=2; $is_fixed = true; }
		else if (($mli_code==0x7196 || $mli_code==0x7096) && $word1=="022C") { $operation = "!MSO ";  $size=2; $is_fixed = true; }
		else if (($mli_code==0x7187 || $mli_code==0x7087) && $word1=="098A") { $operation = "!LSU ";  $size=2; $is_fixed = true; }
		else if (($mli_code==0x7187 || $mli_code==0x7087) && $word1=="022C") { $operation = "!MSU ";  $size=2; $is_fixed = true; }
		else if (($mli_code==0x7190 || $mli_code==0x7090)) { 
			$operation = "!VO "; 
			$size=2; 
			$operation .= get_var_name($word1,$size).", ";
		}
		else if (($mli_code==0x7181 || $mli_code==0x7081)) { 
			$operation = "!VU "; 
			$size=2; 
			$operation .= get_var_name($word1,$size).", ";
		}
		
		if ($mli_code & 0x0080) {
			$word1 = $sw_text[$i+$skip+1]; $skip++;
			if ($mli_code & 0x0010) {
				if ($mli_code & 0x0100) {
					$word2 = str_pad($sw_text[$i+$skip+1],4,'0',STR_PAD_LEFT); $skip++;
					if ($operation=='') {
						add2result('event 1 compare var '.get_var_name($word1).' with variable '.get_var_name($word2).'; ');
					} else {		
						add2result($operation.' '.get_var_name($word2,$size).'; ');
					}
					return $skip;	
				} else {
					if ($mli_code & 0x0040)	{
						$word1 = floor(log(hexdec($word1), 2));
						$val = $mli_code & 0x0001 == 1 ? 0 : 1;
						
						add2result('!IN#'.$word1.' '.$val.';');
						return $skip;						
					} else {
						$word3 = str_pad($sw_text[$i+$skip+1],4,'0',STR_PAD_LEFT); $skip++;
						$word4 = str_pad($sw_text[$i+$skip+1],4,'0',STR_PAD_LEFT); $skip++;
						$value = hexdec($word4.$word3); 
						if ($is_fixed) { $value /= 65536; }
						if ($operation=='') {
							add2result('event 2 compare var '.get_var_name($word1).' with value '.$value.';');
						} else {
							add2result($operation.' '.$value.'; ');
						}
						return $skip;	
					}
				}
			} else {
				if ($mli_code & 0x0100) {
					$word2 = str_pad($sw_text[$i+$skip+1],4,'0',STR_PAD_LEFT); $skip++;
					if ($operation=='') {
						add2result('event 3 compare var '.get_var_name($word1).' with variable '.get_var_name($word2).';');
					} else {
						add2result($operation.' '.get_var_name($word2,$size).'; ');
					}
					return $skip;
				} else {
					if ($mli_code & 0x0040) {
					} else {
						$word3 = str_pad($sw_text[$i+$skip+1],4,'0',STR_PAD_LEFT); $skip++;
						$word4 = str_pad($sw_text[$i+$skip+1],4,'0',STR_PAD_LEFT); $skip++;
						$value = hexdec($word4.$word3); 
						if ($is_fixed) { $value /= 65536; }
						if ($operation=='') {
							add2result('event 4 compare var '.get_var_name($word1).' with value '.$value.';');
						} else {
							add2result($operation.' '.$value.'; ');
						}
						return $skip;	
					}
				}
			}
		} else {
			switch ($mli_code & 0x0F)
			{
				case 0x0F: add2result('!MC;');  return $skip;
				case 0x0C: add2result('!LSN;'); return $skip;
				case 0x0D: add2result('!LSP;'); return $skip;
				case 0x0E: add2result('!CAP;'); return $skip;
			}
			
		}
		
		add2result('todo something event '.$word.' '.$word1.' '.$word2.' '.$word3.' '.$word4.' ;');
		return $skip;
	}
	if ($mli_offset == 0x1D) {
		$size = (($mli_code & BIT8)==0?0:1)+1;
		$var = '';
		$cond = '';
		$skip = 0;
		$type = '';
		$where= '';
		if ($mli_code & BIT0) {
			$type = 'CALL';
		} else {
			$type = 'GOTO';
		}
		if ($mli_code & BIT7) {
			$var = ', ';
			$cond = ', ';
			$var .= get_var_name($sw_text[$i+$skip+1],$size); $skip++;
			if ($mli_code & BIT6) { $cond .= 'EQ'; }
			if ($mli_code & BIT5) { $cond .= 'NEQ'; }
			if ($mli_code & BIT4) { $cond .= 'LT'; }
			if ($mli_code & BIT3) { $cond .= 'LEQ'; }
			if ($mli_code & BIT2) { $cond .= 'GT'; }
			if ($mli_code & BIT1) { $cond .= 'GEQ'; }
		}
		if ($mli_code & BIT9) {
			$where = get_var_name($sw_text[$i+$skip+1],$size); $skip++;
		} else {
			$hex = str_pad($sw_text[$i+$skip+1],4,'0',STR_PAD_LEFT); $skip++;
			$hvar = get_label_name($hex,$size);
			if ($hex != $hvar) {
				$where = $hvar; 
			} else {
				$where = '0x'.$hex; 
			}
		}
		add2result($type.' '.$where.$var.$cond.';');
		return $skip;
	}
	if ($mli_offset == 0x1E || $mli_offset == 0x1F) {
		if ($mli_code == 0x7800) {
			add2result('SEG '.hexdec($sw_text[$i+1]).', '.(hexdec($sw_text[$i+3].$sw_text[$i+2])/65536).';');
			return 3;
		}
		if ($mli_code == 0x7D66) {
			if ($mli_code & BIT9) { $destination = 0x800; } else {	$destination = 0x200; } 
			$destination += ($mli_code & 0x1FF); 
			$destination = bn_dec_hex($destination); 
			$destination = get_var_name($destination,1);
			$source = get_var_name($sw_text[$i+1],2);
			add2result('SEG '.$destination.', '.$source.';');
			return 1;
		}
	}
	if ($mli_offset == 0x20 || $mli_offset == 0x21) {
		$skip = 0;
		if ($mli_code & BIT10) {
			$word1 = str_pad($sw_text[$i+$skip+1],4,'0',STR_PAD_LEFT); $skip++;
			$word2 = str_pad($sw_text[$i+$skip+1],4,'0',STR_PAD_LEFT); $skip++;
			add2result('SAP 0x'.$word2.$word1.';');
		} else {
			if ($mli_code & BIT9) { $destination = 0x800; } else {	$destination = 0x200; } 
			$destination += ($mli_code & 0x1FF); 
			$destination = bn_dec_hex($destination); 
			$destination = get_var_name($destination,2);
			add2result('SAP '.$destination.';');
		}
		return $skip;
	}
	if ($mli_offset == 0x22) {
		$size = (($mli_code & BIT8)==0?0:1)+1;
		$skip = 0;
		$word1 = '';
		$word2 = '';
		if (!($mli_code & BIT7)) {  
			$word1 = $sw_text[$i+$skip+1]; $skip++;
			if ($mli_code & BIT6){ 
				$word2 = $sw_text[$i+$skip+1]; $skip++;
			}
		}
		if ($mli_code & BIT5){ $shift = '<<'; } else { $shift = '>>'; }
		$val = ($mli_code & 0x000F); 
		
		if ($mli_code & BIT7){ 
			$var = 'PROD';
		} else {
			$var = get_var_name($word1,$size);
		}
		if ($mli_code & BIT6){ 
			add2result($var.' = '.get_var_name($word2,$size).' '.$shift.' '.$val.';');
		} else {
			add2result($var.' '.$shift.'= '.$val.';');
		}
		return $skip;
	}
	if ($mli_offset == 0x23) {
		$size1 = (($mli_code & BIT8)==0?0:1)+1;
		$size2 = (($mli_code & BIT7)==0?0:1)+1;
		$skip = 0;
		$word1 = $sw_text[$i+$skip+1]; $skip++;
		$word2 = $sw_text[$i+$skip+1]; $skip++;
		if ($mli_code & BIT5){ $shift = '<<'; } else { $shift = '>>'; }
		$val = ($mli_code & 0x000F); 
		$word1 = get_var_name($word1,$size1);
		if ($mli_code & BIT7){ 
			$word2 = get_var_name($word2,$size2);
		} else {
			$word2 = '0x'.str_pad($word2,4,'0',STR_PAD_LEFT);
		}
		add2result($word1.' * '.$word2.' '.$shift.' '.$val.';');
		return $skip;
	}
	if ($mli_offset == 0x24) {
		$size = ($mli_code & BIT0) + 1;
		$skip = 0;
		if ($mli_code & BIT7) { 
			$inc = ''; 
		} else { 
			$inc = '+'; 
		}
		if ($mli_code & BIT3) {
			$mode='spi';
		} else {
			if ($mli_code & BIT2) {
				$mode='dm';
			} else {
				$mode='pm';
			}
		}
		if ($mli_code & BIT8) {
			$word1 = get_var_name($sw_text[$i+$skip+1],$size); $skip++;
			$word2 = get_var_name($sw_text[$i+$skip+1],$size); $skip++;
			add2result($word2." = (".$word1.$inc."),".$mode.";");
		} else {
			$word1 = get_var_name($sw_text[$i+$skip+1],$size); $skip++;
			if (!($mli_code & BIT4)) {
				if ($size>1) {
					$word2 = '0x'.str_pad($sw_text[$i+$skip+2],4,'0',STR_PAD_LEFT).str_pad($sw_text[$i+$skip+1],4,'0',STR_PAD_LEFT); $skip++;$skip++;
				} else {
					$word2 = '0x'.str_pad($sw_text[$i+$skip+1],4,'0',STR_PAD_LEFT); $skip++;
				}
				if ($mli_code & BIT5) { 
					add2result("(".$word1.$inc."),".$mode." = ".$word2.";");
				} else {
					add2result($word1.",dm = ".$word2.";");
				}
			} else {
				$word2 = get_var_name($sw_text[$i+$skip+1],$size); $skip++;
				if ($mli_code & BIT5) { 
					add2result("(".$word1.$inc."),".$mode." = ".$word2.";");
				} else {
					add2result("".$word1.",".$mode." = ".$word2.";");
				}
			}	
		}
		return $skip;
	}
	if ($mli_offset == 0x25) {
		if ($mli_code & BIT9) {
			$val = $mli_code & 0x3;
			add2result('LOCKEEPROM '.$val.';');
			return 0;
		} else if ($mli_code & BIT8) {
			add2result('ENEEPROM;');
			return 0;
		} else {
			$skip = 0;
			$adr = (hexdec($sw_text[$i+$skip+1])>>4)&0xFF; $skip++;
			add2result('['.$adr.'] {');
			$word = $sw_text[$i+$skip+1]; $skip++;
			$skip += find_tml($word, $i+$skip+1);
			add2result('}');
			return $skip;
		}
	}
	if ($mli_offset == 0x26) {
		$size = ($mli_code & BIT0) + 1;
		$skip = 0;
		$word1 = (hexdec($sw_text[$i+$skip+1])>>4)&0xFF; $skip++;
		$word2 = get_var_name($sw_text[$i+$skip+1], $size); $skip++;
		$word3 = get_var_name($sw_text[$i+$skip+1], $size); $skip++;
		add2result('['.$word1.'] '.$word2.',dm = '.$word3.';');
		return $skip;
	}
	if ($mli_offset == 0x27) {
		$size = ($mli_code & BIT0) + 1;
		$skip = 0;
		if ($mli_code & BIT3) {
			$mode='spi';
		} else {
			if ($mli_code & BIT2) {
				$mode='dm';
			} else {
				$mode='pm';
			}
		}
		if ($mli_code & BIT7) { $inc = ''; } else { $inc = '+'; }
		$word1 = (hexdec($sw_text[$i+$skip+1])>>4)&0xFF; $skip++;
		$word2 = get_var_name($sw_text[$i+$skip+1],$size); $skip++;
		$word3 = get_var_name($sw_text[$i+$skip+1],$size); $skip++;
		//add2result($word3.' = ['.$word1.'] ('.$word2.$inc.'),'.$mode.';');
		if ($mli_code & BIT8) {
			add2result($word3.' = ['.$word1.'] ('.$word2.$inc.'),'.$mode.';');
		} else {
			add2result($word3.' = ['.$word1.'] '.$word2.';');
		}
		return $skip;
	}
	if ($mli_offset == 0x2E || $mli_offset == 0x2F) {
		$size = (($mli_code & BIT10)==0?0:1)+1;
		$skip = 0;
		if ($mli_code & BIT9) { $destination = 0x800; } else {	$destination = 0x200; } 
		$destination += ($mli_code & 0x1FF); 
		$destination = bn_dec_hex($destination); 
		$destination = get_var_name($destination,$size);

		$word1 = (hexdec($sw_text[$i+$skip+1])>>4)&0xFF; $skip++;
		$word2 = get_var_name($sw_text[$i+$skip+1],$size); $skip++;

		add2result('['.$word1.'] '.$destination.' = '.$word2.';');
		return $skip;
	}
	if ($mli_offset == 0x30 || $mli_offset == 0x31) {
		$size = (($mli_code & BIT10)==0?0:1)+1;
		if ($mli_code & BIT9) { $destination = 0x800; } else {	$destination = 0x200; } 
		$destination += ($mli_code & 0x1FF); 
		$destination = bn_dec_hex($destination); 
		$destination = get_var_name($destination,$size);
		add2result('SEND '.$destination.';');
		return 0;
	}
	if ($mli_offset == 0x32) {
		$skip = 0;
		$word1 = str_pad($sw_text[$i+$skip+1],4,'0',STR_PAD_LEFT); $skip++;
		$word2 = str_pad($sw_text[$i+$skip+1],4,'0',STR_PAD_LEFT); $skip++;
		$word3 = str_pad($sw_text[$i+$skip+1],4,'0',STR_PAD_LEFT); $skip++;
		$val = $mli_code & 0x7F;
		add2result('PTP '.hexdec($word2.$word1).', '.hexdec($word3).', '.$val.';');
		return $skip;
	}
	if ($mli_offset == 0x36) {
		if ($mli_code == 0xD802) { add2result("SETWS ".hexdec($sw_text[$i+1]).";"); return 1; }
		if ($mli_code == 0xD840) { add2result("INITCAM ".hexdec($sw_text[$i+1]).", ".hexdec($sw_text[$i+2]).";"); return 2; }
		if ($mli_code == 0xDB50) { 
			 $word1 = get_var_name($sw_text[$i+1]);
			 $word2 = $sw_text[$i+2];
			 $word3 = $sw_text[$i+3];
			 add2result('CHECKSUM, SPI 0x'.$word2.', 0x'.$word3.', '.$word1.';');
			 return 3;
		}
		if ($mli_code == 0xDBD0) { 
			 $word1 = get_var_name($sw_text[$i+1]);
			 $word2 = get_var_name($sw_text[$i+2]);
			 $word3 = get_var_name($sw_text[$i+3]);
			 add2result('CHECKSUM, SPI '.$word2.', '.$word3.', '.$word1.';');
			 return 3;
		}
	}
	if ($mli_offset == 0x37) {
		$size = (($mli_code & BIT10)==0?0:1)+1;
		$skip = 0;
		$word1 = get_var_name($sw_text[$i+$skip+1],$size); $skip++;
		$word2 = get_var_name($sw_text[$i+$skip+1],1); $skip++;
		add2result($word1.' /= '.$word2.'; ');
		return $skip;
	}
	if ($mli_offset == 0x38 || $mli_offset == 0x39) {
		$skip = 0;
		$size = ($mli_code & BIT10)+1;
		if ($mli_code & BIT9) { $destination = 0x800; } else {	$destination = 0x200; } 
		$destination += ($mli_code & 0x1FF); 
		$destination = bn_dec_hex($destination); 
		$word1 = (hexdec($sw_text[$i+1])>>4)&0xFF; $skip++;
		$word2 = get_var_name($sw_text[$i+2],$size); $skip++;
		$destination = get_var_name($destination,$size); $skip++;
		add2result($word2.' = ['.$word1.'] '.$destination.';');
		return $skip;
	}
	if ($mli_offset == 0x3A) {
		$skip = 0;
		if ($mli_code & BIT9) {
			$val = $mli_code & 0x3F;
			add2result('HOMING '.$val.';');
		} else {
			$word1 = hexdec($sw_text[$i+$skip+1]); $skip++;
			$word2 = get_var_name($sw_text[$i+$skip+1],1); $skip++;
			$ios = array();
			for ($i=0;$i<16;$i++) {
				if ($word1 & (1<<$i)) { 
					$ios[] = $i;
				}
			}
			$ios = implode(',', $ios);
			add2result($word2.' = IN('.$ios.'); ');
		}
		return $skip;
	}
	if ($mli_offset == 0x3B) {
		$skip = 0;
		if ($mli_code & BIT9){
			$op = '';
			if ($mli_code == 0xEE00) {$op = 'SetAsInput'; }
			if ($mli_code == 0xEF00) {$op = 'SetAsOutput'; }
			if ($op!='') {
				$bits = get_bit_position_array(hexdec($sw_text[$i+1]));
				add2result($op.' ('.implode(",",$bits).');');
				return 1;
			}
		} else {
			$word1 = hexdec($sw_text[$i+$skip+1]); $skip++;
			$word2 = $sw_text[$i+$skip+1]; $skip++;
			$ios = array();
			for ($i=0;$i<16;$i++) {
				if ($word1 & (1<<$i)) { 
					$ios[] = $i;
				}
			}
			$ios = implode(',', $ios);
			if ($mli_code & BIT8){
				$word2 = get_var_name($word2,1);
			} else {
				$word2 = '0x'.str_pad($word2,4,'0',STR_PAD_LEFT);
			}
			add2result('OUT('.$ios.') = '.$word2.';');
		}
		return $skip;
	}
	if ($mli_offset == 0x3C || $mli_offset == 0x3D) {
		if ($mli_code == 0xF080) { add2result("INITSLAVES;"); return 0; }
		if ($mli_code == 0xF012) { add2result("CLEARERROR;"); return 0; }
		if ($mli_code == 0xF100) { add2result("SETMODE 0x".$sw_text[$i+1].";"); return 1; }
		if ($mli_code == 0xF011) { add2result("SAVEERROR ".get_var_name($sw_text[$i+1],2).";"); return 1; }
		if ($mli_code == 0xF010) { add2result("GETERROR ".get_var_name($sw_text[$i+1],2).";"); return 1; }
		if ($mli_code == 0xF013) { add2result("GETERROR ".hexdec($sw_text[$i+1]).",".get_var_name($sw_text[$i+2],2).";"); return 2; }
		if ($mli_code == 0xF600) { add2result("TIMEOUT  0x".$sw_text[$i+2].$sw_text[$i+1].";"); return 2; }
	}
	add2result ('huh? unknown mli offset!');
	return 0;
}

function get_var_name($text) { return $text; }

function add2result($text) { 
	global $result;
	$result = $text;
}

?>