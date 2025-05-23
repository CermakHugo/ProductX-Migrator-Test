

from flask import Flask, jsonify
from hello_service import hello_service

app = Flask(__name__)

@app.route('/main_main', methods=['GET'])
def main_main():
    result = hello_service()
    return jsonify({'result': result})