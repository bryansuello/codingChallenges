let string = 'i am bryan the master of the universe';
let array = [];

array.push(string.split(' '));

console.log(array);

function stringToArray(string) {
  //   let array = [];
  //   array.push(string.split(' '));
  //   return array;
  return string.split(' ');
}

console.log(stringToArray(string));
