<img src="_presentation/ga-logo.png" style="border:none; background: transparent; box-shadow:none;" />

# Intro to JavaScript

## Evan Johnson

---

## About Me

* Front-End Engineer, Amazon<!--- .element: class="fragment" data-fragment-index="1" -->
* Self-taught<!--- .element: class="fragment" data-fragment-index="2" -->
* Loves JavaScript<!--- .element: class="fragment" data-fragment-index="3" -->

---

## About You

* Introduce yourself (i.e. name, what you do, random fact)<!--- .element: class="fragment" data-fragment-index="1" -->
* Why do you want to learn JavaScript?<!--- .element: class="fragment" data-fragment-index="2" -->

---

## Agenda

* What is JavaScript?<!--- .element: class="fragment" data-fragment-index="1" -->
* Tools<!--- .element: class="fragment" data-fragment-index="2" -->
* Functions (intro)<!--- .element: class="fragment" data-fragment-index="3" -->
* Variables<!--- .element: class="fragment" data-fragment-index="4" -->
* Operators<!--- .element: class="fragment" data-fragment-index="5" -->
* Objects<!--- .element: class="fragment" data-fragment-index="6" -->
* Functions<!--- .element: class="fragment" data-fragment-index="7" -->
* jQuery<!--- .element: class="fragment" data-fragment-index="8" -->

---

## Learning Objectives

* Describe JavaScript<!--- .element: class="fragment" data-fragment-index="1" -->
* Create a JS Variable<!--- .element: class="fragment" data-fragment-index="2" -->
* Describe 3 different types of variables<!--- .element: class="fragment" data-fragment-index="3" -->
* Apply JS Operators to:<!--- .element: class="fragment" data-fragment-index="4" -->
  * preform arithmetic<!--- .element: class="fragment" data-fragment-index="5" -->
  * concatenate strings<!--- .element: class="fragment" data-fragment-index="6" -->
  * compare variables<!--- .element: class="fragment" data-fragment-index="7" -->
* Create a JS Object<!--- .element: class="fragment" data-fragment-index="8" -->
* Access a JS Object's properties<!--- .element: class="fragment" data-fragment-index="9" -->

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

* LiveScript was created by Brendan Eich in 10 days in May 1995<!--- .element: class="fragment" data-fragment-index="1" -->
<img src="_presentation/Brendan_Eich.jpg" height="150" style="height:150px; float:left; display: block; margin: 20px 60px 40px 0" />
* <!--- .element: class="fragment" data-fragment-index="2" --><img src="_presentation/netscape_2_startup.gif" height="150" style="height:150px; float: right;" /> Eich worked at Netscape, who was trying to enhance Netscape 2.0
* Netscape changed the name to JavaScript in a marketing ploy<!--- .element: class="fragment" data-fragment-index="3" -->
* IE adopted JavaScript in August 1996 when releasing v.3.0<!--- .element: class="fragment" data-fragment-index="4" -->
* Ecma Internation standardized JavaScript in 1999 (ECMAScript)<!--- .element: class="fragment" data-fragment-index="5" -->

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

<img src="_presentation/Octocat.png" width="200" style="border:none;box-shadow:none; width: 200px; display:block;margin:30px auto;background:transparent;"/>

* https://github.com/js-workshops/intro
* Download files using git clone or the ‘Download Zip’ button
* After unzipping the files, copy them to a directory you want to work from (i.e. ~/Document, ~/Desktop)

----

## Console

<img src="_presentation/console.png" width="600" style="border:none;box-shadow:none; width: 600px; display:block;margin:30px auto;background:transparent;"/>

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

<pre><code data-trim class="javascript">
var myFunction = function() {
  // this is a function
  // your code block goes in between the curly brackets {}
}
</code></pre>

----

## Function Parameter(s)

<pre><code data-trim class="javascript">
var myFunction = function(myParameter) {
  // this is a function
  // your code block goes in between the curly brackets {}
  // you can access the parameter by it's name above:
  // myParameter in this case
  console.log(myParameter);
}

</code></pre>

----

<!--- .element: data-background="#CCC" -->

## Exercise

File: 001-functions-intro.html

---

# Variables

----

## Mozilla Developer Network

> You use variables as **symbolic names** for values in your application. The names of variables, called **identifiers**, conform to certain rules.

----

## Variable Rules

