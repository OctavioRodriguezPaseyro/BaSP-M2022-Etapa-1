var nameError = "";
var lastNameError = "";
var dniError = "";
var dateError = "";
var phoneError = "";
var addressError = "";
var locationError = "";
var postCodeError = "";
var emailError = "";
var passwordError = "";
var confirmPasswordError = "";

function validateJustLetters(string) {
    var notNumber = false;
    for (var i = 0; i < string.length; i++) {
    var nameElement = string[i];
    if (isNaN(nameElement)) {
        notNumber = true;
        }
    }
    return notNumber;
}

function validateJustNumbers(string) {
    var isNumber = false;
    for (var i = 0; i < string.length; i++) {
    var dniElement = string[i];
    if (!isNaN(dniElement)) {
        isNumber = true;
        }
    }
    return isNumber;
}

function validateStringLength(string, number) {
    var correctLength = false;
    if (string.length > number) {
    correctLength = true;
    }
    return correctLength;
}

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
}

function countLetters(string) {
    var letters = 0;
    for (var i = 0; i < string.length; i++) {
    var element = string[i];
    if (isNaN(element)) {
        letters++;
        }
    }
    return letters;
}

function validateemail(input) {
    var emailConditions = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailConditions.test(input);
}

function validateDate(input) {
    var actualDate = new Date();
    var inputDate = new Date(input);
    if (inputDate > actualDate) {
    return false;
    } else {
    return true;
    }
}

