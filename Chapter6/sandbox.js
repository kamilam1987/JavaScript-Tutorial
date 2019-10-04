//const para = document.querySelector('p');// grabs first p tag
//const para = document.querySelector('div.error');// another error message
const para = document.querySelector('body > h1');
console.log(para);

//*********** Multiple elements*******************
const paras = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error');
console.log(errors);
console.log(paras[0]);

paras.forEach(para => {
    console.log(para);
});

// ************************* Get an element by ID ******************
const title = document.getElementById('page-title');

console.log(title);

// ************************* Get elements by class name ******************
const errorsCl = document.getElementsByClassName('error');
console.log(errorsCl);

// **************************** Get elements by their tag name ************
const parasP = document.getElementsByTagName('p');
console.log(parasP);