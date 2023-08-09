let balance = 80000;

window.onload = function(){
    document.getElementById("selection").style.display = "none";
    document.getElementById("withdraw").style.display = "none";
    document.getElementById("deposit").style.display = "none";
    document.getElementById("finalScreen").style.display = "none";
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

function withdrawal(){
    // To-Do: handle increments of 5s and only distribute 5, 10, 20, 50, and 100 bills
    const amountId = document.getElementById('withdrawalNumber').value;
    
    document.getElementById("authenticate").style.display = "none";
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

function deposit(){
    // To-Do: add any value of bills
    document.getElementById("authenticate").style.display = "none";
    document.getElementById("selection").style.display = "none";
    document.getElementById("authenticateResult").style.display = "none";
    document.getElementById("deposit").style.display = "inline-block";
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
    document.getElementById("authenticateResult").style.display = "none";
    document.getElementById("finalScreen").style.display = "inline-block";
}

function backToSect(){
    document.getElementById("selection").style.display = "inline-block";
    document.getElementById("deposit").style.display = "none";
    document.getElementById("withdraw").style.display = "none";
}

function loginUser(){
    // TO-DO: handle clearing username and password values
    document.getElementById("finalScreen").style.display = "none";
    document.getElementById("authenticate").style.display = "inline-block";
}