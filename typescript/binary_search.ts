// Binary Search
// Find the exact index of the target

const arr: number[] = [
  5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
  100,
];

function binarySearch(arr: number[], target: number): number {
  let low: number = 0;
  let high: number = arr.length - 1;

  while (low <= high) {
    let mid: number = Math.floor((low + high) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }

  return -1;
}

// Implementation
const result: number = binarySearch(arr, 95);
console.log(result);