// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

let arr = [17, 12, 15];

function gimme(triplet) {
  //sort rearranges the original array. use map first to copy the original
  let newArr = triplet.map(m => m);
  console.log(newArr);
  let mid = newArr.sort((a, b) => a - b).slice(1, 2);
  let num = Number(mid);
  console.log(mid);
  console.log(num);
  console.log(triplet);
  let index = triplet.indexOf(num);
  return index;
}

console.log(gimme(arr));

// function gimme(a) {
//   return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
// }

// const gimme = function (arr) {
//   return arr.indexOf([...arr].sort((x, y) => x > y)[1]);
// };

// var gimme = function (inputArray) {
//   return inputArray.indexOf(inputArray.slice(0).sort(function(a,b) { return a-b; })[1]);
// };