* Must start with a letter, underscore (&#95;), or dollar sign($)<!--- .element: class="fragment" data-fragment-index="1" -->
* Subsequent letters can also be digits (0-9)<!--- .element: class="fragment" data-fragment-index="2" -->
* Variable names are case sensitive<!--- .element: class="fragment" data-fragment-index="3" -->

----

## Declaring Variables

Using the *var* keyword, we are able to declare variables to the current scope.

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="javascript">
var x = 18;
</code></pre>

----

## Global Variables

If you don't use the *var* keyword, you will be declaring a global variable.

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="javascript">
x = 18;
</code></pre>

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

<!--- .element: data-background="#CCC" -->

## Exercise

File: 002-variables.html

---

# Operators

----

## What is a JavaScript Operator?

> JavaScript operators are **symbols** that can be used to assign values, compare values, preform arithmetic, test logic, manipulate strings, and more.

----

## Types of Operators

* Arithmetic operators<!--- .element: class="fragment" data-fragment-index="1" -->
* Assignment operators<!--- .element: class="fragment" data-fragment-index="2" -->
* String operators<!--- .element: class="fragment" data-fragment-index="3" -->

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

<pre><code data-trim class="javascript">
var x = 3;      // assigns the value 3 to x
x = x + 2;      // assigns the value 5 to x (3 + 2)
x = x - 3;      // assigns the value 2 to x (5 - 3)
x = x * 12;     // assigns the value 24 to x (2 * 12)
x = x / 2;      // assigns the value 12 to x (24 / 2)
x = x % 5;      // assigns the value 2 to x (12 % 5)
x = x++;        // assigns the value 3 to x (x + 1)
x = x--;        // assigns the value 2 to x (x - 1)
</code></pre>

----

## Arithmetic Parenthesis

Parenthesis can be used to indicate which part of an equation you want to evaluate first. 

<pre><code data-trim class="javascript">
var x = 2 * (100 / 5);   // assigns the value 40 to x
</code></pre>

<pre><code data-trim class="javascript">
var x = (100 / 5) * 2;   // assigns the value 40 to x
</code></pre>

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

<pre><code data-trim class="javascript">
var x = 3;   // assigns the value 3 to x
x = x + 2;   // assigns the value 5 to x (3 + 2)
x = x - 3;   // assigns the value 2 to x (5 - 3)
x = x * 12;  // assigns the value 24 to x (2 * 12)
x = x / 2;   // assigns the value 12 to x (24 / 2)
x = x % 5;   // assigns the value 2 to x (12 % 5)
x = x++;     // assigns the value 3 to x (x + 1)
x = x--;     // assigns the value 2 to x (x - 1)
</code></pre>

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="javascript">
var x = 3;   // assigns the value 3 to x
x += 2;      // assigns the value 5 to x (3 + 2)
x -= 3;      // assigns the value 2 to x (5 - 3)
x &#42;= 12;     // assigns the value 24 to x (2 * 12)
x /= 2;      // assigns the value 12 to x (24 / 2)
x %= 5;      // assigns the value 2 to x (12 % 5)
x = x++;     // assigns the value 3 to x (x + 1)
x = x--;     // assigns the value 2 to x (x - 1)
</code></pre>

----

<!--- .element: data-background="#CCC" -->

## Exercise

File: 003.1-operators.html

----

## String Operators

The + symbol is used as the addition operator with numbers, but it become the concatenation operator with strings. It combines two string values together.

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="javascript">
var x = "two strings " + "becomes one";
// assigns the value "two strings become one" to x
</code></pre>

----

<!--- .element: data-background="#CCC" -->

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

<pre><code data-trim class="javascript">
var x = 2;   // assigns the value 2 to x
var y = 2;   // assigns the value 2 to y
var z = 3;   // assigns the value 3 to z
x == y       // returns true
x == z       // returns false
x != y       // returns false
x != z       // returns true
</code></pre>

----

## Strict Equal and Not Equal

| Operator               | Description                                                            | 
|------------------------|:----------------------------------------------------------------------:|
| Strict equal (===)     | Returns true if the operands are equal and of the same type            |
| Strict not equal (!==) | Returns true if the operands are not equal and/or not of the same type |

----

## Strict Equal and Not Equal (Example)

<pre><code data-trim class="javascript">
var x = 2;     // assigns the number 2 to x
var y = 2;     // assigns the number 2 to y
var z = '2';   // assigns the string 3 to z
x ==- y        // returns true
x === z        // returns false
x !== y        // returns false
x !== z        // returns true
</code></pre>

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

<pre><code data-trim class="javascript">
var x = '10';    // assigns the string 10 to x
var y = 2;       // assigns the number 2 to y
var z = 10;      // assigns the number 10 to z
x > y            // returns true
x < y            // returns false
x > z            // returns false
x >= y           // returns true
y >= x           // returns false
x <= z           // returns true
</code></pre>

----

<!--- .element: data-background="#CCC" -->

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

* Are created with curly brackets ({})<!--- .element: class="fragment" data-fragment-index="1" -->
* Contain key/value pairs separated by a semi-colon (:)<!--- .element: class="fragment" data-fragment-index="2" -->
* The key/value pairs are separated by a comma (,)<!--- .element: class="fragment" data-fragment-index="3" -->

----

## Object Example

<pre><code data-trim class="javascript">
var person = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 28
};
</code></pre>

