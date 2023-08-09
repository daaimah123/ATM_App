
function showResult(){
    usernameId = document.getElementById('username').value;
    passwordId = document.getElementById('password').value;
    amountId = document.getElementById('number').value;

    if(usernameId == 'admin' && passwordId == 'admin'){
        document.getElementById('result1').innerHTML = 'Welcome Administrator!';
        if(amountId <= 0){
            document.getElementById('result2').innerHTML = `Please enter a withdrawal amount!`;
        } else if(amountId > 5000){
            document.getElementById('result2').innerHTML = `You are withdrawing ${amountId} which is more than your daily withdrawal limit of $5,000.`;
        } else if(amountId > 0 && amountId < 5000){
            document.getElementById('result2').innerHTML = `You are withdrawing ${amountId} which is less than your daily withdrawal limit of $5,000.`;
        } else {
            document.getElementById('result2').innerHTML = `You are withdrawing ${amountId} which is exactly your daily withdrawal limit of $5,000.`;
        }
    } else {
        document.getElementById('result1').innerHTML = `Username or Password Incorrect!`;
    }
}