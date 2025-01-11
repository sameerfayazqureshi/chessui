let walletBalance = 5000;

function addMoney() {
    let amount = prompt("Enter amount to add:");
    if (amount && !isNaN(amount)) {
        walletBalance += parseInt(amount);
        updateWalletBalance();
    }
}

function withdrawMoney() {
    let amount = prompt("Enter amount to withdraw:");
    if (amount && !isNaN(amount) && amount <= walletBalance) {
        walletBalance -= parseInt(amount);
        updateWalletBalance();
    } else {
        alert("Insufficient balance or invalid amount!");
    }
}

function updateWalletBalance() {
    document.getElementById('wallet-balance').innerText = walletBalance;
}

function randomMatch() {
    alert("Searching for a random match...");
}

function generateLink() {
    let link = `https://chessify.com/match?player=${Math.random().toString(36).substr(2, 9)}`;
    document.getElementById('match-link').value = link;
}
