const express = require("express");
const app = express();

const userRouter = require("./routes/users");
app.use("/users", userRouter); //linking a route into main app, linking route to particular path
const postsRouter = require("./routes/posts");
app.use("/posts", postsRouter);

app.get("/", (req, res) => {
  console.log("inside get route");
  res.send("GG express");
});

app.listen(8000, () => {
  console.log(`Listening to server at port ${8000}`);
});
