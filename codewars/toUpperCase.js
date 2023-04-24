let string = prompt('Write anything: ');

const makeUpperCase = str => {
  return str.toUpperCase();
};

console.log(makeUpperCase(string));

// easiest solution:
// const makeUpperCase = str => str.toUpperCase();

// some chad's solution to the kata:
// function makeUpperCase(str) {
//   let output = '';

//   for (let i = 0; i < str.length; i++) {
//     const charCode = str[i].charCodeAt(0);
//     const chr = (charCode >= 97 && charCode <= 122) ? String.fromCharCode(charCode - 32) : str[i];

//     output += chr;
//   }

//   return output;
// }
