// Vælger hvilke blomster der styles på siden, og tilføjer animation til dem))
document.addEventListener("DOMContentLoaded", () => {
  const blomster = document.querySelectorAll(".figur1,.figur3,.figur5,.figur7,.figur9,.figur11");

  // laver rotation for hver blomst))
  blomster.forEach((blomster) => {
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

      blomster.style.transform = `rotate(${angle}deg)`;
    }, 150); // intervallet bestemmer hvor hurtigt de vipper. (jo lavere tal, jo hurtigere)
  });
});

// gentager overstående javascript for de resterende sommerfulge))
document.addEventListener("DOMContentLoaded", () => {
  const blomster = document.querySelectorAll(".figur2,.figur4,.figur6,.figur8,.figur10");

  blomster.forEach((blomster) => {
    let angle = 1;
    let direction = 2;

    setInterval(() => {
      angle += direction * 1;

      // ændrer lidt på vinkles således at hvis den overstiger 20 grader i nogen retning, vender rotationen
      if (angle > 20 || angle < -20) {
        direction *= -1;
      }

      blomster.style.transform = `rotate(${angle}deg)`;
    }, 150); 
  });
});


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

  function checkAnswer(button, isCorrect) {
    const questionBox = button.parentElement;
    const allButtons = questionBox.querySelectorAll('button');
  
    // Hvis knapperne allerede er deaktiveret, gør ingenting
    if (allButtons[0].disabled) return;
  
    allButtons.forEach(btn => {
      btn.disabled = true;
      btn.classList.remove('selected'); // fjern tidligere markering
    });
  
    button.classList.add('selected');
  
    if (isCorrect) {
      button.classList.add('correct');
    } else {
      button.classList.add('incorrect');
    }
  
    // Tjek om quizzen er færdig
    checkQuizStatus();
  }
  
  function checkQuizStatus() {
    const allQuestions = document.querySelectorAll('.question');
    let allAnswered = true;
    let allCorrect = true;
  
    allQuestions.forEach(question => {
      const buttons = question.querySelectorAll('button');
      const oneIsDisabled = Array.from(buttons).some(btn => btn.disabled);
      if (!oneIsDisabled) allAnswered = false;
  
      const hasIncorrect = Array.from(buttons).some(btn => btn.classList.contains('incorrect'));
      if (hasIncorrect) allCorrect = false;
    });
  

    
  console.log("checkQuizStatus:", { allAnswered, allCorrect });

    // Når alle spørgsmål er besvaret
    if (allAnswered) {
      const resetBtn = document.getElementById('reset-btn');
      resetBtn.style.display = 'block';
      resetBtn.textContent = allCorrect ? 'Flot klaret!' : 'Prøv igen';
    }
  }


  function resetQuiz() {
    const allButtons = document.querySelectorAll('.question button');
  
    allButtons.forEach(btn => {
      btn.disabled = false;
      btn.classList.remove('correct', 'incorrect', 'selected');
    });
  
    const resetBtn = document.getElementById('reset-btn');
    resetBtn.style.display = 'none';
    resetBtn.textContent = 'Prøv igen';
  }
