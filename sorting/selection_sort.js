// Selection Sort
// Swapping min_val with actual index

const arr = [
  10, 75, 30, 45, 20, 65, 50, 5, 90, 35, 100, 55, 40, 15, 80, 25, 70, 60, 85, 95
];

function selectionSort(arr) {
  let new_arr = [];
  let minimum = arr[0];

  while (low < high) {
    const sum = arr[low] + arr[high];

    if (sum === target) return [low, high];
    else if (sum < target) low++;
    else high--;
  }

  return arr;
}

// Implementation
const result = selectionSort(arr);
console.log(result);
