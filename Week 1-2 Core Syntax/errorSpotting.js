/*🕵️‍♂️ Case File #1: The Empty Check-Out Machine (Return Value Bug) */
function calculateTotal(price) {
    let tax = price * 0.10;
    const total = price + tax;
    
    return ("Your total is: $ " + total);
}

let checkoutPrice = calculateTotal(100)
console.log(checkoutPrice);
/*it took me a while to get this one, but I figured it without 
copilot, I used my previous functions activity for solving this
I gave it a return statement instead of printing it all outside
Then I gave the price its value, and eventually calling 
the function for the execution*/

/*🕵️‍♂️ Case File #2: The Locked Gate (Object Property Bug)*/
const userProfile = {
    username: "DevX",
    role: "Admin"
}

function findAdmin (userProfile) {
    if (userProfile.role == "Admin") {
    console.log ("Access Granted to " + userProfile.username);
    } else {
    console.log ("Access Denied");
    }
}
findAdmin(userProfile);
/*I used the dot notation to call the specific key in the object
and the problem is also in the username, because it's undefined,
it's trying to find the variable, but it's enclosed in an object
so it's throwing me an unefined error
i don't know if putting it in a function is the powermove,
but I think I made it easier for my brain to get it this way */

/*🕵️‍♂️ Case File #3: The Frozen Counter (The Infinite Loop) */

for (let i = 3; i >= 1; i--) {
    console.log ("Countdown: " + i);
}
/*this is the easiest one for me it's like common sense */

/*🕵️‍♂️ Case File #4: The Missing Item (Array Index Off-by-One Bug)*/

const languages = ["JavaScript", "Python", "ruby"];

for (let i = 0; i < languages.length; i++) {
    console.log ("I want to master: " + languages[i]);
}
/*Instead using <= I only used < (Less than) because using 
<= in an array (Which starts at 0) basically saying print 0, 1, 2,
WAIT! It's still within my parameters, but I have no value left
let me give this guy an undefined output (Gem elaborate more on this for me I need it for better understanding)*/

/*🕵️‍♂️ Case File #5: The Strict Imposter (Data Type Mismatch Bug)*/

let userInput = "7";
let luckyNumber = 7;

if (Number(userInput) === luckyNumber) {
    console.log("🎯 Jackpot! You unlocked the secret!");
} else {
    console.log ("❌ Wrong number! Try again.")
}
/*I used the loose equality feature of JavaScript
Where a string and an int can be compared
using === is called strict equality meaning 
same type and same value (I used google to know what === mean and found a new thing lol I loved that)*/

/*🕵️‍♂️ Case File #6: The Secret Agent Is Trapped (Block Scope Bug) */

function evaluateScore (score) {
    if (score > 100) {
        let celebrationMessage = "🏆 UNSTOPPABLE! New High Score!";
        console.log(celebrationMessage);
    }
    //console.log(celebrationMessage);// THIS IS OUT OF BOUNCE OF THE CONDITIONAL STATEMENT
}
evaluateScore(150);

/*🕵️‍♂️ Case File #7: The Vanishing Coffee (Array Mutation Trap)*/

const originalMenu = ["Espresso", "Latte", "Cappuccino", "Americano"];

function removeLastItem (menuArray) {
    let copyOfMenu = [...menuArray ]// Trying to create a copy
    copyOfMenu.pop();
    return copyOfMenu;
}

const shortMenu = removeLastItem(originalMenu);

console.log ("Original Menu: " + originalMenu);
// Readout: Original Menu: Espresso, Latte, Cappuccino ❌ (Americano vanished!)
console.log ("Short Menu: " + shortMenu);
// Readout: Short Menu: Espresso, Latte, Cappuccino

/*OH WOW THE GLOVES ARE INDEED FREAKIN OFF LOL, I thought this one will stump me
I almost gave up but then, I search the spread operator as you suggested
not I know how to make coppies of my variables
whether its array object etc this is cool btw I loved this */

/*🕵️‍♂️ Case File #8: The Bad Math (String Concatenation Trap) */

let walletBalance = 50;
let cashDeposit = "20"// Captured from a text input box

let newTotal = walletBalance + Number(cashDeposit);//I learned this earlier lol

console.log("Your new total balance is: $" + newTotal);
// Readout: Your new total balance is: $5020 ❌

/*This one is easy you thought me that making strings into a number is a piece of cake now */

/* 🕵️‍♂️ Case File #9: The Gatekeeper's Logic (The AND/OR Confusion)*/

const user = {
    isEmployee: false,
    hasPasscode: true
};

// Vault access logic
if (user.isEmployee && user.hasPasscode) {
    console.log ("🔓 Access Granted! Welcome to the Vault.");
} else {
    console.log("🔒 Access Denied! Intruders detected.");
}
// Readout: 🔓 Access Granted! Welcome to the Vault. ❌ (Security Breach!)
/*This one is fun but I think you helped me with this because I made an oopsie
on writing the code by hand instea user.hasPasscode, i typed user.Passcode don't worry tho Imma get my lick back */

/*🕵️‍♂️ Case File #10: The Rogue Bank Ledger (The Ghost Reference Trap) */
//LET'S GET MY LICK BACK

const secureVault = {
    vaultID: "Alpha-9",
    cashReserves: 500000,
    recentTransactions: [200, -50, 1000, -400] // auditing history log
};

// console.log("Original Vault Logs: ", secureVault.recentTransactions);// To see if my orginal vault is not faulty

function archiveVaultLogs(vaultObject) {
    // Step 1: The developer uses the spread operator to try to copy the object safely
    let vaultCopy = { ...vaultObject, recentTransactions: []}; 
    
    // Step 2: Wiping the transactions array in the copy to optimize space
    //vaultCopy.recentTransactions.length = 0; // I no longer did this because I wiped the copy already on the copy operator
    
    return vaultCopy;
}

const archivedSystem = archiveVaultLogs(secureVault);

console.log("Original Vault Logs: ", secureVault.recentTransactions);
// Readout: Original Vault Logs: [] ❌ (THE AUDITING LOGS WERE WIPED FROM THE ORIGINAL!)

console.log("Archived Vault Logs: ", archivedSystem.recentTransactions);
// Readout: Archived Vault Logs: []

//Did I got my lick back?