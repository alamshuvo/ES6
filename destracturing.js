// object destracturin 
const user ={
    name:"iftakhar",
    id:3753772239,
    roll:2255532,
    age:25,
    education:{
        degree:"hons",

    }
}
// object tekhe name takae ber kore ene r akta variable rakthe hobe jeno onno jagai use korti pari
// let another =user["name"];
// console.log(another);
// eta hocche normally amra distracture na kore jevabe kortam kintu jokhon es6 cole ase tokhon life ta r o easy hoye jai 

// const {roll:ExamRoll} = user;
// console.log(ExamRoll);

//eta hosse es6 e distracturing er akdom basic


//nested object 
// const {education:{degree}={}}=user;
// console.log(degree);
//benge pelar upai hocce last laveel porjonto same vabe jete hobe .
//default value use kore porperty eroor komano jai 



// array destructing 

// let number = [1,2,3,6,4,5];
// let [a,b]=number;
// console.log(a,b);

//array destructing er basic 
// const numbers=[1,2,3,4,5,6,7];
// const [, x,,,,, y]=numbers ;
// console.log(x,y);

//jokhon random numbers need hobe tkn evabe kaj kora jabe

//jokhon nested array takhbe tokhon evabe korte hobe
// const another=[1,2,[1,500,1000],7,8];
// const [,,[,z,s]]=another;
// console.log(z,s);

//value swaping
//old way
let a=10;
let b=20;

// var temp=a;
// var a=b;
// var b =temp;
// console.log(a,b);


// es6 way 
[b,a]=[a,b];
console.log(a,b);
