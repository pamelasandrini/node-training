const db = require('../../config/database');

module.exports = (app) => {

    app.get('/', function (req, resp) {
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

    app.get('/books', function (req, resp) {

        db.all('SELECT * FROM BOOKS', function (err, result) {


            resp.marko(
                require('../views/books/list/list.marko'),
                {
                    books: result
                }
            );
        });
    });
};

