const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 8000;

var app = express();

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
     console.log('Client requesting....', req.url);
     res.render('index')
})

app.post('/', (req, res) => {
     res.redirect('/')
})



var server = app.listen(port, () => {
     console.log('Listening to server on port' + port);
})

var io = require('socket.io').listen(server);


io.sockets.on('connection', (socket) => {
     console.log('Client/socket is connected...');
     console.log('Client/socket id is: ', socket.id);

     socket.on('message', function(data){
          var random = Math.floor((Math.random() * 10000)+1);

          socket.emit('update_message', {response: data});
          socket.emit('random_number', {response: random});

     })
     // connection commands here
})






// I like adding the platform server.js because I like to be able to see how the PROS do it ;// DEBUG: // require express, path, body-parser
// var express = require("express");
// var path = require("path");
// var bodyParser = require('body-parser');
// // create the express app
// var app = express();
//
// app.use(bodyParser.urlencoded());
// // static content
// app.use(express.static(path.join(__dirname, "./static")));
// // setting up ejs and our views folder
// app.set('views', path.join(__dirname, './views'));
// app.set('view engine', 'ejs');
// // tell the express app to listen on port 3000
// var server = app.listen(3000, function() {
// 	console.log("listening on port 3000");
// })
// //we're going to have /routes/index.js handle all of our routing
// var route = require('./routes/index.js')(app, server);
