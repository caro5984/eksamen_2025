
// Vælger hvilke sommerfugle der styles på siden, og tilføjer animation til dem))
document.addEventListener("DOMContentLoaded", () => {
  const sommerfugle = document.querySelectorAll(".figur1,.figur3,.figur5,.figur7,.figur9");

  // laver rotation for hver sommerfugl))
  sommerfugle.forEach((sommerfugl) => {
    let angle = 1; // Startvinkel (i grader)
    let direction = 2; // Rotationsretning: 2 = med uret, -2 = mod uret

    // Gentag funktionen med jævne mellemrum (hver 100 millisekunder)
    setInterval(() => {
      // Ændr vinklen lidt i den aktuelle retning
      angle += direction * 1;

      // Hvis vinklen overstiger 50 grader i nogen retning, vender rotationen
      if (angle > 50 || angle < -50) {
        direction *= -1; // Skift retning
      }

      sommerfugl.style.transform = `rotate(${angle}deg)`;
    }, 150); // intervallet bestemmer hvor hurtigt de vipper. (jo lavere tal, jo hurtigere)
  });
});

// gentager overstående javascript for de resterende sommerfulge))
document.addEventListener("DOMContentLoaded", () => {
  const sommerfugle = document.querySelectorAll(".figur2,.figur4,.figur6,.figur8");

  sommerfugle.forEach((sommerfugl) => {
    let angle = 1;
    let direction = 2;

    setInterval(() => {
      angle += direction * 1;

      // ændrer lidt på vinkles således at hvis den overstiger 20 grader i nogen retning, vender rotationen
      if (angle > 20 || angle < -20) {
        direction *= -1;
      }

      sommerfugl.style.transform = `rotate(${angle}deg)`;
    }, 150); 
  });
});

 //js til quiz
function checkAnswer(button, isCorrect) {
  const questionBox = button.parentElement;
  const allButtons = questionBox.querySelectorAll('button');

  // Hvis knapperne allerede er deaktiveret, gør ingenting
  if (allButtons[0].disabled) return;

  // Deaktiverer alle knapper i spørgsmålet
  allButtons.forEach(btn => {
    btn.disabled = true;
    btn.classList.remove('selected'); // fjern tidligere markering
  });

  // Markerer den valgte knap
  button.classList.add('selected');

  // Tilføjer korrekt/ukorrekt klasse til den valgte knap
  if (isCorrect) {
    button.classList.add('correct');
  } else {
    button.classList.add('incorrect');
  }

  // Tjek om quizzen er færdig
  checkQuizStatus();
}

// Tjekker om quizzen er færdig
function checkQuizStatus() {
  const allQuestions = document.querySelectorAll('.question'); 
  let allAnswered = true; 
  let allCorrect = true; 
  //Finder spørgsmålene. holder styr på om de alle er besvaret og rigtige.

  // Tjekker om alle spørgsmål er besvaret og om de er korrekte
  allQuestions.forEach(question => {
    const buttons = question.querySelectorAll('button');
    const oneIsDisabled = Array.from(buttons).some(btn => btn.disabled);
    if (!oneIsDisabled) allAnswered = false;
    //Hvis ingen knapper i et spørgsmål er deaktiveret, så er det ikke besvaret.

    // Tjekker om der er nogen knapper med klassen 'incorrect'
    const hasIncorrect = Array.from(buttons).some(btn => btn.classList.contains('incorrect'));
    if (hasIncorrect) allCorrect = false;
  });//Hvis mindst én knap er markeret som forkert, er quizzen ikke helt rigtig.


  
console.log("checkQuizStatus:", { allAnswered, allCorrect });

  // Når alle spørgsmål er besvaret
  if (allAnswered) {
    const resetBtn = document.getElementById('reset-btn');
    resetBtn.style.display = 'block';
    resetBtn.textContent = allCorrect ? 'Flot klaret!' : 'Prøv igen'; 
  }
}

//Når spørgsmålene er besvaret, vises knappen til at starte forfra – med forskellig tekst afhængigt af resultatet.
function resetQuiz() {
  const allButtons = document.querySelectorAll('.question button');

  allButtons.forEach(btn => {
    btn.disabled = false;
    btn.classList.remove('correct', 'incorrect', 'selected');
  });
  //Aktiverer dem igen og fjerner farver/markering.

  const resetBtn = document.getElementById('reset-btn');
  resetBtn.style.display = 'none';
  resetBtn.textContent = 'Prøv igen';
}
//Skjuler "Prøv igen"-knappen og nulstiller dens tekst.