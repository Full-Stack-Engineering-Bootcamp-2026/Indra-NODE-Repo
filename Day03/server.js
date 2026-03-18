const http = require('http')

const Server = http.createServer((req,res)=>{
    

    const url = req.url;
    const method = req.method;

    console.log(`${method} ${url}`);


    if(url == '/' ){

        if (method === 'POST') {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.write('<h1>This is POST request</h1>');
                return res.end();
         }

        if(method==='GET'){
            res.statusCode=200;
            res.setHeader('Content-Type','text/html')
            res.write('<html>')
            
            res.write('<head> <title> Home </title> </head>')
            res.write("<body> <h1> Home </h1>  <a href='/about' > About </a> <br/> <a href='/redirect'>Test Redirect</a> </body>")
            res.write('</html>')

            return res.end()

        }

    }

    if(url==='/about' && method==='GET'){
        res.statusCode=200;
         res.setHeader('Content-Type','text/html')
         res.write('<html>')
        
        res.write('<head> <title> about </title> </head>')
        res.write('<body> <h1> Indra </h1>    </body>')
        res.write('</html>')
        return res.end()
    }

    if(url==='/time' && method==='GET'){
        res.statusCode=200;
         res.setHeader('Content-Type','application/json')
         const data = { Time : new Date().toISOString()}
        return res.end(JSON.stringify(data))
    }

     if(url==='/redirect' && method==='GET'){

         res.statusCode=302;
         res.setHeader('Location','/')
         return res.end()
    }


    res.statusCode=404;

    res.setHeader('Content-Type', 'text/html');

    
         res.setHeader('Content-Type','text/html')
         res.write('<html>')
        
        res.write('<head> <title> 404 Error  </title> </head>')
        res.write('<body> <h1> 404 Page Not Found !!! </h1>    </body>')
        res.write('</html>')

        res.end()



    

})

Server.listen(3000)