'use strict'

// DESCRIPTION:

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):
// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

function summation(num) {
	if (typeof num !== 'number') return 'Try a number'

	let result = 0
	for (let i = 1; i <= num; i++) {
		result += i
	}
	return result
}

module.exports = summation
