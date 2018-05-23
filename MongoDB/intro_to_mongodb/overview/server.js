const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = 8000;

const app = express();
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/overview');
// var UserSchema = new mongoose.Schema({
//      name: String,
//      age: Number,
// })
// mongoose.model('User', UserSchema);
// var User = mongoose.model('User');
// console.log(User)

app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

const server = app.listen(port, () => {console.log('Server running on port ' + port);
});

const route = require('./routes/index.js')(app, server);
