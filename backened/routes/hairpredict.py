from flask import Blueprint, request, jsonify
import joblib
import pandas as pd
import re

# Blueprint for the predict route
predict_bp = Blueprint('predict_bp', __name__)

# Load the trained model and scaler
model = joblib.load('models/best_model.pkl')
scaler = joblib.load('models/scaler.pkl')

# Load the Excel file containing solutions (updated file name)
solution_df = pd.read_excel('models/solutionshair.xlsx')

# Updated feature labels (based on your new list)
feature_labels = [
    'Age', 'Gender', 'Acne', 'Hair Fall', 'Skin Type', 'Genetics', 'Smoke', 
    'Junk Food', 'Stress', 'Sleep Hours', 'Hair Length', 'Hair Type', 
    'Alcohol Consumption', 'Fizzy Hair', 'Dry Hair', 'Split Ends', 'Heat Damage', 
    'Lice', 'Dandruff', 'Pimples', 'Blackheads', 'Whiteheads', 'Dark Spots', 
    'Uneven Skin Tone', 'Wrinkles', 'Fine Lines', 'Dry Patches', 'Redness', 
    'Itching', 'Sunburn', 'Sunscreen Use', 'Face Wash Frequency', 'Exfoliation', 
    'Hormonal Issues', 'Makeup Use', 'Skin Sensitivity'
]

@predict_bp.route('/', methods=['POST'])  # URL will be /hairpredict/
def predict():
    try:
        data = request.json.get('inputs')

        if not data or len(data) != len(feature_labels):
            return jsonify({'error': 'Input length mismatch or missing data.'}), 400

        # Create a DataFrame and scale it
        df = pd.DataFrame([data], columns=feature_labels)
        scaled_data = scaler.transform(df)

        # Predict the category index (e.g., 0 to N)
        result_index = int(model.predict(scaled_data)[0])

        # Get the corresponding solution row from Excel
        row = solution_df[solution_df['Result'] == result_index]

        if row.empty:
            return jsonify({'error': f'No solution data found for result {result_index}.'}), 404

        # Convert the row to dictionary and drop the Result column
        solution_data = row.drop(columns=['Result']).to_dict(orient='records')[0]
        for key in solution_data:
            if isinstance(solution_data[key], str):
                cleaned_text = solution_data[key].replace('\\n', '\n')
                cleaned_text = re.sub(r'([:,])\s*\n+', r'\1 ', cleaned_text)
                parts = [p.strip() for p in cleaned_text.split(';') if p.strip()]

            solution_data[key] = '\n'.join(parts)









        return jsonify({
            'prediction': result_index,
            'details': solution_data
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 500
