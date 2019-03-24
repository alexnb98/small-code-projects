// my code
const binaryArrayToNumber = (arr) => {
	return parseInt(arr.join(''), 2);
};

console.log(binaryArrayToNumber([ 1, 1, 1, 1 ]));

// awesome solution
// function binaryArrayToNumber(arr) {
// 	return arr.reduce((a, b) => (a << 1) | b);
// }