----

## Accessing an Object's Properties

<pre><code data-trim class="javascript">
var person.firstName;     // returns 'Jane'
</code></pre>

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="javascript">
var person['firstName'];  // returns 'Jane'
</code></pre>

----

<!--- .element: data-background="#CCC" -->

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

* Are created with the keyword: <!--- .element: class="fragment" data-fragment-index="1" -->***function name()***
* You can pass in as many parameters inside the parenthesis: <!--- .element: class="fragment" data-fragment-index="2" -->***function name(param)***
* Multiple parameters are separated with commas: <!--- .element: class="fragment" data-fragment-index="3" --> ***function name(param1, param2, param3)***
* You statement/code is wrapped in curly brackets after the parenthesis:  <!--- .element: class="fragment" data-fragment-index="4" -->***function name() { [statement] };***
* Return one value (i.e. Object, Variable, Function, etc)<!--- .element: class="fragment" data-fragment-index="5" -->
* After the closing curly bracket, you end the function with a semi-colon (;)<!--- .element: class="fragment" data-fragment-index="6" -->

----

## Functions and Vars

Functions can be assigned to variables

<pre><code data-trim class="javascript">
function logName(myName) {
  console.log(myName);
};

logName('John'); // logs 'John' to the console
</code></pre>

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="javascript">
var logName = function(myName) {
  console.log(myName);
};

logName('Jane'); // logs 'Jane' to the console
</code></pre>

----

## Encapsulate Logic

<pre><code data-trim class="javascript">
function multiply(x, y) {
  return x * y;
};

var z = multiply(2, 4); // assigns the number 8 to z
</code></pre>

----

<!--- .element: data-background="#CCC" -->

## Exercise

File: 005-functions.html

---

# jQuery

----

## What is jQuery?

jQuery is a JavaScript library, or a collection of functions/methods and objects that you can utilize.

----

## jQuery Definition

> It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.

----

## jQuery Motto

**“write less, do more”**

----

## Content Dilvery Network (CDN)

> A **content delivery network** or **content distribution network** (CDN) is a large distributed system of servers deployed in multiple data centers across the Internet. The goal of a CDN is to serve content to end-users with high availability and high performance.

----

<!--- .element: data-background="#CCC" -->

## Exercise

File: 006-jquery-cdn.html

----

## Inline JavaScript

Inline JavaScript is added directly to the DOM between a &lt;script&gt; and &lt;/script&gt; tag. If your not using the HTML5 Document type, then you need to define a type on the opening script tag:

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="html">&lt;script type=“text/javascript”&gt; ... JavaScript goes here ... &lt;/script&gt;</code></pre>

----

## Inline JavaScript Use Cases

Not a maintainable format. Use this only for code that should be fired immediately, and doesn’t deserve it’s own file (I.e. Google Analytics code).

----

## External JavaScript

External JavaScript is JavaScript that lives in a separate file than the DOM, but is referenced by the DOM.

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="html">&lt;script src=“/path/to/file.js“&gt;&lt;/script&gt;</code></pre>

----

## External JavaScript Use Cases

* Maintainability<!--- .element: class="fragment" data-fragment-index="1" -->
* Asynchronous loading<!--- .element: class="fragment" data-fragment-index="2" -->
* Compiled files<!--- .element: class="fragment" data-fragment-index="3" -->

----

<!--- .element: data-background="#CCC" -->

## Exercise

File: 007-external-js.html

----

## $ Symbol

jQuery, unless assigned otherwise, assigns its methods to the **$** symbol.

----

## Example jQuery Method

With jQuery assigned to the **$** symbol, here is how you select a DOM element.

<pre><code data-trim class="html">
<div id="myId"></div>
<span class="myClass"></span>
</code></pre>

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="javascript">
$("#myId")     // returns DOM element with the ID 'myId'
$(".myClass")  // returns DOM element with the class 'myClass'
</code></pre>

----

<!--- .element: data-background="#CCC" -->

## Exercise

File: 008-jq-selector.html

----

## jQuery Chained Methods

You can chain methods to the jQuery object that is returned. For example, after selecting the DOM elements, you might want to preform:

<pre><!--- .element: class="fragment" data-fragment-index="1" --><code data-trim class="javascript">
$("#myId").addClass('active');
// adds the class 'active' to the DOM element with the ID 'myId'
$(".myClass").hide();
// hides the DOM element with the class 'myClass'
</code></pre>


