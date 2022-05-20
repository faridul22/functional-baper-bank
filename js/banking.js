// --------------------Make Function---------------------------

// Make a Function to get Deposit & Withdraw input field value
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    inputField.innerText = inputAmount;
    inputField.value = '';
    return inputAmount;
};
// Make a Function to Update Deposit & Withdraw total Amount
function updateTotalField(totalValueId, totalAmount) {
    const totalBalance = document.getElementById(totalValueId);
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText) + totalAmount;
    totalBalance.innerText = totalBalanceAmount
};
// Make a Function for Update Balance Amount part-1
function getCurrentBalance() {
    const mainAccount = document.getElementById('balance-total');
    const mainAccountText = mainAccount.innerText;
    const previousBalanceTotal = parseFloat(mainAccountText);
    return previousBalanceTotal;
}


// Make a Function for Update Balance Amount part-2
function updateBalance(amount, isAdd) {
    const mainAccount = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    // const mainAccountText = mainAccount.innerText;
    // const previousBalanceTotal = parseFloat(mainAccountText);
    if (isAdd == true) {
        mainAccount.innerText = previousBalanceTotal + amount;

    }
    else {
        mainAccount.innerText = previousBalanceTotal - amount;
    }
};

//------------------------- Call Function-----------------------------

// Make Deposit Event handler & Call Deposit Function
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input')
    if (depositAmount > 0) {
        const updateTatal = updateTotalField('deposit-total', depositAmount)
        updateBalance(depositAmount, true);
    }
});

// Make Withdraw Event handler & Call Withdraw Function
document.getElementById('withdraw-button').addEventListener('click', function () {
    console.log('withdraw button click');
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && currentBalance > 0) {
        const updateTatal = updateTotalField('withdraw-total', withdrawAmount)
        updateBalance(withdrawAmount, false);
    }
});

