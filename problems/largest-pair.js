// DESCRIPTION:
// Rick wants a faster way to get the product of the largest pair in an array. Your task is to create a performant solution to find the product of the largest two integers in a unique array of positive numbers.
// All inputs will be valid.
// Passing [2, 6, 3] should return 18, the product of [6, 3].

// Disclaimer: only accepts solutions that are faster than his, which has a running time O(nlogn).

// max_product([2, 1, 5, 0, 4, 3])              # => 20
// max_product([7, 8, 9])                       # => 72
// max_product([33, 231, 454, 11, 9, 99, 57])   # => 104874

// console.log('LARGEST PAIR')

//1. Find the largest one.
//1.2 Push
//2. Find the second largest one.
//2.1 Save the numbers in a variable
//3. Multiply the numbers

function largestPair(numbers) {
	let largestOne = 0
	let secondLargestOne = 0
	numbers.forEach((curr) => {
		if (curr >= largestOne) {
      secondLargestOne = largestOne
			largestOne = curr
		} 
	})

	return secondLargestOne

	//Largest one
	// const getMax = (a, b) => Math.max(a, b);
	//  const result =  numbers.reduce(getMax, 0);
	//  return result
}

// console.log(largestPair([1, 6, 3, 60, 0, 50, 19]))

module.exports = largestPair
