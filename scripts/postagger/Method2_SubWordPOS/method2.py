import numpy as np
import pandas as pd
import torch
import torch.nn as nn
import torch.nn.functional as F
import torch.optim as optim
import numpy as np

import os
os.environ['TRANSFORMERS_CACHE'] = '/home/user/.poscache/'
from transformers import BertTokenizer

# Load the BERT tokenizer
model_name = "monsoon-nlp/tamillion"
tokenizer = BertTokenizer.from_pretrained(model_name)


class BiLSTMTagger(nn.Module):

    def __init__(self, embedding_dim, hidden_dim, vocab_size, tagset_size, pretrained_embeddings, dropout = 0.3):
        ''' Initialize the layers of this model.'''
        super(BiLSTMTagger, self).__init__()

        self.hidden_dim = hidden_dim

        # embedding layer that turns words into a vector of a specified size
        self.word_embeddings = nn.Embedding(vocab_size, embedding_dim)
        self.word_embeddings.weight.data.copy_(pretrained_embeddings)
        # the LSTM takes embedded word vectors (of a specified size) as inputs
        # and outputs hidden states of size hidden_dim
        self.lstm = nn.LSTM(embedding_dim, hidden_dim, bidirectional=True)

        self.dropout = nn.Dropout(dropout)

        self.hidden2tag = nn.Linear(hidden_dim * 2, tagset_size)

        # initialize the hidden state (see code below)
        self.hidden = self.init_hidden()


    def init_hidden(self):
        ''' At the start of training, we need to initialize a hidden state;
           there will be none because the hidden state is formed based on perviously seen data.
           So, this function defines a hidden state with all zeroes and of a specified size.'''
        # The axes dimensions are (n_layers, batch_size, hidden_dim)
        return (torch.zeros(2, 1, self.hidden_dim),
                torch.zeros(2, 1, self.hidden_dim))

    def forward(self, sentence):
        ''' Define the feedforward behavior of the model.'''
        # create embedded word vectors for each word in a sentence
        embeds = self.word_embeddings(sentence)

        # get the output and hidden state by passing the lstm over our word embeddings
        # the lstm takes in our embeddings and hiddent state
        lstm_out, self.hidden = self.lstm(
            embeds.view(len(embeds), 1, -1), self.hidden)

        #self.hidden_dim = hidden_dim
        lstm_out = self.dropout(lstm_out)

        # get the scores for the most likely tag for a word
        tag_outputs = self.hidden2tag(lstm_out.view(len(sentence), -1))
        tag_scores = F.log_softmax(tag_outputs, dim=1)

        return tag_scores

tag2idx = {'PRON': 0, 'DET': 1, 'ADJ': 2, 'NOUN': 3, 'CCONJ': 4, 'ADV': 5, 'VERB': 6, 'PUNCT': 7, 'PROPN': 8, 'ADP': 9, 'NUM': 10, 'AUX': 11, 'SCONJ': 12, 'PART': 13, 'SYM': 14, 'CONJ': 15, 'INTJ': 16}
idx2tag = {0: 'PRON', 1: 'DET', 2: 'ADJ', 3: 'NOUN', 4: 'CCONJ', 5: 'ADV', 6: 'VERB', 7: 'PUNCT', 8: 'PROPN', 9: 'ADP', 10: 'NUM', 11: 'AUX', 12: 'SCONJ', 13: 'PART', 14: 'SYM', 15: 'CONJ', 16: 'INTJ'}

#self.hidden_dim = hidden_dimnizer.get_vocab()
model_vocab = tokenizer.get_vocab()
EMBEDDING_SIZE = 300
embedding_weights = np.random.uniform(-0.05, 0.05, size=(len(model_vocab), EMBEDDING_SIZE))
embedding_weights = torch.from_numpy(embedding_weights)

EMBEDDING_DIM = 300
HIDDEN_DIM = 256

# instantiate our model
model = BiLSTMTagger(EMBEDDING_DIM, HIDDEN_DIM, len(model_vocab), len(tag2idx), embedding_weights)

# define our loss and optimizer
loss_function = nn.NLLLoss()
optimizer = optim.Adam(model.parameters())

PATH = "/var/www/html/tamil-parser/scripts/postagger/Method2_SubWordPOS/Tamil_POS_BertTokenizer_Method2_savedModel.pth"
model.load_state_dict(torch.load(PATH))

import sys
#test_sentence = "இதன் மூலம் ஆண்மையை அதிகரிக்கும் மிக சிறந்த ஜூஸாக உள்ளது ."
fp = open(sys.argv[1], "r")
lines = fp.read()#.split("\n")
fp.close()
#print(lines)
test_sentence = lines.split()

inputs = torch.tensor(tokenizer.encode(test_sentence, add_special_tokens=False))
test_sentence = tokenizer.convert_ids_to_tokens(inputs)
tag_scores = model(inputs)
# print(tag_scores)

_, predicted_tags = torch.max(tag_scores, 1)
#print(tokenizer.encode(test_sentence, add_special_tokens=False))
#print('\n')
#print('Predicted tags: \n',predicted_tags)
#print("")
# print(idx2tag)
ct = 0
for i in predicted_tags:
    print(test_sentence[ct], end="\t")
    print(idx2tag[i.item()])
    ct += 1
