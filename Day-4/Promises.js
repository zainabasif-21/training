function promise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let temp=true;

            if(temp){
            console.log('Timeout sucessfully executed');
            resolve(true);
            }
            else{
                let error=new Error('Failed to execute');
                reject(error);
            }

            

        },3000)
    })
}



promise().then((arg)=>{
    console.log('Message received from promise', arg);
}).catch((error)=>{
    console.log('Execution interrupted with the following error', error);
})