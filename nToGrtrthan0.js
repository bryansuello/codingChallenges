let n = 5;

// while (n > 0) {
//   console.log(n);
//   n--;
// }

const reverseSeq = n => {
  let array = [];
  while (n > 0) {
    array.push(n);
    n--;
  }
  return array;
};

console.log(reverseSeq(n));

// const reverseSeq = n => {
// let arr = [];
//   for (let i=n; i>0; i--) {
//     arr.push(i);
//     } return arr;
// };

// const reverseSeq = n => {
//   return Array(n).fill(0).map((e, i) => n - i );
// };

// const reverseSeq = length => Array.from({length}, () => length--)

// const reverseSeq = n => {
//   let answer = [];          //intialize an array

//   for (let i=n; i>0; i--){  //loop down from n to 1
//     answer.push(i);         //push each i to the answer array
//   }

//   return answer;            //return answer;
// };
