// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

let age = 20;

function peopleWithAgeDrink(old) {
  return old < 14
    ? 'drink toddy'
    : old < 18 && old >= 14
    ? 'drink coke'
    : old < 21 && old >= 18
    ? 'drink beer'
    : 'drink whisky';
}

console.log(peopleWithAgeDrink(age));
