let arr = [1, 2, 3, 4, '5', '200'];

function sumMix(x) {
  x = parseInt(x);
  let reduce = x.reduce((total, r) => {
    return total + r;
  });
  return x;
}

console.log(sumMix(arr));
