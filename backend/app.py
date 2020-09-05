from flask import Flask, request, make_response, jsonify
# from backend.model import acc_binary
import joblib
import numpy as np
import pickle
import os

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        data = request.get_json()
        print(data)
        age = int(data['age'])
        sex = int(data['sex'])
        trestbps = float(data['trestbps'])
        chol = float(data['chol'])
        restecg = float(data['restecg'])
        thalach = float(data['thalach'])
        exang = int(data['exang'])
        cp = int(data['cp'])
        fbs = float(data['fbs'])
        x = np.array([age, sex, cp, trestbps, chol, fbs, restecg,
                      thalach, exang]).reshape(1, -1)
        x = np.array([age, sex, cp, trestbps, chol, fbs, restecg,
                      thalach, exang]).reshape(1, -1)

        scaler_path = os.path.join(os.path.dirname(__file__), 'models/scaler.pkl')
        scaler = None
        with open(scaler_path, 'rb') as f:
            scaler = pickle.load(f)

        x = scaler.transform(x)

        model_path = os.path.join(os.path.dirname(__file__), 'models/rfc.sav')

        rfc = joblib.load(model_path)
        print("Model loaded")

        # score = (acc_binary/20)
        # percent = "{:.0%}".format(score)

        y = rfc.predict(x)
        print(y)

        # No heart disease
        if y == 0:
            return jsonify({'heart_disease': False})

        # y=1,2,3,4 are stages of heart disease
        else:
            return jsonify({'heart_disease': True})

    else:
        return make_response("", 301)


if __name__ == "__main__":
    app.run(debug=True, port=5000)