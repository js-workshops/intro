<img src="_presentation/ga-logo.png" style="border:none; background: transparent; box-shadow:none;" />

# Intro to JavaScript

## Evan Johnson

---

## About Me

* Front-End Engineer, Amazon
* Self-taught
* Love JavaScript

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

* LiveScript was created by Brendan Eich in 10 days in May 1995
<img src="_presentation/Brendan_Eich.jpg" height="150" style="height:150px; float:left; display: block; margin: 20px 60px 40px 0" />
* <img src="_presentation/netscape_2_startup.gif" height="150" style="height:150px; float: right;" /> Eich worked at Netscape, who was trying to enhance Netscape 2.0
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

<pre><code data-trim>
var myFunction = function() {
  // this is a function
  // your code block goes in between the curly brackets {}
}
</code></pre>

----

## Function Parameter(s)

<pre><code data-trim>
var myFunction = function(myParameter) {
  // this is a function
  // your code block goes in between the curly brackets {}
  // you can access the parameter by it's name above:
  // myParameter in this case
}

</code></pre>

----

# Exercise

File: 001-functions-intro.html

