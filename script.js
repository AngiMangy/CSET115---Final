const choices = ["X", "O",];
let currentPlayer = player[0];
const player1Display = document.getElementById("player1Display");
const Player2Display = document.getElementById("player2Display");
const resultDisplay = document.getElementById("resultDisplay");
const player1ScoreDisplay = document.getElementById("player1ScoreDisplay");
const Player2ScoreDisplay = document.getElementById("Player2ScoreDisplay");
const tieScoreDisplay = document.getElementById("tieScoreDisplay");
let player1Score = 0;
let Player2Score = 0;
let tieScore = 0;

const winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function winCheck(currentPlayer) {
    for (i = 0, i < winningCombo.length, i++) {
        const [a, b, c] = winningCombo[i];
        if (square[a].textContent === currentPlayer && square[b].textContent === currentPlayer && square[c].textContent === currentPlayer) {
            return true
        }
    }
    return false
}
function playGame() {

}
function pressX() {

}

function pressO() {

}

function winnerX() {

}

player1Display.textContent = `Player 1: ${player1Choice}`;
player2Display.textContent = `Player 2: ${player2Choice}`;
resultDisplay.textContent = result;

resultDisplay.classList.remove("greenText", "redText");

switch (result) {
    case "You Win!":
        resultDisplay.classList.add("greenText");
        player1Score++;
        player1ScoreDisplay.textContent = player1Score;
        break;
    case "You Lose!":
        resultDisplay.classList.add("redText");
        player2Score++;
        player2ScoreDisplay.textContent = player2Score;
        break;
    case "TIE!":
        tieScore++;
        tieScoreDisplay.textContent = tieScore;
        break;
}
