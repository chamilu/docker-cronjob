const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/api/get-users", (req, res) => {
  console.log("calling get-users");
  res.send({ name: "chamil" });
});

app.listen(3000, () => {
  console.log("server started...");
});
