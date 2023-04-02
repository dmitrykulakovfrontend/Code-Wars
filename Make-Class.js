/*
  I don't like writing classes like this:

  function Animal(name,species,age,health,weight,color) {
    this.name = name;
    this.species = species;
    this.age = age;
    this.health = health;
    this.weight = weight;
    this.color = color;
  }
  Give me the power to create a similar class like this:

  const Animal = makeClass("name","species","age","health","weight","color") 
*/

// Answer:

function makeClass(...properties) {
  return class {
    constructor(...values) {
      let array = properties.map((prop, i) => [prop, values[i]])
        for (let [prop, value] of array) {
          this[prop] = value
        }
    }
  }
}

// BigO: O(n)
