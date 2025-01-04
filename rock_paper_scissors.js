let playerChoice;
const choices = document.querySelectorAll(".choice button");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const result = document.getElementById("result");

choices.forEach(button => {
    button.addEventListener('click', (event) => {
        playerChoice = event.target.textContent;
        let roundResult = playRound(getComputerChoice(), playerChoice.toLowerCase());
        if (roundResult === 0) {
            playerScore.textContent = String(Number(playerScore.textContent) + 1);
        } else if (roundResult === 1) {
            computerScore.textContent = String(Number(computerScore.textContent) + 1);
        }
        if (computerScore.textContent === "5") {
            result.textContent = "Computer Wins!";
        } else if (playerScore.textContent === "5") {
            result.textContent = "Computer Wins!";
        }
    });
});

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        result.textContent = "Draw!";
        return -1;
    }
    if (computerChoice === "rock") {
        if (playerChoice === "scissors") {
            result.textContent = "Computer wins the round!"
            return 0;
        } else if (playerChoice === "paper") {
            result.textContent = "Player wins the round!"
            return 1;
        }
    } else if (computerChoice === "paper") {
        if (playerChoice === "scissors") {
            result.textContent = "Player wins the round!"
            return 1;
        } else if (playerChoice === "rock") {
            result.textContent = "Computer wins the round!"
            return 0;
        }
    } else {
        if (playerChoice === "rock") {
            result.textContent = "Player wins the round!"
            return 1;
        } else if (playerChoice === "paper") {
            result.textContent = "Computer wins the round!"
            return 0;
        }
    }
}




