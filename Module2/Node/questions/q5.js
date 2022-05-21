//move a file
let fs= require("fs");
let path=require("path");

let filePath=path.join(__dirname,"newDir","file1.txt");
let movePath=path.join(__dirname,"../../","HTML","move.txt");
console.log(filePath);
console.log(movePath);

fs.writeFileSync(filePath,"Hello i have moved again");
fs.copyFileSync(filePath,movePath);
fs.unlinkSync(filePath);