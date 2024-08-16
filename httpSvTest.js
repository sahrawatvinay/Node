// const http = require("http");
// const app = http.createServer((req, res) => {
//     const path = req.url;
//     if(path == "/"){
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('Welcome to the home page!');
//     }
//     else if(path == "/hell"){
//         res.statusCode = 200;
//         res.setHeader = ('Content-type', 'application/json');
//         var data = {
//             name : "Vinay",
//             age : 28
//         }
//         res.end(JSON.stringify(data));
//     }
// });
// app.listen(1111, () => {
//     console.log(`Listening server at 1111 poprt`);
// });

const express = require("express");
const app = express();
const logger = (req, res, next) => {
    console.log("LOGGEGGGEGGRGE");
    next();
};
app.use(logger);
app.get("/", (req, res) => {
    res.send('This is plain text content');
});
app.get("/hell", (req, res) => {
    var data = {
        name : "vinay",
        age: 28,
        gender: "Male"
    };
    res.send(JSON.stringify(data));
});
const port = 6969;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});