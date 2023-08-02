<?php 
$text = $_POST["text"];
$output_type = $_POST["output_type"];

$tokens = explode(" ", $text);
$fp = fopen("in.txt","w");
$write_text = '';
foreach($tokens as $token) {
	$write_text .= $token . "\tUNK\n";
}
fwrite($fp,$write_text);
fclose($fp);

header('Content-Type: application/json');

#call your python script here and make sure your python script is also at same place as this script
#$status = system("cat -n in.txt");
#$status = system("sh postagger/postagger.sh /var/www/html/tamil-parser/ in.txt");
$postag_command = "sh postagger/postagger.sh /var/www/html/tamil-parser/ in.txt";
$convertor_utf2wx_command = "perl /home/nagaraju/git/Tamil-Parser/tools/convertor-indic-1.4.7/convertor_indic.pl  -f=text -s=utf -t=wx -l=tam -i=in.txt > in_wx.txt";
#$convertor_wx2utf_command = "perl /home/nagaraju/git/Tamil-Parser/tools/convertor-indic-1.4.7/convertor_indic.pl  -f=text -s=wx -t=utf -l=tam -i=in_wx_mo.txt > in_utf_mo.txt";
$morph_command = "lt-proc -c  mobin/tam_apertium_v2.1.moobj < in_wx.txt > in_wx_mo.txt";

exec($postag_command, $out1, $ret_var1);
exec($convertor_utf2wx_command, $out2, $ret_var2);
exec($morph_command, $out3, $ret_var3);
#exec($convertor_wx2utf_command, $out4, $ret_var4);

//get postag output
if($ret_var1 == 0) {
	$fp_out = fopen("postagger/posout.txt","r");
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

//get morph output
if($ret_var4 == 0) {
	$fp_out = fopen("in_wx_mo.txt","r");
	if ($fp_out) {
		while (($line = fgets($fp_out)) !== false) {
			// process the line read.
			//echo "$line";
			$morph_arr = explode("/",$line);
			$morph_data[] = array('token'=>$morph_arr[0], 'feature'=>$morph_arr[1]);
		}
		fclose($fp_out);
	} else {
		$morph_data[] = array('morph_analyzer'=>"Please try later");
	} 
} else {
		$morph_data[] = array('morph_analyzer'=>"Please try later");
	#echo "Technical error..Please try again later!<br>";
}
$data = array('status'=>'success','message'=>'Morph output fetched.','pos_annotations'=>$pos_data, 'morph'=>$morph_data);
 echo json_encode( $data );
?>
