document.addEventListener('DOMContentLoaded', function () {
    const cardContainer = document.getElementById('cardContainer');
    const numberOfCells = 12;

    // Genera le 12 carte di memoria
    for (let i = 0; i < numberOfCells; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cardContainer.appendChild(cell);
    }

});
