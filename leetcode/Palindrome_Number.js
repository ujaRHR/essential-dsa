// https://leetcode.com/problems/palindrome-number

const isPalindrome = (x) => {
  if (x < 0) return false;

  let original = x;
  let reversed = 0;

  while (x > 0) {
    const digit = x % 10;
    reversed = reversed * 10 + digit;
    x = Math.floor(x / 10);
  }

  return original === reversed;
};

const call = isPalindrome(1221);
console.log(call);
