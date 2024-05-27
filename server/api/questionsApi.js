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
  const { quest_ID, test_ID, description, answer_1, answer_2, answer_3, answer_4, answer_correct } = req.body;

  const sql = `INSERT INTO Questions (quest_ID, test_ID, description, answer_1, answer_2, answer_3, answer_4, answer_correct) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  db.run(sql, [quest_ID, test_ID, description, answer_1, answer_2, answer_3, answer_4, answer_correct], function(err) {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send({ message: 'Question successfully added', lastID: this.lastID });
  });
});

// Update question
router.put('/api/update-questions/:id', (req, res) => {
  const { quest_ID, test_ID, description, answer_1, answer_2, answer_3, answer_4, answer_correct } = req.body;
  const sql = `UPDATE Questions SET quest_ID = ?, test_ID = ?, description = ?, answer_1 = ?, answer_2 = ?, answer_3 = ?, answer_4 = ?, answer_correct = ? WHERE quest_ID = ?`;

  db.run(sql, [quest_ID, test_ID, description, answer_1, answer_2, answer_3, answer_4, answer_correct, req.params.id], function(err) {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send({ message: 'Question successfully updated' });
  });
});

// Delete question
router.delete('/api/delete-questions/:id', (req, res) => {
  const sql = 'DELETE FROM Questions WHERE quest_ID = ?';

  db.run(sql, req.params.id, function(err) {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send({ message: 'Question successfully deleted' });
  });
});

module.exports = router;