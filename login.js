//step-1:Add click event handler with the submit button
document.getElementById('submit-btn').addEventListener('click', function () {
    //step-2: get the email adress inside the email input field
    //always rember that to use valu to get text from an input tag
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    if (email == 'kamrul@gmail.com' && password == 'secret') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Tor password Wrong');
    }
})