require("dotenv").config();
const User = require("../models/User");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = await User.create({ name, email, password });
  const token = newUser.getJWT();
  return res.status(201).json({ user: { name: newUser.name }, token });
};

const login = async (req, res) => {
  return res.status(201).json({ msg: "User Logged in" });
};

module.exports = { register, login };
