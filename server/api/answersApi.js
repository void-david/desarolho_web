const express = require('express');
const router = express.Router();
const db = require('../db'); // adjust the path according to your project structure

router.post('/api/post-answers', (req, res) => {
    const {numCorrect, numIncorrect} = req.body;
    
    const sql = `INSERT INTO Answers (userId, numCorrect, numIncorrect) VALUES (?, ?, ?)`;
    
    db.run(sql, [1, numCorrect, numIncorrect], function(err) {
        if (err) {
        return res.status(500).send(err.message);
        }
        res.send({ message: 'Answer successfully added', lastID: this.lastID });
    });
});




module.exports = router;