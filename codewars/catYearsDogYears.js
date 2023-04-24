// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

let years = 9;

var humanYearsCatYearsDogYears = function (humanYears) {
  let output;
  if (humanYears == 1) {
    output = [humanYears, 15, 15];
  } else if (humanYears == 2) {
    output = [humanYears, 24, 24];
  } else {
    output = [humanYears, 24 + (humanYears - 2) * 4, 24 + (humanYears - 2) * 5];
  }
  return output;
};

console.log(humanYearsCatYearsDogYears(years));

// var humanYearsCatYearsDogYears = function(y) {
//   if (y == 1) return [1, 15, 15]
//   if (y == 2) return [2, 24, 24]
//   return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
// }

// const humanYearsCatYearsDogYears = humanYears => [
//   humanYears,
//   ( humanYears - 1 ? 16 : 11 ) + 4 * humanYears,
//   ( humanYears - 1 ? 14 : 10 ) + 5 * humanYears,
// ];
