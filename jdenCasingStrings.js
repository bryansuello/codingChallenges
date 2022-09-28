// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

let str = "How can mirrors be real if our eyes aren't real";

String.prototype.toJadenCase = function (str) {
  let string = str
    .toLowerCase()
    .split(' ')
    .map(m => m[0].toUpperCase() + m.slice(1))
    .join(' ');
  return `"${string}"`;
};

console.log(String.prototype.toJadenCase(str));
