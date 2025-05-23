

from flask import Flask, jsonify

app = Flask(__name__)

def main():
    return "Hello, World!"

@app.route('/hello', methods=['GET'])
def hello():
    result = main()
    return jsonify({'message': result}), 200

if __name__ == '__main__':
    app.run(debug=True)