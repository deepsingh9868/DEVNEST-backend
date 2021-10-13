const User = require("../models/user");

const bcrypt = require("bcrypt");
/**
 * 
 * @param {*} req 
 * @param {*} res
 * level 3 
(controllers - actual logic)
if email already exist
pass hash (if leak) //using any hashing lib (bcrypt)
email case insensitive (lowercas) 
 */
const saltRounds = 10;
const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const alreadyExists = await User.findOne({ where: { email } });
    if (alreadyExists) {
      res.status(401).send("Email already exists");
    } else {
      //hash which line to use (what exactly it is)
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(password, salt);

      const newUser = new User({
        email: email.toLowerCase(),
        password: hash,
        fullName: "goblin",
      });
      const savedUser = await newUser.save();
      res.status(201).send(savedUser);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("something went wrong");
  }
};

const registerSuperAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const alreadyExists = await User.findOne({ where: { email } });
    if (alreadyExists) {
      res.status(401).send("Email already exists");
    } else {
      //hash which line to use (what exactly it is)
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(password, salt);

      const newUser = new User({
        email: email.toLowerCase(),
        password: hash,
        fullName: "goblin",
        role: "Super-admin",
      });
      const savedUser = await newUser.save();
      req.session.User = savedUser;
      res.status(201).send(savedUser);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("something went wrong");
  }
};

module.exports = { register, registerSuperAdmin };
