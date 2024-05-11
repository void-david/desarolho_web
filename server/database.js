const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/sample.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the sample.db database.');
});

module.exports = db;