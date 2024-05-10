const cells = document.querySelectorAll('.gridItem');
let clickCount = 0;
let shipCount = 0;

const resetGame = () => {
    clickCount = 0;
    shipCount = 0;
    cells.forEach(cell => {
        const img = cell.querySelector('img');
        img.classList.add('hidden');
    });
};

const resetBtn = document.getElementById('resetbtn');
resetBtn.addEventListener('click', resetGame);

cells.forEach(cell => {
    const img = cell.querySelector('img');
    cell.addEventListener('click', () => {
        clickCount++;
        img.classList.remove('hidden');
        if (img.alt === 'shipimage') {
            shipCount++;
        }
        if (shipCount === 5 && clickCount <= 8) {
            alert('You won!');
        } else if (clickCount > 8) {
            alert('You Lose!');
        }
    });
});