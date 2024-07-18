// Generate dinamically table with 12 cell
const cardContainer = document.getElementById('cardContainer');
const numberOfCells = 12;
const startBtn = document.getElementById('startBtn');
// Array di simboli per il back delle memory_card
const symbols = ['☄️', '🚀', '🛸', '🪐', '👽', '💫'];

// Creo le celle per la table
for (let i = 0; i < numberOfCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cardContainer.appendChild(cell);
}

// Aggiungi un listener per il click

startBtn.addEventListener('click', function () {

    // Duplico gli array
    const symbolsDoble = [...symbols, ...symbols];
    console.log(symbolsDoble);
    // Mischio l'arrey combinato per randomizzare l'ordine -> funzione 
    const symbolsShuffled = randomizerArraySimb(symbolsDoble)
    console.log(symbolsShuffled);
    // Assegno il simbolo random alla carta

    // Genera dinamicamente le memory_card
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {

        // Rimuove il contenuto precedente della cella
        cell.innerHTML = '';

        // create cards
        const memoryCard = document.createElement('div');
        memoryCard.classList.add('memory_card', 'pointer');

        const front = document.createElement('div');
        front.classList.add('front');
        front.textContent = '👾';

        const back = document.createElement('div');
        back.classList.add('back');
        back.textContent = symbolsShuffled[index];


        memoryCard.appendChild(front);
        memoryCard.appendChild(back);

        cell.appendChild(memoryCard);
    });
});

// Function

function randomizerArraySimb(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [array[i], array[random]] = [array[random], array[i]];
    }
    // console.log(array);
    return array;
}