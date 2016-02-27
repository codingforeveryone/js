function pairsum(arr) {
  // sort array smallest to largest
  arr = arr.sort((a, b) => a - b);
  // return the sum of the two final indexes
  return arr[arr.length - 1] + arr[arr.length - 2];
}

pairsum([10,14,2,23,19]);
