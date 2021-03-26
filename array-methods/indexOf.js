function indexOf(array, value) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === value) return i;
  }
  return -1;
}

console.log(indexOf([42], 42), 0);
const people = ['CJ', 'CyberCyclonic', 'strategefirst'];
console.log(indexOf(people, 42));
console.log(indexOf(people, 'CJ'));
console.log(indexOf(people, 'John'));
console.log(indexOf(people, 'strategefirst'));

console.log(people.indexOf('CJ'));
