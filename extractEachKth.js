let variable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let notThree = [];

// for (let i = 0; i < variable.length; i++) {
//   if (variable[i] % 3 !== 0) {
//     notThree.push(variable[i]);
//   }
// }

// console.log(notThree);

let notThree = variable.filter((num) => num % 3 !== 0);
console.log(notThree);
