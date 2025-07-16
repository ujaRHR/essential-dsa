// Bubble Sort

const arr = [
  10, 5, 30, 45, 20, 65, 50, 75, 90, 35, 100, 55, 40, 15, 80, 25, 70, 60, 85, 95
];

function bubbleSort(arr) {
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr.length - x - 1; y++) {
      if (arr[y] > arr[y + 1]) {
        let currentMax = arr[y];
        arr[y] = arr[y + 1];
        arr[y + 1] = currentMax;
      }
    }
  }

  return arr;
}

// Implementation
const result = bubbleSort(arr);
console.log(result);
