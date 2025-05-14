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