----

## jQuery DOC Ready

The browser loads some content synchronously and other content asynchronously. This can cause a problem with our JavaScript, as a lot of it is dependent on the state of the DOM and other assets.

----

## jQuery DOC Ready

**Good News!** jQuery has a method to handle this.

> A page can't be manipulated safely until the document is ‘ready.' jQuery detects this state of readiness for you.

----

## jQuery DOC Ready Example

<pre><code data-trim class="javascript">
$(document).ready(function() {
  console.log("Ready!");
});
</code></pre>

The console log statement is fired after the Document has loaded. http://learn.jquery.com/using-jquery-core/document-ready/

----

<!--- .element: data-background="#CCC" -->

## Exercise

File: 009-jq-doc-ready.html

----

## jQuery Events

Events are actions that happen in the browser. jQuery allows you to bind functions to events that happens in the invent.

Event types:<!--- .element: class="fragment" data-fragment-index="1" -->

* ready<!--- .element: class="fragment" data-fragment-index="2" -->
* hover<!--- .element: class="fragment" data-fragment-index="3" -->
* click<!--- .element: class="fragment" data-fragment-index="4" -->

----

## Why Events?

Up to this point, we have manually invoked functions. With jQuery events, we can bind functions to actions that occur in the browser.

Examples:<!--- .element: class="fragment" data-fragment-index="1" -->

* Once the Document has loaded, preload popular assets to improve latency<!--- .element: class="fragment" data-fragment-index="2" -->
* On hover over button, show tooltip with additional info<!--- .element: class="fragment" data-fragment-index="3" -->
* On click of button, show contact form in modal<!--- .element: class="fragment" data-fragment-index="4" -->

----

## jQuery Hover (event)
<img src="_presentation/jq-hover.png" width="800" style="border:none;box-shadow:none; display:block;margin:30px auto;background:transparent;"/>

----

## Functions as variables

<pre><code data-trim class="javascript">
$("mySelector").hover(function() {
    // hover in statement
  }, function() {
    // hover out statement
  }
);
</code></pre>

<pre><code data-trim class="javascript">
var hoverIn = function() {
  // hover in statement
};

var hoverOut = function() {
  // hover out statement
};

$("mySelector").hover( hoverIn, hoverOut );
</code></pre>

----

<!--- .element: data-background="#CCC" -->

## Exercise

File: 010.1-jq-hover.html

----

## Click Event

<img src="_presentation/jq-click.png" width="800" style="border:none;box-shadow:none; display:block;margin:30px auto;background:transparent;"/>

----

## Click Event (example)

<pre><code data-trim class="javascript">
$("mySelector").click(function(e) {
  // e is the click data
  // this prevents the default click event from occuring
  e.preventDefault();
  // click occured
});
</code></pre>

----

<!--- .element: data-background="#CCC" -->

## Exercise

File: 010.2-jq-click.html

----

## jQuery Animations

jQuery animations allow you to add visual effects to the browser with JavaScript. There are a number of jQuery animations, but will go over a commonly used one called show()

----

## jQuery Show

<img src="_presentation/jq-show.png" width="800" style="border:none;box-shadow:none; display:block;margin:30px auto;background:transparent;"/>

----

## jQuery Show (example)

<pre><code data-trim class="javascript">
$("mySelector").show(300)
</code></pre>

* The first parameter is the duration of the animation (i.e. how long until the element is showed).<!--- .element: class="fragment" data-fragment-index="1" -->
* An option second parameter can passed it. It has to be a function, or callback for when the animation is complete.<!--- .element: class="fragment" data-fragment-index="2" -->

----

<!--- .element: data-background="#CCC" -->

## Exercise

File: 011-jq-show.html

---

## Learning Objectives

* Describe JavaScript<!--- .element: class="fragment" data-fragment-index="1" -->
* Create a JS Variable<!--- .element: class="fragment" data-fragment-index="2" -->
* Describe 3 different types of variables<!--- .element: class="fragment" data-fragment-index="3" -->
* Apply JS Operators to:<!--- .element: class="fragment" data-fragment-index="4" -->
  * preform arithmetic<!--- .element: class="fragment" data-fragment-index="5" -->
  * concatenate strings<!--- .element: class="fragment" data-fragment-index="6" -->
  * compare variables<!--- .element: class="fragment" data-fragment-index="7" -->
* Create a JS Object<!--- .element: class="fragment" data-fragment-index="8" -->
* Access a JS Object's properties<!--- .element: class="fragment" data-fragment-index="9" -->

---

## Thank You

### Q&A

Contact Info:

* johnson.evan1@gmail.com
* @ev_blurbs
* https://github.com/evblurbs
