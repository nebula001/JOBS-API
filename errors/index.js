const CustomAPIError = require("./custom-api");
const BadRequest = require("./badrequest");
const Unauthenticated = require("./unauthenticated");
const NotFound = require("./not-found");

module.exports = { CustomAPIError, BadRequest, Unauthenticated, NotFound };
