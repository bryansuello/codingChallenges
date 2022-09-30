// Your task is to sort a given string. Each word in the string will contain a single number.
//  This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will
//  only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

let str = 'is2 Thi1s T4est 3a';

function order(words) {
  let split = words.split(' ');
  console.log(split);
  let sort = [];
  for (let i = 1; i <= split.length; i++) {
    sort.push(
      split.filter((f) => {
        return f.includes(i);
      })
    );
  }
  let string = sort.join(' ');
  return string;
}

console.log(order(str));

// function order(words){
//   return words.split(' ').sort(function(a, b){
//       return a.match(/\d/) - b.match(/\d/);
//    }).join(' ');
// }

// function order(words){
//   var array = words.split(' ');
//   var sortedArray = [];
//   for(i = 0; i <= array.length; i++) {
//     for(j = 0; j < array.length; j++) {
//       if(array[j].indexOf(i) >= 0) {
//         sortedArray.push(array[j]);
//       }
//     }
//   }
//   return sortedArray.join(' ');
// }

// var reg = /\d/;
// function order(words){
//   return words.split(' ').sort(comparator).join(' ');
// }
// function comparator(word, nextWord) {
//   return +word.match(reg) - +nextWord.match(reg)
// }

// function order(words) {
//   return words.split(' ').sort((wordA, wordB) => wordA.match(/\d+/) > wordB.match(/\d+/)).join(' ')
// }
