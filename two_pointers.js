// Two Pointers
// Works on sorted array by moving right/left position

const arr = [
  5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
  100,
];

function twoPointers(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
    const sum = arr[low] + arr[high];

    if (sum === target) return [low, high];
    else if (sum < target) low++;
    else high--;
  }

  return false;
}

// Implementation
const result = twoPointers(arr, 175);
console.log(result);
