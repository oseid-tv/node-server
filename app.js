const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/profile/:name', (req, res) => {
  const data = {
    age: 30,
    job: 'developer',
    friends: ['sarah', 'jane', 'willma'],
  };
  res.render('profile', { person: req.params.name, data });
});

app.listen(3000);
