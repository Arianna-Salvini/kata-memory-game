// Generate dinamically table with 12 cell
const gameField = document.getElementById('gameField');
const numberOfCells = 12;
// Get button
const startBtn = document.getElementById('startBtn');
const playAgainBtn = document.getElementById('play_again');
// Symbols array for memory-card back to match
const symbols = ['☄️', '🚀', '🛸', '🪐', '👽', '💫'];
// variables 
let selectedCards = [];
let lockCard = false;
let errors = 0;

// Creo le celle per la table
for (let i = 0; i < numberOfCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    gameField.appendChild(cell);
}


// Event listener for Start button
startBtn.addEventListener('click', function () {
    resetGame(); // Reset game 
    startGame();// Star/restart game
});

// Event listener per il pulsante Play Again
playAgainBtn.addEventListener('click', function () {
    resetGame(); // Reset game 
    startGame();// Restart game
});

// FUNCTION
function startGame() {

    //Duplicate symbols array with spread operator
    const symbolsDouble = [...symbols, ...symbols];
    console.log(symbolsDouble);
    //Shuffle combined array of symbols to randomize their index order -> function
    const symbolsShuffled = randomizerArraySimb(symbolsDouble)
    console.log(symbolsShuffled);

    // Generate dinamically memory cards
    const cells = document.querySelectorAll('.cell');

    cells.forEach((cell, index) => {
        // Delete previewsly cells' content
        cell.innerHTML = '';
        // Create cards
        const memoryCard = document.createElement('div');
        memoryCard.classList.add('memory_card', 'pointer');

        // Front of card
        const front = document.createElement('div');
        front.classList.add('front');
        front.textContent = '👾';

        memoryCard.appendChild(front);

        // Back of card
        const back = document.createElement('div');
        back.classList.add('back');
        back.textContent = symbolsShuffled[index];

        memoryCard.appendChild(back);

        cell.appendChild(memoryCard);

        // Add click event in order to flip the card
        memoryCard.addEventListener('click', function () {
            if (lockCard || memoryCard.classList.contains('is-flipped')) return; //easy exit or guard closure -> se una delle due è vera blocco l'esecuzione

            memoryCard.classList.add('is-flipped');
            selectedCards.push(memoryCard);

            if (selectedCards.length === 2) {
                checkMatch();
            }
        });
    });
};

// Fish-Yates algorithm
function randomizerArraySimb(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate casual index between 0 to i (included)
        const random = Math.floor(Math.random() * (i + 1));
        // Change elementis of array[i] and array[random]
        [array[i], array[random]] = [array[random], array[i]];
    }
    // console.log(array);
    return array;
}

// Function to match symbols in selected cards
function checkMatch() {
    const [card1, card2] = selectedCards;
    const isMatch = card1.querySelector('.back').textContent === card2.querySelector('.back').textContent;

    if (isMatch) {
        selectedCards = [];
        if (document.querySelectorAll('.is-flipped').length === numberOfCells) {
            modal.classList.add('modal-open');
        }
    } else {
        lockCard = true;
        errors++;
        document.querySelector('.counter').textContent = `Errors: ${errors}`;
        document.querySelector('#modal-errors').textContent = `${errors} ERRORS`; // Update counter for errors in modal for winning
        setTimeout(() => {
            card1.classList.remove('is-flipped');
            card2.classList.remove('is-flipped');
            selectedCards = [];
            lockCard = false;
        }, 800);
    }
};

// Function to show the modal in case of winninig
function showWinModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex'; // Show Modal
}

// Function to hide/close modal
function hideModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none'; // Nasconde la modale
}

// Function for reset game state
function resetGame() {
    selectedCards = [];
    lockCard = false;
    errors = 0;
    document.querySelector('.counter').textContent = ` Errors: ${errors}`;
    const modal = document.getElementById('modal');
    modal.classList.remove('modal-open');
}