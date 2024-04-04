

/* Practicing the concept of event loop and 
Asynchronous execution */

console.log('Main Thread');

setTimeout(()=>{
    console.log('Executed via Web Api\'s and then pushed to tasks queue. Delay of 1ms');
},1)

console.log('Will get printed befor 1 ms time out');

setTimeout(()=>{
    console.log('Executed via Web Api\'s and then pushed to tasks queue. Will get printed after 1ms delay even though delay time is 0');
},0)

console.log('Will get printed before the 0s delay via set timeout');
