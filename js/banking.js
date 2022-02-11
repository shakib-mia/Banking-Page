document.getElementById('deposit-btn').addEventListener('click', function () {
      let depositInput = document.getElementById('deposit-input');
      let depositAmount = parseFloat(depositInput.value);
      let previousDepositTotal = document.getElementById('deposit-total');
      let previousDepositTotalAmount = parseFloat(previousDepositTotal.innerText);
      let previousBalanceTotal = document.getElementById('balance-total');
      let previousBalanceTotalAmount = parseFloat(previousBalanceTotal.innerText);

      previousDepositTotal.innerText = previousDepositTotalAmount + depositAmount;
      previousBalanceTotal.innerText = previousBalanceTotalAmount + depositAmount;
})

document.getElementById('withdraw-btn').addEventListener('click', function () {
      let withdrawInput = document.getElementById('withdraw-input');
      let withdrawAmount = parseFloat(withdrawInput.value);
      let previousWithdrawTotal = document.getElementById('withdraw-total');
      let previousWithdrawTotalAmount = parseFloat(previousWithdrawTotal.innerText);
      let previousBalanceTotal = document.getElementById('balance-total');
      let previousBalanceTotalAmount = parseFloat(previousBalanceTotal.innerText);

      previousWithdrawTotal.innerText = previousWithdrawTotalAmount + withdrawAmount;
      previousBalanceTotal.innerText = previousBalanceTotalAmount - withdrawAmount;
})