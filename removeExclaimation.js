let string = 'bryan and hannah!!!';

function removeExclamationMarks(s) {
  return s.replace(/!/g, '');
}

console.log(removeExclamationMarks(string));
