const e = require("express");

const check = (req, res) => {
  if (req.session.User.role === "super-admin")
    res.status(201).send("Successful");
  else {
    res.status(401).send("Needs to be Super Admin");
  }
};

module.exports = check;
