// Insertion Sort

package main

import "fmt"

var arr = []int{10, 5, 30, 45, 20, 65, 50, 75, 90, 35, 100, 55, 40, 15, 80, 25, 70, 60, 85, 95}

func insertionSort(arr []int) []int {
	for x := range len(arr) {
		currentValue := arr[x]
		y := x - 1

		for y >= 0 && arr[y] > currentValue {
			arr[y+1] = arr[y]
			y--
		}

		arr[y+1] = currentValue
	}

	return arr
}

// Implementation
func main() {
	fmt.Println(insertionSort(arr))
}
