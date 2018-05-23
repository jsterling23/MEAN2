module.exports = function Route(app, server){

     // Check the order of everything related to mongoose (require --> connect --> Schema --> Model --> route)
     const mongoose = require('mongoose');
     mongoose.connect('mongodb://localhost/animals');





     // Sets up the schema for the database //
     var AnimalSchema = new mongoose.Schema({
          name: {type: String, required: [true, "Must enter a name.."], minlength: 3},
          legs: {type: Number, required: [true, "Enter a leg count from 1-4"], min: 1, max: [4,'Wtf kind of animal has that many legs']},
     }, {timestamps: true})

     mongoose.model('Animals', AnimalSchema);
     var Animal = mongoose.model('Animals');



     // Index get request, should display a list of all animals in the database //
     app.get('/', (req, res) => {
          console.log('Client requesting ' + req.url);

          Animal.find({})
               .then(animals => {
                    res.render('index', {animals: animals})
               })
               .catch(errors => {
                    console.log(errors)
               });
     });


     // directs you to a page/form that will take in a new animal //
     app.get('/animal/new', (req, res) => {
          res.render('addAnimal');
     });



     // validates and saves the new animal in the database //
     app.post('/animal/new', (req, res) => {
          var animal = new Animal(req.body);

          animal.save()
               .then( () => {
                    res.redirect('/');
               })
               .catch(errors => {
                    res.redirect('addAnimal', {errors: animal.errors});
               })
     });

     // grabs the animal by the id, locates it and loads a form with placesholders in the form containing the database'd animal
     app.get('/animal/edit/:id', (req, res) => {
          var animal_id = req.params.id;
          console.log('this is the animal id', animal_id)

          Animal.findOne({_id: animal_id})
               .then(animal => {
                    res.render('edit', {animal: animal});
               })
               .catch(errors => {
                    console.log('edit caught errors');
                    res.redirect('/', {errors: errors})
               });
     });

     // route used to do all the database login for editing, then redirects to index page with edited data
     app.post('/animal/edit/:id', (req, res) => {
          // pass in the id and then the body of the form and then new: true so it will return the new value instead of the old value containing the old shit. Thats pretty fucking bad fucking badass!
          Animal.findByIdAndUpdate(req.params.id, req.body, {new: true})
               .then(animal => {
                    res.redirect('/');
               })
               .catch(errors => {
                    res.redirect('/', {errors: errors})
               })

     });

     // this route will delete the document from the database with one click
     app.get('/animal/destroy/:id', (req, res) => {
          console.log('in the destroy with id ', req.params.id);

          Animal.findByIdAndRemove(req.params.id)
               .then(() => {
                    console.log('deleted');
                    res.redirect('/');
               })
               .catch(errors => {
                    res.redirect('/', {errors: errors});
               })
     })

};
