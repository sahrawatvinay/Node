// 1. Basic Data Types
let stringVar = "Hello, World!";            // string
let numberVar = 42;                         // number
let booleanVar = true;                      // boolean
let nullVar = null;                         // object (null is a special case)
let undefinedVar;                           // undefined
let arrayVar = [1, 2, 3, 4, 5];             // object (arrays are objects in JS)
let objectVar = { name: "John", age: 30 };  // object

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
const promiseExample = () => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve("Promise resolved after 5 seconds");
            }, 5000);
        } catch (ex) {
            reject(ex.message);
        }
    });
};

promiseExample().then((result) => {
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
console.log(message.charAt(2));
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

// Structuring an object
const user = {
    username: 'john_doe',
    email: 'john@example.com',
    address: {
        city: 'New York',
        zip: '10001'
    },
    isActive: true
};

// Destructuring the 'user' object
const { username, email, address: { city, zip }, isActive } = user;

//Rest parameters
function sum(...numbers) { //n number of args to array
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
console.log(sum(5, 10));      // 15

// For arrays Spread parameters
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5]; // Expands arr and adds more elements

// CRUD cookie
// The ReferenceError: document is not defined error occurs because document is part of the browser's DOM (Document Object Model) and isn't available in server-side environments like Node.js.
// document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
// const usernamecookie = getCookie('username');
// console.log(usernamecookie); // Outputs the value of the 'username' cookie or '' if not found
// document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";

let nArr = [1, 4, 5, 6, 3, 2, 1, 2, 2, 3];
let sumnArr = nArr.reduce((accumulator, currVal) => accumulator + currVal, 0);
console.log(sumnArr);
let evenArr = nArr.filter((curr) => curr % 2 == 0);
console.log(evenArr);
let sblArr = nArr.map((curr) => curr * 2);
console.log(sblArr);
var stSet = new Set(nArr);
console.log(stSet);
var uniqElem = nArr.filter((value, index, self) => self.indexOf(value) === index);

// Simulating three different asynchronous operations using Promises
const fetchData1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data from API 1");
    }, 1000);
});

const fetchData2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data from API 2");
    }, 2000);
});

const fetchData3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data from API 3");
    }, 3000);
});

// Using Promise.all to wait for all promises to resolve
Promise.all([fetchData1, fetchData2, fetchData3])
    .then((results) => {
        console.log("All data fetched:", results);
        // Output: ["Data from API 1", "Data from API 2", "Data from API 3"]
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });