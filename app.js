// Resources 
const express = require('express');
const mysql = require('mysql');
// const mysql = require(__dirname + '/private/Javascript/config.js');
const bodyParser = require('body-parser');
const session = require('express-session');

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
app.use(express.static('public'));


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
    // const connection = require('connection');
    // const connection = mysql.createConnection({
    //     host: process.env.HOST,
    //     user: process.env.USER,
    //     password: process.env.PASSWORD,
    //     database: process.env.DATABASE
    // });
    // var userName = req.body.userName;
    // var password = req.body.password;
    
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

// Menu
app.get('/food-menu', function(req,res){
    var dishes = [
        {"name": 'Egg', "description": "Some quick example text to build on the card title and make up the bulk of the card's content.", "image": "https://www.google.com/cat"},
        {"name": 'Fish', "description": "Some quick example text to build on the card title and make up the bulk of the card's content.", "image": "https://www.google.com/cat"},
        {"name": 'Onions', "description": "Some quick example text to build on the card title and make up the bulk of the card's content.", "image": "https://www.google.com/cat"}];
    
    res.render('foodmenu.ejs', {dishes:dishes});
});
app.post('/orders', function(req,res){

});

// Checkout
app.get('/checkout', function(req,res){
    res.render('checkout.ejs');
});
app.post('/order', function(req,res){
    // set timeout
    res.render('order-success.ejs');
});

// Cart 
app.get('/cart', function(req,res){
    res.render('cart.ejs');
});
app.post('/', function(req,res){

});

// Location
app.get('/location', (req, res) => {
    res.render('location');
});
app.post('', (req, res) => {

});

// Help
app.get('/help', (req, res) => {
    res.render('help.ejs');
});
app.post('/questions', (req, res) => {
    var query = req.body.query;
});

// Reviews
app.get('/reviews', (req, res) => {
    res.render('reviews.ejs');
});
app.post('/', (req, res) => {
    
});

// About Page
app.get('/about', (req, res) => {
    res.render('about');
});
app.post('', (req, res) => {

});

// Contact
app.get('/contact', (req, res) => {
    res.render('contact');
});
app.post('', (req, res) => {

});

app.listen(process.env.PORT, function(){
    console.log(`Server running on port ${process.env.PORT}.`);
});