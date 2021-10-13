const { validateEmail, validatePassword } = require("../utils/validator");

const registerInitialChecks = (req, res, next) => {
  const { email, password, confirmPassword } = req.body;
  console.log(email, password, confirmPassword);
  if (
    typeof email === "string" &&
    typeof password === "string" &&
    typeof confirmPassword === "string" &&
    email.length > 0 &&
    password.length > 6 &&
    confirmPassword === password &&
    validateEmail(email) &&
    validatePassword(password)
  )
    next();
  else res.status(401).send("Initial Checks Failed!!");
};

module.exports = registerInitialChecks;
