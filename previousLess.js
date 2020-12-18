// const nums = [3, 5, 2, 4, 5];

// function customValidate(array) {
//   let length = array.length;
//   return array.every(function (value, index) {
//     let nextIndex = index + 1;
//     return nextIndex < length ? value <= array[nextIndex] : true;
//   });
// }

// console.log(customValidate([1, 2, 3, 4, 5]));

function arrayPreviousLess(arr) {
  let newArr = [];

  for (i = 0; i < arr.length; i++) {
    // arr[i - 1] < arr[i] ? newArr.push(arr[i - 1]) : newArr.push(-1);
    if (arr[i] > arr[i - 1]) {
      newArr.push(arr[i - 1]);
    } else {
      newArr.push(-1);
    }
  }
  return newArr;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
