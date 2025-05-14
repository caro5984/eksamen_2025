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