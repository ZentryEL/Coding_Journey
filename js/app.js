
    // 🛠️ Look in the browser vault to see if saved account data already exists
    const savedData = localStorage.getItem("rionBankAccount");

    // Ternary operator or If-statement: If data exists, parse it! If not, use our default values.
    let bankAccount = savedData ? JSON.parse(savedData) : {
        accountHolder: "Rion, Certified Graduate",
        balance: 1500,
        transactions: []
    };

    let currentScreenCurrency = "USD";

    // 🧾 Part 2: The Audit Logger (Your Hand-Typed Logic from Day 6!)
    function logTransaction(type, amount) {
        bankAccount.transactions.push({ type, amount });
        printStatementToScreen(); // Re-render the visual logs list whenever a transaction happens
    }

    // 🎭 Part 3: DOM Rendering Master
    function updateWebScreen() {
    document.getElementById("user-display").textContent = bankAccount.accountHolder;
    document.getElementById("balance-display").textContent = "$" + bankAccount.balance.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    
    // 🆕 Reset the tracking variable securely back to base USD status
    currentScreenCurrency = "USD";
}

    // 📜 Part 4: Building Dynamic Lists on a Webpage
    function printStatementToScreen() {
        const ledgerList = document.getElementById("ledger-list");
        
        // Clear old visual rows out of the list so we don't repeat entries!
        ledgerList.innerHTML = "";

        // Loop through the array using .forEach() and construct HTML elements inside the DOM
        bankAccount.transactions.forEach((transaction, index) => {
            const row = document.createElement("li");
            
            // Set styles conditionally based on transaction type!
            if (transaction.type === "Deposit") {
                row.style.color = "#00ffcc";
                row.textContent = `${index + 1}. 🟢 Deposit: +$${transaction.amount}`;
            } else {
                row.style.color = "#ff4d4d";
                row.textContent = `${index + 1}. 🔴 Withdrawal: -$${transaction.amount}`;
            }
            
            row.style.marginBottom = "8px";
            ledgerList.appendChild(row); // Attach the new row securely onto the visible list
        });
    }

    // 💵 Part 5: Core ATM Interactivity Engines
    function handleDeposit() {
        // 🛡️ Place this block at the very top of BOTH handleDeposit() and handleWithdraw()!
        if (currentScreenCurrency !== "USD") {
            alert(`🚨 Action Blocked: You cannot modify funds while viewing a foreign currency conversion (${currentScreenCurrency}). Please click 'Reset ($)' before completing transactions.`);
            return;
        }

        const inputField = document.getElementById("amount-input");
        const rawValue = inputField.value;
        const depositAmount = Number(rawValue);

        // Defensive Guards (From your Copilot session!)
        if (isNaN(depositAmount) || depositAmount <= 0) {
            alert("🚨 Transaction Denied: Please enter a valid positive numerical amount.");
            return;
        }

        bankAccount.balance += depositAmount;
        logTransaction("Deposit", depositAmount);
        
        updateWebScreen(); // Apply updates visually
        // Add this line right before inputField.value = ""; inside BOTH handle functions!
        saveToLocalStorage();
        inputField.value = ""; // Zero-out the input box for the next run
    }

    function handleWithdraw() {
        if (currentScreenCurrency !== "USD") {
            alert(`🚨 Action Blocked: You cannot modify funds while viewing a foreign currency conversion (${currentScreenCurrency}). Please click 'Reset ($)' before completing transactions.`);
            return;
        }
        const inputField = document.getElementById("amount-input");
        const withdrawAmount = Number(inputField.value);

        if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
            alert("🚨 Transaction Denied: Please enter a valid positive numerical amount.");
            return;
        }

        // Insufficient funds handling
        if (withdrawAmount > bankAccount.balance) {
            alert(`🚨 Transaction Denied: Insufficient funds for a $${withdrawAmount} withdrawal.`);
            return;
        }

        bankAccount.balance -= withdrawAmount;
        logTransaction("Withdrawal", withdrawAmount);
        
        updateWebScreen();
        // Add this line right before inputField.value = ""; inside BOTH handle functions!
        saveToLocalStorage();
        inputField.value = "";
    }
    // 🗄️ The Save Spell
    function saveToLocalStorage() {
        // Translate our object to a string string and lock it in the browser storage
        localStorage.setItem("rionBankAccount", JSON.stringify(bankAccount));
    }

    // 🌐 DAY 14: THE ASYNC FOREX ENGINE
async function convertCurrency(targetCurrency) {
    const balanceDisplay = document.getElementById("balance-display");
    
    // ⏳ Visual indicator so the user knows the app is thinking
    balanceDisplay.textContent = "Fetching rates...";

    //Tracked View
    currentScreenCurrency = targetCurrency;

    try {
        // 1. Shoot a request across the internet to a live exchange rate API
        // We 'await' the response package before moving to the next line
        const response = await fetch("https://open.er-api.com/v6/latest/USD");
        
        // 2. Unpack the raw text string response into a readable JavaScript Object
        const data = await response.json();

        // 3. Grab the current user balance from your LocalStorage state
        const currentBalanceUSD = bankAccount.balance;

        // 4. Dig into the API object to grab the specific conversion rate
        // Example structure inside 'data.rates': { EUR: 0.92, PHP: 58.20 }
        const conversionRate = data.rates[targetCurrency];

        if (!conversionRate) {
            alert("🚨 Error: Currency rate not found.");
            updateWebScreen(); // Reset back to regular USD display
            return;
        }

        // To this pro configuration:
        const convertedBalance = (currentBalanceUSD * conversionRate).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        
        // 6. Map symbol indicators for the screen decoration
        let symbol = "";
        if (targetCurrency === "EUR") symbol = "€";
        if (targetCurrency === "GBP") symbol = "£";
        if (targetCurrency === "PHP") symbol = "₱";

        // 7. Slam the live updated conversion onto the webpage screen!
        balanceDisplay.textContent = symbol + convertedBalance + " " + targetCurrency;

    } catch (error) {
        // Defensive Guard: If the internet drops or the API is down, fail safely!
        console.error("Forex Error:", error);
        alert("🚨 Network Timeout: Unable to fetch live currency conversion rates.");
        updateWebScreen();
    }
}

    // Initialization Sequence
    updateWebScreen();
