// Two Pointers
// Works on sorted array by moving right/left position

package main

import "fmt"

var arr = []int{5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100}

func twoPointers(arr []int, target int) ([]int, bool) {
	low, high := 0, len(arr)-1

	for low < high {
		sum := arr[low] + arr[high]

		if sum == target {
			return []int{low, high}, true
		} else if sum < target {
			low += 1
		} else {
			high -= 1
		}
	}

	return []int{}, false
}

func main() {
	fmt.Println(twoPointers(arr, 60))
}
