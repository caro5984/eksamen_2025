/**
 * Får figuren til at flyve tilbage til standpunktet efter lidt tid, når man slipper den.
 * ChatGPT: "Kan jeg få min 3D figur til at flyve tilbage til standpunktet? (https://chatgpt.com/share/682454f2-7ac8-8009-a73a-6c2de8057fc5)"
 */
const modelViewer = document.querySelector('model-viewer');

// Gem startpositionen for kameraet
const defaultOrbit = '180deg 0deg auto';

// Lyt efter at brugeren holder op med at interagere
modelViewer.addEventListener('camera-change', () => {
  clearTimeout(modelViewer.resetTimeout); // nulstil evt. gammel timeout

  // Vent lidt, før vi nulstiller (fx 1.5 sek efter sidste bevægelse)
  modelViewer.resetTimeout = setTimeout(() => {
    modelViewer.cameraOrbit = defaultOrbit;
  }, 1500);
});