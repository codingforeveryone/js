function alternateString(size){
	var num = ""
	
	for (var i = 0; i < size; i++){
		if (num.slice(-1) === "1"){
			num.concat("0");
		}
		else{
			num.concat("1");
		}
	}
	
	return num;
	
}
