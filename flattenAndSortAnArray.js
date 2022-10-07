// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

let arr = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];

('use strict');

function flattenAndSort(array) {
  let pota = array.join('');
  console.log(pota);
  console.log(typeof pota);
    let sort = pota.
    console.log(sort)
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    array[i] != [] ? newArray.push(array[i]) : null;
  }
  return newArray;
}

console.log(flattenAndSort(arr));
