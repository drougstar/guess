"use strict";
// Adding random number to code
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Adding guesses amount
let score = 20,
  // Adding an indicator for to check if game has been finished
  finished = 1;

// Listening for the button clicked
document.querySelector(".check").addEventListener("click", function () {
  // Storing entered value
  const guess = Number(document.querySelector(".guess").value);

  // Checks if user has any guesses left or the game finished
  if (score > 1 && finished) {
    // Checks if user entered true value
    if (!guess || 1 > guess || guess > 20) {
      document.querySelector(".message").textContent = "⛔ No Number!";
      // Checks if user correctly guesses
    } else if (guess === secretNumber) {
      document.querySelector(".message").textContent = "🎉 Correct Number!";
      // Changing background to green
      document.querySelector("body").style.backgroundColor = "#60b347";
      // Also increasing background's width
      document.querySelector(".number").style.width = "30rem";
      // Secret Number is visible in UI now
      document.querySelector(".number").textContent = secretNumber;
      // If score is higher than highscore collects that data
      if (Number(document.querySelector(".highscore").textContent) < score) {
        document.querySelector(".highscore").textContent = score;
      }
      // indicates for game is finished
      finished = 0;

      //Checks if guessed number is way higher than secretnumber
    } else if (guess > secretNumber + 3) {
      document.querySelector(".message").textContent = "📈 Too High!";
      score--;
      document.querySelector(".score").textContent = score;
      //Checks if guessed number is closer to secretnumber
    } else if (guess > secretNumber) {
      document.querySelector(".message").textContent = "👇 A Bit Lower!";
      score--;
      document.querySelector(".score").textContent = score;
      //Checks if guessed number is way lower than secretnumber
    } else if (guess < secretNumber - 3) {
      document.querySelector(".message").textContent = "📉 Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
      //Checks if guessed number is closer to secretnumber
    } else if (guess < secretNumber) {
      document.querySelector(".message").textContent = "👆 A Bit Higher!";
      score--;
      document.querySelector(".score").textContent = score;
    }
    //If user guessed correctly stop function
  } else if (!finished) {
    document.querySelector(".message").textContent = "You have already win!!";
    //After user has no guesses, finishes the game
  } else {
    document.querySelector(".message").textContent =
      "💥 You have lost the game!";
    document.querySelector(".score").textContent = 0;
  }
  // Checks if again button clicked
  document.querySelector(".again").addEventListener("click", function () {
    // Puts everything back to default value
    document.querySelector(".number").textContent = "?";
    score = 20;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    finished = 1;
    // Also adds another random number to secret number
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  });
});
