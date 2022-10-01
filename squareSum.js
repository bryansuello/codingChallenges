// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

let arr = [1, 2, 2];

function squareSum(numbers) {
  return numbers.map(m => m * m).reduce((prev, curr) => prev + curr, 0); //set reduce initial value to avoid error
}

console.log(squareSum(arr));

// function squareSum(numbers){
//   return numbers.reduce(function(sum, n){
//     return (n*n) + sum;
//   }, 0)
// }
