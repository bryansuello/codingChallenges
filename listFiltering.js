// In this kata you will create a function that takes a list of non-negative integers
// and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

let arr = [1, 2, 'hannah', '1', '123', 123];

function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter(f => typeof f == 'number');
}

console.log(filter_list(arr));

// function filter_list(l) {
// var res = [];
//             for(var item=0;item<l.length;item++)
//             {
//                 if (typeof l[item] === "number")
//                 {
//                     res.push(l[item]);
//                 }

//             }
//             return res;
// }
