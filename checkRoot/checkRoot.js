function checkRoot(string){
  // Validate input
	var test = /\d+/g;
  string = string.match(test);
  if (string === null || string.length !== 4) {
    return "wrong input";
  }
  // Check if the numbers are consecutive
  for (var i = string.length - 1; i > 0; i--) {
    if (parseInt(string[i]) - parseInt(string[i-1]) !== 1) {
      return "non-consecutive"
    }
  }
  var number = parseInt(string[0]);
  for (var i = 1; i < string.length; i++) {
    number *= string[i];
  }
  number += 1;
  var sqrt = Math.sqrt(number);
  return "The number is " + number + " and it's square root is " + sqrt;
}

// Some test cases
console.log(checkRoot("1, 2, 3, 4"));
console.log(checkRoot("Some random nonsense"));
console.log(checkRoot("34589, 3849, 23, 9"));
