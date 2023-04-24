// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise,
//  you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

let input = ['Ryan', 'Marie', 'Jason', 'Yous'];

function friend(friends) {
  let friendster = friends.filter(m => {
    return m.length == 4;
  });
  return friendster;
}

console.log(friend(input));

// function friend(friends){
//   return friends.filter(n => n.length === 4)
// }

// const friend = friends => friends.filter(friend => friend.length == 4);
