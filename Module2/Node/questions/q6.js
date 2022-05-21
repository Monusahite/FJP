//read content of unorganised folder and print each file type
//for example abc.mp3 --> print Audio File
//            xyz.mp4 --> print Video File
//            fsd.jpeg -> print Image File

let fs = require("fs");
let path= require("path");

let filePath=path.join(__dirname,"../","unorgainsed");
let content= fs.readdirSync(filePath);
console.log(content);

let ext=[".pdf",".jpg",".txt",".mp3",".exe",".mp4",".apk"]
let extStr=[ "pdf file","Image file","text file","music file","code file","video file","Application file"];
for(let i=0;i<content.length;i++){
     for(let j=0;j<ext.length;j++){
         filePath=path.join(filePath,content[i])
         if(path.extname(filePath)==ext[j])
         console.log(extStr[j]);
     }
}