var express = require("express");
var router = express.Router();
const registerInitialChecks = require("../middlewares/registerChecks");
const { register, registerSuperAdmin } = require("../controllers/register");
const check = require("../middlewares/checkSuperAdmin");

/* GET home page. */
router.get("/", function (req, res, next) {
  const session = req.session;
  session.username = "demo";
  res.render("index", { title: "Express" });
});

router.get("/test", (req, res) => {
  console.log("Redis Client", req.session.username);
  res.render("index", { title: "Express" });
});

router.post("/register", registerInitialChecks, register);
router.post("/register-super-admin", registerInitialChecks, registerSuperAdmin);
router.get("/super", check);

module.exports = router;
