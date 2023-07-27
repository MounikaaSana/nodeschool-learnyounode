const fs=require('fs');
let buf=fs.readFileSync(process.argv[2]);
let str=buf.toString();
let a=str.split('\n');
console.log(a.length-1);
