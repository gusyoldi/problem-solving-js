const summation = require('../problems/summation')

describe('summation', () => {
	test('should return the correct total', () => {
		expect(summation(2)).toBe(3)
		expect(summation(8)).toBe(36)
	})

	test('should be return a number', () => {
		expect(summation('asdas')).toBe('Try a number')
		expect(summation(true)).toBe('Try a number')
		expect(summation([1, 2, 3])).toBe('Try a number')
		expect(summation({ prop: 'something' })).toBe('Try a number')
	})
})
