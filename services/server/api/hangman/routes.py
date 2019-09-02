from flask import Blueprint, jsonify, request

import random

hangman_mod = Blueprint('hangman', __name__)


chosen_word = ''
# Finds a random word from the dictionary
@hangman_mod.route('/get_word')
def get_word():
    valid_words = load_words()

    i = random.randint(0, len(valid_words))

    global chosen_word
    chosen_word= valid_words[i]

    return jsonify({'word': valid_words[i]})


# Checks the letter chosen against the word
@hangman_mod.route('/check_letter')
def check_letter():
    letter = request.args.get('letter')

    if (chosen_word == ''):
        return jsonify({
                        'response': 'ERROR',
                        'description': 'No Word Chosen',
                      })

    accepted_indices = []
    for i in range(0, len(chosen_word)):

        if (letter == chosen_word[i]):
            accepted_indices.append(i)


    return jsonify({
                    'response': 'OK',
                    'indices': accepted_indices,
                  })

# # Functions that keep score
# score_1 = 0
# score_2 = 0
# @hangman_mod.route('/init')
# def init_score():
#     global score_1
#     global score_2
#
#     score_1 = 0
#     score_2 = 0
#





# https://github.com/dwyl/english-words/blob/master/read_english_dictionary.py
# List of words from english alphabet
def load_words():
    with open('words_alpha.txt') as word_file:
        valid_words = set(word_file.read().split())

    return list(valid_words)
