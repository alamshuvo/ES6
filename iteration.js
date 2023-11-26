//!iteration is a process of repitation
//! array er iteration akn jrgulo dekhbo segulo sob ES6 er jonno .method gulo nyea kaj kore protita elemets er upor kaja kore array er .based on condition.cinta korte hobe akta machine ache ,oi machiner  moddhe ami elemet gulo divo and seta jodi pass kore akrokomer kaj kore and fail korle r ak rokomer kaj korebe .
//^iteration er  method .1.for each 2.map()flatMap()3.find()findIndex()4.filter.5.reduce & reduceRight 6.every()7.some().8.from(),9.key().10.entries().11.indexOf().lastIndexOf().12.inCludes() --------method

//*1.for each iteration.
//^akta array er method ,ai method amra array er upor amra calai.for each tar peter modde ar akta function nibe.parametar hisebe akta function nibe.j function ta dibo sei function er normally 3 ta parametar lagbe .1st ta must use korte hobe onno gula na korle o hobe ,korle o somossa nai.ja iccha tai return kora jai .
//! j function er kono nam nai take anonymas function and take call back functon bole
//*Map()
//^map kono array k map kora hoi se main array k same reke new akta array banai .map condition er upor depend kore arary retunr kore.map jetai kori na kn array return korbe
//*flatMap()
//^ faltMap 2 dimensional array k o map korbei korbe oi dimensional array k o flat kore dibe
//*find()&and findIndex() method start.

//^find ami jei function ta dibo sekhaen akta condition dite hobe ,se prottekta itereation e conditon match kore ,find jekono akta value find kora ,jodi kisu khuje pai tahole return korbe but na pele kisu return korbe na .akta match korle r dekhe na .
// const age =[10,20,40,30,45,18,14];




//!filter array return kore 
//?reduce ta badir kaj.reduce 4ta jinis nei .reduce ta aktu different ,eta badir kaj.






//*reduce  method start.

const numbers =[1,2,3,4,5,6,7];
const sum=numbers.reduce((prevValue,curentValue,curentIndex,arr)=>{
    return prevValue+curentValue;

});
console.log(sum);

//!initalValue dite hoi karon first index er kono previous value takhe na so initalValu baire onno variable er bitor assign kore o dewa jai abr direct o dewa jai .
// const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);

// const array = [15, 16, 17, 18, 19];

// function reducer(previousValue, currentValue, index) {
//   const returns = previousValue + currentValue;
//   console.log(
//     `previousValue: ${previousValue}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
//   );
//   return returns;
// }

// array.reduce(reducer);


// const shoppingCart=[
//     {productName:"shirt",
//     price:400,},
//     {
//         productName:"pant",
//         price:500,
//     },
//     {
//         productName:"tupi",
//         price:100,
//     },
//     {
//         productName:"trouser",
//         price :50,
//     }
// ]
// const totalPrice=shoppingCart.reduce((previousValue,productName)=>{
//     return previousValue+productName.price;
// },0)
// console.log(totalPrice);



//!The array parameter never changes through the process — it's always [15, 16, 17, 18, 19]. The value returned by reduce() would be that of the last callback invocation (85).
// !The reduce() method executes a reducer function for array element.

//!The reduce() method returns a single value: the function's accumulated result.

//!The reduce() method does not execute the function for empty array elements.

//!The reduce() method does not change the original array

// *The initialValue, or the previously returned value of the function.
//* currentValue	Required.
// *The value of the current element.
// *currentIndex	Optional.
// *The index of the current element.
// *arr	Optional.
// *The array the current element belongs to


//?return value :the accumulated result form the last call of the callback function.
//*Reduce method End

// const person=[
//     {name:"iftakhar",
//         age:25,
//     gender:"male",
//     profession:"student"},
//     {
//         name:"shorif",
//         age:24,
//         gender:"male",
//         profession:"job-holder",
//     },
//     {
//         name:"jenia afrin",
//         age:22,
//         gender:"female",
//         profession:"Doctor"
//     },
//     {
//         name:"Nur islam",
//         age:55,
//         gender:"male",
//         profession:"farmer"
//     }
// ];
// const singlePerson=person.filter((value)=>value.gender==="female");
// console.log(singlePerson);



