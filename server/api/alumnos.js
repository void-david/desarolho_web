// api/alumnos.js

const express = require('express');
const router = express.Router();
const db = require('../db'); // adjust the path according to your project structure

router.get('/get-alumnos', (req, res) => {
  const sql = 'SELECT * FROM test_table';

  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(rows);
  });
});

router.post('/add-alumno', (req, res) => {
  const sql = 'INSERT INTO test_table (alumnos, grado) VALUES (?, ?)';
  const values = [req.body.alumnos, req.body.grado];

  db.run(sql, values, (err) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send('Data inserted into database.');
  });
});

module.exports = router;