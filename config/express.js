var express    = require('express');
var bodyParser = require('body-parser');

module.exports = function() {
    var app = express();

    // Config views
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    // Middlewares
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    app.get('/api/login', function(request, response) {
        response.format({
            html: function() {
                response.render('login', {name: 'John'});
            }
        });
    });

    app.get('/api/menu/prestador/:id', function(req, res) {
        res.format({
            html: function() {
                res.render('login', {name: 'Daniel'});
            }
        });
    });

    return app;
}