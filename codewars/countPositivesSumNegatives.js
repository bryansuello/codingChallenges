// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the
// second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
let input = [];
console.log(typeof input);

function countPositivesSumNegatives(input) {
  if (input === null) return [];
  if (input != 0) {
    let filter = input.filter(m => {
      return m > 0 && m != null;
    });
    console.log(filter.length);
    let negatives = input.filter(f => {
      return f < 0;
    });
    console.log(negatives);

    let array1 = [filter.length];
    let array2 = negatives.reduce((tot, each) => {
      return tot + each;
    }, 0);
    console.log(array2);
    let array3 = array1.concat(array2);
    console.log(array3);
    return array3;
  } else {
    return [];
  }
}

console.log(countPositivesSumNegatives(input));

// function countPositivesSumNegatives(input) {
//     if (input == null || input.length == 0)
//       return [];

//     var positive = 0;
//     var negative = 0;

//     for (var i=0, l=input.length; i<l; ++i)
//     {
//       if (input[i] > 0)
//         ++ positive;
//       else
//         negative += input[i];
//     }

//     return [positive, negative];
// }

// function countPositivesSumNegatives(input) {
//     return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
// }
