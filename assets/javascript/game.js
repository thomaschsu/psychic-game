// Variables
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessedLetters = [];
var guessesLeft = 9;

// Functions that update wins, losses, guessesleft
function updateWins() {
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
}

function updateLosses() {
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
}

function updateGuessesLeft() {
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

function updateGuessedLetters() {
    document.querySelector("#guessedLetters").innerHTML = "Your guesses so far: " + guessedLetters + " ";
}

function restartGame() {
    guessesLeft = 9;
    guessedLetters = [];
}

renderLetter();
updateWins();
updateLosses();
updateGuessesLeft();
updateGuessedLetters();

// Computer chooses random letter
function renderLetter() {
    var compRand = letters[Math.floor(Math.random() * letters.length)];
    console.log(compRand);

    // Player chooses random letter
    document.onkeyup = function(event) {
        var playRand = event.key;
        console.log(playRand);

        // If letter is wrong, mark down letter as previously guessed
        if ((playRand === 'a') || (playRand === 'b') || (playRand === 'c') || (playRand === 'd') || (playRand === 'e') ||
            (playRand === 'f') || (playRand === 'g') || (playRand === 'h') || (playRand === 'i') || (playRand === 'j') ||
            (playRand === 'k') || (playRand === 'l') || (playRand === 'm') || (playRand === 'n') || (playRand === 'o') ||
            (playRand === 'p') || (playRand === 'q') || (playRand === 'r') || (playRand === 's') || (playRand === 't') ||
            (playRand === 'u') || (playRand === 'v') || (playRand === 'w') || (playRand === 'x') || (playRand === 'y') ||
            (playRand === 'z')) {

            if (compRand != playRand) {
                (guessesLeft-- && guessedLetters.push(playRand));
                updateGuessesLeft();
                updateGuessedLetters();
            }

            // If letter right, mark as a win and restart
            if (compRand == playRand) {
                wins++;
                updateWins();
                document.getElementById("message").innerHTML = "Good job. You won!";
                renderLetter();
            }

            // If player exhausts all guesses, mark as a loss and restart
            if (guessesLeft == 0) {
                losses++;
                updateLosses();
                document.getElementById("message").innerHTML = "Nice try... But you lost!";
                renderLetter();
                restartGame();
            }

        }

    }
};