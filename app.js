//
var hello ="world";
var num = 7;
var bool = true;
var undef = undefined;
var none = null;

/*
console.log(5);

console.log(hello);

console.log("world");

console.log(num);

*/

//*Changed variable informarmation here!
num =29;

console.log(num);


//? MATH VARIABLES

var foo;

console.log(foo);

foo = 19;

console.log(foo + 4);

//? Concatenation

var textOne = 'Hello';

console.log(textOne + ' World!');


//!TEMPERATURE CONVERTER

//TODO  Farenheit = Celcius *9/5 + 32;
//CONSOLE.LOG(ANSWER);


var Cel = 38

var Far = Cel *9/5 + 32

console.log(Far)


//AGE CALCULATOR
// Subtract the birth year from the current year to get the age
var Age = 1982

console.log(Age - 2024)

//Bool variables
//let
//const
//escape the character
//wrap with opposite quote
//addition "+"
//subtraction "-"
//division "/"
//multiplication ""
//increment "++"
//decrement "--"
//modulus "%"
 
//const==IMMUTABLE
//CANNOT CHANGE INFORMATION TO const;
const bar = 'You cannot change me!';

//bar =8 ; //causes error

console.log(bar)

//let = its accessible based on its scope
let bar2 = 'You can change me!'

bar2 = 10;

console.log(bar2)

//Dealing with quotes in strings
let stringQuote = "You aren't special";
console.log(stringQuote)
//escaping the quote
let escapeQuote ='You aren\'t special';
console.log(escapeQuote);

//increments and decrements
let num3 = 0;
console.log(num3);
num3++
console.log(num3);
num3--;
console.log(num3);

//setting multi-variables
let baz, baz2, baz3;

baz3 = 8;
console.log('I am baz3!' + baz3)

//Template Literals
console.log(`Hello Baz2 ${baz3}`)

//Simple interest rate calculator
//? Ask the user to input the principal amount, rate of interest, and time period in years
//* SI = (P * R * T)/ 100

//TODO Personal Greeting
// Input the user to put their name
//* console out a personalized greeting message

var Aleia ="Hey Ya'll";
console.log(Aleia)

//Tip Calculator
//Ask the user to input the bill amount and the tip percentage
//* Calculate the tip amount and the total bill

var billAmount;
var tipPercentage;

billAmount = 48;
tipPercentage = .25;

console.log("Tip=" + billAmount * tipPercentage);
var tipAddition;
tipAddition =12;
console.log("Total Bill is " + (billAmount + tipAddition));


//TODO Age Calculator in days
//ask the user to input their age in years
// multiply the age in years by 365
//console the total days

var age;
age = 41 * 365;

console.log("Age in days is " + age);
