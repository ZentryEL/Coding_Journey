
/*🛠️ Part 1: The Database (Object Setup)*/

// Variable Initializations
const bankAccount = {
    accountHolder: "Rion",
    balance: 1000,
    transactions: []
};

/*🧾 Part 2: The Audit Logger (Helper Function) */
function logTransaction(type, amount) {
    bankAccount.transactions.push({ type, amount });
}

/*💵 Part 3: The ATM Actions (Core Functions) */
function viewBalance() {
    console.log("Account Holder: " + bankAccount.accountHolder + " | Current Balance: $" + bankAccount.balance + ".");
}

function deposit(amount) {
    const value = Number(amount);
    if (!Number.isFinite(value) || value <= 0) {
        return "🚨 Transaction Denied: Invalid deposit amount.";
    }
    bankAccount.balance += value;
    logTransaction("Deposit", value);
    return "Successfully deposited $" + value + ".";
}

function withdraw(amount) {
    const value = Number(amount);
    if (!Number.isFinite(value) || value <= 0) {
        return "🚨 Transaction Denied: Invalid withdrawal amount.";
    }
    if (value <= bankAccount.balance) {
        bankAccount.balance -= value;
        logTransaction("Withdrawal", value);
        return "Successfully withdrew $" + value + ".";
    } else {
        return "🚨 Transaction Denied: Insufficient funds for a $" + value + " withdrawal.";
    }
}

/*📊 Part 4: Print Statement */
function printStatement(account) {
    const target = account || bankAccount;
    console.log("Transaction History:");
    target.transactions.forEach((transaction, index) => {
        console.log((index + 1) + ". " + transaction.type + " - $" + transaction.amount);
    });
}
viewBalance(); 
deposit(500);      // Balance should become 1500
viewBalance(); 
withdraw(200);     // Balance should become 1300
viewBalance(); 
withdraw(2000);    // Should say Transaction Denied! Balance stays 1300
viewBalance(); 
deposit("100");    // Testing string conversion! Balance should become 1400
viewBalance();     
printStatement();  // Should list the 3 successful transactions!