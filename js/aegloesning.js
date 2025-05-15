// Vælger hvilke sommerfugle der styles på siden, og tilføjer animation til dem))
document.addEventListener("DOMContentLoaded", () => {
  const sommerfugle = document.querySelectorAll(".figur1,.figur3,.figur5,.figur7,.figur9");


  sommerfugle.forEach((fugl) => {
    let angle = 1;
    let direction = 2;

    setInterval(() => {
      // Skift vinkel frem og tilbage mellem -10 og +10
      angle += direction * 1;

      if (angle > 70 || angle < -20) {
        direction *= -1; // Skift retning
      }

      fugl.style.transform = `rotate(${angle}deg)`;
    }, 70); // Justér hastigheden her (jo lavere tal, jo hurtigere)
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sommerfugle = document.querySelectorAll(".figur2,.figur4,.figur6,.figur8");

  sommerfugle.forEach((fugl) => {
    let angle = 1;
    let direction = 5;

    setInterval(() => {
      // Skift vinkel frem og tilbage mellem -10 og +10
      angle += direction * 1;

      if (angle > 20 || angle < -10) {
        direction *= -1; // Skift retning
      }

      fugl.style.transform = `rotate(${angle}deg)`;
    }, 70); // Justér hastigheden her (jo lavere tal, jo hurtigere)
  });
});