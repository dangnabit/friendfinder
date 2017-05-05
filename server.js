const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

let friends = require('./app/data/friends.js');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.text());

app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

app.use(express.static('public'));

app.use(require('./app/routing/apiRoutes.js'));
app.use(require('./app/routing/htmlRoutes.js'));

app.listen(PORT, function(){
	console.log('Server running on port: ' + PORT);
});
