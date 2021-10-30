"use strict";

const defaultValues = {
    score: 20,
    message: "Start guessing...",
    number: "?",
    guess: "",
    bodyColor: "#222",
    numberWidth: "15rem",
    notFinished: 1,
  },
  displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
  },
  displayScore = function (score) {
    document.querySelector(".score").textContent = score;
  },
  calcGuess = function (guess, secretNumber, farGuessed) {
    displayMessage(
      guess > secretNumber + farGuessed
        ? "📈 Too High!"
        : guess > secretNumber
        ? "👇 A Bit Lower!"
        : guess < secretNumber - farGuessed
        ? "📉 Too Low!"
        : "👆 A Bit Higher!"
    );
  };

// Adding random number to code
let secretNumber = Math.trunc(Math.random() * 20) + 1,
  // document.querySelector('.number').textContent = secretNumber;
  // Adding guesses amount
  score = 20,
  highscore = 0,
  // Adding an indicator for to check if game has been finished
  notFinished = 1;
// Listening for the button clicked
document.querySelector(".check").addEventListener("click", function () {
  // Storing entered value
  const guess = Number(document.querySelector(".guess").value);

  console.log(guess, typeof guess);
  // Checks if user has any guesses left or the game finished
  if (score > 1 && notFinished) {
    // Checks if user entered true value
    if (!guess || 1 > guess || guess > 20) {
      displayMessage("⛔ No Number!");
      // Checks if user correctly guesses
    } else if (guess === secretNumber) {
      displayMessage("🎉 Correct Number!");
      // Changing background to green
      document.querySelector("body").style.backgroundColor = "#60b347";
      // Also increasing background's width
      document.querySelector(".number").style.width = "30rem";
      // Secret Number is visible in UI now
      document.querySelector(".number").textContent = secretNumber;
      // If score is higher than highscore collects that data
      if (highscore < score) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
      // indicates for game is finished
      notFinished = 0;

      //Checks if guessed number is way higher than secretnumber
    } else if (guess !== secretNumber) {
      calcGuess(guess, secretNumber, 3);
      score--;
      displayScore(score);
    }

    //If user guessed correctly stop function
  } else if (!notFinished) {
    displayMessage("You have already win!!");
    //After user has no guesses, finishes the game
  } else {
    displayMessage("💥 You have lost the game!");
    displayScore(0);
  }

  // Checks if again button clicked
  document.querySelector(".again").addEventListener("click", function () {
    // // Puts everything back to default value
    // // Also adds another random number to secret number
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = defaultValues.score;
    displayMessage(defaultValues.message);
    displayScore(score);
    document.querySelector(".number").textContent = defaultValues.number;
    document.querySelector(".guess").value = defaultValues.guess;

    document.querySelector("body").style.backgroundColor =
      defaultValues.bodyColor;
    document.querySelector(".number").style.width = defaultValues.numberWidth;
    notFinished = 1;
  });
});
