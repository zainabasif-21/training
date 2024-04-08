// Understanding the difference of let and var via small example

let a=1000;
var b=1000;
const pi=3.14;

console.log('Here a should be 1000',a);
console.log('Here b should be 1000',b);
console.log(pi)

if(true){
    let a=10;
    var b=10;
    console.log('Here both a and b should be 10. Printing a and b',a,b);
}

console.log(`Printing a and b again. Both should be 1000 but due to block scope of a results will be 1000 
but b will be 10 as var is reinitialized as it was declared again and var does't have a block scope`,a,b);

console.log('Const can neither be reinitialized nor re-declared',pi);

