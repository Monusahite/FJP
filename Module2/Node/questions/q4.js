// read content of unorgainsed 
// folder and make  an array which has extension name of each file

let fs =require("fs");
let path=require("path");

let extfile=path.join(__dirname,"../unorgainsed");

let content=fs.readdirSync(extfile);
// console.log(content);
for(let i=0;i<content.length;i++){
    let name=path.join(extfile,content[i])
    let extName=path.extname(name);
    console.log(extName);
}