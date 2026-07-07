//* ============================
//* Data Types Section - part 2
//* ============================

//* CONCATENATION in JavaScript
//? In JavaScript, the + sign is not only used for arithmetic addition but also for string concatenation. When the + operator is used with strings, it concatenates the strings together.
//? It's important to note that if any operand of the + operator is a string, JavaScript will treat the other operands as strings as well, resulting in string concatenation. If both operands are numbers, the + operator performs numeric addition.

// const str = "Hello " + "World";
// console.log(str);
// console.log(typeof str);    //output: string

//* Type COERCION is the automatic conversion of "values" from one data type to another.
//? It is a fundamental part of JavaScript and can be used to make code more readable and efficient.
//? There are two types of coercion in JavaScript: implicit and explicit. Implicit coercion happens automatically, while explicit coercion is done manually by the programmer.
//! It's worth noting that type coercion can lead to unexpected results, so it's essential to be aware of how JavaScript handles these situations.

// let sum = "5" + 10;
// console.log(sum);
// console.log(typeof sum);    //output: string

//* ============================
//* Tricky Interview Questions
//* ============================
// console.log(10 + "20");     //output: 1020 (CONCATENATION)
// console.log(9 - "5");       //output: 4
// console.log("Java" + "Script");     //output: JavaScript
// console.log(" " + " ");     //output:       (empty space)

// let sum = " " + 10;
// console.log(sum);                   //output: 10
// console.log(typeof sum);            //output: String

// console.log("Rahul" - "Gupta");     //output: NaN   (Not a Number)

// console.log(true + true);           //output: 2     (1+1=2 thats way it giving 2)
// console.log(true + false);          //output: 1     (1+0=2)
// console.log(false + true);          //output: 1     (0+1=1)
// console.log(false - true);          //output: -1    (0-1=-1)
