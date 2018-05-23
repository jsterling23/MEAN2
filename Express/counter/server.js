var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var port = 8000;

var app = express()

app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'secret_key'}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');




// If counter is undefined then it will set session.counter at 1
app.get('/', function(req, res){

     if (req.session.counter === undefined){
          req.session.counter = 1;
     }
     else {
          req.session.counter += 1;
     }

     res.render('index',{counter: req.session.counter});
})



// if you go to localhost:8000/two then it will use this route to plus 1 then when it redirects to the index it will incremnet it by 1 more, therfore making it two.
app.post('/two', function(req, res){
     req.session.counter += 1;

     res.redirect('/')
})


app.post('/destroy', function(req, res){
     req.session.destroy();
     res.redirect('/');
})





app.listen(8000, function(){
     console.log('Listening on port',port);
})
