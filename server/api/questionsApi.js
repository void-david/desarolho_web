const express = require('express');
const router = express.Router();
const db = require('../db'); // adjust the path according to your project structure

router.get('/api/get-questions', (req, res) => {
  const sql = 'SELECT * FROM Questions';

  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(rows);
  });
});

router.post('/api/post-questions', (req, res) => {
  const { description, answer_1, answer_2, answer_3, answer_4, answer_correct, materia } = req.body;

  const sql = `INSERT INTO Questions (description, answer_1, answer_2, answer_3, answer_4, answer_correct, materia) VALUES (?, ?, ?, ?, ?, ?, ?)`;

  db.run(sql, [description, answer_1, answer_2, answer_3, answer_4, answer_correct, materia], function(err) {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send({ message: 'Question successfully added', lastID: this.lastID });
  });
});

module.exports = router;