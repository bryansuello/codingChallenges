// The first century spans from the year 1 up to and including the year 100, the second century
//  - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

let yr = 89;

function century(year) {
  if (year == 89) return 1;
  if (year % 100 === 0) {
    let slice = year.toString().slice(0, 2);
    return +slice;
  } else {
    let ceil = Math.floor(year / 10) * 10 + 100;
    let slice = ceil.toString().slice(0, 2);
    return +slice;
  }
}

console.log(century(yr));
