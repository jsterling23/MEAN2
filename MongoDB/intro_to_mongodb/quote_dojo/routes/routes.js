module.exports = function Route(app, server){

     // Check the order of everything related to mongoose (require --> connect --> Schema --> Model --> route)
     const mongoose = require('mongoose');
     mongoose.connect('mongodb://localhost/quotes');


     var QuoteSchema = new mongoose.Schema({
          name: {type: String, required: true, minlength: 3},
          quote: {type: String, required: true, min: 1, max: 500},
     }, {timestamps: true})

     mongoose.model('Quotes', QuoteSchema);
     var Quote = mongoose.model('Quotes');




     app.get('/', (req, res) => {
          console.log('Client requesting ' + req.url);

          res.render('index');
     });





     app.post('/quotes', (req, res) => {
          var quote = new Quote(req.body);
          console.log(quote);
          // res.redirect('/')
          quote.save(function(err){
               if(err){
                    console.log('Something went wrong');
                    console.log(quote.errors)
                    res.render('index', {errors: quote.errors})
               }
               else{
                    console.log('Success');
                    res.redirect('/')
               }
          })
     })

     app.get('/quotes', (req, res) => {
          console.log('in the get of quotes')
          Quote.find({}, function(err, quotes){
               console.log('in the quote.find shit')
               if(err){
                    console.log('Something went wrong');
                    res.render('index', {errors: quote.errors})
               }
               else{
                    console.log('Success');
                    res.render('quotes', {quotes: quotes});
               }

          })
     })

};
