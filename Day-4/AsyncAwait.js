
async function asyncAwait(){
    console.log('Inside await making call')
    function data()
    {
        return 'Returning string from await call';
    }
    let getData=await data()
    console.log(getData);
}

console.log('Before Async Await');
asyncAwait();
console.log('After Async Await');