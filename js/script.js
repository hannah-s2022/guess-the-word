const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");


const word = "magnolia";
const guessedLetters = [];

// Display our symbols for placeholder for the chosen word's letters
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
    console.log(letter);
    placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();
    // empty message paragraph
    message.innerText = "";
    const guess = letterInput.value;
    const goodGuess = checkPlayerInput(guess);
    if (goodGuess) {
        makeGuess(guess);
    }
    letterInput.value = "";
});

const checkPlayerInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        // iis input empty?
    message.innerText = "Plesae enter a letter.";
    } else if (input.length > 1) {
     message.innerText = "Uh, oh. Did you enter more than 1 letter?";
    } else if (!input.match(acceptedLetter)) {
        // did you type a num,ber, special character or anything other than a letter?
    message.innerText = "Make sure to only enter a letter!"
    } else {
     return input;
    }
};

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "Oops. You already guessed that letter. Try again!";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
};







