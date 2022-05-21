//Q. given an array arr=[audio,video,image,software,documents,applications,other]
//   make folder for each element in the given array and inside each folder make 4 files of that type

let fs =require("fs");
let arr=["audio","video","images","software","document","application","other"];

   if(!fs.existsSync("MultiMedia"))
   fs.mkdirSync("MultiMedia");

   let path= require("path")
   let Ext=[".mp3",".mp4",".jpg",".exe",".pdf",".apk",".txt"];
for(let i=0;i<arr.length;i++){
    let Media=path.join(__dirname,"MultiMedia",arr[i]);
   if(!fs.existsSync(Media))
    fs.mkdirSync(Media);

      let filePath1=path.join(Media,"file1"+Ext[i]);
      fs.writeFileSync(filePath1,"");
      let filePath2=path.join(Media,"file2"+Ext[i]);
      fs.writeFileSync(filePath2,"");
      let filePath3=path.join(Media,"file3"+Ext[i]);
      fs.writeFileSync(filePath3,"");
      let filePath4=path.join(Media,"file4"+Ext[i]);
      fs.writeFileSync(filePath4,"");
}