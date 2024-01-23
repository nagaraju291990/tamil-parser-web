import sys
import nltk
import sklearn_crfsuite
from sklearn_crfsuite import metrics
import re

# Define a function to extract features for each word in a sentence
def word_features(words, i):
    #print(word)
    word = words[i]
    #print(word)
   # pos_tag = sentence[i][1]
    
    features = {
        'word': word,
        'is_first': i == 0, #if the word is a first word
        'is_last': i == len(sentence) - 1,  #if the word is a last word
        #'is_capitalized': word[0].upper() == word[0],
        #'is_all_caps': word.upper() == word,      #word is in uppercase
        #'is_all_lower': word.lower() == word,      #word is in lowercase
         #prefix of the word
        'prefix-1': word[0],
        'prefix-2': word[:2],
        'prefix-3': word[:3],
         #suffix of the word
        'suffix-1': word[-1],
        'suffix-2': word[-2:],
        'suffix-3': word[-3:],
         #extracting previous word
        'prev_word': '' if i == 0 else sentence[i-1][0],
         #extracting next word
        'next_word': '' if i == len(sentence)-1 else sentence[i+1][0],
        'has_hyphen': '-' in word,    #if word has hypen
        'is_numeric': word.isdigit(),  #if word is in numeric
        'capitals_inside': word[1:].lower() != word[1:],
        #'pos_tag': pos_tag,
        #extracting previous postag
       # 'prev_tag': '' if i == 0 else sentence[i-1][1],
        #extracting next postag
        #'next_tag': '' if i == len(sentence)-1 else sentence[i+1][1],
    }
    return features

fp = open(sys.argv[1], "r")
lines = fp.read().split("\n")
fp.close()

X = []
for sentence in lines:
    if(sentence == ""):
        continue
    X_sentence = []
    #y_sentence = []
    words = sentence.split(" ")
    for i in range(len(words)):
        #print(words,i)
        X_sentence.append(word_features(words, i))
        #y_sentence.append(sentence[i][1])
    X.append(X_sentence)
    #y.append(y_sentence)
#print(X)
#exit()
# crf = sklearn_crfsuite.CRF(
#     algorithm='lbfgs',
#     c1=0.1,
#     c2=0.1,
#     max_iterations=200,
#     all_possible_transitions=True
# )

# load
import pickle
with open('crf_model.pkl', 'rb') as f:
    crf = pickle.load(f)

pred = crf.predict(X)

for x, p in zip(X, pred ):
    for i,j in zip(x,p):
        print(i["word"] + "\t" + j)
print(pred)