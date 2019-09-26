// Creating variables
let age = 25;
let year = 2019;

console.log(age, year);

//Override value
age = 30;
console.log(age);

// Create constant
const points = 100;
console.log(points); 

// **************** STRINGS**************

// String
//let email = "alex2837@@gmail.com"
//console.log(email);

// String concatenation
let firstName = "Gerry";
let lastName = "Moran";

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// Getting characters
console.log(fullName[0]); // Geting first character

// String length
console.log(fullName.length);

//String methods
console.log(fullName.toUpperCase());
//let result = fullName.toLowerCase();
//console.log(result);

//let index = email.indexOf('@');
//console.log(index);

// Comon string methods
let email = "alex2837@gmail.com";
let result = email.lastIndexOf('m');
let resultSlice = email.slice(0, 5);
let resultSub = email.substr(0, 10);
let resultRep = email.replace('m', 'o'); // Only relpeace the first one

console.log(result);
console.log(resultSlice);
console.log(resultSub);
console.log(resultRep);

// *************************** NUMBERS **************************

// Declare variables
let radius = 10;
const pi = 3.14;

const title = "Best friends";
const author = 'Mario';
const likes = 30;

//console.log(radius, pi);

// Math operators +, -, *, /, **, %
console.log(10/2);

let resultPi = pi * radius**2;
console.log(resultPi);

// Template string way
let resultTitle = `The blog called ${title} by ${author} has ${likes}`;

console.log(resultTitle);

// Creating html template
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes}</span>
`;

console.log(html);

// ******************************** ARRAYS **********************
let ninjas = ['shaun', 'ryu', 'chun-li'];

//owerwrite
ninjas[1] = 'ken';

console.log(ninjas);
console.log(ninjas[1]);

console.log(ninjas.length); // Elements in array

// Array methods
let resultNinjas = ninjas.join(',');
console.log(resultNinjas);

let resultNinjasIndex = ninjas.indexOf('chun-li');
console.log(resultNinjasIndex);

let resultNinjasCon = ninjas.concat(['ken','crystal']);
console.log(resultNinjasCon);


