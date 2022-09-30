// given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

let string = 'Madesafecoin bitcoin';

function findShort(s) {
  let findNum = s
    .split(' ')
    .map(string => string.length)
    .sort((a, b) => a - b)
    .slice(0, 1)
    .join();
  return parseInt(findNum);
}

console.log(findShort(string));

// function findShort(s){
//   return Math.min.apply(null, s.split(' ').map(w => w.length));
// }

// function findShort(s){
//     return Math.min(...s.split(" ").map (s => s.length));
// }

// const findShort = (s) => s
//   .split(' ')
//   .sort((a, b) => b.length - a.length)
//   .pop()
//   .length;

// function findShort(s) {
//   return s.split(' ').reduce((min, word) => Math.min(min, word.length), Infinity);
// }
