const str = "cabca";

cek = str.includes("c");
console.log(cek);

splitin = str.split("").sort();
console.log(splitin);

differ = [...new Set(splitin)];
console.log(differ);

finish = differ.length;

console.log(finish);
