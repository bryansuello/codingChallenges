// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

let arr = [1, 2, 3];

function findAverage(array) {
  if (array.length == 0) return 0;
  else
    return (
      array.reduce((prev, curr) => {
        return prev + curr;
      }) / array.length
    );
}

console.log(findAverage(arr));

// var find_average = (array) => {
//   return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
// }

// function find_average(array) {
//   if (array.length === 0) {
//   return 0;
//   }
//   var result = 0;
//   for (i=0; i<array.length; i++) {
//     result +=array[i];
//   }
//   return result/array.length;
// }
