// Variables

// We often find that a JavaScript application needs to interact with information

// Examples include an online shop where information belongs to the goods being sold or a chat application where information includes users, messages, etc.

// Variables are used to store this information.

// A variable is a named storage for data. We can use variables to store all kinds of data.

// Let's introduce or first keyword which will allow us to delcare variables

// let

// Let's give this variable a name

// let message;

// Now let's put some data into that variable by using the assignment operator (=)

let message = "Hello!";

// The string(which we will cover shortly) is now saved into the memory area associated with the variable

// We can access it by simple using the variable name

message;

console.log(message);

// Multiple variables can also be declared in the same line

// Example

// let user = "John",
//   age = "25",
//   greeting = "How are you?";

// It might appear to take up less space but it's best place a single variable per line of code. At least for the sake of readability

let user = "John";
let age = 25;
let greeting = "How are you?";

// This multiline variant is longer but it's much easier to read

// We can better understand the concept of a "variable" if we imagine it as a container for data with a unique label on it

// Variable naming

// There are two limitations on variable names in JavaScript:

// 1. The name must only contain letters, digits, or the symbols $ and _

// 2. The first character cannot be a digit

// Examples of valid name

let userName = "Spiderman";

let test123 = "Test";

// When variable names contain multiple words, camelCase is commonly used. camelCase is when the the first letter of every subsequent word is Capital

// Examples

// testScore, favoriteFood, userRating

// Tip

// Case matters. apple and APPLE are two different variables.

// Constants

// Constants are variables that cannot be reassigned and attempting to do so would result in an error

// Example

const christmasDay = "12/25";

// When you are sure that the variable will never change declare it using const to gurantee and communicate that to everyone

// Variables shoudl be named cleanly and have obvious meaning in order to describe the data that it stores

// Some common practices when it comes to naming variables include

// Use human-reable names, stay away from short abbreviations, make names decriptive and concise.

// Data Types

// In JavaScript a value is always certain type

// There are eight basic Data Types in JavaScript.

// Number

// Example

let n = 123;

// The number type represents both integers and floating points.

// BigInt

// This represnts numbers of arbitrary length and is not commonly used in production JavScript

// String

// Example

let phrase = "May you please pass the salt?";

// Strings may have zero or more characters and are found inside quotation marks

// Boolean

// Boolean has only two values, true and false.

// Example

let nameFieldChecked = true;

let ageFieldChecked = false;

// Null

// In JavaScript null a special value which represents "nothing", "empty", or value unknown.

// Example

let height = null;

// Undefined

// Undefined is a special value that means no value has been assigned. If a variable is declared but not assigned then the value is undefined

// The typeof operator

// The typeof operator returns the type of the operand. It can be useful when we want to process values of different types differently or just want to do a check

// Interactions

// Alert

// Shows a message and waits for the user to press "OK"

// Example

alert("Hello!");

// Prompt

// The function prompt accepts two arguments

// Example

// result = prompt(title, [default]);

// title is the text next to the vistor and default is an optional parameter

// Confirm

// Example

result = confirm(question);
