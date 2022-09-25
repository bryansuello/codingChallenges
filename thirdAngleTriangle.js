let angle1 = 50;
let angle2 = 90;

function otherAngle(a, b) {
  if (a > 0 && b > 0) {
    return 180 - (a + b);
  }
}

console.log(otherAngle(angle1, angle2));
