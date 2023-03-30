// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called 'name' and set it to 'Dane'. 
// Create a conditional statement and check if 'name' is strictly equal to 'Mary'.
// We log 'Hi, Mary!' if our conditional statement returns true. 
// We log 'How do you do?' if our conditional statement returns false. 
// Our console log returns 'How do you do?' since 'name' is set to 'Dane'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Create a variable called 'secret'.
// Create a second variable called 'code' and set it to 123.
// We create a conditional statement to check if 'code' is strictly equal to '123'. 
// When our conditional statements returns true we set 'secret' to the string 'super' and we set 'code' to the value of 'code * 2'.
// We create Another conditional statement to check if 'code' is greater than the value of 250. When our conditional statement returns true 
// we set 'secret' to 'duper'.
// we console log secret.
// our console log secret would return 'super', since 'code' is set to 123 and 123 * 2 = 246 which is less than 250. 

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Set 'isStudent' to 'true'. set 'age' to '34'. Set 'zip' to '55407.
// create a compound conditional statement that checks if isStudent is true and also if 'zip' is greater than 80000. When this compound
// conditional returns true we log 'You're a student on the West Coast!' in our console. 
// we create a secondary compound conditional statement that checks if ;isStudent' is 'false' or if 'age' is less than '30'. this 
// statement would log 'What are your hobbies?' in the console if it returns true.
// we create a second else if statement to check if 'isStudent' strictly returns true. This statment will log 'Welcome to Prime!' if true. 
// lastly, we log 'How about the weather?' if our conditional statement returns anything other than what was specifies in the previous staments.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

// FIX - 'colorOne' should be set to 'blue' and 'colorTwo' should be set to 'red'.
// so the correct variables should be let colorOne = 'blue'; and let colorTwo = 'red';

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - between the curly braces, we should have colorOne set to 'purple' as well as colorTwo set to 'purple'.
// so the correct statement inside the curly braces should be colorOne = 'purple'; and colorTwo = 'purple';


if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*

// FIX const should be let instead of const so that the variable of time can change.
// so it should be let time = 4;
let temp = 40;
const time = 4;

// FIX for this compound conditional logic statement we should have && instead of ||.
// so the correct first part of the conditional statement should be if (temp > 39 && time >= 4)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX the current conditional statement checks if minAge is less than or equal to age. So we have to switch that to greater or equal to age.
// the correct operator would be >= so it would be if (minAge >= age).
// we also need to switch the log entery. the correct log needs to be switched with the else statment. 
// so it should be if(minAge >= age) {
  console.log( 'enter' );
} else {
  console.log( 'no entry' );
}

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

