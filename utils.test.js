const expect = require('expect');
const utils = require('./utils');


it('should should set first and last name', () => {
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
