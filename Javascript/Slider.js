let currentSlide = 0;

function showSlides() {
  const slider = document.querySelector(".event-slider");
  const slides = document.querySelectorAll(".event");
  const totalSlides = slides.length;
  const slideWidth = slides[0].clientWidth;

  if (currentSlide >= totalSlides / 3) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = Math.floor(totalSlides / 3) - 1;
  }

  slider.style.transform = `translateX(${-currentSlide * slideWidth * 3}px)`;
}

function nextSlide() {
  currentSlide++;
  showSlides();
}

function prevSlide() {
  currentSlide--;
  showSlides();
}

document.addEventListener("DOMContentLoaded", showSlides);
