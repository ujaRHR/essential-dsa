# Bubble Sort

arr = [10, 5, 30, 45, 20, 65, 50, 75, 90, 35, 100, 55, 40, 15, 80, 25, 70, 60, 85, 95]


def bubble_sort(arr):
    n = len(arr)
    for x in range(n):
        for y in range(n - x - 1):
            if arr[y] > arr[y + 1]:
                current_max = arr[y]
                arr[y] = arr[y + 1]
                arr[y + 1] = current_max

    return arr


# Implementation
result = bubble_sort(arr)
print(result)


# Best    Average    Worst    Space
# O(n)    O(n²)      O(n²)    O(1)