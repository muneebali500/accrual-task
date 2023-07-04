const carousel = document.querySelector(".business-solutions__carousel");
const carouselCard = document.querySelector(
  ".business-solutions__carousel--card"
);
const carouselLeftArrow = document.getElementById("carousel-left-arrow");
const carouselRightArrow = document.getElementById("carousel-right-arrow");

carouselLeftArrow.addEventListener("click", (e) => {
  carousel.scrollTo({
    left: carousel.scrollLeft + carouselCard.clientWidth + 16,
    behavior: "smooth",
  });
});

carouselRightArrow.addEventListener("click", (e) => {
  carousel.scrollTo({
    left: carousel.scrollLeft - carouselCard.clientWidth - 16,
    behavior: "smooth",
  });
});
