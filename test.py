from flask import (Flask, 
                   render_template, 
                   request, 
                   redirect, 
                   jsonify)


  # For flask implementation
from flask_pymongo import PyMongo

app = Flask(__name__)

# app.config['MONGO_DBNAME'] = 'AlzheimersDB'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/AlzheimersDB'
mongo = PyMongo(app)



@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')


@app.route('/api/data')
def getData():

    data = [item for item in mongo.db.Question_Data.find({"LocationDesc": "Wyoming"}, {"_id": 0})]

    print(data)

    return data


if __name__ == '__main__':
    app.run(debug=True)

