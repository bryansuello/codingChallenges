// Given a non-negative integer, 3 for example, return a string with a murmur:
//  "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

let num = 3;

var countSheep = function (num) {
  let str = [];
  for (let i = 1; i <= num; i++) {
    str.push(`${i} sheep...`);
  }
  return str.join('');
};

console.log(countSheep(num));

// var countSheep = function (num){
//   let str = "";
//   for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
//   return str;
// }

// const countSheep = num => {
//   let val = '';
//   for (let i = 1; i <= num; i++) {
//     val += `${i} sheep...`;
//   }
//   return val;
// }

// countSheep=n=>[...Array(n).keys()].map(x=>`${x+1} sheep...`).join``
