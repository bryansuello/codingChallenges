// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

let arr = [
  0, 48, 27, 35, 82, 97, 50, 45, 95, 52, 56, 27, 40, 2, 84, 96, 54, 77, 8, 82,
  66, 12, 17, 85, 85, 43, 91, 57, 61, 56, 96, 64, 88, 52, 38, 35, 71, 38, 37,
  51, 35, 59, 83, 60, 46, 24, 52, 33, 83, 95,
];
let ownPoints = 98;

function betterThanAverage(classPoints, yourPoints) {
  let ave =
    classPoints.reduce((prev, curr) => prev + curr) / classPoints.length + 1;
  return yourPoints > ave ? true : false;
}

console.log(betterThanAverage(arr, ownPoints));

// function betterThanAverage(classPoints, yourPoints) {
//   return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
// }

// function betterThanAverage(classPoints, yourPoints) {
//   // Your code here
//   var classAvg = 0;
//   for (var i = 0; i < classPoints.length; i++){
//     classAvg += classPoints[i];
//   }
//   classAvg = classAvg/classPoints.length;
//   return yourPoints > classAvg;
// }
