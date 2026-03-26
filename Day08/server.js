const express = require('express')

const app = express();
app.use(express.json())

app.use( (req,res,next)=>{
    console.log(req.method);
    next();
})

app.use( (req,res,next)=>{
    console.log("Welcome !");
    next();
})
app.get('/',(req,res,next)=>{
    console.log(req.query.name);
    console.log(req.query.email);
    
    res.send('<h1>Home Page ! </h1>')
})

app.post('/',(req,res)=>{
    console.log(req.body)
    res.send({'data':'data'})
})


app.get('/users',(req,res,next)=>{
    res.send('<h1> User Page</h1>')
})


app.listen(3000)