// Resources 
const express = require('express');
const mysql = require('mysql');
// const mysql = require(__dirname + '/private/Javascript/config.js');
const bodyParser = require('body-parser');
const session = require('express-session');
const fs = require('fs');

const app = express();

require('dotenv').config();

app.set('view engine', 'ejs');
// app.use(session({
//     secret: process.env.SECRET,
//     resave: true,
//     saveUninitialized: true
// }));
app.use(bodyParser.urlencoded({extended: true}));
// require static for static routes
app.use(express.static(__dirname));
app.use(express.static('private'));

var msg = '';


// Landing Route
app.get('/', function(req, res){
    res.render('index.ejs');
});
app.post('/', function(req,res){

});

// Signin Route
app.get('/signin', function(req,res){
    res.render('signin.ejs');
});
app.post('/signin', function(req,res, length){
    // const connection = require('./private/Javascript/config.js');
    // connection.connect();
    // const connection =  mysql.createConnection({
    //     host: process.env.HOST,
    //     user: process.env.USER,
    //     password: process.env.PASSWORD,
    //     database: process.env.DATABASE
    // });
    // connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
    //     if (err) {
    //         throw err;
    //     }
    //     else {
    //         console.log('The solution is: ', rows[0].solution)
    //     }
    // })
    
    // connection.end()
    // 
    // if(userName && password) {
    //     console.log(connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [userName, password], function(error, results, fields) {
    //         if (results) {
    //             req.session.loggedin = true;
    //             req.session.username = userName;
    //             res.redirect('welcome.ejs');
    //         }
    //         else {
    //             console.log('Incorrect username and/or password.');
    //         }
    //     }));
    // }
    // else {
    //     console.log('Please enter username and password.');
    // }
    
});

// Home Route
app.get('/welcome', function(req, res) {
    res.render('welcome.ejs');
});

// Signup Route
app.get('/signup', function(req,res){
    res.render('signup.ejs');
});
app.post('/register', function(req,res){
    var userName = req.body.userName;
    var email = req.body.email;
    var password = req.body.password;
    var password2 = req.body.password2;
    var ackw = req.body.ackw;
});

// Password Reset
app.get('/password-reset', function(req,res){
    res.render('password-reset.ejs');
});
app.post('/', function(req,res){

});

// Forgot Password
app.get('/forgot-password', function(req,res){
    res.render('forgot-passwd.ejs');
});
app.post('/', function(req,res){

});

// Profile
app.get('/profile', function(req,res){
    res.render('profile.ejs');
});
app.post('/', function(req, res){

});

// Menu
// var replaceTemplate = (temp, el) => {
//     var output =  temp.replace(/{%FOOD_NAME%}/g, el.name);
//     output = output.replace(/{%FOOD_DESCRIPTION%}/g, el.description);
//     return output;
// }
// var foodTemplate = fs.readFileSync('./views/partials/food.ejs');
// var foodAPI = fs.readFileSync('./food-api.json');


app.get('/food-menu', function(req,res){
    // food = JSON.parse(foodAPI);
    // dishes = food.map((el) => {
    //     return replaceTemplate(foodTemplate, el).join('');
    // });
    // console.log(dishes);
    var dishes = '';
    res.render('foodmenu.ejs', {dishes:dishes});
});

app.post('/search', function(req,res){
    
});

// Checkout
app.get('/checkout', function(req,res){
    res.render('checkout.ejs');
});
app.post('/order', function(req,res){
    // set timeout
    msg = `Your order was successfully placed. You will receive an email regarding your order confirmation shortly.`;
    res.render('confirmation.ejs', {msg});
});

// Cart 
app.get('/cart', function(req,res){
    res.render('cart.ejs');
});
app.post('/', function(req,res){

});

// Location
app.get('/find-location', (req, res) => {
    // var map = require('./private/Javascript/map.js');
    // var location = require('./private/Javascript/location.js')
    res.render('findLocation.ejs');
});
app.post('/location', (req, res) => {
    var location = req.body.location;

    res.render('location.ejs');
});

// Help
app.get('/help', (req, res) => {
    res.render('help.ejs');
});
app.post('/questions', (req, res) => {
    var query = req.body.query;
});

// Reviews
app.get('/testimonials', (req, res) => {
    res.render('reviews.ejs');
});

// Add Review
app.route('/review')
    .get((req, res) => {
        res.render('addReview.ejs');
    })
    .post((req, res) => {
        msg = `Your review was successfully posted. Thank you!`;
        // var reviewImage = req.body.review-img;
        // var reviewTitle = req.body.review-title;
        // var review = req.body.review;
        res.render('confirmation.ejs', {msg})
    });

// About Page
app.get('/about', (req, res) => {
    res.render('about');
});
app.post('', (req, res) => {

});

// Contact
app.route('/contact')
    .get((req, res) => {
        res.render('contact');
    })
    .post((req, res) => {
        msg = `We have received your request and will be contacting you soon.`;
        res.render('confirmation.ejs', {msg})
    });

app.listen(process.env.PORT, function(){
    console.log(`Server running on port ${process.env.PORT}.`);
});