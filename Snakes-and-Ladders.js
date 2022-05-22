/* 
Snakes and Ladders is an ancient Indian board game regarded today as a worldwide classic.
It is played between two or more players on a gameboard having numbered, gridded squares.
A number of "ladders" and "snakes" are pictured on the board, each connecting two specific board squares. (Source Wikipedia)

Task
Your task is to make a simple class called SnakesLadders.
The test cases will call the method play(die1, die2) independantly of the state of the game or the player turn.
The variables die1 and die2 are the die thrown in a turn and are both integers between 1 and 6. The player will move the sum of die1 and die2.

Rules
1.  There are two players and both start off the board on square 0.

2.  Player 1 starts and alternates with player 2.

3.  You follow the numbers up the board in order 1=>100

4.  If the value of both die are the same then that player will have another go.

5.  Climb up ladders. The ladders on the game board allow you to move upwards and get ahead faster. If you land exactly on a square that shows an image of the bottom of a ladder, then you may move the player all the way up to the square at the top of the ladder. (even if you roll a double).

6.  Slide down snakes. Snakes move you back on the board because you have to slide down them. If you land exactly at the top of a snake, slide move the player all the way to the square at the bottom of the snake or chute. (even if you roll a double).

7.  Land exactly on the last square to win. The first person to reach the highest square on the board wins. But there's a twist! If you roll too high, your player "bounces" off the last square and moves back. You can only win by rolling the exact number needed to land on the last square. For example, if you are on square 98 and roll a five, move your game piece to 100 (two moves), then "bounce" back to 99, 98, 97 (three, four then five moves.)

8.  If the Player rolled a double and lands on the finish square “100” without any remaining moves then the Player wins the game and does not have to roll again.

Return Player n Wins!. Where n is winning player that has landed on square 100 without any remainding moves left.

Return Game over! if a player has won and another player tries to play.

Otherwise return Player n is on square x. Where n is the current player and x is the sqaure they are currently on.
*/

// Answer
const objects = [
  {begin: 2, ends: 38},
  {begin: 7, ends: 14},
  {begin: 8, ends: 31},
  {begin: 15, ends: 26},
  {begin: 21, ends: 42},
  {begin: 28, ends: 84},
  {begin: 36, ends: 44},
  {begin: 51, ends: 67},
  {begin: 71, ends: 91},
  {begin: 78, ends: 98},
  {begin: 87, ends: 94},
  {begin: 99, ends: 80},
  {begin: 95, ends: 75},
  {begin: 92, ends: 88},
  {begin: 89, ends: 68},
  {begin: 74, ends: 53},
  {begin: 62, ends: 19},
  {begin: 64, ends: 60},
  {begin: 49, ends: 11},
  {begin: 46, ends: 25},
  {begin: 16, ends: 6},
]
class SnakesLadders {
  
  constructor() {
    this.firstPlayer = {
      id: 1,
      square: 0,
    };
    this.secondPlayer = {
      id: 2,
      square: 0,
    };
    this.currentPlayer = this.firstPlayer;
    this.currentState = 'in process';
  }
  
  play(firstDie,secondDie) {
    if (this.currentState === 'end') return 'Game over!'
    this.move(firstDie + secondDie);
    if (this.isWin()) return `Player ${this.currentPlayer.id} Wins!`;
    return this.changePlayer(firstDie,secondDie);
  }
  
  move(amountOfSteps) {
    this.currentPlayer.square += amountOfSteps;
    if (this.currentPlayer.square > 100) {
      this.currentPlayer.square = 100 - (this.currentPlayer.square - 100)      
    }
    this.isOnObject();
  }
  
  isOnObject() {
    for (const object of objects) {
      if (this.currentPlayer.square === object.begin) {
        this.currentPlayer.square = object.ends
      }
    }
  }
  
  isWin() {
    if (this.currentPlayer.square === 100) {
      this.currentState = 'end'
      return true
    }
    return false;
  }
  
  changePlayer(firstDie,secondDie) {
    if (firstDie === secondDie) {
      return `Player ${this.currentPlayer.id} is on square ${this.currentPlayer.square}`;
    } else {
      const result = `Player ${this.currentPlayer.id} is on square ${this.currentPlayer.square}`;
      this.currentPlayer.id === 1 ? this.currentPlayer = this.secondPlayer : this.currentPlayer = this.firstPlayer
      return result;
    }
  }
  
}

// Optimizations: First I wanted to use static property and different arrays for ladder and snake, but meanwhile coding I realised that these objects are same,
// so I combined them into 1 array. I couldnt use static because looks like codewars not supporting that syntax.
