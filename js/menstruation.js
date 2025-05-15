function checkAnswer(button, isCorrect) {
    // Deaktiver alle knapper i dette spørgsmål
    const allButtons = button.parentElement.querySelectorAll('button');
    allButtons.forEach(btn => btn.disabled = true);
  
    // Marker korrekt/forkert
    if (isCorrect) {
      button.classList.add('correct');
    } else {
      button.classList.add('incorrect');
      // Find og marker det rigtige svar
      allButtons.forEach(btn => {
        if (btn !== button && btn.onclick.toString().includes('true')) {
          btn.classList.add('correct');
        }
      });
    }
  }



  