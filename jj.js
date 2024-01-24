const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'yourusername',
  password: 'yourpassword',
  database: 'yourdatabase'
});

connection.connect();

const sql = 'INSERT INTO your_table (column1, column2) VALUES (?, ?)';
const values = [
  ['value1', 'value2'],
  ['value3', 'value4'],
  ['value5', 'value6']
];

connection.query(sql, values, (err, result) => {
  if (err) throw err;
  console.log('Multiple records inserted');
});

connection.end();