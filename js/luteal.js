document.addEventListener("DOMContentLoaded", () => {
    const bladeGruppe1 = document.querySelectorAll(".figur1,.figur3,.figur5,.figur7,.figur9");
    bladeGruppe1.forEach((blad) => {
      let angle = 1;
      let direction = 2;
  
      setInterval(() => {
        angle += direction * 1;
        if (angle > 50 || angle < -50) {
          direction *= -1;
        }
        blad.style.transform = `rotate(${angle}deg)`;
      }, 150);
    });
  
    const bladeGruppe2 = document.querySelectorAll(".figur2,.figur4,.figur6,.figur8");
    bladeGruppe2.forEach((blad) => {
      let angle = 1;
      let direction = 2;
  
      setInterval(() => {
        angle += direction * 1;
        if (angle > 20 || angle < -20) {
          direction *= -1;
        }
        blad.style.transform = `rotate(${angle}deg)`;
      }, 150);
    });
  });