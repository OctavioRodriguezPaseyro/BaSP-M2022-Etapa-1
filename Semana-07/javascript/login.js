function validationLetterNum(string) {
  var hasNumber = false;
  var hasLetter = false;
  for (var i = 0; i < string.length; i++) {
    var element = string[i];
    if (isNaN(element)) {
      hasLetter = true;
    }
    if (!isNaN(element)) {
      hasNumber = true;
    }
  }
  return hasLetter && hasNumber;
};

function validateEmail(email){
    var emailConditions = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailConditions.test(email);
};

window.onload = function(){

    var email = document.getElementById("login-email-field");
    var password = document.getElementById("login-password-field");
    var emailError = document.getElementsByClassName("email-na")[0];
    var passwordError = document.getElementsByClassName("password-na")[0];

    function showEmailErrors(){
        if (validateEmail(email.value) == false){
            emailError.style.visibility = "visible";
            email.classList = "invalid-input";
        }
    };

    function hideEmailErrors(){
        emailError.style.visibility = "hidden";
        email.classList -= "invalid-input";
    };
    
    function showPasswordErrors(){
        if (validationLetterNum(password.value) == false){
            passwordError.style.visibility = "visible";
            password.classList = "invalid-input";
        }
    };

    function hidePasswordErrors(){
        passwordError.style.visibility = "hidden";
        password.classList -= "invalid-input";
    };

    email.addEventListener("blur", showEmailErrors);

    email.addEventListener("focus", hideEmailErrors);

    password.addEventListener("blur", showPasswordErrors);

    password.addEventListener("focus", hidePasswordErrors);
}