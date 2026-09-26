// Quick Sort

const arr = [
  10, 5, 30, 45, 20, 65, 50, 75, 90, 35, 100, 55, 40, 15, 80, 25, 70, 60, 85,
  95,
];

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let lessThanPivot = [];
  let greaterThanPivot = [];

  for (let x = 0; x < arr.length - 1; x++) {
    if (arr[x] > pivot) {
      greaterThanPivot.push(arr[x]);
    } else {
      lessThanPivot.push(arr[x]);
    }
  }

  let sortedLeft = quickSort(lessThanPivot);
  let sortedRight = quickSort(greaterThanPivot);

  let sorted = [...sortedLeft, pivot, ...sortedRight];

  return sorted;
}

// Implementation
const result = quickSort(arr);
console.log(result);

// Best       Average      Worst      Space
// O(nlogn)   O(nlogn)     O(n²)      O(n)
