// Binary Search (Lower Bound)
// Find the first index where element >= target.

const arr = [
  5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
  100,
];

function lowerBound(arr, target) {
  let low = 0;
  let high = arr.length;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] < target) low = mid + 1;
    else high = mid;
  }

  return low;
}

// Implementation
const result = lowerBound(arr, 70);
console.log(result);
