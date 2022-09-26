// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the
// second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

function countPositivesSumNegatives(input) {
  let filter = input.filter(m => {
    return m > 0;
  });
  console.log(filter.length);
  let negatives = input.filter(f => {
    return f < 0;
  });
  console.log(negatives);

  let array1 = [filter.length];
  let array2 = negatives.reduce((tot, each) => {
    return tot + each;
  });
  console.log(array2);
  let array3 = array1.concat(array2);
  console.log(array3);
  return array3;
}

console.log(countPositivesSumNegatives(input));
