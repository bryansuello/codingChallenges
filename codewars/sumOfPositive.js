// You get an array of numbers, return the sum of all of the positives ones.
//
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Note: if there is nothing to sum, the sum is default to 0.

let arr = [1, -4, 7, 12];
console.log(arr.length);

function positiveSum(arr) {
  return arr.filter((f) => f > 0).reduce((prev, curr) => prev + curr);
}

console.log(positiveSum(arr));
