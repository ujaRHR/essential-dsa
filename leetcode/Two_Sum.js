// https://leetcode.com/problems/two-sum

const twoSum = (nums, target) => {
  const hashmap = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in hashmap) {
      return [hashmap[complement], i];
    }
    hashmap[nums[i]] = i;
  }
};

const call = twoSum([2, 4, 11, 5], 9);
console.log(call);
