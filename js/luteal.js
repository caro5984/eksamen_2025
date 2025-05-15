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