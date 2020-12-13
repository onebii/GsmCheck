var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/main', function(req, res, next) {
  res.render('main');
});

router.get('/list', function(req, res){
  res.render('list');
});

router.get('/login', function(req, res){
  res.render('login');
});

router.get('/register', function(req, res){
  res.render('register');
});

module.exports = router;