function factors(number){
	if(isNaN(number) || Math.sign(number)==-1)
		return -1;
	var factorsArray = [],
	quotient = 0;

	for(var i = number; i > 0 ; i--,quotient = number/i)
		if(quotient === Math.floor(quotient))
			factorsArray.push(i); 

	return factorsArray;
}
