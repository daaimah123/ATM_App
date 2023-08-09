let balance = 80000;

window.onload = function(){
    document.getElementById("withdraw").style.display = "none";
    document.getElementById("selection").style.display = "none";
}

function authenticatedUser(){
    const usernameId = document.getElementById('username').value;
    const passwordId = document.getElementById('password').value;

    if(usernameId == 'admin' && passwordId == 'admin'){
        document.getElementById('authenticateResult').innerHTML = `Welcome Administrator! Your balance before any transactions today is $${balance}.`;
        document.getElementById("selection").style.display = "inline-block";
    } else {
        document.getElementById('authenticateResult').innerHTML = `Username or Password Incorrect!`;
    }
}

function showWithdrawalResult(){
    const amountId = document.getElementById('number').value;
    
    document.getElementById("login").style.display = "none";
    document.getElementById("selection").style.display = "none";
    document.getElementById("authenticateResult").style.display = "none";
    document.getElementById("withdraw").style.display = "inline-block";

    if(amountId > 0 && amountId <= balance){
        document.getElementById('withdrawalResult').innerHTML = `You are attempting to withdraw $${amountId}.`;
    } else if (amountId > balance){
        document.getElementById('withdrawalResult').innerHTML = `You are attempting to withdraw more than your balance! Please enter a different amount.`;
    } else {
        document.getElementById('withdrawalResult').innerHTML = `Please enter a withdrawal amount greater than zero!`;
    }
}