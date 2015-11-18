function findSum(number) {
  return function(number1) {
    var sum = number + number1;
    return sum;
  };
}

// Validation
console.log(findSum(4)(6)); // => 10
var plus2 = findSum(2);
console.log(plus2(5)); // =>7