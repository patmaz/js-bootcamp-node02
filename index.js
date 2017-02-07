var fs = require('fs');
var http = require('http');
var server = http.createServer();

server.on('request', function(req, res){
    if(req.method === 'GET' && req.url === '/') {
        try {
            fs.readFile('./assets/index.html', function(err, data){
                if (err) throw err;
                res.writeHead(200, {
                    "Content-Type": "text/html; charset=utf-8"
                });
                res.write(data);
                res.end();
            });
        } catch(err) {
            console.error(err);
        }
    } else {
        try {
            fs.readFile('./assets/404.gif', function(err, data){
                if (err) throw err;
                res.writeHead(404, {
                    "Content-Type": "image/gif"
                });
                res.write(data);
                res.end();
            });
        } catch(err) {
            console.error(err);
        }
    }
});

server.listen(9000);