# Heap Sort

arr = [10, 5, 30, 45, 20, 65, 50, 75, 90, 35, 100, 55, 40, 15, 80, 25, 70, 60, 85, 95]


def heap_sort(arr):
    if len(arr) <= 1:
        return arr


# Implementation
result = heap_sort(arr)
print(result)
