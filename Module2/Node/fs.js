let fs =require("fs");
// console.log(fs);
let path=require("path");
let filePath=path.join(__dirname,"file.txt");
console.log(filePath);

// C -> Create
// it creates a file if does not exist or overrides it
fs.writeFileSync(filePath,"Hello I am text file !");

// R -> Read
let contents=fs.readFileSync(filePath);
console.log(""+contents);

// U->update
fs.appendFileSync(filePath,"\nNewly added contents");
console.log(fs.readFileSync(filePath,'utf-8'));

// D->delete
// fs.unlinkSync(filePath);

// Directory 
// Make directory 
if(!fs.existsSync("MyOwn"))
fs.mkdirSync("MyOwn");

// read directory 
let folderPath=__dirname;
let contentOfFolder=fs.readdirSync(folderPath);
console.log(contentOfFolder);

// Delete a Directory
// fs.rmdirSync("My Own");

// copy a file
let sourcePath=path.join(__dirname,"file.txt");
let destination=path.join(__dirname,"MyOwn","file1.txt");
console.log(sourcePath);
console.log(destination);
fs.copyFileSync(sourcePath,destination);