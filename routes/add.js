var data = require("../data.json");

exports.addFriend = function(req, res) {    
	var new_friend = {
			"name": req.query.name,
			"description": req.query.description,
			"imageURL": "http://lorempixel.com/400/400/people"			
	};
	console.log(new_friend);
	data["friends"].push(new_friend);
	res.render('add', data);
 }