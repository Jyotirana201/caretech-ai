from flask import Flask
from flask_cors import CORS

from routes.hairpredict import predict_bp as hair_bp
from routes.Bp_predict import predict_bp1
from routes.auth import auth_bp
from routes.profile import profile_bp
from routes.cancer import cancer_bp

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)

# Register blueprints with clear, separate names
app.register_blueprint(hair_bp, url_prefix='/hairpredict')
app.register_blueprint(predict_bp1, url_prefix='/bp')
app.register_blueprint(auth_bp)
app.register_blueprint(profile_bp)
app.register_blueprint(cancer_bp, url_prefix='/cancer')

@app.route('/')
def home():
    return "Flask API is running!"

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
