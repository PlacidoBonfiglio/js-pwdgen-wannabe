console.log('JS OK')

// 1. Retrieve the element of my interest from the DOM
// 2. Prepare the variable with the password number
// 3. Ask the user for his or her name
// 4. Ask the user for his or her last name
// 5. Ask the user for his or her favourite color
// 6. Add up the strings to generate a password
// 7. Insert the result into the DOM

// PREPARATORY PHASE
// 1. Retrieve the element of my interest from the DOM
const resultElement = document.getElementById('pwdgen');
console.log(resultElement);

// 2. Prepare the variable with the password number
const pwdNumber = '21';

// DATA COLLECTION PHASE
// 3. Ask the user for his or her name
const firstName = prompt('What is your name?', 'Dino');
console.log(firstName, typeof firstName);

// 4. Ask the user for his or her last name
const lastName = prompt('What is your last name?', 'Bonfiglio');
console.log(lastName, typeof lastName);

// 5. Ask the user for his or her favourite color
const favColor = prompt('what is your favourite color?', 'Black');
console.log(favColor, typeof favColor);

// PROCESSING PHASE
//
