// Creating a closure 

function c (){
    let a=1000;
    function b(){
        return function x(){
                let c=20;
             console.log(a);
             return c;
        }
    }
    return b();
}
console.log(c()());