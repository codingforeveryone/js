```
function nthChar(words) {
  var string = "";
    for(var i=0;i<words.length;i++){
      string = string + words[i].charAt(i);
    }
    return string;
}
