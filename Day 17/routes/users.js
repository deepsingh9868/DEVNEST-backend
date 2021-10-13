var express = require("express");
const { Pool } = require("pg");
const sequelize = require("../database");
var router = express.Router();

/* GET users listing. */
const pool = new Pool({
  user: "postgres",
  host: "postgres",
  database: "postgres",
  password: "123456",
  passwordport: 5432,
});
router.get("/", function (req, res, next) {
  pool.query('SELECT * FROM "Users"', (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json(result);
  });
});

router.get("/clearDB", async (req, res) => {
  try {
    await sequelize.truncate({ cascade: true });
    res.status(200).send("Truncated");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error");
  }
});

module.exports = router;
