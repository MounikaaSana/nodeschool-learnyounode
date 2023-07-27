const http = require('http')
const bl = require('bl')
http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, d) {
    if (err) {
      throw err;
    }
    d= d.toString();
    console.log(d.length);
    console.log(d);
   
  }))
})