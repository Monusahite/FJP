let fs=require("fs");

// fs.rmdirSync("MyOwn");
if(!fs.existsSync("K"))
fs.mkdirSync("K")
fs.rmdirSync("K");