var nameMessage = "";
var lastNameMessage = "";
var docNumberMessage = "";
var dateMessage = "";
var phoneMessage = "";
var directionMessage = "";
var locationMessage = "";
var postalCodeMessage = "";
var signUpEmailMessage = "";
var confirmEmailMessage = "";
var signUpPasswordMessage = "";
var confirmPasswordMessage = "";
var signUpAlert = "";

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
};

window.onload = function(){
    var name = document.getElementById("first-name-field");
    var nameError = document.getElementsByClassName("first-name-na")[0];
    var lastName = document.getElementById("last-name-field");
    var lastNameError = document.getElementsByClassName("last-name-na")[0];
    var docNumber = document.getElementById("dni-field");
    var docError = document.getElementsByClassName("dni-na")[0];
    var date = document.getElementById("birthday-field");
    var dateError = document.getElementsByClassName("birthday-na")[0];
    var phone = document.getElementById("phone-number-field");
    var phoneError = document.getElementsByClassName("phone-number-na")[0];
    var direction = document.getElementById("address-field");
    var directionError = document.getElementsByClassName("address-na")[0];
    var location = document.getElementById("location-field");
    var locationError = document.getElementsByClassName("location-na")[0];
    var postalCode = document.getElementById("post-code-field");
    var postalCodeError = document.getElementsByClassName("post-code-na")[0];
    var signUpEmail = document.getElementById("email-field");
    var signUpEmailError = document.getElementsByClassName("email-na")[0];
    var confirmEmail = document.getElementById("confirm-email-field");
    var confirmEmailError = document.getElementsByClassName("confirm-email-na")[0];
    var signUpPassword = document.getElementById("password-field");
    var signUpPasswordError = document.getElementsByClassName("password-na")[0];
    var confirmPassword = document.getElementById("confirm-password-field");
    var confirmPasswordError = document.getElementsByClassName("confirm-password-na")[0];
    var signUpSubmit = document.getElementById("signUpSubmit");
    var dateFormat = date.value.substring(5, 7) + "/" + date.value.substring(8, 10) + "/" + date.value.substring(0, 4);

    function showNameErrors() {
        if (!validateJustLetters(name.value) || !validateStringLength (name.value, 3) || validateJustNumbers(name.value)) {
            nameError.style.visibility = "visible";
            name.classList = "invalid-input";
            nameMessage = nameError.textContent;
        } else {
            nameMessage = name.value;
        } 
    };

    function hideNameErrors() {
        nameError.style.visibility = "hidden";
        name.classList -= "invalid-input";
    };

    function showLastNameErrors() {
        if (!validateJustLetters(lastName.value) || !validateStringLength (lastName.value, 3) ||
        validateJustNumbers(lastName.value)) {
            lastNameError.style.visibility = "visible";
            lastName.classList = "invalid-input";
            lastNameMessage = lastNameError.textContent;
        } else {
            lastNameMessage = lastName.value;
        }
    };
  
    function hideLastNameErrors() {
        lastNameError.style.visibility = "hidden";
        lastName.classList -= "invalid-input";
    };

    function showDocErrors() {
    if (!validateJustNumbers(docNumber.value) || !validateStringLength(docNumber.value, 7) ||
        validateJustLetters(docNumber.value)) {
        docError.style.visibility = "visible";
        docNumber.classList = "invalid-input";
        docNumberMessage = docError.textContent;
    } else {
        docNumberMessage = docNumber.value;
    }
    };

    function hideDocErrors() {
        docError.style.visibility = "hidden";
        docNumber.classList -= "invalid-input";
    };

    function showDateErrors() {
        if (!validateDate(date.value)) {
            dateError.style.visibility = "visible";
            date.classList = "invalid-input";
            dateMessage = dateError.textContent;
        } else {
            dateMessage = date.value;
        }
    };

    function hideDateErrors() {
        dateError.style.visibility = "hidden";
        date.classList -= "invalid-input";
    };

    function showPhoneErrors() {
        if (!validateJustNumbers(phone.value) || validateJustLetters(phone.value) || phone.value.length != 10) {
            phoneError.style.visibility = "visible";
            phone.classList = "invalid-input";
            phoneMessage = phoneError.textContent;
        } else {
            phoneMessage = phone.value;
        }
    };

    function hidePhoneErrors() {
        phoneError.style.visibility = "hidden";
        phone.classList -= "invalid-input";
    };

    function showDirectionErrors() {
        if (!validateTextNumberAndSpaces(direction.value) || !validateStringLength (direction.value, 4)) {
            directionError.style.visibility = "visible";
            direction.classList = "invalid-input";
            directionMessage = directionError.textContent;
        } else {
            directionMessage = direction.value;
        }
    };

    function hideDirectionErrors() {
        directionError.style.visibility = "hidden";
        direction.classList -= "invalid-input";
    };

    function showLocationErrors() {
        if (!validateJustLetters(location.value) || !validateJustNumbers(location.value) ||
            !(countLetters(location.value) > 3)) {
            locationError.style.visibility = "visible";
            location.classList = "invalid-input";
            locationMessage = locationError.textContent;
        } else {
            locationMessage = location.value;
        }
    };

    function hideLocationErrors() {
        locationError.style.visibility = "hidden";
        location.classList -= "invalid-input";
    };

    function showPostalCodeErrors() {
        if (!validateJustNumbers(postalCode.value) || validateJustLetters(postalCode.value) || postalCode.value.length < 4 || 
        postalCode.value.length > 5) {
            postalCodeError.style.visibility = "visible";
            postalCode.classList = "invalid-input";
            postalCodeMessage = postalCodeError.textContent;
        } else {
            postalCodeMessage = postalCode.value;
        }
    };

    function hidePostalCodeErrors() {
        postalCodeError.style.visibility = "hidden";
        postalCode.classList -= "invalid-input";
    };

    function showSignUpEmailErrors() {
        if(!validateSignUpEmail(signUpEmail.value)) {
            signUpEmailError.style.visibility = "visible";
            signUpEmail.classList = "invalid-input";
            signUpEmailMessage = signUpEmailError.textContent;
        } else {
            signUpEmailMessage = signUpEmail.value;
        }
    };

    function hideSignUpEmailErrors() {
        signUpEmailError.style.visibility = "hidden";
        signUpEmail.classList -= "invalid-input";
    };

    function showConfirmEmailErrors() {
        if ((signUpEmail.value !== confirmEmail.value) && confirmEmail.value !== NaN) {
            confirmEmailError.style.visibility = "visible";
            confirmEmail.classList = "invalid-input";
            confirmEmailMessage = confirmEmailError.textContent;
        } else {
            confirmEmailMessage = confirmEmail.value;
        }
    };

    function hideConfirmEmailErrors() {
        confirmEmailError.style.visibility = "hidden";
        confirmEmail.classList -= "invalid-input";
    };

    function showSignUpPasswordErrors() {
        if (!validateJustLetters(signUpPassword.value) || !validateJustNumbers(signUpPassword.value) || 
        !validateStringLength(signUpPassword.value, 7)) {
            signUpPasswordError.style.visibility = "visible";
            signUpPassword.classList = "invalid-input";
            signUpPasswordMessage = signUpPasswordError.textContent;
        } else {
            signUpPasswordMessage = signUpPassword.value;
        }
    };

    function hideSignUpPasswordErrors () {
        signUpPasswordError.style.visibility = "hidden";
        signUpPassword.classList -= "invalid-input";
    };

    function showConfirmPasswordErrors() {
        if ((signUpPassword.value !== confirmPassword.value) && (confirmPassword.value !== NaN)) {
            confirmPasswordError.style.visibility = "visible";
            confirmPassword.classList = "invalid-input";
            confirmPasswordMessage = confirmPasswordError.textContent;
        } else {
            confirmPasswordMessage = confirmPassword.value;
        }
    };

    function hideConfirmPasswordErrors() {
        confirmPasswordError.style.visibility = "hidden";
        confirmPassword.classList -= "invalid-input";
    };

    function showValidationMessages(event) {
        var signUpAlert = 
        "Name: " + nameMessage +
        "\nLast Name: " + lastNameMessage +
        "\nDNI: " + docNumberMessage + 
        "\nDate: " + dateMessage +
        "\nPhone: " + phoneMessage +
        "\nDirection: " + directionMessage +
        "\nLocation: " + locationMessage +
        "\nPost Code: " + postalCodeMessage +
        "\nEmail: " + signUpEmailMessage +
        "\nConfirm email: " + confirmEmailMessage +
        "\nPassword: " + signUpPasswordMessage;
        event.preventDefault();
        alert(signUpAlert)
        submitInfo();
    };

    function finalValidation() {
        if(nameMessage == name.value && lastNameMessage == lastName.value && docNumberMessage == docNumber.value &&
            dateMessage == date.value && phoneMessage == phone.value && directionMessage == direction.value &&
            locationMessage == location.value && postalCodeMessage == postalCode.value && signUpEmailMessage ==
            signUpEmail.value && confirmEmailMessage == confirmEmail.value && signUpPasswordMessage == signUpPassword.value && confirmPasswordMessage ==
            confirmPassword.value) {
                return true;
            }
        }

    function submitInfo() {
        if (finalValidation()) {
            fetch("https://basp-m2022-api-rest-server.herokuapp.com/signup?" +
                    "name=" + name.value +
                    "&lastName=" + lastName.value +
                    "&email=" + signUpEmail.value +
                    "&password=" + signUpPassword.value +
                    "&dni=" + docNumber.value +
                    "&dob=" + dateFormat +
                    "&phone=" + phone.value +
                    "&address=" + direction.value +
                    "&city=" + location.value +
                    "&zip=" + postalCode.value)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    if (data.success == true) {
                        alert("Request done!\n" + signUpAlert + "\n" + data.msg);
                        saveCredentialsLocalStorage();
                    } else {
                        alert(data.msg);
                    }
                }).catch(function (error) {
                    alert(error.msg);
                });
        } else {
            alert("One or more inputs are invalid.\n" + signUpAlert +
                "\n??Check the inputs errors before you continue!")
        }
    }

    function saveCredentialsLocalStorage() {
        localStorage.setItem("First Name", name.value);
        localStorage.setItem("Last Name", lastName.value);
        localStorage.setItem("Password", signUpPassword.value);
        localStorage.setItem("DNI", docNumber.value);
        localStorage.setItem("Birthday", dateFormat);
        localStorage.setItem("Phone", phone.value);
        localStorage.setItem("Address", direction.value);
        localStorage.setItem("Location", location.value);
        localStorage.setItem("Post code", postalCode.value);
        localStorage.setItem("Email", signUpEmail.value);
        localStorage.setItem("Password", signUpPassword.value);
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
    signUpSubmit.addEventListener("click", showValidationMessages);
}