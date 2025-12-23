// Binary Search (Lower Bound)
// Find the first index where element >= target.

package main

import (
	"fmt"
)

var arr = []int{5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100}

func lowerBound(arr []int, target int) int {
	low, high := 0, len(arr)

	for low < high {
		mid := ((low + high) / 2)

		if arr[mid] < target {
			low = mid + 1
		} else {
			high = mid
		}
	}
	return low
}

// Implementation
func main() {
	fmt.Println(lowerBound(arr, 25))
}
