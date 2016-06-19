module.exports = function(app) {
    app.get('/api/home', function(req, res) {
        res.render('home');
    });
}