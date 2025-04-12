const { CustomAPIError } = require("../errors");

const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({ msg: "Something Went Wrong" });
};

module.exports = errorHandlerMiddleware;
