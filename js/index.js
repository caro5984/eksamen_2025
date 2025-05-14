/**
 * Får figuren til at flyve tilbage til standpunktet efter lidt tid, når man slipper den.
 * ChatGPT: "Kan jeg få min 3D figur til at flyve tilbage til standpunktet? (https://chatgpt.com/share/682454f2-7ac8-8009-a73a-6c2de8057fc5)"
 */

// Find <model-viewer> elementet i HTML'en og gem det i en variabel
const modelViewer = document.querySelector('model-viewer');

// Gem startpositionen for kameraet (kameraets udgangspunkt/orientering)
const defaultOrbit = '180deg 0deg auto';

// Lyt efter hver gang kameraets position ændres (brugeren interagerer med modellen)
modelViewer.addEventListener('camera-change', () => {

  // Stop en eventuel tidligere timeout, så vi ikke nulstiller for tidligt
  clearTimeout(modelViewer.resetTimeout);

  // Start en ny timeout: hvis brugeren ikke rører modellen i 1,2 sekunder
  // så nulstil kameraets position til den oprindelige vinkel
  modelViewer.resetTimeout = setTimeout(() => {
    modelViewer.cameraOrbit = defaultOrbit; // Sæt kameraet tilbage til startpositionen
  }, 1200); // 1200 millisekunder = 1,2 sekunder
});

/** Får knapperne på forsiden til at flyde over siden som en glidende overgang til den næste side, med et overlay i knappens farve */

//knapperne på forsiden
const links = document.querySelectorAll('a[href$=".html"]');
const overlay = document.getElementById('transitionOverlay');

links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const img = this.querySelector('img');
    const rect = img.getBoundingClientRect();
    const farve = this.dataset.farve || '#000';

    overlay.style.backgroundColor = farve;
    overlay.style.left = rect.left + rect.width / 2 + 'px';
    overlay.style.top = rect.top + rect.height / 2 + 'px';
    overlay.classList.add('expand');

    const clone = img.cloneNode(true);
    clone.style.position = 'fixed';
    clone.style.left = rect.left + 'px';
    clone.style.top = rect.top + 'px';
    clone.style.width = rect.width + 'px';
    clone.style.height = rect.height + 'px';
    clone.style.transition = 'transform 0.7s ease-in-out, opacity 0.7s';
    clone.style.zIndex = 1001;
    document.body.appendChild(clone);

    setTimeout(() => {
      clone.style.transform = 'scale(20)';
      clone.style.opacity = '0';
    }, 10);

    setTimeout(() => {
      window.location.href = this.href;
    }, 700);
  });
});
//knapperne slutter
