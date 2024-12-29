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

function getHumanChoice() {
    return prompt("Rock, paper or scissors?").toLowerCase();
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log("Draw!");
        return -1;
    }
    if (computerChoice === "rock") {
        if (humanChoice === "scissors") {
            console.log("Computer wins the round!");
            return 0;
        } else if (humanChoice === "paper") {
            console.log("Player wins the round!");
            return 1;
        }
    } else if (computerChoice === "paper") {
        if (humanChoice === "scissors") {
            console.log("Player wins the round!");
            return 1;
        } else if (humanChoice === "rock") {
            console.log("Computer wins the round!");
            return 0;
        }
    } else {
        if (humanChoice === "rock") {
            console.log("Player wins the round!");
            return 1;
        } else if (humanChoice === "paper") {
            console.log("Computer wins the round!");
            return 0;
        }
    }
}

let humanScore = 0, computerScore = 0;

function playGame() {
    for (let i = 0; i < 5; i++) {
        let result = playRound(getComputerChoice(), getHumanChoice());
        if (result === 1) {
            humanScore += 1;
        } else if (result === 0) {
            computerScore += 1;
        }
        console.log("Human score: " + humanScore + " and Computer Score: " + computerScore);
    }
}

playGame();