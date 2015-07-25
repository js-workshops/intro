<img src="_presentation/ga-logo.png" style="border:none; background: transparent; box-shadow:none;" />

# Intro to JavaScript

## Evan Johnson

---

## About Me

* Front-End Engineer, Amazon<!--- .element: class="fragment" data-fragment-index="1" --->
* Self-taught<!--- .element: class="fragment" data-fragment-index="2" --->
* Love JavaScript<!--- .element: class="fragment" data-fragment-index="3" --->

---

## About You

* Introduce yourself (i.e. name, what you do, random fact)<!--- .element: class="fragment" data-fragment-index="1" --->
* Why do you want to learn JavaScript?<!--- .element: class="fragment" data-fragment-index="2" --->

---

## Agenda

* What is JavaScript?<!--- .element: class="fragment" data-fragment-index="1" --->
* Tools<!--- .element: class="fragment" data-fragment-index="2" --->
* Functions (intro)<!--- .element: class="fragment" data-fragment-index="3" --->
* Variables<!--- .element: class="fragment" data-fragment-index="4" --->
* Operators<!--- .element: class="fragment" data-fragment-index="5" --->
* Objects<!--- .element: class="fragment" data-fragment-index="6" --->
* Functions<!--- .element: class="fragment" data-fragment-index="7" --->
* jQuery<!--- .element: class="fragment" data-fragment-index="8" --->

---

## Learning Objectives

* Describe JavaScript<!--- .element: class="fragment" data-fragment-index="1" --->
* Create a JS Variable<!--- .element: class="fragment" data-fragment-index="2" --->
* Describe 3 different types of variables<!--- .element: class="fragment" data-fragment-index="3" --->
* Apply JS Operators to:<!--- .element: class="fragment" data-fragment-index="4" --->
  * preform arithmetic<!--- .element: class="fragment" data-fragment-index="5" --->
  * concatenate strings<!--- .element: class="fragment" data-fragment-index="6" --->
  * compare variables<!--- .element: class="fragment" data-fragment-index="7" --->
* Create a JS Object<!--- .element: class="fragment" data-fragment-index="8" --->
* Access a JS Object's properties<!--- .element: class="fragment" data-fragment-index="9" --->

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

* LiveScript was created by Brendan Eich in 10 days in May 1995<!--- .element: class="fragment" data-fragment-index="1" --->
<img src="_presentation/Brendan_Eich.jpg" height="150" style="height:150px; float:left; display: block; margin: 20px 60px 40px 0" />
* <!--- .element: class="fragment" data-fragment-index="2" ---><img src="_presentation/netscape_2_startup.gif" height="150" style="height:150px; float: right;" /> Eich worked at Netscape, who was trying to enhance Netscape 2.0
* Netscape changed the name to JavaScript in a marketing ploy<!--- .element: class="fragment" data-fragment-index="3" --->
* IE adopted JavaScript in August 1996 when releasing v.3.0<!--- .element: class="fragment" data-fragment-index="4" --->
* Ecma Internation standardized JavaScript in 1999 (ECMAScript)<!--- .element: class="fragment" data-fragment-index="5" --->

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

<!--- .element: data-background="#CCC" --->

# Exercise

File: 001-functions-intro.html

