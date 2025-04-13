const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || "Something Went Wrong",
  };
  if (err.code && err.code === 11000) {
    customError.message = `Duplicate Value entered for ${Object.keys(
      err.keyValue
    )} field, please choose another value`;
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }
  if (err.name === "ValidationError") {
    customError.statusCode = StatusCodes.BAD_REQUEST;
    customError.message = Object.values(err.errors)
      .map((item) => item.message)
      .join(", ");
  }
  if (err.name === "CastError") {
    customError.statusCode = StatusCodes.NOT_FOUND;
    customError.message = `No item found with id ${err.value}`;
  }
  return res.status(customError.statusCode).json({ msg: customError.message });
};

module.exports = errorHandlerMiddleware;
