function revertString(input) {
  var reversed = "";
  var array1 = input.split(" ");
  var array2 = [];
  for (var i = 0; i < array1.length; i++) {
  	array2[i] = array1[i].split("").reverse();
  }
for(var j = 0; j <= array1.length-1; j++){
  for(var k = 0; k < array2[j].length; k++){
    console.log(j,k);
    if(array1[j][k] === array1[j][k].toUpperCase()){ 
      reversed += array2[j][k].toUpperCase();
    }
    else { reversed += array2[j][k].toLowerCase(); }
  }
  if(j !== array1.length-1){
    reversed += " ";
  }
}
  return reversed;
}