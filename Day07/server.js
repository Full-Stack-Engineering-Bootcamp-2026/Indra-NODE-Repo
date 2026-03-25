const express = require('express')

const app = express();
const users = require("./users")

app.use( (req,res,next)=>{
    console.log(req.method);
    next();
})

app.use( (req,res,next)=>{
    console.log("Welcome !");
    next();
})
app.get('/',(req,res,next)=>{
    res.send('<h1>Home Page ! </h1>')
})
app.use('/users',users);

app.get('/users',(req,res,next)=>{
    res.send('<h1> User Page</h1>')
})


app.listen(3002)