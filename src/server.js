// server.js

const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// MySQL 데이터베이스 연결 설정
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'firewind',
  password: 'qkfka',
  database: 'testdb'
});

// MySQL 데이터베이스 연결
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database as ID ' + connection.threadId);
});

app.get('/', (req, res) => {
  // MySQL 쿼리 실행 예시
  connection.query('SELECT * FROM your_table', (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});