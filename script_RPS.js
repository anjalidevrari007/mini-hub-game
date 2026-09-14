const choices = document.querySelectorAll(".choice");

// Get result elements
const playerChoice = document.querySelector(".player-circle");
const computerChoice = document.querySelector(".computer-circle");
const message = document.querySelector(".message h2");
const messageText = document.querySelector(".message p");

// Get score elements
const scores = document.querySelectorAll(".score p");

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;


// Computer choices
const options = ["rock", "paper", "scissors"];


// Emoji for choices
const emoji = {
    rock: "🪨",
    paper: "📄",
    scissors: "✂️"
};


// When user clicks a choice
choices.forEach(function(button) {

    button.addEventListener("click", function() {

        // Get player's choice
        let player = button.classList[1];

        // Computer chooses randomly
        let computer = options[Math.floor(Math.random() * 3)];


        // Show choices
        playerChoice.textContent = emoji[player];
        computerChoice.textContent = emoji[computer];


        // Check winner
        if (player === computer) {

            message.textContent = "DRAW!";
            message.style.color = "#555";

            messageText.textContent = "Both chose " + player.toUpperCase();

            drawScore++;

        }

        else if (
            (player === "rock" && computer === "scissors") ||
            (player === "paper" && computer === "rock") ||
            (player === "scissors" && computer === "paper")
        ) {

            message.textContent = "YOU WIN!";
            message.style.color = "#159447";

            messageText.textContent =
                player.toUpperCase() + " beats " + computer.toUpperCase();

            playerScore++;

        }

        else {

            message.textContent = "YOU LOSE!";
            message.style.color = "#ef4050";

            messageText.textContent =
                computer.toUpperCase() + " beats " + player.toUpperCase();

            computerScore++;
        }


        // Update score
        scores[0].textContent = playerScore;
        scores[1].textContent = drawScore;
        scores[2].textContent = computerScore;

    });

});


// Play Again button
const playAgain = document.querySelector(".play-again");

playAgain.addEventListener("click", function() {

    playerScore = 0;
    computerScore = 0;
    drawScore = 0;

    scores[0].textContent = 0;
    scores[1].textContent = 0;
    scores[2].textContent = 0;

    playerChoice.textContent = "🪨";
    computerChoice.textContent = "✂️";

    message.textContent = "MAKE YOUR MOVE!";
    message.style.color = "#159447";

    messageText.textContent = "Choose Rock, Paper or Scissors";

});