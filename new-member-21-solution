function deficientlyAbundantAmicableNumbers(num1, num2) {
  var result = [];
  //Reducing the arrays of divisors to the sum of its elements
  var divisors1 = findDivisors(num1).reduce(function(pre, cur) {
    return pre + cur;
  });
  var divisors2 = findDivisors(num2).reduce(function(pre, cur) {
    return pre + cur;
  });
  //Calling helper function
  check(num1, divisors1, result);
  check(num2, divisors2, result);
  //Checking if numbers are amicable
  num1 === divisors2 && num2 === divisors1 ? result.push("amicable") : null;
  //Transforming array of results into string
  return result.join(' ');
}

//Basic function to find the divisors of an int
function findDivisors(number) {
  var divisors = [];
  for (var x = 1; x < number; x++) {
    if (number % x == 0) {
      divisors.push(x);
    }
  }
  return divisors;
}

//Helper function to check if int is abundant, deficient or perfect
function check(number, divisor, array) {
  if (number < divisor) {
    array.push("abundant");
  } else if (number > divisor) {
    array.push("deficient");
  } else {
    array.push("perfect");
  }
}
