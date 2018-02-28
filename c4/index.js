var fs = require('fs');
var http = require('http');

http.createServer(function (request, response) {
    var filepath = '.' + request.url + '.json';
    console.log(filepath);

    fs.exists(filepath, (e) => {
        if(e){
            fs.readFile(filepath, (err, data) =>{
                if(!err){
                    response.writeHead(200, 'OK');
                    response.end(data + '\n');
                }
            })
        }else{
            response.writeHead(404, 'NOT FOUND');
            response.end('The URL you requested does not exist...');
        }
    })
}).listen(3000);