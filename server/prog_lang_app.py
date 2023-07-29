# app.py
 
from flask import Flask, render_template, request, redirect, session
 
app = Flask(__name__)

@app.route('/')
def view_form():
    return render_template('login.html')
 
@app.route('/handle_post', methods=['POST'])
def handle_post():
    if request.method == 'POST':
        html = request.form['html']
        query = request.form['query']
        metadata = request.form['metadata']
        print(html, query, metadata)
        return "hello, welcome to post request"
    else:
        return "hello, wrong input"

if __name__ == '__main__':
    app.run()