var nameMessage = "";
var lastNameMessage = "";
var docNumberMessage = "";
var dateMessage = "";
var phoneMessage = "";
var directionMessage = "";
var locationMessage = "";
var postalCodeMessage = "";
var signUpEmailMessage = "";
var signUpPasswordMessage = "";
var confirmPasswordMessage = "";

function validateJustLetters(string) {
    var notANumber = false;
    for (var i = 0; i < string.length; i++) {
    var nameElement = string[i];
    if (isNaN(nameElement)) {
        notANumber = true;
    }
    }
    return notANumber;
};

function validateJustNumbers(string) {
    var isNumber = false;
    for (var i = 0; i < string.length; i++) {
    var docElement = string[i];
    if (!isNaN(docElement)) {
        isNumber = true;
    }
    }
    return isNumber;
};

function validateStringLength(string, number) {
    var correctLength = false;
    if (string.length > number) {
    correctLength = true;
    }
    return correctLength;
};

function validateTextNumberAndSpaces(string) {
    var validation = false;
    var firstNumber;
    if (validateJustNumbers(string) && validateJustLetters(string)) {
    if (string.indexOf(" ") != -1) {
        firstNumber = string.indexOf(" ");
        if (!isNaN(string[firstNumber + 1])) {
        validation = true;
        }
    }
    }
    return validation;
};

function countLetters(string) {
    var letters = 0;
    for (var i = 0; i < string.length; i++) {
    var element = string[i];
    if (isNaN(element)) {
        letters++;
    }
    }
    return letters;
};

function validateSignUpEmail(input) {
    var regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regExEmail.test(input);
};

function validateDate(input) {
    var actualDay = new Date();
    var inputDate = new Date(input);
    return inputDate <= actualDay;
}

