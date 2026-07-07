//* =========================================
//* String in JavaScript
//* =========================================

//? Strings in JavaScript are a fundamental data type that represents a sequence of characters.

// Note:
//? Strings created with single or double quotes works the same.
// There is no difference between the two.

//* String Properties:
//? length: Property that returns the length of the string (number of characters).

// const str = "Hello,    World!";
// console.log(str.length);    // it count including space n all

//* =========================================
//* Escape Character
//* =========================================

//? Escape Character: In JavaScript, the backslash \ is used as an escape character. It allows you to include special characters in a string.

//    Code  Result	    Description
//    \'	    '	        Single quote
//    \"	    "	        Double quote
//    \\	    \	        Backslash

// let text = "My name is \" Shivam Gupta \" & I am a Full Stack Developer. ";
// let text = "My name is ' Shivam Gupta ' & \\ I am a \"Full Stack \" Developer. ";
// let text = 'My name is " Shivam Gupta " & I am a Full Stack Developer. ';

// console.log(text);

//* =========================================
//* String Search Methods
//* =========================================

//? 2: String Search Methods

//?  indexOf(): The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
//^ syntax
        // indexOf(searchString)
        // indexOf(searchString, position)

// let text = "shivam gupta";

// console.log(text.indexOf("Gupta"));     //output: -1 (because G is not present) 
// The indexOf() method is case sensitive.
// console.log(text.indexOf("gupta"));       //output: 7 (i.e index number of g)

// let strArr = Array.from(text);
// // console.log(strArr);
// let strMap = strArr.map((curElem, index) => `${curElem} - ${index}`);
// console.log(strMap);

//?  lastIndexOf() : The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
//^ syntax
        // lastIndexOf(searchString)
        // lastIndexOf(searchString, position)

// let text = "Hello JavaScript, welcome to the JavaScript.";
// let index = text.indexOf("JavaScript");
// let index = text.lastIndexOf("JavaScript");
// let index = text.lastIndexOf("JavaScript", 31);
// console.log(index);

//? search(): The search() method searches a string for a string (or a regular expression) and returns the position of the match.
//* Returns the index number where the first match is found. Returns -1 if no match is found.

// let text = "Hello JavaScript, welcome to the JavaScript.";
// let result = text.search("JavaScript");         //output: 6
// let result = text.search(/JavaScript/);
// let result = text.search(/Javascript/i);
// console.log(result);

//*👉 Important Tips
// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).
// They accept the same arguments (parameters), and return the same value

//? match() : Returns an array of the matched values or null if no match is found.

// let text = "Hello JavaScript, welcome to the JavaScript.";
// let result = text.match("Javascript");        //output: null
// let result = text.match("JavaScript");
//todo:- Here, the js converts the normal text into regular expression text.match(/JavaScript/); without the g flag (global flag)
// let result = text.match(/Javascript/gi);        // output: [ 'JavaScript', 'JavaScript' ]

// console.log(result);

//? matchAll() : Returns an iterator of all matches, providing detailed information about each match. Returns an empty iterator if no match is found.
// let text = "Hello JavaScript, welcome to the JavaScript";
// let matchResult = text.matchAll("javascript");
// console.log(matchResult);

// let matchResult = text.matchAll("JavaScript");
//todo:-  Here, the js converts the normal text into regular expression text.match(/JavaScript/g); also adds the g flag at the end by default
// console.log(...matchResult);


// for (let item of matchResult) {
//   console.log(item);
// }

// for (let item of matchResult) {
//   console.log(item[0]);
// }

// for (let index of matchResult) {
//   console.log(index.index);
// }

// for (let { index } of matchResult) {
//   console.log(index);
// }

//? includes(): Returns true if the string contains the specified value, and false otherwise.
// let text = "Hello JavaScript, welcome to the JavaScript";
// let includeResult = text.includes("Java");
// let includeResult = text.includes("J");
// console.log(includeResult);

//! Note: includes() is case sensitive. includes() is an ES6 feature.

//? startsWith(): The startsWith() method returns true if a string begins with a specified value.Otherwise it returns false:
// let text = "Hello JavaScript, welcome to the JavaScript.";
// let result = text.startsWith("welcome");     //output: false
// let result = text.startsWith("Hello");       //output: true
// console.log(result);

//* start position for the search can be specified
// let result = text.startsWith("welcome", 18);     //output: true
// let result = text.startsWith("welcome", 17);     //output: false
// console.log(result);

//? endsWith(): The endsWith() method returns true if a string ends with a specified value. Otherwise it returns false:

// let text = "Hello JavaScript, welcome to the JavaScript";
// let result = text.endsWith("welcome");        //output: false
// let result = text.endsWith("JavaScript");  //output: true
// console.log(result);

//* =========================================
//* Extracting String Parts:
//* =========================================
//! Extracting String Parts:

//~ String.prototype.substr() it is deprecated  ❌

//?  slice() extracts a part of a string and returns the extracted part in a new string.
//^ syntax
        // slice(start, end);

// Todo:  JavaScript counts positions from zero.
//? First position is 0. Second position is 1.

// let text = "Hello JavaScript, welcome to the JavaScript";
// let result = text.slice(6);        //output: JavaScript, welcome to the JavaScript
// let result = text.slice(6, 15);       //output: JavaScrip
// console.log(result);



//? a: substring: Extracts a portion of the string based on starting and ending indices.
//* camelCase is used to separate words, substring is not to be intended as Sub String but as Substring
//^ syntax
      // substring(indexStart)        // index starts with 0
      // substring(indexStart, indexEnd)

//* substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring().

