function getInputValue(inputId) {
      let inputField = document.getElementById(inputId);
      let inputAmountText = inputField.value;
      let amountValue = parseFloat(inputAmountText);

      inputField.value = "";
      return amountValue;
}

function updateTotalField(totalFieldId, amount) {
      const totalField = document.getElementById(totalFieldId);
      const totalText = totalField.innerText;
      const previousTotal = parseFloat(totalText);

      totalField.innerText = previousTotal + amount;
}

function updateBalance(amount, isAdd) {
      const balanceTotal = document.getElementById('balance-total');
      const balanceTotalText = balanceTotal.innerText;
      const previousBalanceTotal = parseFloat(balanceTotalText);

      if (isAdd == true) {
            balanceTotal.innerText = previousBalanceTotal + amount;
      }
      else {
            balanceTotal.innerText = previousBalanceTotal - amount;
      }
}


document.getElementById('deposit-btn').addEventListener('click', function () {
      const depositAmount = getInputValue('deposit-input');

      /* 

      const depositTotal = document.getElementById('deposit-total');
      const depositTotalText = depositTotal.innerText;
      const previousDepositTotal = parseFloat(depositTotalText);

      depositTotal.innerText = previousDepositTotal + depositAmount;
      
      */


      updateTotalField('deposit-total', depositAmount);

      /*  
      const balanceTotal = document.getElementById('balance-total');
       const balanceTotalText = balanceTotal.innerText;
       const previousBalanceTotal = parseFloat(balanceTotalText);
 
       balanceTotal.innerText = previousBalanceTotal + depositAmount;
        */

      updateBalance(depositAmount, true);
})

document.getElementById('withdraw-btn').addEventListener('click', function () {
      const withdrawAmount = getInputValue('withdraw-input');


      /* 
      
      const withdrawTotal = document.getElementById('withdraw-total');
      const previousWithdrawTotalText = withdrawTotal.innerText;
      const previousWithdrawTotal = parseFloat(previousWithdrawTotalText); 
      
      withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount; 
      
      */

      updateTotalField('withdraw-total', withdrawAmount);

      /* 
      
      const balanceTotal = document.getElementById('balance-total');
      const balanceTotalText = balanceTotal.innerText;
      const previousBalanceTotal = parseFloat(balanceTotalText);

      balanceTotal.innerText = previousBalanceTotal - withdrawAmount; 
      
      */

      updateBalance(withdrawAmount, false)
})