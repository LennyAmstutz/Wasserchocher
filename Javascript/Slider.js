let slideIndex = 0;
const slides = document.querySelectorAll(".events .event");
const totalSlides = slides.length;

function showSlide(index) {
  const slider = document.querySelector(".event-slider");
  slider.style.transform = `translateX(-${(index * 100) / totalSlides}%)`;
}

function prevSlide() {
  slideIndex = slideIndex > 0 ? slideIndex - 1 : totalSlides - 1;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex = slideIndex < totalSlides - 1 ? slideIndex + 1 : 0;
  showSlide(slideIndex);
}

showSlide(slideIndex);
