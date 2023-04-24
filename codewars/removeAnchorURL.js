// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

let url = 'www.codewars.com#about';

function removeUrlAnchor(url) {
  let split = url.split('');
  console.log(split);
  let map = split.map(m => {
    if (m == '#') {
      let index = split.indexOf('#');
      split.splice(index);
      return split.join('').toString();
    } else return split.join('');
  });
  return map;
}

console.log(removeUrlAnchor(url));
