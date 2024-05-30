// index.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const app = express();
const port = 3001;

const cors = require('cors');

// Import the db module
const db = require('./db');

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(require('./api/questionsApi'));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});