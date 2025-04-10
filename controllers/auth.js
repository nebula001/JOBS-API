require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = await User.create({ name, email, password: hashedPassword });
  const token = jwt.sign(
    { userId: newUser._id, userName: newUser.name },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME }
  );
  return res.status(201).json({ user: { name: newUser.name }, token });
};

const login = async (req, res) => {
  return res.status(201).json({ msg: "User Logged in" });
};

module.exports = { register, login };
