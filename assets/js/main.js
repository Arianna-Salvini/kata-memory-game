// Generate dinamically table with 12 cell
const cardContainer = document.getElementById('cardContainer');
const numberOfCells = 12;
const startBtn = document.getElementById('startBtn');

for (let i = 0; i < numberOfCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cardContainer.appendChild(cell);
}

// Aggiungi un listener per il click
startBtn.addEventListener('click', function () {


    // Genera dinamicamente le memory_card
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {

        // Rimuove il contenuto precedente della cella
        cell.innerHTML = '';

        // create cards
        const memoryCard = document.createElement('div');
        memoryCard.classList.add('memory_card');

        const front = document.createElement('div');
        front.classList.add('front');
        front.textContent = '👾';

        const back = document.createElement('div');
        back.classList.add('back');

        memoryCard.appendChild(front);
        memoryCard.appendChild(back);

        cell.appendChild(memoryCard);
    });
});
