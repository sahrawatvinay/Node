// 1. Basic Data Types
let stringVar = "Hello, World!";    // string
let numberVar = 42;                 // number
let booleanVar = true;              // boolean
let nullVar = null;                 // object (null is a special case)
let undefinedVar;                   // undefined
let arrayVar = [1, 2, 3, 4, 5];     // object (arrays are objects in JS)
let objectVar = { name: "John", age: 30 };// object

// 2. Arrow Functions
const add = (a, b) => a + b;
const square = x => x * x;

console.log("\nArrow Functions:");
console.log(add(5, 3)); // 8
console.log(square(5)); // 25


// 4. Callbacks
const greet = (fn) => { console.log(`Good Morning ${fn}`) };
const userInfo = (fsn, lsn, callback) => {
    let fulln = fsn + lsn;
    callback(fulln);
};
userInfo("Vinay", "Sahrawat", greet);


// 3. Promises
const promiseExample = new Promise((resolve, reject) => {
    try {
        setTimeout(() => {
            resolve("Promise resolved after 5 seconds");
        }, 5000);
    } catch (ex) {
        reject(ex.message);
    }
});

promiseExample.then((result) => {
    console.log(result);
}).catch((ex) => {
    console.log(result);
});


// 5. Async/Await
const getRes = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("get res ka data after 2 secs");
        }, 2000);
    });
};
const getDataAsync = async () => {
    const res = await getRes();
    console.log("getDataAsync ----> ", res);
};
getDataAsync();

// 6. Arrays (Basic Operations)
let fruits = ["Apple", "Banana", "Mango"];
fruits.push("Orange"); // Add an item
fruits.pop(); // Remove last item
fruits.shift(); // Remove first item
fruits.unshift("Grapes"); // Add an item at the beginning

console.log("\nArray Operations:");
console.log(fruits); // ['Grapes', 'Banana', 'Mango']

// Loop through array
console.log("\nArray Loop:");
fruits.forEach(fruit => console.log(fruit));
for (var i = 0; i < fruits.length; i++)
    console.log(fruits[i]);

// 7. String (Basic Operations)
let message = "Hello, JavaScript javascript!";
console.log("\nString Operations:");
console.log(message.length); // Length of the string
console.log(message.toUpperCase()); // Convert to uppercase
console.log(message.toLowerCase()); // Convert to lowercase
console.log(message.includes("JavaScript")); // Check if string includes "JavaScript"
console.log(message.includes("javascript")); // Check if string includes "JavaScript"
console.log(message.replace("JavaScript", "World")); // Replace "JavaScript" with "World"

// 8. Classes and OOP Concepts
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Developer extends Person {
    constructor(name, age, language) {
        super(name, age);
        this.language = language;
    }

    code() {
        console.log(`${this.name} is coding in ${this.language}.`);
    }
}

console.log("\nClasses and OOP Concepts:");
let person1 = new Person("Alice", 25);
person1.greet(); // Hello, my name is Alice and I am 25 years old.

let dev1 = new Developer("Bob", 30, "JavaScript");
dev1.greet(); // Hello, my name is Bob and I am 30 years old.
dev1.code(); // Bob is coding in JavaScript.

// Example Array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter: Creates a new array with elements that pass a test (provided by a function).
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log("\nFilter:");
console.log(evenNumbers); // [2, 4, 6, 8, 10]


// Map: Creates a new array with the results of calling a function on every element in the calling array.
const squaredNumbers = numbers.map(num => num * num);

console.log("\nMap:");
console.log(squaredNumbers); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// Reduce: Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
const sumOfNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("\nReduce:");
console.log(sumOfNumbers); // 55

// Combining filter, map, and reduce
// Example: Sum of squares of even numbers
const sumOfSquaresOfEvenNumbers = numbers
    .filter(num => num % 2 === 0)       // [2, 4, 6, 8, 10]
    .map(num => num * num)              // [4, 16, 36, 64, 100]
    .reduce((acc, curr) => acc + curr, 0); // 220

console.log("\nCombining filter, map, reduce:");
console.log(sumOfSquaresOfEvenNumbers); // 220


class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}

class Gender extends Human {
    constructor(n, a, g) {
        super(n, a);
        this.gender = g;
    }
    getGender() {
        console.log(`${this.name} is a ${this.gender}`);
    };
}

var gg = new Gender("Vinay", 28, "Male");
gg.getGender();
gg.getDetails();