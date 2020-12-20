// const nums = 3;
// count = 1;

// a = 1;
// b = 1;
// // c = 0;

// if (nums - 1 == 0) {
//   c = a;
//   //   console.log(a);
// } else if (nums - 1 == 1) {
//   c = b;
//   //   console.log(b);
// } else {
//   while (count <= nums - 1) {
//     c = a + b;
//     a = b;
//     b = c;
//     count++;
//   }
// }

// console.log(c);

// function fibbonaci(num) {
//   let a = 1,
//     b = 0,
//     count;

//   while (num >= 0) {
//     count = a;
//     a = a + b;
//     b = count;
//     num--;
//   }

//   return b;
// }

// console.log(fibbonaci(0));

// /*
function sumOddFibbo(num) {
  let sum = 0;
  let fib = 1;

  while (sum < num) {
    let current = fibo(fib);
    if (current % 2 === 1) {
      sum += current;
    }
    fib++;
  }
  return sum;
}

function fibo(n) {
  if (n <= 1) return n;
  return fibo(n - 1) + fibo(n - 2);
}

console.log(sumOddFibbo(1000));

// function fibbonaci(num) {
//   let sum = 0;
//   let fib = 0;

//   while (sum <= num) {
//     let current = function (fib) {
//       if (b <= 1) return b;
//       fibbonaci(b - 1) + fibbonaci(b - 2);
//     };
//     if (current % 2 === 1) {
//       sum += current;
//     }
//     fib++;
//   }
//   return sum;
// }

// console.log(fibbonaci(6));
