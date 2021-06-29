//Rest Parameter

// function add(x1, x2) {
//   return x1 + x2;
// }


function add(...nums) {
  var sum = 0;
  for (var n of nums) {
    sum += n;
  }

  return sum;
}

console.log(add(2, 5, 3, 7, 43, 21));

//var nums = [2,5,3,7,43,21]