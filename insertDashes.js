const value = "aba caba";

value2 = value.split(" ");

value3 = [];
for (i = 0; i < value2.length; i++) {
  value3.push(value2[i].split("").join("-"));
}

value5 = value3.join(" ");
console.log(value5);
