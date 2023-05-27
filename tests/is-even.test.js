const testEven = require('../problems/is-even')

describe('isEven', () => {
	test('Receives a number', () => {
		expect(testEven('a')).toBe('Try with a number!')
	})
	test('Should return TRUE', () => {
		expect(testEven(2)).toBe(true)
		expect(testEven(-2)).toBe(true)
	})
	test('Should return FALSE', () => {
		expect(testEven(0.5)).toBe(false)
		expect(testEven(3.1)).toBe(false)
	})
})
