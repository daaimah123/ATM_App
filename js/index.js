let balance = 80000;

window.onload = function(){
    document.getElementById("withdraw").style.visibility = "hidden";
    document.getElementById("selection").style.visibility = "hidden";
}

function authenticatedUser(){
    const usernameId = document.getElementById('username').value;
    const passwordId = document.getElementById('password').value;

    if(usernameId == 'admin' && passwordId == 'admin'){
        document.getElementById('authenticateResult').innerHTML = `Welcome Administrator! Your balance before any transactions today is $${balance}.`;
        document.getElementById("selection").style.visibility = "visible";
    } else {
        document.getElementById('authenticateResult').innerHTML = `Username or Password Incorrect!`;
    }
}

function showWithdrawalResult(){
    const amountId = document.getElementById('number').value;
    
    document.getElementById("login").style.visibility = "hidden";
    document.getElementById("selection").style.visibility = "hidden";
    document.getElementById("authenticateResult").style.visibility = "hidden";
    document.getElementById("withdraw").style.visibility = "visible";

    if (amountId === 0 || amountId === ''){
        document.getElementById('withdrawalResult').innerHTML = '';
    } else if (amountId > 0 && amountId <= balance){
        document.getElementById('withdrawalResult').innerHTML = `You are attempting to withdraw $${amountId}.`;
    } else if (amountId > balance){
        document.getElementById('withdrawalResult').innerHTML = `You are attempting to withdraw more than your balance! Please enter a different amount.`;
    } else {
        document.getElementById('withdrawalResult').innerHTML = `Please enter a withdrawal amount greater than zero!`;
    }
}