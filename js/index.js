let balance = 80000;

window.onload = function(){
    document.getElementById("selection").style.display = "none";
    document.getElementById("withdraw").style.display = "none";
    document.getElementById("deposit").style.display = "none";
    document.getElementById("finalScreen").style.display = "none";
}

// To-Do: handle increments of 5s and only distribute 5, 10, 20, 50, and 100 bills

function authenticatedUser(){
    const usernameId = document.getElementById('username').value;
    const passwordId = document.getElementById('password').value;

    if(usernameId == 'admin' && passwordId == 'admin'){
        document.getElementById('authenticateResult1').innerHTML = `Welcome Administrator!`;
        document.getElementById('authenticateResult2').innerHTML = `Your balance before any transactions today is $${balance}.`;
        document.getElementById("selection").style.display = "inline-block";
    } else {
        document.getElementById('authenticateResult1').innerHTML = `Username or Password Incorrect!`;
    }
}

function withdrawal(){
    const amountId = document.getElementById('withdrawalNumber').value;
;
    document.getElementById("authenticate").style.display = "none";
    document.getElementById("selection").style.display = "none";
    document.getElementById("authenticateResult1").style.display = "none";
    document.getElementById("authenticateResult2").style.display = "none";
    document.getElementById("withdraw").style.display = "inline-block";

    if(amountId > 0 && amountId <= balance){
        document.getElementById('withdrawalResult').innerHTML = `You are attempting to withdraw $${amountId}. Your balance will be $${balance - Number(amountId)} after this transaction.`;
    } else if (amountId > balance){
        document.getElementById('withdrawalResult').innerHTML = `⛔️ You are attempting to withdraw more than your balance! Please enter a different amount.`;
    } else {
        document.getElementById('withdrawalResult').innerHTML = `⛔️ Please enter a withdrawal amount greater than zero!`;
    }
}

function deposit(){
    const amountId = document.getElementById('depositNumber').value;

    document.getElementById("authenticate").style.display = "none";
    document.getElementById("selection").style.display = "none";
    document.getElementById("authenticateResult1").style.display = "none";
    document.getElementById("authenticateResult2").style.display = "none";
    document.getElementById("deposit").style.display = "inline-block";
    console.log(amountId);
    if (amountId > 0){
        document.getElementById('depositResult').innerHTML = `You are depositing $${amountId} to your account. Your available balance will be $${balance + Number(amountId)}.`;
    } else {
        document.getElementById('depositResult').innerHTML = `⛔️ Please enter a deposit amount greater than zero!`;
    }
}

// Do I want to check the balance on each screen?
// function checkBalance(){
//     document.getElementById("authenticate").style.display = "none";
//     document.getElementById("selection").style.display = "none";
//     document.getElementById("authenticateResult").style.display = "none";
//     document.getElementById("checkBalance").style.display = "inline-block";
// }

function exit(){
    document.getElementById("authenticate").style.display = "none";
    document.getElementById("selection").style.display = "none";
    document.getElementById("authenticateResult1").style.display = "none";
    document.getElementById("authenticateResult2").style.display = "none";
    document.getElementById("finalScreen").style.display = "inline-block";
}

function backToSect(){
    document.getElementById("selection").style.display = "inline-block";
    document.getElementById("deposit").style.display = "none";
    document.getElementById("withdraw").style.display = "none";
}

function loginUser(){
    document.getElementById("finalScreen").style.display = "none";
    document.getElementById("authenticate").style.display = "inline-block";
    document.getElementById("username").value = '';
    document.getElementById("password").value = '';
}
