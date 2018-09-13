const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
	var db = {
		saveUser: expect.createSpy(),
		test: expect.createSpy()
	};
		app.__set__('db', db);

	it('should call the spy correcly', () => {
		var spy = expect.createSpy();
		spy('Leandro', 25);
		expect(spy).toHaveBeenCalledWith('Leandro', 25);
	});
	it('should call saveUser with user object', () => {
		var email = 'leandro@codebit.com.br';
		var password = '123abc';

		app.handleSignup(email, password);
		expect(db.saveUser).toHaveBeenCalledWith({email, password});
	});
	it('should call test', () => {
		var email = 'leandro@codebit.com.br';
		var password = '123abc';

		app.handleSignup(email, password);
		expect(db.test).toHaveBeenCalled();
	});
});
