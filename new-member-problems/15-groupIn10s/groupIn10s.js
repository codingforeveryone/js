function groupIn10s(...numbers) {
  var arrSorted = numbers.sort((a,b) => a-b);
  var groupArr = [];
  var counter = 10;
  while (arrSorted.length > 0) {
    var group = [];
    while (arrSorted[0] < counter) {
      group.push(arrSorted.shift())
    }
    group.length > 0 ? groupArr.push(group) : groupArr.push(undefined);
    counter += 10;
  }
  return groupArr;
}
