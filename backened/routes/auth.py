from flask import Blueprint, request, jsonify
import mysql.connector

auth_bp = Blueprint('auth', __name__)

def get_connection():
    return mysql.connector.connect(
        host='localhost',
        user='root',
        password='#Chinurajput2003',
        database='caretech'
    )

@auth_bp.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    conn = get_connection()
    cursor = conn.cursor()
    try:
        cursor.execute(
            "INSERT INTO users (username, email, password) VALUES (%s, %s, %s)",
            (data['username'], data['email'], data['password'])
        )
        conn.commit()
        return jsonify({'message': 'Signup successful'})
    except Exception as e:
        return jsonify({'message': f'Signup failed: {str(e)}'}), 400
    finally:
        cursor.close()
        conn.close()

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    try:
        cursor.execute(
            "SELECT id, username FROM users WHERE email = %s AND password = %s",
            (data['email'], data['password'])
        )
        user = cursor.fetchone()
        if user:
            return jsonify({
                'message': 'Login success',
                'id': user['id'],
                'username': user['username']
            })
        else:
            return jsonify({'message': 'Invalid credentials'}), 401
    except Exception as e:
        return jsonify({'message': f'Login failed: {str(e)}'}), 500
    finally:
        cursor.close()
        conn.close()
