// The nullish coalescing is helpful when you want to provide a default value only for nullish variable 
// & nullish er khetre shudu null r undefine takhle others value dekhabe otherwise onno jekono value takhle jemon falsy value and undefined takhle o nullish kaj korbe na 
//?The nullish coalescing operator (??) helps you choose the default value only if the actual value is null or undefined. It ignores other "falsy" values like 0, false, or an empty string.
const text=undefined;
const defaultMe ="its me default value";
const result = text ??defaultMe;
console.log(result);