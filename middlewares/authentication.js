require("dotenv").config();
const jwt = require("jsonwebtoken");
const { Unauthenticated } = require("../errors");

const authenticationMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization || {};
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Unauthenticated("Not Authenticated");
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    throw new Unauthenticated("Not Authorized");
  }
};

module.exports = authenticationMiddleware;
