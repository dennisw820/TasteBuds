// Resources
const express = require('express');
const router = express.Router();
const menuController = require('../controllers/controller');

// Landing Route
router.route('/')
    .get(function(req, res){
        res.render('index.ejs');
    })
    .post(function(req,res){

    });

// Signin Route
router.route('/signin')
    .get(function(req,res){
        res.render('signin.ejs');
    })
    .post(function(req,res, length){
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
router.route('/welcome')
    .get(function(req, res) {
        res.render('welcome.ejs');
    });

// Signup Route ***
router.route('/signup')
    .get(function(req,res){
        res.render('signup.ejs');
    })
    .post(function(req,res){
        var userName = req.body.userName;
        var email = req.body.email;
        var password = req.body.password;
        var password2 = req.body.password2;
        var ackw = req.body.ackw;
    });

// Password Reset
router.route('/password-reset')
    .get(function(req,res){
        res.render('password-reset.ejs');
    })
    .post(function(req,res){

    });

// Forgot Password
router.route('/forgot-password')
    .get(function(req,res){
        res.render('forgot-passwd.ejs');
    })
    .post(function(req,res){

    });

// Profile
router.route('/profile')
    .get(function(req,res){
        res.render('profile.ejs');
    })
    .post(function(req, res){

    });

// Menu
// var replaceTemplate = (temp, el) => {
//     var output =  temp.replace(/{%FOOD_NAME%}/g, el.name);
//     output = output.replace(/{%FOOD_DESCRIPTION%}/g, el.description);
//     return output;
// }
// var foodTemplate = fs.readFileSync('./views/partials/food.ejs');
// var foodAPI = fs.readFileSync('./food-api.json');


router.route('/food-menu')
    .get(function(req,res){
        // food = JSON.parse(foodAPI);
        // dishes = food.map((el) => {
        //     return replaceTemplate(foodTemplate, el).join('');
        // });
        // console.log(dishes);
        var dishes = '';
        res.render('foodmenu.ejs', {dishes:dishes});
    })
    .post(function(req,res){
        console.log('Request submitted successfully!')
    });

// Checkout ***
router.route('/checkout')
    .get('/checkout', function(req,res){
        res.render('checkout.ejs');
    })
    .post('/order', function(req,res){
        // set timeout
        msg = `Your order was successfully placed. You will receive an email regarding your order confirmation shortly.`;
        res.render('confirmation.ejs', {msg});
    });

// Cart 
router.route('/cart')
    .get(function(req,res){
        res.render('cart.ejs');
    })
    .post(function(req,res){

    });

// Location
router.route('/location')
    .get((req, res) => {
        // var map = require('./private/Javascript/map.js');
        // var location = require('./private/Javascript/location.js')
        res.render('findLocation.ejs');
    })
    .post((req, res) => {
        var location = req.body.location;

        res.render('location.ejs');
    });

// Help
router.route('/help')
    .get((req, res) => {
        res.render('help.ejs');
    })
    .post((req, res) => {
        var query = req.body.query;
    });

// Reviews
router.route('/testimonials')
    .get((req, res) => {
        res.render('reviews.ejs');
    })
    

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
router.route('/about')
    .get((req, res) => {
        res.render('about.ejs');
    });


// Contact
var msg = '';
router.route('/contact')
    .get((req, res) => {
        res.render('contact.ejs');
    })
    .post((req, res) => {
        msg = `We have received your request and will be contacting you soon.`;
        res.render('confirmation.ejs', {msg});
    });

//  Export Router 
module.exports = router;