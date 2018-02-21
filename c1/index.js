// console.log("Hello World");

// var string = "Test test";
// var string2 = 'Test2 test2';
// var string3 = `Test3 test3`;

// console.log(string);
// console.log(string2);
// console.log(string3);

// var integer = 12;

// console.log(integer);

// var float = 3.14;

// console.log(float);

// var booleanT = true;
// var booleanF = false;

// console.log(booleanT);
// console.log(booleanF);

// var niza1 = ['pero', 'janko', 'stanko'];
// console.log(niza1);
// console.log(niza1[0]);
// console.log(niza1[1]);
// console.log(niza1[2]);

// // niza1[100] = "Emil";
// niza1.push('Emil');

// console.log (niza1.length);
// console.log("**************************************************************")


// for(let i = 0; i < niza1.length; i++){
//     console.log(niza1[i]);
// }
// console.log("_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*")
// for(let i in niza1){
//     console.log(niza1[i]);
//     break;
// }

// // == === <= !=
// console.log("_____________________________________________________________");

var broevi =[3, 30, 420,666, 3, 8, 34, 43, 15, 12, 22, 9];
// if (broevi % 3 == 0) {
//     console.log('fiz');  
// }                                                 HAHA FAIL
// else if( broevi % 5 == 0){                        HAHA FAIL
//     console.log('buzz');                          HAHA FAIL 
// };                                                HAHA FAIL
// console.log(broevi);                              HAHA FAIL

for(let i in broevi) {
    var o = '';

    if(broevi[i] % 3 == 0){
        o += 'fizz';
    }

    if(broevi[i] % 5 == 0){
        o += 'buzz'
    }

    console.log(broevi[i] + "\t = \t" + o);
}

var brojach = 0;

while(brojach < 10){
    console.log(brojach);
    brojach++;
}

do {
    console.log(brojach);
    brojach++
}while(brojach < 20);
