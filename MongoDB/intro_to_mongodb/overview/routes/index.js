module.exports = function Route(app, server){

     // Check the order of everything related to mongoose (require --> connect --> Schema --> Model --> route)
     const mongoose = require('mongoose');
     mongoose.connect('mongodb://localhost/overview');


     var UserSchema = new mongoose.Schema({
          name: {type: String, required: true, minlength: 3},
          age: {type: Number, required: true, min: 1, max: 110},
     }, {timestamps: true})

     mongoose.model('User', UserSchema);
     var User = mongoose.model('User');




     app.get('/', (req, res) => {
          console.log('Client requesting ' + req.url);

          User.find({}, function(err, users){
               if(err){
                    console.log('Something went wrong');
               }
               else{
                    console.log('Success');
                    res.render('index', {users: users});
               }

          })
     });





     app.post('/users', (req, res) => {
          var user = new User(req.body);
          user.save(function(err){
               if(err){
                    console.log('Something went wrong');
                    res.render('index', {errors: user.errors})
               }
               else{
                    console.log('Success');
                    res.redirect('/')
               }
          })
     })

};
