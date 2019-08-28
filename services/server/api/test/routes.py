from flask import Blueprint, jsonify, request

main_mod = Blueprint('main', __name__)

@main_mod.route('/ping')
def ping():
    return jsonify({"response": "pong"})
