/***************************
* Variables and data types
 */

 /*
console.log('Hello World!!!');
var firstName = 'John';
console.log(firstName);

var lasName = "Smith";
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = "Teacher";
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = "John and Mark";
var function = 
*/

/***************************
 * Variable mutation and type coecrction
 */
 /*
 var firstName = "John";
 var age = 29;

console.log(firstName + " " + age);

//Type Coercion
var job, isMarried; 
job = "teacher";
isMarried = false;

console.log(firstName + " is a " + age + " year old " + job + ". Is he married? " + isMarried);

//Variable Mutation
age = "twenty nine";
job = "driver";

alert(firstName + " is a " + age + " year old " + job + ". Is he married? " + isMarried);

var lastName = prompt("What is his last name?");
console.log(firstName + " " + lastName);
*/


/***************************
 * Basic Operators
 */

 /*
var now, yearJohn, yearMark;
now = 2018;
ageJohn = 28
ageMark = 33
//Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logic operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operators
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "Mark is older than John");
var x;
console.log(typeof x);

//Multiple Assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
//x = x + 1
//x += 1
x++;
console.log(x);

// Coding Challenge
var massMark, massJohn, heightMark, heightJohn;
massMark = 70
massJohn = 80s
heightMark = 1.7
heightJohn = 1.75

var bmiMark = massMark / heightMark^2;
var bmiJohn = massJohn / heightJohn^2;

var higherMark = bmiMark > bmiJohn;

console.log("Is Mark's BMI higher than John's? " + higherMark);
*/

/***************
 * If / else statement
 
 var firstName = "John";
 var civilStatus = "single";

 if (civilStatus === "married") {
     console.log(firstName + " is married");
 } else {
     console.log(firstName + " will hopefully marry soon :)");
 }

 var isMarried = true; 
 if (isMarried) {
    console.log(firstName + " is married");
} else {
    console.log(firstName + " will hopefully marry soon :)");
}

var massMark, massJohn, heightMark, heightJohn;
massMark = 200
massJohn = 120
heightMark = 1.7
heightJohn = 1.75

var bmiMark = massMark / heightMark^2;
var bmiJohn = massJohn / heightJohn^2;

if (bmiMark > bmiJohn) {
    console.log("Mark's BMI is higher than John's");
} else {
    console.log("John's BMI is higher than Mark's");
}

console.log (bmiJohn);
console.log (bmiMark);

console.log("morty")
*/

/*********************
 * Boolean Logic
 
var firstName = "John";
var age = 25;

if (age < 13) {
    console.log(firstName + " is a boy.");
} else if ( age >= 13 && age < 20 ) { // Between 13 and 20 = age >= 13 AND age < 20
    console.log(firstName + " is a teenager.");
} else if ( age >= 20 && age < 30 ) {
    console.log(firstName + " is a young man.");
} else {
    console.log(firstName + " is a man.");
}
*/
/**********************
 * The Ternary Operator and Switch Statement
 * allow you to write and if else statement but all in one line
 
 var firstName = "John";
 var age = 12;

 //Ternary Operator
 age >= 18 ? console.log(firstName + " drinks beer.")
 : console.log(firstName + " drinks juice.");

 var drink = age >= 18 ? "beer" : "juice";
console.log(drink);
 /*
if (age >= 18) {
    var drink = "beer";
} else {
    var drink = "juice";
}


// Switch Statement

var job = "instructor";
switch (job) {
    case "teacher":
    case "instructor":
        console.log(firstName + " teaches kids how to code.");
        break;
    case "driver": 
        console.log(firstName + " drives an uber in Lisbon.");
        break;
    case "designer":
        console.log(firstName + " designs beautiful websites.");
        break;
    default:
        console.log(firstName + " does something else.");
} 

age = 26;
switch (true) {
    case age < 13:
        console.log(firstName + " is a boy.");
        break;
    case age >= 13 && age < 20:
        console.log(firstName + " is a teenager.");
        break;
    case age >= 20 && age < 30:
        console.log(firstName + " is a young man.");
        break;
    default: 
        console.log(firstName + " is a man.")
    
}

var firstName = "John";
var age = 25;

if (age < 13) {
    console.log(c;
} else if ( age >= 13 && age < 20 ) { // Between 13 and 20 = age >= 13 AND age < 20
    console.log(firstName + " is a teenager.");
} else if ( age >= 20 && age < 30 ) {
    console.log(firstName + " is a young man.");
} else {
    console.log(firstName + " is a man.");
} */
/*****************************
 * Truthy and False vaklues and equality operators
 */

 // flasy values: undefined, null, 0, " ", NaN
 // truthy values: NOT falsy values
/*
 var height;

 height = 23;
 if (height || height === 0) {
     console.log("variable is defined");
 } else {
     console.log("variable has NOT been defined");
 }

 // Equality Operators
 if (height == "23"){
     console.log ("The == operator does type coercion!");
 }
*/
/*
var johnOne, johnTwo, johnThree;
johnOne = 89
johnTwo = 120
johnThree = 103

var avgJohn = (johnOne + johnTwo + johnThree)/3

var mikeOne, mikeTwo, mikeThree;
mikeOne = 116
mikeTwo = 94
mikeThree = 123

var avgMike = (mikeOne + mikeTwo + mikeThree)/3

var maryOne, maryTwo, maryThree;
maryOne = 97
maryTwo = 134
maryThree = 105

var avgMary = (maryOne + maryTwo + maryThree)/3

console.log(avgJohn);
console.log(avgMike);
console.log(avgMary);

if (avgJohn > avgMike && avgJohn > avgMary) {
    console.log( "Winner is John. Avgerage score is " + avgJohn);
} else if (avgMike > avgJohn && avgMike > avgMary) {
    console.log ("Winner is Mike. Average score is " + avgMike);
} else if (avgMary > avgJohn && avgMary > avgMike) {
    console.log ("Winner is Mary. Average Score is " + avgMary)
} else {
    console.log("Draw" + avgJohn);
} */

/**************************************
 * Functions

 function calculateAge(birthYear) {
     return 2018 - birthYear;
 }

 var ageJohn = calculateAge(1990);
 var ageMike = calculateAge(1948);
 var ageJane = calculateAge(1969);

 console.log(ageJohn, ageMike, ageJane);
// Dry Principle - never repeat the same code

function yearsUntilRetirement (year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
    console.log(firstName + " retires in " + retirement + " years.");
    } else {
    console.log( firstName + " is already retired.");
    }
}

yearsUntilRetirement(1990, "John");
yearsUntilRetirement(1948, "Mike");
yearsUntilRetirement(1969, "Jane");
*/

/********************************************
 * Function Statements and Expressions
 */

//Function Declaration
//function whatDoYouDo(job, firstName) {}

 //Function Expression
 var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case "teacher":
            return firstName + " teaches kids how to code.";
        case "driver":
            return firstName + " drives a cab in Lisbon.";
        case "designer":
            return firstName + " designs beautiful websites";
        default: 
            return firstName + " does something else.";
    }   
 }

 console.log(whatDoYouDo("teacher", "John"));
 console.log(whatDoYouDo("designer", "Jane"));
 console.log(whatDoYouDo("retired", "Mark"));

console.log("Hello")