// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

let a = 1;
let b = 9;

function between(a, b) {
  let newArr = [];
  for (let i = a; i <= b; i++) {
    newArr.push(i);
  }
  return newArr;
}

console.log(between(a, b));

// const between = (a, b) => Array.from(new Array(b-a+1), (_, i) => a + i);

// const between = (a, b) => Array.from(new Array(b-a+1), (_, i) => a + i);

// const between = (a, b) =>
//   [...Array(b - a + 1)].map((_, idx) => idx + a);
