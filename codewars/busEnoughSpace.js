const cap = 50;
let on = 30;
let wait = 30;

function enough(cap, on, wait) {
  //   if (on + wait <= cap) {
  //     return 0;
  //   } else {
  //     return on + wait - cap;
  //   }
  return on + wait <= cap ? 0 : on + wait - cap;
}

console.log(enough(cap, on, wait));

// function enough(cap, on, wait) {
//   return Math.max(wait + on - cap, 0);
// }

// function enough(cap, on, wait) {
//   return (on+wait > cap) ? on+wait-cap : 0;
// }
