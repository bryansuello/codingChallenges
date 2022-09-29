// function that accepts an integer n and a string s as parameters, and returns a string
//  of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

let n = 10;
let s = 'hannah';

function repeatStr(n, s) {
  let newStr = [];
  for (let i = 0; i < n; i++) {
    newStr.push(s);
  }
  return newStr.join('');
}

console.log(repeatStr(n, s));

// function repeatStr (n, s) {
//   return s.repeat(n);
// }

// repeatStr = (n, s) => s.repeat(n)

// function repeatStr (n, s) {
// var str="";
// for(var i=0; i < n; i++)
//   str+=s;
//   return str;
// }
