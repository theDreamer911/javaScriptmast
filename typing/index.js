const textarea = document.querySelector("textarea");
const letbutton = document.querySelector("#btn");
const counter = document.querySelector("#counterFooter");
const activeCount = document.querySelector("#number");

textarea.onkeydown = function () {
  activeCount.innerHTML = 140;
  if (activeCount.innerHTML <= 140) {
    activeCount.innerHTML = activeCount.innerHTML - this.value.length;
    activeCount.style.color = "white";
    counter.style.color = "white";
  }
  if (activeCount.innerHTML <= 20) {
    activeCount.style.color = "red";
    counter.style.color = "red";
    letbutton.classList.remove("buttonDisabled");
  }
  if (activeCount.innerHTML < 0) {
    activeCount.style.color = "red";
    counter.style.color = "red";
    letbutton.classList.add("buttonDisabled");
  }
};
