function revertMoreStrings(words) {
  
var strArray = words.split(" ");
var counter=0;
  
for(var s of strArray){
     strArray[counter]=revertString(s);
     counter++;
}
return strArray.join(" ");
  
}  

function revertString(input) {

var length= input.length;
var negative = [];
	for(i=0; i< length; i++){
		if(input[i] == input[i].toUpperCase()){negative.push(true);}
		else {negative.push(false);}
	}

var output = reverse(input.toLowerCase()).split("");

//make uppercase in output

for(i=0; i< length; i++){
	if(negative[i]){ output[i] = output[i].toUpperCase();}
}

return (output.join(""));
}

function reverse(s){
    return s.split("").reverse().join("");
}


// Some test cases
console.log(revertMoreStrings("Hello World"));// output : "Olleh Dlrow"
