const express = require("express");
const https = require("https");
const path = require("path");
const bodyParser = require("body-parser");
// const helmet = require("helmet");
const app = express();
const apiKey = "a485b27267f7e7fdfbd7e9ea1a7be717";
const units = "imperial";

const port = 3000;
// app.use(helmet)
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => {
  console.log("Server listening on port " + port);
});
app.get("/", (req, res) => {
  res.send("Server is up and running");
  let temp;
  let lat = "5";
  let lon = "5";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
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
  const city = req.body.city;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      const temp = data.main.temp;
      const weatherDescription = data.weather[0].description;
      const icon = data.weather[0].icon;
      res.write(`<h1>The weather in ${city} is ${temp} Fahrenheit</h1>`);
      res.write(`<h2>The weather is currently ${weatherDescription}</h2>`);
      res.write(`<img src="http://openweathermap.org/img/wn/${icon}.png">`);
      res.send();
    });
});
