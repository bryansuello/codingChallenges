// Simple, remove the spaces from the string, then return the resultant string.

let string = 'Bryan Suello and Hannah Suello';

function noSpace(x) {
  return x.replace(/ /g, '');
}

console.log(noSpace(string));

// function noSpace(x){
//   return x.replace(/\s/g, '');
// }

// function noSpace(x){return x.split(' ').join('')}

// let newStr = '';
// for(const char of x){
//     if(char != ' '){
//         newStr += char;
//     }
//     return newStr;
// }
