package main

import "fmt"

var arr = []int{10, 5, 30, 45, 20, 65, 50, 75, 90, 35, 100, 55, 40, 15, 80, 25, 70, 60, 85, 95}

func quickSort(arr []int) []int {
	if len(arr) <= 1 {
		return arr
	}

	pivot := arr[len(arr)-1]
	lessThanPivot := []int{}
	greaterThanPivot := []int{}

	for _, value := range arr[:len(arr)-1] {
		if value > pivot {
			greaterThanPivot = append(greaterThanPivot, value)
		} else {
			lessThanPivot = append(lessThanPivot, value)
		}
	}

	sortedLeft := quickSort(lessThanPivot)
	sortedRight := quickSort(greaterThanPivot)

	sorted := append(sortedLeft, pivot)
	sorted = append(sorted, sortedRight...)

	return sorted
}

// Implementation
func main() {
	fmt.Println(quickSort(arr))
}
