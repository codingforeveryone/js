function getNumberLength(n){
  var error = "wrong input";
  return (typeof n !== "number" || n.toString().length < 21) ? "wrong input" : n.toString().length;
}

// Wrote some test cases as well
console.log(getNumberLength(""));
console.log(getNumberLength(948435689037698457643586347345789603));
console.log(getNumberLength(94843568903));
