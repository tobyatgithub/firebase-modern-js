// PROBLEM: create a function that takes an array of numbers and returns
// a number that is the sum of all values in the array.

const range = [...Array(100).keys()];

// method 1. reduce()
const result1 = range.reduce(
  (accumulator, curVal) => (accumulator += curVal),
  0
);
console.log(result1);

// method 2. vanila for loop
let result2 = 0;
for (let i = 0; i < range.length; i++) {
  result2 += range[i];
}
console.log(result2);

export function cumSum(arr) {
  return arr.reduce((accumulator, curVal) => (accumulator += curVal), 0);
}
