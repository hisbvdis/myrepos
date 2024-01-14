const btn = document.querySelector("button");
const flipperInner = document.querySelector(".flipper__inner");

btn.addEventListener("click", () => {
  flipperInner.classList.toggle("flipper__inner--isFront")
  flipperInner.classList.toggle("flipper__inner--isBack")
})