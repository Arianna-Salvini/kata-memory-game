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
