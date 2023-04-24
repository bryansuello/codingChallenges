// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

let string = 'Hello World';
function doubleChar(str) {
  return str
    .toString()
    .split('')
    .map(m => m + m)
    .join('');
}

console.log(doubleChar(string));

// const doubleChar = (str) => str.split("").map(c => c + c).join("");

// function doubleChar(str) {
//   var word = '';
//   for (var i = 0; i < str.length; i++){
//     word = word + str[i] + str[i];
//   };
//   return word;
// };
