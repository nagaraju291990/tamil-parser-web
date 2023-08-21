<?php 
require_once("config.php");
//get the input text and module to run
$text = $_POST["text"];
$output_type = $_POST["output_type"];

//write the input sentence to a file for predicting Neural POS
$tokens = explode(" ", $text);
$fp = fopen("tmp/in.txt","w");
$write_text = '';
fwrite($fp,$text);
fclose($fp);

$tokens = explode(" ", $text);

//write into file for conversion from utf2wx and morph
$fp = fopen("tmp/in_utf.txt","w");	

//write into file for postagging from crf model
$fp2 = fopen("tmp/in_utf2.txt","w");

$write_text = '';$write_text2 = '';
foreach($tokens as $token) {
	$write_text .= $token . "\n";
	$write_text2 .= $token . "\tUNK\n";
}

fwrite($fp,$write_text);
fwrite($fp2,$write_text2);
fclose($fp);
fclose($fp2);

header('Content-Type: application/json');

#$postag_command = "sh postagger/postagger.sh /var/www/html/tamil-parser/ in.txt";
$postag_command1 = "python3 postagger/Method1_WordPOS/method1.py tmp/in.txt > tmp/pos_method1.txt";
$postag_command2 = "python3 postagger/Method2_SubWordPOS/method2.py tmp/in.txt > tmp/pos_method2.txt";

$convertor_utf2wx_command = "perl /home/user/Tamil-Parser/tools/convertor-indic-1.4.7/convertor_indic.pl  -f=text -s=utf -t=wx -l=tam -i=tmp/in_utf.txt > tmp/in_wx.txt";
$postag_command3 = "sh postagger/postagger.sh /var/www/html/tamil-parser/ tmp/in_utf2.txt > tmp/pos_method3.txt";
#$convertor_wx2utf_command = "perl /home/user/Tamil-Parser/tools/convertor-indic-1.4.7/convertor_indic.pl  -f=text -s=wx -t=utf -l=tam -i=in_wx_mo.txt > in_utf_mo.txt";

$morph_command = "lt-proc -c  mobin/tam_apertium_v2.1.moobj < tmp/in_wx.txt > tmp/in_wx_mo.txt";

//postaggig done onunicode text only
exec($postag_command1, $pos_out1, $pos_ret_var1);
exec($postag_command2, $pos_out2, $pos_ret_var2);
exec($postag_command3, $pos_out3, $pos_ret_var33);

//convert to wx and get morph analysi
exec($convertor_utf2wx_command, $con_out, $con_ret_var);
exec($morph_command, $morph_out, $morph_ret_var);
#exec($convertor_wx2utf_command, $out4, $ret_var4);


//get postag output
if($pos_ret_var1 == 0) {
	$fp_out = fopen("tmp/pos_method1.txt","r");
	if ($fp_out) {
		while (($line = fgets($fp_out)) !== false) {
			// process the line read.
			//echo "$line";
			$pos_arr = explode("\t",$line);
			$pos_data[] = array('token'=>$pos_arr[0], 'feature'=>$pos_arr[1]);
		}
		fclose($fp_out);
	} else {
		$pos_data[] = array('pos'=>"Please try later");
	} 
} else {
	$pos_data[] = array('pos'=>"Please try later");
	#echo "Technical error..Please try again later!<br>";
}
if($pos_ret_var2 == 0) {
	$fp_out = fopen("tmp/pos_method2.txt","r");
	if ($fp_out) {
		while (($line = fgets($fp_out)) !== false) {
			// process the line read.
			//echo "$line";
			$pos_arr = explode("\t",$line);
			$pos_data2[] = array('token'=>$pos_arr[0], 'feature'=>$pos_arr[1]);
		}
		fclose($fp_out);
	} else {
		$pos_data2 = array('pos'=>"Please try later");
	} 
} else {
	$pos_data2[] = array('pos'=>"Please try later");
	#echo "Technical error..Please try again later!<br>";
}
if($pos_ret_var33 == 0) {
	$fp_out = fopen("tmp/pos_method3.txt","r");
	if ($fp_out) {
		while (($line = fgets($fp_out)) !== false) {
			// process the line read.
			//echo "$line";
			$pos_arr = explode("\t",$line);
			$pos_data3[] = array('token'=>$pos_arr[0], 'feature'=>$pos_arr[1]);
		}
		fclose($fp_out);
	} else {
		$pos_data3 = array('pos'=>"Please try later");
	} 
} else {
	$pos_data3[] = array('pos'=>"Please try later");
	#echo "Technical error..Please try again later!<br>";
}

$pos['method1'] = $pos_data;
$pos['method2'] = $pos_data2;
$pos['method3'] = $pos_data3;
//get morph output
if($con_ret_var == 0) {
	$fp_out = fopen("tmp/in_wx_mo.txt","r");
	if ($fp_out) {
		while (($line = fgets($fp_out)) !== false) {
			// process the line read.
			//echo "$line";
			$morph_arr = explode("/",$line);
			$morph_data[] = array('token'=>$morph_arr[0], 'feature'=>array_slice($morph_arr, 1));
		}
		fclose($fp_out);
	} else {
		$morph_data[] = array('morph_analyzer'=>"Please try later");
	} 
} else {
		$morph_data[] = array('morph_analyzer'=>"Please try later");
	#echo "Technical error..Please try again later!<br>";
}

$data = array('status'=>'success','message'=>'Morph output fetched.','pos_annotations'=>$pos, 'morph'=>$morph_data);
 echo json_encode( $data );
?>
