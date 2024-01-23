path=/home/user/Tamil-Parser/tools/utilities/
html_path=/var/www/html/tamil-parser/scripts/
#echo "Running lt-proc morph\n";
python3 $path/get_mo_conl.py -i=$1 -m=/home/user/Tamil-morph/tam_apertium_v2.1.moobj -s=no > morph_out 
#echo "Running lt2ssf convertor\n";
python3 $path/lt2ssf.py morph_out > morph_ssf.txt
#echo "Changing order\n";
python3 $path/change_direct_obl.py morph_ssf.txt > morph_ssf1.txt
#echo "Running pruning and pickone morph\n";
sed -i '/^$/N;/^\n$/D' morph_ssf1.txt
sed -i -e 's/\n+//g' morph_ssf1.txt
#python3 $path/1pruning_pickone.py -i=morph_ssf1.txt > final_pickone.txt
sh $path/pruning/pruning.sh morph_ssf1.txt > prune_out
sh $path/pickonemorph/pickonemorph.sh prune_out > morph_pickone.out2
#echo "Running token number correction\n"
#python3 check_token.py morph_pickone.out > morph_pickone.out2
#sed -i '/^$/N;/^\n$/D' morph_pickone.out2
#sed -i -e 's/\n+//g' morph_pickone.out2
cut -f4 morph_pickone.out2 > f4
paste morph_pickone.out2 f4 > final_pickone.txt
#sed -i -e 's/	#.*//g' final_pickone.txt
#rm morph_out morph_ssf.txt morph_pickone.out morph_pickone.out2 f4 pickonemorphout pickone_out 
#echo "Converting to UD format\n"
head -2 morph_ssf1.txt > meta.txt
cat meta.txt final_pickone.txt > final_pickone1.txt
python3 $path/convert_ssf_UD.py final_pickone1.txt > pickone_UD.txt
#echo "Fixing pos using morph\n"
#python3 fix_pos_lcat.py pickone_UD.txt > pickone_UD_pos_fixed.txt
#mv pickone_UD_pos_fixed.txt $2
python3 $path/pickone_to_ud.py pickone_UD.txt > conl.txt
sed -i -e 's/$/\t-/g' conl.txt
#rule based dependency
echo "Rule based DEP\n"
python3 $path/rule_based_syntax_conll.py conl.txt
python3 $path/filter_ud.py out2_conll.tsv
sed -i -e 's/#Sent/\n#Sent/g' out4_conll.tsv
sed -i -e 's/^.*EXTRADEL.*\n//g' out3_conll.tsv
sed -i -e 's/^.*EXTRADEL.*\n//g' out4_conll.tsv

