const sum = (a, b) => a + b;
const pi = 3.141;
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log("instance created");
  }
}

// module.exports.sum;
// module.exports.pi;
// module.exports.Person;

module.exports = { sum: sum, pi: pi, person: Person };