// let text = "Hello JavaScript, welcome to the JavaScript";
// let result = text.substring(6);          //output: JavaScript, welcome to the JavaScript
// let result = text.substring(-6);      //output: Hello JavaScript, welcome to the JavaScript
// let result = text.slice(-6);          //output: Script
// console.log(result);

//! Homework
// let text = "Hello JavaScript, welcome to the JavaScript";
// let result = text.substring(0);
// let result = text.substring(1);
// let result = text.substring(-5);
// console.log(result);

//! similarities
//todo  In both the slice() and substring() methods, the end parameter indicates the ending index up to which the extraction occurs, but the character at the end index is excluded from the extracted substring.

//* =========================================
//* Interview Question
//* =========================================
//! What is the output for the following code?

// let text = "Hello JavaScript, welcome to the JavaScript";
// let result = text.slice(1);
// let result = text.replace("H", "");
// let result = text.substring(1);
//? Optional
// let result = text.replace("JavaScript", "shivam");
// let result = text.replaceAll("JavaScript", "shivam");

// console.log(result);

//* =========================================
//* Extracting String Characters
//* =========================================
//! Extracting String Characters
// There are 3 methods for extracting string characters:

//? The charAt(position) Method
//? The charCodeAt(position) Method
//? The at(position) Method

//? charAt() : The charAt() method returns the character at a specified index (position) in a string
// let text = "Hello JavaScript, welcome to the JavaScript";
// let result = text.charAt(6);       //output: j
// let result = text.charAt(-6);      //output:    (blank, because it do not allow the use of negative indexes)
// console.log(result);

//? charCodeAt() : The charCodeAt() method returns the code of the character at a specified index in a string. The method returns a UTF-16 code (an integer between 0 and 65535).
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.charCodeAt(6);        //output: 74 (i.e j ascii value)
// console.log(result);

//todo ES2022 introduced the string method at():
//? The at() method returns the character at a specified index (position) in a string. The at() method returns the same as carAt().
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.at(-6);       //output: c
// console.log(result);

//! Note: 
      // The at() method is a new addition to JavaScript.
      // It allows the use of negative indexes while charAt() do not.
      // Now you can use myString.at(-2) instead of charAt(myString.length-2).

//* =========================================
//* Replacing String Content:
//* =========================================
//! Replacing String Content:
//? replace() : The replace method is used to replace a specified value with another value.
// const str = "Hello, World!";
// const newStr = str.replace("World", "JavaScript");
// console.log(newStr);        // Outputs: Hello, JavaScript!

//? Case-Insensitive Replacement: To perform a case-insensitive replacement, you can use the i flag in the regular expression.
// let originalString = "Hello, World! How are you, World?";
// let replacedString = originalString.replace("world", "shivam");    // Output: Hello, World! How are you, World?  (not replacing because of case sensitive)
// let replacedString = originalString.replace(/world/i, "shivam");     // Output: Hello, shivam! How are you, World?
// let replacedString = originalString.replace(/world/gi, "shivam");     // Output: Hello, shivam! How are you, shivam?
// console.log(replacedString);

//* =========================================
//* Other Useful Methods:
//* =========================================

//! Other Useful Methods:
//? toUpperCase and toLowerCase: Converts the string to uppercase or lowercase.
// const str = "JavaScript";
// console.log(str.toUpperCase());     // Outputs: JAVASCRIPT
// console.log(str.toLowerCase());     // Outputs: javascript

//? trim: Removes whitespace from both ends of the string.
// const str = "   Hello, World!   ";
// console.log(str.length);

// let trimStr = str.trim();
// console.log(trimStr);
// console.log(trimStr.length);

//? split: Splits the string into an array of substrings based on a specified delimiter.
const str = "apple,orange,banana";
// let strArr = str.split();
// let strArr = str.split("");
// let strArr = str.split(",");
// let strArr = str.split(",").reverse();
// let strArr = str.split(",").reverse().join();

// console.log(strArr);

//* =========================================
//* //! Interview Questions
//* =========================================

//^ 1: Write a JavaScript function that prints the letters 'a' through 'z' in the console. You should use a loop to iterate through the letters and print each one on a new line.

// console.log("a".charCodeAt(0));
// console.log("z".charCodeAt(0));

// for (let char = 97; char <= 122; char++) {
//   console.log(String.fromCharCode(char));
// }

//!^ 2: Write a function to count the number of vowels in a string?

// const countVowels = (str) => {
//   let count = 0;
//   const vowels = "aeiouAEIOU";
//   for (const char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(countVowels("Hello a i o u world AEIe"));

//!^ 3: Write a function to check if all the vowels presents in a string or not?

// const checkAllVowelPresentOrNot = (str) => {
//   const vowels = "aeiou";
//   for (const char of vowels) {
//     // console.log(char);
//     // console.log(str.includes(char));
//     if (!str.includes(char)) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(checkAllVowelPresentOrNot("your name is shivam gupta"));

//!^ 4: Write a JavaScript function to check if the given string is Pangram or not? (contains all letter of alphabet)

// const pangramChecker = (str) => {
//   let inputArr = str.toLowerCase().split("");
//   // console.log(inputArr);
  
//   const value = inputArr.filter((curElem) => 
//     curElem.charCodeAt() >= "a".charCodeAt() && curElem.charCodeAt() <= "z".charCodeAt()
//   );
//   // console.log(value);

//   console.log([...new Set(value)].length);
  
//   if ([...new Set(value)].length === 26) {
//     console.log("string is Pangram");
//   } else {
//     console.log("string is not Pangram");
//   }
  
// };

// console.log(pangramChecker("The quick  @ brown fox jumps ove the lazy dog"));
