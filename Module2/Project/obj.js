let ext={
    video:[".mp4"],
    image:[".jpg",".png",".gif"],
    audio:[".mp3"],
    document:[".pdf",".xls"],
    software:[".exe",".apk"]
}
function simple(exten){
    for(key in ext){
        let arr=ext[key];
        for(let i=0;i<ext[key].length;i++){
            if(arr[i]==exten)
            return key;
        }
    }
}

console.log(simple(".xls"));

