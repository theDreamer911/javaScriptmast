function centuryFromYear(num) {
  century = num / 100;
  millenia = century - Math.floor(century) !== 0;
  if (millenia) {
    century = Math.floor(century) + 1;
    return `it's not milenia age ${century}`;
  } else if (century) {
    return `it's milenia age ${century}`;
  }
}

console.log(centuryFromYear(1905));

function number_test(n) {
  var result = n - Math.floor(n) !== 0;

  if (result) return `Number has a decimal place ${result}`;
  else return `It is a whole number ${result}`;
}

console.log(number_test(25.66));

console.log(number_test(10));
