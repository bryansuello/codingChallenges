// "john McClane" --> "McClane john"

let name = 'hannah suello';

function nameShuffler(str) {
  return str.split(' ').reverse().join(' ');
}

console.log(nameShuffler(name));
