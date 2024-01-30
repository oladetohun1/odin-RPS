const prompt = require("prompt-sync")({ sigint: true });

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const randomChoice = choices[randomIndex];
  return randomChoice;
}

const computerChoice = getComputerChoice();
console.log(computerChoice);

function playsSingleRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase();

  const choices = ["rock", "paper", "scissors"];

  // check if players choice is a valid choice
  if (!choices.includes(playerChoice)) {
    return "Invalid choice given , give a choice of either Rock, paper or scissors";
  }

  // Play with chosen choice to determine winner
  if (playerChoice === computerSelection) {
    return "It is a tie, replay that round";
  } else if (
    (playerChoice === "rock" && computerSelection === "scissors") ||
    (playerChoice === "paper" && computerSelection === "rock") ||
    (playerChoice === "scissors" && computerSelection === "paper")
  ) {
    return `You Win! ${playerChoice} beats ${computerSelection}.`;
  } else {
    // Computer wins
    return `You Lose! ${computerSelection} beats ${playerChoice}.`;
  }
}

// write a new function play game
// play game function should play 5 rounds of the game
// keep score and report a winner or loser at the end
// use prompt() to get input from the user
// feel free to make the game console based if you like
// feel free to make it pop up in a window
// feel free to use alerts() to show the results

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  let round = 0;
  while (round < 5) {
    const playerSelection = prompt(
      "Enter your choice: Rock, Paper or Scissors: "
    );
    const computerSelection = getComputerChoice();
    const result = playsSingleRound(playerSelection, computerSelection);
    if (result.includes("Win")) {
      playerScore++;
    } else if (result.includes("Lose")) {
      computerScore++;
    }
    console.log(result);
    round++;
  }
  if (playerScore > computerScore) {
    console.log(`You won the game! ${playerScore} to ${computerScore}`);
  } else if (playerScore < computerScore) {
    console.log(`You lost the game! ${playerScore} to ${computerScore}`);
  } else {
    console.log(`It's a tie! ${playerScore} to ${computerScore}`);
  }
}

playGame();
