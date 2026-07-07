//* ==========================================
//*    ECMAScript Features (2016):
//* =========================================

//* ==============================
//*    Exponentiation Operator
//* ===============================

//? ES7 introduces a new mathematical operator called exponentiation operator. This operator is similar to using Math.pow() method. Exponentiation operator is represented by a double asterisk **. The operator can be used only with numeric values.

//* syntax
        // base_value ** exponent_value;

//? Basic usage:
// let base = 2;
// let exponent = 3;
// console.log("using Math.pow() the value of base "+ base +" and exponent " + exponent +" is:", Math.pow(base, exponent));
// console.log("using exponentiation operator the value of base "+ base +" and exponent " + exponent +" is:", base ** exponent);

//? In expressions:
//! calculates the area of a circle with a radius of 5 units.
// let area = Math.PI * 5 ** 2;
// console.log(area.toFixed(2));

//* ==============================
//*  Array.includes()
//* ===============================

//? includes() Method: The includes method checks whether an array includes a certain element, returning true or false.
//^ Syntax:
        // includes(searchElement);
        // includes(searchElement, fromIndex);

// const numbers = [1, 2, 3, 6, 4, 5, 6, 7, 8, 9];
// const result = numbers.includes(5);            // Output: true (return boolean value)
// const result = numbers.includes(5, 7);         // Output: false (return boolean value)

// console.log(result);
