/*📋 Problem 1: The Coffee Order (.forEach) */
const coffees = ["Espresso", "Latee", "Cappuccino", "Americano"];
coffees.forEach((coffee) => console.log("Brewing a fresh cup of " + coffee + "!"));
/*Okay let me try to explain this, basically I called the arraylist and say for each element in it now named (coffee) it will print a message, but the concatination
uses coffee, because it's the new name for the elements */

/*📋 Problem 2: The Level Up (.map) */
const currentXP = [1200, 2500, 900, 310];
const nextLevelXP = currentXP.map ((xp) => xp + 500);
console.log(nextLevelXP);
/*Alright now let's explain this:
First we get a set array that has fixed values
Now we made another constant where we map out the whole array
set a parameter and a new variable, now we use that new parameter variable
to add 500 to each element then we print it */

/*📋 Problem 3: The Coffee Budget (.filter) */
const prices = [2.50, 6.00, 4.25, 12.00, 3.75];
const budgerPrices = prices.filter((price) => price <= 5.00);
console.log(budgerPrices);
/*Okay this time have have a menue of various prices
we created another constant where the array prices will be filtered
with a new parameter/variable name, where all the price
is less than or equal to 5.00 */
