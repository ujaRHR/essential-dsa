package main

import "fmt"

// Selection Sort

var arr = []int{10, 5, 30, 45, 20, 65, 50, 75, 90, 35, 100, 55, 40, 15, 80, 25, 70, 60, 85, 95}

func selectionSort(arr []int) []int {
	for x := range len(arr) {
		currentMin := arr[x]
		minIndex := x

		for y := x + 1; y < len(arr); y++ {
			if arr[y] < currentMin {
				currentMin = arr[y]
				minIndex = y
			}
		}

		currentValue := arr[x]
		arr[x] = currentMin
		arr[minIndex] = currentValue
	}

	return arr
}

// Implementation
func main() {
	fmt.Println(selectionSort(arr))
}
