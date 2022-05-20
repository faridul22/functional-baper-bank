/* // Problem solving Without function//

// Deposit Amount
document.getElementById('deposite-button').addEventListener('click', function () {
    // deposit input field
    const depositInput = document.getElementById('deposite-input');
    const depositInputText = depositInput.value;
    const depositAmount = parseFloat(depositInputText);
    depositInput.innerText = depositAmount;

    // deposit total field
    const depositTotal = document.getElementById('deposite-total');
    const depositTotalText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalText);
    depositTotal.innerText = depositAmount + depositTotalAmount;
    depositInput.value = '';

    // Update Balance after deposit 
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);
    totalBalance.innerText = totalBalanceAmount + depositAmount;
});


// Withdraw amount
document.getElementById('withdraw-button').addEventListener('click', function () {
    // withdraw input field
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawInputText);
    withdrawInput.innerText = withdrawAmount;

    // Withdraw total field
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = withdrawAmount + withdrawTotalAmount;
    withdrawInput.value = '';

    // Update Balance after withdraw 
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);
    totalBalance.innerText = totalBalanceAmount - withdrawAmount;
}); */
// --------------------------------------------------------------------//


//  Problem solving With Function
// GetInput Function
function getInput(inputId) {
    const input = document.getElementById(inputId);
    const inputText = input.value;
    const inputAmount = parseFloat(inputText);
    input.innerText = inputAmount;
    input.value = '';
    return inputAmount;
};
// get total function
function getTotal(totalValueId, totalAmount) {
    const totalField = document.getElementById(totalValueId);
    const totalValueText = totalField.innerText;
    const totalAmountField = parseFloat(totalValueText);
    totalField.innerText = totalAmountField + totalAmount;
};

// Update Balance
function updateBalance(depositAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    if (isAdd == true) {
        balanceTotal.innerText = balanceTotalAmount + depositAmount;
    }
    else {
        balanceTotal.innerText = balanceTotalAmount - depositAmount;
    }
};

// function K Call
// Deposit button
document.getElementById('deposite-button').addEventListener('click', function () {
    const depositAmount = getInput('deposite-input');
    const totalDeposit = getTotal('deposite-total', depositAmount);

    // Update Balance after Deposite//
    updateBalance(depositAmount, true);
});
// Withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInput('withdraw-input');
    const totalWithdraw = getTotal('withdraw-total', withdrawAmount);

    // update Balance after Withdraw//
    updateBalance(withdrawAmount, false);

});