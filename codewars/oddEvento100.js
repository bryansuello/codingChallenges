const oddEven = () => {
  let num = [];
  for (let i = 0; i <= 20; i++) {
    i % 2 ? num.push(i) : null;
  }
  return num.join(', ');
};

console.log(oddEven());
