const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = 3000;
const app = express();
const items = ["Send Emails", "Buy Milk", "Take the trash out"];
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "./public/")));
let today = new Date();
const options = { weekday: "long", day: "numeric", month: "long" };
app.get("/", (req, res) => {
  res.render("index", {
    day: today.toLocaleDateString("en-US", options),
    items: items,
  });
});
app.post("/", (req, res) => {
  items.push(req.body.newItem);
  res.redirect("/");
});
app.listen(PORT, () =>
  console.log(`Server listening on  http://localhost:${PORT}`)
);
