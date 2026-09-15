// Оголошення змінної var, let та const
var x = 5;
let y = 10;
const z = 15;
y = 20; // let дозволяє змінювати значення
// z = 25; // const не дозволяє змінювати значення

console.log("Hello, World!", x, y, z);

// Типи даних
let str = "Hello"; // рядок, string
let num = 42; // число, number
let bool = true; // булевий тип, boolean
let obj = { name: "John", age: 30 }; // об'єкт, object
let arr = [1, 2, 3]; // масив, object
// undefined та null
let undef; // undefined

console.log(typeof undef); // "undefined"

undef = 'Now I have a value'; // присвоєння значення
console.log(typeof undef); // "string"

undef = 123123; // присвоєння значення
console.log(typeof undef); // "number"

// null
let n = null;
console.log(typeof n); // "object"

const myFunction = (a, b) => a === b;

const result = myFunction(5, "5"); // виклик фунції
console.log("Result:", result);

const arr = [1, 2, 3, 4, 5]; // фільтрація масиву, залишаємо тільки парні числа
arr.push(0)
console.log("Array:", arr.length);