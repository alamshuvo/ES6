//*With optional chaining (?.), if any part of the chain is null or undefined, the result is automatically undefined, and it won't throw an error. It's a concise way to handle cases where you're not sure if certain properties or nested objects exist.

//? jodi kono object e kono properties na takhe sekhtre jate error show na kore se jonno optional chaining use kora hoyea takhe ,optional chaining er mane holo ei properties ta jodi na takhe sekhetre tumi null or undefined show koro but error dio na ,nise example er maddhome optional chaining ta clear kora holo 

const person ={
    name:"Iftakhar alam",
    adress1:{
        city:"Mirsarai",
        village:"Bamonsundur",
        thana:"jorargang"
    }
};
console.log(person.adress?.distict);




