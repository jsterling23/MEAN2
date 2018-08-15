var users = [];
var messages = [];

function siteRequest(url){
     console.log('Client requesting url [ ' + url + ' ]');
};

function isUser(user) {
     console.log('in user function', user)
     const usersCount = users.length;
     console.log('usersCount:',usersCount)

     for(let i = 0; i < usersCount; i++){
          console.log('in the for loop of isUser')
          if(user === users[i]){
               console.log('in the if statement', users[i]);
               return true;
          }
     }
     return false;
}



module.exports = function Route(app, server){

     const io = require('socket.io').listen(server);

     io.sockets.on('connection', (socket) => {
          console.log('Client is conneceted to socket...');
          console.log('Socket id: '+ socket.id);

          socket.on('page_load', (data) => {
               console.log('users:',users)
               console.log('in page load')
               const existingUser = isUser(data.name);
               console.log('existingUser:',existingUser)
               const event = existingUser ? 'existing_user' : 'load_messages';
               console.log('event:',event)
               const info = existingUser ? {
                    error: 'This user already exists'
               } : { current_user: data.name, messages: messages };
               console.log('info:',info)
               if (!existingUser){
                    users.push(data.name);
               }

               socket.emit(event,info);
          });

          socket.on('new_message', (data) => {
               console.log('data new message:', data);
               messages.push({name: data.user, message: data.message});
               io.emit('post_new_message', { new_message: data.message, user: data.user });
          });

          socket.on('take_this_data', (data) => {
               console.log('in the server with the take this data')
               io.emit('put_this_there', {data: 'this is the data I want to broadcast to every person!'});
          })
     })

     app.get('/', (req, res) => {
          siteRequest(req.url);

          res.render('index');
     });

};
