const User = require("../models/User");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { email, password, fullName } = req.body;
  const saltRounds = 8;
  try {
    const alreadyExists = await User.findOne({ where: { email } });
    if (alreadyExists) {
      res.status(401).send("Email Already Exists");
      return;
    }

    const salt = bcrypt.genSaltSync(saltRounds);
    const passwordHash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      email: email.toLowerCase(),
      password: passwordHash,
      fullName,
    });

    const savedUser = await newUser.save();
    res.status(201).send(savedUser);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Error : Something went wrong");
  }
};

const registerSuperAdmin = async (req, res) => {
  const { email, password, fullName } = req.body;
  const saltRounds = 8;
  try {
    const alreadyExists = await User.findOne({ where: { email } });
    if (alreadyExists) {
      res.status(401).send("Email Already Exists");
      return;
    }

    const salt = bcrypt.genSaltSync(saltRounds);
    const passwordHash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      email: email.toLowerCase(),
      password: passwordHash,
      fullName,
      role: "super-admin",
    });

    const savedUser = await newUser.save();
    req.session.User = savedUser;
    res.status(201).send(savedUser);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Error : Something went wrong");
  }
};

module.exports = { register, registerSuperAdmin };
