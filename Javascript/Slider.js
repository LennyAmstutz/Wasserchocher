let currentSlide = 0;
const slides = document.querySelectorAll(".event");
const totalSlides = slides.length;

function showSlide(index) {
  const slider = document.querySelector(".event-slider");
  slider.style.transform = `translateX(${-index * 100}%)`;
}

function prevSlide() {
  currentSlide = currentSlide > 0 ? currentSlide - 1 : totalSlides - 1;
  showSlide(currentSlide);
}

function nextSlide() {
  currentSlide = currentSlide < totalSlides - 1 ? currentSlide + 1 : 0;
  showSlide(currentSlide);
}
