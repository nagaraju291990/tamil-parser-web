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

#call your python script here and make sure your python script is also at same place as this script
#$status = system("cat -n in.txt");
$status = system("sh postagger/postagger.sh /var/www/html/tamil-parser/ in.txt");

$fp_out = fopen("postagger/posout.txt","r");
if ($fp_out) {
	while (($line = fgets($fp_out)) !== false) {
		// process the line read.
		echo "$line";
	}

	fclose($fp_out);
} else {
	// error opening the file.
} 

?>
