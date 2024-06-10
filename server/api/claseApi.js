const express = require('express');
const router = express.Router();
const db = require('../db'); // adjust the path according to your project structure\


router.get('/api/get-clases', (req, res) => {
    const sql = 'SELECT * FROM Clases';
  
    db.all(sql, [], (err, rows) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.send(rows);
    });
  });

router.post('/api/crear-clase', (req, res) => {
    const {clase, maestro} = req.body;
    
    const sql = `INSERT INTO Clases (clase, maestro) VALUES (?, ?)`;
    
    db.run(sql, [clase, maestro], function(err) {
        if (err) {
        return res.status(500).send(err.message);
        }
        res.send({ message: 'Class successfully added', lastID: this.lastID });
    });
});
  
//delete last clase
router.delete('/api/delete-last-clase', (req, res) => {
    const sql = 'DELETE FROM Clases WHERE id = (SELECT MAX(id) FROM Clases)';
  
    db.run(sql, [], function(err) {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.send({ message: 'Class successfully deleted', changes: this.changes });
    });
  });

  //delete clase by id

module.exports = router;

