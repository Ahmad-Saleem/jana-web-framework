const express = require('express');
const router = express.Router();

// define the home page route
router.get('/', function (req, res, next) {
  res.render('index', {
    locals: {
    title: 'Jana Framework',
    body: 'Hi Jana, Express Framework ..'
  }
  });
  //res.send("Jana Framework .. First STEP ")
  //next();
})
// define the about route
router.get('/about', function (req, res, next) {
  res.send('Ahmad Saleem')
  next()
})

module.exports = router;
