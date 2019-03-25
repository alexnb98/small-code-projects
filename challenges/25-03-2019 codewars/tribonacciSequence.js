// [1,1,1], n = 10
// [1,1,1, 1+1+1=3] -> [1,1,1,3]
// const c = 0
// arr[c] + arr[c + 1] + arr[c + 2] c++
function tribonacci(signature, n) {
	for (var c = 0, arr = []; c < n; c++) {
		signature.push(signature[c] + signature[c + 1] + signature[c + 2]);
		arr.push(signature[c]);
	}
	return arr;
}

console.log(tribonacci([ 1, 2, 3 ], 10));
