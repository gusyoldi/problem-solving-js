const feast = require('../problems/beast-feast')

describe('Feast', () => {})

describe('summation', () => {
	test('should return TRUE', () => {
		expect(feast('great blue heron', 'garlic naan')).toBe(true)
		expect(feast('chickadee', 'chocolate cake')).toBe(true)
	})
	test('should return FALSE', () => {
		expect(feast('mono', 'banana')).toBe(false)
		expect(feast('león', 'sandía')).toBe(false)
	})
})
