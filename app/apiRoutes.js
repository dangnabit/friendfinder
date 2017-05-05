let friends  = require('../data/friends.js');
const router = require('express').Router();

function findBestFriend(user){
	let scoreDifferentials = [];

	for (var i = 0; i < friends.length; i++) {
		let difference = 0;
		for (var j = 0; j < friends[i].scores.length; j++) {
			difference += Math.abs(user.score[j] - friends[i].scores[j]);
		}
		scoreDifferentials.push(difference);
	}
	console.log(scoreDifferentials);
}






router.get('/api/friends', function(req, res){
	res.json(friends);
});

router.post('/api/friends', function(req, res){
	let topFriend = {};
	let newUser = req.body.newUser;

	console.log(newUser);

	findBestFriend(newUser);

});



module.exports = router;