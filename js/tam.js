//tamil-wx2utf
//console.log = function() {};
function convert_tam_wx2utf(text) {
	//var text = $("#input").val();
	
	var unicodeValue = new Array();
	var unicodeValue_vowels = new Array();
	unicodeValue_vowels["a"] = '\u0B85';	//a
	unicodeValue_vowels["A"]='\u0B86';
	unicodeValue_vowels["i"]='\u0B87';
	unicodeValue_vowels["I"]='\u0B88';
	unicodeValue_vowels["u"]='\u0B89';
	unicodeValue_vowels["U"]='\u0B8A';
	unicodeValue_vowels["q"]='\u0B8B';
	unicodeValue_vowels["lq"]='\u0B8C';
	unicodeValue_vowels["e"]='\u0B8F';
	unicodeValue_vowels["E"]='\u0B90';
	unicodeValue_vowels["o"]='\u0B93';
	unicodeValue_vowels["O"]='\u0B94';

	// unicodeValue_vowels["aa"] = '\u0B85';	//a
	unicodeValue_vowels["aA"]='\u0B86';
	unicodeValue_vowels["ai"]='\u0B87';
	unicodeValue_vowels["aI"]='\u0B88';
	unicodeValue_vowels["au"]='\u0B89';
	unicodeValue_vowels["aU"]='\u0B8A';
	unicodeValue_vowels["aq"]='\u0B8B';
	unicodeValue_vowels["alq"]='\u0B8C';
	unicodeValue_vowels["ae"]='\u0B8F';
	unicodeValue_vowels["eE"]='\u0B90';
	unicodeValue_vowels["ao"]='\u0B93';
	unicodeValue_vowels["aO"]='\u0B94';

//	unicodeValue_vowels["z"] = '\u0B81';	//z
	unicodeValue["lY"]='\u0BB3';
	unicodeValue["lYY"]='\u0BB4';
	unicodeValue["nY"]='\u0BA9';
	unicodeValue["rY"]='\u0BB1';
	unicodeValue["EY"]='\u0BC5';
	unicodeValue["eV"]='\u0BC6';
	unicodeValue["aeV"]='\u0BC6';
	unicodeValue["OY"]='\u0BC9';
	unicodeValue["oV"]='\u0BCA';
	unicodeValue["aoV"]='\u0BCA';

	/***********Three Character length words**************/
/*Uncommented By Nagaraju to allow display of below 3 letter characters*/
	unicodeValue_vowels["EY"]='\u0B8D';
	unicodeValue_vowels["eV"]='\u0B8E';
	
	unicodeValue_vowels["OY"]='\u0B91';
	unicodeValue_vowels["oV"]='\u0B92';
	unicodeValue_vowels["aEY"]='\u0B8D';
	unicodeValue_vowels["aeV"]='\u0B8E';
	
	unicodeValue_vowels["aOY"]='\u0B91';
	unicodeValue_vowels["aoV"]='\u0B92';

/* added by nagaraju V for keboard press */
//	unicodeValue["k_R"]='\u0B95\u0BCD\u0BB7';
//	unicodeValue["w_r"]='\u0BA4\u0BCD\u0BB0';
//	unicodeValue["j_F"]='\u0B9C\u0BCD\u0B9E';

	/*unicodeValue_vowels["z"]='\u0B85\u0B81';
	unicodeValue_vowels["M"]='\u0B85\u0B82';
	unicodeValue_vowels["H"]='\u0B85\u0B83';
	unicodeValue_vowels["Q"]='\u0BE0';*/

	/**************symbol mappings***********************/

	unicodeValue[";"] = ';';	//g;
	unicodeValue[":"] = ':';	//:
	unicodeValue["\""] = '34';	//
	unicodeValue["'"] = '39';	//'
	unicodeValue[","] = '44';	//,
	unicodeValue["."] = '46';	//.
	unicodeValue["/"] = '47';	///.
	unicodeValue["?"] = '63';	//?
	unicodeValue["<"] = '<';	//<
	unicodeValue[">"] = '>';	//>
	unicodeValue["["] = '91';	//[
	unicodeValue["]"] = '93';	//]
	unicodeValue["{"] = '123';	//{
	unicodeValue["}"] = '125';	//}
	unicodeValue["("] = '40';	//(
	unicodeValue[")"] = '41';	//)
	unicodeValue["@"] = '64';	//@
	unicodeValue["#"] = '35';	//#
	//unicodeValue["94"] = '94';	//#
	unicodeValue["^"] = '^';	//^
	unicodeValue["*"] = '42';	//*
	unicodeValue["_"] = '\u0BCD';	//_
	unicodeValue["="] = '61';	//=
	unicodeValue["+"] = '43';	//+
	unicodeValue["|"] = '\u0BE4';	//|
	unicodeValue["~"] = '~';	//|
	unicodeValue["`"] = '`';	//|
	unicodeValue["\\"] = '\\';	//|


	/***************numbers mapping ***********************/

	unicodeValue["0"] = '\u0BE6';	//0
	unicodeValue["1"] = '\u0BE7';	//1
	unicodeValue["2"] = '\u0BE8';	//2
	unicodeValue["3"] = '\u0BE9';	//3
	unicodeValue["4"] = '\u0BEA';	//4
	unicodeValue["5"] = '\u0BEB';	//5
	unicodeValue["6"] = '\u0BEC';	//6
	unicodeValue["7"] = '\u0BED';	//7
	unicodeValue["8"] = '\u0BEE';	//8
	unicodeValue["9"] = '\u0BEF';	//9

	/*****************a-z mappings***************************/

	unicodeValue["a"] = '\u0B85';	//a
	unicodeValue["b"] = '\u0BAC';	//b
	unicodeValue["c"] = '\u0B9A';	//c
	unicodeValue["d"] = '\u0BA1';	//d
	unicodeValue["e"] = '\u0BC7';	//e
	unicodeValue["f"] = '\u0B99';	//f
	unicodeValue["g"] = '\u0B97';	//g
	unicodeValue["h"] = '\u0BB9';	//h
	unicodeValue["i"] = '\u0BBF';	//i
	unicodeValue["j"] = '\u0B9C';	//j
	unicodeValue["k"] = '\u0B95';	//k
	unicodeValue["l"] = '\u0BB2';	//l
	unicodeValue["m"] = '\u0BAE';	//m
	unicodeValue["n"] = '\u0BA8';	//n
	unicodeValue["o"] = '\u0BCB';	//o
	unicodeValue["p"] = '\u0BAA';	//p
	unicodeValue["q"] = '\u0BC3';	//q
	unicodeValue["r"] = '\u0BB0';	//r
	unicodeValue["s"] = '\u0BB8';	//s
	unicodeValue["t"] = '\u0B9F';	//t
	unicodeValue["u"] = '\u0BC1';	//u
	unicodeValue["v"] = '\u0BB5';	//v
	unicodeValue["w"] = '\u0BA4';	//w
	unicodeValue["x"] = '\u0BA6';	//x
	unicodeValue["y"] = '\u0BAF';	//y
	unicodeValue["z"] = '\u0B81';	//z

	/*******************A-Z mappings*****************************/

	unicodeValue["A"] = '\u0BBE';	//A
	unicodeValue["B"] = '\u0BAD';	//B
	unicodeValue["C"] = '\u0B9B';	//C
	unicodeValue["D"] = '\u0BA2';	//D
	unicodeValue["E"] = '\u0BC8';	//E
	unicodeValue["F"] = '\u0B9E';	//F
	unicodeValue["G"] = '\u0B98';	//G
	unicodeValue["H"] = '\u0B83';	//H
	unicodeValue["I"] = '\u0BC0';	//I
	unicodeValue["J"] = '\u0B9D';	//J
	unicodeValue["K"] = '\u0B96';	//K
	//unicodeValue["L"] = 'L';	//L
	unicodeValue["M"] = '\u0B82';	//M
	unicodeValue["N"] = '\u0BA3';	//N
	unicodeValue["O"] = '\u0BCC';	//O
	unicodeValue["P"] = '\u0BAB';	//P
	unicodeValue["Q"] = '\u0BC4';	//Q
	unicodeValue["R"] = '\u0BB7';	//R
	unicodeValue["S"] = '\u0BB6';	//S
	unicodeValue["T"] = '\u0BA0';	//T
	unicodeValue["U"] = '\u0BC2';	//U
	//unicodeValue["V"] = 'V';	//V
	unicodeValue["W"] = '\u0BA5';	//W
	unicodeValue["X"] = '\u0BA7';	//X
	unicodeValue["Y"] = '\u0BBD';	//Y
	unicodeValue["Z"] = '\u0BBC';	//Z
	//unicodeValue[89] = '\u0BA6';
	//unicodeValue[90] = '\u0B81';
	//unicodeValue[90] = '\u0BBD';

	/**************Two Character length words************/

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])eV([MHz])/g;
	text=text.replace(r1,function (){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["_"]+unicodeValue[arguments[3]]+unicodeValue["aeV"]+unicodeValue[arguments[4]];
		});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])eV/g;
	text=text.replace(r1,function (){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["_"]+unicodeValue[arguments[3]]+unicodeValue["aeV"];
		});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])EY([MHz])/g;
	text=text.replace(r1,function (){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["_"]+unicodeValue[arguments[3]]+unicodeValue["aEY"]+unicodeValue[arguments[4]];
		});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])EY/g;
	text=text.replace(r1,function (){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["_"]+unicodeValue[arguments[3]]+unicodeValue["aEY"];
		});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])oV([MHz])/g;
	text=text.replace(r1,function (){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["_"]+unicodeValue[arguments[3]]+unicodeValue["aoV"]+unicodeValue[arguments[4]];
		});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])oV/g;
	text=text.replace(r1,function (){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["_"]+unicodeValue[arguments[3]]+unicodeValue["aoV"];
		});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])OY([MHz])/g;
	text=text.replace(r1,function (){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["_"]+unicodeValue[arguments[3]]+unicodeValue["aOY"]+unicodeValue[arguments[4]];
		});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])oY/g;
	text=text.replace(r1,function (){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["_"]+unicodeValue[arguments[3]]+unicodeValue["aoV"];
		});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([AiIuUeEoO])([MHz])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["_"]+unicodeValue[arguments[3]]+unicodeValue[arguments[4]]+unicodeValue[arguments[5]];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([AiIuUeEoO])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["_"]+unicodeValue[arguments[3]]+unicodeValue[arguments[4]];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])a([MHz])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["_"]+unicodeValue[arguments[3]]+unicodeValue[arguments[4]];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])a/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["_"]+unicodeValue[arguments[3]];
	});
	
	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["_"]+unicodeValue[arguments[3]]+unicodeValue["_"];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])eV([MHz])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["eV"]+unicodeValue[arguments[3]];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])eV/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["eV"];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])EY([MHz])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["EY"]+unicodeValue[arguments[3]];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])EY/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["EY"];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])oV([MHz])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["oV"]+unicodeValue[arguments[3]];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])oV/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["oV"];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])OY([MHz])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["OY"]+unicodeValue[arguments[3]];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])OY/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue["OY"];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([AiIuUeEoO])([MHz])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue[arguments[3]]+unicodeValue[arguments[4]];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([AiIuUeEoO])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue[arguments[3]];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])a([MHz])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]]+unicodeValue[arguments[3]];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])a/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["_"]+unicodeValue[arguments[2]];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])eV([MHz])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["eV"]+unicodeValue[arguments[2]];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])eV/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["eV"];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])EY([MHz])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["EY"]+unicodeValue[arguments[2]];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])EY/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["EY"];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])oV([MHz])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["oV"]+unicodeValue[arguments[2]];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])oV/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["oV"];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])OY([MHz])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["OY"]+unicodeValue[arguments[2]];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])OY/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["OY"];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])Z([AiIuUeEoO])([MHz])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["Z"]+unicodeValue[arguments[2]]+unicodeValue[arguments[3]];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])Z([AiIuUeEoO])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["Z"]+unicodeValue[arguments[2]];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])Za([MHz])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["Z"]+unicodeValue[arguments[2]];
	});

	var r1 = /([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])Za/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["Z"];
	});

	text=text.replace(/(lYY)eV([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["eV"] + unicodeValue[arguments[2]];
	});
	
    text=text.replace(/(lYY)eV/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["eV"];
	});
	
    text=text.replace(/(lYY)EY([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["EY"] + unicodeValue[arguments[2]];
	});

    text=text.replace(/(lYY)EY/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["EY"];
	});

    text=text.replace(/(lYY)oV([MHz])/g, function () {
		return unicodeValue[arguments[1]] + unicodeValue["oV"] + unicodeValue[arguments[2]];
	});
    text=text.replace(/(lYY)oV/g, function() {
		return  unicodeValue[arguments[1]] + unicodeValue["oV"];
	});
    text=text.replace(/(lYY)OY([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["OY"] + unicodeValue[arguments[2]]; 
	});

    text=text.replace(/(lYY)OY/g, function() {
		return  unicodeValue[arguments[1]] + unicodeValue["OY"];
	});
	
    text=text.replace(/(lYY)([AiIuUeEoO])([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue[arguments[2]] + unicodeValue[arguments[3]];
	});

    text=text.replace(/(lYY)([AiIuUeEoO])/g, function(){
		return unicodeValue[arguments[1]] + unicodeValue[arguments[2]];
	});
	
    text=text.replace(/(lYY)a([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue[arguments[2]];
	});

    text=text.replace(/(lYY)a/g, function() {
		return unicodeValue[arguments[1]];
	});

    text=text.replace(/(lYY)/g, function(){
		return unicodeValue[arguments[1]] + unicodeValue["_"];
	});

	text=text.replace(/(lYY)eV([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["eV"] + unicodeValue[arguments[2]];
	});
	
    text=text.replace(/(lYY)eV/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["eV"];
	});
	
    text=text.replace(/(lYY)EY([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["EY"] + unicodeValue[arguments[2]];
	});

    text=text.replace(/(lYY)EY/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["EY"];
	});

    text=text.replace(/(lYY)oV([MHz])/g, function () {
		return unicodeValue[arguments[1]] + unicodeValue["oV"] + unicodeValue[arguments[2]];
	});
    text=text.replace(/(lYY)oV/g, function() {
		return  unicodeValue[arguments[1]] + unicodeValue["oV"];
	});
    text=text.replace(/(lYY)OY([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["OY"] + unicodeValue[arguments[2]]; 
	});

    text=text.replace(/(lYY)OY/g, function() {
		return  unicodeValue[arguments[1]] + unicodeValue["OY"];
	});

    text=text.replace(/(lYY)([AiIuUeEoO])([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue[arguments[2]] + unicodeValue[arguments[3]];
	});

    text=text.replace(/(lYY)([AiIuUeEoO])/g, function(){
		return unicodeValue[arguments[1]] + unicodeValue[arguments[2]];
	});

    text=text.replace(/(lYY)a([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue[arguments[2]];
	});

    text=text.replace(/(lYY)a/g, function() {
		return unicodeValue[arguments[1]];
	});

    text=text.replace(/(lYY)/g, function(){
		return unicodeValue[arguments[1]] + unicodeValue["_"];
	});

	//lY cases
	text=text.replace(/(lY)eV([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["eV"] + unicodeValue[arguments[2]];
	});
	
    text=text.replace(/(lY)eV/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["eV"];
	});
	
    text=text.replace(/(lY)EY([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["EY"] + unicodeValue[arguments[2]];
	});

    text=text.replace(/(lY)EY/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["EY"];
	});

    text=text.replace(/(lY)oV([MHz])/g, function () {
		return unicodeValue[arguments[1]] + unicodeValue["oV"] + unicodeValue[arguments[2]];
	});
    text=text.replace(/(lY)oV/g, function() {
		return  unicodeValue[arguments[1]] + unicodeValue["oV"];
	});
    text=text.replace(/(lY)OY([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["OY"] + unicodeValue[arguments[2]]; 
	});

    text=text.replace(/(lY)OY/g, function() {
		return  unicodeValue[arguments[1]] + unicodeValue["OY"];
	});

    text=text.replace(/(lY)([AiIuUeEoO])([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue[arguments[2]] + unicodeValue[arguments[3]];
	});

    text=text.replace(/(lY)([AiIuUeEoO])/g, function(){
		return unicodeValue[arguments[1]] + unicodeValue[arguments[2]];
	});

    text=text.replace(/(lY)a([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue[arguments[2]];
	});

    text=text.replace(/(lY)a/g, function() {
		return unicodeValue[arguments[1]];
	});

    text=text.replace(/(lY)/g, function(){
		return unicodeValue[arguments[1]] + unicodeValue["_"];
	});
	//nY cases
	text=text.replace(/(nY)eV([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["eV"] + unicodeValue[arguments[2]];
	});
	
    text=text.replace(/(nY)eV/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["eV"];
	});
	
    text=text.replace(/(nY)EY([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["EY"] + unicodeValue[arguments[2]];
	});

    text=text.replace(/(nY)EY/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["EY"];
	});

    text=text.replace(/(nY)oV([MHz])/g, function () {
		return unicodeValue[arguments[1]] + unicodeValue["oV"] + unicodeValue[arguments[2]];
	});
    text=text.replace(/(nY)oV/g, function() {
		return  unicodeValue[arguments[1]] + unicodeValue["oV"];
	});
    text=text.replace(/(nY)OY([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["OY"] + unicodeValue[arguments[2]]; 
	});

    text=text.replace(/(nY)OY/g, function() {
		return  unicodeValue[arguments[1]] + unicodeValue["OY"];
	});

    text=text.replace(/(nY)([AiIuUeEoO])([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue[arguments[2]] + unicodeValue[arguments[3]];
	});

    text=text.replace(/(nY)([AiIuUeEoO])/g, function(){
		return unicodeValue[arguments[1]] + unicodeValue[arguments[2]];
	});

    text=text.replace(/(nY)a([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue[arguments[2]];
	});

    text=text.replace(/(nY)a/g, function() {
		return unicodeValue[arguments[1]];
	});

    text=text.replace(/(nY)/g, function(){
		return unicodeValue[arguments[1]] + unicodeValue["_"];
	});
	//rY cases
	text=text.replace(/(rY)eV([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["eV"] + unicodeValue[arguments[2]];
	});
	
    text=text.replace(/(rY)eV/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["eV"];
	});
	
    text=text.replace(/(rY)EY([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["EY"] + unicodeValue[2];
	});

    text=text.replace(/(rY)EY/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["EY"];
	});

    text=text.replace(/(rY)oV([MHz])/g, function () {
		return unicodeValue[arguments[1]] + unicodeValue["oV"] + unicodeValue[2];
	});
    text=text.replace(/(rY)oV/g, function() {
		return  unicodeValue[arguments[1]] + unicodeValue["oV"];
	});
    text=text.replace(/(rY)OY([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue["OY"] + unicodeValue[arguments[2]]; 
	});

    text=text.replace(/(rY)OY/g, function() {
		return  unicodeValue[arguments[1]] + unicodeValue["OY"];
	});

    text=text.replace(/(rY)([AiIuUeEoO])([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue[arguments[2]] + unicodeValue[arguments[3]];
	});

    text=text.replace(/(rY)([AiIuUeEoO])/g, function(){
		return unicodeValue[arguments[1]] + unicodeValue[arguments[2]];
	});

    text=text.replace(/(rY)a([MHz])/g, function() {
		return unicodeValue[arguments[1]] + unicodeValue[arguments[2]];
	});

    text=text.replace(/(rY)a/g, function() {
		return unicodeValue[arguments[1]];
	});

    text=text.replace(/(rY)/g, function(){
		return unicodeValue[arguments[1]] + unicodeValue["_"];
	});

	var r1 =/([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([AiIuUeEoO])([MHz])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue[arguments[2]]+unicodeValue[arguments[3]];
	});

	var r1 =/([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])([AiIuUeEoO])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue[arguments[2]];
	});

	var r1 =/([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])a([MHz])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue[arguments[2]];
	});

	var r1 =/([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])a/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]];
	});

	var r1 =/([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])q/g;		//new rule
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["q"];
	});

	var r1 =/([kKgGfcCjJFtTdDNwWxXnpPbBmyrlvSsRh])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["_"];
	});

	var r1 =/(aq)([MHz])/g;
	text = text.replace(r1,function(){
		return unicodeValue_vowels[arguments[1]]+unicodeValue[arguments[2]];
	});

	var r1 =/aq/g;
	text = text.replace(r1,function(){
		return unicodeValue_vowels["aq"];
	});

	var r1 =/q/g;
	text = text.replace(r1,function(){
		return unicodeValue_vowels["q"];
	});

	var r1 = /aeV([MHz])/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["aeV"] + unicodeValue[arguments[1]];
	});

	var r1 = /aeV/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["aeV"];
	});

	var r1 = /eV([MHz])/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["eV"] + unicodeValue[arguments[1]];
	});

	var r1 = /eV/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["eV"];
	});

	var r1 = /aeY([MHz])/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["aeY"] + unicodeValue[arguments[1]];
	});

	var r1 = /aeY/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["aeY"];
	});

	var r1 = /eY([MHz])/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["eY"] + unicodeValue[arguments[1]];
	});

	var r1 = /eY/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["eY"];
	});

	var r1 = /aoV([MHz])/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["aoV"] + unicodeValue[arguments[1]];
	});

	var r1 = /aoV/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["aoV"];
	});

	var r1 = /oV([MHz])/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["oV"] + unicodeValue[arguments[1]];
	});

	var r1 = /oV/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["oV"];
	});

	var r1 = /aoY([MHz])/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["aoY"] + unicodeValue[arguments[1]];
	});

	var r1 = /aoY/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["aoY"];
	});

	var r1 = /oY([MHz])/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["oY"] + unicodeValue[arguments[1]];
	});

	var r1 = /oY/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["oY"];
	});

	var r1 = /aA/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["aA"];
	});
	var r1 = /ai/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["ai"];
	});
	var r1 = /aI/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["aI"];
	});
	var r1 = /au/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["au"];
	});
	var r1 = /aU/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["au"];
	});
	var r1 = /ae/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["ae"];
	});
	var r1 = /aE/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["aE"];
	});
	var r1 = /ao/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["ao"];
	});
	var r1 = /aO/g;
	text = text.replace(r1, function() {
		return unicodeValue_vowels["aO"];
	});

	console.log("Iam here"+text);
	text = text.replace(/([A-z])/g, function(a) {
		//console.log(a);
		//if(typeof unicodeValue_vowels[a] != "undefined") 
		if(a in unicodeValue_vowels) {
			return chr = unicodeValue_vowels[a];
		} else {
			return a;
		}
	});
	
	text = text.replace(/([A-z])+/g, function(a) {
		if(a in unicodeValue) {
			return chr = unicodeValue[a];
		} else {
			return a;
		}
	});
	
	return text;
	//$("#output").val(text);

