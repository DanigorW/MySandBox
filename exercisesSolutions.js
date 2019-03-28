/////////////////////////////////////////

//////////////// EXERCISE-1 //////////////////
//Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
//let num = prompt(`type any number`);
// 2. Prompts the user for the second number.
//let num2 = prompt(`type second number`);
// 4. stores that number and responds with the SUM by using an alert.
//let sum = Number(num) + Number(num2);
//alert(`the sum of the number is: ` + sum);

//////////////// EXERCISE-2 //////////////////
// ask for user first name.
 // let firstName = prompt(`what's your first name?`);
//ask user the last name.
  //let lastName = prompt(`what's your last name?`);
//ask user age.
  //let age = prompt(`what's your age?`);
// alert the full name + age 
  //alert(`hello ${firstName} ${lastName} it's seems you are ${age} years old`);

  ////////////////// EXERCISE-3 //////////////////
//enter your age and find out how many days you've been alive
  //let age = prompt(`enter your age to to find out how many days you've been alive!`);
  //let days = age * 365;
  //alert(`you've been alive for: ` + days + " " + "days");

  //////////////// EXERCISE-4 //////////////////
//guessing game, try to guess the right number!
//Ask the user to choose a number and if the number is the same as the number we chose in advance,
//he will be notified that the number is correct
//If the number is higher, the user will be notified that the number is too high
//And if the number is too low, a message will pop out that the number is too short

/*
let num = prompt(`what's the special number?`)
if (Number(num) === 7) {
    alert(`awesome! that's right!`);
} else if(Number(num) < 7){
    alert(`sorry try again! number is to low`);
}  else {
   alert(`sorry try again! number to high`);
}
*/

//////////////// EXERCISE-5 //////////////////

// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:

//using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"

//let age = prompt(`what's you age?`);
//if(Number(age) === 18){
  //alert(`Congratulations on your first year of driving. Enjoy the ride!`);
//} else if (Number(age) < 18){
 //  alert(`Sorry, you are too young to drive this car. Powering off`);      
  //} else {
   // alert(`Powering On. Enjoy the ride!`);
 // }

//////////////// EXERCISE-6 //////////////////

// Make a keyless car EVEN BETTER!
// We are improving our car from previous exercise now.

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?

//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

//BONUS: Instead of using the prompt. Now, only use the return keyword and make the checkDriverAge() function
// accept an argument of age, so that if you enter:


//////////////// EXERCISE-7 //////////////////

//Mark and John are trying to compare their BMI (Body Mass Index)
 //which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

//1. Store Mark's and John's mass and height in variables
//2. Calculate both their BMIs
//3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
//4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

/*
let markMass = 78;
let markHight = 1.69;

let johnMass = 65;
let johnHight = 1.75;

let markBmi = markMass / (markHight * 2);
console.log(`mark's BMI is ` +  markBmi);
let johnBmi = johnMass / (johnHight * 2);
console.log(`john's BMI is ` + johnBmi);

let markBmiHigher = true;

alert(`is mark's BMI higher then john's? ` + markBmiHigher);
*/

//////////////// EXERCISE-8 //////////////////

//John and Mike both play basketball in different teams. In the latest 3 games,
// John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
//1. Calculate the average score for each team
//2. Decide which teams wins in average (highest average score), and print the winner to the console.
// Also include the average score in the output.
//3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

//4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points.
//Like before, log the average winner to the console. HINT:
//you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
//5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

/*
let johnAveargeScore = 89 + 120 + 103 / 3
console.log(`john's average score is: `+ johnAveargeScore);
let mikeAverageScore = 116 + 94 + 123 / 3
console.log(`mike's average score is: `+ mikeAverageScore);
let marrayAverageScore = 97 + 134 + 105 /3
console.log(`marray's average score is: ` + marrayAverageScore);

if (johnAveargeScore > mikeAverageScore && johnAveargeScore > marrayAverageScore){
    console.log(`john's average score is THE BEST WITH : `+ johnAveargeScore);
} else if(mikeAverageScore > johnAveargeScore && mikeAverageScore > marrayAverageScore) {
    console.log(`mike's average score is THE BEST WITH : `+ mikeAverageScore);
}else  {
    console.log(`marray's average score is THE BEST WITH : ` + marrayAverageScore);
}
*/

//////////////// EXERCISE-9 //////////////////

//loops problem set:
//1 - print all the numbers between -10 and 19
//for(let i = -10; i <= 19; i++) {
//console.log(i);
//}
//2- print all the even numbers between 10 and 40
//for(let i = 10; i <= 40; i++) {
//  if(i % 2 === 0){
//  console.log(i);
// }
//}
  
