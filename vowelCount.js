// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

let string = 'bryan suello and hannah';

function getCount(str) {
  let splity = str.split('');
  console.log(splity);
  let a = splity.filter(f => {
    return f == 'a';
  });
  let e = splity.filter(f => {
    return f == 'e';
  });
  console.log(e);
  let i = splity.filter(f => {
    return f == 'i';
  });
  let o = splity.filter(f => {
    return f == 'o';
  });
  let u = splity.filter(f => {
    return f == 'u';
  });
  return a.length + e.length + i.length + o.length + u.length;
}

console.log(getCount(string));

// function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }

// function getCount(str) {
//   var vowelsCount = 0;
//   var vowels = ["a","e","i","o","u"];
//   for(var i = 0;i < str.length;i++){
//     for(var j=0;j<vowels.length;j++){
//       if(str[i] === vowels[j]){
//         vowelsCount++;
//       }
//     }
//   }

//   return vowelsCount;
// }

// function getCount(str) {
//   return str.replace(/[^aeiou]/gi, '').length;
// }
