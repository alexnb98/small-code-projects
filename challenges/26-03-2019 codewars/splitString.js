// function solution(str) {
//     const res = str.match(/.{1,2}/g).map(e => e.length === 1 ? e + '_' : e);
//     return res
// }

function solution(str) {
    return (str + "_").match(/../g);
}

console.log('return: ', solution('abcde'))