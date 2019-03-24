// My solution

function findNextSquare(sq) {
	// Return the next square if sq if a perfect square, -1 otherwise
	const sqr = Math.sqrt(sq);
	if (Number.isInteger(sqr)) {
		return Math.pow(sqr + 1, 2);
	}
	return -1;
}

// Others
// function findNextSquare(sq) {
// 	let r = Math.sqrt(sq);
// 	return r % 1 ? -1 : ++r * r;
// }

console.log(findNextSquare(121));
