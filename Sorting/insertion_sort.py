# Insertion Sort

arr = [10, 5, 30, 45, 20, 65, 50, 75, 90, 35, 100, 55, 40, 15, 80, 25, 70, 60, 85, 95]


def insertion_sort(arr):
    n = len(arr)
    for x in range(1, n):
        current_value = arr[x]
        y = x - 1
        while y >= 0 and arr[y] > current_value:
            arr[y + 1] = arr[y]
            y -= 1

        arr[y + 1] = current_value

    return arr


# Implementation
result = insertion_sort(arr)
print(result)



# Best    Average     Worst       Space
# O(n²)   O(n²)       O(n²)       O(1)