let n = 3;
let m = 5;

// function paperwork(n, m) {
//   if (n < 0 || m < 0) {
//     return 0;
//   } else {
//     return n * m;
//   }
// }

function paperwork(n, m) {
  return n < 0 || m < 0 ? 0 : n * m;
}

console.log(paperwork(n, m));
