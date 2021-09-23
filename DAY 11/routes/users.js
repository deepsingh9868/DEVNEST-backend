var express = require('express');
const path = require('path');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req,res,next){
  // res.send('respond woth a resource');
  res.sendFile(path.join(__dirname,'../public/images/Landscape.jpg',));
})


module.exports = router;