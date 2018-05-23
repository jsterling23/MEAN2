const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.use(express.static(path.join(__dirname, './static')));


app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');



app.get('/', (req, res) => {
     console.log('Client requesting...' + req);
     res.render('index');
})












// Socket connection code

var server = app.listen(port, () => {
     console.log('Client listening to server on port...' + port);
})

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
     console.log('Client/socket is connected...');
     console.log('Client/socket id is: ', socket.id);

     socket.on("button_clicked", (data) => {
          console.log('Someone clicked a button! Reason: ' + data.reason);
          socket.broadcast.emit('server_response', {response: "sockets are the best! Testig on multiple tabs"} );

     })


})
