// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

let string = 'This website is for losers LOL!';

function disemvowel(str) {
  return str
    .split('')
    .filter(m => m != 'a')
    .filter(m => m != 'e')
    .filter(m => m != 'i')
    .filter(m => m != 'o')
    .filter(m => m != 'u')
    .filter(m => m != 'A')
    .filter(m => m != 'E')
    .filter(m => m != 'I')
    .filter(m => m != 'O')
    .filter(m => m != 'U')
    .join('');
}

console.log(disemvowel(string));

// regex

// function disemvowel(str) {
//   return str.replace(/[aeiou]/gi, '');
// }

// disemvowel = str => str.replace(/[aeiou]/gi,'');

// function disemvowel(str) {
//   return (str || "").replace(/[aeiou]/gi, "");
// }

// const vowels = 'aeiou';
// function disemvowel(str) {
//   return str
//     .split('')
//     .filter(letter => !vowels.includes(letter.toLowerCase()))
//     .join('');
// }

// function disemvowel(str) {
//   var vowels = ['a', 'e', 'i', 'o', 'u'];
//   return str.split('').filter(function(el) {
//     return vowels.indexOf(el.toLowerCase()) == -1;
//   }).join('');
// }
