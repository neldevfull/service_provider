var express    = require('express');
var load       = require("express-load");
var bodyParser = require('body-parser');

module.exports = function() {
    var app = express();

    // Config views
    app.use(express.static('./public'));
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    // Middlewares
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    // Auto load
    load('routes', {cwd: 'app'})
        .into(app);

    return app;
}