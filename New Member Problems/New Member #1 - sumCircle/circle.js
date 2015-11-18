function sumCircles(){
	var args = [], // to store the arguments passed 
	    sum = [];// to keep computed area for each args
	    
	    // loop through argument passed
	for(var i = 0; i < arguments.length; i++){
		args.push(arguments[i]);
	}
	
	// loop through the args array and compute the area for each 
	for(var j = 0; j < args.length ; j++){
	    sum.push(0.25 * Math.PI * args[j] * args[j])
	}

  var total = sum.reduce(function(a,b){
      return a + b
  });
  return "We have this much circle: " + Math.round(total)
}