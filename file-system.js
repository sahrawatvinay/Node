const fs = require("fs");

//asynchronous file read
fs.readFile("static/example.txt", "utf8", (err, data) => {
    if (err) console.log("error :", err);
    else console.log("File Content --- > ", data);
});

// Asynchronous file write
// The writeFile method writes the string 'Hello, world!' to example.txt. If the file does not exist, it is created; if it exists, its contents are overwritten.
fs.writeFile("static/example.txt", 'Hello, world!', (err) => {
    if (err) console.log("error :", err);
    else console.log('File written successfully');
});

// Asynchronous file append
fs.appendFile("static/example.txt", '\nAppended text', (err) => {
    if (err) console.log("error :", err);
    else console.log('Text appended successfully');
});

// Asynchronous file delete
fs.unlink("static/example.txt", (err) => {
    if (err) console.log("error :", err);
    else console.log('File deleted successfully');
});

// Asynchronous file rename
fs.rename("static/example.txt", 'newname.txt', (err) => {
    if (err) console.log("error :", err);
    else console.log('File renamed successfully');
});
