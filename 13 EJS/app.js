const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
// app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "./public/")));
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
app.get("/", (req, res) => {
  res.send(`Today is ${days[new Date().getDay()]}`);
});
app.listen(PORT, () =>
  console.log(`Server listening on  http://localhost:${PORT}`)
);
