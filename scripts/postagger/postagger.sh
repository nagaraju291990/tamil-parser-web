perl $1/scripts/postagger/extra_features_run.pl $2 > $1/scripts/postagger/extra_input.tmp
crf_test -m $1/scripts/postagger/25k_model $1/scripts/postagger/extra_input.tmp > $1/scripts/postagger/input_pos_predicted.txt
cut -f15 $1/scripts/postagger/input_pos_predicted.txt > $1/scripts/postagger/predicted_features.txt
cut -f1 $1/scripts/postagger/input_pos_predicted.txt > $1/scripts/postagger/tokens.txt
paste $1/scripts/postagger/tokens.txt $1/scripts/postagger/predicted_features.txt > $1/scripts/postagger/posout.txt
