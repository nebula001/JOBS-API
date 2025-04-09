require("dotenv").config();
const express = require("express");
const authRoute = require("./routes/auth");
const connectDB = require("./db/connect");
const notFoundMiddleware = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

app.use("/api/v1/auth", authRoute);

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
