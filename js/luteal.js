//js til blade i baggrunden

// Vælger hvilke blade der styles på siden, og tilføjer animation til dem))
document.addEventListener("DOMContentLoaded", () => {
    const bladeGruppe1 = document.querySelectorAll(".figur1,.figur3,.figur5,.figur7,.figur9"); //gemmer de valgt blade i en liste
    bladeGruppe1.forEach((blad) => { //gennemgår bladene på listen
      let angle = 1; //starter på 1 grad
      let direction = 2; //bestemmer hvor hurtigt og i hvilken retning bladet roterer
  
      setInterval(() => { //Starter en funktion, der gentages hvert 150 millisekunder.
        angle += direction * 1; //Øger vinklen med 2 grader per gang.
        if (angle > 50 || angle < -50) {
          direction *= -1;
        } //Når vinklen når +50 eller -50 grader, vendes retningen, så bladet begynder at rotere den modsatte vej. 

        blad.style.transform = `rotate(${angle}deg)`;
      }, 150); //Anvender den nye vinkel på bladet visuelt med transform: rotate(...).
    }); 

//samme som ovenstående på de restende blade
//Samme princip som før, men her stopper rotationen ved ±20 grader i stedet for ±50. Det giver en mindre bevægelse.
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

//js til billed-tekst der skifter
  let currentIndex = 0;
  const images = document.querySelectorAll('.tekst-billeder img'); //starter ved billede 0 og finder alle billeder i ".tekst-billeder"

  function nextImage() { //funktion til næste billede
    // Fjern 'active' fra nuværende billede
    images[currentIndex].classList.remove('active');
    // Gå til næste billede (loop tilbage til 0 hvis sidst)
    currentIndex = (currentIndex + 1) % images.length;
    // Tilføj 'active' til det nye billede
    images[currentIndex].classList.add('active');
  }

//js til quiz
  function checkAnswer(button, isCorrect) { //Kaldes, når brugeren klikker på et svar. button er det klik-kede svar, isCorrect fortæller om det er rigtigt.
    const questionBox = button.parentElement; //Finder boksen (div) med spørgsmålet, hvor knappen hører til.
    const allButtons = questionBox.querySelectorAll('button'); //Henter alle svarmuligheder i den boks.
  
    // Hvis knapperne allerede er deaktiveret, gør ingenting
    if (allButtons[0].disabled) return;
  
    allButtons.forEach(btn => {
      btn.disabled = true;
      btn.classList.remove('selected'); // fjern tidligere markering
    });
    //Deaktiverer alle svarknapper og fjerner eventuel tidligere markering.
  
    button.classList.add('selected'); //Markerer det klik-kede svar visuelt.
  
    if (isCorrect) {
      button.classList.add('correct');
    } else {
      button.classList.add('incorrect');
    }
    //Tilføjer farve/styling afhængigt af, om svaret er korrekt eller forkert.
  
    // Tjek om quizzen er færdig
    checkQuizStatus();
  }
  
  function checkQuizStatus() {
    const allQuestions = document.querySelectorAll('.question');
    let allAnswered = true;
    let allCorrect = true;
    //Finder alle spørgsmål. Opretter to variabler til at holde styr på, om alle er besvaret og rigtige.
  
    allQuestions.forEach(question => {
      const buttons = question.querySelectorAll('button');
      const oneIsDisabled = Array.from(buttons).some(btn => btn.disabled);
      if (!oneIsDisabled) allAnswered = false;
      //Hvis ingen knapper i et spørgsmål er deaktiveret, så er det ikke besvaret.
  
      const hasIncorrect = Array.from(buttons).some(btn => btn.classList.contains('incorrect'));
      if (hasIncorrect) allCorrect = false;
    });
    //Hvis mindst én knap er markeret som forkert, er quizzen ikke helt rigtig.
  
  
    
  console.log("checkQuizStatus:", { allAnswered, allCorrect }); //Debug: viser status i konsollen.
  
    // Når alle spørgsmål er besvaret
    if (allAnswered) {
      const resetBtn = document.getElementById('reset-btn');
      resetBtn.style.display = 'block';
      resetBtn.textContent = allCorrect ? 'Flot klaret!' : 'Prøv igen';
    }
  }
  //Når alle spørgsmål er besvaret, vises knappen til at starte forfra – med forskellig tekst afhængigt af resultatet.
  
  function resetQuiz() {
    const allButtons = document.querySelectorAll('.question button');
    //Finder alle svarknapper.
  
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