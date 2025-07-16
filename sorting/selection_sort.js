// Selection Sort

const arr = [
  10, 5, 30, 45, 20, 65, 50, 75, 90, 35, 100, 55, 40, 15, 80, 25, 70, 60, 85, 95
];

function selectionSort(arr) {
  for (let x = 0; x < arr.length; x++) {
    let currentMin = arr[x];
    let minIndex = x;

    for (let y = x + 1; y < arr.length; y++) {
      if (arr[y] < currentMin) {
        currentMin = arr[y];
        minIndex = y;
      }
    }

    let currentValue = arr[x];
    arr[x] = currentMin;
    arr[minIndex] = currentValue;
  }

  return arr;
}

// Implementation
const result = selectionSort(arr);
console.log(result);
