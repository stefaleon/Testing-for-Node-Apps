const expect = require('expect');
const utils = require('./utils');


it('should add two numbers', () => {
	var res = utils.add(33, 11);
	expect(res).toBe(44).toBeA('number');	
});

it('should square a number', () => {
	var res = utils.square(9);
	expect(res).toBe(81).toBeA('number');
});

it('should cube a number', () => {
	var res = utils.cube(3);
	expect(res).toBe(27).toBeA('number');
});

it('should expect numbers to be different', () => {
	expect(13).toNotBe(42);
});

it('should expect objects to be different', () => {
	// same values but different ojects
	expect({name: 'Batmanito'}).toNotBe({name: 'Batmanito'});
});

it('should expect objects to be equal', () => {
	// same values so equal ojects
	expect({name: 'Batmanito'}).toEqual({name: 'Batmanito'});
});

it('should expect objects not to be equal', () => {
	// difference in first letter capitalization
	expect({name: 'Batmanito'}).toNotEqual({name: 'batmanito'});
});

it('should expect an array to include an element', () => {
	// difference in first letter capitalization
	expect([1, 2, 3]).toInclude(2);
});

it('should expect an array not to include an element', () => {
	// difference in first letter capitalization
	expect([1, 2, 3]).toExclude(4);
});

it('should expect an object to include a property', () => {
	// difference in first letter capitalization
	expect({
		name: 'Batmanito',
		hax: 99,
		occupation: 'fernei treno',
	}).toInclude({
		hax: 99
	});
});


it('should expect an object not to include a property', () => {
	// difference in first letter capitalization
	expect({
		name: 'Batmanito',
		hax: 99,
		occupation: 'fernei treno',
	}).toExclude({
		hax: 100
	});
});