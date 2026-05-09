from flask import Blueprint, request, jsonify
import joblib
import pandas as pd
import os
import traceback

predict_bp1 = Blueprint('Bp_predict_v1', __name__)

# Load the model
model_path = os.path.join(os.path.dirname(__file__), '..', 'models', 'bp_model.joblib')
model = joblib.load(model_path)

# Define expected features
feature_labels = [
    'Age', 'Gender', 'Region', 'Weight (kg)', 'BP_Category', 'Diabetes', 'Heart_Rate',
    'Cholesterol_Level', 'Blood_Sugar_Level', 'Smoking_Status', 'Alcohol_Consumption',
    'Physical_Activity_Level', 'Diet_Score', 'Stress_Level', 'Medication_Compliance',
    'Family_History_Hypertension', 'Screen_Time', 'Sleep_Hours', 'Frequent_Headaches',
    'Chest_Pain', 'Swelling_Legs'
]

label_encoders = {
    'Gender': {'Male': 0, 'Female': 1},
    'Region': {'North': 0, 'South': 1, 'East': 2, 'West': 3},
    'BP_Category': {'Normal': 0, 'Elevated': 1, 'Stage 1': 2, 'Stage 2': 3},
    'Diabetes': {'No': 0, 'Yes': 1},
    'Heart_Rate': {'Low': 0, 'Medium': 1, 'High': 2},
    'Cholesterol_Level': {'Normal': 0, 'High': 1},
    'Blood_Sugar_Level': {'Normal': 0, 'High': 1},
    'Smoking_Status': {'Never': 0, 'Former': 1, 'Current': 2},
    'Alcohol_Consumption': {'Never': 0, 'Occasional': 1, 'Regular': 2},
    'Physical_Activity_Level': {'Low': 0, 'Moderate': 1, 'High': 2},
    'Diet_Score': {'Low': 0, 'Medium': 1, 'High': 2},
    'Stress_Level': {'Low': 0, 'Medium': 1, 'High': 2},
    'Medication_Compliance': {'No': 0, 'Yes': 1},
    'Family_History_Hypertension': {'No': 0, 'Yes': 1},
    'Frequent_Headaches': {'No': 0, 'Yes': 1},
    'Chest_Pain': {'No': 0, 'Yes': 1},
    'Swelling_Legs': {'No': 0, 'Yes': 1},
}

ADVICE = {
    0: {
        "Exercise_Recommendation": "Moderate exercise 3-4 times a week.",
        "Diet_Recommendation": "Balanced diet with low sodium intake.",
        "Remedies": "Monitor blood pressure regularly.",
        "Follow_Up_Advice": "Visit doctor every 6 months.",
        "Support_Type": "Community support groups.",
        "Support_Tips": "Maintain stress levels low.",
        "Additional_Guidance": {
            "Screen_Time_Advice": "Limit to under 2 hours per day.",
            "Sleep_Hours_Advice": "Aim for at least 7–8 hours of sleep.",
            "Frequent_Headaches_Advice": "Track and discuss with your doctor.",
            "Chest_Pain_Advice": "Seek immediate medical attention.",
            "Swelling_Legs_Advice": "Reduce salt and consult a doctor."
        }
    },
    1: {
        "Exercise_Recommendation": "Light walking daily.",
        "Diet_Recommendation": "Low-fat diet recommended.",
        "Remedies": "Avoid smoking and alcohol.",
        "Follow_Up_Advice": "Monthly blood pressure monitoring.",
        "Support_Type": "Consult a cardiologist.",
        "Support_Tips": "Practice meditation and yoga.",
        "Additional_Guidance": {
            "Screen_Time_Advice": "Avoid screen time before bed.",
            "Sleep_Hours_Advice": "Sleep early and consistently.",
            "Frequent_Headaches_Advice": "Try hydration and eye care.",
            "Chest_Pain_Advice": "May indicate heart issues—monitor closely.",
            "Swelling_Legs_Advice": "Elevate legs and stay active."
        }
    }
}

@predict_bp1.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        # Check missing fields
        missing_features = [feat for feat in feature_labels if feat not in data]
        if missing_features:
            return jsonify({'error': f'Missing input fields: {missing_features}'}), 400

        inputs = []
        for feat in feature_labels:
            val = data[feat]

            if feat in label_encoders:
                enc_dict = label_encoders[feat]
                if val not in enc_dict:
                    return jsonify({'error': f'Invalid value "{val}" for feature "{feat}". Expected one of {list(enc_dict.keys())}'}), 400
                val = enc_dict[val]
            else:
                if feat in ['Age', 'Weight (kg)', 'Screen_Time', 'Sleep_Hours']:
                    try:
                        val = float(val)
                    except Exception:
                        return jsonify({'error': f'Feature "{feat}" must be a number.'}), 400
            inputs.append(val)

        df = pd.DataFrame([inputs], columns=feature_labels)
        prediction = model.predict(df)[0]
        prediction = int(prediction)

        response = ADVICE.get(prediction, {
            "error": "Model prediction is out of expected range."
        })

        return jsonify(response)

    except Exception as e:
        traceback.print_exc()
        return jsonify({'error': f'Internal server error: {str(e)}'}), 500
