const http = require('http')

const server = http.createServer((req,res)=>{
        console.log("1")
        console.log("2")
        res.end("<h1>Indra Phand</h1>")
        console.log("end")
})

server.listen(3000)