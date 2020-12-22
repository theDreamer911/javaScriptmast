const gallery = document.querySelector(".gallery");
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
gallery.style.transition = "all .2s ease";

let current = 0;
let change = 220;

if (current == 0) {
  previous.style.opacity = "0";
  previous.style.visibility = "hidden";
  previous.style.cursor = "default";
}

next.addEventListener("click", () => {
  if (current < 880) {
    gallery.style.transform = `translateX(-${(current += change)}px)`;

    previous.style.opacity = "1";
    previous.style.visibility = "visible";
    previous.style.cursor = "pointer";
  }
  if (current == 880) {
    next.style.opacity = "0";
    next.style.visibility = "hidden";
  }
});

previous.addEventListener("click", () => {
  if (current > 0) {
    gallery.style.transform = `translateX(-${(current -= change)}px)`;

    next.style.opacity = "1";
    next.style.visibility = "visible";
    next.style.cursor = "pointer";
  }

  if (current == 0) {
    previous.style.visibility = "hidden";
  }
});
