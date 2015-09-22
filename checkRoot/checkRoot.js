 function checkRoot(string){
numbers = [];
splitted = string.split(",");

if(splitted.length != 4){ 
  console.log("incorrect input")
  return "incorrect input"; }
//check if input are numbers
for(i = 0 ; i<4 ; i++){
  numbers[i] = parseInt(splitted[i],10);
}
//console.log(numbers);
for(i = 0; i < 4; i++){
  if(isNaN(numbers[i]) ){ 
    console.log("incorrect input")
    return "incorrect input"; }
}
//check if numbers are sequentials
max = Math.max.apply(Math, numbers);
min = Math.min.apply(Math, numbers);

flag1 = false;
flag2 = false;

for(i=0 ; i<4 ; i++){
  if(numbers[i] == (max-1)){flag1 = true}
  if(numbers[i] == (min+1)){flag2 = true}
}
if(flag1 && flag2){ 
  results = calculate(numbers);
  return results
}
else {
  console.log("non consecutive")
  return "not consecutive"}
function calculate(n){
  par= 1;
  for(i=0 ; i<4 ; i++){
    par *= n[i];
  }
  par += 1
  sq = Math.sqrt(par);
  console.log(par)
  res = [par, sq]
  console.log(sq)
  return res;
} 
}