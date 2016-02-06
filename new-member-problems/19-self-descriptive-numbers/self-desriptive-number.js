function selfDescriptive(num) {
  var newString = "";
  var numArray = (""+num).split("");
  for (var i =0; i<numArray.length; i++){
    var count = numArray.filter(function(x){return x==i}).length;
    newString = newString.concat(count.toString());
  }
  
  if (newString == num.toString()){ 
    return true; 
    }
    
  else { 
    return false; 
    }
}