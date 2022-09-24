let theName = 'hanna marie quiamco suello';

function abbrevName(name) {
  return name
    .toUpperCase()
    .split(' ')
    .map(x => {
      return x.charAt(0);
    })
    .join('.');

  // code away
  //   name = name.split(' ');
  //   let abrr = name.map(m => {
  // return m.charAt(0).toUpperCase();

  //     console.log(return m)
  //   });
  //   console.log(abrr);
  //   console.log(name);
  //   console.log(name.length);
  //   for (let i = 0; i < name.length; i++) {
  //     let abbr = name[i].charAt(0).toUpperCase();
  //     return `${abbr}.`;
  //   }
  //   for (let each of name) {
  //     let abbr = each.charAt(0).toUpperCase();
  //     return `${abbr}.`;
  //   }
  //   for (let i = 0; i < name.length; i++) {
  //     name = name[i].charAt(0).toUpperCase();
  //     return name;
  //   }
  //   for (let n of name) {
  //     return n.charAt(0).toUpperCase();
  //   }
}

console.log(abbrevName(theName));
