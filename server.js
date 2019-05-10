let express = require('express');
let todoController = require('./controllers/todoController');

let app = express();

//setup template engine(ejs);
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controller
todoController(app);

//listen to port
app.listen(4444);
console.log('Server runing on the port 4444');