//3- print all the odd numbers between 300 and 333
  //for(let i = 300; i < 333; i++){
  //if(i % 2 !== 0){
  // console.log(i);
  //}
  //}
//4- print all the numbers divisibale by 5 and 3  between 5 and 50
//for(let i = 0; i < 50; i++){
 //if(i % 3 === 0 && i % 5 === 0){
  //console.log(i);
 //}
//}

//////////////// EXERCISE-10 //////////////////

//ask the user "are we there yet?"
//keep asking againe and againe until the user enter yes or yeah
//than alert the user "yay we made it!"

// var answer = prompt("are we there yet?");

// while(answer !== "yes" && answer !== "yeah") {
// 	var answer = prompt("are we there yet?");
// }

// alert("YAY, WE MADE IT!!!");

//////////////// EXERCISE-11 //////////////////

// write a function isEven() which takes a number  and
//return true if number even or false if number otherwise

/*
let isEven = (x) => {
  if(x % 2 === 0){
    return "true!"
  } else {
    return "false"
  }
}
console.log(isEven(20));
*/

//////////////// EXERCISE-12 //////////////////

//create a function that print arrays in reverse
/*
function arrayReverse (arr){
  for(let i = arr.length; i >= 0; i--){
    console.log(arr[i]);
  }
}
arrayReverse([1,2,3,4,5,6,7,8,9]);
*/

//////////////// EXERCISE-13 //////////////////

//create a function that sum all the numbers in any array
/*
function sumArray (arr){
  let total = 0;
  arr.forEach(function(element){
    total += element;
    console.log(total);
  })
  return total;
}

sumArray([1,1,1,1,1,1,1,1,1]);
*/

//////////////// EXERCISE-14 //////////////////

//create a loop on an array that print only the even number
// make the same loop only this time use forEach method
/*
let numbers = [1,2,3,4,5,6,7,8,9,10];
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
  console.log(numbers[i]);     
  }
}
// forEach loop on array method
numbers.forEach(function(nums){
  if(nums % 2 === 0){
     console.log(nums);
  }
})
*/

//////////////// EXERCISE-15 //////////////////

//write a function kebabToSnake() which replace the - in a string to _ in a string
//hello-word-my-name-is-igor ---> hello_word_my_name_is_igor

/*
let kebabToSnake = (word) =>{
return word.replace(/-/g, "_");
}
console.log(kebabToSnake("hello-word-my-name-is-igor"));
*/

//////////////// EXERCISE-16 //////////////////

// using this array,
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];


// 1. Remove the Banana from the array.

// 2. Sort the array in order.

// 3. Put "Kiwi" at the end of the array.

// 4. Remove "Apples" from the array.

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])


// using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".

//////////////// EXERCISE-17 //////////////////

//John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
//To tip the waiter a fair amount, John created a simple tip calculator (as a function).
//He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200,
//and 10% if the bill is more than $200.
//In the end, John would like to have 2 arrays:
//1) Containing all three tips (one for each bill)
//2) Containing all three final paid amounts (bill + tip).
//(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

/*
let tipCalc = (bill) => {
    let tips = 0;  
      if(bill <= 50){
        tips = 0.2 
    } else if (bill >= 51 && bill <= 200){
        tips = 0.15;       
    } else {
      tips = 0.1
    }
     return tips * bill 
  }

let bills = [48,124,268];
let finalBills = [tipCalc([bills[0]]),tipCalc([bills[1]]),tipCalc([bills[2]])];
console.log(finalBills);
*/

//////////////// EXERCISE-18 //////////////////

//Let's remember the coding challenge where Mark and John compared their BMIs. Let's
// now implement the same functionality with objects and methods.
//1. For each of them, create an object with properties for their full name, mass, and height
//2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
//3. In the end, log to the console who has the highest BMI,
//together with the full name and the respective BMI. Don't forget they might have the same BMI.
//Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
+
/*
let mark = {
    fullName: "mark smith",
    mass: 75,
    hight: 1.78,
    bmiCalc: function(){
    this.bmi = this.mass / (this.hight * 2)
    return this.bmi  
    }
}
mark.bmiCalc();
console.log(mark);

let john = {
  fullName: "john crak",
  mass: 84,
  hight: 1.92,
  bmiCalc: function(){
  this.bmi = this.mass / (this.hight * 2)
  return this.bmi
  }
}
john.bmiCalc();
console.log(john);

if(mark.bmi > john.bmi){
   console.log(mark.fullName + ` have a higher BMI than ` + john.fullName);
} else {
  console.log(john.fullName + ` have a higher BMI than ` + mark.fullName);
}
*/

//////////////// EXERCISE-19 //////////////////

// Complete the below questions using this array:

