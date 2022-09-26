// given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

let num = -34.123123123;

function opposite(number) {
  if (number < 0) {
    return -number;
  } else {
    return number - number * 2;
  }
}

console.log(opposite(num));

// function opposite(number) {
//   return(-number);
// }

// const opposite = number => -number;
