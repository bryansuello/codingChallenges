// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

let str = 'hello Wasd';

String.prototype.isUpperCase = function (str) {
  if (typeof str == 'string') {
    let originalStr = str.toString().split('');
    let strUpperCased = originalStr.map(m => m.toUpperCase());
    console.log(strUpperCased);
    console.log(originalStr);
    for (let i = 0; i < originalStr.length; i++) {
      if (strUpperCased[i] != originalStr[i]) {
        let display = originalStr.join('');
        console.log(display);
        return `${display} is not upper case`;
      } else {
        let display = originalStr.join('');
        return `${display} is upper case`;
      }
    }
  } else {
    return false;
  }
};

console.log(String.prototype.isUpperCase(str));
