// What is JavaScript?

// JavaScript is a programming language. It's primary purpose is to make web pages interactive.

// Programs in this language are called "Scripts"

// JavaScript can run in the browser and it can also run on the server via the JavaScript Engine.

// Example of JavaScript engines include V8(Chrome, Opera, Edge.), Spidermonkey(Firefox)

// How do Engines work?

// 1. The engine reads the script

// 2. Then it converts or compiles the script into machine code

// What can we do with JavaScript in the browser?

// JavaScript's capabilities depend of the environment it's running in. Example, node.js allows JavaScript to read and write files, perform network request etc.

// Other examples include

// Add new HTML to a webpage, change existing content, make modifications

// React to user actions, mouse clicks, and key strokes

// Send request over the network to remote servers, download and upload files

// Get and set up cookies, ask questions to the visitor, show messages.

// Specifications and Manuals

// ECMA-262 specification contains the msot in depth and detailed information on JavaScript. It defines the language.

// MDN (Mozilla) JavaScript Reference is the main manual with examples and other information. It has great in depth information about the language

// Code editors and IDE's

// IDE referes tona powerful editor with many features. It's a full scale developent enviorment

// The most common example would be Visual Studio Code.

// There are also lightweight editors that are simpler to use and offer speed and simplicity.

// Examples include Sublime Text, Notepad++, Vim, Emacs

// There is not best editor or IDE. Use simply what feels best for you. 

// Let's build our first program 

// We begin by introducing the "script" tag 

// We can use tis tag to insert JavaScript into an HTML document just about anywhere.

// Example 

<!DOCTYPE HTML>
<html>

<body>

  <p>Before the script...</p>

  <script>
    alert( 'Hello, world!' );
  </script>

  <p>...After the script.</p>

</body>

</html>

// External Scripts

// Givent the amount of JavaScript code in a single web page it's more common to write our code in a seperate document and attach it using the src attriubte

// Example 2

<!DOCTYPE HTML>
<html>

<body>

  <p>Before the script...</p>

  <script src ="js/script1.js"></script>

  <p>...After the script.</p>

</body>

</html>

// Code Structure

// Statements

// Statements are syntax constructs and commands that perform actions. We can have as many statements as we please. They can be seperated with a semi colon

// Example 

alert('Hello'); alert('World');

// Comments

// As programs become more complex it becomes normal to add comments which describe what the code does and why

// To add a comment on a line simply type to foward slashes //