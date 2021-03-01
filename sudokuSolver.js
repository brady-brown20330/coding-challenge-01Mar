/*
Write a program to solve arbitrary Sudoku puzzles.

 A sudoku solution must satisfy all of the following rules:
  - Each of the digits 1-9 must occur exactly once in each row.
  - Each of the digits 1-9 must occur exactly once in each column.
  - Each of the the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
Empty cells are indicated by the character '.'.

*/

var sudokuSolver = (board) => {
  return solver(board)
}

const solver = (board) => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === ".") {
        let char = "1";

        while(Number(char) <= 9) {
          if (isValid(i, j, board, char)) {
            board[i][j] = char;
            if (solver(board)) {
              return true
            } else {
              board[i][j] = ".";
            }
          }
          char = Number(char)
          char++
          char = char.toString();
        }
        return false;
      }
    }
  }
  return true;
};

const isValid = (row, col, board, char) => {
  for (let k = 0; k < 9; k++) {
    if (board[row][k] == char) {
      return false
    }
  }

  const x = Math.floor(row / 3) * 3;
  const y = Math.floor(col / 3) * 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[x+1][y+j] == char) return false
    }
  }
  return true
}

let sudokuGridEasy = [
["5","3",".",".","7",".",".",".","."],
["6",".",".","1","9","5",".",".","."],
[".","9","8",".",".",".",".","6","."],
["8",".",".",".","6",".",".",".","3"],
["4",".",".","8",".","3",".",".","1"],
["7",".",".",".","2",".",".",".","6"],
[".","6",".",".",".",".","2","8","."],
[".",".",".","4","1","9",".",".","5"],
[".",".",".",".","8",".",".","7","9"]
]

let sudokuGridMedium = [
[".",".",".",".","6",".",".",".","."],
[".","5",".",".",".",".","9","7","."],
[".",".","2",".",".","5",".",".","."],
[".",".",".","2",".",".",".","8","."],
[".","7","4",".",".",".",".",".","."],
[".","8","5",".","4",".","2",".","1"],
[".",".","1",".",".","7",".",".","."],
["6",".",".",".",".","4",".",".","."],
["9","2",".","6",".",".","1",".","."]
]

let sudokuGridHard = [
[".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".","9",".","."],
["9","7",".","3",".",".",".",".","."],
[".","1",".",".","6",".","5",".","."],
[".",".","4","7",".","8",".",".","2"],
[".",".",".",".",".","2",".",".","6"],
[".","3","1",".",".","4",".",".","."],
[".",".",".","8",".",".","1","6","7"],
[".","8","7",".",".",".",".",".","."]
]

// let sudokuGridImpossible = [
//   ["1","2","3","4","5","6","7","8","."],
//   [".",".",".",".",".",".","9",".","2"],
//   ["9","7",".","3",".",".",".",".","3"],
//   [".","1",".",".","6",".","5",".","4"],
//   [".",".","4","7",".","8",".",".","5"],
//   [".",".",".",".",".","2",".",".","6"],
//   [".","3","1",".",".","4",".",".","7"],
//   [".",".",".","8",".",".","1","6","8"],
//   [".","8","7",".",".",".",".",".","9"]
//   ]

console.log(sudokuSolver(sudokuGridEasy))