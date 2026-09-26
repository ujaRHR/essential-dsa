# Merge Sort

arr = [10, 5, 30, 45, 20, 65, 50, 75, 90, 35, 100, 55, 40, 15, 80, 25, 70, 60, 85, 95]


def quick_sort(arr):
    if len(arr) <= 1:
        return arr

    pivot = arr[-1]
    less_than_pivot = []
    greater_than_pivot = []

    for value in arr[:-1]:
        if value > pivot:
            greater_than_pivot.append(value)
        else:
            less_than_pivot.append(value)

    return quick_sort(less_than_pivot) + [pivot] + quick_sort(greater_than_pivot)


# Implementation
result = quick_sort(arr)
print(result)


# Best       Average      Worst      Space
# O(nlogn)   O(nlogn)     O(n²)      O(log n)*
