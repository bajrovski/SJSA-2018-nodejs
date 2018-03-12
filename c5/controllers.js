var DATA = [];

var GetAllUsers = function (req, res) {
    res.writeHead(200, 'OK');
    res.end(JSON.stringify(DATA))
};

var GetSingleUser = function (req, res) {

    var url = req.url.split('/')
    var id = parseInt(url[url.length - 1]);

    if (DATA[id] != undefined) {
        res.writeHead(200, 'OK');
        res.end(JSON.stringify(DATA[id]));
    } else {
        res.writeHead(404, 'Not Found');
        res.end('Not Found');
    }

};

var AddUser = function (req, res) {
    var d = '';
    
    req.on('data', function (data) {
        d += data;
    });

    req.on('end', function () {
        DATA.push(JSON.parse(d));
        res.writeHead(200, 'OK');
        res.end('POST USERS');
    });
};

var DeleteUser = function (req, res) {
    var url = req.url.split('/');
    var id = parseInt(url[url.length - 1]);

    if (DATA[id] != undefined) {
        DATA.splice(id, 1);
        res.writeHead(200, "OK");
        res.end("USER DELETED");
    } else {
        res.writeHead(404, 'Not found');
        res.end('Not found')
    }
};

var UpdateUser = function (req, res) {
    res.writeHead(200, 'OK');
    res.end('UPDATE PART OF USER\'S DATA');
}

var EditUser = function (req, res) {
    res.writeHead(200, 'OK');
    res.end('UPDATE USER DATA');
};



module.exports = {GetAllUsers, GetSingleUser, AddUser, DeleteUser, UpdateUser, EditUser};