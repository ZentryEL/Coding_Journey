
/*Activity 1: The Kitchen Storage */
var favSnack = "Chips";
var applesLeft = 2;
var hunger = true;

/*Activity 2: The Swap Meet */

var currentStatus = "Studying";

currentStatus = "Relaxing";
//println(currentStatus); //Lol I already forgot how to print in JavaScript
console.log(currentStatus); 
//It will override the studying value because var was hoisted is that the right term??


/*Activity 3: The Shopping Cart*/

var itemPrice = 20;
var shippingFee = 5;
var totalCost = itemPrice + shippingFee;
console.log(totalCost);

//This only works because both variables are numbers/ints

/*Activity 4: Spot the Secret Agent*/
var box1 = 100;//This is an int/number
var box2 = "100";//This is a string because of the double quotes
var box3 = false;//This is a boolean
var box4 = "false";//This is a string also

/*Activity 5: Predict the Error (Rules of Constants) */
const birthYear = 2000;
birthYear = 2005;//I think this will cause an error because const is not hoistable
//It's trying to reassign a value to constant variable

/*Scenario 1: The User Profile */
const accountId = "USR-88291";
let userEmail = "dev_in_training@email.com";

/*Scenario 2: The Fitness Tracker */
const dailyStepGoal = 10000;
let currentSteps = 0;

// The user walks a bit:
currentSteps = 450;

/*Scenario 3: Spot the Mind-Reader */
const maxPlayers = 4;
let activePlayers = 1;

maxPlayers = 5; // This will crash the program, because maxPlayers is assigned using const
activePlayers = 2;// This will run because active player is assigned using let