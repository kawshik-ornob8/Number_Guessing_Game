let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;

const guessInput = document.getElementById("guess-input");
const submitBtn = document.getElementById("submit-btn");
const feedback = document.getElementById("feedback");
const restartBtn = document.getElementById("restart-btn");

function checkGuess() {
  const userGuess = Number(guessInput.value);
  attempts++;

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    feedback.textContent = "🚫 Please enter a number between 1 and 100!";
    feedback.style.color = "#f06";
    return;
  }

  if (userGuess === randomNumber) {
    feedback.textContent = `🎉 Congratulations! You guessed it in ${attempts} attempt(s)!`;
    feedback.style.color = "#4caf50";
    endGame();
  } else if (attempts >= maxAttempts) {
    feedback.textContent = `❌ Game Over! The number was ${randomNumber}.`;
    feedback.style.color = "#f06";
    endGame();
  } else if (userGuess < randomNumber) {
    feedback.textContent = "📉 Too low! Try again.";
    feedback.style.color = "#ff9800";
  } else if (userGuess > randomNumber) {
    feedback.textContent = "📈 Too high! Try again.";
    feedback.style.color = "#ff9800";
  }

  guessInput.value = "";
  guessInput.focus();
}

function endGame() {
  guessInput.disabled = true;
  submitBtn.disabled = true;
  restartBtn.style.display = "inline-block";
}

function restartGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  feedback.textContent = "";
  feedback.style.color = "#333";
  guessInput.value = "";
  guessInput.disabled = false;
  submitBtn.disabled = false;
  restartBtn.style.display = "none";
  guessInput.focus();
}

submitBtn.addEventListener("click", checkGuess);
restartBtn.addEventListener("click", restartGame);

guessInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") checkGuess();
});
