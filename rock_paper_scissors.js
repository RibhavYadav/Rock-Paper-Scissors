function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper-scissors";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Rock, paper or scissors?").toLowerCase();
}
