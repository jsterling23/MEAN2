const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const port = 8000;

var app = express()

app.use(express.static(__dirname + '/views'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'sekerreeet'}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');



function what_route(url){
     console.log('Requesting url...',url);
}



app.get('/', function(req, res){
     what_route(req.url);
     res.render('index');
})


app.post('/result', function(req, res){
     what_route(req.url);

     req.session.postData = {
          name: req.body.name,
          location: req.body.location,
          language: req.body.language,
          comment: req.body.comment,
     }
     res.redirect('/results')
})


app.get('/results', function(req, res){
     what_route(req.url);
     if (!req.session.postData){
          console.log('Error******* Session not defined yet..')
          res.redirect('/');
     }
     res.render('results', {session: req.session.postData})
})

app.get('/destroy', function(req, res){
     req.session.destroy();
     res.redirect('/')
})


app.listen(port, function(){
     console.log('Listening on port...',port);
})









The platform did this exercise in a way where they created a file scrictly for the routes and then required it in the server.js. I like this way because it keeps all the code simple and organized.




// This will be what the server file looks like. Much cleaner.
//
// //load the express module
// //load the path module
// //load the body-parser
// const express = require("express");
// const path = require("path");
// const bodyParser = require('body-parser');
// // invoke const express and store the resulting application in const app
// const app = express();
// app.use(bodyParser.urlencoded());
// app.use(express.static(path.join(__dirname, "./static")));
// // setting up ejs and our views folder
// app.set('views', path.join(__dirname, './views'));
// app.set('view engine', 'ejs');
//
// //we're going to have /routes/index.js handle all of our routing
// require('./routes/index.js')(app);
// // setting server to run on port 3000
// app.listen(3000, function() {
//  console.log("listening on port 3000!");
// });








// This is the index.js in the route folder.

// module.exports = function Route(app){
// 	// root route to render the index.ejs view
// 	app.get('/', function(req, res) {
// 	 res.render("index");
// 	});
// 	// post route for adding a data from a survey
// 	app.post('/result', function(req, res) {
// 		const submittedInfo = {
// 			name: req.body.name,
// 			dojoLocation: req.body.dojoLocation,
// 			favoriteLanguage: req.body.favoriteLanguage,
// 			comment: req.body.comment
//     };
//
// 	 	res.render("result", { userData: submittedInfo });
// 	});
// };




// this is what the result html page looked like for this example.

// <!DOCTYPE html>
// <html lang="en">
// <head>
// 	<meta charset="UTF-8">
// 	<title>Survey Form</title>
// </head>
// <body>
// 	<h2>Submitted Information</h2>
// 	<ul>
// 		<li>Name: <strong><%= userData.name %></strong></li>
// 		<li>Dojo Location: <strong><%= userData.dojoLocation %></strong></li>
// 		<li>Favorite Language: <strong><%= userData.favoriteLanguage %></strong></li>
// 		<li>Comment: <strong><%= userData.comment %></strong></li>
// 	</ul>
// 	<a href="/"><h3>Back</h3></a>
// </body>
// </html>
//
//
//
