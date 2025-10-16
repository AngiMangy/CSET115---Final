const choices = ["X", "O",];
const player1Display = document.getElementById("player1Display");
const Player2Display = document.getElementById("player2Display");
const resultDisplay = document.getElementById("resultDisplay");
const player1ScoreDisplay = document.getElementById("player1ScoreDisplay");
const Player2ScoreDisplay = document.getElementById("Player2ScoreDisplay");
const tieScoreDisplay = document.getElementById("tieScoreDisplay");
let player1Score = 0;
let Player2Score = 0;
let tieScore = 0;


function playGame(){

}
function pressX(){

}

function pressO(){

}

function winnerX(){
    
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
