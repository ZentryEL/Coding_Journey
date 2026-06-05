// 1. Building the machine
function greetUser(username) {
    return "Welcome back, " + username + "!";
}

// 2. Turning the machine on (Calling the function)
let message = greetUser("FutureProgrammer");
console.log(message); // Prints: Welcome back, FutureProgrammer!

/* 📋 Problem 1: The Personal Welcomer*/
function sayHello(name) {
    return "Hello, " + name + "!";
}
console.log (sayHello("Sam"));

/*📋 Problem 2: The Tip Calculator */
function calculateTip(billTotal, tipPercentage) {
    let tipAmount = billTotal * tipPercentage;
    return "The tip amount is: $" + tipAmount.toFixed(2);//Used toFixed to turn it into a string and clean it up
}
console.log(calculateTip(50,0.15));

/*📋 Problem 3: Return vs. Print (The Ultimate Mind-Tricker) */
function machineA(num) {
    console.log(num * 2);
}

function machineB(num) {
    return num * 2;
}

let resultA = machineA(5);
let resultB = machineB(5);
//It returns 10 for machineA and B but the difference is that I can keep using machineB without losing the value stored, while in machineA I can only use once before I need to call it again.

//Tbh I'm pretty much not so into this, I need to deep dive into it, can ve have a lesson dedicated for it for my further understanding?

/*🔬 Activity 1: Giving the Robot an Input*/
function sayHello (name) {
    return "Hello " + name + "!";
}
let greeting = sayHello("Timmy");
console.log(greeting);

/*I think I understant it better now, first in the function
we created a return value of Hello + name that will be given
now we initialized a variable using the function and used the parenthesis to give the (name) value
 */

/*🔬 Activity 2: The Chain Reaction*/
function doubleNumber(num) {
    return num * 2;
}

function addFive(num) {
    return num + 5;
}
/*If you write let firstStep = doubleNumber(5); the number stored in firstStep will be 10
because the return statement basically multiplies it by 10
same thing if you do another instance with 10, it will be 20*/

/*If you write let finalStep = addFive(firstStep) you'd get 15 because 10 + 5 = 15, and 10 was retained because it's a return statement */

function ghostMachine() {
    console.log("Boo!");
    return "Ghost!";
    console.log("Did I scare you?");
}

let sound = ghostMachine();

/*Doesn't it completly skip it because in the robot analogy,
the robot already returned Boo, and left the Did I scare you in the fridge lol */