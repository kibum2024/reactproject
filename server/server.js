// server.js

const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const port = 4000;
const corsOptions = {
  origin: 'http://localhost:3000', // React 앱이 실행되는 주소
  methods: ['GET'],
  allowedHeaders: ['Content-Type']
};


// MySQL 데이터베이스 연결 설정
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'firewind',
  password: 'qkfka',
  database: 'testdb'
});

app.use(cors(corsOptions));

// MySQL 데이터베이스 연결
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database as ID ' + connection.threadId);
});

app.get('/itemdata', (req, res) => {
  connection.query('SELECT * FROM ITEMDATA', (error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).send('Error executing query');
      return;
    }
    console.log('Query results:', results);
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});