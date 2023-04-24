// In this little assignment you are given a string of space separated numbers,
// and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// let num = '1 2 3 4 5';
// let num = '1 9 3 4 -5';
let num = [
  '4',
  '5',
  '29',
  '54',
  '4',
  '0',
  '-214',
  '542',
  '-64',
  '1',
  '-3',
  '6',
  '-6',
];
console.log(num.length);
console.log(typeof num);

function highAndLow(numbers) {
  const arr = numbers.split(' ');
  let lowest = +arr[0];
  let highest = +arr[0];
  for (let n of arr) {
    if (+n < lowest) lowest = +n;
    if (+n > highest) highest = +n;
  }
  return `${highest} ${lowest}`;
}

console.log(highAndLow(num));

// OLD SOLUTION:
// if (typeof numbers == 'string') {
//   let split = numbers.split(' ');
//   console.log(split);
//   let newNum = [];
//   for (let i = 0; i < split.length; i++) {
//     split[i].match(/\d/) ? newNum.push(Number(split[i])) : null;
//   }
//   console.log(newNum);
//   let out = `${Math.max(...newNum)} ${Math.min(...newNum)}`;
//   console.log(out);
//   return newNum;
// } else if (typeof numbers == 'object') {
//   console.log(numbers);
//   let max = Math.max(...numbers);
//   let min = Math.min(...numbers);
//   let out = `${max} ${min}`;
//   return out;
// } else {
//   return 'bokya';
// }

// others:
// function highAndLow(numbers){
//   numbers = numbers.split(' ').map(Number);
//   return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
// }

// function highAndLow(numbers){
//   numbers = numbers.split(' ');
//   return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
// }

// function highAndLow(numbers) {
//   var arr = numbers.split(" ");
//   return Math.max.apply(null, arr) + ' ' + Math.min.apply(null, arr);
// }

// function highAndLow(numbers){
//   let arr = numbers.split(' ').map(Number);
//   return Math.max(...arr) + ' ' + Math.min(...arr);
// }
