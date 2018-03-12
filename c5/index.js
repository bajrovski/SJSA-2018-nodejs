var http = require('http');
var controllers = require('./controllers');
var utils = require('./utils');

var routes = {GET: [], POST: [], PATCH: [], PUT: [], DELETE: []};

routes.GET['/users'] = controllers.GetAllUsers;
routes.GET['/users/{num}'] = controllers.GetSingleUser;
routes.POST['/users'] = controllers.AddUser;
routes.DELETE["/users/{num}"] = controllers.DeleteUser;
routes.PUT['/users/{num}'] = controllers.EditUser;
routes.PATCH['/users/{num}/(firstname|lastname|birthdate|password|email)'] = controllers.UpdateUser;

http.createServer(function (req, res) {
    if(req.method == 'OPTIONS'){
        res.setheader('Access-Control-Allow-Origin', '*')
        res.setheader('Access-Control-Allow-Modules', 'GET, PUT, POST, DELETE, PATCH')
        res.setheader('Access-Control-Allow-Headers', 'Content-Type;')
    }
    var error = true;
    for (i in routes[req.method]) {
        var regex = new RegExp(utils.URLToRegex(i));
        if (regex.test(req.url)) {
            if (typeof routes[req.method][i] == 'function') {
                error = false;
                routes[req.method][i](req, res);
            } else {
                res.writeHead(500, 'Internal Server Error');
                res.end('');
            }
            break;
        }
    }
    if (error) {
        res.writeHead(404, 'Not Found');
        res.end('Not Found');
    }
}).listen(3000);