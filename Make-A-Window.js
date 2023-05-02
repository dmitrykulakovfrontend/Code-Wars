/*
  Make me a window. I'll give you a number (N). You return a window.

  Rules:

  The window will always be 2 x 2.

  The window needs to have N number of periods across and N number of periods vertically in each pane.

  Example:

  N = 3

  ---------
  |...|...|
  |...|...|
  |...|...|
  |---+---|
  |...|...|
  |...|...|
  |...|...|
  ---------
  Note: there should be no trailing new line characters at the end.
*/

// Answer:

function makeAWindow(num) {
  const middleInner = "-".repeat(num);
  const inner = ".".repeat(num);
  const edge = "-".repeat(num * 2 + 3);
  let windowPane = "";
  for (let i = 0; i < num; i++) {
    let line = "";
    line += "|" + inner + "|" + inner + "|\n";
    windowPane += line;
  }
  const lineBetween = `|${middleInner}+${middleInner}|\n`;
  return `${edge}\n${windowPane}${lineBetween}${windowPane}${edge}`;
}

// BigO: O(n)
