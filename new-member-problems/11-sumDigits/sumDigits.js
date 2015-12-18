function sumDigits(str){
  function sum(a, b){
    return a + b;
  }
  return str.match(/\d/g)
    .map(Number)
    .reduce(sum);
}
