from flask import Blueprint, jsonify, request

import random


hangman_mod = Blueprint('hangman', __name__)

# from firebase import firebase
# firebase = firebase.FirebaseApplication()


chosen_word = ''
# Finds a random word from the dictionary
@hangman_mod.route('/get_word')
def get_word():
    valid_words = load_words()

    i = random.randint(0, len(valid_words))

    global chosen_word
    chosen_word = valid_words[i]

    return jsonify({
                    'word': valid_words[i],
                    'word_arr': list(valid_words[i]),
                   })


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


import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

cred = credentials.Certificate('cred.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://hangman-68783.firebaseio.com/'
})

ref = db.reference('/')

@hangman_mod.route('/log_result')
def log_result():
    try:
        name = request.args.get('playerName')
        status = str(request.args.get('status'))

        win_count = 0
        loss_count = 0

        if (status == 'win'):
            win_count += 1
        elif (status == 'lost'):
            loss_count += 1

        ref.update({
                'stats':
                    {
                      name: {
                              'win_count': win_count,
                              'loss_count': loss_count,
                            }
                    }
                })

        return jsonify({'status': "OK"})
    except Exception as e:
        return jsonify({
                        'description': e,
                        'status': 'error',
                       })


# https://github.com/dwyl/english-words/blob/master/read_english_dictionary.py
# List of words from english alphabet
def load_words():
    with open('words_alpha.txt') as word_file:
        valid_words = set(word_file.read().split())

    return list(valid_words)
