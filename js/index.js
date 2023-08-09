let balance = 80000;

window.onload = function(){
    document.getElementById("amountDiv").style.visibility = "hidden";
    document.getElementById("withdrawalbutton").style.visibility = "hidden";
}

function authenticatedUser(){
    usernameId = document.getElementById('username').value;
    passwordId = document.getElementById('password').value;

    if(usernameId == 'admin' && passwordId == 'admin'){
        document.getElementById('authenticateresult').innerHTML = `Welcome Administrator! Your balance before any transactions today is $${balance}.`;
        document.getElementById("amountDiv").style.visibility = "visible";
        document.getElementById('withdrawalbutton').style.visibility = 'visible';
    } else {
        document.getElementById('authenticateresult').innerHTML = `Username or Password Incorrect!`;
    }
}

function showWithdrawalResult(){
    amountId = document.getElementById('number').value;
    
    if (amountId > 0 && amountId <= balance){
        document.getElementById('withdrawalresult').innerHTML = `You are attempting to withdraw $${amountId}.`;
    } else if (amountId > balance){
        document.getElementById('withdrawalresult').innerHTML = `You are attempting to withdraw more than your balance! Please enter a different amount.`;
    } else {
        document.getElementById('withdrawalresult').innerHTML = `Please enter a withdrawal amount greater than zero!`;
    }
}