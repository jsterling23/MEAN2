var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

app.use(session({secret: 'jerry'}));

app.use(express.static(__dirname + '/static'));
// console.log(__dirname);
app.use(bodyParser.urlencoded({extended: true}));
console.log(bodyParser.urlencoded({extended: true}));



app.set('views', __dirname + '/views');
// console.log('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', function(request, response){
     response.render('index', {session: request.session.name });
})

app.post('/users', function(request, response){

     // var users_array = [
     //      {name:'Jerry', email:'Jerry@gmail.com'},
     //      {name:'Harry', email:'Harry@gmail.com'},
     //      {name:'Barry', email:'Barry@gmail.com'},
     //      {name:'Larry', email:'Larry@gmail.com'},
     //      {name:'Rose', email:'Rose@gmail.com'},
     // ];
     // response.render('users',{users: users_array});
     request.session.name = request.body.name;
     console.log('POST DATA \n\n', request.body)

     response.redirect('/')

})

app.get('/show', function(request, response){
     response.render('show', {session: request.session.name });
})


app.listen(8000, function(){
     console.log('Listening on port 8000....')
})
