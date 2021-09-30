var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
// var express = require('express');
// var router = express.Router();

// // use postgres without sequelize 
// const Pool = require('pg').Pool;

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'postgres',
//   password: '123456789',
//   port: 5432
// })

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   pool.query('SELECT * FROM "Users" ', (err,result)=>{
//     if(err){
//       throw err;
//     }
//     res.status(200).json(result);
//   })
// });

// module.exports = router;
