// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

let string = 'ultr53o?n';

function reverseLetter(str) {
  return str
    .replace(/[^a-z]/g, '')
    .split('')
    .reverse()
    .join('');
}

console.log(reverseLetter(string));

// reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');

// const reverseLetter = str => str.match(/[a-z]/g).reverse().join('');

// function reverseLetter(str) {
//   return str.split('')
//             .reverse()
//             .filter(val => /[a-zA-Z]/.test(val))
//             .join('');
// }

// function reverseLetter(str) {
//   return [...str].reduce((s, c) => /[A-Z]/i.test(c) ? c + s : s, "")
// }
