const express = require("express");
const app = express();
app.use(logger);
const routes = require("./routes");

app.use("/", routes);

app.get("/", (req, res) => {
  console.log("inside get route");
  res.send("GG express");
});

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(8000, () => {
  console.log(`Listening to server at port ${8000}`);
});
