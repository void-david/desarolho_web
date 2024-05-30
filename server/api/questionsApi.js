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

router.get('/api/get-questions/:materia', (req, res) => {
  const materia = req.params.materia;
  const sql = 'SELECT * FROM Questions WHERE materia = ?';

  db.all(sql, [materia], (err, rows) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(rows);
  });
});

router.get('/api/get-materias', (req, res) => {
  const sql = 'SELECT DISTINCT materia FROM Questions';

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

router.post('/api/update-questions/:id', (req, res) => {
  const { id } = req.params;
  const { description, answer_1, answer_2, answer_3, answer_4, answer_correct, materia } = req.body;

  const sql = `UPDATE Questions SET description = ?, answer_1 = ?, answer_2 = ?, answer_3 = ?, answer_4 = ?, answer_correct = ?, materia = ? WHERE id = ?`;

  db.run(sql, [description, answer_1, answer_2, answer_3, answer_4, answer_correct, materia, id], function(err) {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send({ message: 'Question successfully updated', updatedID: id });
  });
});

router.delete('/api/deleteQuestionById/:id', (req, res) => {
  const { id } = req.params;

  const sql = `DELETE FROM Questions WHERE id = ?`;

  db.run(sql, id, function(err) {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send({ message: 'Question successfully deleted', deletedID: id });
  });
});

module.exports = router;