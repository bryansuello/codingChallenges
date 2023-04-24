// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything
// but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

let pin = '1234';
console.log(typeof pin);
console.log(pin.length);

function validatePIN(pin) {
  if (typeof pin == 'number' && pin > 0)
    if (pin.toString().length == 4 || pin.toString().length == 6) {
      return true;
    } else {
      return false;
    }
  else return false;
}

console.log(validatePIN(pin));
