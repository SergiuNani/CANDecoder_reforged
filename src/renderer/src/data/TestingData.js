export var InsertTextIntoTextArea = `
205 4585
USB-to-CAN V2 compact  CAN-1	1,515	158.67	      	185	6	33 06 BC 00 00 00	3.....
USB-to-CAN V2 compact  CAN-1	1,522	158.789	      	185	6	33 06 BD 00 00 00	3.....
USB-to-CAN V2 compact  CAN-1	1,525	158.819	      	185	6	33 06 BF 00 00 00	3.....
USB-to-CAN V2 compact  CAN-1	1,527	158.849	      	185	6	33 06 B8 00 00 00	3.....
13:56:21:0411 Rx 1 0x080 s 0 
13:56:21:0611 Rx 1 0x080 s 0 
13:56:21:0811 Rx 1 0x080 s 0 
13:56:21:1011 Rx 1 0x080 s 0 
13:56:21:1211 Rx 1 0x080 s 0 
13:56:21:1411 Rx 1 0x080 s 0 
147)       764.3  Rx         00C7  8  01 00 01 00 00 00 00 00 
148)       764.5  Rx         00C8  8  00 01 01 00 19 0B 00 00 
149)       765.0  Rx         00C9  8  5C C1 00 00 00 00 00 00 
150)       765.3  Rx         00CA  8  00 01 01 00 01 01 00 01 
151)       765.5  Rx         00CB  8  01 01 00 00 00 00 00 00 
152)       766.0  Rx         00CC  8  2F 03 2F 75 28 00 F9 0C 
153)       766.3  Rx         00CD  8  FD 0C 3B 00 3B 00 09 00 
154)       766.5  Rx         00CE  8  05 00 02 00 01 00 00 00 
0    000001A0         4  FF  06  78  00                    1536.649530 R
0    000001A1         4  33  07  78  00                    1536.649850 R
0    00000711         1  7F                                1536.652920 R
0    0000019E         4  31  07  78  00                    1536.655160 R
14)     25899.4  Rx         0582  8  4F 61 60 00 00 00 00 00 
15)     25899.6  Rx         0081  8  00 00 00 00 00 00 00 00 
16)     25899.9  Rx         0084  8  00 00 00 00 00 00 00 00 
17)     25900.4  Rx         0601  8  40 64 60 00 00 00 00 00 
18)     25900.7  Rx         0581  8  43 64 60 00 03 00 00 00 
19)     25901.1  Rx         0604  8  40 02 10 00 00 00 00 00 
20)     25901.5  Rx         0602  8  40 64 60 00 00 00 00 00 
1	    	14:22:01	441.473	       6905.473		         0	       000	      	  2	81	00	  	  	  	  	  	  	_      	
2	    	14:22:01	672.960	        231.487		      1793	       701	      	  1	00	  	  	  	  	  	  	  	_       	
3	    	14:22:01	673.230	          0.270		      1795	       703	      	  1	00	  	  	  	  	  	  	  	_       	
4	    	14:22:01	673.460	          0.230		      1794	       702	      	  1	00	  	  	  	  	  	  	  	_       	
5	    	14:22:04	840.272	       3166.812		         0	       000	      	  2	01	00	  	  	  	  	  	  	__      	
6	    	14:22:04	840.825	          0.553		       385	       181	      	  2	50	02	  	  	  	  	  	  	P_      	
7	    	14:22:04	840.959	          0.134		       386	       182	      	  2	50	02	  	  	  	  	  	  	P_      	
8	    	14:22:04	841.086	          0.127		       387	       183	      	  2	50	02	  	  	  	  	  	  	P_      	
9	    	14:22:04	841.243	          0.157		       641	       281	      	  3	50	02	00	  	  	  	  	  	P__     	
USB-to-CAN V2 compact  CAN-1	16	00:06.3	      	703	1	5	.
USB-to-CAN V2 compact  CAN-1	15	00:06.0	      	705	1	7F	
`
var a = `

10	    	16:52:02	972.167	         19.758		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          11	    	16:52:02	972.393	          0.226		       256	       100	      	  6	05	58	48	00	00	00	  	  	_XH___  	
          12	    	16:52:02	992.166	         19.773		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          13	    	16:52:02	992.410	          0.244		       256	       100	      	  6	25	A6	48	00	00	00	  	  	%¦H___  	
          14	    	16:52:03	012.166	         19.756		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          15	    	16:52:03	012.392	          0.226		       256	       100	      	  6	45	F4	48	00	00	00	  	  	EôH___  	
          16	    	16:52:03	032.166	         19.774		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          17	    	16:52:03	032.412	          0.246		       256	       100	      	  6	66	42	49	00	00	00	  	  	fBI___  	
          18	    	16:52:03	052.163	         19.751		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          19	    	16:52:03	052.391	          0.228		       256	       100	      	  6	84	90	49	00	00	00	  	  	„I___  	
          20	    	16:52:03	072.163	         19.772		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          21	    	16:52:03	072.415	          0.252		       256	       100	      	  6	A4	DE	49	00	00	00	  	  	¤ÞI___  	
          22	    	16:52:03	092.163	         19.748		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          23	    	16:52:03	092.393	          0.230		       256	       100	      	  6	C4	2C	4A	00	00	00	  	  	Ä,J___  	
          24	    	16:52:03	112.162	         19.769		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          25	    	16:52:03	112.372	          0.210		       256	       100	      	  6	E5	7A	4A	00	00	00	  	  	åzJ___  	
          26	    	16:52:03	132.162	         19.790		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          27	    	16:52:03	132.396	          0.234		       256	       100	      	  6	05	C9	4A	00	00	00	  	  	_ÉJ___  	
          28	    	16:52:03	152.162	         19.766		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          29	    	16:52:03	152.374	          0.212		       256	       100	      	  6	26	17	4B	00	00	00	  	  	&_K___  	
          30	    	16:52:03	172.161	         19.787		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          31	    	16:52:03	172.393	          0.232		       256	       100	      	  6	46	65	4B	00	00	00	  	  	FeK___  	
          32	    	16:52:03	192.159	         19.766		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          33	    	16:52:03	192.371	          0.212		       256	       100	      	  6	64	B3	4B	00	00	00	  	  	d³K___  	
          34	    	16:52:03	212.159	         19.788		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          35	    	16:52:03	212.399	          0.240		       256	       100	      	  6	84	01	4C	00	00	00	  	  	„_L___  	
          36	    	16:52:03	232.158	         19.759		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          37	    	16:52:03	232.377	          0.219		       256	       100	      	  6	A5	4F	4C	00	00	00	  	  	¥OL___  	
          38	    	16:52:03	252.158	         19.781		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          39	    	16:52:03	252.396	          0.238		       256	       100	      	  6	C5	9D	4C	00	00	00	  	  	ÅL___  	
          40	    	16:52:03	272.158	         19.762		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          41	    	16:52:03	272.376	          0.218		       256	       100	      	  6	E5	EB	4C	00	00	00	  	  	åëL___  	
          42	    	16:52:03	292.157	         19.781		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          43	    	16:52:03	292.397	          0.240		       256	       100	      	  6	05	3A	4D	00	00	00	  	  	_:M___  	
          44	    	16:52:03	312.155	         19.758		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          45	    	16:52:03	312.373	          0.218		       256	       100	      	  6	24	88	4D	00	00	00	  	  	$ˆM___  	
          46	    	16:52:03	332.155	         19.782		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          47	    	16:52:03	332.399	          0.244		       256	       100	      	  6	44	D6	4D	00	00	00	  	  	DÖM___  	
          48	    	16:52:03	352.154	         19.755		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          49	    	16:52:03	352.377	          0.223		       256	       100	      	  6	64	24	4E	00	00	00	  	  	d$N___  	
          50	    	16:52:03	372.154	         19.777		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          51	    	16:52:03	372.402	          0.248		       256	       100	      	  6	85	72	4E	00	00	00	  	  	…rN___  	
          52	    	16:52:03	392.154	         19.752		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          53	    	16:52:03	392.380	          0.226		       256	       100	      	  6	A5	C0	4E	00	00	00	  	  	¥ÀN___  	
          54	    	16:52:03	412.153	         19.773		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          55	    	16:52:03	412.404	          0.251		       256	       100	      	  6	C5	0E	4F	00	00	00	  	  	Å_O___  	
          56	    	16:52:03	432.153	         19.749		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          57	    	16:52:03	432.379	          0.226		       256	       100	      	  6	E6	5C	4F	00	00	00	  	  	æ\O___  	
          58	    	16:52:03	452.151	         19.772		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          59	    	16:52:03	452.361	          0.210		       256	       100	      	  6	05	AB	4F	00	00	00	  	  	_«O___  	
          60	    	16:52:03	472.150	         19.789		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          61	    	16:52:03	472.385	          0.235		       256	       100	      	  6	24	F9	4F	00	00	00	  	  	$ùO___  	
          62	    	16:52:03	492.150	         19.765		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          63	    	16:52:03	492.360	          0.210		       256	       100	      	  6	45	47	50	00	00	00	  	  	EGP___  	
          64	    	16:52:03	512.150	         19.790		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          65	    	16:52:03	512.384	          0.234		       256	       100	      	  6	65	95	50	00	00	00	  	  	e•P___  	
          66	    	16:52:03	532.149	         19.765		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          67	    	16:52:03	532.366	          0.217		       256	       100	      	  6	85	E3	50	00	00	00	  	  	…ãP___  	
          68	    	16:52:03	552.149	         19.783		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          69	    	16:52:03	552.385	          0.236		       256	       100	      	  6	A6	31	51	00	00	00	  	  	¦1Q___  	
          70	    	16:52:03	572.147	         19.762		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          71	    	16:52:03	572.365	          0.218		       256	       100	      	  6	C4	7F	51	00	00	00	  	  	ÄQ___  	
          72	    	16:52:03	592.146	         19.781		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          73	    	16:52:03	592.387	          0.241		       256	       100	      	  6	E4	CD	51	00	00	00	  	  	äÍQ___  	
          74	    	16:52:03	612.146	         19.759		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          75	    	16:52:03	612.370	          0.224		       256	       100	      	  6	04	1C	52	00	00	00	  	  	__R___  	
          76	    	16:52:03	632.146	         19.776		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          77	    	16:52:03	632.390	          0.244		       256	       100	      	  6	25	6A	52	00	00	00	  	  	%jR___  	
          78	    	16:52:03	652.146	         19.756		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          79	    	16:52:03	652.368	          0.222		       256	       100	      	  6	45	B8	52	00	00	00	  	  	E¸R___  	
          80	    	16:52:03	672.145	         19.777		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          81	    	16:52:03	672.391	          0.246		       256	       100	      	  6	65	06	53	00	00	00	  	  	e_S___  	
          82	    	16:52:03	692.145	         19.754		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          83	    	16:52:03	692.367	          0.222		       256	       100	      	  6	86	54	53	00	00	00	  	  	†TS___  	
          84	    	16:52:03	712.143	         19.776		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          85	    	16:52:03	712.391	          0.248		       256	       100	      	  6	A4	A2	53	00	00	00	  	  	¤¢S___  	
          86	    	16:52:03	732.142	         19.751		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          87	    	16:52:03	732.374	          0.232		       256	       100	      	  6	C4	F0	53	00	00	00	  	  	ÄðS___  	
          88	    	16:52:03	752.142	         19.768		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          89	    	16:52:03	752.396	          0.254		       256	       100	      	  6	E5	3E	54	00	00	00	  	  	å>T___  	
          90	    	16:52:03	772.142	         19.746		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          91	    	16:52:03	772.376	          0.234		       256	       100	      	  6	05	8D	54	00	00	00	  	  	_T___  	
          92	    	16:52:03	792.141	         19.765		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
          93	    	16:52:03	792.351	          0.210		       256	       100	      	  6	26	DB	54	00	00	00	  	  	&ÛT___  	

          [F1] Source:	?CANreal Clip
          [--]     Num	Trig	     Abs	Msec	            Rel	Desc	     IdDec	     IdHex	Attr	Len	d1	d2	d3	d4	d5	d6	d7	d8	Text    	
                   108	    	17:10:14	836.387	          0.220		       256	       100	      	  6	65	6A	5D	41	00	00	  	  	ej]A__  	
                   109	    	17:10:14	856.167	         19.780		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   110	    	17:10:14	856.409	          0.242		       256	       100	      	  6	85	B8	5D	41	00	00	  	  	…¸]A__  	
                   111	    	17:10:14	876.166	         19.757		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   112	    	17:10:14	876.399	          0.233		       256	       100	      	  6	A5	06	5E	41	00	00	  	  	¥_^A__  	
                   113	    	17:10:14	896.166	         19.767		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   114	    	17:10:14	896.416	          0.250		       256	       100	      	  6	C6	54	5E	41	00	00	  	  	ÆT^A__  	
                   115	    	17:10:14	916.164	         19.748		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   116	    	17:10:14	916.399	          0.235		       256	       100	      	  6	E4	A2	5E	41	00	00	  	  	ä¢^A__  	
                   117	    	17:10:14	936.163	         19.764		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   118	    	17:10:14	936.415	          0.252		       256	       100	      	  6	04	F1	5E	41	00	00	  	  	_ñ^A__  	
                   119	    	17:10:14	956.163	         19.748		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   120	    	17:10:14	956.399	          0.236		       256	       100	      	  6	24	3F	5F	41	00	00	  	  	$?_A__  	
                   121	    	17:10:14	976.163	         19.764		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   122	    	17:10:14	976.413	          0.250		       256	       100	      	  6	45	8D	5F	41	00	00	  	  	E_A__  	
                   123	    	17:10:14	996.162	         19.749		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   124	    	17:10:14	996.390	          0.228		       256	       100	      	  6	65	DB	5F	41	00	00	  	  	eÛ_A__  	
                   125	    	17:10:15	016.162	         19.772		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   126	    	17:10:15	016.410	          0.248		       256	       100	      	  6	85	29	60	41	00	00	  	  	…)A__  	
                   127	    	17:10:15	036.162	         19.752		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   128	    	17:10:15	036.390	          0.228		       256	       100	      	  6	A6	77	60	41	00	00	  	  	¦wA__  	
                   129	    	17:10:15	056.159	         19.769		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   130	    	17:10:15	056.409	          0.250		       256	       100	      	  6	C4	C5	60	41	00	00	  	  	ÄÅA__  	
                   131	    	17:10:15	076.159	         19.750		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   132	    	17:10:15	076.387	          0.228		       256	       100	      	  6	E4	13	61	41	00	00	  	  	ä_aA__  	
                   133	    	17:10:15	096.159	         19.772		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   134	    	17:10:15	096.411	          0.252		       256	       100	      	  6	05	62	61	41	00	00	  	  	_baA__  	
                   135	    	17:10:15	116.158	         19.747		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   136	    	17:10:15	116.388	          0.230		       256	       100	      	  6	25	B0	61	41	00	00	  	  	%°aA__  	
                   137	    	17:10:15	136.158	         19.770		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   138	    	17:10:15	136.406	          0.248		       256	       100	      	  6	45	FE	61	41	00	00	  	  	EþaA__  	
                   139	    	17:10:15	156.158	         19.752		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   140	    	17:10:15	156.384	          0.226		       256	       100	      	  6	65	4C	62	41	00	00	  	  	eLbA__  	
                   141	    	17:10:15	176.157	         19.773		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   142	    	17:10:15	176.403	          0.246		       256	       100	      	  6	86	9A	62	41	00	00	  	  	†šbA__  	
                   143	    	17:10:15	196.155	         19.752		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   144	    	17:10:15	196.383	          0.228		       256	       100	      	  6	A4	E8	62	41	00	00	  	  	¤èbA__  	
                   145	    	17:10:15	216.155	         19.772		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   146	    	17:10:15	216.363	          0.208		       256	       100	      	  6	C5	36	63	41	00	00	  	  	Å6cA__  	
                   147	    	17:10:15	236.154	         19.791		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   148	    	17:10:15	236.390	          0.236		       256	       100	      	  6	E4	84	63	41	00	00	  	  	ä„cA__  	
                   149	    	17:10:15	256.154	         19.764		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   150	    	17:10:15	256.370	          0.216		       256	       100	      	  6	05	D3	63	41	00	00	  	  	_ÓcA__  	
                   151	    	17:10:15	276.154	         19.784		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   152	    	17:10:15	276.390	          0.236		       256	       100	      	  6	25	21	64	41	00	00	  	  	%!dA__  	
                   153	    	17:10:15	296.153	         19.763		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   154	    	17:10:15	296.367	          0.214		       256	       100	      	  6	45	6F	64	41	00	00	  	  	EodA__  	
                   155	    	17:10:15	316.153	         19.786		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   156	    	17:10:15	316.389	          0.236		       256	       100	      	  6	66	BD	64	41	00	00	  	  	f½dA__  	
                   157	    	17:10:15	336.151	         19.762		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   158	    	17:10:15	336.369	          0.218		       256	       100	      	  6	84	0B	65	41	00	00	  	  	„_eA__  	
                   159	    	17:10:15	356.150	         19.781		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   160	    	17:10:15	356.400	          0.250		       256	       100	      	  6	A4	59	65	41	00	00	  	  	¤YeA__  	
                   161	    	17:10:15	376.150	         19.750		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   162	    	17:10:15	376.370	          0.220		       256	       100	      	  6	C5	A7	65	41	00	00	  	  	Å§eA__  	
                   163	    	17:10:15	396.150	         19.780		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   164	    	17:10:15	396.400	          0.250		       256	       100	      	  6	E5	F5	65	41	00	00	  	  	åõeA__  	
                   165	    	17:10:15	416.150	         19.750		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   166	    	17:10:15	416.375	          0.225		       256	       100	      	  6	05	44	66	41	00	00	  	  	_DfA__  	
                   167	    	17:10:15	436.150	         19.775		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   168	    	17:10:15	436.400	          0.250		       256	       100	      	  6	26	92	66	41	00	00	  	  	&’fA__  	
                   169	    	17:10:15	456.150	         19.750		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   170	    	17:10:15	456.379	          0.229		       256	       100	      	  6	44	E0	66	41	00	00	  	  	DàfA__  	
                   171	    	17:10:15	476.150	         19.771		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   172	    	17:10:15	476.354	          0.204		       256	       100	      	  6	65	2E	67	41	00	00	  	  	e.gA__  	
                   173	    	17:10:15	496.150	         19.796		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   174	    	17:10:15	496.384	          0.234		       256	       100	      	  6	84	7C	67	41	00	00	  	  	„|gA__  	
                   175	    	17:10:15	516.150	         19.766		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   176	    	17:10:15	516.360	          0.210		       256	       100	      	  6	A5	CA	67	41	00	00	  	  	¥ÊgA__  	
                   177	    	17:10:15	536.150	         19.790		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   178	    	17:10:15	536.379	          0.229		       256	       100	      	  6	C5	18	68	41	00	00	  	  	Å_hA__  	
                   179	    	17:10:15	556.150	         19.771		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   180	    	17:10:15	556.361	          0.211		       256	       100	      	  6	E5	66	68	41	00	00	  	  	åfhA__  	
                   181	    	17:10:15	576.150	         19.789		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   182	    	17:10:15	576.383	          0.233		       256	       100	      	  6	05	B5	68	41	00	00	  	  	_µhA__  	
                   183	    	17:10:15	596.150	         19.767		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   184	    	17:10:15	596.364	          0.214		       256	       100	      	  6	26	03	69	41	00	00	  	  	&_iA__  	
                   185	    	17:10:15	616.142	         19.778		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   186	    	17:10:15	616.384	          0.242		       256	       100	      	  6	44	51	69	41	00	00	  	  	DQiA__  	
                   187	    	17:10:15	636.141	         19.757		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   188	    	17:10:15	636.364	          0.223		       256	       100	      	  6	64	9F	69	41	00	00	  	  	dŸiA__  	
                   189	    	17:10:15	656.141	         19.777		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   190	    	17:10:15	656.385	          0.244		       256	       100	      	  6	85	ED	69	41	00	00	  	  	…íiA__  	
                   191	    	17:10:15	676.141	         19.756		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   192	    	17:10:15	676.365	          0.224		       256	       100	      	  6	A5	3B	6A	41	00	00	  	  	¥;jA__  	
                   193	    	17:10:15	696.140	         19.775		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   194	    	17:10:15	696.387	          0.247		       256	       100	      	  6	C5	89	6A	41	00	00	  	  	Å‰jA__  	
                   195	    	17:10:15	716.140	         19.753		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   196	    	17:10:15	716.366	          0.226		       256	       100	      	  6	E5	D7	6A	41	00	00	  	  	å×jA__  	
                   197	    	17:10:15	736.140	         19.774		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   198	    	17:10:15	736.392	          0.252		       256	       100	      	  6	06	26	6B	41	00	00	  	  	_&kA__  	
                   199	    	17:10:15	756.137	         19.745		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   200	    	17:10:15	756.368	          0.231		       256	       100	      	  6	24	74	6B	41	00	00	  	  	$tkA__  	
                   201	    	17:10:15	776.137	         19.769		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   202	    	17:10:15	776.347	          0.210		       256	       100	      	  6	44	C2	6B	41	00	00	  	  	DÂkA__  	
                   203	    	17:10:15	796.137	         19.790		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   204	    	17:10:15	796.371	          0.234		       256	       100	      	  6	65	10	6C	41	00	00	  	  	e_lA__  	
                   205	    	17:10:15	816.136	         19.765		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   206	    	17:10:15	816.347	          0.211		       256	       100	      	  6	85	5E	6C	41	00	00	  	  	…^lA__  	
                   207	    	17:10:15	836.136	         19.789		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   208	    	17:10:15	836.374	          0.238		       256	       100	      	  6	A5	AC	6C	41	00	00	  	  	¥¬lA__  	
                   209	    	17:10:15	856.136	         19.762		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   210	    	17:10:15	856.354	          0.218		       256	       100	      	  6	C6	FA	6C	41	00	00	  	  	ÆúlA__  	
                   211	    	17:10:15	876.133	         19.779		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   212	    	17:10:15	876.376	          0.243		       256	       100	      	  6	E4	48	6D	41	00	00	  	  	äHmA__  	
                   213	    	17:10:15	896.133	         19.757		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   214	    	17:10:15	896.357	          0.224		       256	       100	      	  6	04	97	6D	41	00	00	  	  	_—mA__  	
                   215	    	17:10:15	916.133	         19.776		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   216	    	17:10:15	916.379	          0.246		       256	       100	      	  6	25	E5	6D	41	00	00	  	  	%åmA__  	
                   217	    	17:10:15	936.132	         19.753		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   218	    	17:10:15	936.357	          0.225		       256	       100	      	  6	45	33	6E	41	00	00	  	  	E3nA__  	
                   219	    	17:10:15	956.132	         19.775		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   220	    	17:10:15	956.380	          0.248		       256	       100	      	  6	65	81	6E	41	00	00	  	  	enA__  	
                   221	    	17:10:15	976.132	         19.752		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   222	    	17:10:15	976.360	          0.228		       256	       100	      	  6	85	CF	6E	41	00	00	  	  	…ÏnA__  	
                   223	    	17:10:15	996.131	         19.771		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   224	    	17:10:15	996.338	          0.207		       256	       100	      	  6	A6	1D	6F	41	00	00	  	  	¦_oA__  	
                   225	    	17:10:16	016.129	         19.791		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   226	    	17:10:16	016.361	          0.232		       256	       100	      	  6	C4	6B	6F	41	00	00	  	  	ÄkoA__  	
                   227	    	17:10:16	036.129	         19.768		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   228	    	17:10:16	036.343	          0.214		       256	       100	      	  6	E4	B9	6F	41	00	00	  	  	ä¹oA__  	
                   229	    	17:10:16	056.128	         19.785		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   230	    	17:10:16	056.373	          0.245		       256	       100	      	  6	04	08	70	41	00	00	  	  	__pA__  	
                   231	    	17:10:16	076.128	         19.755		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   232	    	17:10:16	076.348	          0.220		       256	       100	      	  6	25	56	70	41	00	00	  	  	%VpA__  	
                   233	    	17:10:16	096.128	         19.780		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   234	    	17:10:16	096.372	          0.244		       256	       100	      	  6	45	A4	70	41	00	00	  	  	E¤pA__  	
                   235	    	17:10:16	116.127	         19.755		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   236	    	17:10:16	116.352	          0.225		       256	       100	      	  6	65	F2	70	41	00	00	  	  	eòpA__  	
                   237	    	17:10:16	136.125	         19.773		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   238	    	17:10:16	136.375	          0.250		       256	       100	      	  6	84	40	71	41	00	00	  	  	„@qA__  	
                   239	    	17:10:16	156.125	         19.750		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   240	    	17:10:16	156.351	          0.226		       256	       100	      	  6	A4	8E	71	41	00	00	  	  	¤ŽqA__  	
                   241	    	17:10:16	176.124	         19.773		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   242	    	17:10:16	176.377	          0.253		       256	       100	      	  6	C4	DC	71	41	00	00	  	  	ÄÜqA__  	
                   243	    	17:10:16	196.124	         19.747		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   244	    	17:10:16	196.354	          0.230		       256	       100	      	  6	E5	2A	72	41	00	00	  	  	å*rA__  	
                   245	    	17:10:16	216.124	         19.770		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   246	    	17:10:16	216.334	          0.210		       256	       100	      	  6	05	79	72	41	00	00	  	  	_yrA__  	
                   247	    	17:10:16	236.123	         19.789		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   248	    	17:10:16	236.358	          0.235		       256	       100	      	  6	25	C7	72	41	00	00	  	  	%ÇrA__  	
                   249	    	17:10:16	256.123	         19.765		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   250	    	17:10:16	256.335	          0.212		       256	       100	      	  6	46	15	73	41	00	00	  	  	F_sA__  	
                   251	    	17:10:16	276.121	         19.786		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   252	    	17:10:16	276.359	          0.238		       256	       100	      	  6	64	63	73	41	00	00	  	  	dcsA__  	
                   253	    	17:10:16	296.120	         19.761		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   254	    	17:10:16	296.335	          0.215		       256	       100	      	  6	84	B1	73	41	00	00	  	  	„±sA__  	
                   255	    	17:10:16	316.120	         19.785		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   256	    	17:10:16	316.362	          0.242		       256	       100	      	  6	A4	FF	73	41	00	00	  	  	¤ÿsA__  	
                   257	    	17:10:16	336.120	         19.758		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   258	    	17:10:16	336.336	          0.216		       256	       100	      	  6	C5	4D	74	41	00	00	  	  	ÅMtA__  	
                   259	    	17:10:16	356.119	         19.783		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   260	    	17:10:16	356.362	          0.243		       256	       100	      	  6	E5	9B	74	41	00	00	  	  	å›tA__  	
                   261	    	17:10:16	376.119	         19.757		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   262	    	17:10:16	376.341	          0.222		       256	       100	      	  6	05	EA	74	41	00	00	  	  	_êtA__  	
                   263	    	17:10:16	396.119	         19.778		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   264	    	17:10:16	396.363	          0.244		       256	       100	      	  6	26	38	75	41	00	00	  	  	&8uA__  	
                   265	    	17:10:16	416.116	         19.753		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   266	    	17:10:16	416.341	          0.225		       256	       100	      	  6	44	86	75	41	00	00	  	  	D†uA__  	
                   267	    	17:10:16	436.116	         19.775		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   268	    	17:10:16	436.366	          0.250		       256	       100	      	  6	64	D4	75	41	00	00	  	  	dÔuA__  	
                   269	    	17:10:16	456.116	         19.750		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   270	    	17:10:16	456.342	          0.226		       256	       100	      	  6	84	22	76	41	00	00	  	  	„"vA__  	
                   271	    	17:10:16	476.115	         19.773		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   272	    	17:10:16	476.326	          0.211		       256	       100	      	  6	A5	70	76	41	00	00	  	  	¥pvA__  	
                   273	    	17:10:16	496.115	         19.789		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   274	    	17:10:16	496.347	          0.232		       256	       100	      	  6	C5	BE	76	41	00	00	  	  	Å¾vA__  	
                   275	    	17:10:16	516.115	         19.768		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   276	    	17:10:16	516.325	          0.210		       256	       100	      	  6	E5	0C	77	41	00	00	  	  	å_wA__  	
                   277	    	17:10:16	536.114	         19.789		       128	       080	      	  1	00	  	  	  	  	  	  	  	_       	
                   278	    	17:10:16	536.351	          0.237		       256	       100	      	  6	06	5B	77	41	00	00	  	  	_[wA__  	
             
`
