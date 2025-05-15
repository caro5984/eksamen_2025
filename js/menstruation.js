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
      resetBtn.textContent = allCorrect ? 'Tillykke!' : 'Prøv igen';
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

