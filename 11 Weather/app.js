const express = require("express");
const https = require("https");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => {
  console.log("Server listening on port " + port);
});
app.get("/", (req, res) => {
  res.send("Server is up and running");
  let temp;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${"5"}&lon=${"5"}&appid=${"a485b27267f7e7fdfbd7e9ea1a7be717"}&units=${"imperial"}`;
  https.get(url, (res, req) => {
    res.on("data", (data) => {
      const weatherData = JSON.parse(data);
      temp = weatherData.main.temp;
      console.log(temp);
    });
  });
});
app.get("/weather", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});
app.post("/weather", (req, res) => {
  let city = req.params.city;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"a485b27267f7e7fdfbd7e9ea1a7be717"}&units=${"imperial"}`;
  res.send(
    `<h1>The weather in ${city} is ${fetch(url).then((data) => {
      JSON.parse(data).main.temp;
    })}</h1>`
  );
});
