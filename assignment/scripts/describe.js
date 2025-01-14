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
// declare variable "name", assign value of "Dane"
// check if name is "Mary"
// If yes, console says "Hi, Mary!"
// If anything else, console says "How do you do?"
// for code as written, the console.log output should be the second one, "How do you do?"

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
// declare variable "secret"
// declare variable "code", assign value of 123
// check if the code is exactly 123, then assign value of "super" to variable secret
//    also, multiply code x2 and assign to code - > code's value is now 246
// check if the code value is greater than 250, then assign the value of "duper" to variable secret
// finally, output the value of "secret" to the console. it should be "super" as the code is written now

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
// declare variable isStudent, assign value of True
// declare variable age, assign value of 34
// declare variable zip, assign value of 55407
// do a check: if isStudent is true AND zipcode is greater than 80000, then output to log "You're a student on the West Coast"
// if the above is not correct, then evaluate for isStudent is false OR age is less than 30, then output to log 'What are your hobbies?'
// if the above does not apply, then check the isStudent value. If the variable is true, then output to log "Welcome to Prime!"
//finally, if none of these are the case, then output to log "How about the weather?".
//Based on these initial values, the output to log should be "Welcome to Prime!"

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

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
//forgot to assign colorTwo to purple as well.
  colorOne = 'purple';
// fix: add this code: colorTwo = 'purple;
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

//this is checking OR instead of AND.
//fix: if (temp > 39 && time >= 4) {
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

//logic is flipped around. easiest code fix is change the conditional of the if statement, rather than the contained code inside the if statement - note this is technically checking if age is less than minAge, and not if age is greater than or equal to minAge. This should be the same, but if not I will include the actual code at the end.
//for either code as written with current vars, output log should read "enter"
//fix: if(age < minAge) {
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/


/* Fix using the exact logic from the question:
if (age >= minAge) {
  console.log('enter');
} else {
  console.log('no entry');
}
*/
