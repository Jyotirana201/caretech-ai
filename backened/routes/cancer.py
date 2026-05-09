from flask import Blueprint, request, jsonify
import joblib
import pandas as pd
from flask_cors import CORS

cancer_bp = Blueprint('cancer_bp', __name__)
CORS(cancer_bp)

# Load model and encoders
model = joblib.load("models/cancer_care_model.joblib")
label_encoders = joblib.load("models/label_encoders(cancer).joblib")

input_features = ['Age', 'Gender', 'Symptoms', 'FamilyHistory', 'SmokingUse', 'PhysicalActivity', 'DietQuality', 'SupportNeeded']
output_features = ['CancerType', 'TreatmentStatus', 'CancerStage', 'SupportType', 'SupportTips', 'Remedies', 'DietPlan']

@cancer_bp.route('/predict', methods=['POST'])
def predict_cancer():
    try:
        data = request.json
        df = pd.DataFrame([data], columns=input_features)

        for col in df.columns:
            if col in label_encoders:
                le = label_encoders[col]
                df[col] = le.transform([df[col][0]])

        prediction = model.predict(df)

        decoded_output = {}
        for i, feature in enumerate(output_features):
            decoded_output[feature] = label_encoders[feature].inverse_transform([prediction[0][i]])[0]

        decoded_output.update({
            "Benefits": "Early detection increases treatment success.",
            "Exercise": "Light yoga and walking recommended.",
            "SolutionProducts": "High-calorie nutrition supplements, hydration packs.",
            "FutureConsequences": "Advanced stages may limit treatment options.",
            "ConsequencesSolutions": "Routine checkups, follow doctor guidance, supportive therapy."
        })

        return jsonify(decoded_output)

    except Exception as e:
        return jsonify({"error": str(e)})
