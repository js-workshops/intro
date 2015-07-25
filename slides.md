<img src="_presentation/ga-logo.png" style="border:none; background: transparent; box-shadow:none;" />

# Intro to JavaScript

## Evan Johnson

---

## About Me

* Front-End Engineer, Amazon
* Self-taught
* Loves JavaScript

---

## About You

* Introduce yourself (i.e. name, what you do, random fact)
* Why do you want to learn JavaScript?

---

## Agenda

* What is JavaScript?
* Tools
* Functions (intro)
* Variables
* Operators
* Objects
* Functions
* jQuery

---

## Learning Objectives

* Describe JavaScript
* Create a JS Variable
* Describe 3 different types of variables
* Apply JS Operators to:
  * preform arithmetic
  * concatenate strings
  * compare variables
* Create a JS Object
* Access a JS Object's properties

---

# What is JavaScript?

----

## What does Google say?

> [JavaScript is] an object-oriented computer programming language commonly used to create interactive effects within web browsers.

----

## What does Wikipedia say?

> [JavaScript] is a dynamic computer programming language.

----

## How about @iamdevloper?

<img src="_presentation/iamdevloper.png" style="border:none;box-shadow:none;" />

----

## Client Side vs. Server Side

<img src="_presentation/client-server-side.png" />

----

## A Brief History

<img src="_presentation/Brendan_Eich.jpg" height="150" style="height:150px; float:left; display: block; margin: 20px 60px 40px 0" />
<img src="_presentation/netscape_2_startup.gif" height="150" style="height:150px; float: left;" />
* LiveScript was created by Brendan Eich in 10 days in May 1995
* Eich worked at Netscape, who was trying to enhance Netscape 2.0
* Netscape changed the name to JavaScript in a marketing ploy
* IE adopted JavaScript in August 1996 when releasing v.3.0
* Ecma Internation standardized JavaScript in 1999 (ECMAScript)

---

# Tools

----

## Sublime

<img src="_presentation/sublime.png" width="200" style="border:none;box-shadow:none; width: 200px; display:block;margin:0 auto;background:transparent;"/>

* A text editor for code
* http://www.sublimetext.com/

----

## Chrome

<img src="_presentation/chrome.png" width="200" style="border:none;box-shadow:none; width: 200px; display:block;margin:0 auto;background:transparent;"/>

* Webbrowser
* Advanced developer tools
* https://www.google.com/chrome/browser/desktop/

----

## Exercise Files

<img src="_presentation/Octocat.png" width="200" style="border:none;box-shadow:none; width: 200px; display:block;margin:30px auto;background: transparent;"/>

* https://github.com/js-workshops/intro
* Download files using git clone or the ‘Download Zip’ button
* After unzipping the files, copy them to a directory you want to work from (i.e. ~/Document, ~/Desktop)

----

## Console

<img src="_presentation/console.png" width="600" style="border:none;box-shadow:none; width: 600px; display:block;margin:30px auto; background: transparent;"/>

* Chrome Menu (top right hamburger button) -> Tools -> Developer Tools
* Mac shortcut: Cmd + Opt + i
* PC shortcut: F12, Ctrl + Shift + i

---

# Functions (Intro)

----

## W3Schools

> A JavaScript function is a block of code designed to perform a
> particular task. A JavaScript function is executed when "something"
> invokes it (calls it).

----

## Invoke

> to make use of (a law, a right, etc.)

----

## Invoke (JS)

> To initiate a block of code, that would otherwise not be executed.

----

## Basic Function

<pre><code data-trim>var myFunction = function() {
  // this is a function
  // your code block goes in between the curly brackets {}
}
</code></pre>

----

## Function Parameter(s)

<pre><code data-trim>var myFunction = function(myParameter) {
  // this is a function
  // your code block goes in between the curly brackets {}
  // you can access the parameter by it's name above:
  // myParameter in this case
}

</code></pre>

----

## Exercise

File: 001-functions-intro.html

---

# Variables

----

## Mozilla Developer Network

> You use variables as **symbolic names** for values in your application. The names of variables, called **identifiers**, conform to certain rules.

----

## Variable Rules

