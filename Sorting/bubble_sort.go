// Bubble Sort

package main

import "fmt"

var arr = []int{10, 5, 30, 45, 20, 65, 50, 75, 90, 35, 100, 55, 40, 15, 80, 25, 70, 60, 85, 95}

func bubbleSort(arr []int) []int {
	for x := range arr {
		for y := range len(arr) - x - 1 {
			if arr[y] > arr[y+1] {
				currentMax := arr[y]
				arr[y] = arr[y+1]
				arr[y+1] = currentMax
			}
		}
	}

	return arr
}

// Implementation
func main() {
	fmt.Println(bubbleSort(arr))
}
