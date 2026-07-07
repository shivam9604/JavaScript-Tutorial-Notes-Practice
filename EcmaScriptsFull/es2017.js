//* ==========================================
//*    ECMAScript Features (2017) / ES8
//* =========================================

//? List of new useful features added in ES8  👇
    // String padding
    // Object.values()
    // Object.entries()
    // Trailing commas in function parameter lists and calls
    // Async functions

//* =====================
//*  String padding
//* =====================

//? String padding in JavaScript is a way to add extra characters (like spaces) to a string to make it a specific length.

//todo  Use Case: Makes formatting text easier and more predictable, especially for tables, alignments, and UI elements. No more messy, uneven lines disrupting your visual spells!

const companyName = "codefix";

//? Using padStart() to pad from the beginning:
// const paddedName = companyName.padStart(5);
// const paddedName = companyName.padStart(18);
// console.log(paddedName);
// console.log(paddedName.length);

//? Using padEnd() to pad from the end:
// const paddedName = companyName.padEnd(15);
// const paddedName = companyName.padEnd(15, ".");      //in place of '.' we can use any symbol to check space is added or not
// console.log(paddedName);

//todo Key points:
//? Both padStart() and padEnd() create a new padded string without modifying the original one.

//? They take two arguments:
//?   - targetLength: The total length of the padded string.
//?   - padString (optional): The string to use for padding (defaults to spaces).

//? If the original string is already longer than or equal to targetLength, it's returned as-is.

//* =====================
//*  trailing commas
//* ====================
//? This feature allows to have trailing commas in function declarations, functions calls, array literal & object literal:

// // Function parameter list
// function greet(name, age, boolean,) {
//   console.log(`Hello ${name}, you are ${age} years old.`);
// }

// // Function call
// greet("John", 30, true,);


// // Array literal
// const colors = ["red", "green", "blue",];

// // Object literal
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
// };

//* ======================================
//*  Object.entries() & Object.values()
//* ======================================

// const product = {
//   id: 1,
//   name: "Laptop",
//   category: "Computers",
//   brand: "Asus",
//   price: 999.99,
//   stock: 50,
//   description: "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display."
// };

//? Object.values(): Returns an array containing the values of all enumerable own properties of an object.
// let values = Object.values(product);
// console.log(values);    //return all values of object

//? Object.entries(): Returns an array containing arrays of key-value pairs for each enumerable own property of an object.
// let entries = Object.entries(product);
// console.log(entries);     //return array containing arrays of key-value pairs

//* ======================================
//*  Async Await - Async Functions
//* ======================================

