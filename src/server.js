const env = require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const router = require("express").Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "../build"), { index: false }));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "DEV") {
  mongoose.connect(process.env.MONGODB_URI_DEV);
  console.log("Database Successfully connected on Dev!");
} else mongoose.connect(process.env.MONGODB_URI_PROD);

const indexRouter = require("../routes/index");

app.use("/", indexRouter);

app.listen(process.env.SERVER_PORT || 7000, e => {
  console.log(e || "Serving HTTP to port " + process.env.SERVER_PORT || 7000);
});
