from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

from api.test.routes import main_mod
app.register_blueprint(main_mod, url_prefix='/v1/')

from api.hangman.routes import hangman_mod
app.register_blueprint(hangman_mod, url_prefix='/hangman')


if __name__ == "__main__":
    app.run(host='0.0.0.0')