window.onload = function(){
    var name = document.getElementsByClassName("first-name-field")[0];
    var nameError = document.getElementsByClassName("first-name-na")[0];
    var lastName = document.getElementsByClassName("last-name-field")[0];
    var lastNameError = document.getElementsByClassName("last-name-na")[0];
    var dni = document.getElementsByClassName("dni-field")[0];
    var dniError = document.getElementsByClassName("dni-na")[0];
    var date = document.getElementsByClassName("birthday-field")[0];
    var dateError = document.getElementsByClassName("birthday-na")[0];
    var phone = document.getElementsByClassName("phone-number-field")[0];
    var phoneError = document.getElementsByClassName("phone-number-na")[0];
    var address = document.getElementsByClassName("address-field")[0];
    var addressError = document.getElementsByClassName("address-na")[0];
    var location = document.getElementsByClassName("location-field")[0];
    var locationError = document.getElementsByClassName("location-na")[0];
    var postCode = document.getElementsByClassName("post-code-field")[0];
    var postCodeError = document.getElementsByClassName("post-code-na")[0];
    var email = document.getElementsByClassName("email-field")[0];
    var emailError = document.getElementsByClassName("email-na")[0];
    // var confirmEmail = document.getElementsByClassName("confirm-email-field")[0];
    // var confirmEmailError = document.getElementsByClassName("confirm-email-field")[0];
    var password = document.getElementsByClassName("password-field")[0];
    var passwordError = document.getElementsByClassName("password-na")[0];
    var confirmPassword = document.getElementsByClassName("confirm-password-field")[0];
    var confirmPasswordError = document.getElementsByClassName("confirm-password-na")[0];
    var signUpButton = document.getElementById("signUpSubmit");

    function showNameError() {
        if (!validateJustLetters(name.value) || !validateStringLength (name.value, 3) || validateJustNumbers(name.value)) {
            nameError.style.visibility = "visible";
            name.classList = "invalid-input";
            nameError = nameError.textContent;
        } else {
            nameError = name.value;
        } 
    }

    function hideNameError() {
        nameError.style.visibility = "hidden";
        name.classList -= "invalid-input";
    }

    function showLastNameError() {
        if (!validateJustLetters(lastName.value) || !validateStringLength (lastName.value, 3) ||
        validateJustNumbers(lastName.value)) {
            lastNameError.style.visibility = "visible";
            lastName.classList = "invalid-input";
            lastNameError = lastNameError.textContent;
        } else {
            lastNameError = lastName.value;
        }
    }

    function hideLastNameError() {
        lastNameError.style.visibility = "hidden";
        lastName.classList -= "invalid-input";
    }

    function showDniError() {
        if (!validateJustNumbers(dni.value) || !validateStringLength(dni.value, 7) ||
            validateJustLetters(dni.value)) {
            dniError.style.visibility = "visible";
            dni.classList = "invalid-input";
            dniError = dniError.textContent;
        } else {
            dniError = dni.value;
        }
    }

    function hideDniError() {
        dniError.style.visibility = "hidden";
        dni.classList -= "invalid-input";
    }

    function showDateError() {
        if (!validateDate(date.value)) {
            dateError.style.visibility = "visible";
            date.classList = "invalid-input";
            dateError = dateError.textContent;
        } else {
            dateError = date.value;
        }
    }

    function hideDateError() {
        dateError.style.visibility = "hidden";
        date.classList -= "invalid-input";
    }

    function showPhoneError() {
        if (!validateJustNumbers(phone.value) || validateJustLetters(phone.value) || phone.value.length != 10) {
            phoneError.style.visibility = "visible";
            phone.classList = "invalid-input";
            phoneError = phoneError.textContent;
        } else {
            phoneError = phone.value;
        } 
    }

    function hidePhoneError() {
        phoneError.style.visibility = "hidden";
        phone.classList -= "invalid-input";
    }

    function showAddressError() {
        if (!validateTextNumberAndSpaces(address.value) || !validateStringLength (address.value, 4)) {
            addressError.style.visibility = "visible";
            address.classList = "invalid-input";
            addressError = addressError.textContent;
        } else {
            addressError = address.value;
        }
    }

    function hideAddressError() {
        addressError.style.visibility = "hidden";
        address.classList -= "invalid-input";
    }

    function showLocationError() {
    if (!validateJustLetters(location.value) || !validateJustNumbers(location.value) ||
        !(countLetters(location.value) > 3)) {
        locationError.style.visibility = "visible";
        location.classList = "invalid-input";
        locationError = locationError.textContent;
    } else {
        locationError = location.value;
        }
    }

    function hideLocationError() {
        locationError.style.visibility = "hidden";
        location.classList -= "invalid-input";
    }

    function showPostCodeError() {
        if (!validateJustNumbers(postCode.value) || validateJustLetters(postCode.value) || postCode.value.length < 4 || 
        postCode.value.length > 5) {
            postCodeError.style.visibility = "visible";
            postCode.classList = "invalid-input";
            postCodeError = postCodeError.textContent;
        } else {
            postCodeError = postCode.value;
        }
    }

    function hidePostCodeError() {
        postCodeError.style.visibility = "hidden";
        postCode.classList -= "invalid-input";
    }

    function showEmailError() {
        if(!validateemail(email.value)){
            emailError.style.visibility = "visible";
            email.classList = "invalid-input";
            emailError = emailError.textContent;
        } else {
            emailError = email.value;
        }
    }

    function hideEmailError() {
        emailError.style.visibility = "hidden";
        email.classList -= "invalid-input";
    }

    function showPasswordError() {
        if (!validateJustLetters(password.value) || !validateJustNumbers(password.value) || 
        !validateStringLength(password.value, 7)) {
            passwordError.style.visibility = "visible";
            password.classList = "invalid-input";
            passwordError = passwordError.textContent;
        } else {
            passwordError = password.value;
        }
    }

    function hidePasswordError() {
        passwordError.style.visibility = "hidden";
        password.classList -= "invalid-input";
    }

    function showConfirmPasswordError() {
        if (!validateJustLetters(confirmPassword.value) || !validateJustNumbers(confirmPassword.value) || 
        !validateStringLength(confirmPassword.value, 7)) {
            confirmPasswordError.style.visibility = "visible";
            confirmPassword.classList = "invalid-input";
            confirmPasswordError = confirmPasswordError.textContent;
        } else {
            confirmPasswordError = confirmPassword.value;
        }
    }

    function hideConfirmPasswordError() {
        confirmPasswordError.style.visibility = "hidden";
        confirmPassword.classList -= "invalid-input";
    }

    function showValidationError() {
        var signUpAlert = "Name: " + nameError + "\nLast Name: " + lastNameError + "\nDNI: " + dniError + 
        "\nDate: " + dateError + "\nPhone: " + phoneError + "\nAddress: " + addressError + "\nLocation: " +
        locationError + "\nPost Code: " + postCodeError + "\nEmail: " + emailError + "\nPfassword: " +
        passwordError + "\nRepeat password: " + confirmPasswordError;
        alert(signUpAlert);
    }

    name.addEventListener("blur", showNameError);
    name.addEventListener("focus", hideNameError);
    lastName.addEventListener("blur", showLastNameError);
    lastName.addEventListener("focus", hideLastNameError);
    dni.addEventListener("blur", showDniError);
    dni.addEventListener("focus", hideDniError);
    date.addEventListener("blur", showDateError);
    date.addEventListener("focus", hideDateError);
    phone.addEventListener("blur", showPhoneError);
    phone.addEventListener("focus", hidePhoneError);
    address.addEventListener("blur", showAddressError);
    address.addEventListener("focus", hideAddressError);
    location.addEventListener("blur", showLocationError);
    location.addEventListener("focus", hideLocationError);
    postCode.addEventListener("blur", showPostCodeError);
    postCode.addEventListener("focus", hidePostCodeError);
    email.addEventListener("blur", showEmailError);
    email.addEventListener("focus", hideEmailError);
    password.addEventListener("blur", showPasswordError);
    password.addEventListener("focus", hidePasswordError);
    confirmPassword.addEventListener("blur", showConfirmPasswordError);
    confirmPassword.addEventListener("focus", hideConfirmPasswordError);
    signUpButton.addEventListener("click", showValidationError);
    }