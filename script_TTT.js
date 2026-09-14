// Game board ke saare boxes
const cells = document.querySelectorAll(".cell");

// Player 1 = X
// Player 2 = O
let currentPlayer = "X";

// Game chal raha hai ya nahi
let gameActive = true;

// Score
let player1Score = 0;
let player2Score = 0;
let drawScore = 0;


// Winning combinations
const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
];


// Har cell par click
cells.forEach(function(cell) {

    cell.addEventListener("click", function() {

        // Agar box already filled hai ya game over hai
        if (cell.textContent !== "" || !gameActive) {
            return;
        }

        // X ya O lagao
        cell.textContent = currentPlayer;

        // Winner check karo
        checkWinner();

    });

});


// Winner check karna
function checkWinner() {

    let winner = null;

    for (let pattern of winningPatterns) {

        let a = cells[pattern[0]].textContent;
        let b = cells[pattern[1]].textContent;
        let c = cells[pattern[2]].textContent;

        if (a !== "" && a === b && b === c) {
            winner = a;
            break;
        }
    }


    // Agar winner mil gaya
    if (winner !== null) {

        gameActive = false;

        if (winner === "X") {

            player1Score++;

            document.querySelector(".result h2").textContent =
                "PLAYER 1 WINS!";

        } else {

            player2Score++;

            document.querySelector(".result h2").textContent =
                "PLAYER 2 WINS!";
        }

        document.querySelector(".result p").textContent =
            "Congratulations! 🎉";

        updateScore();

        return;
    }


    // Check karo board full hai ya nahi
    let boardFull = true;

    cells.forEach(function(cell) {

        if (cell.textContent === "") {
            boardFull = false;
        }

    });


    // Agar board full hai = Draw
    if (boardFull) {

        gameActive = false;

        drawScore++;

        document.querySelector(".result h2").textContent =
            "IT'S A DRAW!";

        document.querySelector(".result p").textContent =
            "Nobody wins this round.";

        updateScore();

        return;
    }


    // Player change
    if (currentPlayer === "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }

    updateTurn();
}


// Turn update
function updateTurn() {

    const turnText = document.querySelector(".active");

    if (currentPlayer === "X") {

        document.querySelector(".player.active span").textContent =
            "PLAYER 1";

    } else {

        document.querySelector(".player.active span").textContent =
            "PLAYER 2";
    }
}


// Score update
function updateScore() {

    const scores = document.querySelectorAll(".score-box strong");

    scores[0].textContent = player1Score;
    scores[1].textContent = drawScore;
    scores[2].textContent = player2Score;
}


// Play Again button
const restartButton = document.querySelector(".restart");

restartButton.addEventListener("click", function() {

    // Board clear
    cells.forEach(function(cell) {
        cell.textContent = "";
    });


    // Game reset
    currentPlayer = "X";
    gameActive = true;


    // Result reset
    document.querySelector(".result h2").textContent =
        "PLAYER 1'S TURN!";

    document.querySelector(".result p").textContent =
        "Make your move!";


    updateTurn();

});