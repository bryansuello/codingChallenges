// It's pretty straightforward. Your goal is to create a function that removes the first
//  and last characters of a string. You're given one parameter, the original string. You don't
//   have to worry with strings with less than two characters.

let sting = 'bran';

function removeChar(str) {
  let removed = str.slice(1).slice(0, -1);
  return removed;
}

console.log(removeChar(sting));

// function removeChar(str) {
//   return str.slice(1, -1);
// }

// const removeChar = str => str.slice(1,-1)

// function removeChar(str){
//  return str.substring(1, str.length-1);
// };
