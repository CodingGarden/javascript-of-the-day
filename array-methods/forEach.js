function forEach(array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    callback(array[i], i, array);
  }
}

const letters = ['a', 'b', 'c'];
forEach(letters, (element, index, theArray) => {
  console.log(element, index, theArray);
});
