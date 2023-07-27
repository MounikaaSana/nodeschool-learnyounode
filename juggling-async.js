const http = require('http')
const bl = require('bl')
for(let i=0;i<3;i++){
http.get(process.argv[2+i], function (response) {
  response.pipe(bl(function (err, d) {
    if (err) {
      throw err;
    }
    d= d.toString();
    console.log(d);
  }))
})
}