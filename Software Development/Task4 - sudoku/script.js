// script.js
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('sudoku-grid');

    // Create a 4x4 Sudoku grid
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.maxLength = 1;
            input.className = 'sudoku-cell';
            input.dataset.row = i;
            input.dataset.col = j;

            input.addEventListener('input', (e) => validateInput(e, i, j));
            grid.appendChild(input);
        }
    }
});

function validateInput(event, row, col) {
    const input = event.target;
    const value = input.value;

    // Clear the cell if the value is not a digit between 1 and 4
    if (!/^[1-4]$/.test(value)) {
        input.value = '';
        return;
    }

    // Get the current state of the board
    const board = getBoardState();

    // Check if the move is valid
    if (!isValid(board, row, col, parseInt(value))) {
        alert(`Number ${value} violates Sudoku rules at position (${row + 1}, ${col + 1})!`);
        input.value = '';
    }
}

function getBoardState() {
    const board = [];
    const cells = document.querySelectorAll('.sudoku-cell');

    for (let i = 0; i < 4; i++) {
        const row = [];
        for (let j = 0; j < 4; j++) {
            const value = cells[i * 4 + j].value;
            row.push(value === '' ? 0 : parseInt(value));
        }
        board.push(row);
    }
    return board;
}

function isValid(board, row, col, num) {
    for (let i = 0; i < 4; i++) {
        if (board[row][i] === num && i !== col) {
            return false;
        }
        if (board[i][col] === num && i !== row) {
            return false;
        }
    }

    const startRow = Math.floor(row / 2) * 2;
    const startCol = Math.floor(col / 2) * 2;

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            if (board[startRow + i][startCol + j] === num && (startRow + i !== row || startCol + j !== col)) {
                return false;
            }
        }
    }
    return true;
}

function solveSudoku() {
    const board = getBoardState();

    if (solve(board)) {
        displayBoard(board);
        alert('Sudoku Solved!');
    } else {
        alert('No solution exists!');
    }
}

function solve(board) {
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            if (board[row][col] === 0) {
                for (let num = 1; num <= 4; num++) {
                    if (isValid(board, row, col, num)) {
                        board[row][col] = num;
                        if (solve(board)) {
                            return true;
                        }
                        board[row][col] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}

function displayBoard(board) {
    const cells = document.querySelectorAll('.sudoku-cell');

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            cells[i * 4 + j].value = board[i][j] === 0 ? '' : board[i][j];
        }
    }
}

function checkSolution() {
    const board = getBoardState();

    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            const num = board[row][col];
            if (num !== 0) {
                if (!isValid(board, row, col, num)) {
                    alert(`There is an error at position (${row + 1}, ${col + 1}). Please correct it.`);
                    return;
                }
            }
        }
    }
    alert('Congratulations! The solution is correct.');
}
