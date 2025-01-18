const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  console.log(req.query);
  res.render('about', { qs: req.query });
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
