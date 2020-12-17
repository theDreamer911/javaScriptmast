// test = Math.floor(Math.random() * 6 + 1);
// console.log(test);

// document.getElementsByClassName("dice").addEventListener("click", function () {
//   document.body.style.backgroundColor = "red";
// });

document.addEventListener("click", myFunction);
// document.addEventListener("click", function () {
//   document.body.style.backgroundColor = "red";
// });

function myFunction() {
  document.getElementsByClassName("dice").style.backgroundColor = "red";
}
