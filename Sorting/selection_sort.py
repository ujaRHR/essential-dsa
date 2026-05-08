# Selection Sort

arr = [10, 5, 30, 45, 20, 65, 50, 75, 90, 35, 100, 55, 40, 15, 80, 25, 70, 60, 85, 95]


def selection_sort(arr):
    n = len(arr)
    for x in range(n):
        current_minimum = arr[x]
        min_index = x

        for y in range(x + 1, n):
            if arr[y] < current_minimum:
                current_minimum = arr[y]
                min_index = y

        current_value = arr[x]
        arr[x] = current_minimum
        arr[min_index] = current_value

    return arr


# Implementation
result = selection_sort(arr)
print(result)


# Best    Average     Worst       Space
# O(n²)   O(n²)       O(n²)       O(1)