/* added by nagaraju V for keboard press */
}

//tamil-utf2wx
function convert_tam_utf2wx(text) {
	//var text = $("#input").val();
	
	var unicodeValue = new Array();
	var unicodeValue_vowels = new Array();
	unicodeValue_vowels["\u0B85"] = 'a';	//a
	unicodeValue_vowels["\u0B86"] = 'A';
	unicodeValue_vowels["\u0B87"] = 'i';
	unicodeValue_vowels["\u0B88"] = 'I';
	unicodeValue_vowels["\u0B89"] = 'u';
	unicodeValue_vowels["\u0B8A"] = 'U';
	unicodeValue_vowels["\u0B8B"] = 'q';
	unicodeValue_vowels["\u0B8C"] = 'lq';
	unicodeValue_vowels["\u0B8F"] = 'e';
	unicodeValue_vowels["\u0B90"] = 'E';
	unicodeValue_vowels["\u0B93"] = 'o';
	unicodeValue_vowels["\u0B94"] = 'O';
//	unicodeValue["\u0B81"] = 'z';	//z
	unicodeValue["\u0BB3"] = 'lY';
	unicodeValue["\u0BC5"] = 'EY';
	unicodeValue["\u0BB4"] = 'lYY';
	unicodeValue["\u0BA9"] = 'nY';
	unicodeValue["\u0BB1"] = 'rY';
	unicodeValue["\u0BC6"] = 'eV';
	unicodeValue["\u0BC9"] = 'OY';
	unicodeValue["\u0BCA"] = 'oV';

	/***********Three Character length words**************/
/*Uncommented By Nagaraju to allow display of below 3 letter characters*/
	unicodeValue_vowels["\u0B8D"] = 'EY';
	unicodeValue_vowels["\u0B8E"] = 'eV';
	
	unicodeValue_vowels["\u0B91"] = 'OY';
	unicodeValue_vowels["\u0B92"] = 'oV';

/* added by nagaraju V for keboard press */
//	unicodeValue["k_R"]='\u0B95\u0BCD\u0BB7';
//	unicodeValue["w_r"]='\u0BA4\u0BCD\u0BB0';
//	unicodeValue["j_F"]='\u0B9C\u0BCD\u0B9E';

	/*unicodeValue_vowels["z"]='\u0B85\u0B81';
	unicodeValue_vowels["M"]='\u0B85\u0B82';
	unicodeValue_vowels["H"]='\u0B85\u0B83';
	unicodeValue_vowels["Q"]='\u0BE0';*/

	/**************symbol mappings***********************/

	unicodeValue[";"] = ';';	//g;
	unicodeValue[":"] = ':';	//:
	unicodeValue["34"] = '\"';	//
	unicodeValue["39"] = '\'';	//'
	unicodeValue["44"] = ',';	//,
	unicodeValue["46"] = '.';	//.
	unicodeValue["47"] = '/';	///.
	unicodeValue["63"] = '?';	//?
	unicodeValue["<"] = '<';	//<
	unicodeValue[">"] = '>';	//>
	unicodeValue["91"] = '[';	//[
	unicodeValue["93"] = ']';	//]
	unicodeValue["123"] = '{';	//{
	unicodeValue["125"] = '}';	//}
	unicodeValue["40"] = '(';	//(
	unicodeValue["41"] = ')';	//)
	unicodeValue["64"] = '@';	//@
	unicodeValue["35"] = '#';	//#
	//unicodeValue["94"] = '94';	//#
	unicodeValue["^"] = '^';	//^
	unicodeValue["42"] = '*';	//*
	unicodeValue["\u0BCD"] = '';	//_
	unicodeValue["61"] = '=';	//=
	unicodeValue["43"] = '+';	//+
	unicodeValue["\u0BE4"] = '|';	//|
	unicodeValue["~"] = '~';	//|
	unicodeValue["`"] = '`';	//|
	unicodeValue["\\"] = '\\';	//|


	/***************numbers mapping ***********************/

	unicodeValue["\u0BE6"] = '0';	//0
	unicodeValue["\u0BE7"] = '1';	//1
	unicodeValue["\u0BE8"] = '2';	//2
	unicodeValue["\u0BE9"] = '3';	//3
	unicodeValue["\u0BEA"] = '4';	//4
	unicodeValue["\u0BEB"] = '5';	//5
	unicodeValue["\u0BEC"] = '6';	//6
	unicodeValue["\u0BED"] = '7';	//7
	unicodeValue["\u0BEE"] = '8';	//8
	unicodeValue["\u0BEF"] = '9';	//9

	/*****************a-z mappings***************************/

	unicodeValue["\u0B85"] = 'a';	//a
	unicodeValue["\u0BAC"] = 'b';	//b
	unicodeValue["\u0B9A"] = 'c';	//c
	unicodeValue["\u0BA1"] = 'd';	//d
	unicodeValue["\u0BC7"] = 'e';	//e
	unicodeValue["\u0B99"] = 'f';	//f
	unicodeValue["\u0B97"] = 'g';	//g
	unicodeValue["\u0BB9"] = 'h';	//h
	unicodeValue["\u0BBF"] = 'i';	//i
	unicodeValue["\u0B9C"] = 'j';	//j
	unicodeValue["\u0B95"] = 'k';	//k
	unicodeValue["\u0BB2"] = 'l';	//l
	unicodeValue["\u0BAE"] = 'm';	//m
	unicodeValue["\u0BA8"] = 'n';	//n
	unicodeValue["\u0BCB"] = 'o';	//o
	unicodeValue["\u0BAA"] = 'p';	//p
	unicodeValue["\u0BC3"] = 'q';	//q
	unicodeValue["\u0BB0"] = 'r';	//r
	unicodeValue["\u0BB8"] = 's';	//s
	unicodeValue["\u0B9F"] = 't';	//t
	unicodeValue["\u0BC1"] = 'u';	//u
	unicodeValue["\u0BB5"] = 'v';	//v
	unicodeValue["\u0BA4"] = 'w';	//w
	unicodeValue["\u0BA6"] = 'x';	//x
	unicodeValue["\u0BAF"] = 'y';	//y
	unicodeValue["\u0B81"] = 'z';	//z

	/*******************A-Z mappings*****************************/

	unicodeValue["\u0BBE"] = 'A';	//A
	unicodeValue["\u0BAD"] = 'B';	//B
	unicodeValue["\u0B9B"] = 'C';	//C
	unicodeValue["\u0BA2"] = 'D';	//D
	unicodeValue["\u0BC8"] = 'E';	//E
	unicodeValue["\u0B9E"] = 'F';	//F
	unicodeValue["\u0B98"] = 'G';	//G
	unicodeValue["\u0B83"] = 'H';	//H
	unicodeValue["\u0BC0"] = 'I';	//I
	unicodeValue["\u0B9D"] = 'J';	//J
	unicodeValue["\u0B96"] = 'K';	//K
	//unicodeValue["L"] = 'L';	//L
	unicodeValue["\u0B82"] = 'M';	//M
	unicodeValue["\u0BA3"] = 'N';	//N
	unicodeValue["\u0BCC"] = 'O';	//O
	unicodeValue["\u0BAB"] = 'P';	//P
	unicodeValue["\u0BC4"] = 'Q';	//Q
	unicodeValue["\u0BB7"] = 'R';	//R
	unicodeValue["\u0BB6"] = 'S';	//S
	unicodeValue["\u0BA0"] = 'T';	//T
	unicodeValue["\u0BC2"] = 'U';	//U
	//unicodeValue["V"] = 'V';	//V
	unicodeValue["\u0BA5"] = 'W';	//W
	unicodeValue["\u0BA7"] = 'X';	//X
	unicodeValue["\u0BBD"] = 'Y';	//Y
	unicodeValue["\u0BBC"] = 'Z';	//Z
	//unicodeValue[89] = '\u0BA6';
	//unicodeValue[90] = '\u0B81';
	//unicodeValue[90] = '\u0BBD';

	//CONSONANT+HALANT
	var r1 = /([\u0B95-\u0BB9])\u0BCD/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u0BCD"];
	});

	//CONSONANT+NUKTA+MATRA+MODIFIER 
	var r1 = /([\u0B95-\u0BB9])\u0BBC([\u0BBE-\u0BCC])([\u0B81-\u0B83])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u0BBC"]+unicodeValue[arguments[2]]+unicodeValue[arguments[3]];
	});

	//CONSONANT+NUKTA+MATRA
	var r1 = /([\u0B95-\u0BB9])\u0BBC([\u0BBE-\u0BCC])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u0BBC"]+unicodeValue[arguments[2]];
	});

	//CONSONANT+NUKTA+MODIFIER
	var r1 = /([\u0B95-\u0BB9])\u0BBC([\u0B81-\u0B83])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u0BBC"]+unicodeValue[arguments[2]];
	});
	//CONSONANT+NUKTA
	var r1 = /([\u0B95-\u0BB9])\u0BBC/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue["\u0BBC"]+'a';
	});

	//CONSONANT+MATRA+MODIFIER 
	var r1 = /([\u0B95-\u0BB9])([\u0BBE-\u0BCC])([\u0B81-\u0B83])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue[arguments[2]]+unicodeValue[arguments[3]];
	});

	//CONSONANT+MATRA 
	var r1 = /([\u0B95-\u0BB9])([\u0BBE-\u0BCC])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+unicodeValue[arguments[2]];
	});

	//CONSONANT+MODIFIER
	var r1 = /([\u0B95-\u0BB9])([\u0B81-\u0B83])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+'a'+unicodeValue[arguments[2]];
	});

	//CONSONANT
	var r1 = /([\u0B95-\u0BB9])/g;
	text = text.replace(r1,function(){
		return unicodeValue[arguments[1]]+'a';
	});

	//VOWEL+MODIFIER,VOWEL
	var r1 = /([\u0B86-\u0B94])([\u0B81-\u0B83])/g;
	text = text.replace(r1,function(){
		return unicodeValue_vowels[arguments[1]]+unicodeValue[arguments[2]];
	});

	//VOWEL+MODIFIER,VOWEL
	var r1 = /([\u0B85])([\u0B81-\u0B83])/g;
	text = text.replace(r1,function(){
		return 'a'+unicodeValue[arguments[2]];
	});
	//console.log("Iam here " +text);

	//VOWEL+MODIFIER,VOWEL
	var r1 = /([\u0B86-\u0B94])/g;
	text = text.replace(r1,function(){
		return unicodeValue_vowels[arguments[1]];
	});
	//console.log("Iam here " +text);

	text = text.replace(/([\u0B80-\u0BFF])/g, function(a) {
		//console.log(a);
		//if(typeof unicodeValue_vowels[a] != "undefined") 
		if(a in unicodeValue_vowels) {
			return chr = unicodeValue_vowels[a];
		} else {
			return a;
		}
	});

	//console.log("Iam here"+text);
	text = text.replace(/([\u0B80-\u0BFF])/g, function(a) {
		if(a in unicodeValue) {
			return chr = unicodeValue[a];
		} else {
			return a;
		}
	});
	//console.log("Iam here2"+text);
	//console.log("Iam here3"+text);
	//$("#output").val(text);
	return text;

/* added by nagaraju V for keboard press */
}
