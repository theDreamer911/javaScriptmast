const str = "49.00";

str2 = str.split(".");
// str3 = parseInt(str2);
console.log(str2);
// console.log(str3);
let valid = true;

for (i = 0; i < str2.length; i++) {
  console.log(str2[i]);
  //   console.log(typeof parseInt(str2[i]));
  if (str2[0] <= 24 && str2[1] <= 60) {
    console.log(valid);
  } else {
    console.log(!valid);
  }
  //   if (0 <= str2[1] <= 60) {
  //     console.log(valid);
  //   } else {
  //     console.log(!valid);
  //   }
}

// if (str2[1] > 60) str3 = parseInt(str);
// console.log(str3, 6);
