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

router.delete('/api/delete-materias/:materia', (req, res) => {
  const sql = 'DELETE FROM materias WHERE materia = ?';

  db.run(sql, [req.params.materia], (err) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send({ message: 'Materia successfully deleted' });
  });
});

module.exports = router;