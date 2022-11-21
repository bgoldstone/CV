const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
// app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
  // res.send("Hello, world!");
});
app.post("/", (req, res) => {
  let body = req.body;
  let sum = Number(body.number1) + Number(body.number2);
  res.send(`${body.number1} + ${body.number2} = ${sum}`);
});
app.get("/calc", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "calc.html"));
  // res.send("Hello, world!");
});
app.post("/calc", (req, res) => {
  let body = req.body;
  let bmi = (703 * Number(body.number1)) / Math.pow(Number(body.number2), 2);
  res.send(`Your BMI is ${bmi}`);
});

app.listen(port, () => console.log(`Express running on localhost:${port}!`));
