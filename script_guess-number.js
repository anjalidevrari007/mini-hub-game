// Random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;

// Attempts counter
let attempts = 0;

// Get HTML elements
let input = document.querySelector('input[type="number"]');
let button = document.querySelector('button');
let message = document.querySelector('.line h2');

let attemptsDisplay = document.getElementById("attempts");
let bestScoreDisplay = document.getElementById("bestScore");

// Get saved best score
let bestScore = localStorage.getItem("bestScore");

// Show best score if already saved
if (bestScore !== null) {
    bestScoreDisplay.textContent = bestScore;
}


// When GUESS button is clicked
button.addEventListener("click", function () {

    let guess = Number(input.value);

    // Check empty input
    if (input.value === "") {
        message.textContent = "⚠️ Please enter a number!";
        return;
    }

    // Check number range
    if (guess < 1 || guess > 100) {
        message.textContent = "⚠️ Enter a number between 1 and 100!";
        return;
    }

    // Increase attempts
    attempts++;

    // Show attempts
    attemptsDisplay.textContent = attempts;


    // Check the guess
    if (guess < secretNumber) {

        message.textContent = "📉 Too Low! Try Again.";

    }

    else if (guess > secretNumber) {

        message.textContent = "📈 Too High! Try Again.";

    }

    else {

        message.textContent = "🎉 Correct! You Won!";

        // Check best score
        if (bestScore === null || attempts < Number(bestScore)) {

            bestScore = attempts;

            // Save best score
            localStorage.setItem("bestScore", bestScore);

            // Display best score
            bestScoreDisplay.textContent = bestScore;
        }

        // Disable button after winning
        button.disabled = true;
    }
});