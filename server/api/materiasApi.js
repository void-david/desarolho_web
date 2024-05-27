const express = require('express');
const router = express.Router();
const db = require('../db'); // adjust the path according to your project structure

router.get('/api/get-materias', (req, res) => {
  const sql = 'SELECT * FROM materias';

  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(rows);
  });
});

module.exports = router;