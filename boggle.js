/*
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.


find first letter of word

check all adjacent spaces to see if they are the next letter in word

if so, check adhacent spaces for next letter, so on.
*/

// main function; loops through rows and columns and checks adjacent tiles for each tile
const boggle = (word, board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (adjacencyChecker(board, word, i, j)) return true;
    }
  }
  return false;
}

// halper function to tell f a given space exists on the board
const isOutOfBounds = (board, i, j) => i < 0 || i >= board.length || j < 0 || j >= board[0].length;

// helper funciton to check if any adjacent tiles contain the next letter of the word
const adjacencyChecker = (board, word, i, j) => {
// base case to end loop, once a letter is found it will be taken off of the word, once all letters are found the word will be an empty string
if (!word.length) return true;

//if the space does not exist or the tile does not equal the letter, return false
if (isOutOfBounds(board, i, j) || board[i][j] !== word[0]) return false

//keep track of current tile
const current = board[i][j]
// once the current letter is found, delete it from the string
const newWord = word.substr(1)

board[i][j] = 0

// results object will call adjacencyChecker on each adjacent space, any that return true will recursively traverse the matrix. s
const results = adjacencyChecker(board, newWord, i + 1, j) ||
                adjacencyChecker(board, newWord, i - 1, j) ||
                adjacencyChecker(board, newWord, i, j + 1) ||
                adjacencyChecker(board, newWord, i, j - 1);

board[i][j] = current;

return results;
}

  let board1 = [
    ['A','B','C','W'],
    ['S','F','C','S'],
    ['A','D','E','E']
  ];

  console.log(boggle("ABCCED", board1))
  console.log(boggle("SEE", board1))
  console.log(boggle("ABCB", board1))
