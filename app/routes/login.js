module.exports = function(app) {
    app.get('/api/login', function(request, response) {
        response.format({
            html: function() {
                response.render('login', {name: 'John'});
            }
        });
    });
}