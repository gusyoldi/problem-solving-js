const getGrade = require('../problems/get-grade')

//Hecho con TDD.

describe('getGrade', () => {
	test('should return "A" ', () => {
		expect(getGrade(100, 100, 100)).toBe('A')
		expect(getGrade(90, 90, 90)).toBe('A')
	})
	test('should return "B" ', () => {
		expect(getGrade(90, 90, 89)).toBe('B')
		expect(getGrade(89, 89, 89)).toBe('B')
		expect(getGrade(80, 80, 80)).toBe('B')
	})
	test('should return "C" ', () => {
		expect(getGrade(79, 79, 79)).toBe('C')
		expect(getGrade(70, 70, 70)).toBe('C')
	})
	test('should return "D" ', () => {
		expect(getGrade(69, 69, 69)).toBe('D')
		expect(getGrade(60, 60, 60)).toBe('D')
	})
	test('should return "F" ', () => {
		expect(getGrade(59, 59, 59)).toBe('F')
		expect(getGrade(0, 0, 0)).toBe('F')
	})
})
