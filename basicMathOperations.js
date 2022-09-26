// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

let op = '/';
let val1 = 49;
let val2 = 7;

function basicOp(operation, value1, value2) {
  return operation == '+'
    ? value1 + value2
    : operation == '-'
    ? value1 - value2
    : operation == '*'
    ? value1 * value2
    : operation == '/'
    ? value1 / value2
    : null;
}

console.log(basicOp(op, val1, val2));

// function basicOp(operation, value1, value2) {
//     switch (operation) {
//         case '+':
//             return value1 + value2;
//         case '-':
//             return value1 - value2;
//         case '*':
//             return value1 * value2;
//         case '/':
//             return value1 / value2;
//         default:
//             return 0;
//     }
// }

// function basicOp(o, a, b) {
//   return eval(a+o+b);
// }
