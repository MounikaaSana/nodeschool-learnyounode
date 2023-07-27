const fs=require("fs");
const path=require("path");
let buf=process.argv[2];
let extension="."+process.argv[3];
fs.readdir(buf,function callback(err,list){
    if(err) throw err;
      list.forEach(function(file){
       if(path.extname(file)==extension){
       console.log(file)
      }
    })
})