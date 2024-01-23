<?php 
$text = $_POST["text"];
$output_type = $_POST["output_type"];

$tokens = explode(" ", $text);
$fp = fopen("in.txt","w");
$write_text = '';
fwrite($fp,$text);
fclose($fp);

$tokens = explode(" ", $text);
$fp = fopen("in_utf.txt","w");
$fp2 = fopen("in_utf2.txt","w");
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

#call your python script here and make sure your python script is also at same place as this script
#$status = system("cat -n in.txt");
#$status = system("sh postagger/postagger.sh /var/www/html/tamil-parser/ in.txt");

#$postag_command = "sh postagger/postagger.sh /var/www/html/tamil-parser/ in.txt";
$postag_command1 = "python3 postagger/Method1_WordPOS/method1.py in.txt > pos_method1.txt";
$postag_command2 = "python3 postagger/Method2_SubWordPOS/method2.py in.txt > pos_method2.txt";

$convertor_utf2wx_command = "perl /home/user/Tamil-Parser/tools/convertor-indic-1.4.7/convertor_indic.pl  -f=conll -s=utf -t=wx -l=tam -i=pos_method1.txt > in_wx.txt";
#$convertor_wx2utf_command = "perl /home/user/Tamil-Parser/tools/convertor-indic-1.4.7/convertor_indic.pl  -f=text -s=wx -t=utf -l=tam -i=in_temp.txt > in_temp_utf.txt";
$postag_command3 = "sh postagger/postagger.sh /var/www/html/tamil-parser/ in_utf2.txt";
$convertor_wx2utf_command = "perl /home/user/Tamil-Parser/tools/convertor-indic-1.4.7/convertor_indic.pl  -f=text -s=wx -t=utf -l=tam -i=in_wx_mo.txt > in_utf_mo.txt";

#$morph_command = "lt-proc -c  mobin/tam_apertium_v2.1.moobj in_wx.txt";
$morph2udcommand = "sh morph2pickone.sh in_wx.txt";

exec($postag_command1, $out1, $ret_var1);
exec($morph2udcommand, $out2, $ret_var2);
#exec($postag_command2, $out2, $ret_var2);
#exec($postag_command3, $out3, $ret_var33);
exec($convertor_utf2wx_command, $out3, $ret_var3);
#exec($morph_command, $out4, $ret_var4);
exec($convertor_wx2utf_command, $out4, $ret_var4);


//get postag output
if($ret_var1 == 0) {
	$fp_out = fopen("pos_method1.txt","r");
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
$pos['Model1'] = $pos_data;
if($ret_var2 == 0) {
	$fp_out = fopen("out4_conll.tsv","r");
	if ($fp_out) {
		while (($line = fgets($fp_out)) !== false) {
			// process the line read.
			//echo "$line";
			$ud_arr = explode("\t",$line);
			$ud_data[] = array('tokenno'=>$ud_arr[0],
					   'token'=>$ud_arr[1], 
					   'lemma'=>$ud_arr[2], 
					   'upos'=>$ud_arr[3], 
					   'xpos'=>$ud_arr[4], 
					   'feat'=>$ud_arr[5], 
					   'head'=>$ud_arr[6], 
					   'dep'=>$ud_arr[7], 
					   'deprel'=>$ud_arr[8], 
					   'misc'=>$ud_arr[9] 
			);
		}
		fclose($fp_out);
	} else {
		$ud_data[] = array('ud'=>"Please try later");
	} 
} else {
		$ud_data[] = array('ud'=>"Please try later");
	#echo "Technical error..Please try again later!<br>";
}
$ud = $ud_data;
//get morph output
if($ret_var4 == 0) {
	$fp_out = fopen("in_wx_mo.txt","r");
	if ($fp_out) {
		while (($line = fgets($fp_out)) !== false) {
			// process the line read.
			//echo "$line";
			$morph_arr = explode("/",$line);
			#$morph_data[] = array('token'=>$morph_arr[0], 'feature'=>$morph_arr[1]);
			exec($convertor_utf2wx_command, $out4, $ret_var3);

			$morph_data[] = array('token'=>$morph_arr[0], 'feature'=>array_slice($morph_arr,1));
		}
		fclose($fp_out);
	} else {
		$morph_data[] = array('morph_analyzer'=>"Please try later");
	} 
} else {
		$morph_data[] = array('morph_analyzer'=>"Please try later");
	#echo "Technical error..Please try again later!<br>";
}
$data = array('status'=>'success','message'=>'Morph output fetched.','pos_annotations'=>$pos, 'morph'=>$morph_data, 'ud'=>$ud);
 echo json_encode( $data );
?>
