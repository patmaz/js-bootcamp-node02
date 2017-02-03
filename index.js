var fs = require('fs');
var http = require('http');
var server = http.createServer();

server.on('request', function(req, res){
    if(req.method === 'GET' && req.url === '/') {
        fs.readFile('./assets/index.html', function(err, data){
            res.writeHead(200, {
                "Content-Type": "text/html; charset=utf-8"
            });
            res.write(data);
            res.end();
        });
    } else {
        fs.readFile('./assets/404.gif', function(err, data){
            res.writeHead(200, {
                "Content-Type": "image/gif"
            });
            res.write(data);
            res.end();
        });
    }
});

server.listen(9000);