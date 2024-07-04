let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";  
        slides[i].style.animationName = "";
        slides[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}

    let currentSlide = slides[slideIndex - 1];
    currentSlide.style.display = "block";
    currentSlide.classList.add("active");

    setTimeout(showSlides, 5000); // Wechsel alle 5 Sekunden
}

showSlides();
