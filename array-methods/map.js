function map(array, callback) {
  const results = [];
  for (let i = 0; i < array.length; i += 1) {
    results.push(callback(array[i], i, array));
  }
  return results;
}

// const result = map([1, 2], v => v * 2);
// console.log(result);
// console.log(map([1, 2], (v) => v * 2));
// console.log(map([1, 2], (v) => {
//   return v * 2;
// }));
// console.log(map([1, 2], function double(v) {
//   return v * 2;
// }));
// console.log([1, 4, 9].map(function (num) {
//   return Math.sqrt(num);
// }));
