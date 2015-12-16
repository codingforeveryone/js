function countOnes(arr){
  return arr.reduce(function(p, c){
    var len = p.length - 1;
    if (c) p[len]++;
    else if (p[len]) p.push(0);
    return p;
  }, [0]);
}

function _countOnes(arr){
  function sum(a, b){
    return a + b;
  }

  function sumDigits(num){ // same function as new-member-11 !!
    return num.match(/\d/g)
              .map(Number)
              .reduce(sum);
  }

  return arr
    .join('')
    .match(/1+/g)
    .map(sumDigits);
}
