const mysql = require('mysql2');

const dbTestFoodApp = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'ALOK',
  database: 'test_food_app',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = { dbTestFoodApp };
