const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const path = require("path");
const app = express();
const https = require("https");
const port = 3000;

app.use(express.static(path.join(__dirname, "./public/")));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./signup.html"));
});

app.post("/", (req, res) => {
  console.log(JSON.stringify(req.body));
  res.redirect("/");
});
app.listen(port, () => {
  console.log("App listening on port " + port);
});
