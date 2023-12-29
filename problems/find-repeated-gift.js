const gifts = [1, 4, 3, 4, 4, 5, 6, 6]
//Recorrer el array
//Guardar el gift actual
//Con un filter, crear un array que contenga todos los numeros que coincidan con el gift actual.
//Si el length del array es mayor a 1 ==> devolver el gift actual
//Si el length del array es menor a 2 ==> volver a arrancar el ciclo

function findFirstRepeated(gifts) {
	for (i = 0; i <= gifts.length; i++) {
		let currGift = gifts[i]
		let filteredGifts = gifts.filter((gift) => gift === currGift)

		if (filteredGifts.length > 1) return currGift

		if (filteredGifts.length < 2) continue
	}

	return repeatedGift
}

module.exports = findFirstRepeated
