const notFoundMiddleware = (req, res, next) => {
  return res.status(404).json({ msg: "This route doesn't exists" });
};

module.exports = notFoundMiddleware;
