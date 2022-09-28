// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many
// years he will be twice as old).
// The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

let father = 36;
let son = 7;

function twiceAsOld(dadYearsOld, sonYearsOld) {
  if (sonYearsOld * 2 > dadYearsOld) return sonYearsOld * 2 - dadYearsOld;
  let age = dadYearsOld - sonYearsOld * 2;
  return age > 0 ? age : age * age;
}

console.log(twiceAsOld(father, son));

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   return Math.abs(dadYearsOld - 2 * sonYearsOld);
// }

// const twiceAsOld = (d, s) => Math.abs(d - 2 * s);

// function twiceAsOld(a, b) {
//   return a>2*b ? a-2*b : 2*b-a;
// }

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   return Math.abs((sonYearsOld*2)-dadYearsOld)
// }
