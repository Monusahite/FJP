// Q. copy index.html file from module1 to a new folder inside module2 having name html.
let fs= require("fs");
let path= require("path");

// let sourcePath=path.join(__dirname,"../")

let filePath=path.join(__dirname,"../../../")
filePath=path.join(filePath,"Module1","index.html");

let destination=path.join(__dirname,"../../","HTML");

if(!fs.existsSync(destination))
fs.mkdirSync(destination)

destination=path.join(destination,"copy.html");
fs.writeFileSync(destination,"");

console.log(filePath);
console.log(destination);

fs.copyFileSync(filePath,destination);