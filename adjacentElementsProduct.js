const nums = new Array(3, 6, -2, -5, 7, 3);

// console.log(nums);

function adjacent(num) {
  let length = num.length;
  let sum = [];

  for (i = 0; i < length - 1; i++) {
    sum.push(num[i] * num[i + 1]);
    // console.log(sum);
  }

  //   return sum;
  //   return Math.min(...sum);
  return Math.max(...sum);

  console.log(Math.max(sum));
}

console.log(adjacent(nums));
