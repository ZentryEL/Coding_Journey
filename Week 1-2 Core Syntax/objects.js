/*📋 Problem 1: The Coffee Shop Menu Item */
const coffeeOrder = {
    name: "Caramel Macchiato",
    size: "Large",
    price: "5,00",
    isIced: true
};

console.log("You ordered a " + coffeeOrder.size + " " + coffeeOrder.name + " for $" + coffeeOrder.price);
/*I think this is pretty easy it's like using keys and getting
their value by using dot notations
the Object (coffeeOrder) where the key is (ex.name) 
has the value "Caramel Macchiato" */

/* 📋 Problem 2: The Object Modifier*/

const smartphone = {
    brand: "Apple",
    model: "iPhoe 15",
    batteryHealth: 85
};

function chargePhone(phone) {
    phone.batteryHealth = 100;
}
chargePhone(smartphone);
console.log(smartphone.batteryHealth);
/*Let me try this one lol
So Basically I have an object which is the phone
now because it is constant it's better to change the values 
using a function, now in the new function we used a parameter
(phone) as the argument where it says the batteryHealth is 100
now outside that function we used that function to call the object
by doing that the code tries to locate if the object has such thing as
batteryHealth, and if it does, it changes it and updates it without
touching the other variables
then I printed it*/

/* 📋 Problem 3: The Profile Reader (Combining Elements Boss Fight)*/
const team = [
    {name: "Alex", role: "Developer", isActive: true},
    {name: "Sam", role: "Designer", isActive: false},
    {name: "Timmy", role: "Manager", isActive: true}
]
function memberStatus (team) {
    team.forEach ((member) => {
        if  (member.isActive) {
            console.log(member.name + " is active as a " + member.role);
        }
        else {
            console.log(member.name + " is inactive as a " + member.role)
        }
    });
}
memberStatus (team); //checks and executes the function 
/*So here basically we made a function and used the object array as the parameter
meaning all the data inside that object array will be used in this function
now we said for each element in the team array where member is active (true/false)
we print a concatinated message curated for the status
now after that we called the function outside and it executes the code flawlessly*/


/*At first I used  memberStatus (team); and immediately used
console.log(memberStatus(team)); and was confused why the output
is saying it's a function after
then I deleted the (team) it's undefined
Now I remembered that I already called the function meaning I do not 
need to use console.log() lol*/