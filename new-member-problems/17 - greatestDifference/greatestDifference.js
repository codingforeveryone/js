function greatestDiff(array){
  var maxDifference = 0;
  for (i in array){
    for (var j = 0; j<array[i].length-1; j++){
      if (array[i][j+1] - array[i][j] > maxDifference){
        maxDifference = array[i][j+1] - array[i][j];
      }
    }  
  }
 return maxDifference;
}