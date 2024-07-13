const exp = require("constants");
const tutorial = require("./tutorial");
console.log(tutorial);

const express = require("express");
const path = require("path");
const app = express();

// /public is alias for static folder name just to increase security
app.use("/public", express.static(path.join(__dirname, "static")));

// "/" is the route
app.get("/", (req, res) => {
  //res.send("Hello Express Server");
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.get("/example", (req, res) => {
  res.send("Hitting example route");
});

app.get("/example/:name/:age", (req, res) => {
  console.log(req.params); //localhost:6900/example/vinay/28 //use when data is needed for sure
  console.log(req.query); //localhost:6900/example/vinay/28?city=brampton&pin=12345 //used when something can be optional
  res.send("example with route params");
});

app.listen(6900);
