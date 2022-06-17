const sum = require('../assets/js/calculate')

describe('sum', function() {
	test('should sum two numbers', function() {
		expect(sum(1, 2)).toBe(3)
	})
})
