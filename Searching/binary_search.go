// Binary Search

package main

import (
	"fmt"
	"math"
)

var arr = []int{5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100}

func binarySearch(arr []int, target int) int {
	low, high := 0, len(arr)-1
	for low <= high {
		mid := int(math.Floor(float64(low+high) / 2))

		if arr[mid] == target {
			return mid
		} else if arr[mid] < target {
			low = mid + 1
		} else {
			high = mid - 1
		}
	}

	return -1
}

// Implementation
func main() {
	fmt.Println(binarySearch(arr, 95))
}
