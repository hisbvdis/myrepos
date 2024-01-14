const carousel = document.querySelector("[data-js='carousel']");
const slides = carousel.querySelector("[data-js='slides']");
const prevBtn = carousel.querySelector("[data-js='prevBtn']");
const nextBtn = carousel.querySelector("[data-js='nextBtn']");
const pagination = carousel.querySelector("[data-js='pagination']");

prevBtn.addEventListener("click", () => {
  slides.scrollBy({left: -450, behavior: "smooth"});
})

nextBtn.addEventListener("click", () => {
  slides.scrollBy({left: 450, behavior: "smooth"});
})

slides.addEventListener("scroll", ({target}) => {
  const index = Math.floor(target.scrollLeft / 450);
  pagination.querySelector(".pagination__btn--active").classList.remove("pagination__btn--active");
  pagination.children[index].classList.add("pagination__btn--active");
})

pagination.addEventListener("click", ({target}) => {
  if (!target.classList.contains("pagination__btn")) return;
  slides.scrollTo({left: target.dataset.js * 450, behavior: "smooth"});
})
