// ****************************FOR LOOPS ***********************

//for(let i = 0; i < 5; i++){
    //console.log('in loop:', i);
//}
//console.log("Loop finished");
const names = ['shaun', 'mario', 'joe'];

for(let i = 0; i < names.length; i++){
   //console.log(names[i]);
   let html = `<div>${names[i]}</div>`;
   console.log(html);
}

// ****************************WHILE LOOP ******************

const namesNew = ['kate', 'merry', 'alex'];
let j = 0;

while(j < namesNew.length){
    console.log(namesNew[j]);
    j++;
}

// ******************** DO WHILE *************************

let z = 5;
 do{
     console.log("val of z is:", z);
     z++;
 } while(z < 5);

 // ************************** IF STATEMENTS *****************************

 const age = 25;

 if(age > 20){
     console.log("You are over 20 years old");
 }

 const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

 if(ninjas.length > 3){
     console.log("that's a lot of ninjas");
 }

 const password = "pass@123";

 if(password.length >= 12 && password.includes('@')){
     console.log("That password is mighty strong");
 } else if(password.length >= 8 || password.includes('@') && password.length > 5){
     console.log("password is not long enough");
 } else {
     console.log("password is long enough");
 }

 // *************************** LOGICAL NOT *************************

 let user = false;
 if(!user){
     console.log("you must be logged to continue");
 }
 console.log(!false);
 console.log(!true);

 // ****************************** BREAK AND CONTINUE *******************
 
 const score = [50, 25, 0, 30, 100, 20, 10];

 for(let i = 0; i < score.length; i++){
     if(score[i] === 0){
         continue;// ignore 0 and continue looping
     }
     console.log("your score : ", score[i]);

     if(score[i] === 100){
         console.log("congrats, you got the top score");
         break;
     }
 }

 // *************************** SWICH STATEMENTS *********************

 const grade = 'D';

 // using if statement
 switch(grade){
    case 'A':
        console.log("You got an A!");
        break;
    case 'B':
        console.log("You got an B!");
        break;
    case 'C':
        console.log("You got an C!");
        break;
    case 'D':
        console.log("You got an D!");
        break;
    case 'E':
        console.log("You got an E!");
        break;
    default:
        console.log("not a valid grade");
 }

