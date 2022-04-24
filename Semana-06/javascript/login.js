var email = document.getElementsByClassName("email-field");
var password = document.getElementsByClassName("password-field");
var emailError = document.getElementsByClassName("email-na");
var aver = emailError[0]
var passwordError = document.getElementsByClassName("password-na");
var emailConditions = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
var loginSubmit = document.getElementById("loginSubmit");


function validationLetterNum(string){
    var hasNumber = false;
    var hasLetter = false;
    for (var i = 0; i < string.lenght; i++){
        const element = string[i];
        if (isNaN(element)){
            hasLetter = true;
        }
        if (!isNaN(element)){
            hasNumber = true;
        }
    }
    return hasLetter && hasNumber;
}

function validateEmail(email){
    return emailConditions.test(email);
}

function emailNA(){
    if (validateEmail(email.value) == false){
        emailError.style.visibility = "visible";
        email.classList = "invalid-input";
    }
}

function passwordNA(){
    if (validationLetterNum(password.value) == false){
        passwordError.style.visibility = "visible";
        passwordError.classList = "invalid-input";
    }
}

window.onload = function(){

    email.addEventListener("blur", emailNA);

    email.addEventListener("focus", function(){
        emailError.style.visibility = "hidden";
        email.classList -= "invalid-input";
    });

    password.addEventListener("blur", passwordNA);

    password.addEventListener("focus", function(){
        passwordError.style.visibility = "hidden";
        password.classList -= "invalid-input";
    });
}