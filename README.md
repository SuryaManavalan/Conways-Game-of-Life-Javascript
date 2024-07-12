# Conway's Game of Life in JavaScript

Coded by Surya Manavalan w/o ai :)

This project is a JavaScript implementation of Conway's Game of Life, a cellular automaton devised by the British mathematician John Horton Conway in 1970. The game is a zero-player game, meaning its evolution is determined by its initial state, requiring no further input from human players. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.

## Features

This implementation includes several key functions that together bring the Game of Life to life:

- **generateRandomBoard()**: Initializes the game board with a random state. Each cell on the 25x25 board can either be alive (true) or dead (false), with a small chance (9%) of being alive initially. This randomness introduces a variety of starting patterns.

- **printBoard()**: Prints the current state of the board to the console, representing alive cells with 'o' and dead cells with spaces. This function allows users to visually track the evolution of the game state over time.

- **numNeighbors(x, y)**: Calculates the number of living neighbors around a given cell. This function is crucial for determining the next state of each cell based on the rules of the game.

- **updateBoard()**: Applies the rules of Conway's Game of Life to update the board's state. The function creates a temporary board to calculate the new state of each cell without affecting the current state, ensuring all cells are updated simultaneously.

- **compareBoards(b1, b2)**: Compares two boards to check if they are identical. This function is used to detect if the game has reached a stable state where no cells change from one generation to the next.

- **loop()**: The main game loop that prints the current board, updates the board's state, and checks if the game has reached a stable state. If so, it resets the board with a new random state to start the process over.

- **setInterval(loop, 300)**: This line sets the game to update every 300 milliseconds, creating an animation effect in the console.

## What's Interesting?

- **Random Initialization**: The game starts with a randomly generated board, leading to unpredictable and fascinating patterns.
- **Cycle Detection**: The implementation detects when the game reaches a stable state and restarts with a new random board, ensuring continuous evolution.
- **Efficient State Updates**: The use of a temporary board to calculate updates ensures that all cells are updated simultaneously based on the same state, adhering to the rules of the game.

## How to Run

To run this implementation of Conway's Game of Life, follow these steps:

1. Ensure you have Node.js installed on your system.
2. Save the script as `GameOfLife.js` in your project directory.
3. Open a terminal or command prompt.
4. Navigate to your project directory.
5. Run the script with the command `node GameOfLife.js`.
6. Observe the evolution of the game in your terminal.

Enjoy exploring the complex patterns that emerge from simple rules with this implementation of Conway's Game of Life!
