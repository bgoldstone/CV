const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "./public/")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./signup.html"));
});

app.listen(port, () => {
  console.log("App listening on port " + port);
});
