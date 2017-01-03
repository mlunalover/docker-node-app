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

// successful page
app.get('/successful', function(req, res) {
    res.render('pages/successful');
});

//body-parser is the middleware needed to parse the post data of the body.
// var bodyParser = require('body-parser')
// app.use( bodyParser.json() );
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

//multer middleware needed for handling multipart/form-data
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/', multer({ dest: './uploads/'}).any(), function(req, res){
    console.log(req.body);
    console.log(req.files);

    res.render('pages/successful');
    res.status(204).end();
})

//form post
// app.post('/', function(req, res){
//     console.log(req.body);
// });

//TODO API requests with express can also use request for more options

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);