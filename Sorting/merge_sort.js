// Merge Sort

const arr = [
  10, 5, 30, 45, 20, 65, 50, 75, 90, 35, 100, 55, 40, 15, 80, 25, 70, 60, 85,
  95,
];

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let leftIdx = 0, rightIdx = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      result.push(left[leftIdx]);
      leftIdx++;
    } else {
      result.push(right[rightIdx]);
      rightIdx++;
    }
  }

  result.push(...left.slice(leftIdx));
  result.push(...right.slice(rightIdx));

  return result;
}

// Implementation
const result = mergeSort(arr);
console.log(result);

// Best      Average     Worst      Space
// O(nlogn)  O(nlogn)    O(nlogn)   O(n)
