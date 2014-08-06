var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var User = require("./models/user.js")

mongoose.connect('mongodb://localhost/wingzingly');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
	res.render('index');
});

app.post("/signup", function (req, res) {
	

	var user = new User({
		email: req.body.email
	})


	// instance method
	user.save();

	res.send("You have signed up for Wingzingly!");
})

app.get("/viewusers", function(req, res) {

	// find all documents within the user collections
	// static method
	// first argument of callback:  error object
	// second argument of callback: results
	User.find({}, function(error, users) {

		if(error) {
			res.send(500, "Error accessing users collection.")
		}
		else {
			res.send(users)
		}

	})

`})



var server = app.listen(3183, function() {
	console.log('Express server listening on port ' + server.address().port);
});
