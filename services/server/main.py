from flask import Flask

app = Flask(__name__)

from api.test.routes import main_mod
app.register_blueprint(main_mod, url_prefix='/v1/')


if __name__ == "__main__":
    app.run(host='0.0.0.0')
