// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"

let str = '!Hi!';

function remove(string) {
  return string.endsWith('!') ? string.slice(0, -1) : string;
}

console.log(remove(str));

// const remove = s => s.replace(/!$/, '');

// function remove(s) {
//   return s.endsWith('!') ? s.slice(0, -1) : s;
// }

// function remove(s){
//   return s.endsWith("!") ? s.slice(0, -1) : s;
// }

// function remove(s) {
//   return (s).endsWith('!') ? (s).slice(0, -1) : (s)
// }
