// primitive values

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`Score One: ${scoreOne}`, `Score Two: ${scoreTwo}`);//50,50

scoreOne = 100;
console.log(`Score One: ${scoreOne}`, `Score Two: ${scoreTwo}`);//100, 50

//reference value
const userOne = {name: 'pat', age: 20};
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 40;
console.log(userOne, userTwo);// Change both to age 40