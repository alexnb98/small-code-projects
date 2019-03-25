function narcissistic(value) {
	const valArr = value.toString().split('');
	const res = valArr.reduce((acc, cur) => acc + Math.pow(cur, valArr.length), 0);
	return res === value;
}

console.log(narcissistic(163));

// Others
// function narcissistic(value) {
// 	var power = ('' + value).length;
// 	return [...('' + value)].reduce((a, b) => a + Math.pow(b, power), 0) === value;
// }
