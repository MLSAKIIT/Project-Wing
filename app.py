from calendar import c
from flask import Flask, request
from registration import ProjWing

app = Flask(__name__)
P = ProjWing()

@app.route('/register', methods = ['POST'])
def register():
    content = request.json
    P.add_registration(content)
    return 'OK'


@app.route('/create', methods = ['GET'])
def create():
    P.create_list()
    return 'OK'

if __name__ == '__main__':
    app.run()