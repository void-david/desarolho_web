const sql = require('mssql');
const config = {
  user: 'admin123',
  password: 'Fernandot123',
  server: 'desarrollosoftware1.database.windows.net',
  database: 'quizGame',
  options: {
    trustedConnection: true
  }
};

function loadDatabase() {
  sql.connect(config).then(pool => {
    console.log('Connected to MSSQL');
    return pool;
  }).catch(err => {
    console.log('Database connection failed. Error in configuration: ', err);
  });
}

module.exports = { sql, loadDatabase };