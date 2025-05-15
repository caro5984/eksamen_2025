function checkAnswer(button, isCorrect) {
    const questionBox = button.parentElement;
    const allButtons = questionBox.querySelectorAll('button');
  
    // Deaktiver knapper i spørgsmålet
    allButtons.forEach(btn => btn.disabled = true);
  
    if (isCorrect) {
      button.classList.add('correct');
    } else {
      button.classList.add('incorrect');
      allButtons.forEach(btn => {
        if (btn !== button && btn.onclick.toString().includes('true')) {
          btn.classList.add('correct');
        }
      });
    }
  
    // Tjek om alle spørgsmål er besvaret
    checkQuizStatus();
  }

  function checkQuizStatus() {
    const allQuestions = document.querySelectorAll('.question');
    let allAnswered = true;
    let allCorrect = true;
  
    allQuestions.forEach(question => {
      const buttons = question.querySelectorAll('button');
      const answered = Array.from(buttons).some(btn => btn.disabled);
      if (!answered) allAnswered = false;
  
      const hasIncorrect = Array.from(buttons).some(btn =>
        btn.classList.contains('incorrect')
      );
      if (hasIncorrect) allCorrect = false;
    });
  
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
      btn.classList.remove('correct', 'incorrect');
    });
  
    // Skjul knap igen
    const resetBtn = document.getElementById('reset-btn');
    resetBtn.style.display = 'none';
  }


  