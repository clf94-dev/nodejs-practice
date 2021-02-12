const http = require('http');

/*function rqListener(req, res){


}

const server = http.createServer(rqListener);
*/

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
res.write('<head><title>My First Page</title></head>');
res.write('<body><h1>Hello from my Node.js Server!</h1></body>');


    res.write('</html');
    res.end();
   // process.exit(); //terminates the server

})

server.listen(3000);


