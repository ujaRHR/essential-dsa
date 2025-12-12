// Insertion Sort

const arr = [
  10, 5, 30, 45, 20, 65, 50, 75, 90, 35, 100, 55, 40, 15, 80, 25, 70, 60, 85, 95
];

function insertionSort(arr) {
  for (let x = 1; x < arr.length; x++) {
    let currentValue = arr[x];
    let y = x - 1;

    while (y >= 0 && arr[y] > currentValue) {
      arr[y + 1] = arr[y];
      y--;
    }

    arr[y + 1] = currentValue;
  }

  return arr;
}

// Implementation
const result = insertionSort(arr);
console.log(result);
