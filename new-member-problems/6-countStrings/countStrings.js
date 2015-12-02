function strCount(arr){
  var result = 0;
  for(var propt in arr){
    if      (typeof arr[propt]==='string') {result++;}
    else if (typeof arr[propt]==='object') {result += strCount(arr[propt]);}
   }
   return result;
}