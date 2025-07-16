# Binary Search (Upper Bound)
# Find the first index where element > target.

arr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]


def upperBound(arr, target):
    low = 0
    high = len(arr)

    while low < high:
        mid = (low + high) // 2

        if arr[mid] <= target:
            low = mid + 1
        else:
            high = mid

    return low


# Implementation
result = upperBound(arr, 35)
print(result)
