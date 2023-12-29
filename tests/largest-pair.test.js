const largestPair = require('../problems/largest-pair')

describe('Largest Pair', () => {
	test('if "number" is emty should be return cero', () => {
		expect(largestPair([])).toBe(0)
	})
	// test('should be return the largest number', () => {
	//   expect(largestPair([0, 5, 10])).toBe(10)
	//   expect(largestPair([0, 10, 3])).toBe(10)
	// })
	// test('should be return the SECOND largest number', () => {
	//   expect(largestPair([0, 5, 10])).toBe(5)
	//   expect(largestPair([0, 10, 5])).toBe(5)
	//   // expect(largestPair([0, 3, 3])).toBe(3)
	// })
})
