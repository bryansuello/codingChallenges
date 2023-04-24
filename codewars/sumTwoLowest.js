let num = [1, 3, 4, 5, 99, 2];

function sumTwoSmallestNumbers(numbers) {
  let res = numbers.sort((a, b) => a - b).slice(0, 2);
  let sum = res[0] + res[1];
  return sum;
}

console.log(sumTwoSmallestNumbers(num));

// function sumTwoSmallestNumbers(numbers){
//   numbers = numbers.sort(function(a, b){return a - b; });
//   return numbers[0] + numbers[1];
// };

// function sumTwoSmallestNumbers(numbers) {
//   numbers.sort((a,b) => a - b);
//   return numbers[0] + numbers[1];
// };

// function sumTwoSmallestNumbers(numbers) {
//   var [ a, b ] = numbers.sort((a, b) => a - b)
//   return a + b
// }
