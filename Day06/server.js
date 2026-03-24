const express = require('express')

const app = express();


app.get('/',(req,res,next)=>{
    res.send('<h1>Welcome user ! </h1>')
})
app.get('/about',(req,res,next)=>{
    res.send('<h1> Hey there, My name is Indra. Talk about my learning journey its going good, concept learning in depth. </h1>')
})
app.get('/contact',(req,res,next)=>{
    res.send('<h1>Indra , March 2026</h1>')
})

app.get('/skills',(req,res,next)=>{
    res.send(' <ol> javascript </ol> <ol> node.js </ol>  <ol> express.js </ol> ')
})
app.listen(3000)