function difference(a, b) {
  return Math.abs(a - b);
}
// console.log(difference(5, 2));
// console.log(difference(2, 5));

const nums = [2, 4, 1, 0];
const newNum = [];

for (i = 0; i < nums.length - 1; i++) {
  diff = difference(nums[i + 1], nums[i]);
  newNum.push(diff);
}

console.log(Math.max(...newNum));
