const expect = require('expect');
const utils = require('./utils');


it('it should add two numbers', () => {
	var sum = utils.add(13, 29);
	expect(sum).toBe(42).toBeA('number');			
});

it('it should async add two numbers', (done) => {
	utils.asyncAdd(13, 29, (sum) => {
		expect(sum).toBe(42).toBeA('number');
		done();
	});
});


it('should set first and last name', () => {
	var user = { location: 'Bikini Bottom' };
	var res = utils.setName(user, 'Spongebob Squarepants');
	// res equals user
	expect(res).toEqual(user);	
	// firstName should be 'Spongebob' and lastName should be 'Squarepants'
	expect(res).toInclude({
		firstName: 'Spongebob',
		lastName: 'Squarepants'
	});
});


it('should async set first and last name', (done) => {
	var user = { location: 'Bikini Bottom' };
	utils.asyncSetName(user, 'Spongebob Squarepants', (res) =>{
		// res equals user
		expect(res).toEqual(user);	
		// firstName should be 'Spongebob' and lastName should be 'Squarepants'
		expect(res).toInclude({
			firstName: 'Spongebob',
			lastName: 'Squarepants'
		});
		done();
	});	
});

