// our team is writing a fancy new text editor and you've been tasked with implementing
// the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

let arr = ['a', 'b', 'c', 'd'];

var number = function (array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(`${i + 1}: ${array[i]}`);
  }
  return newArr;
};

console.log(number(arr));

// var number = function(array) {
//   return array.map(function (line, index) {
//     return (index + 1) + ": " + line;
//   });
// }

// let number = (a) => a.map((v, i) => `${i + 1}: ${v}`)

// const number = array => array.map((n, i) => `${i + 1}: ${n}`);

// var number = function(arr) {
// var newArr = [];
//   if (arr.length === 0) {
//     return [];
//   } else {
//     for (var i = 0, len = arr.length; i < len; i += 1) {
//       newArr.push((i + 1) + ': ' + arr[i]);
//     }
//   }
//   return newArr;
// }
