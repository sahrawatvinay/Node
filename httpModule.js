//create server with node.js
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") res.write("Hello from node.js");
  else res.write("Using some other domain");
  res.end();
});
server.listen("3000");
