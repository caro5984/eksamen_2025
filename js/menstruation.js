//js til snefnug i baggrunden

// Vælger hvilke snefnug der styles på siden, og tilføjer animation til dem))
document.addEventListener("DOMContentLoaded", () => {
  const snefnug = document.querySelectorAll(".figur1,.figur3,.figur5,.figur7,.figur9,.figur11");

  // laver rotation for hver snefnug ))
  snefnug.forEach((snefnug) => {
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

      snefnug.style.transform = `rotate(${angle}deg)`;
    }, 150); // intervallet bestemmer hvor hurtigt de vipper. (jo lavere tal, jo hurtigere)
  });
});

// gentager overstående javascript for de resterende snefnug))
document.addEventListener("DOMContentLoaded", () => {
  const snefnug = document.querySelectorAll(".figur2,.figur4,.figur6,.figur8,.figur10");

  snefnug.forEach((snefnug) => {
    let angle = 1;
    let direction = 2;

    setInterval(() => {
      angle += direction * 1;

      // ændrer lidt på vinkles således at hvis den overstiger 20 grader i nogen retning, vender rotationen
      if (angle > 20 || angle < -20) {
        direction *= -1;
      }

      snefnug.style.transform = `rotate(${angle}deg)`;
    }, 150); 
  });
});



//Funktion der håndterer, når en svar-knap bliver trykket på 
function checkAnswer(button, isCorrect) {
    const questionBox = button.parentElement; // Finder boksen der indeholder spørgsmålet
    const allButtons = questionBox.querySelectorAll('button'); // Finder alle svarmuligheder i boksen
  
    //Hvis knapperne allerede er deaktiveret, gør ingenting – spørgsmålet er allerede besvaret
    if (allButtons[0].disabled) return;
  
    // Deaktiver alle knapper og fjerner evt. tidligere markering
    allButtons.forEach(btn => {
      btn.disabled = true;
      btn.classList.remove('selected');
    });
  
    // Marker den valgte knap
    button.classList.add('selected');
  
    // Tilføj korrekt/forkert farve (grøn eller rød) baseret på svaret
    if (isCorrect) {
      button.classList.add('correct');
    } else {
      button.classList.add('incorrect');
    }
  
    // Tjek om quizzen er færdig
    checkQuizStatus();
  }
  
  // Funktion der tjekker om alle spørgsmål er besvaret og om alle svar er korrekte
  function checkQuizStatus() {
    const allQuestions = document.querySelectorAll('.question');
    let allAnswered = true;
    let allCorrect = true;
  
    allQuestions.forEach(question => {
      const buttons = question.querySelectorAll('button');
  
      // Hvis mindst én knap ikke er deaktiveret, er spørgsmålet ikke besvaret
      const oneIsDisabled = Array.from(buttons).some(btn => btn.disabled);
      if (!oneIsDisabled) allAnswered = false;
  
      // Hvis mindst én knap er markeret som forkert
      const hasIncorrect = Array.from(buttons).some(btn => btn.classList.contains('incorrect'));
      if (hasIncorrect) allCorrect = false;
    });
  
    
  
    // Hvis alle spørgsmål er besvaret, vis reset-knappen med tilhørende besked
    if (allAnswered) {
      const resetBtn = document.getElementById('reset-btn');
      resetBtn.style.display = 'block';
      resetBtn.textContent = allCorrect ? 'Flot klaret!' : 'Prøv igen';
    }
  }
  
  // Funktion til at nulstille quizzen
  function resetQuiz() {
    const allButtons = document.querySelectorAll('.question button');
  
    // Gør alle knapper aktive igen og fjern farver/markering
    allButtons.forEach(btn => {
      btn.disabled = false;
      btn.classList.remove('correct', 'incorrect', 'selected');
    });
  
    // Skjul reset-knappen og nulstil dens tekst
    const resetBtn = document.getElementById('reset-btn');
    resetBtn.style.display = 'none';
    resetBtn.textContent = 'Prøv igen';
  }
  

//js til video

  // Afspilning af video, når siden er klar
  document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("video");
    const playBtn = document.getElementById("play-btn");
  
    // Når brugeren klikker på play-knappen starter videoen
    playBtn.addEventListener("click", function () {
      video.play()
        .then(() => {
          playBtn.style.display = "none"; // Skjuler play-knappen under afspilning
        })
        .catch(err => {
          console.error("Video kunne ikke afspilles:", err);
        });
    });
  
    // Når videoen slutter - kommer play knappen frem igen
    video.addEventListener("ended", function () {
      video.currentTime = 0; // Gå til starten af videoen
      playBtn.style.display = "block"; // Vis play-knappen igen
    });
  });