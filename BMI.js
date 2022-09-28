// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

let weight = 76;
let height = 136;

function bmi(weight, height) {
  let bmi = weight / (height * height);
  return bmi <= 18.5
    ? 'Underweight'
    : bmi > 18.5 && bmi <= 25.0
    ? 'Normal'
    : bmi > 25.0 && bmi <= 30
    ? 'Overweight'
    : bmi > 30
    ? 'Obese'
    : null;
}

console.log(bmi(weight, height));

// function bmi(weight, height) {
//   var result = weight/Math.pow(height,2)

//   if (result <= 18.5) {
//     return "Underweight";
//   } else if (result <= 25) {
//     return "Normal";
//   } else if (result <= 30) {
//     return "Overweight";
//   } else {
//     return "Obese";
//   }

// }

// const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
//                                     bmi <= 25 ? "Normal" :
//                                     bmi <= 30 ? "Overweight" : "Obese";

// function bmi(weight, height) {
// var bmi  = weight/(height*height);
//  return bmi < 18.5 ? "Underweight" : bmi <=25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
// }

// function bmi(weight, height) {
//   var formula = (weight / Math.pow(height, 2));
//   switch (true) {
//     case formula <=18.5:
//     return 'Underweight';
//     case formula <=25.0:
//     return 'Normal';
//     case formula <=30:
//     return 'Overweight';
//     default:
//     return 'Obese';
//   }
// }
