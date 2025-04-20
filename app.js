require("dotenv").config();
const express = require("express");

//Security Packages
const xssMiddleware = require("./middlewares/xss-filter");
const helmet = require("helmet");
const cors = require("cors");
const { rateLimit } = require("express-rate-limit");

const swaggerUI = require("swagger-ui-express");
const YAML = require("js-yaml");
const fs = require("fs");

const authRoute = require("./routes/auth");
const jobRoute = require("./routes/jobs");

const connectDB = require("./db/connect");

const notFoundMiddleware = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");
const authenticationMiddleware = require("./middlewares/authentication");

const app = express();
const PORT = process.env.PORT || 5000;
const swaggerDocument = YAML.load(fs.readFileSync("./Swagger.yaml", "utf8"));

app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  message: "Too many requests from this IP, Please try again later",
});

//Use security middlewares
app.set("trust proxy", 1);
app.use(limiter);
app.use(helmet());
app.use(cors());
app.use(xssMiddleware);

app.use(express.static("./public"));

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/jobs", authenticationMiddleware, jobRoute);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Database Connected Successfully");
    app.listen(PORT, () => {
      console.log(`App listening on Port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
