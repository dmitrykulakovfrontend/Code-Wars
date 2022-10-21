/*
  Task:
  This kata requires you to write an object that receives a file path and does operations on it.
  The purpose of this kata is to use string parsing, so you're not supposed to import external libraries.
  Testing:

  const fm = new FileMaster('/Users/person1/Pictures/house.png');
  fm.extension(); // output: 'png'
  fm.filename(); // output: 'house'
  fm.dirpath(); // output: '/Users/person1/Pictures/'
*/

// Answer:

class FileMaster {
  constructor(filepath) {
    this.path = filepath
  }
  
  extension() {
    return this.path.slice(this.path.lastIndexOf('.') + 1);
  }
  
  filename() {
    return this.path.slice(this.path.lastIndexOf('/') + 1,this.path.lastIndexOf('.'));
  }
  
  dirpath() {
    return this.path.slice(0 ,this.path.lastIndexOf('/') + 1);
  }
}

// BigO: O(n2)
