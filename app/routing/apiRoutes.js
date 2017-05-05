let friends  = require('../data/friends.js');
const router = require('express').Router();

router.get('/api/friends', function(req, res){
	res.json(friends);
});

router.post('/api/friends', function(req, res){
	console.log('Works');
});

module.exports = router;