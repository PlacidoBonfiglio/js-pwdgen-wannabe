console.log('JS OK')

// 1. Retrieve the element of my interest from the DOM
// 2. Ask the user for his or her name
// 3. Ask the user for his or her last name
// 4. Ask the user for his or her favourite color
// 5. Add up the strings to generate a password
// 6. Insert the result into the DOM

// PREPARATORY PHASE
// 1. Retrieve the element of my interest from the DOM
const resultElement = document.getElementById('pwdgen');
console.log(resultElement);

// DATA COLLECTION PHASE
// 2. Ask the user for his or her name
const firstName = prompt('What is your name?', 'Dino');
console.log(firstName, typeof firstName);

// 3. Ask the user for his or her last name
const lastName = prompt('What is your last name?', 'Bonfiglio');
console.log(lastName, typeof lastName);
