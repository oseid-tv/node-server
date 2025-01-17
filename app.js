const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html');
});

app.get('/profile/:name', (req, res) => {
  const data = { age: 30, job: 'developer' };
  res.render('profile', { person: req.params.name, data });
});

app.listen(3000);
