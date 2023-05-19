const countAndSum = require('../problems/count-and-sum')

describe('countAndSum', () => {
	test('should return the correct output', () => {
		expect(countAndSum(null)).toStrictEqual([])
		expect(countAndSum([])).toStrictEqual([])
		expect(countAndSum([1, 2, -1, -2])).toStrictEqual([2, -3])
	})
})
