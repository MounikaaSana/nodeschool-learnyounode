const net = require('net');
function date(i) {
  const b=(i < 10 ? '0' : '') + i
  return b
}

function now () {
  const d = new Date()
  const c=d.getFullYear() +'-'+
    date(d.getMonth() + 1) +'-'+
    date(d.getDate()) +' '+
    date(d.getHours()) +':'+
    date(d.getMinutes())
    return c
}

const server = net.createServer(function (socket) {
  socket.end(now() + "\n")
})

server.listen(Number(process.argv[2]))