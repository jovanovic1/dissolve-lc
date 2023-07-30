# app.py
import sys
sys.path.append('..')
from flask import Flask, render_template, request, redirect, session, jsonify
from flask_cors import CORS, cross_origin
from lcplugin.agent.DissolveAgent import DissolveAgent


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
        data = request.get_json()
        dissolve_agent = DissolveAgent(query=data['query'],url=data['tabUrl'])
        response = dissolve_agent._call()
        print(response)
        return  jsonify({"response":response})
    else:
        return jsonify({"response":"wrong input"})

if __name__ == '__main__':

    app.run()