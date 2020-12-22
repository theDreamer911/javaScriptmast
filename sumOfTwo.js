// const object1 = {};
// object1.property1 = 42;

// console.log(object1.hasOwnProperty("property1"));
// // expected output: true

// console.log(object1.hasOwnProperty("toString"));
// // expected output: false

// console.log(object1.hasOwnProperty("hasOwnProperty"));
// // expected output: falseadder(a, b) {

// const array1 = [1, 2, 3];
// const array2 = [10, 20, 30, 40];
// const v = 42;

// // for (i = 0; i < b.length; i++) {
// //   for (j = 0; j < a.length; j++) {
// //     c = a[i] + b[i];
// //     console.log(c);
// //   }
// // }

// function sum(array1, array2) {
//   let a, b;
//   if (array1.length > array2.length) {
//     a = array1;
//     b = array2;
//   } else {
//     a = array2;
//     b = array1;
//   }
//   return a.map((num, idx) => num + (b[idx] || 0));
// }

// console.log(sum(array1, array2));

const array1 = [1, 2, 3];
const array2 = [10, 20, 30, 40];
const v = 42;

const values = array1.concat(array2);

// console.log(values[4]);

// console.log(values);
let hashTable = {};

values.forEach((value, index) => (hashTable[value] = index));

// console.log(hashTable[10]);
// console.log(hashTable);

let twoSum = function (nums, target) {
  numsIndexes = {};

  for (let i = 0; i < nums.length; i += 1) {
    let currentDifference = target - nums[i];

    if (
      numsIndexes[currentDifference] !== undefined &&
      numsIndexes[currentDifference] !== i
    ) {
      //   return [i, numsIndexes[currentDifference]];
      return false;
    } else {
      //   numsIndexes[nums[i]] = i;
      return true;
    }
  }
};

console.log(twoSum(values, v));