window.onload = function(){
    var name = document.getElementsByClassName("first-name-field")[0];
    var nameError = document.getElementsByClassName("first-name-na")[0];
    var lastName = document.getElementsByClassName("last-name-field")[0];
    var lastNameError = document.getElementsByClassName("last-name-na")[0];
    var docNumber = document.getElementsByClassName("dni-field")[0];
    var docError = document.getElementsByClassName("dni-na")[0];
    var date = document.getElementsByClassName("birthday-field")[0];
    var dateError = document.getElementsByClassName("birthday-na")[0];
    var phone = document.getElementsByClassName("phone-number-field")[0];
    var phoneError = document.getElementsByClassName("phone-number-na")[0];
    var direction = document.getElementsByClassName("address-field")[0];
    var directionError = document.getElementsByClassName("address-na")[0];
    var location = document.getElementsByClassName("location-field")[0];
    var locationError = document.getElementsByClassName("location-na")[0];
    var postalCode = document.getElementsByClassName("post-code-field")[0];
    var postalCodeError = document.getElementsByClassName("post-code-na")[0];
    var signUpEmail = document.getElementsByClassName("email-field")[0];
    var signUpEmailError = document.getElementsByClassName("email-na")[0];
    var confirmEmail = document.getElementsByClassName("confirm-email-field")[0];
    var confirmEmailError = document.getElementsByClassName("confirm-email-na")[0];
    var signUpPassword = document.getElementsByClassName("password-field")[0];
    var signUpPasswordError = document.getElementsByClassName("password-na")[0];
    var confirmPassword = document.getElementsByClassName("confirm-password-field")[0];
    var confirmPasswordError = document.getElementsByClassName("confirm-password-na")[0];
    var signUpButton = document.getElementById("signUpSubmit");
 
    function showNameErrors() {
        if (!validateJustLetters(name.value) || !validateStringLength (name.value, 3) || validateJustNumbers(name.value)) {
            nameError.style.visibility = "visible";
            name.classList = "invalid-input";
            nameMessage = nameError.textContent;
        } else {
            nameMessage = name.value;
        } 
    }

    function hideNameErrors() {
        nameError.style.visibility = "hidden";
        name.classList -= "invalid-input";
    }

    function showLastNameErrors() {
        if (!validateJustLetters(lastName.value) || !validateStringLength (lastName.value, 3) ||
        validateJustNumbers(lastName.value)) {
            lastNameError.style.visibility = "visible";
            lastName.classList = "invalid-input";
            lastNameMessage = lastNameError.textContent;
        } else {
            lastNameMessage = lastName.value;
        }
    }
  
    function hideLastNameErrors() {
        lastNameError.style.visibility = "hidden";
        lastName.classList -= "invalid-input";
    }

    function showDocErrors() {
    if (!validateJustNumbers(docNumber.value) || !validateStringLength(docNumber.value, 7) ||
        validateJustLetters(docNumber.value)) {
        docError.style.visibility = "visible";
        docNumber.classList = "invalid-input";
        docNumberMessage = docError.textContent;
    } else {
        docNumberMessage = docNumber.value;
    }
    }

    function hideDocErrors() {
        docError.style.visibility = "hidden";
        docNumber.classList -= "invalid-input";
    }

    function showDateErrors() {
        if (!validateDate(date.value)) {
            dateError.style.visibility = "visible";
            date.classList = "invalid-input";
            dateMessage = dateError.textContent;
        } else {
            dateMessage = date.value;
        }
    }

    function hideDateErrors() {
        dateError.style.visibility = "hidden";
        date.classList -= "invalid-input";
    }

    function showPhoneErrors() {
        if (!validateJustNumbers(phone.value) || validateJustLetters(phone.value) || phone.value.length != 10) {
            phoneError.style.visibility = "visible";
            phone.classList = "invalid-input";
            phoneMessage = phoneError.textContent;
        } else {
            phoneMessage = phone.value;
        }
    }

    function hidePhoneErrors() {
        phoneError.style.visibility = "hidden";
        phone.classList -= "invalid-input";
    }

    function showDirectionErrors() {
        if (!validateTextNumberAndSpaces(direction.value) || !validateStringLength (direction.value, 4)) {
            directionError.style.visibility = "visible";
            direction.classList = "invalid-input";
            directionMessage = directionError.textContent;
        } else {
            directionMessage = direction.value;
        }
    }

    function hideDirectionErrors() {
        directionError.style.visibility = "hidden";
        direction.classList -= "invalid-input";
    }

    function showLocationErrors() {
        if (!validateJustLetters(location.value) || !validateJustNumbers(location.value) ||
            !(countLetters(location.value) > 3)) {
            locationError.style.visibility = "visible";
            location.classList = "invalid-input";
            locationMessage = locationError.textContent;
        } else {
            locationMessage = location.value;
        }
    }

    function hideLocationErrors() {
        locationError.style.visibility = "hidden";
        location.classList -= "invalid-input";
    }

    function showPostalCodeErrors() {
        if (!validateJustNumbers(postalCode.value) || validateJustLetters(postalCode.value) || postalCode.value.length < 4 || 
        postalCode.value.length > 5) {
            postalCodeError.style.visibility = "visible";
            postalCode.classList = "invalid-input";
            postalCodeMessage = postalCodeError.textContent;
        } else {
            postalCodeMessage = postalCode.value;
        }
    }

    function hidePostalCodeErrors() {
        postalCodeError.style.visibility = "hidden";
        postalCode.classList -= "invalid-input";
    }

    function showSignUpEmailErrors() {
        if(!validateSignUpEmail(signUpEmail.value)) {
            signUpEmailError.style.visibility = "visible";
            signUpEmail.classList = "invalid-input";
            signUpEmailMessage = signUpEmailError.textContent;
        } else {
            signUpEmailMessage = signUpEmail.value;
        }
    }

    function hideSignUpEmailErrors() {
        signUpEmailError.style.visibility = "hidden";
        signUpEmail.classList -= "invalid-input";
    }

    function showConfirmEmailErrors() {
        if ((signUpEmail.value !== confirmEmail.value) && confirmEmail.value !== NaN) {
            confirmEmailError.style.visibility = "visible";
            confirmEmail.classList = "invalid-input";
            confirmEmailMessage = confirmEmailError.textContent;
        } else {
            confirmEmailMessage = confirmEmail.value;
        }
    }

    function hideConfirmEmailErrors() {
        confirmEmailError.style.visibility = "hidden";
        confirmEmail.classList -= "invalid-input";
    }

    function showSignUpPasswordErrors() {
        if (!validateJustLetters(signUpPassword.value) || !validateJustNumbers(signUpPassword.value) || 
        !validateStringLength(signUpPassword.value, 7)) {
            signUpPasswordError.style.visibility = "visible";
            signUpPassword.classList = "invalid-input";
            signUpPasswordMessage = signUpPasswordError.textContent;
        } else {
            signUpPasswordMessage = signUpPassword.value;
        }
    }

    function hideSignUpPasswordErrors () {
        signUpPasswordError.style.visibility = "hidden";
        signUpPassword.classList -= "invalid-input";
    }

    function showConfirmPasswordErrors() {
        if ((signUpPassword.value !== confirmPassword.value) && (confirmPassword.value !== NaN)) {
            confirmPasswordError.style.visibility = "visible";
            confirmPassword.classList = "invalid-input";
            confirmPasswordMessage = confirmPasswordError.textContent;
        } else {
            confirmPasswordMessage = confirmPassword.value;
        }
    }

    function hideConfirmPasswordErrors() {
        confirmPasswordError.style.visibility = "hidden";
        confirmPassword.classList -= "invalid-input";
    }

    function showValidationMessages() {
        var signUpAlert = "Name: " + nameMessage + "\nLast Name: " + lastNameMessage + "\nDNI: " + docNumberMessage + 
        "\nDate: " + dateMessage + "\nPhone: " + phoneMessage + "\nDirection: " + directionMessage + "\nLocation: " +
        locationMessage + "\nPost Code: " + postalCodeMessage + "\nEmail: " + signUpEmailMessage + "\nPassword: " +
        signUpPasswordMessage + "\nRepeat Password: " + confirmPasswordMessage;
        alert(signUpAlert);
    }

    name.addEventListener("blur", showNameErrors);
    name.addEventListener("focus", hideNameErrors);
    lastName.addEventListener("blur", showLastNameErrors);
    lastName.addEventListener("focus", hideLastNameErrors);
    docNumber.addEventListener("blur", showDocErrors);
    docNumber.addEventListener("focus", hideDocErrors);
    date.addEventListener("blur", showDateErrors);
    date.addEventListener("focus", hideDateErrors);
    phone.addEventListener("blur", showPhoneErrors);
    phone.addEventListener("focus", hidePhoneErrors);
    direction.addEventListener("blur", showDirectionErrors);
    direction.addEventListener("focus", hideDirectionErrors);
    location.addEventListener("blur", showLocationErrors);
    location.addEventListener("focus", hideLocationErrors);
    postalCode.addEventListener("blur", showPostalCodeErrors);
    postalCode.addEventListener("focus", hidePostalCodeErrors);
    signUpEmail.addEventListener("blur", showSignUpEmailErrors);
    signUpEmail.addEventListener("focus", hideSignUpEmailErrors);
    confirmEmail.addEventListener("blur", showConfirmEmailErrors);
    confirmEmail.addEventListener("focus", hideConfirmEmailErrors);
    signUpPassword.addEventListener("blur", showSignUpPasswordErrors);
    signUpPassword.addEventListener("focus", hideSignUpPasswordErrors);
    confirmPassword.addEventListener("blur", showConfirmPasswordErrors);
    confirmPassword.addEventListener("focus", hideConfirmPasswordErrors);
    signUpButton.addEventListener("click", showValidationMessages);
}