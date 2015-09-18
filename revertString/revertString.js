function revertString(input) {
	// Your code

var length= input.length;
negative = new Array();
	for(i=0; i< length; i++){
		if(input[i] == input[i].toUpperCase()){negative.push(true)}
		else {negative.push(false)}
	}
console.log(negative)

midput = input.toLowerCase()
console.log(midput)

midput2 = reverse(midput)

output = midput2.split("")

//make uppercase in output
for(i=0; i< length; i++){
	if(negative[i]){ output[i] = output[i].toUpperCase()}
}

console.log(output)
}
function reverse(s){
    return s.split("").reverse().join("");
}


// Some test cases

revertString("RaNdom"); //should return MoDnar
//console.log("JavaScript"); //should return "JpirCsavaj"