/*
  Write a synchronous function that makes a directory and recursively makes all of its parent directories as necessary.

  A directory is specified via a sequence of arguments which specify the path. For example:

  mkdirp('/','tmp','made','some','dir')
  ...will make the directory /tmp/made/some/dir.

  Like the shell command mkdir -p, the function you program should be idempotent if the directory already exists.

  HINT:

  In javascript/coffescript, you will want to require('fs') and use functions in that library.

  Documentation on fs.
*/

// Answer:

const fs = require("fs");
function mkdirp(...names) {
  // recursively make directories
  let currentPath = "";
  while (names.length) {
    currentPath += names.shift() + "/";
    if (!fs.existsSync(currentPath)) {
      fs.mkdirSync(currentPath);
    }
  }
}

// BigO: O(n)
