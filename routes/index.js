const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("../models/User");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send("heyyyy");
});

router.post("/add", (req, res) => {
  console.log(req.body);
  let user = req.body;
  user = new User(user);
  user.save((err, doc) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("User successfully added to the DB.");
    }
  });
});

const transporter = nodemailer.createTransport({
  debug: true,
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

transporter.verify((error, success) => {
  if (error) {
    console.log("Server is broken fam" + error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post("/send", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");

  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const content = `name: ${name} \n email: ${email} \n message: ${message}`;

  const mail = {
    from: name,
    to: process.env.SMTP_USER,
    subject: "New Message from Contact Form",
    text: content
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log("Message failed to send!");
      res.status(400);
    } else {
      res.status(200).send("Message successfully sent!");
    }
  });
});

router.post("/admin", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");

  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const content = `name: ${name} \n email: ${email} \n message: ${message}`;

  const mailToSender = {
    from: "Joseph Bannerman",
    to: email,
    subject: "Thanks for reaching out!",
    text: content
  };

  transporter.sendMail(mailToSender, (err, data) => {
    if (err) {
      console.log("Message failed to send!");
      res.status(400);
    } else {
      console.log("Message successfully sent!");
      res.status(200);
    }
  });
});

module.exports = router;
