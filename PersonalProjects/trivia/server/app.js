const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../app')));

app.listen(PORT, (err) => {
  if (err) { console.log('There was an error connecting to the server: ', err); }
  else { console.log('Successfully connected to server on PORT: ', PORT); }
});

module.exports = app;