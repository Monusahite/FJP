let path=require("path");
console.log(path);

let extName=path.extname("/home/monu/Desktop/FJP/Module2/Node/test.js");
console.log(extName);

let baseName=path.basename("/home/monu/Desktop/FJP/Module2/Node/test.js");
console.log(baseName);

console.log(path.basename(__filename));
console.log(path.basename(__dirname));
console.log(__dirname);
console.log(__filename);

// path Join
let newPath=path.join(__dirname,"test1.js");
console.log(newPath);