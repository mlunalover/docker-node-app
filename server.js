'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
// app.get('/', function (req, res) {
//     res.send('Hello world test\n');
// });

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

//body-parser is the middleware needed to parse the post data of the body.
var bodyParser = require('body-parser')
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));

//form post
app.post('/', function(req, res){
    console.log(req.body);
    // res.sendFile('pages/about');
});

//TODO API requests with express can also use request for more options

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);