/*
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using map that has all the usernames with a "? to each of the usernames
const mapArray = array.map(user => {
	let { username } = user;
	return username + "?";
})
console.log(mapArray);

//Filter the array to only include users who are on team: red
const filterArray = array.filter(user => {
	return user.team === "red";
})
console.log(filterArray);

//Find out the total score of all users using reduce

const total = array.reduce((acc, user) => {
	return acc + user.score
}, 0);
console.log(total);
*/
//////////////// EXERCISE-20 //////////////////
//create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has
// a sound method that moo's her name, type and color.

/*
let Person = function (firstName, lastName, age){
    this.firsName = firstName;
    this.lastName = lastName;
    this.age = age;
}

Person.prototype.calcAge = function(){
  console.log(2019 - this.age);
}

let igor = new Person("igor", "lev", 27);
igor.calcAge();

*/

//////////////// EXERCISE-21 //////////////////

// change everything below to the newer Javascript! ES6!
/*

// let + const
const a = 'test';
let b = true;
let c = 789;
a = 'test2';


// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

// es5 
var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

// es6
const {firstName, lastName, age, eyeColor} = person

// Object properties
var a = 'test';
var b = true;
var c = 789;

// es6
var okObj = {
  a,
  b,
  c
};


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

// es6
let message2 = `hello ${firsName} have i met you befor? i think we met in ${city} last summer no ???`

// default arguments
// default age to 10;
function isValidAge(age=16) {
    return age
}


// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

// es6
whereAmI = (username, location) => {
    if (username && location){
        return `i'm not lost!`
    } else {
      return (`i'm TOTALLY LOST!`)
    }
}
*/

//////////////// EXERCISE-22 //////////////////
/*
//Solve these problems:

//#1 Create a one line function that adds adds two parameters

let sum = (a,b) => a + b

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)

const addTo = x => y => x + y
console.log(addTo(10)(10)); // 10 + 10
var addToTen = addTo(10) 
console.log(addToTen(50));


//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = a => b => a + b
curriedSum(30)(1)
//31

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)
//17
*/
//////////////// EXERCISE-23 //////////////////

/*
// #1) Check if this array includes the name "John".
let dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
console.log(dragons.includes("john")); 


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons1 = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
let newarray = dragons.filter(function(name){
  return name.includes("John")
})

console.log(newarray)

*/
//////////////// EXERCISE-24 //////////////////

/*
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
  let highest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (highest < arr[i]) {
      highest = arr[i];
    }
  }
  return highest
}

function biggestNumberInArray2(arr) {
  let highest = 0;
  arr.forEach(item => {
    if (highest < item) {
      highest = item;
    }
  })
  return highest;
}

function biggestNumberInArray3(arr) {
  let highest = 0;
  for (item of arr) {
    if (highest < item) {
      highest = item;
    }
  }
  return highest;
}


biggestNumberInArray3(array3)


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
  for (item in basket) {
    if (item === lookingFor) {
      return `${lookingFor} is in your basket`
    }
  }
  return 'that does not exist in your basket'
}

*/



//////////////// array methods ///////////////////////
/*
let nums = [5,10,15,20];

//forEach
//The forEach() method executes a provided function once for each array element.

let newArray = [];
nums.forEach(function(num){
   newArray.push(num * 2);
});
// or => function

let newArray = [];
nums.forEach((num) => {
  newArray.push(num * 2);
});

//map
//The map() method creates a new array with the results of
//calling a provided function on every element in the calling array.

  let newArray = nums.map((num) => {
     return num * 2
  });

 // filter 
//The filter() method creates a new array with all elements that pass
//the test implemented by the provided function.

let newArray = nums.filter((num) => {
  return num > 11
});

//reduce
//The reduce() method executes a reducer function (that you provide)
//on each member of the array resulting in a single output value.

let newArray = nums.reduce((acc, num) => {
  return acc + num
},0);
console.log(newArray);
*/

////////////////nodeJs + react + terminal ///////////////////////
//clear - clear the terminal 
//ls - shows what there is in the fille we are 
//npm install 
// npm install -g create-react-app
// create-react-app "name of the project"
//npm install tachyons --> like bootStrap for styling


