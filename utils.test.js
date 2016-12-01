const utils = require('./utils');

it('should add two numbers', () => {
	var res = utils.add(33, 11);
	if (res !== 44) {
		throw new Error(`Expected 44, got ${res}.`);	
	}	
});

it('should square a number', () => {
	var res = utils.square(9);
	if (res !== 81) {
		throw new Error(`Expected 81, got ${res}.`);	
	}	
});

it('should cube a number', () => {
	var res = utils.cube(3);
	if (res !== 27) {
		throw new Error(`Expected 27, got ${res}.`);	
	}	
});