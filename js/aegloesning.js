
// Vælger hvilke sommerfugle der styles på siden, og tilføjer animation til dem))
document.addEventListener("DOMContentLoaded", () => {
  const sommerfugle = document.querySelectorAll(".figur1,.figur3,.figur5,.figur7,.figur9");

  // laver rotation for hver sommerfugl))
  sommerfugle.forEach((fugl) => {
    let angle = 1; // Startvinkel (i grader)
    let direction = 2; // Rotationsretning: 1 = med uret, -1 = mod uret

    // Gentag funktionen med jævne mellemrum (hver 100 millisekunder)
    setInterval(() => {
      // Ændr vinklen lidt i den aktuelle retning
      angle += direction * 1;

      // Hvis vinklen overstiger 50 grader i nogen retning, vender rotationen
      if (angle > 50 || angle < -50) {
        direction *= -1; // Skift retning
      }

      fugl.style.transform = `rotate(${angle}deg)`;
    }, 150); // intervallet bestemmer hvor hurtigt de vipper. (jo lavere tal, jo hurtigere)
  });
});

// gentager overstående javascript for de resterende sommerfulge))
document.addEventListener("DOMContentLoaded", () => {
  const sommerfugle = document.querySelectorAll(".figur2,.figur4,.figur6,.figur8");

  sommerfugle.forEach((fugl) => {
    let angle = 1;
    let direction = 2;

    setInterval(() => {
      angle += direction * 1;

      // ændrer lidt på vinkles således at hvis den overstiger 20 grader i nogen retning, vender rotationen
      if (angle > 20 || angle < -20) {
        direction *= -1;
      }

      fugl.style.transform = `rotate(${angle}deg)`;
    }, 150); 
  });
});