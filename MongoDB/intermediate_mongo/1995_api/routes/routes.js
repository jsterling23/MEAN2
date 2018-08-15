module.exports = function Route(app, server) {

     const mongoose = require('mongoose');
     mongoose.connect('mongodb://localhost/jsonStuff');

     var UserSchema = new mongoose.Schema({
          name: {type: String, required: [true, "Must enter a name"], minlength: 3},
     }, {timestamps: true})

     mongoose.model('User', UserSchema);
     var User = mongoose.model('User');



     app.get('/', (req, res) => {
          console.log('Made it to the index get request', req.url);
          User.find({})
               .then(users => {
                    console.log('index pulled the database records successfully');
                    res.json(users);
               })
               .catch(errors => {
                    console.log('Something went terribly wrong!');
                    console.log(errors);
                    res.redirect('/');
               })

     })

     app.get('/add/:name', (req, res) => {
          var name = {name: req.params.name};
          var user = new User(name);
          console.log('user', user);
          user.save()
               .then(() => {
                    console.log('Success! Saved');
                    res.redirect('/');
               })
               .catch(errors => {
                    console.log('Error bitch');
                    res.redirect('/');
               })
     })

     app.get('/remove/:name', (req, res) => {

          User.findOneAndRemove({name: req.params.name})
               .then(() => {
                    console.log('Deleted the record from the database');
                    res.redirect('/');
               })
               .catch(errors => {
                    console.log('Whoops there were errrrrrors')
                    console.log(errors)
                    res.redirect('/')
               })
     })

     app.get('/:name', (req, res) => {
          User.findOne({name: req.params.name})
               .then(user => {
                    console.log('look for user',user);
                    res.json(user);
               })
               .catch(errors => {
                    console.log(errors);
                    res.redirect('/');
               })
     })
}
