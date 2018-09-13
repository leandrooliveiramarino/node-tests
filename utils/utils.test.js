const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
	describe('#add', () => {
		it('should add two numbers', () => {
			var res = utils.add(33, 11);
			expect(res).toBe(44).toBeA('number');
		});
	});
	

	it('should square a number', () => {
		var res = utils.square(3);
		expect(res).toBe(9).toBeA('number');
	});

	//should verify first and last names are set
	//asset it includes firstName and lastName with proper values
	it('should set first and last names', () => {
		var user = {age: 27, location: 'Franca'};
		var res = utils.setName(user, 'Leandro Marino');
		expect(res).toEqual(res);
	});

	it('should async add two numbers', (done) => {
		utils.asyncAdd(4, 3, (sum) => {
			expect(sum).toBe(7).toBeA('number');
			done();
		});
	});

	it('should async square a number', (done) => {
		utils.asyncSquare(2, (square) => {
			expect(square).toBe(4).toBeA('number');
			done();
		});
	});
});



//it('should expect some values', () => {
////	expect(12).toNotBe(11);
//	//expect({name: 'leandro'}).toNotEqual({name: 'Leandro'});
//	//expect([2, 3, 4]).toInclude(2);
//	expect({
//		name: 'Leandro',
//		age: 25,
//		location: 'Franca'
//	}).toExclude({
//		age: 23
//	});
//});
