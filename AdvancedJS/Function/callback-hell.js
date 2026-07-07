//* ================================
//*  Callback hell
//* ================================

//? Callback hell, also known as the Pyramid of Doom, refers to a situation in asynchronous JavaScript programming where multiple nested callbacks are used to handle asynchronous operations. 
//? This often results in code that is difficult to read, understand, and maintain due to its deeply nested structure.

const getStudentData = () => {
  setTimeout(() => {
    console.log("Hi, My name is Shivam");
    setTimeout(() => {
      console.log("Hi, My middleName is Kumar");
      setTimeout(() => {
        console.log("Hi, My lastName is Gupta");
        setTimeout(() => {
          console.log("Hi, I like to code ");
          setTimeout(() => {
            console.log("Hi, I live in India");
            setTimeout(() => {
              console.log("Hi, I love to play with code");
              setTimeout(() => {
                console.log("Hi, I was a national Player in coding ");
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);        
    }, 1000);
  }, 1000);
};
getStudentData();
