const tutorial = require("./tutorial");
console.log(tutorial);
const express = require("express");
const app = express();

// "/" is the route
app.get("/", (req, res) => {
  res.send("Hello Express Server");
});

app.listen(6900);
