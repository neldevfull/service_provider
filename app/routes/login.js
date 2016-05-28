module.exports = function(app) {
    app.get('/api/login', function(request, response) {
        response.format({
            html: function() {
                response.render('login', {name: 'John'});
            }
        });
    });

    app.post('/api/authentication', function(req, res) {
        var auth = req.body;

        if(auth.email !== "" && auth.password !== "")
            res.render('index', {
                page: 'home'
            });
        else {
            res.format({
                html: function() {
                    res.render('login');
                }
            });
        }

    });
}