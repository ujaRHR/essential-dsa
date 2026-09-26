// Heap Sort

package main

import "fmt"

var arr = []int{10, 5, 30, 45, 20, 65, 50, 75, 90, 35, 100, 55, 40, 15, 80, 25, 70, 60, 85, 95}

func heapSort(arr []int) []int {
	if len(arr) <= 1 {
		return arr
	}

	return arr
}

// Implementation
func main() {
	fmt.Println(heapSort(arr))
}
