/*
Introduction
Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!
Task
You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given.
If you reach the end point before all your moves have gone, you should return Finish.
If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.
The Maze array will look like

maze = [[1,1,1,1,1,1,1],
        [1,0,0,0,0,0,3],
        [1,0,1,0,1,0,1],
        [0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1],
        [1,0,0,0,0,0,1],
        [1,2,1,0,1,0,1]]
..with the following key

      0 = Safe place to walk
      1 = Wall
      2 = Start Point
      3 = Finish Point
  direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"
Rules
1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.

2. The start and finish positions will change for the final tests.

3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.

4. If you reach the end point before all your moves have gone, you should return Finish.

5. If you hit any walls or go outside the maze border, you should return Dead.

6. If you find yourself still in the maze after using all the moves, you should return Lost.
Good luck, and stay safe!
*/

// Answer:

function mazeRunner(maze, directions) {
  // iterate through maze to find starting point
  let currentRow = null;
  let currentCol = null;
  for (let row = 0; row < maze.length; row++) {
    for (let col = 0; col < maze[0].length; col++) {
      if (maze[row][col] === 2) {
        currentRow = row;
        currentCol = col;
      }
    }
  }
  const dObject = {
    N: [-1, 0],
    E: [0, 1],
    S: [1, 0],
    W: [0, -1],
  };


  for (let direction of directions) {
    currentRow += dObject[direction][0];
    currentCol += dObject[direction][1];

    const rowOutOfBounds = currentRow < 0 || currentRow >= maze.length
    const colOutOfBounds = currentCol < 0 || currentCol >= maze[0].length

    if (
      rowOutOfBounds||
      colOutOfBounds ||
      maze[currentRow][currentCol] === 1
    )
      return 'Dead';
    if (maze[currentRow][currentCol] === 3) return 'Finish';
  }

  return 'Lost'
}

// BigO: O(n2)
