const { default: axios } = require("axios");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()}: ${req.method} ${req.url}`);
  next();
});

app.get("/api/getAll", async (req, res) => {
  const { tags } = req.query;
  let path =
    "https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1";
  if (tags) {
    path = `${path}&tags=${tags}`;
  }
  const result = await axios.get(path);
  return res.status(200).send(result.data);
});
module.exports = app;
