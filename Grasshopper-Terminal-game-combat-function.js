/*
  Create a combat function that takes the player's current health and the amount of damage recieved,
  and returns the player's new health. Health can't be less than 0.
*/

// Answer:

function combat(health, damage) {
  const total = health - damage;
  return total > 0 ? total : 0
}

// BigO: O(1)