* Must start with a letter, underscore (&#95;), or dollar sign($)
* Subsequent letters can also be digits (0-9)
* Variable names are case sensitive

----

## Declaring Variables

Using the *var* keyword, we are able to declare variables to the current scope.

<pre><code data-trim class="javascript">var x = 18;</code></pre>

----

## Global Variables

If you don't use the *var* keyword, you will be declaring a global variable.

<pre><code data-trim class="javascript">x = 18;</code></pre>

----

## Variable Types

Primitive Variables are the most common type:

| Type          | Example            | 
| ------------- |:------------------:|
| Number        | 42, 3.14159        |
| Boolean       | true / false       |
| Strings       | "howdy"            | 
| undefined     | value is undefined |

----

## Exercise

File: 002-variables.html

---

# Operators

----

## What is a JavaScript Operator?

> JavaScript operators are **symbols** that can be used to assign values, compare values, preform arithmetic, test logic, manipulate strings, and more.

----

## Types of Operators

* Arithmetic operators
* Assignment operators
* String operators

----

## Arithmetic Operators

| Operator      | Description        | 
| ------------- |:------------------:|
| +             | Addition           |
| -             | Subtraction        |
| *             | Multiplication     | 
| /             | Division           |
| %             | Modulus            |
| ++            | Increment          |
| --            | Decrement          |

----

## Arithmetic Examples

<pre><code data-trim class="javascript">var x = 3;      // assigns the value 3 to x
x = x + 2;      // assigns the value 5 to x (3 + 2)
x = x - 3;      // assigns the value 2 to x (5 - 3)
x = x * 12;     // assigns the value 24 to x (2 * 12)
x = x / 2;      // assigns the value 12 to x (24 / 2)
x = x % 5;      // assigns the value 2 to x (12 % 5)
x = x++;        // assigns the value 3 to x (x + 1)
x = x--;        // assigns the value 2 to x (x - 1)</code></pre>

----

## Arithmetic Parenthesis

Parenthesis can be used to indicate which part of an equation you want to evaluate first. 

<pre><code data-trim class="javascript">var x = 2 * (100 / 5);   // assigns the value 40 to x</code></pre>

<pre><code data-trim class="javascript">var x = (100 / 5) * 2;   // assigns the value 40 to x</code></pre>

----

## Assignment Operators

| Shorthand     | Meaning            | 
| ------------- |:------------------:|
| x += y        | x = x + y          |
| x -= y        | x = x - y          |
| x &#42;= y    | x = x * y          | 
| x /= y        | x = x / y          |
| x %= y        | x = x % y          |

----

## Assignment Examples

<pre><code data-trim class="javascript">var x = 3;   // assigns the value 3 to x
x = x + 2;   // assigns the value 5 to x (3 + 2)
x = x - 3;   // assigns the value 2 to x (5 - 3)
x = x * 12;  // assigns the value 24 to x (2 * 12)
x = x / 2;   // assigns the value 12 to x (24 / 2)
x = x % 5;   // assigns the value 2 to x (12 % 5)
x = x++;     // assigns the value 3 to x (x + 1)
x = x--;     // assigns the value 2 to x (x - 1)</code></pre>

<pre><code data-trim class="javascript">var x = 3;   // assigns the value 3 to x
x += 2;      // assigns the value 5 to x (3 + 2)
x -= 3;      // assigns the value 2 to x (5 - 3)
x &#42;= 12;     // assigns the value 24 to x (2 * 12)
x /= 2;      // assigns the value 12 to x (24 / 2)
x %= 5;      // assigns the value 2 to x (12 % 5)
x = x++;     // assigns the value 3 to x (x + 1)
x = x--;     // assigns the value 2 to x (x - 1)</code></pre>

----

## Exercise

File: 003.1-operators.html

----

## String Operators

The + symbol is used as the addition operator with numbers, but it become the concatenation operator with strings. It combines two string values together.

<pre><code data-trim class="javascript">var x = "two strings " + "becomes one";
// assigns the value "two strings become one" to x</code></pre>

----

## Exercise

File: 003.2-operators.html

----

## Comparison Operators

> A **comparison operator** compares its operands and returns a logical value based on whether the **comparison is true**.

----

## Equal and Not Equal

| Operator       | Description                                | 
| -------------- |:------------------------------------------:|
| Equal (==)     | Returns true if the operands are equal     |
| Not equal (!=) | Returns true if the operands are not equal |

----

## Equal and Not Equal (Example)

<pre><code data-trim class="javascript">var x = 2;   // assigns the value 2 to x
var y = 2;   // assigns the value 2 to y
var z = 3;   // assigns the value 3 to z
x == y       // returns true
x == z       // returns false
x != y       // returns false
x != z       // returns true</code></pre>

----

## Strict Equal and Not Equal

| Operator               | Description                                                            | 
|------------------------|:----------------------------------------------------------------------:|
| Strict equal (===)     | Returns true if the operands are equal and of the same type            |
| Strict not equal (!==) | Returns true if the operands are not equal and/or not of the same type |

----

## Strict Equal and Not Equal (Example)

<pre><code data-trim class="javascript">var x = 2;     // assigns the number 2 to x
var y = 2;     // assigns the number 2 to y
var z = '2';   // assigns the string 3 to z
x ==- y        // returns true
x === z        // returns false
x !== y        // returns false
x !== z        // returns true</code></pre>

----

## Greater Than / Less Than

| Operator                   | Description                                                                    | 
| -------------------------- |:------------------------------------------------------------------------------:|
| Greater than (>)           | Returns true if the left operand is greater than the right operand             |
| Greater than or equal (>=) | Returns true if the left operand is greater than or equal to the right operand |
| Less than (<)              | Returns true if the left operand is less than the right operand                |
| Less than or equal (<=)    | Returns true if the left operand is less than or equal to the right operand    |

----

## Greater Than / Less Than (Example)

<pre><code data-trim class="javascript">var x = '10';    // assigns the string 10 to x
var y = 2;       // assigns the number 2 to y
var z = 10;      // assigns the number 10 to z
x > y            // returns true
x < y            // returns false
x > z            // returns false
x >= y           // returns true
y >= x           // returns false
x <= z           // returns true</code></pre>

----

## Exercise

File: 003.3-operators.html

---

# Objects

----

## Mozila Developer Network

> The Object constructor creates an object wrapper.

----

## Layman's Terms

> A variable is a symbol for one specific values. An object is a symbol that can contain many variables.

----

## Syntax

* Are created with curly brackets ({})
* Contain key/value pairs separated by a semi-colon (:)
* The key/value pairs are separated by a comma (,)

----

## Object Example

<pre><code data-trim class="javascript">var person = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 28
};</code></pre>

