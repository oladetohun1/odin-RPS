function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomIndex];
    return randomChoice;
}

const computerChoice = getComputerChoice();
console.log(computerChoice);

function playsSingleRound(playerSelection, comoputerSelection) {
    const playerChoice = playerSelection.toLowerCase();

    const choices = ['rock', 'paper', 'scissors'];

    // check if players choice is a valid choice 
    if (!choices.includes(playerChoice)){
        return 'Invalid choice given , give a choice of either Rock, paper or scissors'
    }

    // Play with chosen choice to determine winner 
    if (playerChoice === comoputerSelection) {
        return 'It is a tie, replay that round'
    } else if(
        (playerChoice === 'rock' && computerSelection === 'scissors') ||
        (playerChoice === 'paper' && computerSelection === 'rock') ||
        (playerChoice === 'scissors' && computerSelection === 'paper')
    ){
        return `You Win! ${playerChoice} beats ${computerSelection}.`;
    } else {
        // Computer wins
        return `You Lose! ${computerSelection} beats ${playerChoice}.`;
    
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playsSingleRound(playerSelection, computerSelection));