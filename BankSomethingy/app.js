
    // 🛠️ Look in the browser vault to see if saved account data already exists
    const savedData = localStorage.getItem("rionBankAccount");

    // Ternary operator or If-statement: If data exists, parse it! If not, use our default values.
    let bankAccount = savedData ? JSON.parse(savedData) : {
        accountHolder: "Rion, Certified Graduate",
        balance: 1500,
        transactions: []
    };

    // 🧾 Part 2: The Audit Logger (Your Hand-Typed Logic from Day 6!)
    function logTransaction(type, amount) {
        bankAccount.transactions.push({ type, amount });
        printStatementToScreen(); // Re-render the visual logs list whenever a transaction happens
    }

    // 🎭 Part 3: DOM Rendering Master
    function updateWebScreen() {
        document.getElementById("user-display").textContent = bankAccount.accountHolder;
        document.getElementById("balance-display").textContent = "$" + bankAccount.balance;
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

    // Initialization Sequence
    updateWebScreen();
