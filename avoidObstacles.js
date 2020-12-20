// const jumpper = [5, 3, 6, 7, 9];
// // inputArray.sort();

// function obstacle(obs) {
//   let obser = obs.sort();
//   let up = 1;
//   let hitted = true;

//   while (hitted == true) {
//     hitted = false;
//     up += 3;

//     for (i = 0; i < obser.length; i++) {
//       if (obser[i] % hitted == 0) {
//         hitted = true;
//       }
//     }
//     return up;
//   }
// }

// console.log(obstacle(jumpper));

function avoidance(up) {
  let max = Math.max(...up);
  for (let i = 1; i < max; i++) {
    let divs = up.some((x) => x % i == 0);
    if (!divs) return i;
  }
  return max + 1;
}
const jumpper = [5, 3, 6, 7, 9];
console.log(avoidance(jumpper));
