var express    = require('express');
var bodyParser = require('body-parser');
var load       = require('express-load');

module.exports = function() {
    var app = express();

    // Config views
    app.use(express.static('./public'));
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    // Middlewares
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    // Load
    load('routers', {cwd: 'app'})
      .into(app);

    app.get('/api/menu/prestador/:id', function(req, res) {
        res.format({
            html: function() {
                res.render('login');
            }
        });
    });

    return app;
}