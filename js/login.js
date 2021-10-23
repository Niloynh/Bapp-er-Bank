// handle login handler
document.getElementById('login-submit').addEventListener('click', function (){
    const emailField = document.getElementById('email-input');
    const emailLogin = emailField.value;
    console.log(emailLogin)

    const passField = document.getElementById('pass-input');
    const passLogin = passField.value;

    if(emailLogin == 'baap@bank.com' && passLogin == 'secretinfo'){
        window.location.href = 'banking.html'
    }
})