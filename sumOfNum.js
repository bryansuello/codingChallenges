// Given two integers a and b, which can be positive or negative, find the sum of all
//  the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

let a = 1;
let b = 0;

function getSum(a, b) {
  let getNums = `${a}, ${b}`;
  getNums.split('');
  console.log(getNums);
  console.log(typeof getNums);
  let newArr = [];
  for (let i = a; i <= b; i++) {
    newArr.push(i);
  }
  console.log(newArr);
  return newArr.reduce((prev, curr) => prev + curr, 0);
}

console.log(getSum(a, b));
