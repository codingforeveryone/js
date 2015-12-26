var isSquare = function(arr){
  if (! arr.length){
    return undefined;
  }
  return arr.every(function(el){
    //removes decimals and checks equality because
    //perfect square have no decimal places
    return Math.floor(Math.sqrt(el) ) === (Math.sqrt(el));
  });
};
