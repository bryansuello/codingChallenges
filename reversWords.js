let string = 'THis is an example!';

function reverseWords(str) {
  let split = str.split(' ');
  split = split.map(m => {
    return m.split('').reverse().join('');
  });
  return split.join(' ');
}

console.log(reverseWords(string));

// function reverseWords(str) {
//   return str.split(' ').map(function(word){
//     return word.split('').reverse().join('');
//   }).join(' ');
// }

// function reverseWords(str) {
//   // Go for it
//   //split words into seperate arrays
//   return str.split("").reverse().join("").split(" ").reverse().join(" ");
// }

// function reverseWords(str) {
//   return str.split(' ').map( str => str.split('').reverse().join('') ).join(' ');
// }

// function reverseWords(str) {
//   return str.split(" ").map(x=>x.split("").reverse().join("")).join(" ");
// }
