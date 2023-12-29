'use strict'

// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

//TODO TEST
// function sumAll(arr) {
// 	let [first, second] = arr
// 	const orderedArr = first > second ? [second, first] : [first, second]

// 	let sum = 0
// 	for (let i = orderedArr[0]; i <= orderedArr[1]; i++) {
// 		sum += i
// 	}
//   return sum

// }

// console.log(sumAll([1, 4]))

//Agrupar

const arr = [
	{equipo: 'primero', goles: 2, jornada: 1},
	{equipo: 'segundo', goles: 6,  jornada: 1},
	{equipo: 'tercero', goles: 1, jornada: 2},
	{equipo: 'cuarto', goles: 4, jornada: 2}
]


// function agrupar(arr) {
	// const result = arr.group(({ jornada }) => jornada);
	// return result
// }

// console.log(agrupar(arr))
// console.log(result)

const groupedMap = new Map();
for (const el of arr) {
    if (!groupedMap.has(el.jornada)) {
        groupedMap.set(el.jornada, []);
    }
    groupedMap.get(el.jornada).push(el);
}

const arraysPorJornada = groupedMap.values()


console.log(arraysPorJornada)

// {
// 1 => [
// 	{ equipo: 'primero', goles: 2, jornada: 1 },
// 	{ equipo: 'segundo', goles: 6, jornada: 1 }
// ],
// 2 => [
// 	{ equipo: 'tercero', goles: 1, jornada: 2 },
// 	{ equipo: 'cuarto', goles: 4, jornada: 2 }
// ]
// }
