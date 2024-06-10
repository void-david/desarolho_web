const express = require('express');
const router = express.Router();
const db = require('../db'); // adjust the path according to your project structure

router.post('/api/post-answers', (req, res) => {
    const {certainty, numCorrect, numIncorrect, score} = req.body;
    
    const sql = `INSERT INTO Answers (certainty, numCorrect, numIncorrect, score) VALUES (?, ?, ?, ?)`;
    
    db.run(sql, [certainty, numCorrect, numIncorrect, score], function(err) {
        if (err) {
        return res.status(500).send(err.message);
        }
        res.send({ message: 'Answer successfully added', lastID: this.lastID });
    });
});




module.exports = router;