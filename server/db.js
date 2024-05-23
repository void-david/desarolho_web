// db.js

const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db.sqlite', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

module.exports = db;