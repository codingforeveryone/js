 function getNumberLength(n){

if( isNaN(n)){ console.log("wrong input"); return "wrong input"} 


else { 
    console.log(n.toString())
	rawStr = n.toString();
	splitted = rawStr.split("");
	console.log(splitted);
	mark = 0;
	base = "";

	multiplier = "";
	 
	//aquire index of exponential values
	for(i = 0; i< splitted.length; i++) { if(splitted[i] == "+"){mark = i; console.log("mark =" + mark)}
	}
    if (mark == 0) {console.log("wrong input"); return "wrong input"}
   
	//acquire number of zeroes
	for (i = mark; i<mark+(splitted.length-mark-1); i++){multiplier += splitted[i+1]};
	console.log("multiplier = " + multiplier)

    
    result = parseInt(multiplier)+1;

	console.log("Number length is " + result)
  
}
}
getNumberLength(9000000000000000000000000000000000)

getNumberLength(1234567890123456789012)




