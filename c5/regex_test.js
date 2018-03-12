// var re1 = '/users'; // /\/users/
// var re2 = '/users/{num}'; // /\/users\/[0-9]+/
// var re3 = '/users/{num}/firstname'; // /\/users\/[0-9]+\/firstname/

// var re11 = re1.replace(/users/i, "/\/users/");

// console.log('/' + re1.replace(new RegExp('/', 'g', "\\/") + '/'));
// console.log('/' + re2.replace('{num}', '[0-9]+').replace(new RegExp('/', 'g'), "\\/" + '/'));


// var str1 = 'Hello regex';

// str1 = str1.replace('regex', 'World');
// console.log(str1);

// var str2 = 'Hello regex regex';

// str2 = str2.replace('regex', 'World');
// console.log(str2);

// var str3 = 'Hello regex regex';
// var search = new RegExp('regex', 'g')
// str3 = str3.replace(search, 'World');
// console.log(str1);

// var str4 = 'Hello regex regex';
// str4 - str4.replace(/regex/g, 'World');
// console.log(str4);

// var re1 = '/users'; // /\/users/
// re1 = re1.replace('/', '/\/');
// console.log(re1);

var re2 = '/users/{num}'; // /\/users\/[0-9]+/
re2 = '/' + re2.replace(new RegExp('/', 'g'), '\\/').replace(new RegExp('{num}', 'g'), '[0-9]+') + '/';
console.log(re2);

function urlToRegex(url){
    return '/' + url.replace(new RegExp('/', 'g'), '\\/').replace(new RegExp('{num}', 'g'), '[0-9]+' + '/')
}