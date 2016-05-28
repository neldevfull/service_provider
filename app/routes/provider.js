module.exports = function(app) {
    app.get('/api/menu/prestador/:id', function(req, res) {
        res.format({
            html: function() {
                res.render('login');
            }
        });
    });

    app.post('/api/authentication', function(req, res) {
        console.log(req.body);
    })
}