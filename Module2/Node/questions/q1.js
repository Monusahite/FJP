//make a folder inside same directory of this file 
// and in that folder make a text file with content

let fs=require("fs");
// console.log(__dirname);
// fs.mkdirSync("H");
if(!fs.existsSync("newDir"))
fs.mkdirSync("newDir");

let path = require("path");

let newFile= path.join(__dirname,"newDir","file1.txt");

fs.writeFileSync(newFile,"Hello");
