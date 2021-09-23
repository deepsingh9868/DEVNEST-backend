var express = require('express');
var registerInitialCheck = require('../middlewares/registerCheck');
var register = require("../controllers/register");



var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/**    
 * ************** @Authentication ****************
 ******************@description*******************

 ***************** @Level1 (make middlewares ) ******************
 * @requirement (username, email , password, confirmpassword); -> req.body
  * Thing to remember
  * @security
  * @performace
  * @edge cases
  * ************** @Level2 *********** (connnecting to database always done in controllers)
 * email validation - ( contains @ , . etc) 
 * password validation (min-6, ,1 number, 1 lowercase, 1 highercase)
 * befware of @sql injection and script
 * check if user already exist
 * password hashing
 * 
 * 
 *  MAKE MIDDLEWARE FOR ALL SEPERATE LEVELS
 */

router.post('/register', registerInitialCheck, register);

module.exports = router;
