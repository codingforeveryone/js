function liftoff(instructions){
  function sortNumber(a,b) {
    return b - a;
  }
  
  return instructions.sort(sortNumber).join(" ") + " liftoff!";
}