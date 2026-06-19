// 🛠️ Part 1: State Management & Storage Caching
const savedData = localStorage.getItem("rionBankAccount");

// Keep your custom bank account object so your LocalStorage data doesn't break!
let bankAccount = savedData ? JSON.parse(savedData) : {
    accountHolder: "Rion, Certified Graduate",
    balance: 1500,
    transactions: []
};

let currentScreenCurrency = "USD";

// 🚀 NEW ASSIGNMENT ADDITION: Global Storage Box for Live Rates
let globalRates = {}; 


// --- DOM REFERENCE NODES ---
// Grabbing our elements from the HTML tree structure
const currencySelect = document.getElementById("currency-select");
const convertBtn = document.getElementById("convert-btn");
const balanceDisplay = document.getElementById("balance-display");


// 🧾 Part 2: The Audit Logger
function logTransaction(type, amount) {
    bankAccount.transactions.push({ type, amount });
    printStatementToScreen(); 
}


// 🎭 Part 3: DOM Rendering Master
function updateWebScreen() {
    document.getElementById("user-display").textContent = bankAccount.accountHolder;
    balanceDisplay.textContent = "$" + bankAccount.balance.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    
    // Reset the tracking variable securely back to base USD status
    currentScreenCurrency = "USD";
}


// 📜 Part 4: Building Dynamic Lists on a Webpage
function printStatementToScreen() {
    const ledgerList = document.getElementById("ledger-list");
    ledgerList.innerHTML = "";

    bankAccount.transactions.forEach((transaction, index) => {
        const row = document.createElement("li");
        
        if (transaction.type === "Deposit") {
            row.style.color = "#00ffcc";
            row.textContent = `${index + 1}. 🟢 Deposit: +$${transaction.amount}`;
        } else {
            row.style.color = "#ff4d4d";
            row.textContent = `${index + 1}. 🔴 Withdrawal: -$${transaction.amount}`;
        }
        
        row.style.marginBottom = "8px";
        ledgerList.appendChild(row); 
    });
}


// 💵 Part 5: Core ATM Interactivity Engines
function handleDeposit() {
    if (currentScreenCurrency !== "USD") {
        alert(`🚨 Action Blocked: You cannot modify funds while viewing a foreign currency conversion (${currentScreenCurrency}). Please click 'Reset ($)' before completing transactions.`);
        return;
    }

    const inputField = document.getElementById("amount-input");
    const depositAmount = Number(inputField.value);

    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert("🚨 Transaction Denied: Please enter a valid positive numerical amount.");
        return;
    }

    bankAccount.balance += depositAmount;
    logTransaction("Deposit", depositAmount);
    
    updateWebScreen(); 
    saveToLocalStorage();
    inputField.value = ""; 
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

    if (withdrawAmount > bankAccount.balance) {
        alert(`🚨 Transaction Denied: Insufficient funds for a $${withdrawAmount} withdrawal.`);
        return;
    }

    bankAccount.balance -= withdrawAmount;
    logTransaction("Withdrawal", withdrawAmount);
    
    updateWebScreen();
    saveToLocalStorage();
    inputField.value = "";
}

// 🗄️ Local Storage Saver
function saveToLocalStorage() {
    localStorage.setItem("rionBankAccount", JSON.stringify(bankAccount));
}


// 🔌 NEW ASSIGNMENT ADDITION: THE NETWORK MAINFRAME CALL
// This fires ONCE right when the app loads to background-download all rates
async function initializeATM() {
    try {
        console.log("🔌 Connecting to global financial mainframe...");
        
        let response = await fetch("https://open.er-api.com/v6/latest/USD");
        let data = await response.json();
        
        // Note: The assignment says 'data.conversion_rates', but er-api returns 'data.rates'
        globalRates = data.rates || data.conversion_rates;
        
        console.log("✅ Mainframe synced successfully!");
        console.log("Live PHP Rate is currently:", globalRates.PHP);
    } catch (error) {
        console.log("❌ Connection failed. Mainframe offline.", error);
    }
}


// 🌐 UPGRADED CONVERSION ENGINE (No longer uses async/await on every click!)
function convertCurrency(targetCurrency) {
    // Safety Guard: Check if the network data hasn't arrived yet
    if (!globalRates[targetCurrency]) {
        console.log("⏳ Rates are still loading from the mainframe. Standby...");
        alert("⏳ Exchange rates are still sync'ing. Please try again in a second!");
        return;
    }

    // Track what currency we are looking at on screen
    currentScreenCurrency = targetCurrency;

    // Pull the multiplier right out of our pre-cached global box!
    let multiplier = globalRates[targetCurrency];
    let converted = bankAccount.balance * multiplier;
    
    console.log(`Balance in ${targetCurrency}: ${converted.toFixed(2)}`);

    // Map symbol indicators for UI decoration
    let symbol = "";
    if (targetCurrency === "EUR") symbol = "€";
    if (targetCurrency === "GBP") symbol = "£";
    if (targetCurrency === "PHP") symbol = "₱";

    // Slam the instant conversion right onto the screen!
    balanceDisplay.textContent = symbol + converted.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }) + " " + targetCurrency;
}


// --- REFACTORED INTERACTIVE CONVERSION ---
function handleUIConversion() {
    // 1. Read the current dropdown selection value (e.g., "PHP")
    const selectedCurrency = currencySelect.value;
    
    // 2. Safety Guard: Ensure mainframe data has settled
    if (!globalRates[selectedCurrency]) {
        balanceDisplay.innerText = "LOADING MAINFRAME...";
        return;
    }
    
    // Track what currency we are looking at on screen to safeguard core ATM functionality
    currentScreenCurrency = selectedCurrency;
    
    // 3. Extract the real-time rate factor and multiply (updated to read from state object)
    const rate = globalRates[selectedCurrency];
    const finalAmount = bankAccount.balance * rate;
    
    // 4. INJECT INTO DOM: Format to 2 decimals and light up the screen!
    balanceDisplay.innerText = `${selectedCurrency} ${finalAmount.toFixed(2)}`;
    
    console.log(`📡 UI Render Update: ${selectedCurrency} ${finalAmount.toFixed(2)}`);
}


// --- EVENT LISTENER ATTACHMENT ---
// Instructing the browser to fire our logic the exact moment the button is clicked
convertBtn.addEventListener("click", handleUIConversion);


// --- BOOT UP THE ENGINE SEQUENCE ---
updateWebScreen();      // 1. Draw your base USD data to the user layout
initializeATM();       // 2. Start downloading exchange rates silently in the background