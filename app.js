const express = require('express');
const app = express();
const { fork } = require('child_process');

app.get('/new',(req,res)=>{
    
    const childProcess = fork('./childComponent.js')
    childProcess.send({"number" : parseInt(req.query.number)})
    childProcess.on("message", message => res.send('message' + message))
})

app.get('/about',(req,res)=>{
    
    res.send('this is the about page')
})


app.listen(3004, ()=>{
    console.log('listening on port 3004')
})
