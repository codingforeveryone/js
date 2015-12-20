function sumDigits(str){
    
    //create a new string with all non numbers replaced with nothing.
    var numberString = str.replace(/\D+/g, "");
    
    //make the number string into an array of numbers
    var x = numberString.split('').map(Number);
    
    //reduce the elements in the array to a sum of all elements and return.
    return x.reduce(function(a, b){return a + b;});
}
