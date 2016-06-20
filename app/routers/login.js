var User = require('../models/user')();

module.exports = function(app) {
    app.get('/api/login', function(request, response) {
        response.format({
            html: function() {
                response.render('login');
            }
        });
    });

    // Route for recover user valida
    app.post('/api/authentication', function(req, res) {
        var query     = req.body;
        var userValid = null;

        User.find(function(error, users) {
            if(error) return console.log(error);

            users.forEach(function(user) {
                if(user.email !== undefined) {
                    userValid = user;
                }
            });

            User.findById(userValid._id, function (err, user) {
                console.log(user);
            });
        });

        if(query.email === 'john' && query.password === '123') {
            res.render('index', {
                page: 'home',
                username: query.email
            });
        }
        else {
            res.format({
                html: function() {
                    res.render('login');
                }
            });
        }
    });

    // Route for user save
    app.post('/api/user', function(req, res) {
        var query = req.body;

        var newUser = new User({
            id: query.id,
            email: query.email,
            password: query.password
        });

        newUser.save(function(error) {
            if(error) {
                console.log('Save error');
                throw error;
            }
            console.log('User save!');
        });
    });
}