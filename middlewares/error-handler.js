const errorHandlerMiddleware = (err, req, res, next) => {
  return res.status(500).json({ msg: "Something Went Wrong" });
};

module.exports = errorHandlerMiddleware;
