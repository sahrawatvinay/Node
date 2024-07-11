const fs = require("fs");

//create a file and write data into it
fs.writeFile(
  "example.txt", //name of file
  "This is example text in example.txt file", //file content
  (err) => {
    //callback if anything goes wrong
    if (err) console.log(err);
    else console.log("File created successfully");
  }
);

fs.readFile("example.txt", "utf8", (err, file) => {
  if (err) console.log(err);
  else console.log(file);
});
