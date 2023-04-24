// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

let arr = 1912;

function pipeFix(numbers) {
  let min = numbers.toString().slice(0, 1);
  let max = numbers.toString().slice(-1);
  console.log(min);
  console.log(max);
  let newStr = [];
  for (let i = +min; i <= max; i++) {
    newStr.push(i);
  }
  return newStr;
}

console.log(pipeFix(arr));
