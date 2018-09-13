const express = require('express');

var app = express();

app.get('/', (req, res) => {
	res.status(200).send({
		error: 'Page not found.',
		name: 'Todo App v1.0'
	});
});

// GET /users
// Give users a name property and age property

app.get('/users', (req, res) => {
	res.send([{
		name: 'Mike',
		age: 27
	}, {
		name: 'Leandro',
		age: 27
	}, {
		name: 'Jen',
		age: 26
	}]);
});

app.listen(80);

module.exports.app = app;
