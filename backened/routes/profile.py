from flask import Blueprint, request, jsonify
from db import get_db_connection

profile_bp = Blueprint('profile', __name__)

@profile_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM users WHERE email=%s", (email,))
    user = cursor.fetchone()

    if user and (user['password'], password):
        return jsonify({
            "id": user['id'],
            "username": user['username'],
            "email": user['email']
        }), 200
    else:
        return jsonify({"error": "Invalid credentials"}), 401


@profile_bp.route('/updateProfile/<int:user_id>', methods=['PUT', 'OPTIONS'])
def update_profile(user_id):
    if request.method == 'OPTIONS':
        # CORS preflight response
        response = jsonify({'message': 'CORS preflight passed'})
        response.headers.add("Access-Control-Allow-Origin", "*")
        response.headers.add("Access-Control-Allow-Headers", "Content-Type")
        response.headers.add("Access-Control-Allow-Methods", "PUT, OPTIONS")
        return response, 200

    data = request.json
    username = data.get('username')
    email = data.get('email')
    new_password = data.get('password')

    conn = get_db_connection()
    cursor = conn.cursor()
    try:
        if new_password:
            # Hash new password only if provided
            
            cursor.execute(
                "UPDATE users SET username=%s, email=%s, password=%s WHERE id=%s",
                (username, email, new_password, user_id)
            )
        else:
            # Update without changing password
            cursor.execute(
                "UPDATE users SET username=%s, email=%s WHERE id=%s",
                (username, email, user_id)
            )
        conn.commit()
        return jsonify({"message": "Profile updated successfully"}), 200
    except Exception as e:
        print(f"Error updating profile: {e}")  # Add this to your backend logs
        return jsonify({"error": str(e)}), 500
    finally:
        cursor.close()
        conn.close()


