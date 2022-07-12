process.on("message", message => {
    
    const jsonResponse = numberFunc(message.number);
    console.log('the callback ' + jsonResponse)
    process.send(jsonResponse);
    process.exit();
})


function numberFunc(number){
    for(let i=0; i<number; i++){
        console.log(i)
       }
    }
