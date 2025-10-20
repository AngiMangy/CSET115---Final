let turn = 1
const player = ["X", "O",];
let currentPlayer = player[0]
let square = document.getElementsByClassName("square")
const player1Display = document.getElementById("player1Display");
const player2Display = document.getElementById("player2Display");
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
    for (i = 0; i < winningCombo.length; i++) {
        const [a, b, c] = winningCombo[i];
        if (square[a].textContent === currentPlayer && square[b].textContent === currentPlayer && square[c].textContent === currentPlayer) {
            return true
        }

    }
    return false
}
function playGame(btnPressed) {
    if (turn % 2 === 0) {
        pressX(btnPressed);
        turn++
        btnPressed.disabled = true
        if (winCheck(currentPlayer) === true) {
            console.log("in the if statement")
            document.getElementById("Xwin").style.display = "block"
        }
        else if (turn === 10) {
            console.log("tied")
            document.getElementById("tied").style.display = "block"
        }

    }
    else if (turn % 2 !== 0) {
        pressO(btnPressed);
        turn++;
        btnPressed.disabled = true
        if (winCheck(currentPlayer) === true) {
            console.log("in the if statement")
            document.getElementById("Owin").style.display = "block"
        }
        else if (turn === 10) {
            console.log("tied")
            document.getElementById("tied").style.display = "block"
        }

    }

    console.log(winCheck(currentPlayer))
    winCheck(currentPlayer)
}

function pressX(btnPressed) {
    btnPressed.innerText = "X"
    currentPlayer = player[0]
}

function pressO(btnPressed) {
    btnPressed.innerText = "O"
    currentPlayer = player[1]
}


player1Display.textContent = `Player 1: O`;
player2Display.textContent = `Player 2: X`;

resultDisplay.classList.remove("greenText", "redText");

switch (result) {
    case "You Win!":
        resultDisplay.classList.add("greenText");
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        break;
    case "You Lose!":
        resultDisplay.classList.add("redText");
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        break;
    case "TIE!":
        tieScore++;
        tieScoreDisplay.textContent = tieScore;
        break;
}