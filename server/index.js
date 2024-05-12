const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3001;

// Connect to the SQLite database
let db = new sqlite3.Database('./db.sqlite', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

app.use(bodyParser.json());

app.post('/add-alumno', (req, res) => {
  const sql = 'INSERT INTO test_table (alumnos, grado) VALUES (?, ?)';
  const values = [req.body.alumnos, req.body.grado];

  db.run(sql, values, (err) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send('Data inserted into database.');
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
});