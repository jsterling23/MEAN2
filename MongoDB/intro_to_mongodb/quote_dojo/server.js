const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = 8000;

const app = express();

app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

const server = app.listen(port, () => {console.log('Server running on port ' + port);
});

const route = require('./routes/routes.js')(app, server);
