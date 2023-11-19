//  function myFunction() {
//     console.log(arguments);
// }
// myFunction(9,10,11,12);
// before rest parameater we use arguments 

// function another( a,...params) {
//     console.log(params);
//     console.log(a);
    
// }
// another(1,2,6,5,4);

// let sum=(num1,num2)=>console.log(num1+num2);
// sum(10,20);
// sum(10,20,30);
// sum(10,20,30,60);
//!problem k solve korar jonno amder js e es6 ekta solution dyeache.

function sum(name,...arguments){
    let sum=0;
    for (let value in arguments) {
        sum+=arguments[value];

    }
    console.log(sum);
    console.log(name);
}
sum("yahoo Baba" ,10,20,10,20,10,101,20);


//!