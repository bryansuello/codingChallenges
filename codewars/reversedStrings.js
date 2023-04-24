// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

let string = 'world';

function solution(str) {
  var newStr = str.split('').reverse().join('');
  return newStr;
}

console.log(solution(string));

// const solution = str => str.split('').reverse().join('');
