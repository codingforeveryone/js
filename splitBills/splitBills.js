function splitTheBill(x) {
  sum=0;
  num=0;
  for(var k in x){
    if(x.hasOwnProperty(k)){ sum += x[k]; num++ }
  };
  avg=sum/num; 
  owes=new Object();
  for(k in x){ owes[k]=Math.round((x[k]-avg+ 0.00001) * 100) / 100 };
  return owes;
}

console.log(splitTheBill({A: 40, B: 25, X: 10}))