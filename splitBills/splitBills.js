function splitTheBill(x) {
  var sum = 0;
  var num = 0;
  for(var k in x){
    if(x.hasOwnProperty(k)){
	  sum += x[k]; num++
	}
  };
  var avg  = sum/num; 
  var owes = new Object();
  for(k in x){
	  owes[k] = Math.round( (x[k] - avg + 0.00001) * 100) / 100
  };
  return owes;
}