var express = require('express');
const Checks =require('../middlewares/Checks');
const {Register, RegisterAdmin} = require('../controllers/Register')
var router = express.Router();
var check = require("../middlewares/CheckAdmin");
/* GET home page. */


router.get('/', function(req, res, next) {
  const sess = req.session;
  sess.username = 'deepak';
  res.render('index', { title: 'Express' });
});



router.get('/test', function(req, res, next) {
  console.log('Redis value', req.session.username);
  res.render('index', { title: 'Express' });
});


/**
 * @description
 * 1) register user with username, email, password, confirmpassword
 * 2) check email and password is valid
 * @database
 * 1) check if username and email already exits
 * 2) 
 */

router.post('/register', Checks, Register);
router.post('/register-admin', Checks, RegisterAdmin);
router.get('/admin', check);

module.exports = router;
