var fs = require('fs');
var http = require('http');

// fs.writeFile("poraka.txt", "NodeJs е најдобар јазик", function (err) {
//     if (err) {
//         return console.log(err);
//     }

//     console.log("The file was saved!");
// }); 


// fs.appendFile('poraka.txt', '\nNodeJs најјако прејакоo\n', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// var obj = JSON.parse(fs.readFileSync('users.json', 'utf8'));

// var users = require('./users.json');
// console.log(users.name + ' ' + users.lastname);

// fs.readFile('users.json', (err, data) => {
//     // console.log(data);
//     var jsonData = JSON.parse(data);

//     jsonData.forEach((user, i) => {
//         console.log("Name: " + user.name + "\t" + 'Lastname: ' + user.lastname + "\t" + "email: " + user.email + "\t" + 'Password: ' + user.password)
//     })
// }); 

// http.createServer(function (request, response) {
//     // console.log(request);
//     response.writeHead(200, 'OK');
//     response.end('Hello World')
// }).listen(3000);


http.createServer(function (request, response) {
    if(request.url === '/hello'){
        response.writeHead(200, 'OK');
        response.end('Hello World!');
    }else{
        response.writeHead(404, 'NOT FOUND');
        response.end('Page Not Found...');
    }
}).listen(3000);


