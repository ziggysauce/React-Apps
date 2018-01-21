const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');

const app = express();
const PORT = 8000;

app.use(bodyparser.urlencoded({extended: true}));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../app/static/index.html'));
// });

app.use(express.static(path.join(__dirname, '../app')));

app.listen(PORT, (err) => {
  if (err) { console.log('There was an error connecting to the server', err); }
  else { console.log('You have connected to the server on PORT: ', PORT); }
});

module.exports = app;