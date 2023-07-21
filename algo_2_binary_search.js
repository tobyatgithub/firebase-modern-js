// PROBLEM: create a function that takes a sorted array
// and a target value. Return the index of the target value
// in the array. If the target value is not in the array,
// return -1.

const range = [...Array(100).keys()];

export function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let mid = 0;
  while (left <= right) {
    mid = ((left + right) / 2) >> 0;
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    if (arr[mid] > target) right = mid - 1;
  }

  return -1;
}

console.log(binarySearch(range, 2));
console.log(binarySearch(range, 20));
console.log(binarySearch(range, 200));
