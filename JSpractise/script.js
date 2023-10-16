const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let currentPlayer = 'X';
let isGameFinished = false;
const cells = document.querySelectorAll('.col');

function makeMove(row, col) {
    if (!isGameFinished && board[row][col] === '') {
        board[row][col] = currentPlayer;
        cells[row * 3 + col].textContent = currentPlayer;
        if (checkWin(row, col)) {
            showResult(`${currentPlayer} wins!`);
        } else if (checkDraw()) {
            showResult("It's a draw!");
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            if (currentPlayer === 'O' && !isGameFinished) {
                // It's the computer's turn. You can implement a basic AI logic here.
                makeComputerMove();
            }
        }
    }
}

function checkWin(row, col) {
    const symbols = ['X', 'O'];

    for (const symbol of symbols) {
        if (board[row][0] === symbol && board[row][1] === symbol && board[row][2] === symbol) {
            return true;
        }
        if (board[0][col] === symbol && board[1][col] === symbol && board[2][col] === symbol) {
            return true;
        }
        if (
            (board[0][0] === symbol && board[1][1] === symbol && board[2][2] === symbol) ||
            (board[0][2] === symbol && board[1][1] === symbol && board[2][0] === symbol)
        ) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                return false;
            }
        }
    }
    return true;
}

function showResult(message) {
    isGameFinished = true;
    document.getElementById('result').textContent = message;
}

function resetBoard() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            board[i][j] = '';
            cells[i * 3 + j].textContent = '';
        }
    }
    currentPlayer = 'X';
    isGameFinished = false;
    document.getElementById('result').textContent = '';
}

function makeComputerMove() {
    // Implement a simple random move for the computer.
    const availableCells = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                availableCells.push({ row: i, col: j });
            }
        }
    }
    if (availableCells.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableCells.length);
        const { row, col } = availableCells[randomIndex];
        makeMove(row, col);
    }
}

// Add the event listeners to your cells
cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        const row = Math.floor(index / 3);
        const col = index % 3;
        makeMove(row, col);
    });
});

resetBoard();
