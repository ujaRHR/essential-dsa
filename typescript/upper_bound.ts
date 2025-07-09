// Binary Search (Upper Bound)
// Find the first index where element > target.

const arr: number[] = [
  5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
  100,
];

function upperBound(arr: number[], target: number): number {
  let low: number = 0;
  let high: number = arr.length;

  while (low < high) {
    let mid: number = Math.floor((low + high) / 2);

    if (arr[mid] <= target) low = mid + 1;
    else high = mid;
  }

  return low;
}

// Implementation
const result: number = upperBound(arr, 35);
console.log(result);
