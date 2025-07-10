// https://leetcode.com/problems/a-number-after-a-double-reversal

const reverse = (x) => {
  let number = Math.abs(x);

  let reversed = 0;

  while (number > 0) {
    const digit = number % 10;
    reversed = reversed * 10 + digit;
    number = Math.floor(number / 10);
  }

  const final = x < 0 ? reversed * -1 : reversed;

  if (final < -(2 ** 31) || final > 2 ** 31 - 1) {
    return 0;
  }

  return final;
};

const call = reverse(1221);
console.log(call);
