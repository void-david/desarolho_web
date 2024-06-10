const express = require('express');
const router = express.Router();
const db = require('../db'); // adjust the path according to your project structure

router.get('/api/get-alumnos', (req, res) => {
    const sql = 'SELECT nombre FROM Alumnos';
  
    db.all(sql, [], (err, rows) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.send(rows);
    });
  });

router.post('/api/crear-alumno', (req, res) => {
    const {clase, alumno} = req.body;
    
    const sql = `INSERT INTO Alumnos (clase, alumno) VALUES (?, ?)`;
    
    db.run(sql, [clase, alumno], function(err) {
        if (err) {
        return res.status(500).send(err.message);
        }
        res.send({ message: 'Alumno successfully added', lastID: this.lastID });
    });
});

module.exports = router;