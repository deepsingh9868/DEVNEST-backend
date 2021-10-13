var express = require("express");
var router = express.Router();
var registerInitialCheck = require("../middlewares/registerChecks");
var check = require("../middlewares/checkSuperAdmin");
var { register, registerSuperAdmin } = require("../controllers/register");

/* GET home page. */
//store redis value
router.get("/", function (req, res, next) {
  const sess = req.session;
  sess.username = req.query.name;
  res.render("index", { title: "Express" });
});
//get redis value
router.get("/test", function (req, res, next) {
  console.log("Redis value", req.session.username);
  res.render("index", { title: "Express" });
});

router.post("/register", registerInitialCheck, register);
router.post("/register-super-admin", registerInitialCheck, registerSuperAdmin);
router.get("/super", check);

module.exports = router;
