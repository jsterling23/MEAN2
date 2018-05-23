const express = require('express');
const path = require('path');
const port = 8000;
const app = express();

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

const server = app.listen(port, () => {
     console.log('Listening on port ' + port);
})

var route = require('./routes/index.js')(app, server);
