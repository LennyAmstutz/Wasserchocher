document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".hero-image-slider img");
  const totalImages = images.length;
  let imageOrder = [...Array(totalImages).keys()]; // Erstelle ein Array mit den Indizes [0, 1, 2]
  let currentIndex = 0;

  // Funktion zum Mischen der Bildreihenfolge
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Funktion zum Wechseln des Bildes
  function changeImage() {
    // Aktuelles Bild ausblenden
    const currentImage = images[imageOrder[currentIndex]];
    currentImage.classList.remove("active");

    // Nächsten Index berechnen und Reihenfolge bei Bedarf mischen
    currentIndex = (currentIndex + 1) % totalImages;

    if (currentIndex === 0) {
      shuffleArray(imageOrder); // Mische die Reihenfolge neu, wenn alle Bilder gezeigt wurden
    }

    // Neues Bild einblenden
    const nextImage = images[imageOrder[currentIndex]];
    nextImage.classList.add("active");
  }

  // Bild alle 3 Sekunden ändern
  setInterval(changeImage, 3000);

  // Starte mit dem ersten Bild
  images[imageOrder[currentIndex]].classList.add("active");
});
