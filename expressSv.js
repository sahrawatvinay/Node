const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("inside get route");
  res.send("GG express");
});

app.get("/users", (req, res) => {
  res.send("Users List");
});

app.get("/users.new", (req, res) => {
  res.send("User New Form");
});

app.listen(8000, () => {
  console.log(`Listening to server at port ${8000}`);
});
