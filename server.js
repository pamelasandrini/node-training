const app = require('./src/config/custom-express');

app.listen(3000, function(){
    console.log("running server on port 3000");
});

app.get('/', function(req, resp){
    resp.send(`
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

app.get('/books', function(req, resp){
    resp.send(`
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Books list </h1>
            </body> 
        </html>
    `);
});
