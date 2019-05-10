let bodyParser = require('body-parser');
let db = require('mongoose');
//connect database mongoose
db.connect('mongodb+srv://admin:admin@cluster0-uferp.gcp.mongodb.net/test?retryWrites=true');

//Create a schema - this is like blueprint
let todoSchema = new db.Schema({
    item: String,
});

let Todo = db.model('Todo', todoSchema);

let urlencodedParser = bodyParser.urlencoded({extends: false});

module.exports = function (app) {

    //Show data
    app.get('/todo', function (req, res) {
        //get dât from mongoDB and pass it to view
        Todo.find({}, function (err, data) {
            if (err) throw err;
            res.render('todo',  {todo: data})
        });
    });

    //Fill
    app.post('/todo', urlencodedParser, function (req, res) {
        let newTodo = Todo(req.body).save(function (err, data) {
            if (err) throw err;
            res.json(data);
        });
    });

    //Remove
    app.delete('/todo/:item', function (req, res) {
        //delete the requested item form mongodb
        Todo.find({item: req.params.item.replace(/\-/g," ")}).remove(function (err, data) {
            if (err) throw err;
          res.json(data);
        })
    });

};
