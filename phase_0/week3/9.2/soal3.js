function cariMedian(arr) {
  // you can only write your code here!
  arr.sort((a, b) => a - b)
  
  const n = arr.length;
  if (n % 2 === 0) {
    const a = arr[n / 2];
    const b = arr[n / 2 - 1];
    const median = (a + b) / 2;
    return median;
} else if (n % 2 === 1) {
  const index = Math.floor(n / 2);
  const median = arr[index];
  return median;
}
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5