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

      if (depositAmount >= 0) {
            updateTotalField('deposit-total', depositAmount);
            updateBalance(depositAmount, true);
      }
      else {
            alert('Currency should be number & greater than or equals to zero')
      }

})

document.getElementById('withdraw-btn').addEventListener('click', function () {
      const withdrawAmount = getInputValue('withdraw-input');

      if (withdrawAmount >= 0) {
            updateTotalField('withdraw-total', withdrawAmount);
            updateBalance(withdrawAmount, false)
      }
      else {
            alert('Currency should be number & greater than or equals to zero')
      }

})