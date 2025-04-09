const register = (req, res) => {
  return res.status(201).json({ msg: "User Registered Successfully" });
};

const login = (req, res) => {
  return res.status(201).json({ msg: "User Logged in" });
};

module.exports = { register, login };
