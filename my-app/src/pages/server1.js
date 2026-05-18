const express = require('express');
const bcrypt = require('bcrypt');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON body
app.use(bodyParser.json());

// Setup your MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'xxxxxxxxxx',
  database: 'xxxxxx'
});

db.connect(err => {
  if (err) {
    console.error('DB connection error:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Your login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT id, username, email, password_hash FROM users WHERE email = ?';
  db.query(sql, [email], (err, results) => {
    if (err) {
      console.error('DB error:', err);
      return res.status(500).json({ message: 'Database error' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'User not found' });
    }

    const user = results[0];

    bcrypt.compare(password, user.password_hash, (err, isMatch) => {
      if (err) {
        console.error('Password compare error:', err);
        return res.status(500).json({ message: 'Password comparison error' });
      }

      if (!isMatch) {
        return res.status(401).json({ message: 'Incorrect password' });
      }

      res.status(200).json({
        user_id: user.id,
        username: user.username,
        email: user.email,
      });
    });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
