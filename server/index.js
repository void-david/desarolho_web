// index.js

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const port = 3001;

const cors = require('cors');
const apipi = require('./api/apipi');

// Import the db module
const db = require('./db');

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(apipi);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});