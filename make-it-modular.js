const mymodule=require('./mymodule.js')
let buf=process.argv[2];
let extension=process.argv[3];
 mymodule(buf,extension,function(err,list){
    if(err){ throw err;}
      list.forEach(function(file){
       console.log(file)
    })
})