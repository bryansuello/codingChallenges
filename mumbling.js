// This time no story, no theory. The examples below show you how to write function
// accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

let str = 'RqaEzty';

function accum(s) {
  s = s.split('');
  console.log(s);
  let map = s.map((m, index) => {
    return m.repeat(index + 1);
  });
  console.log(map);
  let capitalize = map.map(m => {
    return m.charAt(0).toUpperCase() + m.slice(1).toLowerCase();
  });
  return capitalize.join('-');
}

console.log(accum(str));

// function accum(s) {
//   return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }

// function accum(s) {
//   return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
// }

// function accum(str) {
//   var letters = str.split('');
//   var result = [];
//   for (var i = 0; i < letters.length; i++) {
//     result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
//   }
//   return result.join('-');
// }
