// Create model User
module.exports = function() {
    var Schema = db.Schema;

    var user = Schema({
        id: String,
        email: String,
        password: String
    });

    return db.model('User', user);
}