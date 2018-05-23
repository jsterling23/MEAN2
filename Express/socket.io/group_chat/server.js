const express = require('express');
const path = require('path');
const session = require('express-session');
const port = 8000;
const app = express();

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


const server = app.listen(port, () => {
     console.log('Server running on port ' + port);
})


const route = require('./routes/route.js')(app, server);
