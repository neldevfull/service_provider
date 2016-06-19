module.exports = function(app) {
    app.get('/api/login', function(request, response) {
        response.format({
            html: function() {
                response.render('login');
            }
        });
    });

    app.post('/api/authentication', function(req, res) {
        var user = req.body;

        if(user.email === 'john' && user.password === '123') {
            res.render('index', {
                page: 'home',
                username: user.email
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
}