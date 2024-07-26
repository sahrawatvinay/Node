const cfg = require("dotenv").config();
const fs = require("fs");
console.log(cfg);
console.log(process.env.HOSTNAME);
console.log(process.env.PORT);
console.log(process.env.user);

const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url);
  let path = "./static/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/home":
      path += "home.html";
      res.statusCode = 200;
      break;
    default:
      //   path += "404.html";
      //   res.statusCode = 404;
      //if we want to redirect it to index page
      res.setHeader("Location", "/");
      res.statusCode = 301;
      break;
  }

  // simple text message
  //   res.setHeader("Content-Type", "text/plain");
  //   res.end("GG process env server woooooo nodemon");

  res.setHeader("Content-Type", "text/html");
  //reading html file and sending html file as result
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else res.end(data);
  });
});

server.listen(process.env.PORT, () => {
  console.log(
    `server is running at woooo https://${process.env.HOSTNAME} : ${process.env.PORT}`
  );
});
