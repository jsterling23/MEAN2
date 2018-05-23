module.exports = function Route(app, server) {

     var io = require('socket.io').listen(server)

     function siteRequest(req){
          console.log('Client requesting url...[' + req.url +']');
     }

     app.get('/', (req, res) => {
          siteRequest(req);
          res.render('index');
     });

     io.sockets.on('connection', function(socket){
          console.log('Connected to Socket..');
          console.log('Socket id: ' + socket.id);

          // contains the counter obvi
          var counter = 0;

          // listens for the emit from the client
          socket.on('count_one', () => {
               console.log('Got the button click from the client..')
               counter += 1;
               // sends the new data back to the client via an emit but to all on the server including the OP
               io.emit('increment_one', {response: counter });
          })

          // listens to the reset button to be clicked on the client so it can take the var and assign it to zero
          socket.on('reset_counter', () => {
               console.log('got the reset click from the client..')
               counter = 0;
               io.emit('zero', {response: counter})

          })

     })
};
