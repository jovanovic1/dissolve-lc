# app.py
import sys
sys.path.append('..')
from flask import Flask, render_template, request, redirect, session, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/')
def view_form():
    return render_template('login.html')

...
in_memory_datastore = {
   "COBOL" : {"name": "COBOL", "publication_year": 1960, "contribution": "record data"},
   "ALGOL" : {"name": "ALGOL", "publication_year": 1958, "contribution": "scoping and nested functions"},
   "APL" : {"name": "APL", "publication_year": 1962, "contribution": "array processing"},
}

@app.route('/programming_languages',  methods=['GET'])
@cross_origin()
def list_programming_languages():
   return {"programming_languages":list(in_memory_datastore.values())}

@app.route('/handle_post', methods=['POST'])
@cross_origin()
def handle_post():
    if request.method == 'POST':
        #response = funct(request)
        data = request.get_json()
        print(data)
        return  jsonify({"selectorString":
                ['span.color-swatch-inner[style*="background-image:url(https://resource.logitech.com/w_32,h_32,c_fill,b_white,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/swatch/rose.jpg?v=1)"]'],
                "redirectUrl": "",})
    else:
        return jsonify({"response":"wrong input"})

if __name__ == '__main__':

    app.run()