//* ====================================
//* Values and Variable in JavaScript
//* ====================================

//* In JavaScript, values and variables are fundamental concepts that form the basis of programming.

//* Values:  A value is a piece of information that a program can work with. It can be a number, text, true/false, or more complex data.

//* Variables: A variable is a container that holds a value. It has a name and can be used to store and manipulate data in a program.
//* Variables are containers for storing values.

// !Prefer not to use var because of issue in block scope and functional Scope. always use let.
/*1. Always declare variables
2. Always use const if the value should not be changed
3. Always use const if the type should not be changed (Arrays and Objects)
4. Only use let if you can't use const*/

const accountId=729258
let accountEmail="mayurpatil@gmail.com"
var accountPassword="12345"
accountCity="Dhule"
let accountState;

//accountId=2 //not allowed because it is a constant

accountEmail="mayur@gmail.com"
accountPassword="525825"
accountCity="Shirpur"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

console.log();