----

## Accessing an Object's Properties

<pre><code data-trim class="javascript">var person.firstName;     // returns 'Jane'</code></pre>

<pre><code data-trim class="javascript">var person['firstName'];  // returns 'Jane'</code></pre>

----

## Exercise

File: 004-objects.html

---

# Functions

----

## Review W3Schools

> A **JavaScript function** is a block of code designed to perform a particular task. A JavaScript function is executed when "something" **invokes it** (calls it).

----

## Review Invoke (JS)

> To initiate a block of code, that would otherwise not be executed.

----

## Syntax

* Are created with the keyword: ***function name()***
* You can pass in as many parameters inside the parenthesis: ***function name(param)***
* Multiple parameters are separated with commas: ***function name(param1, param2, param3)***
* You statement/code is wrapped in curly brackets after the parenthesis:  ***function name() { [statement] };***
* Return one value (i.e. Object, Variable, Function, etc)
* After the closing curly bracket, you end the function with a semi-colon (;)

----

## Functions and Vars

Functions can be assigned to variables

<pre><code data-trim class="javascript">function logName(myName) {
  console.log(myName);
};

logName('John'); // logs 'John' to the console</code></pre>

<pre><code data-trim class="javascript">var logName = function(myName) {
  console.log(myName);
};

logName('Jane'); // logs 'Jane' to the console</code></pre>

----

## Encapsulate Logic

<pre><code data-trim class="javascript">function multiply(x, y) {
  return x * y;
};

var z = multiply(2, 4); // assigns the number 8 to z</code></pre>

----

## Exercise

File: 005-functions.html

