

const mysql = require('mysql2');

// Connect to databas
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Harsel12.',
      database: 'elections'
    },
    console.log('Connected to the election database.')
  );






  module.exports = db;