function pigIt(str) {
	const arr = str.split(' ');
	const res = arr.map((word) => {
		if (word.match(/\W/)) return word;
		let rest = word.substring(1);
		return rest + word[0] + 'ay';
	});
	return res.join(' ');
}

console.log('return: ', pigIt('Pig latin is cool !'));

// function pigIt(str) {
// 	return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
// }