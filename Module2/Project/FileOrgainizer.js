
let input=process.argv;
let folderPath=input[2];

let fs = require("fs");
let path = require("path");
let files=fs.readdirSync(folderPath);

let orgainized=path.join(__dirname,"Orgainized");

let ext={
    video:[".mp4"],
    image:[".jpg",".png",".gif"],
    audio:[".mp3"],
    document:[".pdf",".xls"],
    software:[".exe",".apk"]
}
if(!fs.existsSync(orgainized))
fs.mkdirSync(orgainized);

if(fs.existsSync(folderPath)){
    
    for(let i=0;i<files.length;i++){
        let extName=path.extname(files[i]);
          let keyFolder=giveFolderName(extName);
          
          let folder=path.join(orgainized,keyFolder);
            if(!fs.existsSync(folder))
            fs.mkdirSync(folder);

            

    }    
}
else{
    console.log("Not a valid path");
}

function giveFolderName( extension){
    for(key in ext){
        let arr=ext[key];
        for(let j=0;j<ext[key].length;j++){
            if(extension==arr[j]){
                return key;
            }
        }
    }
}