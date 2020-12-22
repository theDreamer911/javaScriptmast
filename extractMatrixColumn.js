const matrix = [
  [1, 1, 1, 2],
  [0, 5, 0, 5],
  [2, 1, 3, 6],
];
const column = 2;
const matrixColumn = [];

for (i = 0; i < matrix.length; i++) {
  for (j = 0; j < matrix[i].length; j++) {
    matrixColumn.push(matrix[i][2]);
    break;
  }
}

console.log(matrixColumn);
