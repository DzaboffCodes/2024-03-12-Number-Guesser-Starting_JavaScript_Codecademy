let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Generates Target Number for Game to be Played Against
const generateTarget = function () {
  return Math.floor(Math.random() * 10);
};

// Compares the User Guess & the Computer Guess to the Targer Number
const compareGuesses = function (userGuess, computerGuess, secretTarget) {
  if (userGuess <0 || userGuess > 9) {
    alert ('Input is out of range! Try again by inputting numbers between 0  and 9');
  }
  const userDiff = Math.abs(secretTarget - userGuess);
  const computerDiff = Math.abs(secretTarget - computerGuess);
  if (userDiff <= computerDiff) {
    return true;
  } else {
    return false;
  }
};

// Updated Score Function
const updateScore = function (gameWinner) {
  if (gameWinner === "human") {
    humanScore++;
  } else if (gameWinner === "computer") {
    computerScore++;
  }
};

// Advance Round Function
const advanceRound = function () {
  currentRoundNumber++;
};

// Testing Functions
console.log(generateTarget());
let secretTarget = generateTarget();
console.log(compareGuesses(5, 4, secretTarget));
updateScore('human');
console.log(humanScore);
advancedRound();
console.log(currentRoundNumber);