module.exports = function (app) {

    //show
    app.get('/todo', function (req, res) {
res.render('todo');
    });

    //Fill
    app.post('/todo', function (req, res) {

    });

    //Remove
    app.delete('/todo', function (req, res) {

    });

};
