let turn = 1
const player = ["X", "O",];
let currentPlayer = player[0]
let square = document.getElementsByClassName("square")
const playerODisplay = document.getElementById("playerODisplay");
const playerXDisplay = document.getElementById("playerXDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerOScoreDisplay = document.getElementById("playerOScoreDisplay");
const playerXScoreDisplay = document.getElementById("playerXScoreDisplay");
const tieScoreDisplay = document.getElementById("tieScoreDisplay");
let playerOScore = 0;
let playerXScore = 0;
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
            document.getElementById("Xwin").style.display = "block"
            let btns = document.getElementsByClassName("square")
            for (let btn of btns) {
                btn.disabled = true
            }
            playerXScore++;
            playerXScoreDisplay.textContent = playerXScore;
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
            document.getElementById("Owin").style.display = "block"
            let btns = document.getElementsByClassName("square")
            for (let btn of btns) {
                btn.disabled = true
            }
            playerOScore++;
            playerOScoreDisplay.textContent = playerOScore;
        }
        else if (turn === 10) {
            console.log("tied")
            document.getElementById("tied").style.display = "block"
            let btns = document.getElementsByClassName("square")
            for (let btn of btns) {
                btn.disabled = true
            }
            tieScore++;
            tieScoreDisplay.textContent = tieScore;
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

function resetGame() {
    for (let i = 0; i < square.length; i++) {
        square[i].textContent = "";
        square[i].disabled = false;
    }
    turn = 1
    currentPlayer = player[0];

    document.getElementById("Xwin").style.display = "none";
    document.getElementById("Owin").style.display = "none";
    document.getElementById("tied").style.display = "none";

    resultDisplay.textContent = "";
}