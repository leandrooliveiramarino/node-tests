var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
	//Check if the email already exists
	db.saveUser({email, password});
	db.test();
	//Send the welcome email
}
