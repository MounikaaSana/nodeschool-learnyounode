const fs=require('fs');
let buf=process.argv[2];
fs.readFile(buf,function(err,str){
    if(err) throw err;
    else{
       let b=str.toString();
       let a=b.split('\n');
       console.log(a.length-1);
    }
})
    
