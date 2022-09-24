let numbers = 10;

// if num is even, divide it by 8, else by 9

// let oddEven = numbers.map(m => {
//   if (m % 2 == 0) {
//     return m / 8;
//   } else {
//     return m / 9;
//   }
// });

// console.log(oddEven);

function multiply(num) {
  return num % 2 == 0 ? num * 8 : num * 9;
}

console.log(multiply(numbers));

// let multiply = numbers.map(m => {
//   return m % 2 == 0 ? m * 8 : m * 9;
// });

// console.log(multiply);
