// Take an array and remove every second element from the array. Always keep the first
// element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

let el = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];
console.log(el.length);

function removeEveryOther(arr) {
  return arr.filter((_, index) => index % 2 == 0); //can use underscore(_) for an empty parameter.
}

console.log(removeEveryOther(el));

// function removeEveryOther(arr){
//   return arr.filter(function(elem, index) {
//     return index % 2 === 0;
//   });
// }

// function removeEveryOther(arr){
//   var newArr=[];                         //should have passed the values to an empty array!
// for (var i = 0; i < arr.length; i+=2){
//   newArr.push(arr[i]);
//   }
// return newArr;
// }

// const removeEveryOther = arr => arr.filter((_, i) => !(i % 2));
