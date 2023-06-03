/*
  Create a complement to the Object.freeze function, Object.deepFreeze

  This method should apply the Object.freeze function to an object and, recursively, all of its properties that are objects.

  The freeze operation should prevent objects from being modified.
*/

// Answer:

Object.deepFreeze = function (object) {
  if (typeof object !== "object") return;
  Object.freeze(object);
  for (let key in object) {
    Object.deepFreeze(object[key]);
  }
};

// BigO: O(n)
