// String Er Shthe String Jok kora jay na oitake parseFloat Othoba ParseInt banay jok korte hoy


function getInputValue(inputId){
      const inputField = document.getElementById(inputId);
      const inputAmountText = inputField.value;
      const amountValue = parseFloat(inputAmountText);
      // Get Clear Input
      inputField.value = '';
      return amountValue;
  }
  
  function totalAmountFiled(amountId, AmountTotal){
      const totalField = document.getElementById(amountId);
      const TotalText = totalField.innerText;
      const PreAmount = parseFloat(TotalText);
      totalField.innerText = PreAmount + AmountTotal;
  }
  function GetcarrentBalance(){
      const balanceTotal = document.getElementById('total-balance');
      const balanceAmountText = balanceTotal.innerText
      const prebalanceAmount = parseFloat(balanceAmountText);
      return prebalanceAmount
  }
  
  function balanceUpdate(newDepositAmount, isAdd){
      const balanceTotal = document.getElementById('total-balance');
      // const balanceAmountText = balanceTotal.innerText;
      // const prebalanceAmount = parseFloat(balanceAmountText);
     const prebalanceAmount = GetcarrentBalance();
      if(isAdd == true){
          balanceTotal.innerText =  prebalanceAmount + newDepositAmount;
      }
      else{
          balanceTotal.innerText =  prebalanceAmount - newDepositAmount;
      }
  }
  
  document.getElementById('deposit-btn').addEventListener('click', function (){
  
      // const depositInput = document.getElementById('deposit-input');
      // const depositAmountText = depositInput.value;
      // const newDepositAmount = parseFloat(depositAmountText);
     
     
  
  // Get Carrent Deposit
      // const depositTotal = document.getElementById('total-deposit');
      // const depositTotalText = depositTotal.innerText;
      // const PredepositAmount = parseFloat(depositTotalText);
      // depositTotal.innerText = PredepositAmount + newDepositAmount;
  
  
  // Balance Update
      // const balanceTotal = document.getElementById('total-balance');
      // const balanceAmountText = balanceTotal.innerText;
      // const prebalanceAmount = parseFloat(balanceAmountText);
      // balanceTotal.innerText =  prebalanceAmount + newDepositAmount;
      const newDepositAmount = getInputValue('deposit-input');
      if(newDepositAmount > 0){
          totalAmountFiled('total-deposit', newDepositAmount)
          balanceUpdate(newDepositAmount, true)
      }
    
  });
  
  
  
  // Withdraw System
  document.getElementById('withdraw-btn').addEventListener('click', function (){
      // const withdrawInput = document.getElementById('withdraw-input');
      // const withdrawInputText = withdrawInput.value;
      // const newWithdrawAmount = parseFloat(withdrawInputText);
    
  
      // const WithdrawTotal = document.getElementById('withdraw-total');
      // const WithdrawTotalText = WithdrawTotal.innerText;
      // const preWithdrawTotal = parseFloat(WithdrawTotalText);
  
      // const totalWithdraw = preWithdrawTotal +  newWithdrawAmount;
  
      // WithdrawTotal.innerText = totalWithdraw;
  
  
  // balance Update
      // const balanceTotal = document.getElementById('total-balance');
      // const preBalancetext  =  balanceTotal.innerText;
      // const preBalance = parseFloat(preBalancetext);
  
      // balanceTotal.innerText = preBalance - newWithdrawAmount;
      const newWithdrawAmount = getInputValue('withdraw-input');
      const carrentBalance = GetcarrentBalance();
      if(newWithdrawAmount > 0 && newWithdrawAmount < carrentBalance){
          totalAmountFiled('total-withdraw', newWithdrawAmount)
          balanceUpdate(newWithdrawAmount, false);
      }
      if(newWithdrawAmount > carrentBalance){
          console.log('abul taka nai joto gula r withdraw korte chas oto gula')
      }
  // Clear Input field
  })
  
  
  