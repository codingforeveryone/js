function isValidWalk(walk) {
  //insert brilliant code here
  var wCounter = 0;
  var eCounter = 0;
  var sCounter = 0;
  var nCounter = 0;


  if(walk.length !== 10) return false;
  for(var i = 0; i < 10 ; i++){
     if (walk[i] === 'w'){
       wCounter++
     }
     else if( walk[i] === 'e'){
       eCounter++
     }
     else if (walk[i] === 'n'){
       nCounter++
     }
     else {
       sCounter++
     }
   };

   if(wCounter === eCounter && sCounter === nCounter) {
     return true
 } else {return false};
 };
