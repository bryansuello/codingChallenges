// Given a non-empty array of integers, return the result of multiplying the values
//  together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

let array = [1, 2, 3, 4];

function grow(x) {
  let reduce = x.reduce((prev, curr) => {
    return prev * curr;
  });
  return reduce;
}

console.log(grow(array));

// const grow=x=> x.reduce((a,b) => a*b);

// const grow = (nums) => nums.reduce((product, num) => product * num, 1);
