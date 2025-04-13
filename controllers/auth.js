require("dotenv").config();
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
  const { name, email, password } = req.body || {};
  const newUser = await User.create({ name, email, password });
  const token = newUser.getJWT();
  return res
    .status(StatusCodes.CREATED)
    .json({ user: { name: newUser.name }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Please provide email id and password both" });
  }
  const user = await User.findOne({ email });

  if (!user) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: `No user with email id ${email} exists` });
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: "Invalid credentials" });
  }
  const token = user.getJWT();
  return res
    .status(StatusCodes.CREATED)
    .json({ user: { name: user.name }, token });
};

module.exports = { register, login };
