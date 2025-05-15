let currentIndex = 0;
  const images = document.querySelectorAll('.tekst-billeder img');

  function nextImage() {
    // Fjern 'active' fra nuværende billede
    images[currentIndex].classList.remove('active');
    // Gå til næste billede (loop tilbage til 0 hvis sidst)
    currentIndex = (currentIndex + 1) % images.length;
    // Tilføj 'active' til det nye billede
    images[currentIndex].classList.add('active');
  }