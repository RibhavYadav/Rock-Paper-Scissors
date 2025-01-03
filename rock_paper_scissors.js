let humanChoice;
const choices = document.querySelectorAll(".choice button");

choices.forEach(button => {
    button.addEventListener('click', (event) => {
        humanChoice = event.target.textContent;
        playRound(getComputerChoice(), humanChoice.toLowerCase());
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

function playRound(computerChoice, humanChoice) {
    const result = document.getElementById("round-result");
    if (computerChoice === humanChoice) {
        result.textContent = "Draw";
        return -1;
    }
    if (computerChoice === "rock") {
        if (humanChoice === "scissors") {
            result.textContent = "Computer wins the round!"
            return 0;
        } else if (humanChoice === "paper") {
            result.textContent = "Player wins the round!"
            return 1;
        }
    } else if (computerChoice === "paper") {
        if (humanChoice === "scissors") {
            result.textContent = "Player wins the round!"
            return 1;
        } else if (humanChoice === "rock") {
            result.textContent = "Computer wins the round!"
            return 0;
        }
    } else {
        if (humanChoice === "rock") {
            result.textContent = "Player wins the round!"
            return 1;
        } else if (humanChoice === "paper") {
            result.textContent = "Computer wins the round!"
            return 0;
        }
    }
}




