// In this little assignment you are given a string of space separated numbers,
// and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

let num = '1 2 3 4 5';
console.log(num.length);

function highAndLow(numbers) {
  let num = numbers.replace(/ /g, '').replace(/NaN/g, '');
  let high = [];
  for (let i = 0; i < num.length; i++) {
    high.push(+num[i]);
  }
  console.log(high);
  let max = Math.max(...high).toString();
  let min = Math.min(...high).toString();
  return `"${max} ${min}"`;
}

console.log(highAndLow(num));
