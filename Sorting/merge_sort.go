package main

import "fmt"

var arr = []int{10, 5, 30, 45, 20, 65, 50, 75, 90, 35, 100, 55, 40, 15, 80, 25, 70, 60, 85, 95}

func mergeSort(arr []int) []int {
	if len(arr) <= 1 {
		return arr
	}

	mid := len(arr) / 2
	left := mergeSort(arr[0:mid])
	right := mergeSort(arr[mid:])

	return merge(left, right)
}

func merge(left, right []int) []int {
	result := []int{}
	leftIdx, rightIdx := 0, 0

	for leftIdx < len(left) && rightIdx < len(right) {
		if left[leftIdx] < right[rightIdx] {
			result = append(result, left[leftIdx])
			leftIdx++
		} else {
			result = append(result, right[rightIdx])
			rightIdx++
		}
	}

	result = append(result, left[leftIdx:]...)
	result = append(result, right[rightIdx:]...)

	return result
}

// Implementation
func main() {
	fmt.Println(mergeSort(arr))
}
