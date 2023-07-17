// 1. Create array
// - default way
const arr = [1, 2, 3, 4, 4, 5, 6, 7, 8];

// - create an arry with 100 zeros
const zeros = Array(100).fill(0);

// - 0, 1, 2, 3 ... n
const range = Array(100)
  .fill(0)
  .map((_, i) => i + 1);

// keys() return iterator so we need ...
const range2 = [...Array(100).keys()];

// - get all the unique values from an array
const unique = [...new Set(arr)];

// - loop over array
for (const val of arr) {
  console.log(val);
}

for (const [i, val] of arr.entries()) {
  console.log(i, val);
}

arr.forEach();
arr.map();
arr.filter();
arr.find();
arr.findIndex();
arr.reduce();
