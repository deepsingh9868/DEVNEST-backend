const { emailValidate, passwordValidate } = require("../utils/validate");

/**
 * level 1
email validate 
password validate
pass==conf pass
 */

const registerInitialCheck = (req, res, next) => {
  const { email, password, confirmPassword } = req.body;

  if (
    typeof email === "string" &&
    typeof password === "string" &&
    typeof confirmPassword === "string" &&
    email.length > 0 &&
    password.length > 8 &&
    confirmPassword === password &&
    emailValidate(email) &&
    passwordValidate(password)
  ) {
    next();
  } else {
    res.status(401).send("Inital check fails");
  }
};

module.exports = registerInitialCheck;
