// Given a month as an integer from 1 to 12, return to which quarter of the year it
// belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part
// of the second quarter; and month 11 (November), is part of the fourth quarter.

let mo = 12;

const quarterOf = month => {
  return month <= 3
    ? 'first quarter'
    : month > 3 && month <= 6
    ? 'second quarter'
    : month > 6 && month <= 9
    ? 'third quarter'
    : month > 9 && month <= 12
    ? 'fourth quarter'
    : null;
};

console.log(quarterOf(mo));
