/////////////////////////////////////////

//////////////// EXERCISE-1 //////////////////
//Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.

// 2. Prompts the user for the second number.

// 4. stores that number and responds with the SUM by using an alert

//////////////// EXERCISE-2 //////////////////
// ask for user first name.

//ask user the last name.

//ask user age.

// alert the full name + age

//////////////// EXERCISE-3 //////////////////
//guessing game, try to guess the right number!
//Ask the user to choose a number and if the number is the same as the number we chose in advance,
//he will be notified that the number is correct
//If the number is higher, the user will be notified that the number is too high
//And if the number is too low, a message will pop out that the number is too short

//////////////// EXERCISE-4 //////////////////

// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:

//using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"

//////////////// EXERCISE-5 //////////////////

// Make a keyless car EVEN BETTER!
// We are improving our car from previous exercise now.

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?

//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

//BONUS: Instead of using the prompt. Now, only use the return keyword and make the checkDriverAge() function
// accept an argument of age, so that if you enter:

//////////////// EXERCISE-6 //////////////////

//Mark and John are trying to compare their BMI (Body Mass Index)
//which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

//1. Store Mark's and John's mass and height in variables
//2. Calculate both their BMIs
//3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
//4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

//////////////// EXERCISE-7 //////////////////

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

//////////////// EXERCISE-8 //////////////////

//loops problem set:
//1 - print all the numbers between -10 and 19
//2- print all the even numbers between 10 and 40
//3- print all the odd numbers between 300 and 333
//4- print all the numbers divisibale by 5 and 3  between 5 and 50

//////////////// EXERCISE-9 //////////////////

//ask the user "are we there yet?"
//keep asking againe and againe until the user enter yes or yeah
//than alert the user "yay we made it!"

//////////////// EXERCISE-10 //////////////////

// write a function isEven() which takes a number  and
//return true if number even or false if number otherwise

//////////////// EXERCISE-11 //////////////////

//create a function that print arrays in reverse

//////////////// EXERCISE-12 //////////////////

//create a function that sum all the numbers in any array

//////////////// EXERCISE-13 //////////////////

//create a loop on an array that print only the even number
// make the same loop only this time use forEach method

//////////////// EXERCISE-14 //////////////////

//write a function kebabToSnake() which replace the - in a string to _ in a string
//hello-word-my-name-is-igor ---> hello_word_my_name_is_igor

//////////////// EXERCISE-15 //////////////////

// using this array,
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.

// 2. Sort the array in order.

// 3. Put "Kiwi" at the end of the array.

// 4. Remove "Apples" from the array.

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

// using this array,
//var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".

//////////////// EXERCISE-16 //////////////////

//John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
//To tip the waiter a fair amount, John created a simple tip calculator (as a function).
//He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200,
//and 10% if the bill is more than $200.
//In the end, John would like to have 2 arrays:
//1) Containing all three tips (one for each bill)
//2) Containing all three final paid amounts (bill + tip).
//(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

//////////////// EXERCISE-17 //////////////////

//Let's remember the coding challenge where Mark and John compared their BMIs. Let's
// now implement the same functionality with objects and methods.
//1. For each of them, create an object with properties for their full name, mass, and height
//2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
//3. In the end, log to the console who has the highest BMI,
//together with the full name and the respective BMI. Don't forget they might have the same BMI.
//Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

//////////////// EXERCISE-18 //////////////////

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
  }
];
*/
//Create an array using map that has all the usernames with a "? to each of the usernames

//Filter the array to only include users who are on team: red

//Find out the total score of all users using reduce

//////////////// EXERCISE-19 //////////////////
//create two classes: an Animal class and a Mamal class.
// create a cow that accepts a name, type and color and has
// a sound method that moo's her name, type and color.

//////////////// EXERCISE-20 //////////////////

//Solve these problems:
/*
//#1 Create a one line function that adds adds two parameters
let addsome = (a, b) => a + b;
console.log(addsome(5, 5));

//Closure: What does the last line return?
const addTo = x => y => x + y;
var addToTen = addTo(10);
addToTen(3);

const addTo = x => y => x + y;
console.log(addTo(10)(10)); // 10 + 10
var addToTen = addTo(10);
console.log(addToTen(50));

//Currying: What does the last line return?
const sum = (a, b) => a + b;
const curriedSum = a => b => a + b;
curriedSum(30)(1);
//31

//Currying: What does the last line return?
const sum = (a, b) => a + b;
const curriedSum = a => b => a + b;
const add5 = curriedSum(5);
add5(12);
//17
*/
//////////////// EXERCISE-21 //////////////////

// #1) Check if this array includes the name "John".
/*
let dragons = ["Tim", "Johnathan", "Sandy", "Sarah"];

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons1 = ["Tim", "Johnathan", "Sandy", "Sarah"];

*/
//////////////// EXERCISE-22 //////////////////
/*
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1, 0, 3, 100, 99, 2, 99]; // should return 100
const array2 = ["a", 3, 4, 2]; // should return 4
const array3 = []; // should return 0

//////////////// EXERCISE-23 //////////////////
/*
create a object "myAccount" with keys: name, income, expensens
and then create function that add to income and anuther function that add expensens
and the third function that resets the income and the expensens
*/

//////////////// EXERCISE-23 //////////////////
/*
create a restorant object with name, guestCopacity, guestCount
than add a method to the object that check availability in the restorant with the key word this
than add anuther method that can add pepole to the guestCopacity and aniuther one 
that can remove pepole 
*/
