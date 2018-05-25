var http = require('http')

http.createServer(function(req,res){
  res.writeHead(200, { 'Content-Type': 'text/plain'});
  res.end('Hello World');
}).listen(3000)

console.log('Server initiated on local host 3000, pres Crtl-C to terminate')
