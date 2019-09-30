// ********************************* FUNCTIONS ***********************

greet(); // Hoisting to the top
// ************************ Function declaration ****************
//(Hoisting works only with function declaration)
function greet(){
    console.log("Hello there");
}

// **************************** Function expression *******************
//(semicolon at the end)
const speak = function(name, time){ 
    console.log(`Good ${time} ${name}`);
};

//const speak = function(name = 'Pat', time = 'night'){ 
    //console.log(`Good ${time} ${name}`);
//};
//speak();// Asigns defalut values(Pat,night)

greet(); // Calling a function
speak('Kate','morning'); // Takes value and assigned to local variable

// *************************  Returning values ******************

//const calcArea = function(radius){
    //let area = 3.14 * radius**2;
    //return area;
    //return 3.14 * radius**2;
//};


// *********************** Arrow function ********************#
const calcArea = radius => 3.14 * radius**2;

//const calcArea = () => { // needs () when zero parameters, with one no need for (), () needed with more then one parameter

const area = calcArea(5);
console.log(area);

// ********************* Regular function ********************
//const greet = function(){
    //return 'hello, world';
//};

// ****************** Arrow function of greet **************** 
const greetNew = () => 'hello, world';
const result = greetNew();
console.log(result);

// *********************** Regular function *************************
//const bill = function(products, tax){
    //let total = 0;
    //for(let i = 0; i < products.length; i++){
        //total += products[i] + products[i] * tax;
    //}
    //return total;
//};

//console.log(bill([10, 15,20], 0.2));

// ********************* Arrow function *********************
const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
};

console.log(bill([10, 15,20], 0.2));

// *************************** Methods ******************
const name = 'Merry';

name.toUpperCase();
//console.log(name.toUpperCase());
let printName = name.toUpperCase();
console.log(printName);

// ******************** Callbacks & foreach
const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
};

//Regural
myFunc(function(value){
    console.log(value);
});
//Arrow
myFunc(value => {
    console.log(value);
});

const people = ['kate', 'mario', 'pat', 'paddy', 'tom'];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);
//people.forEach((person, index) =>{
    //console.log(index, person);
//});

// Get a reference to ul
const ul = document.querySelector('.ninjas')
const ninjas = ['chin', 'gizmo', 'kitty', 'zyggy'];

let html = ``;

ninjas.forEach(function(ninja){
    //cretae htm template
    html += `<li style = "color: pink">${ninja}</li>`;

});
console.log(html);
ul.innerHTML = html;