const http = require('http');

const server = http.createServer(function (req, resp){
    resp.end(`
    <html>
        <head>
            <meta charset="utf-8">
        </head>
        <body>
            <h1> Node training </h1>
        </body> 
    </html>
`);
});
server.listen(3000);
