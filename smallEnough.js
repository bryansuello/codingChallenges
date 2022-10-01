// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

let a = [1, 2, 3, 4, 5, 9];
let limit = 5;

function smallEnough(a, limit) {
  let check = a.map(num => (num <= limit ? true : false));
  return check.includes(false) ? false : true;
}

console.log(smallEnough(a, limit));

// function smallEnough(a, limit){
//   return Math.max(...a) <= limit
// }

// smallEnough = (a, l) => a.every(e => e <= l)

// function smallEnough(a, limit){
//   return a.every(x => x <= limit);
// }

// function smallEnough(a, limit){
//   for(var i of a){
//     if(i > limit)
//       return false;
//   }
//   return true;
// }
