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
 /*
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
*/



/*********************************************
 * Arrays
 
 //Initialize new array
 var names = ["John", "Mark", "Jane"];
 var years = new Array(1990, 1969, 1948);
 
 console.log(names[2]);
 console.log(names.length);

 //Mutate Array Data
 names[1] = "Ben";
 names[names.length] = "Mary";
 console.log(names);

 //Different data types
 var john = ["John", "Smith", 1990, "designer", false];
 
 john.push("blue");
 john.unshift("Mr.");
 console.log(john);

 john.pop();
 john.pop();
 john.shift();
 console.log(john);

 console.log(john.indexOf(23));

var isDesigner = john.indexOf("designer") === -1 ? "John is NOT a designer" : "John IS a designer"

console.log(isDesigner);
*/
/*
var billOne = 300;
var billTwo = 49;
var billThree = 59;
var tipAmount =[];
var totalAmount =[];

function tipCal(amount) {
    if (amount < 50) {
        var tip = amount*0.2
        var total = amount*0.2 + amount
    } else if (amount >= 50 && amount <= 200) {
        var tip = amount*0.15
        var total = amount*0.15 + amount
    } else {
        var tip = amount*0.1
        var total = amount*0.1 + amount
    }
      tipAmount.push(tip);
      totalAmount.push(total);
     // return console.log(tipAmount); 
}

tipCal(billOne);
tipCal(billTwo);
tipCal(billThree);

console.log(tipAmount);
console.log(totalAmount);
*/

/*******************************************
 * Objects and properties

 // Object Literal

 var john = {
     firstName: "John", 
     lastName: "Smith",
     birthYear: 1990,
     family: ["Jane", "Mark", "Bob", "Emily"],
     job: "teacher",
     isMarried: false
 };

 console.log(john.firstName);
 console.log(john["lastName"]);
 var x = "birthYear";
 console.log(john[x]);

 john.job = "designer";
 john["isMarried"] = true;
 console.log(john);

 //new object syntex
 var jane = new Object();
 jane.firstName = "jane";
 jane.birthYear = 1969;
 jane["lastName"] = "Smith";
 console.log(jane);

*/

/***************************************************
 * Objects and methods

var john = {
    firstName: "John", 
    lastName: "Smith",
    birthYear: 1992,
    family: ["Jane", "Mark", "Bob", "Emily"],
    job: "teacher",
    isMarried: false,
    calcAge: function() {
       this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
*/
/*
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

/***********************************
 * Coding Challenge 4
 

var john = {
    fullName: "John Smith",
    mass: 90,
    height: 1.7,
    calcJohnBmi: function(){
        this.bmi = this.mass / (this.height * this.height);
    }
}

john.calcJohnBmi();
console.log(john);

var mark = {
    fullName: "Mark Smith",
    mass: 80,
    height: 1.85,
    calcMarkBmi: function(){
        this.bmi = this.mass / (this.height * this.height);
    }
}

mark.calcMarkBmi();
console.log(mark);

if (john.bmi > mark.bmi) {
    console.log(john.fullName + " has a higher bmi of " + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + " has a higher bmi of " + mark.bmi );
} else {
    console.log("They have the same BMI");
}
*/

/**************************************
 * Loops and Iteration
 */

/* BUZZFEED For Loop

 for (var i = 1; i < 101; i++) {
     if (i % 3 === 0 && i % 5 === 0) {
         console.log("BuzzFeed");
     } else if (i % 3 === 0) {
         console.log("Buzz");
     } else if (i % 5 === 0) {
         console.log("Feed");
     } else{
     console.log(i);
     }
 }
*/
 /*
// for loop
 for (var i = 1; i <= 20; i += 2){
     console.log(i);
 }

 // i = 0, 0 < 10 true, log i to console, i++
 // i = 1, 1 < 10 true, log i to console. i++
 //...
 // i = 9, 9 < 10 true, log i to console. i++
 // i = 10, 10 < 10 FALSE, exit the loop!

//loop all the items in the following array

var john = ['John', "Smith", 1990, "designer", false];

for (var i = 0; i < john.length;  i ++) {
    console.log(john[i]);
}

//While Looop
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++
}
 */

// continue and break statements
/*
var john = ['John', "Smith", 1990, "designer", false];

for (var i = 0; i < john.length;  i ++) {
    if (typeof john[i] !== "string") continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length;  i ++) {
    if (typeof john[i] !== "string") break; // stop loop completely when encountering element that is not a string
    console.log(john[i]);
}

//Looping backward
for (var i = john.length - 1; i >= 0 ; i --) {
    console.log(john[i]);
}
*/

/*
124, 48, 268, 180
20% if bill is less than 50
15% when the bill is between 50 and 200
10% if the bill is moe than 200
*/

var johnTipAmount = [];
var johnTotalAmount= [];

var johnBill = {
    amount: [124, 48, 268, 180, 42],
    tipCalc: function() {
        for (var i = 0; i < this.amount.length; i++){
            var bill = this.amount[i];
            if (bill < 50) {
                var tip = bill*0.2
                var total = bill*0.2 + bill
            } else if (bill >= 50 && bill <= 200) {
                var tip = bill*0.15
                var total = bill*0.15 + bill
            } else {
                var tip = bill*0.1
                var total = bill*0.1 + bill
        }
          johnTipAmount.push(tip);
          johnTotalAmount.push(total);
        }
    }
};

johnBill.tipCalc();

// console.log(johnTipAmount);
// console.log(johnTotalAmount);

var markTipAmount = []
var markTotalAmount = []

var markBill = {
    amount: [77, 375, 110, 45],
    tipCalcM: function () {
        for (var i = 0; i < this.amount.length; i++) {
            var bill = this.amount[i];
            if (bill < 100) {
                var tip = bill*0.2
                var total = bill*0.2 + bill
            } else if (bill >= 100 && bill <= 300) {
                var tip = bill*0.1
                var total = bill*0.1 + bill
            } else {
                var tip = bill*0.25
                var total = bill*0.25 + bill
            }
            markTipAmount.push(tip);
            markTotalAmount.push(total);
        }
    }
};


markBill.tipCalcM();

// console.log(markTipAmount);
// console.log(markTotalAmount);

function tipAverage(hello) {
    var grandTotal = 0
    for (var i = 0; i < hello.length; i++) {
      grandTotal += hello[i]
    }
    return grandTotal / hello.length;
}

console.log(tipAverage(johnTipAmount));
console.log(tipAverage(markTipAmount));

if (tipAverage(johnTipAmount) > tipAverage(markTipAmount)) {
    console.log("John bigger tip");
} else {
    console.log("Mark bigger tip");
}

