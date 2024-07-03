let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";  
        slides[i].style.animationName = "";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}

    let currentSlide = slides[slideIndex - 1];
    currentSlide.style.display = "block";
    currentSlide.style.animationName = "slideInLeft";
    currentSlide.style.opacity = "1";

    setTimeout(() => {
        currentSlide.style.animationName = "slideOutLeft";
        setTimeout(() => {
            currentSlide.style.display = "none";
        }, 1000); // Dauer der Animation muss hier übereinstimmen
    }, 4000); // Zeigt das Bild für 4 Sekunden (da die Animation 1 Sekunde dauert)

    setTimeout(showSlides, 5000); // Wechsel alle 5 Sekunden
}

showSlides();