////////////////////// ES6 syntax ///////////////////////////
/*
Arrow function syntax may look strange but it's actually simple.

function callMe(name) { 
    console.log(name);
}
which you could also write as:

const callMe = function(name) { 
    console.log(name);
}
becomes: 

const callMe = (name) => { 
    console.log(name);
}
Important: 

When having no arguments, you have to use empty parentheses in the function declaration:

const callMe = () => { 
    console.log('Max!');
}
When having exactly one argument, you may omit the parentheses:

const callMe = name => { 
    console.log(name);
}
When just returning a value, you can use the following shortcut:

const returnMe = name => name
That's equal to:

const returnMe = name => { 
    return name;
}
Exports & Imports
In React projects (and actually in all modern JavaScript projects), you split your code across multiple JavaScript files - so-called modules. You do this, to keep each file/ module focused and manageable.

To still access functionality in another file, you need export  (to make it available) and import  (to get access) statements.

You got two different types of exports: default (unnamed) and named exports:

default => export default ...; 

named => export const someData = ...; 

You can import default exports like this:

import someNameOfYourChoice from './path/to/file.js'; 

Surprisingly, someNameOfYourChoice  is totally up to you.

Named exports have to be imported by their name:

import { someData } from './path/to/file.js'; 

A file can only contain one default and an unlimited amount of named exports. You can also mix the one default with any amount of named exports in one and the same file.

When importing named exports, you can also import all named exports at once with the following syntax:

import * as upToYou from './path/to/file.js'; 

upToYou  is - well - up to you and simply bundles all exported variables/functions in one JavaScript object. For example, if you export const someData = ...  (/path/to/file.js ) you can access it on upToYou  like this: upToYou.someData .

Classes
Classes are a feature which basically replace constructor functions and prototypes. You can define blueprints for JavaScript objects with them. 

Like this:

class Person {
    constructor () {
        this.name = 'Max';
    }
}
 
const person = new Person();
console.log(person.name); // prints 'Max'
In the above example, not only the class but also a property of that class (=> name ) is defined. The syntax you see there, is the "old" syntax for defining properties. In modern JavaScript projects (as the one used in this course), you can use the following, more convenient way of defining class properties:

class Person {
    name = 'Max';
}
 
const person = new Person();
console.log(person.name); // prints 'Max'
You can also define methods. Either like this:

class Person {
    name = 'Max';
    printMyName () {
        console.log(this.name); // this is required to refer to the class!
    }
}
 
const person = new Person();
person.printMyName();
Or like this:

class Person {
    name = 'Max';
    printMyName = () => {
        console.log(this.name);
    }
}
 
const person = new Person();
person.printMyName();
The second approach has the same advantage as all arrow functions have: The this  keyword doesn't change its reference.

You can also use inheritance when using classes:

class Human {
    species = 'human';
}
 
class Person extends Human {
    name = 'Max';
    printMyName = () => {
        console.log(this.name);
    }
}
 
const person = new Person();
person.printMyName();
console.log(person.species); // prints 'human'
Spread & Rest Operator
The spread and rest operators actually use the same syntax: ... 

Yes, that is the operator - just three dots. It's usage determines whether you're using it as the spread or rest operator.

Using the Spread Operator:

The spread operator allows you to pull elements out of an array (=> split the array into a list of its elements) or pull the properties out of an object. Here are two examples:

const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5]; // This now is [1, 2, 3, 4, 5];
Here's the spread operator used on an object:

const oldObject = {
    name: 'Max'
};
const newObject = {
    ...oldObject,
    age: 28
};
newObject  would then be

{
    name: 'Max',
    age: 28
}
The spread operator is extremely useful for cloning arrays and objects. Since both are reference types (and not primitives), copying them safely (i.e. preventing future mutation of the copied original) can be tricky. With the spread operator you have an easy way of creating a (shallow!) clone of the object or array. 

Destructuring
Destructuring allows you to easily access the values of arrays or objects and assign them to variables.

Here's an example for an array:

const array = [1, 2, 3];
const [a, b] = array;
console.log(a); // prints 1
console.log(b); // prints 2
console.log(array); // prints [1, 2, 3]
And here for an object:

const myObj = {
    name: 'Max',
    age: 28
}
const {name} = myObj;
console.log(name); // prints 'Max'
console.log(age); // prints undefined
console.log(myObj); // prints {name: 'Max', age: 28}
Destructuring is very useful when working with function arguments. Consider this example:

const printName = (personObj) => {
    console.log(personObj.name);
}
printName({name: 'Max', age: 28}); // prints 'Max'
Here, we only want to print the name in the function but we pass a complete person object to the function. Of course this is no issue but it forces us to call personObj.name inside of our function. We can condense this code with destructuring:

const printName = ({name}) => {
    console.log(name);
}
printName({name: 'Max', age: 28}); // prints 'Max')
We get the same result as above but we save some code. By destructuring, we simply pull out the name  property and store it in a variable/ argument named name  which we then can use in the function body.
 Not really next-gen JavaScript, but also important: JavaScript array functions like map() , filter() , reduce()  etc.

You'll see me use them quite a bit since a lot of React concepts rely on working with arrays (in immutable ways).

The following page gives a good overview over the various methods you can use on the array prototype - feel free to click through them and refresh your knowledge as required: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

Particularly important in this course are:

map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b

*/
