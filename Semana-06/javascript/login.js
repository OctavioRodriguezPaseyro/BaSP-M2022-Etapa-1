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

window.onload = function(){

    var email = document.getElementsByClassName("email-field")[0];
    var password = document.getElementsByClassName("password-field")[0];
    var emailError = document.getElementsByClassName("email-na")[0];
    var passwordError = document.getElementsByClassName("password-na")[0];

    function validateEmail(email){
        var emailConditions = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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
            password.classList = "invalid-input";
        }
    }

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