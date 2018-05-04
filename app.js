const express = require('express');
const hbs = require('hbs');
const path = require('path');

const httpPort = 3000;

// App setup
var app = express();

// Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './public/views'));

// Static files
app.use(express.static(path.join(__dirname, './public')));

app.get('/', (request, response) => {
    year = new Date().getFullYear();
    response.render('index.hbs', {
        year
    });
});

// Start server
var server = app.listen(httpPort, () => {
    console.log(`Server started on port ${httpPort}`);
});