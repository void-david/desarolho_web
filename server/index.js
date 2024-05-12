// index.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

const cors = require('cors');
const aulumnoApi = require('./api/alumnos');

// Import the db module
const db = require('./db');

app.use(cors());
app.use(bodyParser.json());
app.use(aulumnoApi);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});