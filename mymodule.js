let fs=require('fs');
const path=require('path');
module.exports=function(buf,extension,callback){
    fs.readdir(buf,function(err,list){
        if(err){
             return callback(err);}
          list=list.filter(function (file){
          return path.extname(file)==='.'+extension
        })
        callback(null,list)
    })
}