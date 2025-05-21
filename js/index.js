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

//KNAPPERNE I HJØRNENE PÅ INDEX-SIDEN

/** Får knapperne på forsiden til at flyde over siden som en glidende overgang til den næste side, med et overlay i knappens farve */

const links = document.querySelectorAll('a[href$=".html"]'); //Finder alle <a>-tags, der linker til en HTML-side (slutter på .html). Det er vores knapper.
const overlay = document.getElementById('transitionOverlay'); // Henter det element, der fungerer som overlay til overgangseffekten (den runde cirkel).

links.forEach(link => { // Looper igennem hvert link (hver knap), så vi kan tilføje funktionalitet til dem.
  link.addEventListener('click', function (e) { // Tilføjer en 'click'-event til hvert link. Kører, når brugeren klikker på en knap.
    e.preventDefault(); //forhindrer siden i at skifte med det samme, så vi kan nå at se animationen

    const img = this.querySelector('img'); // Finder billedet (<img>) inde i det klikkede link. Altså billedet der er sat ind som knap)
    const rect = img.getBoundingClientRect(); // Finder billedets placering og størrelse på skærmen.
    const farve = this.dataset.farve || '#000'; // Tager den farve, der er sat som data-attribut på linket i HTML (data-farve), eller bruger sort som standard.

    overlay.style.backgroundColor = farve; // Giver overlayet den rigtige baggrundsfarve, som matcher den næste sides farvetema.
    overlay.style.left = rect.left + rect.width / 2 + 'px'; // Positionerer overlayets center i midten af knappen.
    overlay.style.top = rect.top + rect.height / 2 + 'px'; // Positionerer overlayets center i midten af knappen.
    overlay.classList.add('expand'); // Tilføjer CSS-klassen 'expand', som sætter gang i animationen (cirklen vokser).

    const clone = img.cloneNode(true); // Laver en kopi af det billede (knap), der blev klikket på.
    clone.style.position = 'fixed'; // Gør kopien "fast" i forhold til skærmen og er ikke afhængig af scroll eller layout.
    clone.style.left = rect.left + 'px'; // Giver kopien samme position som originalen.
    clone.style.top = rect.top + 'px'; // Giver kopien samme position som originalen.
    clone.style.width = rect.width + 'px'; // Giver kopien samme bredde som originalen.
    clone.style.height = rect.height + 'px'; // Giver kopien samme højde som originalen.
    clone.style.transition = 'transform 0.7s ease-in-out, opacity 0.7s'; // Definerer animationen: Kopien skal vokse og forsvinde blødt.
    clone.style.zIndex = 1001; // Sørger for at kopien ligger over alt andet (også overlayet), så man kan se at knappen gennem hele animationen.
    document.body.appendChild(clone); // Tilføjer kopien til dokumentet, så den faktisk vises og kan animeres.

    setTimeout(() => { // Starter en animation lidt forsinket (efter 10ms), så browseren når at registrere kopien.
      clone.style.transform = 'scale(20)'; // Kopien vokser sig 20 gange større).
      clone.style.opacity = '0'; // Kopien fader ud.
    }, 10);

    setTimeout(() => { // Venter 700ms (samme som animationens varighed), før siden skifter.
      window.location.href = this.href; // Siden skifter (href fra linket).
    }, 700);
  });
});
//KNAPPERNE SLUTTER
