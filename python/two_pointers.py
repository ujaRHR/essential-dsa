# Two Pointers
# Works on sorted array by moving right/left position

arr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]


def twoPointers(arr, target):
    low = 0
    high = len(arr) - 1

    while low < high:
        sum = arr[low] + arr[high]

        if sum == target:
            return [low, high]
        elif sum < target:
            low += 1
        else:
            high -= 1

    return false


# Implementation
result = twoPointers(arr, 175)
print(result)
