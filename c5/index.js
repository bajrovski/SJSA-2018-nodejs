var http = require('http');

var routes = {GET: [], POST: [], PATCH: [], PUT: [], DELETE: []};

routes.GET['/users'] = function (req, res) {
    req.writeHead(200, 'OK');
    req.end('GET USERS')
};

routes.POST['/users'] = function (req, res) {
    req.writeHead(200, 'OK');
    req.end('POST USERS')
};


http.createServer(function (req, res){
    // console.log(req.method);
    // console.log(req.url);

    if(typeof routes[req.method][req.url] == 'function'){
        routes[req.method][req.url](req, res);
    }else{
        req.writeHead(404, 'NOT FOUND');
        req.end()
    }

    req.writeHead(200, 'OK');
    req.end('OK')
}).listen(3000);
